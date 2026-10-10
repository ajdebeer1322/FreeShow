# menu/to_front_stage (1)

## to_front_stage — event-cad62c5c667ce6e5c2

[code] [src/frontend/components/context/contextMenus.ts:183](../../../../../src/frontend/components/context/contextMenus.ts#L183); to_front_stage. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:2077 to_front_stage (depth 0); src/frontend/components/edit/scripts/itemHelpers.ts:238 rearrangeStageItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:269 getSortedStageItems (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:279 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:281 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:285 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:294 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:242 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:255 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:256 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:261 <callback> (depth 2).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:266 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/edit/scripts/itemHelpers.ts:285 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:255 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:257 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:256 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:261 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: items_list_item_stage src/frontend/components/context/contextMenus.ts:415. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/stage/tools/StageItemsList.svelte:50.
