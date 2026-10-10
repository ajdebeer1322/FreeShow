// No filesystem, process state, network or mutation: reusable by a future MCP adapter.
const ref = item => `${item.file}:${item.line}`
function refs(label, items = [], all = false, describe = item => item.kind || item.symbol || "") {
    const lines = [...new Set(items.map(item => `  ${ref(item)} ${describe(item)}`.trimEnd()))]
    const limit = all ? lines.length : 12
    return `${label} (${lines.length}):\n${lines.slice(0,limit).join("\n") || "  none indexed"}${lines.length > limit ? `\n  … ${lines.length-limit} more; add --all` : ""}`
}
const title = item => `${item.id} [${item.confidence || "code"}]`
export function storeQuery(model, key, {all = false} = {}) {
    const stores = model.stores.filter(item=>item.id===key || item.name===key)
    const store = stores.find(item=>item.file==="src/frontend/stores.ts") || stores[0]
    if (!store) return `Unknown store: ${key}`
    return [title(store),`Definition: ${ref(store)} (${store.factory}, ${store.type})`, stores.length>1 ? `${stores.length} stores share this name; use file#name for others.` : "",refs("Reads",store.reads,all),refs("Writes",store.writes,all),refs("Transport",store.transports,all,item=>`${item.role} ${item.channel}/${item.keys.join(",")} (${item.relation})`),refs("Persistence",store.persistence,all,item=>`${item.group}/${item.key}${item.transformed ? " (transformed)" : ""}`),`Windows with receive-store evidence: ${model.windows.filter(win=>win.receivedStores.includes(store.id)).map(win=>win.id).join(", ") || "none indexed"}`].filter(Boolean).join("\n")
}
export function channelQuery(model,key,{all = false} = {}) {
    const channel=model.channels.find(item=>item.name===key)
    if(!channel) return `Unknown channel: ${key}`
    const messages=model.messages.filter(item=>item.channel===key)
    return [`Channel ${key} [code]; ${messages.length} message keys`, `Keys: ${messages.map(item=>item.key).join(", ")}`,refs("Senders",channel.endpoints.filter(item=>item.role==="send"),all,item=>`${item.keys.join(",") || "dynamic"}; ${item.direction}`),refs("Handlers",channel.endpoints.filter(item=>item.role==="receive"),all,item=>`${item.keys.join(",") || "dynamic"}; ${item.direction}`),refs("Payload contracts",messages.flatMap(item=>item.payloads.map(payload=>({...payload,key:item.key}))),all,item=>`${item.key}: ${item.type} (${item.contract})`)].join("\n")
}
export function fileQuery(model,key,{all = false} = {}) {
    const file=model.files.find(item=>item.file===key)
    if(!file) return `Unknown file: ${key}`
    return [key+" [code]",refs("Imports",file.imports,all,item=>`${item.specifier} → ${item.target || "external/unresolved"}`),refs("Imported by",model.files.flatMap(parent=>parent.imports.filter(item=>item.target===key)),all),`Stores: ${[...new Set(file.stores.map(item=>item.store))].join(", ") || "none indexed"}`,refs("Timers",file.timers,all,item=>`${item.valueMs ?? "dynamic"}ms ${item.kind}: ${item.expression}`),refs("Workarounds",file.workarounds,all,item=>item.text.replace(/\s+/g," ").slice(0,160)),refs("Decision records",(model.decisions || []).filter(item=>item.file===key),all,item=>`${item.id}: ${item.what} [${item.confidence}]`)].join("\n")
}
export function whyQuery(model,key,{all = false} = {}) {
    const match=/^(.*):(\d+)$/.exec(key)
    if(!match) return "Use why <file>:<line>."
    const [,file,lineText]=match,line=Number(lineText)
    const decisions=(model.decisions || []).filter(item=>item.file===file && line>=item.line && line<=(item.endLine || item.line))
    if(!decisions.length) return `No decision record at ${key}; no inferred motive.`
    return decisions.map(item=>[title(item),`${ref(item)} ${item.what}`,`Added: ${item.introduction?.commit || "unresolved"} ${item.introduction?.date || ""}`,`Why: ${item.why || "unresolved"}`,`Sources: ${(item.sources || []).map(source=>source.url || source.commit || source.ref).join("; ")}`,`Record: ${item.document || "history index"}`,`Later changes: ${(item.laterChanges || []).length}${item.forkFeature ? "; fork feature" : ""}`].join("\n")).join("\n\n")
}
export function timersQuery(model,key,{all = false} = {}) {
    const records=model.timers.filter(item=>item.file===key || item.file.startsWith(key.endsWith("/")?key:key+"/"))
    return refs(`Timing entries in ${key}`,records,all,item=>`${item.id} ${item.valueMs ?? "dynamic"}ms ${item.kind}: ${item.expression}; ${(item.nearbyComments || []).join(" ").replace(/\s+/g," ")}`)
}
export function query(model,args=[]) {
    const [kind,key]=args.filter(arg=>arg!=="--all"), options={all:args.includes("--all")}
    const handler={store:storeQuery,channel:channelQuery,file:fileQuery,why:whyQuery,timers:timersQuery}[kind]
    return handler && key ? handler(model,key,options) : "Usage: ai:ask -- store <name|file#name> | channel <ID> | file <path> | why <file>:<line> | timers <folder|file> [--all]"
}
