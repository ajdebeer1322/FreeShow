# click/src_frontend_components_main_popups_Restore.svelte (1)

## click — event-efb2e876e15596df25

[code] [src/frontend/components/main/popups/Restore.svelte:76](../../../../../src/frontend/components/main/popups/Restore.svelte#L76); () => activePopup.set($popupData.back). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Restore.svelte:75 $popupData.back.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/Restore.svelte:76 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a30fa7bd42b67cff29

[code] [src/frontend/components/main/popups/Restore.svelte:82](../../../../../src/frontend/components/main/popups/Restore.svelte#L82); () => restore(backup). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Restore.svelte:66 restore (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/main/popups/Restore.svelte:69 trigger (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3).

Effects: src/frontend/components/main/popups/Restore.svelte:67 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/Restore.svelte:71 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Restore.svelte:69 ipc sendMain(Main.RESTORE, { path: backup.path }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b79ff8764f9ebfb7f0

[code] [src/frontend/components/main/popups/Restore.svelte:91](../../../../../src/frontend/components/main/popups/Restore.svelte#L91); () => deleteBackup(backup.path). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Restore.svelte:90 backup.date < Date.now() - 86400000 * 30.

Calls: src/frontend/components/main/popups/Restore.svelte:44 deleteBackup (depth 1); src/frontend/components/main/popups/Restore.svelte:60 clear (depth 2); src/frontend/components/main/popups/Restore.svelte:54 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/components/main/popups/Restore.svelte:56 <callback> (depth 3).

Effects: src/frontend/components/main/popups/Restore.svelte:55 ipc sendMain(Main.DELETE_BACKUP, { path }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-162b0171eaf0c167ee

[code] [src/frontend/components/main/popups/Restore.svelte:97](../../../../../src/frontend/components/main/popups/Restore.svelte#L97); restoreCustom. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Restore.svelte:20 restoreCustom (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/main/popups/Restore.svelte:21 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/main/popups/Restore.svelte:22 ipc sendMain(Main.RESTORE) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
