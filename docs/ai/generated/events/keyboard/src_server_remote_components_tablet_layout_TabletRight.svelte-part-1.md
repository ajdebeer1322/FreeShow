# keyboard/src_server_remote_components_tablet_layout_TabletRight.svelte (1)

## dynamic — event-a77a23ce4e02f05701

[code] [src/server/remote/components/tablet/layout/TabletRight.svelte:124](../../../../../src/server/remote/components/tablet/layout/TabletRight.svelte#L124); handleLabelKeydown. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletRight.svelte:111 $outShow && layout; src/server/remote/components/tablet/layout/TabletRight.svelte:123 $outShow; src/server/remote/components/tablet/layout/TabletRight.svelte:55 event.key === "Enter" \|\| event.key === " ".

Calls: src/server/remote/components/tablet/layout/TabletRight.svelte:54 handleLabelKeydown (depth 0); src/server/remote/components/tablet/layout/TabletRight.svelte:44 openOutShow (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/tablet/layout/TabletRight.svelte:49 store-write src/server/remote/util/stores.ts#active ; src/server/remote/components/tablet/layout/TabletRight.svelte:50 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/tablet/layout/TabletRight.svelte:51 store-write src/server/remote/util/stores.ts#activeShow ; src/server/remote/components/tablet/layout/TabletRight.svelte:48 ipc send("SHOW", showId) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
