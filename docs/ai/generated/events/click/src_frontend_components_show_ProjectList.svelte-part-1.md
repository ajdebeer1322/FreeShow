# click/src_frontend_components_show_ProjectList.svelte (1)

## click — event-ddf9eab70efa478755

[code] [src/frontend/components/show/ProjectList.svelte:166](../../../../../src/frontend/components/show/ProjectList.svelte#L166); (e) => toggleFolder(e, project, opened). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectList.svelte:145 tree.length; src/frontend/components/show/ProjectList.svelte:146 startLoading; src/frontend/components/show/ProjectList.svelte:151 project.id === "ROOT"; src/frontend/components/show/ProjectList.svelte:165 project.type === "folder" && (project.parent === "/" \|\| shown).

Calls: src/frontend/components/show/ProjectList.svelte:110 toggleFolder (depth 1).

Effects: src/frontend/components/show/ProjectList.svelte:117 store-write src/frontend/stores.ts#openedFolders ; src/frontend/components/show/ProjectList.svelte:120 store-write src/frontend/stores.ts#openedFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2daf227951893bcd55

[code] [src/frontend/components/show/ProjectList.svelte:175](../../../../../src/frontend/components/show/ProjectList.svelte#L175); (e) => open(e, project.id). partial.

Conditions: src/frontend/components/show/ProjectList.svelte:145 tree.length; src/frontend/components/show/ProjectList.svelte:146 startLoading; src/frontend/components/show/ProjectList.svelte:151 project.id === "ROOT"; src/frontend/components/show/ProjectList.svelte:165 project.type === "folder" && (project.parent === "/" \|\| shown); src/frontend/components/show/ProjectList.svelte:174 project.id && shown && isArchivedShown.

Calls: src/frontend/components/show/ProjectList.svelte:103 open (depth 1); src/frontend/components/show/project.ts:11 openProject (depth 2); src/frontend/components/show/project.ts:24 markProjectAsUsed (depth 3); src/frontend/components/show/project.ts:26 <callback> (depth 4); src/frontend/components/show/project.ts:29 <callback> (depth 4); src/frontend/components/show/project.ts:42 openProjectItem (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 4); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 5); src/frontend/utils/request.ts:4 send (depth 5); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 6); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 5); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 5); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 5); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 6).

Effects: src/frontend/components/show/project.ts:12 store-write src/frontend/stores.ts#projectView ; src/frontend/components/show/project.ts:17 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/show/project.ts:18 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/show/project.ts:26 store-write src/frontend/stores.ts#saved ; src/frontend/components/show/project.ts:29 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/project.ts:52 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/show/project.ts:74 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/show/project.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-31a2bb978e99cc55bd

[code] [src/frontend/components/show/ProjectList.svelte:186](../../../../../src/frontend/components/show/ProjectList.svelte#L186); () => { visibleArchives.push(project.parent) visibleArchives = visibleArchives }. resolved-within-bound.

Conditions: src/frontend/components/show/ProjectList.svelte:145 tree.length; src/frontend/components/show/ProjectList.svelte:146 startLoading; src/frontend/components/show/ProjectList.svelte:151 project.id === "ROOT"; src/frontend/components/show/ProjectList.svelte:183 shown && project.archived && !visibleArchives.includes(project.parent) && project.id === archivedCount&#91;project.parent&#93;.id.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-163b92f690d27889e5

[code] [src/frontend/components/show/ProjectList.svelte:203](../../../../../src/frontend/components/show/ProjectList.svelte#L203); () => history({ id: "UPDATE", newData: { replace: { parent: project.id } }, location: { page: "show", id: "project" } }). partial.

Conditions: src/frontend/components/show/ProjectList.svelte:145 tree.length; src/frontend/components/show/ProjectList.svelte:146 startLoading; src/frontend/components/show/ProjectList.svelte:151 project.id === "ROOT"; src/frontend/components/show/ProjectList.svelte:199 shown && isEmpty && !isReadOnly.

Calls: src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5); src/frontend/components/helpers/output.ts:522 <callback> (depth 6).

Effects: src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:306 store-write src/frontend/stores.ts#deletedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.
