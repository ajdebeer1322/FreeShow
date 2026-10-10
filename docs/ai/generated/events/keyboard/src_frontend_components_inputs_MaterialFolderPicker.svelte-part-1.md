# keyboard/src_frontend_components_inputs_MaterialFolderPicker.svelte (1)

## dynamic — event-982d9fd370e8065e75

[code] [src/frontend/components/inputs/MaterialFolderPicker.svelte:63](../../../../../src/frontend/components/inputs/MaterialFolderPicker.svelte#L63); handleKeydown. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialFolderPicker.svelte:42 disabled; src/frontend/components/inputs/MaterialFolderPicker.svelte:44 event.key === "Enter" \|\| event.key === " ".

Calls: src/frontend/components/inputs/MaterialFolderPicker.svelte:41 handleKeydown (depth 0); src/frontend/components/inputs/MaterialFolderPicker.svelte:20 pickFolder (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3).

Effects: src/frontend/components/inputs/MaterialFolderPicker.svelte:25 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/inputs/MaterialFolderPicker.svelte:26 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/inputs/MaterialFolderPicker.svelte:29 ipc sendMain(Main.OPEN_FOLDER, { channel: PICK_ID, title: translateText(label), path: value }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
