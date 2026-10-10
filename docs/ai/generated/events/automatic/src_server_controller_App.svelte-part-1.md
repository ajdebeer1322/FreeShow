# automatic/src_server_controller_App.svelte (1)

## setInterval — event-79ed4212bfe2597ac3

[code] [src/server/controller/App.svelte:35](../../../../../src/server/controller/App.svelte#L35); requestThumbnail. resolved-within-bound.

Conditions: src/server/controller/App.svelte:35 draw && !thumbnailInterval; src/server/controller/App.svelte:42 !outputId \|\| !frameReceived.

Calls: src/server/controller/App.svelte:41 requestThumbnail (depth 0).

Effects: src/server/controller/App.svelte:44 network socket.emit ; src/server/controller/App.svelte:44 ipc socket.emit("CONTROLLER", { channel: "OUTPUT_FRAME", data: { outputId } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9190248b4f94f83812

[code] [src/server/controller/App.svelte:54](../../../../../src/server/controller/App.svelte#L54); () => (justCleared = null). resolved-within-bound.

Conditions: src/server/controller/App.svelte:53 id === "clear"; src/server/controller/App.svelte:50 justCleared.

Calls: src/server/controller/App.svelte:54 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
