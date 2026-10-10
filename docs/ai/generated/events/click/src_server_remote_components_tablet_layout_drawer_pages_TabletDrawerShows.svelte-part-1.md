# click/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerShows.svelte (1)

## click — event-4ab4429b5af7dceb04

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:122](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte#L122); () => toggleSort("name"). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:119 $shows.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:120 sortedShows.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:92 toggleSort (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cf4d90ea3d320fd0ab

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:132](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte#L132); () => toggleSort("number"). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:119 $shows.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:120 sortedShows.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:131 showWithNumber.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:92 toggleSort (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a8e9cb7e58d793758b

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:142](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte#L142); () => toggleSort("modified"). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:119 $shows.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:120 sortedShows.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:92 toggleSort (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cc562b375bbbc0d6c0

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:157](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte#L157); () => openShow(show). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:119 $shows.length; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:120 sortedShows.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:85 openShow (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:88 store-write src/server/remote/util/stores.ts#active ; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:89 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerShows.svelte:87 ipc send("SHOW", show.id) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
