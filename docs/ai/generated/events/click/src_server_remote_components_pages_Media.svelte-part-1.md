# click/src_server_remote_components_pages_Media.svelte (1)

## click — event-8d144074bcefdb43dc

[code] [src/server/remote/components/pages/Media.svelte:148](../../../../../src/server/remote/components/pages/Media.svelte#L148); togglePlayPause. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:52 togglePlayPause (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:53 ipc send("API:toggle_playing_media") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-622ade8113b38ab16a

[code] [src/server/remote/components/pages/Media.svelte:162](../../../../../src/server/remote/components/pages/Media.svelte#L162); () => seekRelative(-10). resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:75 seekRelative (depth 1); src/server/remote/components/pages/Media.svelte:80 seekTo (depth 2); src/server/remote/util/socket.ts:42 send (depth 3); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 3).

Effects: src/server/remote/components/pages/Media.svelte:81 ipc send("API:video_seekto", { seconds: value }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-41bec6fe8e2272b4a9

[code] [src/server/remote/components/pages/Media.svelte:166](../../../../../src/server/remote/components/pages/Media.svelte#L166); () => seekRelative(10). resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:75 seekRelative (depth 1); src/server/remote/components/pages/Media.svelte:80 seekTo (depth 2); src/server/remote/util/socket.ts:42 send (depth 3); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 3).

Effects: src/server/remote/components/pages/Media.svelte:81 ipc send("API:video_seekto", { seconds: value }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f29300a7d88a8d0d69

[code] [src/server/remote/components/pages/Media.svelte:172](../../../../../src/server/remote/components/pages/Media.svelte#L172); toggleLoop. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput; src/server/remote/components/pages/Media.svelte:58 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:57 toggleLoop (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:59 ipc send("API:toggle_media_loop") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-377a6e6f9cae0a265e

[code] [src/server/remote/components/pages/Media.svelte:176](../../../../../src/server/remote/components/pages/Media.svelte#L176); toggleMute. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput; src/server/remote/components/pages/Media.svelte:67 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:66 toggleMute (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:68 ipc send("API:toggle_media_mute") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-75b4323fea5ec56194

[code] [src/server/remote/components/pages/Media.svelte:183](../../../../../src/server/remote/components/pages/Media.svelte#L183); playInOutput. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:47 playInOutput (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:48 ipc send("API:play_media", { path, data: { type: mediaType, loop: shouldLoop, muted: shouldMute } }) ; src/server/remote/components/pages/Media.svelte:49 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
