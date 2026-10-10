# click/src_frontend_components_main_popups_ManageGroups.svelte (1)

## click — event-5b4e96c84f88c54ba1

[code] [src/frontend/components/main/popups/ManageGroups.svelte:83](../../../../../src/frontend/components/main/popups/ManageGroups.svelte#L83); () => groupsMoreOptionsEnabled.set(!showMore). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/ManageGroups.svelte:83 store-write src/frontend/stores.ts#groupsMoreOptionsEnabled .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-45e3d9bc968ce613ac

[code] [src/frontend/components/main/popups/ManageGroups.svelte:86](../../../../../src/frontend/components/main/popups/ManageGroups.svelte#L86); reset. partial.

Conditions: src/frontend/components/main/popups/ManageGroups.svelte:85 showMore.

Calls: src/frontend/components/main/popups/ManageGroups.svelte:75 reset (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1).

Effects: src/frontend/components/main/popups/ManageGroups.svelte:76 store-write src/frontend/stores.ts#groups ; src/frontend/components/main/popups/ManageGroups.svelte:77 store-write src/frontend/stores.ts#groupNumbers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7676e54915d856889c

[code] [src/frontend/components/main/popups/ManageGroups.svelte:138](../../../../../src/frontend/components/main/popups/ManageGroups.svelte#L138); () => { history({ id: "UPDATE", newData: { id: group.id }, location: { page: "none", id: "global_group" } }) }. partial.

Conditions: src/frontend/components/main/popups/ManageGroups.svelte:95 g.length.

Calls: src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5); src/frontend/components/helpers/output.ts:522 <callback> (depth 6).

Effects: src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:306 store-write src/frontend/stores.ts#deletedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-c762b3921f4b57dac0

[code] [src/frontend/components/main/popups/ManageGroups.svelte:151](../../../../../src/frontend/components/main/popups/ManageGroups.svelte#L151); addGroup. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ManageGroups.svelte:57 addGroup (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/main/popups/ManageGroups.svelte:64 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.
