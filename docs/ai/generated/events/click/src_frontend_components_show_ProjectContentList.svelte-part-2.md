# click/src_frontend_components_show_ProjectContentList.svelte (2)

## click — event-884c5579adbc21bbac

[code] [src/frontend/components/show/ProjectContentList.svelte:446](../../../../../src/frontend/components/show/ProjectContentList.svelte#L446); addShowPlaceholder. partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen; src/frontend/components/show/ProjectContentList.svelte:445 isTemplate.

Calls: src/frontend/components/show/ProjectContentList.svelte:92 addShowPlaceholder (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/show/ProjectContentList.svelte:95 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-b0fd63a5d4ab1e9704

[code] [src/frontend/components/show/ProjectContentList.svelte:454](../../../../../src/frontend/components/show/ProjectContentList.svelte#L454); () => openSearch("scripture"). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen; src/frontend/components/show/ProjectContentList.svelte:453 $drawerTabsData.scripture?.enabled !== false.

Calls: src/frontend/components/show/ProjectContentList.svelte:160 openSearch (depth 1); src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 2); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 3); src/frontend/utils/common.ts:213 triggerFunction (depth 2); src/frontend/utils/common.ts:217 <callback> (depth 3).

Effects: src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-50814096df9881851c

[code] [src/frontend/components/show/ProjectContentList.svelte:467](../../../../../src/frontend/components/show/ProjectContentList.svelte#L467); () => openSearch("media"). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen.

Calls: src/frontend/components/show/ProjectContentList.svelte:160 openSearch (depth 1); src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 2); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 3); src/frontend/utils/common.ts:213 triggerFunction (depth 2); src/frontend/utils/common.ts:217 <callback> (depth 3).

Effects: src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-50f33522aec99686db

[code] [src/frontend/components/show/ProjectContentList.svelte:483](../../../../../src/frontend/components/show/ProjectContentList.svelte#L483); () => { popupData.set({ mode: "project" }) activePopup.set("import") }. resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen.

Calls: no function target resolved.

Effects: src/frontend/components/show/ProjectContentList.svelte:484 store-write src/frontend/stores.ts#popupData ; src/frontend/components/show/ProjectContentList.svelte:485 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-58dbc68fe0fa031123

[code] [src/frontend/components/show/ProjectContentList.svelte:496](../../../../../src/frontend/components/show/ProjectContentList.svelte#L496); addSection. partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen.

Calls: src/frontend/components/show/ProjectContentList.svelte:86 addSection (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/show/ProjectContentList.svelte:89 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-4ab2ea70b7f7535130

[code] [src/frontend/components/show/ProjectContentList.svelte:507](../../../../../src/frontend/components/show/ProjectContentList.svelte#L507); () => (addMenuOpen = !addMenuOpen). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
