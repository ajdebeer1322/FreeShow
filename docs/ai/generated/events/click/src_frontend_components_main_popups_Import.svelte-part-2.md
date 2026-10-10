# click/src_frontend_components_main_popups_Import.svelte (2)

## click — event-68619fa61338afd030

[code] [src/frontend/components/main/popups/Import.svelte:224](../../../../../src/frontend/components/main/popups/Import.svelte#L224); () => { importFromClipboard() activePopup.set(null) }. partial.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/converters/importHelpers.ts:227 importFromClipboard (depth 1); src/frontend/converters/importHelpers.ts:230 <callback> (depth 2); src/frontend/converters/txt.ts:51 convertText (depth 3); src/frontend/converters/txt.ts:293 preprocessLines (depth 4); src/frontend/converters/txt.ts:255 isHeaderLine (depth 5); src/frontend/converters/txt.ts:750 findGroupMatch (depth 6); src/frontend/components/helpers/show.ts:46 getLabelId (depth 6); src/frontend/converters/txt.ts:275 isChordLine (depth 5); src/frontend/converters/txt.ts:344 insertChordsIntoLyrics (depth 5); src/frontend/converters/txt.ts:330 <callback> (depth 5); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 4); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 5); src/frontend/components/helpers/show.ts:188 <callback> (depth 5); src/frontend/components/helpers/show.ts:192 <callback> (depth 5); src/frontend/converters/txt.ts:75 <callback> (depth 4); src/frontend/converters/txt.ts:78 <callback> (depth 5).

Effects: src/frontend/converters/txt.ts:176 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 5; depth cutoffs: 102. Full edges/effects/conditions in JSON.

## click — event-7ff80fd0cccc1210e7

[code] [src/frontend/components/main/popups/Import.svelte:240](../../../../../src/frontend/components/main/popups/Import.svelte#L240); () => { importFreeshowFormat(format) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/components/main/popups/Import.svelte:99 importFreeshowFormat (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 2).

Effects: src/frontend/components/main/popups/Import.svelte:101 ipc sendMain(Main.IMPORT, { channel: format.id, format: { ...format, name } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-af3b6255febd44ca3b

[code] [src/frontend/components/main/popups/Import.svelte:253](../../../../../src/frontend/components/main/popups/Import.svelte#L253); () => (openedPage = "freeshow_more"). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b696ec310beb4f95f9

[code] [src/frontend/components/main/popups/Import.svelte:262](../../../../../src/frontend/components/main/popups/Import.svelte#L262); () => { importFromClipboard() activePopup.set(null) }. partial.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/converters/importHelpers.ts:227 importFromClipboard (depth 1); src/frontend/converters/importHelpers.ts:230 <callback> (depth 2); src/frontend/converters/txt.ts:51 convertText (depth 3); src/frontend/converters/txt.ts:293 preprocessLines (depth 4); src/frontend/converters/txt.ts:255 isHeaderLine (depth 5); src/frontend/converters/txt.ts:750 findGroupMatch (depth 6); src/frontend/components/helpers/show.ts:46 getLabelId (depth 6); src/frontend/converters/txt.ts:275 isChordLine (depth 5); src/frontend/converters/txt.ts:344 insertChordsIntoLyrics (depth 5); src/frontend/converters/txt.ts:330 <callback> (depth 5); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 4); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 5); src/frontend/components/helpers/show.ts:188 <callback> (depth 5); src/frontend/components/helpers/show.ts:192 <callback> (depth 5); src/frontend/converters/txt.ts:75 <callback> (depth 4); src/frontend/converters/txt.ts:78 <callback> (depth 5).

Effects: src/frontend/converters/txt.ts:176 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 5; depth cutoffs: 102. Full edges/effects/conditions in JSON.

## click — event-4aa526ca87eb509649

[code] [src/frontend/components/main/popups/Import.svelte:281](../../../../../src/frontend/components/main/popups/Import.svelte#L281); () => { if (format.id === "powerpoint") { // openedPage = "powerpoint" pptText() return } sendMain(Main.IMPORT, { channel: format.id, format }) displayTutorial(format) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project".

Calls: src/frontend/components/main/popups/Import.svelte:73 pptText (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/Import.svelte:89 displayTutorial (depth 1).

Effects: src/frontend/components/main/popups/Import.svelte:75 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:74 ipc sendMain(Main.IMPORT, { channel: "powerpoint", format: { name: "PowerPoint", extensions: &#91;"ppt", "pptx"&#93; } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/Import.svelte:91 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Import.svelte:95 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/main/popups/Import.svelte:96 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8841ce3ca2c0608ec1

[code] [src/frontend/components/main/popups/Import.svelte:300](../../../../../src/frontend/components/main/popups/Import.svelte#L300); () => { openedPage = "powerpoint" }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Import.svelte:118 openedPage === "powerpoint"; src/frontend/components/main/popups/Import.svelte:135 openedPage === "freeshow_more"; src/frontend/components/main/popups/Import.svelte:169 mode === "project"; src/frontend/components/main/popups/Import.svelte:296 format.id === "powerpoint".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
