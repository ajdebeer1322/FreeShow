# click/src_frontend_ai_components_floating_AiTranscription.svelte (1)

## click — event-0685fd014d61f583e2

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:64](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L64); () => Transcript.copy(). resolved-within-bound.

Conditions: src/frontend/ai/components/floating/AiTranscription.svelte:49 state === "error"; src/frontend/ai/components/floating/AiTranscription.svelte:51 state === "processing"; src/frontend/ai/components/floating/AiTranscription.svelte:56 $sttTranscript.finalized \|\| $sttTranscript.unprocessed; src/frontend/ai/components/floating/AiTranscription.svelte:62 $sttTranscript.finalized.

Calls: src/frontend/ai/stt/transcript.ts:59 copy (depth 1); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/ai/stt/transcript.ts:63 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d20f1805575435f11e

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:98](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L98); () => suggestion.trigger?.(). partial.

Conditions: src/frontend/ai/components/floating/AiTranscription.svelte:76 suggestions.length; src/frontend/ai/components/floating/AiTranscription.svelte:95 suggestion.action === "presented"; src/frontend/ai/components/floating/AiTranscription.svelte:97 suggestion.action === "open_scripture".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-77f556c5b5a8eea80c

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:105](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L105); () => { suggestion.trigger?.() // removeSuggestion(suggestion.id) }. partial.

Conditions: src/frontend/ai/components/floating/AiTranscription.svelte:76 suggestions.length; src/frontend/ai/components/floating/AiTranscription.svelte:95 suggestion.action === "presented"; src/frontend/ai/components/floating/AiTranscription.svelte:97 suggestion.action === "open_scripture"; src/frontend/ai/components/floating/AiTranscription.svelte:99 suggestion.trigger.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4c72d75e332513254c

[code] [src/frontend/ai/components/floating/AiTranscription.svelte:111](../../../../../src/frontend/ai/components/floating/AiTranscription.svelte#L111); () => removeSuggestion(suggestion.id). resolved-within-bound.

Conditions: src/frontend/ai/components/floating/AiTranscription.svelte:76 suggestions.length.

Calls: src/frontend/ai/components/floating/AiTranscription.svelte:42 removeSuggestion (depth 1); src/frontend/ai/components/floating/AiTranscription.svelte:43 <callback> (depth 2); src/frontend/ai/components/floating/AiTranscription.svelte:44 <callback> (depth 2); src/frontend/ai/components/floating/AiTranscription.svelte:44 <callback> (depth 3).

Effects: src/frontend/ai/components/floating/AiTranscription.svelte:43 store-write src/frontend/stores.ts#aiSmartAction ; src/frontend/ai/components/floating/AiTranscription.svelte:44 store-write src/frontend/stores.ts#aiSuggestions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
