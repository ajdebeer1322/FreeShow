# click/src_server_remote_components_pages_Lyrics.svelte (1)

## click — event-0d5ae096bf80a2db50

[code] [src/server/remote/components/pages/Lyrics.svelte:33](../../../../../src/server/remote/components/pages/Lyrics.svelte#L33); click. resolved-within-bound.

Conditions: src/server/remote/components/pages/Lyrics.svelte:13 !e \|\| e.clientX < window.innerWidth / 3.

Calls: src/server/remote/components/pages/Lyrics.svelte:12 click (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Lyrics.svelte:13 ipc send("API:previous_slide") ; src/server/remote/components/pages/Lyrics.svelte:14 ipc send("API:next_slide") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
