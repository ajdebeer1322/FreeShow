# drag-drop/src_frontend_components_timeline_Timeline.svelte (1)

## dragover — event-0530e94f893ef2825a

[code] [src/frontend/components/timeline/Timeline.svelte:830](../../../../../src/frontend/components/timeline/Timeline.svelte#L830); handleDragOver. resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed.

Calls: src/frontend/components/timeline/Timeline.svelte:528 handleDragOver (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## drop — event-7a0941b8fa1fd9da55

[code] [src/frontend/components/timeline/Timeline.svelte:830](../../../../../src/frontend/components/timeline/Timeline.svelte#L830); handleDrop. partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed.

Calls: src/frontend/components/timeline/Timeline.svelte:532 handleDrop (depth 0); src/frontend/components/timeline/TimelineActions.ts:250 handleDrop (depth 1); src/frontend/components/timeline/TimelineActions.ts:251 <callback> (depth 2); src/frontend/components/timeline/TimelineActions.ts:252 <callback> (depth 2); src/frontend/components/helpers/media.ts:38 getMediaType (depth 2); src/frontend/components/helpers/media.ts:19 getExtension (depth 2); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 9; depth cutoffs: 42. Full edges/effects/conditions in JSON.
