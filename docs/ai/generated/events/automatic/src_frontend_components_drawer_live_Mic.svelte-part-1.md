# automatic/src_frontend_components_drawer_live_Mic.svelte (1)

## setTimeout — event-38a2dcd5793223ff4b

[code] [src/frontend/components/drawer/live/Mic.svelte:65](../../../../../src/frontend/components/drawer/live/Mic.svelte#L65); capture. resolved-within-bound.

Conditions: src/frontend/components/drawer/live/Mic.svelte:60 err.name === "NotReadableError".

Calls: src/frontend/components/drawer/live/Mic.svelte:54 capture (depth 0); src/frontend/components/drawer/live/Mic.svelte:58 <callback> (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/drawer/live/Mic.svelte:61 ipc sendMain(Main.ACCESS_MICROPHONE_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
