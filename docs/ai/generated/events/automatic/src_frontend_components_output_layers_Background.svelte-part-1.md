# automatic/src_frontend_components_output_layers_Background.svelte (1)

## setTimeout — event-4fc98bd17b898d8356

[code] [src/frontend/components/output/layers/Background.svelte:48](../../../../../src/frontend/components/output/layers/Background.svelte#L48); () => { tooRapid = null if (tryAgain) createBackground() tryAgain = false }. partial.

Conditions: src/frontend/components/output/layers/Background.svelte:50 tryAgain.

Calls: src/frontend/components/output/layers/Background.svelte:48 <callback> (depth 0); src/frontend/components/output/layers/Background.svelte:40 createBackground (depth 1); src/frontend/components/helpers/debugLog.ts:246 debugRender (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/utils/request.ts:4 send (depth 4); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 5); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/components/output/layers/Background.svelte:35 bgName (depth 2).

Effects: src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-73e8e734a24b3199ab

[code] [src/frontend/components/output/layers/Background.svelte:95](../../../../../src/frontend/components/output/layers/Background.svelte#L95); () => { loading = true let loadingFirst = !background1 // && background2?.path ? background2?.path !== data.path : background2?.id !== data.id currentlyLoadingFirst = loadingFirst. partial.

Conditions: src/frontend/components/output/layers/Background.svelte:101 loadingFirst; src/frontend/components/output/layers/Background.svelte:112 loading.

Calls: src/frontend/components/output/layers/Background.svelte:95 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/output/layers/Background.svelte:111 <callback> (depth 1); src/frontend/components/output/layers/Background.svelte:117 loaded (depth 2); src/frontend/components/output/layers/Background.svelte:124 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-17a8274b3842618886

[code] [src/frontend/components/output/layers/Background.svelte:111](../../../../../src/frontend/components/output/layers/Background.svelte#L111); () => { if (loading) loaded(loadingFirst) }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/Background.svelte:112 loading.

Calls: src/frontend/components/output/layers/Background.svelte:111 <callback> (depth 0); src/frontend/components/output/layers/Background.svelte:117 loaded (depth 1); src/frontend/components/output/layers/Background.svelte:124 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9c7fb5e457cead1250

[code] [src/frontend/components/output/layers/Background.svelte:124](../../../../../src/frontend/components/output/layers/Background.svelte#L124); () => { if (isFirst) { background2 = null } else { background1 = null } timeout = null }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/Background.svelte:125 isFirst.

Calls: src/frontend/components/output/layers/Background.svelte:124 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a23149515dc430d7cb

[code] [src/frontend/components/output/layers/Background.svelte:148](../../../../../src/frontend/components/output/layers/Background.svelte#L148); () => { if (background1 && !(loading && !firstActive)) animation1 = animation else animation2 = animation }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/Background.svelte:150 background1 && !(loading && !firstActive).

Calls: src/frontend/components/output/layers/Background.svelte:149 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
