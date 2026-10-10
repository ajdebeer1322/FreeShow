# automatic/src_server_cam_App.svelte (1)

## setInterval — event-97ef00505f2bb21467

[code] [src/server/cam/App.svelte:88](../../../../../src/server/cam/App.svelte#L88); function () { viewVideo(video, context) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/cam/App.svelte:88 <callback> (depth 0); src/server/cam/App.svelte:26 viewVideo (depth 1).

Effects: src/server/cam/App.svelte:29 network socket.emit ; src/server/cam/App.svelte:29 ipc socket.emit("CAM", { channel: "STREAM", data: canvas.toDataURL("image/webp") }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
