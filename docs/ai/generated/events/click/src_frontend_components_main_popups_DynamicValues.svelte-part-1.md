# click/src_frontend_components_main_popups_DynamicValues.svelte (1)

## click — event-4908a568908fc12bb9

[code] [src/frontend/components/main/popups/DynamicValues.svelte:236](../../../../../src/frontend/components/main/popups/DynamicValues.svelte#L236); () => activePopup.set("manage_dynamic_values"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/DynamicValues.svelte:236 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-321c1e3a356e5f4a4f

[code] [src/frontend/components/main/popups/DynamicValues.svelte:238](../../../../../src/frontend/components/main/popups/DynamicValues.svelte#L238); toggleShowAll. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/DynamicValues.svelte:27 toggleShowAll (depth 0); src/frontend/components/main/popups/DynamicValues.svelte:38 getValues (depth 1); src/frontend/components/helpers/showActions.ts:781 getDynamicIds (depth 2); src/frontend/components/helpers/showActions.ts:782 <callback> (depth 3); src/frontend/components/helpers/showActions.ts:782 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:768 insertOffsetVariants (depth 3); src/frontend/components/helpers/showActions.ts:773 <callback> (depth 4); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 3); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 4); src/frontend/components/helpers/show.ts:188 <callback> (depth 4); src/frontend/components/helpers/show.ts:192 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:785 <callback> (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:791 <callback> (depth 3).

Effects: src/frontend/components/main/popups/DynamicValues.svelte:31 store-write src/frontend/stores.ts#dynamicValuesRevealUsed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5997414aa4e9ed1cf6

[code] [src/frontend/components/main/popups/DynamicValues.svelte:255](../../../../../src/frontend/components/main/popups/DynamicValues.svelte#L255); (e) => applyValue(e, value.id). partial.

Conditions: src/frontend/components/main/popups/DynamicValues.svelte:245 Object.values(searchedValues)&#91;0&#93;?.length.

Calls: src/frontend/components/main/popups/DynamicValues.svelte:119 applyValue (depth 1); src/frontend/components/main/popups/DynamicValues.svelte:138 <callback> (depth 2); src/frontend/components/main/popups/DynamicValues.svelte:183 updateItemText (depth 3); src/frontend/components/main/popups/DynamicValues.svelte:192 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:780 dynamicValueText (depth 5); src/frontend/components/main/popups/DynamicValues.svelte:213 finish (depth 2); src/frontend/components/main/popups/DynamicValues.svelte:216 <callback> (depth 3); src/frontend/components/main/popups/DynamicValues.svelte:96 search (depth 3); src/frontend/components/main/popups/DynamicValues.svelte:27 toggleShowAll (depth 4); src/frontend/components/main/popups/DynamicValues.svelte:38 getValues (depth 5); src/frontend/components/helpers/showActions.ts:781 getDynamicIds (depth 6); src/frontend/components/main/popups/DynamicValues.svelte:39 <callback> (depth 6); src/frontend/components/main/popups/DynamicValues.svelte:49 <callback> (depth 6); src/frontend/components/main/popups/DynamicValues.svelte:50 <callback> (depth 6); src/frontend/components/main/popups/DynamicValues.svelte:57 <callback> (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/components/main/popups/DynamicValues.svelte:144 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/main/popups/DynamicValues.svelte:164 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/main/popups/DynamicValues.svelte:180 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/main/popups/DynamicValues.svelte:138 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/main/popups/DynamicValues.svelte:139 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/main/popups/DynamicValues.svelte:140 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/main/popups/DynamicValues.svelte:220 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/DynamicValues.svelte:31 store-write src/frontend/stores.ts#dynamicValuesRevealUsed ; src/frontend/components/main/popups/DynamicValues.svelte:151 store-write src/frontend/stores.ts#overlays ; src/frontend/components/main/popups/DynamicValues.svelte:157 store-write src/frontend/stores.ts#templates ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 47. Full edges/effects/conditions in JSON.
