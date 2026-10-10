# click/src_frontend_components_drawer_navigation_AudioTabs.svelte (1)

## click — event-9197b0da12d21a96bf

[code] [src/frontend/components/drawer/navigation/AudioTabs.svelte:125](../../../../../src/frontend/components/drawer/navigation/AudioTabs.svelte#L125); createPlaylist. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/navigation/AudioTabs.svelte:107 createPlaylist (depth 0); src/frontend/components/drawer/navigation/AudioTabs.svelte:109 <callback> (depth 1); src/frontend/components/drawer/navigation/AudioTabs.svelte:114 <callback> (depth 1).

Effects: src/frontend/components/drawer/navigation/AudioTabs.svelte:119 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/drawer/navigation/AudioTabs.svelte:109 store-write src/frontend/stores.ts#audioPlaylists ; src/frontend/components/drawer/navigation/AudioTabs.svelte:114 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ee32ef6f51de60e6f7

[code] [src/frontend/components/drawer/navigation/AudioTabs.svelte:131](../../../../../src/frontend/components/drawer/navigation/AudioTabs.svelte#L131); addFolder. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/navigation/AudioTabs.svelte:80 addFolder (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/drawer/navigation/AudioTabs.svelte:81 ipc sendMain(Main.OPEN_FOLDER, { channel: PICK_ID }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
