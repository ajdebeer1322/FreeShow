# click/src_server_remote_components_pages_Shows.svelte (1)

## click — event-3e057bf969c5d0a0cf

[code] [src/server/remote/components/pages/Shows.svelte:186](../../../../../src/server/remote/components/pages/Shows.svelte#L186); select. resolved-within-bound.

Conditions: src/server/remote/components/pages/Shows.svelte:184 $shows.length; src/server/remote/components/pages/Shows.svelte:185 $shows.length < 10 \|\| loadingStarted; src/server/remote/components/pages/Shows.svelte:165 selected.

Calls: src/server/remote/components/pages/Shows.svelte:164 select (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6ffefcc51f6d1a3691

[code] [src/server/remote/components/pages/Shows.svelte:191](../../../../../src/server/remote/components/pages/Shows.svelte#L191); (e) => openShow(e.detail). partial.

Conditions: src/server/remote/components/pages/Shows.svelte:184 $shows.length; src/server/remote/components/pages/Shows.svelte:185 $shows.length < 10 \|\| loadingStarted; src/server/remote/components/pages/Shows.svelte:190 searchValue.length <= 1 \|\| show.match.

Calls: src/server/remote/components/pages/Shows.svelte:108 openShow (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/pages/Shows.svelte:115 store-write src/server/remote/util/stores.ts#active ; src/server/remote/components/pages/Shows.svelte:116 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/pages/Shows.svelte:109 ipc send("SHOW", id) ; src/server/remote/components/pages/Shows.svelte:112 ipc send("API:index_select_slide", { showId: id, index: 0 }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5233710f8516c41a88

[code] [src/server/remote/components/pages/Shows.svelte:210](../../../../../src/server/remote/components/pages/Shows.svelte#L210); newShow. resolved-within-bound.

Conditions: src/server/remote/components/pages/Shows.svelte:184 $shows.length; src/server/remote/components/pages/Shows.svelte:185 $shows.length < 10 \|\| loadingStarted; src/server/remote/components/pages/Shows.svelte:208 !$createShow; src/server/remote/components/pages/Shows.svelte:136 initialName.

Calls: src/server/remote/components/pages/Shows.svelte:133 newShow (depth 0).

Effects: src/server/remote/components/pages/Shows.svelte:137 store-write src/server/remote/util/stores.ts#createShow ; src/server/remote/components/pages/Shows.svelte:139 store-write src/server/remote/util/stores.ts#createShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
