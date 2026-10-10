# click/src_frontend_components_show_Projects.svelte (4)

## click — event-887607c001670d1cd5

[code] [src/frontend/components/show/Projects.svelte:531](../../../../../src/frontend/components/show/Projects.svelte#L531); () => createProject(). partial.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen.

Calls: src/frontend/components/show/Projects.svelte:97 createProject (depth 1); src/frontend/components/show/Projects.svelte:99 <callback> (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:168 updateKeyData (depth 6).

Effects: src/frontend/components/show/Projects.svelte:100 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-d695e5da5b30f879bb

[code] [src/frontend/components/show/Projects.svelte:535](../../../../../src/frontend/components/show/Projects.svelte#L535); () => createProject(true). partial.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen.

Calls: src/frontend/components/show/Projects.svelte:97 createProject (depth 1); src/frontend/components/show/Projects.svelte:99 <callback> (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:168 updateKeyData (depth 6).

Effects: src/frontend/components/show/Projects.svelte:100 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-10965442f5ee75a730

[code] [src/frontend/components/show/Projects.svelte:541](../../../../../src/frontend/components/show/Projects.svelte#L541); createProjectTemplate. partial.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen.

Calls: src/frontend/components/show/Projects.svelte:103 createProjectTemplate (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/show/Projects.svelte:109 history history UPDATE; src/frontend/components/show/Projects.svelte:107 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-d26cda92f6a348a9c7

[code] [src/frontend/components/show/Projects.svelte:547](../../../../../src/frontend/components/show/Projects.svelte#L547); importProject. resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen.

Calls: src/frontend/components/show/Projects.svelte:220 importProject (depth 0); src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/show/Projects.svelte:223 ipc sendMain(Main.IMPORT, { channel: "freeshow_project", format: { extensions, name } }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-49fc9bea4befc44a85

[code] [src/frontend/components/show/Projects.svelte:557](../../../../../src/frontend/components/show/Projects.svelte#L557); openPcoPicker. resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen; src/frontend/components/show/Projects.svelte:555 $providerConnections.planningcenter.

Calls: src/frontend/components/show/Projects.svelte:331 openPcoPicker (depth 0).

Effects: src/frontend/components/show/Projects.svelte:333 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ea3c0fe42b87e9100d

[code] [src/frontend/components/show/Projects.svelte:563](../../../../../src/frontend/components/show/Projects.svelte#L563); () => (addMenuOpen = !addMenuOpen). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
