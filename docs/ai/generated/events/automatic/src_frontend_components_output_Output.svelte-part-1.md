# automatic/src_frontend_components_output_Output.svelte (1)

## setTimeout — event-372bbf1c953791489b

[code] [src/frontend/components/output/Output.svelte:232](../../../../../src/frontend/components/output/Output.svelte#L232); () => { lines&#91;currentLineId&#93; = getOutputLines(slide!, currentStyle.lines) // , currentSlide }. partial.

Conditions: src/frontend/components/output/Output.svelte:229 currentLineId.

Calls: src/frontend/components/output/Output.svelte:232 <callback> (depth 0); src/frontend/components/helpers/output.ts:1933 getOutputLines (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 50. Full edges/effects/conditions in JSON.

## setTimeout — event-4df732307f620737e8

[code] [src/frontend/components/output/Output.svelte:251](../../../../../src/frontend/components/output/Output.svelte#L251); () => { currentMetadataItems = &#91;&#93; cachedMetadataStr = "" }. resolved-within-bound.

Conditions: src/frontend/components/output/Output.svelte:242 metadataItems !== null.

Calls: src/frontend/components/output/Output.svelte:251 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-350520f60968ed62b8

[code] [src/frontend/components/output/Output.svelte:353](../../../../../src/frontend/components/output/Output.svelte#L353); () => { actualSlide = slideActive ? clone(slide) : null actualSlideData = clone(slideData) actualCurrentSlide = clone(currentSlide) actualCurrentLineId = clone(currentLineId) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/Output.svelte:354 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
