import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { generate } from "./generate.mjs"
import { ROOT, GENERATED, read, readJson, walk, hash, json } from "./lib.mjs"
import { scenarios } from "./trace-scenarios.mjs"

export function validateReference(reference, model, source) {
    const file=model.files.find(file=>file.file===reference.file)
    if(!file) return `Missing source file: ${reference.file}`
    if(reference.line && (reference.line<1 || reference.line>file.lineCount)) return `Missing line: ${reference.file}:${reference.line}`
    if(reference.symbol && !file.symbols.some(symbol=>symbol.name===reference.symbol) && !model.stores.some(store=>store.file===reference.file && store.name===reference.symbol)) return `Missing symbol: ${reference.file}#${reference.symbol}`
    if(reference.excerpt && !source.split(/\r?\n/)[reference.line-1]?.includes(reference.excerpt)) return `Source anchor changed: ${reference.file}:${reference.line}`
    if(reference.fileHash && reference.fileHash!==hash(source)) return `Claim requires review after source change: ${reference.file}`
    return null
}
export function docReferences(content) {
    return [...content.matchAll(/(?<![\w/.-])(src\/[\w./-]+\.(?:ts|js|mjs|cjs|svelte))(?::(\d+)|#([\w$]+))?/g)].map(match=>{
        const line=match[2] || (/^L\d+$/.test(match[3] || "")?match[3].slice(1):null),symbol=match[3] && !/^L\d+$/.test(match[3])?match[3]:null
        return {file:match[1],...(line?{line:Number(line)}:{}),...(symbol?{symbol}:{})}
    })
}
export function checkDocs(model) {
    const errors=[]
    for(const doc of walk("docs/ai",file=>file.endsWith(".md"))) {
        const content=read(doc)
        for(const match of content.matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
            const target=match[1].replace(/^<|>$/g,"")
            if(/^(https?:|mailto:|app:)/.test(target)) continue
            const [filePart,fragment]=target.split("#"), targetFile=path.resolve(ROOT,path.dirname(doc),filePart || path.basename(doc))
            if(!targetFile.startsWith(ROOT) || !fs.existsSync(targetFile)) {errors.push(`${doc}: missing link ${target}`);continue}
            if(fragment && /^L\d+$/.test(fragment)) {
                const line=Number(fragment.slice(1)), count=fs.readFileSync(targetFile,"utf8").split(/\r?\n/).length
                if(line<1 || line>count) errors.push(`${doc}: missing line ${target}`)
            } else if(fragment && /\.(ts|js|svelte)$/.test(filePart)) {
                const file=path.relative(ROOT,targetFile), refError=validateReference({file,symbol:fragment},model,read(file))
                if(refError) errors.push(`${doc}: ${refError}`)
            }
        }
        for(const reference of docReferences(content)) {
            const error=validateReference(reference,model,fs.existsSync(path.resolve(ROOT,reference.file))?read(reference.file):"")
            if(error) errors.push(`${doc}: ${error}`)
        }
    }
    for(const reference of readJson("docs/ai/references.json",[])) {
        const error=validateReference(reference,model,fs.existsSync(path.resolve(ROOT,reference.file))?read(reference.file):"")
        if(error) errors.push(`${reference.document || "references"}: ${error}`)
    }
    const history=readJson("docs/ai/history/index.json")
    if(history) {
        const records=history.tables.flatMap(file=>readJson(file,[])), covered=new Set(records.map(item=>item.itemId))
        for(const item of [...model.timers,...model.workarounds]) if(!covered.has(item.id)) errors.push(`History missing for ${item.id}`)
        for(const item of records) {
            const source=read(item.file), file=model.files.find(file=>file.file===item.file)
            if(!file || item.sourceHash!==file.hash) errors.push(`History source changed: ${item.id}; regenerate/review history`)
            if(!fs.existsSync(path.resolve(ROOT,item.document))) errors.push(`History page absent: ${item.document}`)
        }
    }
    const flows=readJson("docs/ai/flows/index.json"),observations=readJson("docs/ai/flows/observations.json")
    if(flows) {
        if(flows.sourceRevision!==model.sourceRevision)errors.push("Flow source revision changed; review/regenerate traces")
        if(observations?.sourceFingerprint!==hash(json(model.files.map(file=>[file.file,file.hash]))))errors.push("Runtime flow evidence is absent or stale; repeat observations")
        for(const flow of flows.flows)if(flow.verified && !observations?.observations.some(item=>item.id===flow.id && item.status==="verified"))errors.push(`Verified flow lacks observation: ${flow.id}`)
    }
    const traces=readJson('docs/ai/traces/index.json')
    if(traces){
        const fingerprint=hash(['trace.mjs','trace-scenarios.mjs','runtime-entry.ts','runtime-build.mjs'].map(f=>read('scripts/ai-map/'+f)).join('\n'))
        const sourceFingerprint=hash(json(model.files.map(file=>[file.file,file.hash])))
        for(const scenario of scenarios){
            const entry=traces.scenarios.find(s=>s.id===scenario.id)
            if(!entry){errors.push(`Trace missing: ${scenario.id}`);continue}
            const recording=readJson(entry.recording)
            if(!recording || recording.sourceFingerprint!==sourceFingerprint)errors.push(`Trace source evidence stale: ${scenario.id}`)
            if(recording?.runnerFingerprint!==fingerprint)errors.push(`Trace recorder changed: ${scenario.id}; repeat recording`)
            if(recording?.status!==entry.status)errors.push(`Trace index status differs: ${scenario.id}`)
            if(recording?.status!=='verified')errors.push(`Trace action not verified: ${scenario.id}`)
            if(recording?.status==='verified'&&recording.outputs?.length!==2)errors.push(`Trace lacks both output windows: ${scenario.id}`)
            if(!fs.existsSync(path.resolve(ROOT,entry.document)))errors.push(`Trace page missing: ${entry.document}`)
        }
    }
    return [...new Set(errors)]
}
export function check() {
    const start=performance.now(), result=generate(), errors=[]
    for(const [file,expected] of result.outputs) if(!fs.existsSync(path.resolve(ROOT,file)) || read(file)!==expected) errors.push(`Generated map stale or missing: ${file}`)
    for(const file of walk(GENERATED)) if(!result.outputs.has(file)) errors.push(`Extraneous generated file: ${file}`)
    errors.push(...checkDocs(result.model))
    return {errors,seconds:(performance.now()-start)/1000, totals:result.manifest.totals}
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
    const result=check()
    if(result.errors.length) {console.error(result.errors.slice(0,50).join("\n"));console.error(`${result.errors.length} errors.`);process.exitCode=1}
    else console.log(`AI references and maps current; ${JSON.stringify(result.totals)}. ${result.seconds.toFixed(2)}s.`)
}
