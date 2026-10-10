# click/src_frontend_components_stage_tools_StageItemsList.svelte (1)

## click — event-901d0b9220f66e110e

[code] [src/frontend/components/stage/tools/StageItemsList.svelte:70](../../../../../src/frontend/components/stage/tools/StageItemsList.svelte#L70); (e) => { selected.set({ id: null, data: &#91;&#93; }) activeStage.update((ae) => { if (e.detail.ctrl) { if (ae.items.includes(id)) ae.items.splice(ae.items.indexOf(id), 1) else ae.items.pu. resolved-within-bound.

Conditions: src/frontend/components/stage/tools/StageItemsList.svelte:40 invertedItemList.length.

Calls: no function target resolved.

Effects: src/frontend/components/stage/tools/StageItemsList.svelte:71 store-write src/frontend/stores.ts#selected ; src/frontend/components/stage/tools/StageItemsList.svelte:72 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f07f3641a5c1cf55e6

[code] [src/frontend/components/stage/tools/StageItemsList.svelte:89](../../../../../src/frontend/components/stage/tools/StageItemsList.svelte#L89); () => rearrangeStageItems("backward", id). resolved-within-bound.

Conditions: src/frontend/components/stage/tools/StageItemsList.svelte:40 invertedItemList.length.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:238 rearrangeStageItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:269 getSortedStageItems (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:279 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:281 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:285 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:294 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:242 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:255 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:256 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:261 <callback> (depth 2).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:266 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/edit/scripts/itemHelpers.ts:285 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:255 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:257 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:256 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:261 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-66b686f803a45d7d97

[code] [src/frontend/components/stage/tools/StageItemsList.svelte:90](../../../../../src/frontend/components/stage/tools/StageItemsList.svelte#L90); () => rearrangeStageItems("forward", id). resolved-within-bound.

Conditions: src/frontend/components/stage/tools/StageItemsList.svelte:40 invertedItemList.length.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:238 rearrangeStageItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:269 getSortedStageItems (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:279 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:281 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:285 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:294 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:242 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:255 <callback> (depth 2); src/frontend/components/edit/scripts/itemHelpers.ts:256 <callback> (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:261 <callback> (depth 2).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:266 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/edit/scripts/itemHelpers.ts:285 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:255 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:257 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:256 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:261 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
