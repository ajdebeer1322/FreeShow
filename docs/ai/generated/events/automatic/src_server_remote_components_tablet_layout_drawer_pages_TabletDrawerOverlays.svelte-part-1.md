# automatic/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerOverlays.svelte (1)

## setTimeout — event-9ba4678538f187dfa4

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:61](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte#L61); () => send("API:get_cleared"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:61 <callback> (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:61 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4465586379175f3d5c

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:77](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte#L77); () => { isLoading = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:77 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
