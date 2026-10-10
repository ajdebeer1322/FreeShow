# click/src_frontend_components_edit_tools_EditValues.svelte (1)

## click — event-45addf4b92e2532471

[code] [src/frontend/components/edit/tools/EditValues.svelte:345](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L345); () => toggleSection(id). partial.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:343 id !== "default".

Calls: src/frontend/components/edit/tools/EditValues.svelte:266 toggleSection (depth 1); src/frontend/components/edit/tools/EditValues.svelte:270 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/tools/EditValues.svelte:271 <callback> (depth 3); src/frontend/components/edit/scripts/shapeOutside.ts:40 getShapeOutsideStyle (depth 3); src/frontend/components/helpers/style.ts:6 getStyles (depth 4); src/frontend/components/helpers/style.ts:15 <callback> (depth 5); src/frontend/components/helpers/style.ts:22 <callback> (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 6); src/frontend/components/helpers/style.ts:37 getFilters (depth 6); src/frontend/components/edit/tools/EditValues.svelte:124 changed (depth 3); src/frontend/components/timeline/SlideTimeline.ts:63 hasActionWithKey (depth 4); src/frontend/components/timeline/SlideTimeline.ts:64 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:200 getActions (depth 5); src/frontend/components/timeline/SlideTimeline.ts:65 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:103 close (depth 5).

Effects: src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 17; depth cutoffs: 35. Full edges/effects/conditions in JSON.

## click — event-46f33a468a1f889d4a

[code] [src/frontend/components/edit/tools/EditValues.svelte:357](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L357); () => resetSection(id). partial.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:343 id !== "default"; src/frontend/components/edit/tools/EditValues.svelte:356 hasChanged.

Calls: src/frontend/components/edit/tools/EditValues.svelte:244 resetSection (depth 1); src/frontend/components/edit/tools/EditValues.svelte:245 <callback> (depth 2); src/frontend/components/edit/tools/EditValues.svelte:246 <callback> (depth 3); src/frontend/components/edit/tools/EditValues.svelte:231 isDefaultValue (depth 4); src/frontend/components/edit/tools/EditValues.svelte:36 getValue (depth 5); src/frontend/components/edit/tools/EditValues.svelte:85 getStyleString (depth 6); src/frontend/components/helpers/style.ts:37 getFilters (depth 6); src/frontend/components/helpers/style.ts:6 getStyles (depth 6); src/frontend/components/edit/scripts/edit.ts:36 parseShadowValue (depth 6); src/frontend/components/edit/scripts/shapeOutside.ts:14 parseShapeOutsideValue (depth 6); src/frontend/components/edit/tools/EditValues.svelte:258 <callback> (depth 4); src/frontend/components/edit/tools/EditValues.svelte:124 changed (depth 5); src/frontend/components/timeline/SlideTimeline.ts:63 hasActionWithKey (depth 6); src/frontend/components/timeline/SlideTimeline.ts:15 addKeyframe (depth 6); src/frontend/components/edit/tools/EditValues.svelte:151 <callback> (depth 6); src/frontend/components/edit/tools/EditValues.svelte:152 <callback> (depth 6).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 28. Full edges/effects/conditions in JSON.

## click — event-d785ff397093e21d79

[code] [src/frontend/components/edit/tools/EditValues.svelte:380](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L380); () => toggle(input). partial.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:368 expanded; src/frontend/components/edit/tools/EditValues.svelte:372 !input.hidden; src/frontend/components/edit/tools/EditValues.svelte:377 input.type === "fontDropdown"; src/frontend/components/edit/tools/EditValues.svelte:379 input.type === "toggle".

Calls: src/frontend/components/edit/tools/EditValues.svelte:103 toggle (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e830fca991c846952a

[code] [src/frontend/components/edit/tools/EditValues.svelte:385](../../../../../src/frontend/components/edit/tools/EditValues.svelte#L385); () => radio(input). partial.

Conditions: src/frontend/components/edit/tools/EditValues.svelte:368 expanded; src/frontend/components/edit/tools/EditValues.svelte:372 !input.hidden; src/frontend/components/edit/tools/EditValues.svelte:377 input.type === "fontDropdown"; src/frontend/components/edit/tools/EditValues.svelte:379 input.type === "toggle"; src/frontend/components/edit/tools/EditValues.svelte:384 input.type === "radio".

Calls: src/frontend/components/edit/tools/EditValues.svelte:116 radio (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
