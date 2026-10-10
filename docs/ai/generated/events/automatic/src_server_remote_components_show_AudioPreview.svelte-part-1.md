# automatic/src_server_remote_components_show_AudioPreview.svelte (1)

## setInterval — event-b5cc1db37369f4ac5a

[code] [src/server/remote/components/show/AudioPreview.svelte:30](../../../../../src/server/remote/components/show/AudioPreview.svelte#L30); () => { // if (paused) { // clearInterval(updaterInterval) // updaterInterval = null // } // if (sliderValue === null) currentTime = AudioPlayer.getTime(path) send("API:get_playing. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/show/AudioPreview.svelte:30 <callback> (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/show/AudioPreview.svelte:37 ipc send("API:get_playing_audio_data") ; src/server/remote/components/show/AudioPreview.svelte:38 ipc send("API:get_playing_audio_time") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
