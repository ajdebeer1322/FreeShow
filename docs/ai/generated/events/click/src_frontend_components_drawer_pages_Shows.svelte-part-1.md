# click/src_frontend_components_drawer_pages_Shows.svelte (1)

## click — event-87f4a88d652ca5ccd2

[code] [src/frontend/components/drawer/pages/Shows.svelte:259](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L259); () => toggleSort(header.id). partial.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:253 filteredShows.length.

Calls: src/frontend/components/drawer/pages/Shows.svelte:182 toggleSort (depth 1); src/frontend/components/drawer/pages/Shows.svelte:183 <callback> (depth 2); src/frontend/components/drawer/pages/Shows.svelte:191 <callback> (depth 2); src/frontend/components/helpers/show.ts:220 updateShowsList (depth 2); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/show.ts:228 getTimestampValue (depth 3); src/frontend/components/helpers/show.ts:234 <callback> (depth 3); src/frontend/components/helpers/show.ts:236 <callback> (depth 3); src/frontend/components/helpers/show.ts:238 <callback> (depth 3); src/frontend/components/helpers/array.ts:76 sortByNameAndNumber (depth 3); src/frontend/components/helpers/array.ts:81 parseToken (depth 4); src/frontend/components/helpers/array.ts:95 <callback> (depth 4); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4).

Effects: src/frontend/components/drawer/pages/Shows.svelte:191 store-write src/frontend/stores.ts#sorted ; src/frontend/components/helpers/show.ts:253 store-write src/frontend/stores.ts#sortedShowsList .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-acc6ad2fcda32ffddd

[code] [src/frontend/components/drawer/pages/Shows.svelte:290](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L290); createNonExistentCategories. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:288 showWithNonExistentCategory; src/frontend/components/drawer/pages/Shows.svelte:226 a&#91;id&#93;.

Calls: src/frontend/components/drawer/pages/Shows.svelte:221 createNonExistentCategories (depth 0); src/frontend/components/drawer/pages/Shows.svelte:222 <callback> (depth 1); src/frontend/components/drawer/pages/Shows.svelte:224 <callback> (depth 1); src/frontend/components/drawer/pages/Shows.svelte:225 <callback> (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3); src/frontend/utils/language.ts:89 <callback> (depth 4); src/frontend/utils/language.ts:96 <callback> (depth 4).

Effects: src/frontend/components/drawer/pages/Shows.svelte:224 store-write src/frontend/stores.ts#categories .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6c59ddff5759426a65

[code] [src/frontend/components/drawer/pages/Shows.svelte:297](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L297); () => activePopup.set("import"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:288 showWithNonExistentCategory; src/frontend/components/drawer/pages/Shows.svelte:295 active === "all" && !searchValue && filteredShows.length < 20.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/pages/Shows.svelte:297 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-af2d494fae7f33d388

[code] [src/frontend/components/drawer/pages/Shows.svelte:305](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L305); (e) => createShow(e, true). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Shows.svelte:200 createShow (depth 1); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:168 updateKeyData (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 4).

Effects: src/frontend/components/drawer/pages/Shows.svelte:207 history history UPDATE; src/frontend/components/drawer/pages/Shows.svelte:209 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-56a039d2d29d4aedfa

[code] [src/frontend/components/drawer/pages/Shows.svelte:306](../../../../../src/frontend/components/drawer/pages/Shows.svelte#L306); createShow. partial.

Conditions: src/frontend/components/drawer/pages/Shows.svelte:201 border && e.target?.closest("button"); src/frontend/components/drawer/pages/Shows.svelte:204 ctrl.

Calls: src/frontend/components/drawer/pages/Shows.svelte:200 createShow (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/drawer/pages/Shows.svelte:207 history history UPDATE; src/frontend/components/drawer/pages/Shows.svelte:209 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.
