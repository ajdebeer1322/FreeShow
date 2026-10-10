import test from "node:test"
import assert from "node:assert/strict"
import { query } from "./query.mjs"
const definition={id:"src/frontend/stores.ts#outputs",file:"src/frontend/stores.ts",line:1,name:"outputs",factory:"writable",type:"Outputs",reads:[],writes:[],transports:[],persistence:[]}
const model={stores:[{...definition,id:"src/server/stage/stores.ts#outputs",file:"src/server/stage/stores.ts"},definition],windows:[],channels:[],files:[],messages:[],timers:[],decisions:[{id:"D-1",file:"src/frontend/A.ts",line:10,endLine:20,what:"delay",confidence:"guess",why:"unknown",sources:[],introduction:{commit:"abc"}}]}
test("default store selects desktop; query has no mutation",()=>{
    const before=JSON.stringify(model)
    assert.match(query(model,["store","outputs"]),/^src\/frontend\/stores.ts#outputs/)
    assert.equal(JSON.stringify(model),before)
})
test("why uses inclusive source ranges without claiming nearby causality",()=>{
    assert.match(query(model,["why","src/frontend/A.ts:15"]),/D-1/)
    assert.match(query(model,["why","src/frontend/A.ts:21"]),/No decision/)
})
test("unknown inputs and empty results are explicit",()=>{
    assert.match(query(model,["channel","NO"]),/Unknown channel/)
    assert.match(query(model,["timers","src/frontend"]),/none indexed/)
    assert.match(query(model,[]),/Usage:/)
})
