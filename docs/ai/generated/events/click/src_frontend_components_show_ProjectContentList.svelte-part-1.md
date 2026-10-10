# click/src_frontend_components_show_ProjectContentList.svelte (1)

## click — event-b477d5ac2d3c6f0e7e

[code] [src/frontend/components/show/ProjectContentList.svelte:297](../../../../../src/frontend/components/show/ProjectContentList.svelte#L297); (e) => { if (e.detail.ctrl) return if ($focusMode) activeFocus.set({ id: show.id, index, type: show.type }) else activeShow.set({ ...show, index }) }. resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:270 projectItemsList.length; src/frontend/components/show/ProjectContentList.svelte:286 isCollapsed && i > 0; src/frontend/components/show/ProjectContentList.svelte:288 show.type === "DIVIDER"; src/frontend/components/show/ProjectContentList.svelte:292 show.type === "section".

Calls: no function target resolved.

Effects: src/frontend/components/show/ProjectContentList.svelte:299 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/show/ProjectContentList.svelte:300 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ef4f4f70cd8f6fb762

[code] [src/frontend/components/show/ProjectContentList.svelte:359](../../../../../src/frontend/components/show/ProjectContentList.svelte#L359); () => { recentFiles.update((a) => { a.cleared = &#91;...a.cleared, ...recommended&#93; return a }) updateRecentlyAddedFiles() }. partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:270 projectItemsList.length; src/frontend/components/show/ProjectContentList.svelte:352 recommended.length.

Calls: src/frontend/converters/project.ts:200 updateRecentlyAddedFiles (depth 1); src/frontend/converters/project.ts:203 <callback> (depth 2); src/frontend/converters/project.ts:208 <callback> (depth 2); src/frontend/components/helpers/media.ts:19 getExtension (depth 3); src/frontend/components/helpers/media.ts:26 removeExtension (depth 3); src/frontend/components/helpers/media.ts:46 getFileName (depth 3); src/frontend/converters/project.ts:214 <callback> (depth 3); src/frontend/utils/popup.ts:219 confirmCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6).

Effects: src/frontend/components/show/ProjectContentList.svelte:360 store-write src/frontend/stores.ts#recentFiles ; src/frontend/converters/project.ts:224 store-write src/frontend/stores.ts#recentFiles ; src/frontend/converters/project.ts:234 ipc sendMain(Main.IMPORT_FILES, { id: "freeshow_project", paths: &#91;projectFile.path&#93; }) ; src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/converters/project.ts:231 store-write src/frontend/stores.ts#recentFiles ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## click — event-8b151ba7b5c3ddfb4c

[code] [src/frontend/components/show/ProjectContentList.svelte:386](../../../../../src/frontend/components/show/ProjectContentList.svelte#L386); () => { // convert to image? - probably better not to, this can be done via import // if (type === "pdf") sendMain(Main.PDF_TO_IMAGE, { filePath: path }) addToProject(null, &#91;path&#93;). partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:270 projectItemsList.length; src/frontend/components/show/ProjectContentList.svelte:352 recommended.length.

Calls: src/frontend/converters/project.ts:102 addToProject (depth 1); src/frontend/converters/project.ts:109 <callback> (depth 2); src/frontend/converters/project.ts:110 <callback> (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6).

Effects: src/frontend/converters/project.ts:115 history history UPDATE; src/frontend/converters/project.ts:134 history history UPDATE; src/frontend/converters/project.ts:118 store-write src/frontend/stores.ts#activeProject ; src/frontend/converters/project.ts:119 store-write src/frontend/stores.ts#projectView ; src/frontend/converters/project.ts:138 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-da88e0bdd535b94aa5

[code] [src/frontend/components/show/ProjectContentList.svelte:410](../../../../../src/frontend/components/show/ProjectContentList.svelte#L410); clipboardToProject. partial.

Conditions: src/frontend/components/show/ProjectContentList.svelte:270 projectItemsList.length; src/frontend/components/show/ProjectContentList.svelte:408 shouldPasteText; src/frontend/components/show/project.ts:91 !currentProject \|\| !get(projects)&#91;currentProject&#93;; src/frontend/components/show/project.ts:96 !clipText; src/frontend/components/show/project.ts:100 !items.length; src/frontend/components/show/project.ts:103 !a&#91;currentProject&#93;.

Calls: src/frontend/components/show/project.ts:89 clipboardToProject (depth 0); src/frontend/components/show/project.ts:95 <callback> (depth 1); src/frontend/components/show/project.ts:117 textToProjectItems (depth 2); src/frontend/components/show/project.ts:140 <callback> (depth 3); src/frontend/converters/txt.ts:725 similarity (depth 4); src/frontend/converters/txt.ts:733 editDistance (depth 5); src/frontend/converters/txt.ts:736 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:2266 generateScriptureShowFromReference (depth 3); src/frontend/components/drawer/bible/scripture.ts:2208 resolveScriptureReference (depth 4); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 5); src/frontend/values/keys.ts:7 getKey (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 6); src/frontend/components/drawer/bible/scripture.ts:76 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:2232 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:2238 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 4).

Effects: src/frontend/components/show/project.ts:155 history history SHOWS; src/frontend/components/drawer/bible/scripture.ts:2272 store-write src/frontend/stores.ts#activeScripture ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/converters/importHelpers.ts:29 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/converters/importHelpers.ts:32 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 27; depth cutoffs: 207. Full edges/effects/conditions in JSON.

## click — event-85497a286db1f3c727

[code] [src/frontend/components/show/ProjectContentList.svelte:432](../../../../../src/frontend/components/show/ProjectContentList.svelte#L432); () => (addMenuOpen = false). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-20f10852b0315f941a

[code] [src/frontend/components/show/ProjectContentList.svelte:434](../../../../../src/frontend/components/show/ProjectContentList.svelte#L434); () => openSearch("shows"). resolved-within-bound.

Conditions: src/frontend/components/show/ProjectContentList.svelte:429 projectId && !$projectView && !$focusMode && !recentlyUsedList.length && !projectReadOnly; src/frontend/components/show/ProjectContentList.svelte:430 addMenuOpen.

Calls: src/frontend/components/show/ProjectContentList.svelte:160 openSearch (depth 1); src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 2); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 3); src/frontend/utils/common.ts:213 triggerFunction (depth 2); src/frontend/utils/common.ts:217 <callback> (depth 3).

Effects: src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
