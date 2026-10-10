# keyboard/src_frontend_components_inputs_MaterialFilePicker.svelte (1)

## dynamic — event-1242f9c920b3b42d13

[code] [src/frontend/components/inputs/MaterialFilePicker.svelte:69](../../../../../src/frontend/components/inputs/MaterialFilePicker.svelte#L69); handleKeydown. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialFilePicker.svelte:48 disabled; src/frontend/components/inputs/MaterialFilePicker.svelte:50 event.key === "Enter" \|\| event.key === " ".

Calls: src/frontend/components/inputs/MaterialFilePicker.svelte:47 handleKeydown (depth 0); src/frontend/components/inputs/MaterialFilePicker.svelte:29 pickMedia (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/inputs/MaterialFilePicker.svelte:33 ipc sendMain(Main.OPEN_FILE, { channel: "MEDIA", id: PICK_ID, filter, multiple }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
