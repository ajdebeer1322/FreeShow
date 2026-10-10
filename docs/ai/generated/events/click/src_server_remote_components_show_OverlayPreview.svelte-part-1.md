# click/src_server_remote_components_show_OverlayPreview.svelte (1)

## click — event-404f47c10c56ecdd78

[code] [src/server/remote/components/show/OverlayPreview.svelte:21](../../../../../src/server/remote/components/show/OverlayPreview.svelte#L21); () => { send("API:id_select_overlay", { id: show.id }) send("API:get_cleared") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
