# click/src_frontend_components_main_popups_SelectStyle.svelte (1)

## click — event-54d40db59fff34b8c3

[code] [src/frontend/components/main/popups/SelectStyle.svelte:65](../../../../../src/frontend/components/main/popups/SelectStyle.svelte#L65); createNew. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectStyle.svelte:55 createNew (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/main/popups/SelectStyle.svelte:57 history history UPDATE; src/frontend/components/main/popups/SelectStyle.svelte:59 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/main/popups/SelectStyle.svelte:60 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/main/popups/SelectStyle.svelte:61 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-a9c8a54e7671308d4c

[code] [src/frontend/components/main/popups/SelectStyle.svelte:72](../../../../../src/frontend/components/main/popups/SelectStyle.svelte#L72); () => select(style.id). partial.

Conditions: src/frontend/components/main/popups/SelectStyle.svelte:68 outputStyles.length.

Calls: src/frontend/components/main/popups/SelectStyle.svelte:24 select (depth 1); src/frontend/components/main/popups/SelectStyle.svelte:33 <callback> (depth 2); src/frontend/components/main/popups/SelectStyle.svelte:34 <callback> (depth 3).

Effects: src/frontend/components/main/popups/SelectStyle.svelte:31 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/SelectStyle.svelte:35 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectStyle.svelte:34 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3304fcd2a2219abcc1

[code] [src/frontend/components/main/popups/SelectStyle.svelte:88](../../../../../src/frontend/components/main/popups/SelectStyle.svelte#L88); () => activePopup.set(null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectStyle.svelte:86 skip.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/SelectStyle.svelte:88 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
