import { readJson, GENERATED } from './lib.mjs'
// IO boundary only; queries consume the returned JSON model without filesystem access.
export function loadEvents(){
    const base=`${GENERATED}/events/`,index=readJson(base+'index.json')
    if(!index)return null
    const hydrate=record=>{
        const result={...record}
        for(const[field,parts]of Object.entries(result.$parts||{}))result[field]=parts.flatMap(file=>readJson(base+file,[]))
        delete result.$parts;return result
    }
    return {...index,events:index.tables.flatMap(file=>readJson(base+file,[])).map(hydrate),inputs:readJson(base+'inputs.json',[]),keyTables:readJson('docs/ai/events/keys/index.json',[]),traces:readJson('docs/ai/traces/index.json',{scenarios:[]}).scenarios}
}
