import test from 'node:test'
import assert from 'node:assert/strict'
import {scan} from './scan.mjs'
import {analyzeEvents,eventOutputs} from './events.mjs'
import {keyQuery,writesQuery,actionQuery} from './event-query.mjs'
const sources={
 'src/frontend/stores.ts':'import {writable} from "svelte/store"\nexport const outputs=writable({})',
 'src/frontend/helper.ts':'import {outputs as out} from "./stores"\nexport function step(){ out.set({}); setTimeout(()=>out.update(v=>v),20) }',
 'src/frontend/Test.svelte':'<script lang="ts">\nimport {step as next} from "./helper"\nimport {outputs} from "./stores"\n</script>\n<button on:click={()=>next()}>Next</button>\n<button on:click={()=>outputs.set({})}>Inline</button>\n<button on:click={()=> $outputs.name="a"}>Assignment</button>\n<svelte:window on:keydown={(e)=>{if(e.key===" ")next()}}/>',
 'src/frontend/components/actions/api.ts':'import {step} from "../../helper"\nexport const API_ACTIONS={next_slide:()=>step(),other:()=>{}}\nexport function triggerAction(data){return API_ACTIONS[data.action](data)}',
 'src/frontend/utils/shortcuts.ts':'import {step} from "../helper"\nconst previewShortcuts={" ":()=>step()}\nexport function keydown(e){if(e.key==="Enter")step(); const input={key:"width"}; if(input.key==="width")step(); if(Number(e.key))step()}'
}
let data
test.before(()=>{data=scan({files:Object.keys(sources),sources,analyze:analyzeEvents}).events;data.keyTables=[];data.traces=[]})
test('cross-file aliases, callback effects and inline store writes retain template lines',()=>{
 const clicks=data.events.filter(e=>e.kind==='click')
 assert.equal(clicks.length,3)
 assert(clicks[0].effects.some(e=>e.kind==='store-write'&&e.store.endsWith('#outputs')&&e.file.endsWith('helper.ts')))
 assert(clicks[0].chain.some(e=>e.name==='<callback>'))
 assert(clicks[1].effects.some(e=>e.kind==='store-write'&&e.line===6))
 assert(clicks[2].effects.some(e=>e.kind==='store-write'&&e.line===7))
})
test('explicit table entries resolve separately; dynamic routes are reported',()=>{
 const event=data.events.find(e=>e.command==='next_slide')
 assert(event.effects.some(e=>e.kind==='store-write'))
 assert(!event.chain.some(e=>e.name==='other'))
 assert(data.lookupTables.some(t=>t.name==='API_ACTIONS'&&t.entries.length===2))
})
test('queries are pure and work without a filesystem model',()=>{
 const before=JSON.stringify(data)
 assert.match(keyQuery(data,'Space'),/previewShortcuts/)
 assert.match(keyQuery({...data,keyTables:[{keys:['Ctrl/Cmd+Z'],document:'z.md',rules:[]}]},'Control+Z'),/z.md/)
 assert.match(writesQuery(data,'outputs'),/store|outputs/)
 assert.match(actionQuery(data,'next_slide'),/store-write/)
 assert.equal(JSON.stringify(data),before)
})
test('every event JSON shard referenced by the inventory exists',()=>{
 const outputs=eventOutputs(data),index=JSON.parse(outputs.get('docs/ai/generated/events/index.json'))
 assert(index.tables.every(t=>outputs.has('docs/ai/generated/events/'+t)))
 assert(index.functionTables.every(t=>outputs.has('docs/ai/generated/events/'+t)))
})
test('large conflict/table manifests retain independently readable index shards',()=>{
 const outputs=eventOutputs({...data,conflicts:Array.from({length:31},(_,i)=>({key:'key'+i,handlers:[],precedence:'conditional'}))})
 const index=JSON.parse(outputs.get('docs/ai/generated/events/index.json'))
 assert(!index.conflicts)
 assert.equal(index.$parts.conflicts.length,31)
 assert(index.$parts.conflicts.every(file=>outputs.has('docs/ai/generated/events/'+file)))
})

test('keyboard detection excludes data fields named key',()=>{
 assert(!data.events.filter(e=>e.kind==='keyboard').some(e=>e.detectedKeys?.includes('width')))
 assert(!data.conflicts.some(c=>c.key==='number/custom'))
})
