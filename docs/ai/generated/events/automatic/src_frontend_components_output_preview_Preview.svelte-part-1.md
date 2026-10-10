# automatic/src_frontend_components_output_preview_Preview.svelte (1)

## setTimeout — event-70fd527d7455afb020

[code] [src/frontend/components/output/preview/Preview.svelte:84](../../../../../src/frontend/components/output/preview/Preview.svelte#L84); () => { let slideIndex = Number(previousNumberKey) - 1 playSlideAtIndex(slideIndex) numberKeyTimeout = null previousNumberKey = "" }. partial.

Conditions: src/frontend/components/output/preview/Preview.svelte:80 $special.numberKeys && e.key !== " " && !isNaN(e.key as any); src/frontend/components/output/preview/Preview.svelte:62 (outSlide?.id \|\| $activeShow) && !e.ctrlKey && !e.metaKey && !$outLocked.

Calls: src/frontend/components/output/preview/Preview.svelte:84 <callback> (depth 0); src/frontend/components/output/preview/Preview.svelte:165 playSlideAtIndex (depth 1); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/output/preview/Preview.svelte:170 presentation updateOut ; src/frontend/components/output/preview/Preview.svelte:171 presentation setOutput ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 47; depth cutoffs: 294. Full edges/effects/conditions in JSON.

## setTimeout — event-114fd7875018c65096

[code] [src/frontend/components/output/preview/Preview.svelte:198](../../../../../src/frontend/components/output/preview/Preview.svelte#L198); () => { updatedActiveClear = activeClear }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/Preview.svelte:198 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
