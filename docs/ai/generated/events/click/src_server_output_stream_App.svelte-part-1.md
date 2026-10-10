# click/src_server_output_stream_App.svelte (1)

## click — event-a36899531824fd7848

[code] [src/server/output_stream/App.svelte:169](../../../../../src/server/output_stream/App.svelte#L169); click. resolved-within-bound.

Conditions: src/server/output_stream/App.svelte:141 timeout.

Calls: src/server/output_stream/App.svelte:139 click (depth 0); src/server/output_stream/App.svelte:143 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bab40efadaa359de1f

[code] [src/server/output_stream/App.svelte:176](../../../../../src/server/output_stream/App.svelte#L176); toggleFullscreen. partial.

Conditions: src/server/output_stream/App.svelte:175 clicked; src/server/output_stream/App.svelte:127 !doc.fullscreenElement.

Calls: src/server/output_stream/App.svelte:123 toggleFullscreen (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3fa36b0a284c58b5f3

[code] [src/server/output_stream/App.svelte:188](../../../../../src/server/output_stream/App.svelte#L188); toggleMute. partial.

Conditions: src/server/output_stream/App.svelte:187 (clicked \|\| showAudioIcon) && audioSignal; src/server/output_stream/App.svelte:150 !audioMuted; src/server/output_stream/App.svelte:158 audioContext?.state === "suspended".

Calls: src/server/output_stream/App.svelte:149 toggleMute (depth 0); src/server/common/util/audioStream.ts:11 mutePlayback (depth 1); src/server/common/util/audioStream.ts:6 createGain (depth 2); src/server/output_stream/App.svelte:159 <callback> (depth 1); src/server/common/util/audioStream.ts:18 unmutePlayback (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
