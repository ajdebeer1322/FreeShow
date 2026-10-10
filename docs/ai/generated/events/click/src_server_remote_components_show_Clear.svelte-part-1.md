# click/src_server_remote_components_show_Clear.svelte (1)

## click — event-113dcd5f7e80d1346a

[code] [src/server/remote/components/show/Clear.svelte:36](../../../../../src/server/remote/components/show/Clear.svelte#L36); () => { if (locked) return clear("API:clear_background") // outBackground = null }. partial.

Conditions: src/server/remote/components/show/Clear.svelte:30 moreOptions \|\| tablet; src/server/remote/components/show/Clear.svelte:33 type !== "pdf".

Calls: src/server/remote/components/show/Clear.svelte:20 clear (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/show/Clear.svelte:21 ipc send(id) ; src/server/remote/components/show/Clear.svelte:22 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3f926161d7feadfe8f

[code] [src/server/remote/components/show/Clear.svelte:53](../../../../../src/server/remote/components/show/Clear.svelte#L53); () => { if (locked) return clear("API:clear_slide") // outSlide = null }. partial.

Conditions: src/server/remote/components/show/Clear.svelte:30 moreOptions \|\| tablet.

Calls: src/server/remote/components/show/Clear.svelte:20 clear (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/show/Clear.svelte:21 ipc send(id) ; src/server/remote/components/show/Clear.svelte:22 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fbfd7911de6b985f9d

[code] [src/server/remote/components/show/Clear.svelte:69](../../../../../src/server/remote/components/show/Clear.svelte#L69); () => { if (locked) return clear("API:clear_overlays") // outOverlays = &#91;&#93; }. partial.

Conditions: src/server/remote/components/show/Clear.svelte:30 moreOptions \|\| tablet.

Calls: src/server/remote/components/show/Clear.svelte:20 clear (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/show/Clear.svelte:21 ipc send(id) ; src/server/remote/components/show/Clear.svelte:22 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-344af3a62ce1173274

[code] [src/server/remote/components/show/Clear.svelte:86](../../../../../src/server/remote/components/show/Clear.svelte#L86); () => clear("API:clear_all"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/show/Clear.svelte:20 clear (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/show/Clear.svelte:21 ipc send(id) ; src/server/remote/components/show/Clear.svelte:22 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3f29a02598ce20fe62

[code] [src/server/remote/components/show/Clear.svelte:92](../../../../../src/server/remote/components/show/Clear.svelte#L92); () => (moreOptions = !moreOptions). resolved-within-bound.

Conditions: src/server/remote/components/show/Clear.svelte:91 !tablet.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
