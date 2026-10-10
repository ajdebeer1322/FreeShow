# keyboard/src_server_remote_components_pages_Shows.svelte (1)

## dynamic — event-59e682e6a6bf48f83e

[code] [src/server/remote/components/pages/Shows.svelte:186](../../../../../src/server/remote/components/pages/Shows.svelte#L186); showSearchKeydown. partial.

Conditions: src/server/remote/components/pages/Shows.svelte:184 $shows.length; src/server/remote/components/pages/Shows.svelte:185 $shows.length < 10 \|\| loadingStarted; src/server/remote/components/pages/Shows.svelte:121 e.key === "Enter" && visibleShows.length > 0.

Calls: src/server/remote/components/pages/Shows.svelte:120 showSearchKeydown (depth 0); src/server/remote/components/pages/Shows.svelte:108 openShow (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/pages/Shows.svelte:115 store-write src/server/remote/util/stores.ts#active ; src/server/remote/components/pages/Shows.svelte:116 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/pages/Shows.svelte:109 ipc send("SHOW", id) ; src/server/remote/components/pages/Shows.svelte:112 ipc send("API:index_select_slide", { showId: id, index: 0 }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
