# automatic/src_server_stage_components_PreviewCanvas.svelte (1)

## setInterval — event-df1c03027905caf74d

[code] [src/server/stage/components/PreviewCanvas.svelte:12](../../../../../src/server/stage/components/PreviewCanvas.svelte#L12); () => send("STREAM_SUBSCRIBE", { outputId }). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/components/PreviewCanvas.svelte:12 <callback> (depth 0); src/server/stage/util/socket.ts:26 send (depth 1).

Effects: src/server/stage/components/PreviewCanvas.svelte:12 ipc send("STREAM_SUBSCRIBE", { outputId }) ; src/server/stage/util/socket.ts:26 network socket.emit ; src/server/stage/util/socket.ts:26 ipc socket.emit("STAGE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
