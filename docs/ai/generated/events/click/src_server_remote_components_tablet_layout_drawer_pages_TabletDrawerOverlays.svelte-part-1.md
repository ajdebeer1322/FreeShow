# click/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerOverlays.svelte (1)

## click — event-e1e67ff13aef8af2f3

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:93](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte#L93); () => toggleOverlay(overlay.id). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:87 overlaysList.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:88 sortedOverlays.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:52 toggleOverlay (depth 1); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:65 isOverlayActive (depth 2); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:61 <callback> (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:55 ipc send("API:clear_overlay", { id: overlayId }) ; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:58 ipc send("API:id_select_overlay", { id: overlayId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) ; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerOverlays.svelte:61 ipc send("API:get_cleared") .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
