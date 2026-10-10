# automatic/src_frontend_components_output_layers_SlideContent.svelte (1)

## setInterval — event-5310596858809cfd32

[code] [src/frontend/components/output/layers/SlideContent.svelte:102](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L102); () => { if (isClearing \|\| !Array.isArray(currentItems)) return if (currentItems.find((a) => a?.conditions)) conditionsUpdater++ }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:104 isClearing \|\| !Array.isArray(currentItems); src/frontend/components/output/layers/SlideContent.svelte:105 currentItems.find((a) => a?.conditions).

Calls: src/frontend/components/output/layers/SlideContent.svelte:103 <callback> (depth 0); src/frontend/components/output/layers/SlideContent.svelte:105 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f80605c08ac0ee0f1c

[code] [src/frontend/components/output/layers/SlideContent.svelte:229](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L229); continueAfterAutoSize. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/layers/SlideContent.svelte:231 continueAfterAutoSize (depth 0); src/frontend/components/output/layers/SlideContent.svelte:236 stopAutoSizeWait (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-111837300ec8c217a8

[code] [src/frontend/components/output/layers/SlideContent.svelte:307](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L307); () => (isClearingToEmpty = false). resolved-within-bound.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:305 transitionEnabled; src/frontend/components/output/layers/SlideContent.svelte:286 !currentSlideItems?.length.

Calls: src/frontend/components/output/layers/SlideContent.svelte:307 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d2d5e6dc9d802a8f5f

[code] [src/frontend/components/output/layers/SlideContent.svelte:400](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L400); () => { if (gen !== updateGeneration) return // Only include items that need transitioning in currentItems // Persistent items are rendered separately currentItems = clone(currentS. partial.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:401 gen !== updateGeneration; src/frontend/components/output/layers/SlideContent.svelte:416 gen !== updateGeneration; src/frontend/components/output/layers/SlideContent.svelte:422 gen !== updateGeneration.

Calls: src/frontend/components/output/layers/SlideContent.svelte:400 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/output/layers/SlideContent.svelte:415 <callback> (depth 1); src/frontend/components/helpers/debugLog.ts:246 debugRender (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/utils/request.ts:4 send (depth 4); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 5); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6).

Effects: src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-00a81e231a7ad2e7bd

[code] [src/frontend/components/output/layers/SlideContent.svelte:415](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L415); () => { if (gen !== updateGeneration) return debugRender("slide content shown again (show = true)") setShow(true) // wait for between to set in transition timeout = setTimeout(() =. partial.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:416 gen !== updateGeneration; src/frontend/components/output/layers/SlideContent.svelte:422 gen !== updateGeneration.

Calls: src/frontend/components/output/layers/SlideContent.svelte:415 <callback> (depth 0); src/frontend/components/helpers/debugLog.ts:246 debugRender (depth 1); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 2); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 2); src/frontend/utils/request.ts:4 send (depth 3); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 4); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 5); src/frontend/utils/request.ts:6 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 3); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 4); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 3); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 3); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 5); src/frontend/components/output/layers/SlideContent.svelte:57 setShow (depth 1); src/frontend/components/output/layers/SlideContent.svelte:421 <callback> (depth 1).

Effects: src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6df477161120f4a709

[code] [src/frontend/components/output/layers/SlideContent.svelte:421](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L421); () => { if (gen !== updateGeneration) return transitioningBetween = false }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:422 gen !== updateGeneration.

Calls: src/frontend/components/output/layers/SlideContent.svelte:421 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
