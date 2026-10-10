// Explicit entry/process identities; store/message contents are derived from scan facts.
export function windowMap(model) {
    const specs = [
        { id: "electron", kind: "main process", entry: "src/electron/index.ts", roots: ["src/electron/index.ts"], prefix: "src/electron/", channels: [], note: "Native services and IPC; Svelte stores do not cross this process directly." },
        { id: "main", kind: "desktop renderer", entry: "src/frontend/main.ts", roots: ["src/frontend/MainLayout.svelte"], channels: ["MAIN", "OUTPUT", "REMOTE", "STAGE", "CONTROLLER", "OUTPUT_STREAM", "CLOUD", "NDI", "OMT", "AUDIO", "BLACKMAGIC"], note: "App.svelte selects MainLayout after startup; receivers include output-to-main callbacks." },
        { id: "output", kind: "Electron output renderer", entry: "src/frontend/main.ts", roots: ["src/frontend/MainOutput.svelte"], channels: ["MAIN", "OUTPUT"], note: "Same renderer entry as desktop, selected by currentWindow=output. OUTPUTS payload is filtered for the destination output." },
        { id: "preview", kind: "embedded renderer component", entry: "src/frontend/components/output/Output.svelte", roots: ["src/frontend/components/output/Output.svelte"], channels: [], note: "Preview shares the desktop renderer stores. A separate preview BrowserWindow implementation is commented out." },
        ...["remote", "stage", "controller", "output_stream", "cam"].map(id => ({ id, kind: "browser client", entry: `src/server/${id}/main.ts`, roots: [`src/server/${id}/App.svelte`], prefix: `src/server/${id}/`, channels: [id.toUpperCase()], note: "Independent client state; socket messages are projections or commands, not shared JavaScript stores." }))
    ]
    const files = new Map(model.files.map(file => [file.file, file]))
    return specs.map(spec => {
        const reachable = new Set(), pending = [...spec.roots]
        while (pending.length) {
            const name = pending.pop(), file = files.get(name)
            if (!file || reachable.has(name)) continue
            reachable.add(name)
            pending.push(...file.imports.filter(item => !item.typeOnly && item.target).map(item => item.target))
            pending.push(...file.components.flatMap(item => [item.target, ...item.lazyTargets]).filter(Boolean))
        }
        const receives = model.channels.filter(channel => spec.channels.includes(channel.name)).flatMap(channel => channel.endpoints.filter(item => item.role === "receive" && (spec.prefix ? item.file.startsWith(spec.prefix) : item.file.startsWith("src/frontend/"))))
        const receivedStores = model.stores.filter(store => store.transports.some(item => item.role === "receive" && spec.channels.includes(item.channel) && (spec.prefix ? store.file.startsWith(spec.prefix) : store.file.startsWith("src/frontend/")))).map(store => store.id)
        return { ...spec, entryExists: files.has(spec.entry), reachable: [...reachable].sort(), usedStores: [...new Set([...reachable].flatMap(file => files.get(file).stores.map(item => item.store)))].sort(), receivedStores, receives, confidence: "code", limits: "Reachability includes conditional imports. Receiver registration shared by main/output is an upper bound; inspect startup guards for runtime selection." }
    })
}
