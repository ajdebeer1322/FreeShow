# automatic/src_frontend_components_edit_tools_EditValues.svelte (1)

## setTimeout — event-555e8302b42a7077e2

[code] [src/frontend/components/edit/tools/EditValues.svelte:258](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L258); () => changed({ detail: defaultValue }, input). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/tools/EditValues.svelte:258 <callback> (depth 0); src/frontend/components/edit/tools/EditValues.svelte:124 changed (depth 1); src/frontend/components/timeline/SlideTimeline.ts:63 hasActionWithKey (depth 2); src/frontend/components/timeline/SlideTimeline.ts:64 <callback> (depth 3); src/frontend/components/timeline/TimelineActions.ts:200 getActions (depth 3); src/frontend/components/timeline/SlideTimeline.ts:65 <callback> (depth 3); src/frontend/components/timeline/TimelineActions.ts:103 close (depth 3); src/frontend/components/timeline/TimelineActions.ts:120 saveState (depth 4); src/frontend/components/timeline/TimelineActions.ts:129 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/timeline/TimelineActions.ts:140 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:152 <callback> (depth 5); src/frontend/components/timeline/SlideTimeline.ts:15 addKeyframe (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5).

Effects: src/frontend/components/timeline/TimelineActions.ts:129 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/timeline/TimelineActions.ts:140 store-write src/frontend/stores.ts#projects ; src/frontend/components/timeline/TimelineActions.ts:152 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 18; depth cutoffs: 39. Full edges/effects/conditions in JSON.

## setTimeout — event-c7840e6c55573d6a4b

[code] [src/frontend/components/edit/tools/EditValues.svelte:262](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L262); () => toggleSection(id). partial.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:262 sections&#91;id&#93;.expandAutoValue.

Calls: src/frontend/components/edit/tools/EditValues.svelte:262 <callback> (depth 0); src/frontend/components/edit/tools/EditValues.svelte:266 toggleSection (depth 1); src/frontend/components/edit/tools/EditValues.svelte:270 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/tools/EditValues.svelte:271 <callback> (depth 3); src/frontend/components/edit/scripts/shapeOutside.ts:40 getShapeOutsideStyle (depth 3); src/frontend/components/helpers/style.ts:6 getStyles (depth 4); src/frontend/components/helpers/style.ts:15 <callback> (depth 5); src/frontend/components/helpers/style.ts:22 <callback> (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 6); src/frontend/components/helpers/style.ts:37 getFilters (depth 6); src/frontend/components/edit/tools/EditValues.svelte:124 changed (depth 3); src/frontend/components/timeline/SlideTimeline.ts:63 hasActionWithKey (depth 4); src/frontend/components/timeline/SlideTimeline.ts:64 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:200 getActions (depth 5); src/frontend/components/timeline/SlideTimeline.ts:65 <callback> (depth 5).

Effects: src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 17; depth cutoffs: 35. Full edges/effects/conditions in JSON.

## setInterval — event-0b488d48e7ca8a7454

[code] [src/frontend/components/edit/tools/EditValues.svelte:330](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L330); () => timelineUpdater++. resolved-within-bound.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:329 sections?.timeline && !updaterInterval.

Calls: src/frontend/components/edit/tools/EditValues.svelte:330 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
