// Compiler-backed, bounded may-call graph. Facts are conditional, not proof of execution.
import ts from 'typescript'
import path from 'node:path'
import { compact, hash, json, slug, chunks, sourceLink, escape, GENERATED } from './lib.mjs'
const visit=(node,cb)=>{if(!node)return;cb(node);ts.forEachChild(node,n=>visit(n,cb))}
const unwrap=node=>{while(node && (ts.isParenthesizedExpression(node)||ts.isAsExpression(node)||ts.isNonNullExpression(node)))node=node.expression;return node}
const name=node=>node && (ts.isIdentifier(node)||ts.isStringLiteralLike(node)||ts.isNumericLiteral(node)) ? node.text : null
const dedup=items=>[...new Map(items.map(x=>[JSON.stringify(x),x])).values()]
const KEY_TABLES={ctrlKeys:'Ctrl/Cmd+',shiftCtrlKeys:'Ctrl/Cmd+Shift+',altKeys:'Alt+',keys:'',previewShortcuts:'',previewCtrlShortcuts:'Ctrl/Cmd+'}
const NATIVE=/^(?:get|clone|Number|String|Boolean|Math\..*|Object\..*|Array\..*|JSON\..*|console\..*|parseInt|parseFloat|isNaN|clearTimeout|clearInterval|Date\..*|Promise\..*|encodeURIComponent|decodeURIComponent|uid)$/
const NATIVE_METHOD=/^(?:map|filter|find|findIndex|includes|some|every|forEach|reduce|flat|flatMap|slice|splice|push|pop|shift|unshift|join|split|replace|replaceAll|match|matchAll|test|trim|toLowerCase|toUpperCase|sort|reverse|indexOf|lastIndexOf|startsWith|endsWith|concat|then|catch|finally|preventDefault|stopPropagation|stopImmediatePropagation|closest|querySelector|querySelectorAll|getAttribute|setAttribute|removeAttribute|add|remove|toggle|contains|blur|focus|set|get|has|delete|entries|values|keys|round|floor|ceil|abs|min|max|log|warn|error|info|debug|toString|padStart|charAt|substring|substr)$/
export function analyzeEvents({contexts,checker,symbolAt,storeOf,ref},model){
    const functions=[],byNode=new Map(),byFile=new Map(),tables=new Map(),ctxBySf=new Map([...contexts.values()].map(c=>[c.sf,c]))
    const location=(c,n)=>ref(c,typeof n==='number'?n:n.getStart(n.getSourceFile()))
    const text=(c,n)=>n ? compact(n.getText(n.getSourceFile()),500) : ''
    function fnName(n){
        if(n.name)return n.name.getText()
        if(ts.isVariableDeclaration(n.parent)||ts.isPropertyAssignment(n.parent))return n.parent.name.getText()
        return '<callback>'
    }
    for(const c of contexts.values()){
        const locals=new Map();byFile.set(c.file,locals)
        visit(c.sf,n=>{
            if(ts.isVariableDeclaration(n)&&n.initializer && ts.isObjectLiteralExpression(unwrap(n.initializer))){
                const table={file:c.file,name:name(n.name),node:n,entries:new Map()}
                for(const p of unwrap(n.initializer).properties)if(p.name)table.entries.set(name(p.name)||p.name.getText(),p)
                tables.set(c.file+'#'+table.name,table)
            }
            if(ts.isFunctionLike(n)&&n.body){
                const f={id:c.file+':'+n.getStart(c.sf),...location(c,n),endLine:location(c,n.end).line,name:fnName(n),node:n,c,calls:[],effects:[],guards:[]}
                functions.push(f);byNode.set(n,f)
                if(n.name)locals.set(name(n.name),n)
                if(ts.isVariableDeclaration(n.parent))locals.set(name(n.parent.name),n.parent)
            }
            if(ts.isVariableDeclaration(n)||ts.isClassDeclaration(n)||ts.isFunctionDeclaration(n))if(n.name&&!locals.has(name(n.name)))locals.set(name(n.name),n)
        })
    }
    function declaration(c,n){
        let sym;try{sym=symbolAt(ts.isPropertyAccessExpression(n)?n.name:n)}catch{}
        const d=sym?.valueDeclaration||sym?.declarations?.[0]
        if(d && ctxBySf.has(d.getSourceFile()))return d
        if(ts.isIdentifier(n)){
            const b=c.bindings.get(n.text)
            return b?.target ? byFile.get(b.target)?.get(b.imported) : byFile.get(c.file)?.get(n.text)
        }
        if(ts.isPropertyAccessExpression(n)){
            const outer=declaration(c,n.expression),base=outer&&ts.isVariableDeclaration(outer)?unwrap(outer.initializer):outer
            if(base && (ts.isClassDeclaration(base)||ts.isClassExpression(base)))return base.members.find(m=>name(m.name)===n.name.text)
            if(base && ts.isObjectLiteralExpression(base))return base.properties.find(p=>name(p.name)===n.name.text)
        }
        return null
    }
    function targetFn(c,n,seen=new Set()){
        n=unwrap(n);if(!n||seen.has(n))return null;seen.add(n)
        if(byNode.has(n))return byNode.get(n)
        if(ts.isVariableDeclaration(n)||ts.isPropertyAssignment(n))return targetFn(c,n.initializer,seen)
        if(ts.isMethodDeclaration(n))return byNode.get(n)
        const d=declaration(c,n)
        if(d)return targetFn(ctxBySf.get(d.getSourceFile())||c,d,seen)
        return null
    }
    function tableFor(c,n){
        const d=declaration(c,n)
        return d && ts.isVariableDeclaration(d)?tables.get((ctxBySf.get(d.getSourceFile())||c).file+'#'+name(d.name)):null
    }
    function conditions(c,node){
        const result=[]
        for(let p=node;p&&p!==c.sf;p=p.parent){
            if(ts.isIfStatement(p))result.push({...location(c,p),expression:text(c,p.expression),branch:node.pos>=p.thenStatement.pos&&node.end<=p.thenStatement.end?'then':'else/enclosing'})
            if(ts.isConditionalExpression(p))result.push({...location(c,p),expression:text(c,p.condition),branch:'conditional'})
        }
        return result
    }
    function resolvedStore(c,node){
        let store;try{store=storeOf(c,node)}catch{}
        if(store)return store
        if(ts.isIdentifier(node)){
            const key=node.text.replace(/^\$/,''),binding=c.bindings.get(key)
            return model.stores.find(s=>s.name===(binding?.imported||key)&&s.file===(binding?.target||c.file))||null
        }
        return null
    }
    function edges(c,node){
        const result=[]
        function walk(n){
            if(!n)return
            if(ts.isFunctionLike(n)&&n!==node){const f=byNode.get(n);if(f)result.push({...location(c,n),expression:f.name,targets:[f.id],kind:'callback',reason:'callback may run later or conditionally'});return}
            if(ts.isCallExpression(n)){
                const expr=text(c,n.expression),method=ts.isPropertyAccessExpression(n.expression)?n.expression.name.text:null
                const f=targetFn(c,n.expression)
                const entry={...location(c,n),expression:expr,args:n.arguments.map(a=>text(c,a)),targets:f?[f.id]:[],kind:'call',conditions:conditions(c,n)}
                // Concrete dispatch calls must select one table entry, never all commands.
                if(['menuClick','triggerAction'].includes(expr)){
                    const table=tables.get(expr==='menuClick'?'src/frontend/components/context/menuClick.ts#clickActions':'src/frontend/components/actions/api.ts#API_ACTIONS')
                    let key=n.arguments[0]&&ts.isStringLiteralLike(n.arguments[0])?n.arguments[0].text:null
                    if(expr==='triggerAction'&&n.arguments[0]&&ts.isObjectLiteralExpression(n.arguments[0])){const p=n.arguments[0].properties.find(p=>name(p.name)==='action');if(p&&ts.isStringLiteralLike(p.initializer))key=p.initializer.text}
                    if(key&&table?.entries.has(key)){const handler=targetFn(contexts.get(table.file),table.entries.get(key));if(handler)entry.dispatchTarget=handler.id}
                }
                if(!f && ts.isElementAccessExpression(n.expression)){
                    const table=tableFor(c,n.expression.expression),key=name(n.expression.argumentExpression)
                    if(table){entry.lookupTable=table.file+'#'+table.name;entry.lookupEntryCount=table.entries.size;if(ts.isStringLiteralLike(n.expression.argumentExpression)||ts.isNumericLiteral(n.expression.argumentExpression)){
                        const tf=targetFn(contexts.get(table.file),table.entries.get(key));if(tf)entry.targets=[tf.id]
                    }else entry.reason='runtime lookup key; concrete entries separately inventoried'}
                }
                const store=ts.isPropertyAccessExpression(n.expression)?resolvedStore(c,n.expression.expression):null
                const endpoint=c.ipc.find(e=>e.line===entry.line&&e.role==='send')
                if(store && ['set','update'].includes(method))entry.terminal='store'
                else if(endpoint)entry.terminal='ipc'
                else if(/^(?:setTimeout|setInterval|requestAnimationFrame|queueMicrotask)$/.test(expr))entry.terminal='scheduler'
                else if(NATIVE.test(expr)||method&&NATIVE_METHOD.test(method)||/^(?:document|window|navigator|e|event|element|elem)\./.test(expr))entry.terminal='platform/read'
                else if(/^(?:fetch|.*axios\..*|.*(?:writeFile|appendFile|send|emit|play|pause|load|close|open|destroy|removeListener|addEventListener))$/.test(expr))entry.terminal='boundary'
                if(!entry.targets.length&&!entry.terminal&&!entry.reason)entry.reason='unresolved receiver, alias, callback parameter or external implementation'
                result.push(entry)
            }
            ts.forEachChild(n,walk)
        }
        walk(node);return result
    }
    function owner(c,line){return functions.filter(f=>f.c===c&&f.line<=line&&f.endLine>=line).sort((a,b)=>(a.node.end-a.node.pos)-(b.node.end-b.node.pos))[0]}
    for(const f of functions){
        f.calls=edges(f.c,f.node.body)
        visit(f.node.body,n=>{if(ts.isIfStatement(n))f.guards.push({...location(f.c,n),expression:text(f.c,n.expression),then:compact(n.thenStatement.getText(),180)})})
        for(const call of f.calls){
            const e=call.expression
            if(/(?:^history$|\.history$)/.test(e))f.effects.push({...call,kind:'history',historyType:/\bid\s*:\s*["']([^"']+)/.exec(call.args[0])?.[1]||'dynamic'})
            if(/^(?:setOutput|updateOut|clearAll|clearSlide|clearBackground|clearOverlays|clearOverlay|restoreOutput)$|(?:^|\.)OutputHelper\./.test(e))f.effects.push({...call,kind:'presentation'})
            if(/writeFile|appendFile|\.writeText|saveFile|writeToFile/.test(e))f.effects.push({...call,kind:'file-write'})
            if(/(?:^fetch$|axios\.|\.fetch$|sendRestCommand|obsTalk|\.request$|\.emit$)/.test(e))f.effects.push({...call,kind:'network'})
        }
    }
    for(const c of contexts.values()){
        for(const w of c.stores.filter(w=>['set','update','assignment','get-mutation','bind','assignment-template','keyed-set','keyed-update'].includes(w.kind))){const f=owner(c,w.line);if(f)f.effects.push({...w,kind:'store-write'})}
        for(const e of c.ipc.filter(e=>e.role==='send')){const f=owner(c,e.line);if(f)f.effects.push({...e,kind:'ipc'})}
    }
    const events=[]
    function add(c,node,kind,handler,extra={}){
        const pos=typeof node==='number'?node:node.getStart(c.sf),entry={id:'event-'+hash(c.file+':'+pos+':'+kind+':'+(extra.key||extra.command||extra.menuId||'')).slice(0,18),...location(c,pos),kind,handler:compact(handler,500),conditions:typeof node==='number'?[]:conditions(c,node),...extra}
        events.push(entry);return entry
    }
    const parseExpr=(c,expression,pos=1)=>{const prefix=c.source.slice(0,Math.max(0,pos-1)).replace(/[^\r\n]/g,' ');const sf=ts.createSourceFile('event.ts',prefix+'('+expression+')',ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);return unwrap(sf.statements[0]?.expression)}
    function root(c,expression,pos=1){
        const node=parseExpr(c,expression,pos),f=node&&targetFn(c,node),directEffects=[]
        if(node&&!f)visit(node,n=>{
            if(ts.isBinaryExpression(n)&&n.operatorToken.kind>=ts.SyntaxKind.FirstAssignment&&n.operatorToken.kind<=ts.SyntaxKind.LastAssignment){
                let base=n.left;while(base&&(ts.isPropertyAccessExpression(base)||ts.isElementAccessExpression(base)))base=base.expression
                const store=base&&resolvedStore(c,base);if(store)directEffects.push({...location(c,n),kind:'store-write',store:store.id,expression:text(c,n),depth:0,via:'inline assignment'})
            }
        })
        return {roots:f?[f.id]:[],calls:f?[]:node?edges(c,node):[],directEffects}
    }
    const rootsByEvent=new Map()
    for(const c of contexts.values()){
        for(const table of [...tables.values()].filter(t=>t.file===c.file)){
            if(KEY_TABLES[table.name]!==undefined){
                for(const [key,p]of table.entries){const handler=p.initializer||p;const f=targetFn(c,handler),event=add(c,p,'keyboard',text(c,handler),{key:KEY_TABLES[table.name]+(key===' '?'Space':key),table:table.name,conditions:f?.guards||[]});rootsByEvent.set(event.id,{roots:f?[f.id]:[],calls:[]})}
            }
            if(['dropActions','slideDrop','editDrop','projectDrop'].includes(table.name))for(const [dropId,p]of table.entries){const f=targetFn(c,p),e=add(c,p,'drop-route',text(c,p.initializer),{dropId,table:table.name});rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[]})}
            if(table.name==='API_ACTIONS')for(const [command,p]of table.entries){const f=targetFn(c,p),event=add(c,p,'action',text(c,p.initializer),{command,payloadType:p.initializer?.parameters?.[0]?.type?.getText()||'none/inferred'});rootsByEvent.set(event.id,{roots:f?[f.id]:[],calls:[]})}
        }
        visit(c.sf,n=>{
            if(ts.isCallExpression(n)){
                const expr=text(c,n.expression)
                if(/\.addEventListener$/.test(expr)&&n.arguments[0]&&ts.isStringLiteralLike(n.arguments[0])&&/^key/.test(n.arguments[0].text)){
                    const handler=n.arguments[1],f=targetFn(c,handler),e=add(c,n,'keyboard',text(c,handler),{key:'dynamic',eventName:n.arguments[0].text,attachment:expr});rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[]})
                }
                if(expr==='customActionActivation'){
                    const id=n.arguments[0]&&ts.isStringLiteralLike(n.arguments[0])?n.arguments[0].text:text(c,n.arguments[0]),f=targetFn(c,n.expression),e=add(c,n,'trigger',expr,{activationId:id});rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[]})
                }
                if(['setTimeout','setInterval'].includes(expr)){
                    const cb=n.arguments[0],f=targetFn(c,cb),e=add(c,n,'automatic',text(c,cb),{eventName:expr,delay:text(c,n.arguments[1]),origin:owner(c,location(c,n).line)?.name||'<module>'});rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[]})
                }
                if(/checkNextAfterMedia|checkStartupActions|startupActions|checkCalendar|checkScheduled/.test(expr)){
                    const f=targetFn(c,n.expression),e=add(c,n,'automatic',expr,{eventName:expr});rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[]})
                }
            }
        })
        function template(n,parents=[]){
            if(!n||typeof n!=='object')return
            if(Array.isArray(n)){n.forEach(v=>template(v,parents));return}
            const next=n.type?[...parents,n]:parents
            const isDirective=n.type==='OnDirective',modern=n.type==='Attribute'&&/^on(?:click|key|drag|drop|ended|timeupdate)/.test(n.name||'')
            if(isDirective||modern){
                const eventName=isDirective?n.name:n.name.slice(2),kind=eventName==='click'?'click':/^key/.test(eventName)?'keyboard':/^(?:drag|drop)/.test(eventName)?'drag-drop':/^(?:ended|timeupdate|loadeddata|canplay)/.test(eventName)?'automatic':null
                if(kind){
                    const exp=n.expression||n.value?.find(v=>v.expression)?.expression,handler=exp?c.source.slice(exp.start,exp.end):'<forwarded event>'
                    const element=parents.findLast(p=>['RegularElement','Component','SvelteWindow','SvelteDocument','SvelteBody'].includes(p.type))
                    const guards=parents.filter(p=>p.type==='IfBlock').map(p=>({...location(c,p.start),expression:c.source.slice(p.test.start,p.test.end),branch:'template if/else enclosing'}))
                    const attrs=(element?.attributes||[]).filter(a=>!['OnDirective'].includes(a.type)).map(a=>compact(c.source.slice(a.start,a.end),240))
                    const e=add(c,n.start,kind,handler,{eventName,element:element?.name||element?.type||'unknown',modifiers:n.modifiers||[],key:kind==='keyboard'?'dynamic':undefined,conditions:guards,attributes:attrs,componentTarget:c.bindings.get(element?.name)?.target||null,forwarded:!exp})
                    rootsByEvent.set(e.id,exp?root(c,handler,exp.start):{roots:[],calls:[],unresolved:[{...location(c,n.start),expression:handler,reason:'component forwards event; parent listener depends on instance'}]})
                }
            }
            if(n.type==='Component'&&c.bindings.get(n.name)?.target?.endsWith('/DropArea.svelte')){
                const idAttr=n.attributes.find(a=>a.name==='id'),target=idAttr?compact(c.source.slice(idAttr.start,idAttr.end)):'dynamic'
                const e=add(c,n.start,'drop-target','DropArea.dropEvent → ondrop → dropActions',{dropTarget:target,attributes:n.attributes.map(a=>compact(c.source.slice(a.start,a.end),240))})
                const dropContext=contexts.get('src/frontend/components/system/DropArea.svelte')
                rootsByEvent.set(e.id,dropContext?root(dropContext,'dropEvent'):{roots:[],calls:[]})
            }
            if(n.type==='Attribute'&&['draggable' ,'ondrop','ondragstart'].includes(n.name)){
                const e=add(c,n.start,'drag-source',c.source.slice(n.start,n.end),{attributes:parents.findLast(p=>p.attributes)?.attributes.map(a=>compact(c.source.slice(a.start,a.end),240))||[]});rootsByEvent.set(e.id,{roots:[],calls:[]})
            }
            for(const[k,v]of Object.entries(n))if(!['parent','loc','metadata','comments'].includes(k))template(v,next)
        }
        template(c.template?.fragment)
    }
    // Plain key branches and formatting gates are events even without a table handler.
    const shortcut=contexts.get('src/frontend/utils/shortcuts.ts')
    for(const f of functions.filter(f=>f.c===shortcut&&f.name==='keydown'))for(const guard of f.guards){
        if(/e\.key|Number\(e\.key/.test(guard.expression)){const key=/e\.key\s*===\s*["']([^"']*)/.exec(guard.expression)?.[1]||'number/custom',e=add(shortcut,f.node,'keyboard',f.name,{key:key===' '?'Space':key,table:'plain-key-branch',line:guard.line,conditions:[guard]});rootsByEvent.set(e.id,{roots:[f.id],calls:[]})}
    }
    const formatting=shortcut?.source.match(/const formattingKeys = \[([^\]]+)\]/)
    if(formatting)for(const key of formatting[1].matchAll(/["']([^"']+)["']/g)){
        const pos=shortcut.source.indexOf('const formattingKeys'),e=add(shortcut,pos,'keyboard','isFormattingKey (delegate to editor)',{key:'Ctrl/Cmd+'+key[1],table:'formattingKeys'});rootsByEvent.set(e.id,root(shortcut,'isFormattingKey'))
    }
    const menus=contexts.get('src/frontend/components/context/contextMenus.ts'),menuTable=tables.get(menus?.file+'#contextMenuItems'),clickTable=tables.get('src/frontend/components/context/menuClick.ts#clickActions'),loadTable=tables.get('src/frontend/components/context/loadItems.ts#loadActions')
    const layouts=[...tables.values()].filter(t=>['contextMenuLayouts','contextMenuGroups'].includes(t.name))
    for(const[id,p]of menuTable?.entries||[]){
        const handler=clickTable?.entries.get(id),f=handler&&targetFn(contexts.get(clickTable.file),handler)
        const membership=layouts.flatMap(t=>[...t.entries].filter(([,entry])=>new RegExp('["\']'+id+'["\']').test(entry.getText())).map(([layout,n])=>({...location(contexts.get(t.file),n),layout,items:text(contexts.get(t.file),n.initializer)})))
        const loaders=[...p.getText().matchAll(/LOAD_([\w]+)/g)].map(m=>m[1]).map(key=>{const n=loadTable?.entries.get(key);return {id:key,...(n?location(contexts.get(loadTable.file),n):{}),expression:n?text(contexts.get(loadTable.file),n):'unresolved loader'}})
        const appearances=[]
        for(const c of contexts.values())if(c.template){for(const membershipItem of membership){const matches=[...c.source.matchAll(new RegExp('#'+membershipItem.layout+'(?:[\\s"\'`}]|$)','g'))];for(const m of matches)appearances.push({...location(c,m.index),expression:compact(c.source.slice(Math.max(0,m.index-90),m.index+140))})}}
        const visibility=functions.filter(f=>f.file==='src/frontend/components/context/ContextMenu.svelte'&&f.name==='checkIfEnabled').flatMap(f=>f.guards.filter(g=>g.expression.includes('"'+id+'"')).map(g=>({...g,result:g.then})))
        const itemConditions=tables.get('src/frontend/components/context/ContextItem.svelte#conditions'),conditionNode=itemConditions?.entries.get(id)
        if(conditionNode){const c=contexts.get(itemConditions.file);visibility.push({...location(c,conditionNode),expression:compact(text(c,conditionNode),1200),reason:'ContextItem sets hide/disabled/enabled from this item-specific condition'})}
        const e=add(menus,p,'menu' ,f?.name|| (loaders.length?'submenu loader':'<no direct handler>'),{menuId:id,definition:text(menus,p),memberships:membership,loaders,appearances,visibility,handlerRef:f?{file:f.file,line:f.line}:null,conditions:[{file:'src/frontend/components/context/menuClick.ts',line:137,expression:'clickActions[id] exists; enabled is passed to handler, not a dispatch guard'},{file:'src/frontend/components/context/ContextMenu.svelte',line:functions.find(f=>f.file==='src/frontend/components/context/ContextMenu.svelte'&&f.name==='checkIfEnabled')?.line||1,expression:'ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem'}]})
        rootsByEvent.set(e.id,{roots:f?[f.id]:[],calls:[],unresolved:!f&&!loaders.length?[{file:e.file,line:e.line,expression:id,reason:'no direct clickActions handler; may be container/external/native role'}]:[]})
    }
    // Input routes retain exact call sites; shared transport does not prove every command is permitted.
    const dropRules=[...tables.values()].filter(t=>t.file.endsWith('/drop.ts')&&['areas','areaChildren'].includes(t.name)).flatMap(t=>[...t.entries].map(([target,n])=>({table:t.name,target,...location(contexts.get(t.file),n),accepted:text(contexts.get(t.file),n.initializer)})))
    const inputs=functions.flatMap(f=>f.calls.filter(c=>/^(triggerAction|runAction|runActionId|runActionByName|customActionActivation|oscToAPI)$/.test(c.expression)||/API_ACTIONS\[/.test(c.expression)||/API_TRIGGER2|ACTION_MAIN|["']API:/.test((c.args||[]).join(' '))).map(c=>({...c,origin:f.name,input:f.file,
        route:/src\/server\/remote\//.test(f.file)?'remote':/src\/server\/stage\//.test(f.file)?'stage':/src\/server\/controller\//.test(f.file)?'controller':f.file.endsWith('/midi.ts')?'MIDI':f.file.endsWith('/apiOSC.ts')||c.expression==='oscToAPI'?'OSC':f.file==='src/electron/utils/api.ts'?'REST/WebSocket/OSC':f.file.endsWith('/emitters.ts')?'emitter':c.expression==='customActionActivation'?'automatic activation':'internal dispatcher',
        command:/["']API:(\w+)/.exec((c.args||[]).join(' '))?.[1]||null,
        limits:'Configured commands, access checks, network listeners and mounted components determine reachability.'})))
    const activationContext=contexts.get('src/frontend/components/actions/customActivation.ts'),activations=[]
    if(activationContext)visit(activationContext.sf,n=>{if(ts.isPropertyAssignment(n)&&name(n.name)==='id'&&ts.isStringLiteralLike(n.initializer))activations.push({id:n.initializer.text,...location(activationContext,n),callSites:events.filter(e=>e.activationId===n.initializer.text).map(e=>({file:e.file,line:e.line,eventId:e.id}))})})
    for(const e of events.filter(e=>e.forwarded)){
        const parents=events.filter(p=>p.componentTarget===e.file&&p.eventName===e.eventName&&!p.forwarded)
        e.forwardTargets=parents.map(p=>({id:p.id,file:p.file,line:p.line}))
        const seed=rootsByEvent.get(e.id)
        for(const p of parents){const parentSeed=rootsByEvent.get(p.id);seed.roots.push(...parentSeed.roots);seed.calls.push(...parentSeed.calls)}
        if(parents.length)seed.unresolved=[{file:e.file,line:e.line,expression:e.handler,reason:'forwarded targets resolved as instance union; mounted parent and propagation are conditional'}]
    }
    const byId=new Map(functions.map(f=>[f.id,f]))
    function follow(seed){
        const effects=[...(seed.directEffects||[])],unresolved=[...(seed.unresolved||[])],chain=[],depthCuts=[],seen=new Map()
        function step(id,depth,via,dispatchTarget){
            if(depth>6){depthCuts.push({target:id,via,reason:'six-level depth limit'});return}
            if(seen.has(id)&&seen.get(id)<=depth)return;seen.set(id,depth)
            const f=byId.get(id);if(!f)return
            chain.push({id,name:f.name,file:f.file,line:f.line,depth,via})
            effects.push(...f.effects.map(e=>({...e,depth,via:f.id})))
            for(const call of f.calls){
                if(call.lookupTable && dispatchTarget && /#(?:clickActions|API_ACTIONS)$/.test(call.lookupTable)){step(dispatchTarget,depth+1,call.expression);continue}
                if(call.reason&&!call.targets.length&&!call.terminal)unresolved.push(call)
                for(const t of call.targets)step(t,depth+1,call.expression,call.dispatchTarget)
            }
        }
        for(const id of seed.roots)step(id,0,'event')
        for(const call of seed.calls){
            if(call.reason&&!call.terminal&&!call.targets.length)unresolved.push(call)
            for(const t of call.targets)step(t,1,call.expression,call.dispatchTarget)
            if(call.terminal==='store'){
                const method=/^(.*)\.(?:set|update)$/.exec(call.expression),store=method&&model.stores.find(s=>s.name===method[1]&&(s.file===call.file||contexts.get(call.file)?.bindings.get(method[1])?.target===s.file))
                effects.push({...call,kind:'store-write',store:store?.id||'unresolved template store'})
            }
            if(call.terminal==='ipc')effects.push({...call,kind:'ipc'})
            if(/^(?:setOutput|updateOut|clearAll|clearSlide|clearBackground|clearOverlays)$|OutputHelper\./.test(call.expression))effects.push({...call,kind:'presentation'})
            if(call.expression==='history')effects.push({...call,kind:'history',historyType:/\bid\s*:\s*["']([^"']+)/.exec(call.args[0])?.[1]||'dynamic'})
        }
        return {effects:dedup(effects),unresolved:dedup(unresolved),chain,depthCuts:dedup(depthCuts)}
    }
    for(const e of events){
        const r=follow(rootsByEvent.get(e.id)||{roots:[],calls:[]})
        e.roots=rootsByEvent.get(e.id)?.roots||[];e.calls=rootsByEvent.get(e.id)?.calls||[]
        Object.assign(e,r)
        // A callback body may mutate only local state; zero effects is a resolved no-indexed-effect case.
        e.resolution=e.forwarded?'forwarded':e.unresolved.length||e.depthCuts.length?'partial':'resolved-within-bound'
        e.storeTransports=dedup(e.effects.filter(x=>x.kind==='store-write').flatMap(w=>model.stores.find(s=>s.id===w.store)?.transports.filter(t=>t.role==='send').map(t=>({...t,store:w.store,condition:'store subscription may broadcast; window guards remain conditional'}))||[]))
        e.audience=e.effects.some(x=>x.kind==='presentation'||x.kind==='store-write'&&/#outputs$/.test(x.store))?'may change live output; inspect conditions/trace':'no direct audience effect indexed; unresolved/deeper calls may change output'
        e.undo=e.effects.some(x=>x.kind==='history')?'history creation reachable (conditional)':'no history creation found within six levels; not proof of non-undoability'
        if(e.kind==='action')e.inputRoutes='inputs.json (shared transport; permission/path limits recorded there)'
        const rootGuards=e.roots.flatMap(id=>byId.get(id)?.guards||[]);e.conditions=dedup([...e.conditions,...rootGuards])
        if(e.kind==='keyboard'&&e.key==='dynamic'){
            const expressions=[e.handler,...rootGuards.map(g=>g.expression),...e.chain.slice(0,4).flatMap(f=>byId.get(f.id)?.guards.map(g=>g.expression)||[])]
            e.detectedKeys=dedup(expressions.flatMap(s=>[...s.matchAll(/\b(?:e|event|evt|ev)\.(?:key|code)\s*(?:===|==|!==|!=)\s*["']([^"']*)["']/g)].map(m=>m[1]===' '?'Space':m[1])))
        }
    }
    const keyNames=[...new Set(events.filter(e=>e.kind==='keyboard').flatMap(e=>e.key==='dynamic'?e.detectedKeys||[]:[e.key]))].filter(key=>key!=='number/custom'&&key!=='dynamic')
    const conflicts=keyNames.map(key=>({key,handlers:events.filter(e=>e.kind==='keyboard'&&(e.key===key||e.detectedKeys?.includes(key))).map(e=>({id:e.id,file:e.file,line:e.line,handler:e.handler,table:e.table||e.attachment||e.element,modifiers:e.modifiers,conditions:e.conditions})),precedence:'DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins.'})).filter(x=>x.handlers.length>1)
    return {schemaVersion:1,depthLimit:6,events,activations,conflicts,inputs,dropRules,functions:functions.map(({node,c,...f})=>f),lookupTables:[...tables.values()].filter(t=>KEY_TABLES[t.name]!==undefined||['clickActions','API_ACTIONS','loadActions'].includes(t.name)).map(t=>({file:t.file,name:t.name,entries:[...t.entries].map(([key,n])=>({key,...location(contexts.get(t.file),n),target:targetFn(contexts.get(t.file),n)?.id||null}))})),totals:{byKind:Object.fromEntries([...new Set(events.map(e=>e.kind))].map(k=>[k,events.filter(e=>e.kind===k).length])),events:events.length,functions:functions.length,activations:activations.length,conflictCandidates:conflicts.length,resolved:events.filter(e=>e.resolution==='resolved-within-bound').length},limits:['May-call union across branches, not an execution trace.','Six-level cutoff and unresolved dynamic receivers remain explicit.','Callback edges include asynchronous callbacks; scheduling/order require traces.','Store subscriptions are joined as conditional broadcast evidence, not traversed as synchronous calls.','Runtime-generated menu item ids and custom action keys cannot be enumerated from user data.','DOM changes/local assignments are not all store writes; forwarded component listeners need parent instances.','Platform/read classification is heuristic; final-effect coverage counts are bounded static coverage, not proof of completeness.']}
}
export function eventOutputs(data){
    const outputs=new Map(),put=(file,value)=>outputs.set(`${GENERATED}/events/${file}`,value),index={...data,events:undefined,functions:undefined,inputs:undefined,tables:[],functionTables:[]}
    function pack(record,base){
        const copy={...record},parts={}
        for(const[field,value]of Object.entries(copy))if(Array.isArray(value)&&value.length>30){
            parts[field]=chunks(value,25).map((piece,i)=>{const file=`parts/${base}-${field}-${i+1}.json`;put(file,json(piece));return file});delete copy[field]
        }
        if(Object.keys(parts).length)copy.$parts=parts
        return copy
    }
    chunks(data.functions,15).forEach((records,i)=>{const f=`functions/${i+1}.json`;put(f,json(records.map(r=>pack(r,'fn-'+hash(r.id).slice(0,16)))));index.functionTables.push(f)})
    const grouped=new Map()
    for(const e of data.events){const group=e.kind==='click'||e.kind==='keyboard'||e.kind==='drag-drop'||e.kind==='drag-source'?e.kind+'/'+slug(e.file):e.kind+'/'+slug(e.command||e.menuId||e.activationId||e.file);if(!grouped.has(group))grouped.set(group,[]);grouped.get(group).push(e)}
    const links=[]
    for(const[group,records]of grouped){
        const doc=`${GENERATED}/events/${group}.md`,parts=[]
        chunks(records,8).forEach((piece,i)=>{const f=group+`-${i+1}.json`;put(f,json(piece.map(r=>pack(r,r.id))));index.tables.push(f)})
        const rows=records.map(e=>`## ${escape(e.key||e.command||e.menuId||e.activationId||e.eventName||e.kind)} — ${e.id}\n\n[code] ${sourceLink(e,doc)}; ${escape(e.handler)}. ${e.resolution}.\n\nConditions: ${e.conditions.slice(0,14).map(g=>`${g.file}:${g.line} ${escape(g.expression)}`).join('; ')||'none extracted; parent state may gate mounting'}.\n\nCalls: ${e.chain.slice(0,16).map(f=>`${f.file}:${f.line} ${escape(f.name)} (depth ${f.depth})`).join('; ')||'no function target resolved'}.\n\nEffects: ${e.effects.slice(0,14).map(f=>`${f.file}:${f.line} ${escape(f.kind)} ${escape(f.store||f.expression||f.channel)} ${escape(f.historyType||'')}`).join('; ')||'no indexed terminal effect'}.\n\n${escape(e.audience)}. Undo: ${escape(e.undo)}. Unresolved edges: ${e.unresolved.length}; depth cutoffs: ${e.depthCuts.length}. Full edges/effects/conditions in JSON.\n`+(e.kind==='menu'?`\nMenu layouts: ${e.memberships.map(m=>m.layout+' '+m.file+':'+m.line).join('; ')||'none indexed'}. Loaders: ${e.loaders.map(l=>l.id+' '+(l.file||'unresolved')+':'+(l.line||'?')).join('; ')||'none'}.\n\n[code] Visibility/disabled conditions: ${(e.visibility||[]).map(g=>g.file+':'+g.line+' '+escape(g.expression)).join('; ')||'no item-specific condition extracted'}. Appears: ${e.appearances.slice(0,8).map(a=>a.file+':'+a.line).join('; ')||'no literal appearance indexed; mounting may be dynamic'}.\n`:e.kind==='action'?`\n[code] Payload type: ${escape(e.payloadType)}. [External/internal input routes](../inputs.json) retain transport and permission limits.\n`:''))
        chunks(rows,6).forEach((piece,i)=>{const f=group+`-part-${i+1}.md`;put(f,`# ${group} (${i+1})\n\n`+piece.join('\n'));parts.push(`- [Entries ${i*6+1}–${i*6+piece.length}](${path.basename(f)})`)})
        put(group+'.md',`# ${group}\n\n[code] Generated event and six-level may-call inventory.\n\n${parts.join('\n')}\n`);links.push(`- [${group}: ${records.length}](${group}.md)`)
    }
    chunks(links,60).forEach((part,i)=>put(`index-${i+1}.md`,`# Event groups ${i+1}\n\n`+part.join('\n')+'\n'))
    index.conflicts=data.conflicts.map(c=>pack({...c,handlers:c.handlers.map(h=>pack(h,'conflict-handler-'+hash(h.id).slice(0,16)))},'conflict-'+slug(c.key)))
    index.lookupTables=data.lookupTables.map(t=>pack(t,'lookup-'+hash(t.file+'#'+t.name).slice(0,16)))
    for(const field of ['tables','functionTables','conflicts','lookupTables'])if(index[field].length>8){
        const size=['conflicts','lookupTables'].includes(field)?1:60
        const parts=chunks(index[field],size).map((rows,i)=>{const file=`indexes/${field}-${i+1}.json`;put(file,json(rows));return file})
        index.$parts||={};index.$parts[field]=parts;delete index[field]
    }
    put('index.json',json(index));put('inputs.json',json(data.inputs))
    put('README.md',`# Events and triggers\n\n[code] Generated by npm run ai:map. ${data.totals.events} events; ${data.totals.resolved} resolved within six levels.\n\n${Object.entries(data.totals.byKind).map(([k,v])=>`- ${k}: ${v}`).join('\n')}\n\n${chunks(links,60).map((_,i)=>`- [Groups ${i+1}](index-${i+1}.md)`).join('\n')}\n\n[JSON inventory](index.json); [input routes](inputs.json); [key situation tables](../../events/README.md).\n\n${data.limits.map(l=>'- [code] '+l).join('\n')}\n`)
    return outputs
}
