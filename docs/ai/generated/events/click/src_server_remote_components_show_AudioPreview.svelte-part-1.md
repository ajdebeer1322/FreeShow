# click/src_server_remote_components_show_AudioPreview.svelte (1)

## click — event-0822b7084f582a6c14

[code] [src/server/remote/components/show/AudioPreview.svelte:76](../../../../../src/server/remote/components/show/AudioPreview.svelte#L76); () => { send("API:play_audio", { path }) // audioData.id = path }. resolved-within-bound.

Conditions: src/server/remote/components/show/AudioPreview.svelte:69 audioData?.id === undefined.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-27aa65607269d171c2

[code] [src/server/remote/components/show/AudioPreview.svelte:92](../../../../../src/server/remote/components/show/AudioPreview.svelte#L92); () => { if (paused) send("API:play_audio", { path }) else send("API:pause_audio", { path }) send("API:get_playing_audio_data") }. resolved-within-bound.

Conditions: src/server/remote/components/show/AudioPreview.svelte:69 audioData?.id === undefined.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-571008e60e407ce4a2

[code] [src/server/remote/components/show/AudioPreview.svelte:118](../../../../../src/server/remote/components/show/AudioPreview.svelte#L118); () => { send("API:stop_audio", { path }) currentTime = 0 audioData = {} }. resolved-within-bound.

Conditions: src/server/remote/components/show/AudioPreview.svelte:69 audioData?.id === undefined.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
