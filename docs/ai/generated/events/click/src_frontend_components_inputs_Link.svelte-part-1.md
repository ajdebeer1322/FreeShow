# click/src_frontend_components_inputs_Link.svelte (1)

## click — event-aa0679ae6b6b7532e3

[code] [src/frontend/components/inputs/Link.svelte:12](../../../../../src/frontend/components/inputs/Link.svelte#L12); openURL. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/Link.svelte:7 openURL (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/inputs/Link.svelte:8 ipc sendMain(Main.URL, url) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
