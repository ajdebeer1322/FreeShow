# click/src_frontend_components_main_popups_CleaningUtility.svelte (1)

## click — event-9872880e9fc3f54e25

[code] [src/frontend/components/main/popups/CleaningUtility.svelte:92](../../../../../src/frontend/components/main/popups/CleaningUtility.svelte#L92); deleteBrokenShows. resolved-within-bound.

Conditions: src/frontend/components/main/popups/CleaningUtility.svelte:86 type === "shows"; src/frontend/components/main/popups/CleaningUtility.svelte:87 allShowsInFolder.length > Object.keys($shows).length \|\| emptyShows.length \|\| duplicatedShows.length; src/frontend/components/main/popups/CleaningUtility.svelte:90 allShowsInFolder.length > Object.keys($shows).length.

Calls: src/frontend/components/main/popups/CleaningUtility.svelte:43 deleteBrokenShows (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/CleaningUtility.svelte:46 <callback> (depth 1).

Effects: src/frontend/components/main/popups/CleaningUtility.svelte:44 ipc sendMain(Main.DELETE_SHOWS_NI, { shows: $shows }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/main/popups/CleaningUtility.svelte:48 ipc sendMain(Main.FULL_SHOWS_LIST) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0efaa887a94cf92826

[code] [src/frontend/components/main/popups/CleaningUtility.svelte:101](../../../../../src/frontend/components/main/popups/CleaningUtility.svelte#L101); deleteEmptyShows. resolved-within-bound.

Conditions: src/frontend/components/main/popups/CleaningUtility.svelte:86 type === "shows"; src/frontend/components/main/popups/CleaningUtility.svelte:87 allShowsInFolder.length > Object.keys($shows).length \|\| emptyShows.length \|\| duplicatedShows.length; src/frontend/components/main/popups/CleaningUtility.svelte:99 emptyShows.length.

Calls: src/frontend/components/main/popups/CleaningUtility.svelte:53 deleteEmptyShows (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/CleaningUtility.svelte:56 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/popups/CleaningUtility.svelte:54 ipc sendMain(Main.DELETE_SHOWS, { shows: emptyShows }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-221ea43aa7511f4ced

[code] [src/frontend/components/main/popups/CleaningUtility.svelte:122](../../../../../src/frontend/components/main/popups/CleaningUtility.svelte#L122); deleteDuplicatedShows. resolved-within-bound.

Conditions: src/frontend/components/main/popups/CleaningUtility.svelte:86 type === "shows"; src/frontend/components/main/popups/CleaningUtility.svelte:87 allShowsInFolder.length > Object.keys($shows).length \|\| emptyShows.length \|\| duplicatedShows.length; src/frontend/components/main/popups/CleaningUtility.svelte:120 duplicatedShows.length.

Calls: src/frontend/components/main/popups/CleaningUtility.svelte:79 deleteDuplicatedShows (depth 0).

Effects: src/frontend/components/main/popups/CleaningUtility.svelte:80 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/CleaningUtility.svelte:81 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
