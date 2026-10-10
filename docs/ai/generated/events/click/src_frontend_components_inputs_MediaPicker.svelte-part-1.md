# click/src_frontend_components_inputs_MediaPicker.svelte (1)

## click — event-3535e2f47ca2bd10b3

[code] [src/frontend/components/inputs/MediaPicker.svelte:35](../../../../../src/frontend/components/inputs/MediaPicker.svelte#L35); pick. partial.

Conditions: src/frontend/components/inputs/MediaPicker.svelte:17 clearOnClick.

Calls: src/frontend/components/inputs/MediaPicker.svelte:16 pick (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/inputs/MediaPicker.svelte:23 ipc sendMain(Main.OPEN_FILE, { channel: "MEDIA", id, filter, multiple }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
