import test from "node:test"
import assert from "node:assert/strict"
import {generate} from "./generate.mjs"
test("large table manifests and Markdown indexes shard without dropping entity pages",()=>{
    const stores=Array.from({length:85},(_,index)=>({id:`src/frontend/stores.ts#s${index}`,name:`s${index}`,file:"src/frontend/stores.ts",line:index+1,factory:"writable",type:"number",reads:[],writes:[],transports:[],persistence:[]}))
    const model={files:[],stores,channels:[],messages:[],components:[],settings:[],timers:[],workarounds:[],diagnostics:[],compiler:{},sourceRevision:"fixture"}
    const {manifest,outputs}=generate(model)
    assert.equal(manifest.schemaVersion,2)
    assert.equal(manifest.tables.stores.$parts.length,2)
    const filenames=manifest.tables.stores.$parts.flatMap(file=>JSON.parse(outputs.get(`docs/ai/generated/${file}`)))
    assert.equal(filenames.length,85)
    assert(filenames.every(file=>outputs.has(`docs/ai/generated/${file}`)))
    assert.equal(outputs.get("docs/ai/generated/stores/index-1.md").match(/^- /gm).length,80)
    assert.equal(outputs.get("docs/ai/generated/stores/index-2.md").match(/^- /gm).length,5)
    assert.equal(outputs.get("docs/ai/generated/stores/README.md").match(/^- /gm).length,2)
    assert(outputs.has("docs/ai/generated/stores/src_frontend_stores.ts_s84.md"))
})
