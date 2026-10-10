// Pure functions: no IO, network, process state, or mutation.
const ref=x=>`${x.file}:${x.line}`
const brief=(rows,all,format)=>rows.slice(0,all?rows.length:10).map(format).join('\n')+(rows.length>10&&!all?`\n  … ${rows.length-10} more; add --all`:'')
const normalize=key=>key.replace(/Command|Cmd|Control|Ctrl\/Cmd/gi,'Ctrl').replace(/^ $/,'Space').replace(/\+/g,'+').toLowerCase()
export function matchingKeys(data,key){
    const normalized=normalize(key),base=normalized.replace(/^shift\+/,'')
    return data.events.filter(e=>e.kind==='keyboard'&&(normalize(e.key||'')===normalized||normalize(e.key||'')===base||(e.detectedKeys||[]).some(k=>normalize(k)===base)))
}
export function summarizeEvent(e,{all=false}={}){
    return [`${e.id} ${e.kind} ${ref(e)} ${e.handler}`,`  ${e.resolution}; ${e.audience}; ${e.undo}`,
        e.conditions.length?`  Conditions:\n${brief(e.conditions,all,g=>'    '+ref(g)+' '+g.expression)}`:'',
        `  Effects (${e.effects.length}):\n${brief(e.effects,all,x=>'    '+ref(x)+' '+x.kind+' '+(x.store||x.channel||x.expression||'')+(x.historyType?' history='+x.historyType:''))||'    none indexed'}`,
        e.storeTransports.length?`  Store broadcasts: ${[...new Set(e.storeTransports.map(t=>t.channel+'/'+(t.keys||[]).join(',')))].join('; ')}`:'',
        `  Unresolved: ${e.unresolved.length}; depth cutoffs: ${e.depthCuts.length}`,all?brief(e.unresolved,true,x=>'    '+ref(x)+' '+x.expression+': '+x.reason):''].filter(Boolean).join('\n')
}
export function keyQuery(data,key,options={}){
    const events=matchingKeys(data,key),tables=(data.keyTables||[]).filter(t=>t.keys.some(k=>normalize(k)===normalize(key))),traces=(data.traces||[]).filter(t=>t.keys?.some(k=>normalize(k)===normalize(key)))
    const conflicts=data.conflicts.filter(c=>normalize(c.key)===normalize(key)||normalize(c.key)===normalize(key).replace(/^shift\+/,''))
    return [`Key ${key} [code]; ${events.length} handler candidates (modifier/DOM guards still apply)`,brief(events,options.all,e=>`${ref(e)} ${e.table||e.eventName||'listener'} -> ${e.handler}`),`Situation tables: ${tables.map(t=>t.document).join(', ')||'none indexed'}`,`Traces: ${traces.map(t=>`${t.id} [${t.status}] ${t.document}`).join('; ')||'none recorded'}`,`Conflict candidates: ${conflicts.length}`,brief(conflicts,options.all,c=>c.precedence)].join('\n')
}
export function clickQuery(data,key,options={}){
    const events=data.events.filter(e=>e.kind==='click'&&(e.file===key||e.file.endsWith('/'+key)))
    return `Clicks in ${key}: ${events.length}\n`+brief(events,options.all,e=>summarizeEvent(e,options))
}
export function menuQuery(data,key,options={}){
    const e=data.events.find(e=>e.kind==='menu'&&e.menuId===key)
    if(!e)return `Unknown menu item: ${key}`
    return [summarizeEvent(e,options),`Layouts: ${e.memberships.map(m=>m.layout+' '+ref(m)).join('; ')}`,`Loaders: ${e.loaders.map(l=>l.id+' '+ref(l)).join('; ')||'none'}`,`Appears (${e.appearances.length}):\n`+brief(e.appearances,options.all,a=>ref(a)+' '+a.expression),`Definition: ${e.definition}`].join('\n')
}
export function actionQuery(data,key,options={}){
    const e=data.events.find(e=>e.kind==='action'&&e.command===key)
    if(!e)return `Unknown API command: ${key}`
    return [summarizeEvent(e,options),`Payload: ${e.payloadType}`,`Input routes (${data.inputs.length}; runtime routing/permissions conditional):\n`+brief(data.inputs,options.all,r=>ref(r)+' '+r.expression+' ('+r.origin+')')].join('\n')
}
export function triggerQuery(data,key,options={}){
    const definition=data.activations.find(a=>a.id===key),events=data.events.filter(e=>e.activationId===key)
    return [`Activation ${key}${definition?' '+ref(definition):' (dynamic/undeclared)'}`,brief(events,options.all,e=>summarizeEvent(e,options)),`Enabled custom actions matching activation id run conditionally; their configured API commands remain runtime data.`].join('\n')
}
export function traceQuery(data,key){
    const trace=(data.traces||[]).find(t=>t.id===key)
    return trace?`${trace.id} [${trace.status}] ${trace.document}\nAction: ${trace.action}\nDuration: ${trace.elapsedMs??'unrecorded'}ms\nStatic comparison: ${trace.comparison||'see recording'}\nEvidence: ${trace.recording||'none'}`:`No recorded trace: ${key}; run npm run ai:trace -- ${key}`
}
export function writesQuery(data,key,options={}){
    const events=data.events.filter(e=>e.effects.some(f=>f.kind==='store-write'&&(f.store===key||f.store?.endsWith('#'+key))))
    return `Events with possible writes to ${key}: ${events.length} [code; branch/callback union]\n`+brief(events,options.all,e=>`${ref(e)} ${e.kind} ${e.key||e.command||e.menuId||e.activationId||''} ${e.handler}\n`+brief(e.effects.filter(f=>f.kind==='store-write'&&(f.store===key||f.store?.endsWith('#'+key))),options.all,f=>'  '+ref(f)+' '+f.store+' '+f.expression))
}
export function eventQuery(data,kind,key,options={}){
    if(!data)return 'Event maps absent; run npm run ai:map.'
    return {key:keyQuery,click:clickQuery,menu:menuQuery,action:actionQuery,trigger:triggerQuery,trace:traceQuery,writes:writesQuery}[kind]?.(data,key,options)
}
