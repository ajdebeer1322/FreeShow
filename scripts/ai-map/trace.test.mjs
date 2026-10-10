import test from 'node:test'
import assert from 'node:assert/strict'
import {scenarios,compare,candidates} from './trace-scenarios.mjs'
test('trace scenario names are unique and cover requested event families',()=>{
    assert.equal(new Set(scenarios.map(s=>s.id)).size,scenarios.length)
    for(const type of ['key','clear-button','click-slide','click-project','menu','drop','remote'])assert(scenarios.some(s=>s.type===type))
})
test('comparison preserves conditional static effects and flags only observed coverage gaps',()=>{
    const data={events:[{id:'one',kind:'action',command:'next_slide',effects:[{kind:'store-write',store:'src/frontend/stores.ts#outputs'}],storeTransports:[{channel:'OUTPUT',keys:['OUTPUTS']}]}]}
    const scenario=scenarios.find(s=>s.id==='remote-action-next'),recording={storeTimeline:[{store:'outputs'},{store:'selected'}],ipc:[{channel:'OUTPUT',args:[{channel:'OUTPUTS'}]},{channel:'MAIN',args:[{channel:'SAVE'}]}]}
    const before=JSON.stringify({data,scenario,recording}),result=compare(data,scenario,recording)
    assert.deepEqual(result.eventIds,['one']);assert.deepEqual(result.unindexedObservedStores,['selected'])
    assert.deepEqual(result.unindexedObservedIPC,['MAIN/SAVE'])
    assert.equal(JSON.stringify({data,scenario,recording}),before)
    assert.equal(candidates(data,scenario).length,1)
})
test('live comparison includes explicit modifier lookup entries',()=>{
    const scenario=scenarios.find(s=>s.id==='ctrl-z')
    const data={events:[{kind:'keyboard',key:'Ctrl/Cmd+z',file:'src/frontend/utils/shortcuts.ts'}]}
    assert.equal(candidates(data,scenario).length,1)
})
