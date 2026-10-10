# automatic/src_server_output_stream_App.svelte (1)

## setTimeout — event-26f48f76ee8fa12269

[code] [src/server/output_stream/App.svelte:19](../../../../../src/server/output_stream/App.svelte#L19); () => { fps = count count = 0 timeLoss = Date.now() - start - time if (timeLoss < time) setTimeout(() => (count = 0), timeLoss) startFPS() }. resolved-within-bound.

Conditions: src/server/output_stream/App.svelte:24 timeLoss < time.

Calls: src/server/output_stream/App.svelte:19 <callback> (depth 0); src/server/output_stream/App.svelte:24 <callback> (depth 1); src/server/output_stream/App.svelte:16 startFPS (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e640980c6d4a34bb7a

[code] [src/server/output_stream/App.svelte:24](../../../../../src/server/output_stream/App.svelte#L24); () => (count = 0). resolved-within-bound.

Conditions: src/server/output_stream/App.svelte:24 timeLoss < time.

Calls: src/server/output_stream/App.svelte:24 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c1ea1c057e19bde2db

[code] [src/server/output_stream/App.svelte:59](../../../../../src/server/output_stream/App.svelte#L59); () => (showAudioIcon = false). resolved-within-bound.

Conditions: src/server/output_stream/App.svelte:57 !audioSignal.

Calls: src/server/output_stream/App.svelte:59 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2ed683a9d76d267132

[code] [src/server/output_stream/App.svelte:143](../../../../../src/server/output_stream/App.svelte#L143); () => { clicked = false timeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/output_stream/App.svelte:143 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
