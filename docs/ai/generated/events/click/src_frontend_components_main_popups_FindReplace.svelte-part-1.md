# click/src_frontend_components_main_popups_FindReplace.svelte (1)

## click — event-549baf4e4917ec0e0f

[code] [src/frontend/components/main/popups/FindReplace.svelte:35](../../../../../src/frontend/components/main/popups/FindReplace.svelte#L35); () => (showMore = !showMore). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-03a934e7bae6811f2b

[code] [src/frontend/components/main/popups/FindReplace.svelte:43](../../../../../src/frontend/components/main/popups/FindReplace.svelte#L43); replace. partial.

Conditions: src/frontend/components/main/popups/FindReplace.svelte:20 !findValue.

Calls: src/frontend/components/main/popups/FindReplace.svelte:19 replace (depth 0); src/frontend/utils/common.ts:26 newToast (depth 1); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 2); src/frontend/components/context/menuClick.ts:2446 format (depth 1); src/frontend/components/context/menuClick.ts:2458 <callback> (depth 2); src/frontend/components/context/menuClick.ts:2459 <callback> (depth 3); src/frontend/components/context/menuClick.ts:2460 <callback> (depth 4); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6).

Effects: src/frontend/components/main/popups/FindReplace.svelte:26 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/FindReplace.svelte:29 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/context/menuClick.ts:2469 history history UPDATE; src/frontend/components/context/menuClick.ts:2515 history history setItems; src/frontend/components/context/menuClick.ts:2476 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/context/menuClick.ts:2520 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 120. Full edges/effects/conditions in JSON.
