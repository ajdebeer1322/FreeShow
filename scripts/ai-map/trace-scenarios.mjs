// Declarative actions and pure static/runtime comparison; no filesystem or process access.
export const scenarios = []
const key=(id,keys,context='live',extra={})=>scenarios.push({id,keys:[keys],context,action:`Press ${keys} in ${context}`,type:'key',...extra})
key('space-empty','Space','empty')
key('space-live','Space')
key('shift-space-live','Shift+Space')
key('space-focus','Space','focus')
key('space-input','Space','input')
key('space-editor','Space','editor')
key('space-textbox','Space','textbox')
key('space-linked','Space','linked')
for(const k of ['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','PageUp','PageDown'])key(k.toLowerCase()+'-live',k)
key('arrowright-editor','ArrowRight','editor')
key('escape-live','Escape')
key('escape-popup','Escape','popup')
key('escape-input','Escape','input')
for(let i=1;i<=5;i++)key(`f${i}-live`,`F${i}`)
key('f2-selected','F2','selected')
key('enter-project','Enter','project')
key('enter-popup','Enter','popup')
key('delete-slide','Delete','selected')
key('backspace-input','Backspace','input')
for(const k of ['Z','Y','C','V','X','D','A','S','F'])key(`ctrl-${k.toLowerCase()}`,`Ctrl+${k}`,['F','Z','Y'].includes(k)?'editor':'selected')
key('ctrl-z-textbox','Ctrl+Z','textbox')
key('ctrl-c-input','Ctrl+C','input')
key('ctrl-s-popup','Ctrl+S','popup')
key('number-show','2','numbers')
key('number-tabs','2')
key('ctrl-number-drawer','Ctrl+2','drawer')
key('debug-toggle','Ctrl+Shift+L')
for(const clear of ['all','background','slide','overlays'])scenarios.push({id:`clear-button-${clear}`,type:'clear-button',clear,context:'live',action:`Click clear ${clear}`,keys:[]})
scenarios.push({id:'click-slide',type:'click-slide',context:'live',action:'Click second slide thumbnail',keys:[]})
scenarios.push({id:'click-linked-slide',type:'click-slide',context:'linked',action:'Click linked slide card',keys:[]})
scenarios.push({id:'click-project-item',type:'click-project',context:'live',action:'Click current show in project',keys:[]})
for(const context of ['selected','drawer-show'])for(const menu of ['duplicate','delete'])scenarios.push({id:`menu-${context}-${menu}`,type:'menu',menu,context,action:`Right click ${context==='selected'?'slide':'drawer show'} then ${menu}`,keys:[]})
for(const menu of ['remove','rename'])scenarios.push({id:`menu-project-${menu}`,type:'menu',menu,context:'project',action:`Right click project item then ${menu}`,keys:[]})
scenarios.push({id:'drop-media-slide',type:'drop',context:'live',action:'Dispatch media drop on first slide with real selected-media state',keys:[]})
scenarios.push({id:'remote-action-next',type:'remote',command:'next_slide',context:'live',action:'Remote Socket.IO API:next_slide advances both outputs',keys:[]})

const canonical=key=>key.replace(/Ctrl\/Cmd|Control|Command|Cmd/gi,'Ctrl').replace(/^ $/,'Space').toLowerCase()
export function candidates(data,scenario){
    return data.events.filter(e=>{
        if(scenario.type==='key'){
            const k=canonical(scenario.keys[0]),base=k.split('+').at(-1),eventKey=canonical(e.key||'')
            return e.kind==='keyboard'&&(eventKey===k||eventKey===base||(e.detectedKeys||[]).some(key=>canonical(key)===base)||(e.eventName==='keydown'&&['src/frontend/App.svelte','src/frontend/components/output/preview/Preview.svelte'].includes(e.file)))
        }
        if(scenario.type==='menu')return e.menuId===scenario.menu
        if(scenario.type==='remote')return e.command===scenario.command
        if(scenario.type==='drop')return /drop/.test(e.kind)&&/Slides|drop/.test(e.file)
        return e.kind==='click'&&e.file.endsWith(scenario.type==='clear-button'?'/ClearButtons.svelte':scenario.type==='click-project'?'/ShowButton.svelte':'/Slides.svelte')
    })
}
export function compare(data,scenario,recording){
    const events=candidates(data,scenario),writes=new Set(events.flatMap(e=>e.effects.filter(f=>f.kind==='store-write').map(f=>f.store?.split('#').at(-1))))
    const observed=[...new Set(recording.storeTimeline.map(s=>s.store))]
    const missing=observed.filter(s=>!writes.has(s))
    const ipc=new Set(events.flatMap(e=>[...e.effects.filter(f=>f.kind==='ipc'),...e.storeTransports].flatMap(f=>(f.keys||[]).map(k=>f.channel+'/'+k))))
    const observedIPC=[...new Set(recording.ipc.filter(p=>['MAIN','OUTPUT','STAGE','REMOTE','CONTROLLER','OUTPUT_STREAM','AUDIO','NDI'].includes(p.channel)).map(p=>p.channel+'/'+(p.args?.[0]?.channel||p.args?.[0]?.key||'dynamic')))]
    return {eventIds:events.map(e=>e.id),staticStores:[...writes].sort(),observedStores:observed.sort(),unindexedObservedStores:missing,
        staticIPC:[...ipc].sort(),observedIPC,unindexedObservedIPC:observedIPC.filter(k=>!ipc.has(k)),
        verdict:missing.length?'Observed stores extend the bounded candidate union; review subscriptions, DOM bindings and unresolved calls.':'Observed store names are covered by the static candidate union.',
        limits:'May-call unions do not predict order or require all effects to execute. IPC/DOM timelines are recorded, not proof of exact function calls; background subscriptions can add effects. No-op keys are observed outcomes.'}
}
