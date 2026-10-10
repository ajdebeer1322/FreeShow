# click/src_frontend_App.svelte (1)

## click — event-adede7758900eabdc6

[code] [src/frontend/App.svelte:67](../../../../../src/frontend/App.svelte#L67); mainClick. resolved-within-bound.

Conditions: src/frontend/utils/common.ts:90 e.target?.closest("a.open"); src/frontend/utils/common.ts:93 href.

Calls: src/frontend/utils/common.ts:86 mainClick (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/utils/common.ts:93 ipc sendMain(Main.URL, href) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
