# click/src_server_remote_components_tablet_layout_TabletRight.svelte (1)

## click — event-ae82351463a00fcfa3

[code] [src/server/remote/components/tablet/layout/TabletRight.svelte:114](../../../../../src/server/remote/components/tablet/layout/TabletRight.svelte#L114); () => send("API:previous_slide"). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletRight.svelte:111 $outShow && layout.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7bfe8b5c5540cdd73d

[code] [src/server/remote/components/tablet/layout/TabletRight.svelte:118](../../../../../src/server/remote/components/tablet/layout/TabletRight.svelte#L118); () => send("API:next_slide"). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletRight.svelte:111 $outShow && layout.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6ec6651e6bd21593a8

[code] [src/server/remote/components/tablet/layout/TabletRight.svelte:124](../../../../../src/server/remote/components/tablet/layout/TabletRight.svelte#L124); openOutShow. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletRight.svelte:111 $outShow && layout; src/server/remote/components/tablet/layout/TabletRight.svelte:123 $outShow; src/server/remote/components/tablet/layout/TabletRight.svelte:46 !showId.

Calls: src/server/remote/components/tablet/layout/TabletRight.svelte:44 openOutShow (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: src/server/remote/components/tablet/layout/TabletRight.svelte:49 store-write src/server/remote/util/stores.ts#active ; src/server/remote/components/tablet/layout/TabletRight.svelte:50 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/tablet/layout/TabletRight.svelte:51 store-write src/server/remote/util/stores.ts#activeShow ; src/server/remote/components/tablet/layout/TabletRight.svelte:48 ipc send("SHOW", showId) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
