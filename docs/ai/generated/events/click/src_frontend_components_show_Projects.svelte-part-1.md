# click/src_frontend_components_show_Projects.svelte (1)

## click — event-3f941f5018ca83ccfe

[code] [src/frontend/components/show/Projects.svelte:362](../../../../../src/frontend/components/show/Projects.svelte#L362); back. resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode.

Calls: src/frontend/components/show/Projects.svelte:129 back (depth 0).

Effects: src/frontend/components/show/Projects.svelte:130 store-write src/frontend/stores.ts#projectView ; src/frontend/components/show/Projects.svelte:131 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/show/Projects.svelte:132 store-write src/frontend/stores.ts#editingProjectTemplate .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-da93be6ed2ae2cb180

[code] [src/frontend/components/show/Projects.svelte:379](../../../../../src/frontend/components/show/Projects.svelte#L379); () => (showProjectDropdown = !showProjectDropdown). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a55b864b119d0c5509

[code] [src/frontend/components/show/Projects.svelte:386](../../../../../src/frontend/components/show/Projects.svelte#L386); () => (showProjectDropdown = false). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-42b3c027e58a38cfb0

[code] [src/frontend/components/show/Projects.svelte:388](../../../../../src/frontend/components/show/Projects.svelte#L388); () => refreshOnStageProject($activeProject). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject; src/frontend/components/show/Projects.svelte:387 currentProjectIsOnStage && $activeProject.

Calls: src/frontend/components/show/Projects.svelte:340 refreshOnStageProject (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/show/Projects.svelte:342 ipc sendMain(Main.ONSTAGE_LOAD_SERVICE, { serviceId, data: $contentProviderData.onstage }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1cd05d76b265308ef9

[code] [src/frontend/components/show/Projects.svelte:396](../../../../../src/frontend/components/show/Projects.svelte#L396); () => refreshPcoProject(currentProjectPcoFolderId, $activeProject). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject; src/frontend/components/show/Projects.svelte:395 currentProjectPcoFolderId && $activeProject.

Calls: src/frontend/components/show/Projects.svelte:336 refreshPcoProject (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/show/Projects.svelte:337 ipc sendMain(Main.PCO_LOAD_PLAN, { serviceTypeId, planId }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c8a32a4a10c16c41e9

[code] [src/frontend/components/show/Projects.svelte:404](../../../../../src/frontend/components/show/Projects.svelte#L404); () => exportProject(currentProject, $activeProject \|\| "", currentProject.sourcePath). partial.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject; src/frontend/components/show/Projects.svelte:403 currentProject.sourcePath.

Calls: src/frontend/components/export/project.ts:17 exportProject (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/export/project.ts:35 show (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/export/project.ts:149 ipc send(EXPORT, &#91;"GENERATE"&#93;, { type: "project", name: formatToFileName(project.name), file: projectData, path: savePath }) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 46. Full edges/effects/conditions in JSON.
