# click/src_frontend_components_main_popups_Import.svelte (3)

## click — event-23421e16ecea2df095

[code] [src/frontend/components/main/popups/Import.svelte:319](../../../../../src/frontend/components/main/popups/Import.svelte#L319); () => { if (format.popup) { tick().then(() => { if (format.popup) { activePopup.set(format.popup) } }) } else { let name = translateText(format.name) sendMain(Main.IMPORT, { channe. partial.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
