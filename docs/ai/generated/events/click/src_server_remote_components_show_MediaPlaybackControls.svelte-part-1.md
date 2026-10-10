# click/src_server_remote_components_show_MediaPlaybackControls.svelte (1)

## click — event-85fe698bfcbfbc1268

[code] [src/server/remote/components/show/MediaPlaybackControls.svelte:154](../../../../../src/server/remote/components/show/MediaPlaybackControls.svelte#L154); togglePlayPause. resolved-within-bound.

Conditions: src/server/remote/components/show/MediaPlaybackControls.svelte:136 isMediaActive; src/server/remote/components/show/MediaPlaybackControls.svelte:103 isVideo; src/server/remote/components/show/MediaPlaybackControls.svelte:105 hasAudio; src/server/remote/components/show/MediaPlaybackControls.svelte:106 audioPaused.

Calls: src/server/remote/components/show/MediaPlaybackControls.svelte:102 togglePlayPause (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/show/MediaPlaybackControls.svelte:104 ipc send("API:toggle_playing_media") ; src/server/remote/components/show/MediaPlaybackControls.svelte:106 ipc send("API:play_audio", { path: audioData.id }) ; src/server/remote/components/show/MediaPlaybackControls.svelte:107 ipc send("API:pause_audio", { path: audioData.id }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9cf2aee43c91b4fd12

[code] [src/server/remote/components/show/MediaPlaybackControls.svelte:158](../../../../../src/server/remote/components/show/MediaPlaybackControls.svelte#L158); () => seekRelative(-10). resolved-within-bound.

Conditions: src/server/remote/components/show/MediaPlaybackControls.svelte:136 isMediaActive.

Calls: src/server/remote/components/show/MediaPlaybackControls.svelte:127 seekRelative (depth 1); src/server/remote/components/show/MediaPlaybackControls.svelte:121 seekTo (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/show/MediaPlaybackControls.svelte:122 ipc send("API:video_seekto", { seconds }) ; src/server/remote/components/show/MediaPlaybackControls.svelte:123 ipc send("API:audio_seekto", { seconds }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-07ad7a5b72e825bb40

[code] [src/server/remote/components/show/MediaPlaybackControls.svelte:162](../../../../../src/server/remote/components/show/MediaPlaybackControls.svelte#L162); () => seekRelative(10). resolved-within-bound.

Conditions: src/server/remote/components/show/MediaPlaybackControls.svelte:136 isMediaActive.

Calls: src/server/remote/components/show/MediaPlaybackControls.svelte:127 seekRelative (depth 1); src/server/remote/components/show/MediaPlaybackControls.svelte:121 seekTo (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/show/MediaPlaybackControls.svelte:122 ipc send("API:video_seekto", { seconds }) ; src/server/remote/components/show/MediaPlaybackControls.svelte:123 ipc send("API:audio_seekto", { seconds }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-eb058dd6d0cf22e19e

[code] [src/server/remote/components/show/MediaPlaybackControls.svelte:167](../../../../../src/server/remote/components/show/MediaPlaybackControls.svelte#L167); toggleLoop. resolved-within-bound.

Conditions: src/server/remote/components/show/MediaPlaybackControls.svelte:136 isMediaActive; src/server/remote/components/show/MediaPlaybackControls.svelte:166 isVideo; src/server/remote/components/show/MediaPlaybackControls.svelte:115 isVideo.

Calls: src/server/remote/components/show/MediaPlaybackControls.svelte:114 toggleLoop (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/show/MediaPlaybackControls.svelte:116 ipc send("API:toggle_media_loop") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
