import test from "node:test"
import assert from "node:assert/strict"
import { scan } from "./scan.mjs"
const sources = {
    "src/frontend/stores.ts": 'import { writable as w } from "svelte/store"\nexport const outputs=w({})\nexport const setting=w(false)\n',
    "src/frontend/utils/save.ts": 'import {get} from "svelte/store"\nimport {setting as flag} from "../stores"\nfunction save(){ const settings={setting:get(flag)}; const allSavedData={SETTINGS:settings} }\n',
    "src/frontend/Test.svelte": '<script lang="ts">\nimport {get} from "svelte/store"\nimport {outputs as out} from "./stores"\nimport Child from "./Child.svelte"\nconst wait=(ms=15)=>new Promise(r=>setTimeout(r,ms))\n// TODO retain until measured\nwait()\nget(out)\nout.update(v=>v)\nconst text="TODO is not a comment"\n</script>\n<Child data={$out} />\n<input bind:value={$out.name} />\n<button on:click={()=> $out.name="changed"}>Change</button>\n',
    "src/frontend/Child.svelte": '<script>export let data</script>\n<p>{data}</p>',
    "src/types/IPC/Main.ts": 'export enum Main { VERSION="VERSION" }\nexport interface MainSendPayloads { VERSION: {verbose:boolean} }',
    "src/frontend/IPC/test.ts": 'import {Main} from "../../types/IPC/Main"\nfunction requestMain(){}\nrequestMain(Main.VERSION,{verbose:true})\n'
}
let model
// One shared fixture scan tests compiler/scope contracts, not source snapshots.
test.before(()=>{model=scan({files:Object.keys(sources),sources})})
test("resolves imported store aliases and Svelte offset references",()=>{
    const store=model.stores.find(s=>s.name==="outputs")
    assert(store.reads.some(r=>r.kind==="get" && r.line===8))
    assert(store.reads.some(r=>r.kind==="dollar-template" && r.line===12))
    assert(store.writes.some(r=>r.kind==="bind" && r.line===13))
    assert(store.writes.some(r=>r.kind==="assignment-template"))
})
test("comments exclude keyword strings; default delays remain sourced",()=>{
    assert.equal(model.workarounds.length,1)
    assert.equal(model.timers.find(t=>t.kind==="wait").valueMs,15)
    assert.equal(model.timers.find(t=>t.kind==="setTimeout").valueMs,null)
})
test("save object follows aliases",()=>assert(model.stores.find(s=>s.name==="setting").persistence.some(p=>p.key==="setting")))
test("component bindings and payload contracts",()=>{
    assert.equal(model.components.find(c=>c.file.endsWith("Test.svelte")).renders[0].target,"src/frontend/Child.svelte")
    const msg=model.messages.find(m=>m.id==="MAIN/VERSION")
    assert.equal(msg.senders.length,1)
    assert.equal(msg.payloads[0].type,"{verbose:boolean}")
})
