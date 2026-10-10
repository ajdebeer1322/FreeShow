# automatic/src_frontend_ai_components_floating_AiTranscription.svelte (1)

## setTimeout — event-4462f1d06cc20815d9

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:20](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L20); () => { if (!transcriptElem) return // already at the bottom: no scroll, and crucially no guard window that would swallow // a genuine user scroll gesture arriving between updates. partial.

Conditions: src/frontend/ai/components/floating/AiTranscription.svelte:21 !transcriptElem; src/frontend/ai/components/floating/AiTranscription.svelte:24 transcriptElem.scrollHeight - transcriptElem.scrollTop - transcriptElem.clientHeight < 2; src/frontend/ai/components/floating/AiTranscription.svelte:27 autoScrollTimer.

Calls: src/frontend/ai/components/floating/AiTranscription.svelte:20 <callback> (depth 0); src/frontend/ai/components/floating/AiTranscription.svelte:28 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-68240e039649687514

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:28](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L28); () => (autoScrollTimer = null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/ai/components/floating/AiTranscription.svelte:28 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
