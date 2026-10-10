# automatic/src_frontend_components_main_popups_Restore.svelte (1)

## setTimeout — event-d997a500ed9e1add83

[code] [src/frontend/components/main/popups/Restore.svelte:54](../../../../../src/frontend/components/main/popups/Restore.svelte#L54); () => { sendMain(Main.DELETE_BACKUP, { path }) backupsList = backupsList.filter((b) => b.path !== path) clear() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Restore.svelte:54 <callback> (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1); src/frontend/components/main/popups/Restore.svelte:56 <callback> (depth 1); src/frontend/components/main/popups/Restore.svelte:60 clear (depth 1).

Effects: src/frontend/components/main/popups/Restore.svelte:55 ipc sendMain(Main.DELETE_BACKUP, { path }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
