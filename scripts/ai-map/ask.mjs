import { loadModel, readJson } from "./lib.mjs"
import { loadEvents } from "./event-load.mjs"
import { query } from "./query.mjs"
try {
    const model=loadModel(), index=readJson("docs/ai/history/index.json",{tables:[]})
    model.decisions=index.tables.flatMap(file=>readJson(file,[]))
    model.events=loadEvents()
    console.log(query(model,process.argv.slice(2)))
} catch(error) { console.error(error.message); process.exitCode=1 }
