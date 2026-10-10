# automatic/src_electron_IPC_main.ts (1)

## setTimeout — event-0fe5def69a00a60d98

[code] [src/electron/IPC/main.ts:73](../../../../../src/electron/IPC/main.ts#L73); () => { if (settled) return settled = true if (!isProd) console.error('IPC Message Timed Out: ${id}') cleanup() resolve(null) }. partial.

Conditions: src/electron/IPC/main.ts:74 settled; src/electron/IPC/main.ts:77 !isProd.

Calls: src/electron/IPC/main.ts:73 <callback> (depth 0); src/electron/IPC/main.ts:64 cleanup (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
