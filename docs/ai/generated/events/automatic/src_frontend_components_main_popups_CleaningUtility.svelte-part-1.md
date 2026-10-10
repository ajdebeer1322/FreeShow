# automatic/src_frontend_components_main_popups_CleaningUtility.svelte (1)

## setTimeout — event-d7ba81b24316534890

[code] [src/frontend/components/main/popups/CleaningUtility.svelte:46](../../../../../src/frontend/components/main/popups/CleaningUtility.svelte#L46); () => { // this will not include newly created shows not saved yet, but it should not be an issue. sendMain(Main.FULL_SHOWS_LIST) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/CleaningUtility.svelte:46 <callback> (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/CleaningUtility.svelte:48 ipc sendMain(Main.FULL_SHOWS_LIST) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
