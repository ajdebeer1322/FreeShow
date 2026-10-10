# click/src_frontend_components_inputs_MaterialFilePicker.svelte (1)

## click — event-41faeb8c3c5b0c9bec

[code] [src/frontend/components/inputs/MaterialFilePicker.svelte:65](../../../../../src/frontend/components/inputs/MaterialFilePicker.svelte#L65); (e) => { if (e.target?.closest(".remove")) return pickMedia() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialFilePicker.svelte:29 pickMedia (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/inputs/MaterialFilePicker.svelte:33 ipc sendMain(Main.OPEN_FILE, { channel: "MEDIA", id: PICK_ID, filter, multiple }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-357b7638814b43af60

[code] [src/frontend/components/inputs/MaterialFilePicker.svelte:105](../../../../../src/frontend/components/inputs/MaterialFilePicker.svelte#L105); () => dispatch("change", ""). partial.

Conditions: src/frontend/components/inputs/MaterialFilePicker.svelte:103 allowEmpty && value.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
