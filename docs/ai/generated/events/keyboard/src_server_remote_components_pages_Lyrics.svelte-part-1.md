# keyboard/src_server_remote_components_pages_Lyrics.svelte (1)

## dynamic — event-eda35b5fc2a59fa24c

[code] [src/server/remote/components/pages/Lyrics.svelte:33](../../../../../src/server/remote/components/pages/Lyrics.svelte#L33); (e) => e.key === "Enter" && click(e). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/pages/Lyrics.svelte:12 click (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/pages/Lyrics.svelte:13 ipc send("API:previous_slide") ; src/server/remote/components/pages/Lyrics.svelte:14 ipc send("API:next_slide") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
