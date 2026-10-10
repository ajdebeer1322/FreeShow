# click/src_frontend_components_main_popups_Import.svelte (1)

## click — event-34883692358b923388

[code] [src/frontend/components/main/popups/Import.svelte:119](../../../../../src/frontend/components/main/popups/Import.svelte#L119); () => (openedPage = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-41c9e75a9072fe7094

[code] [src/frontend/components/main/popups/Import.svelte:123](../../../../../src/frontend/components/main/popups/Import.svelte#L123); () => option.click(). partial.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-46abaa67c474056ce4

[code] [src/frontend/components/main/popups/Import.svelte:136](../../../../../src/frontend/components/main/popups/Import.svelte#L136); () => (openedPage = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-daf82f8c2a9ae34ee1

[code] [src/frontend/components/main/popups/Import.svelte:144](../../../../../src/frontend/components/main/popups/Import.svelte#L144); () => { importFreeshowFormat(format) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more".

Calls: src/frontend/components/main/popups/Import.svelte:99 importFreeshowFormat (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 2).

Effects: src/frontend/components/main/popups/Import.svelte:101 ipc sendMain(Main.IMPORT, { channel: format.id, format: { ...format, name } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1b4a745656f2210056

[code] [src/frontend/components/main/popups/Import.svelte:176](../../../../../src/frontend/components/main/popups/Import.svelte#L176); () => { if (format.id === "powerpoint") { pptText() return } sendMain(Main.IMPORT, { channel: format.id, format }) displayTutorial(format) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/components/main/popups/Import.svelte:73 pptText (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 1).

Effects: src/frontend/components/main/popups/Import.svelte:75 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:74 ipc sendMain(Main.IMPORT, { channel: "powerpoint", format: { name: "PowerPoint", extensions: &#91;"ppt", "pptx"&#93; } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bf32d064868f5a1e41

[code] [src/frontend/components/main/popups/Import.svelte:200](../../../../../src/frontend/components/main/popups/Import.svelte#L200); () => { if (format.popup) { tick().then(() => { if (format.popup) { activePopup.set(format.popup) } }) } else { let name = translateText(format.name) sendMain(Main.IMPORT, { channe. partial.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
