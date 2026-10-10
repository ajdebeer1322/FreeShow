# click/src_server_remote_components_pages_Media.svelte (2)

## click — event-85193c49a11a2f6f7f

[code] [src/server/remote/components/pages/Media.svelte:202](../../../../../src/server/remote/components/pages/Media.svelte#L202); toggleLoop. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput; src/server/remote/components/pages/Media.svelte:199 isVideo; src/server/remote/components/pages/Media.svelte:58 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:57 toggleLoop (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:59 ipc send("API:toggle_media_loop") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8f31245c4c6dadd885

[code] [src/server/remote/components/pages/Media.svelte:206](../../../../../src/server/remote/components/pages/Media.svelte#L206); toggleMute. resolved-within-bound.

Conditions: src/server/remote/components/pages/Media.svelte:133 path; src/server/remote/components/pages/Media.svelte:134 isPlayingInOutput; src/server/remote/components/pages/Media.svelte:199 isVideo; src/server/remote/components/pages/Media.svelte:67 isPlayingInOutput.

Calls: src/server/remote/components/pages/Media.svelte:66 toggleMute (depth 0); src/server/remote/util/socket.ts:42 send (depth 1); src/server/remote/components/pages/Media.svelte:108 scheduleRefresh (depth 1).

Effects: src/server/remote/components/pages/Media.svelte:68 ipc send("API:toggle_media_mute") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
