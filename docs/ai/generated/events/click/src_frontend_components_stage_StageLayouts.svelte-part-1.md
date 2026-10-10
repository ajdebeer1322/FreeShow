# click/src_frontend_components_stage_StageLayouts.svelte (1)

## click — event-eaadf20d49f3afc147

[code] [src/frontend/components/stage/StageLayouts.svelte:98](../../../../../src/frontend/components/stage/StageLayouts.svelte#L98); (e) => { if (!e.ctrlKey && !e.metaKey && !document.activeElement?.closest?.(".edit")) activeStage.update((as) => { as.id = show.id return as }) }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayouts.svelte:89 sortedStageSlides.length; src/frontend/components/stage/StageLayouts.svelte:93 loaded \|\| i < lazyLoader.

Calls: no function target resolved.

Effects: src/frontend/components/stage/StageLayouts.svelte:100 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d9ae512ed1100386c9

[code] [src/frontend/components/stage/StageLayouts.svelte:110](../../../../../src/frontend/components/stage/StageLayouts.svelte#L110); (e) => { if (!e.ctrlKey && !e.metaKey && !document.activeElement?.closest?.(".edit")) activeStage.update((as) => { as.id = show.id return as }) }. resolved-within-bound.

Conditions: src/frontend/components/stage/StageLayouts.svelte:89 sortedStageSlides.length; src/frontend/components/stage/StageLayouts.svelte:93 loaded \|\| i < lazyLoader.

Calls: no function target resolved.

Effects: src/frontend/components/stage/StageLayouts.svelte:112 store-write src/frontend/stores.ts#activeStage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-13e42e4d047e9025db

[code] [src/frontend/components/stage/StageLayouts.svelte:131](../../../../../src/frontend/components/stage/StageLayouts.svelte#L131); addSlide. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/stage/StageLayouts.svelte:15 addSlide (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/stage/StageLayouts.svelte:16 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.
