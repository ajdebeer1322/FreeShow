# drag-drop/src_frontend_components_output_preview_MultiOutputs.svelte (1)

## dragover — event-19d5dd78adb78bb727

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:161](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L161); (e) => handleDragOver(e, output.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/MultiOutputs.svelte:110 handleDragOver (depth 1); src/frontend/components/output/preview/MultiOutputs.svelte:107 isDroppable (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragleave — event-3cc1048c83a990bb13

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:161](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L161); (e) => handleDragLeave(e, output.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/MultiOutputs.svelte:115 handleDragLeave (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## drop — event-ed59fb7b873c37d307

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:161](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L161); (e) => handleDrop(e, output.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/MultiOutputs.svelte:120 handleDrop (depth 1); src/frontend/components/output/preview/MultiOutputs.svelte:107 isDroppable (depth 2); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 103. Full edges/effects/conditions in JSON.
