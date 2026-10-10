# automatic/src_server_remote_components_pages_Media.svelte (1)

## setInterval — event-67486a762e9e391993

[code] [src/server/remote/components/pages/Media.svelte:93](../../../../../src/server/remote/components/pages/Media.svelte#L93); fetchVideoState. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:86 !isVideo \|\| !isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:85 fetchVideoState (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:87 ipc send("API:get_playing_video_state") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-dee76b701fab2fc38f

[code] [src/server/remote/components/pages/Media.svelte:110](../../../../../src/server/remote/components/pages/Media.svelte#L110); fetchVideoState. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:86 !isVideo \|\| !isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:85 fetchVideoState (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:87 ipc send("API:get_playing_video_state") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-427812a0e7bb0602b0

[code] [src/server/remote/components/pages/Media.svelte:111](../../../../../src/server/remote/components/pages/Media.svelte#L111); fetchVideoState. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:86 !isVideo \|\| !isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:85 fetchVideoState (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:87 ipc send("API:get_playing_video_state") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
