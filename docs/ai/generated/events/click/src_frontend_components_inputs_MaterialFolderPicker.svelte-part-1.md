# click/src_frontend_components_inputs_MaterialFolderPicker.svelte (1)

## click — event-a26c58aa5bc1139779

[code] [src/frontend/components/inputs/MaterialFolderPicker.svelte:59](../../../../../src/frontend/components/inputs/MaterialFolderPicker.svelte#L59); (e) => { if (e.target?.closest(".button")) return pickFolder() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialFolderPicker.svelte:20 pickFolder (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3).

Effects: src/frontend/components/inputs/MaterialFolderPicker.svelte:25 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/inputs/MaterialFolderPicker.svelte:26 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/inputs/MaterialFolderPicker.svelte:29 ipc sendMain(Main.OPEN_FOLDER, { channel: PICK_ID, title: translateText(label), path: value }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5cec8014620689815f

[code] [src/frontend/components/inputs/MaterialFolderPicker.svelte:79](../../../../../src/frontend/components/inputs/MaterialFolderPicker.svelte#L79); () => sendMain(Main.OPEN_FOLDER_PATH, value). resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialFolderPicker.svelte:77 openButton && value.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0e6d36d80cf03edddf

[code] [src/frontend/components/inputs/MaterialFolderPicker.svelte:86](../../../../../src/frontend/components/inputs/MaterialFolderPicker.svelte#L86); () => dispatch("change", ""). partial.

Conditions: src/frontend/components/inputs/MaterialFolderPicker.svelte:84 allowEmpty && value.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
