# click/src_frontend_components_show_Projects.svelte (2)

## click — event-dfc12243f067d49e85

[code] [src/frontend/components/show/Projects.svelte:411](../../../../../src/frontend/components/show/Projects.svelte#L411); () => exportProject(currentProject, $activeProject \|\| ""). partial.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject.

Calls: src/frontend/components/export/project.ts:17 exportProject (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/export/project.ts:35 show (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/export/project.ts:149 ipc send(EXPORT, &#91;"GENERATE"&#93;, { type: "project", name: formatToFileName(project.name), file: projectData, path: savePath }) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 46. Full edges/effects/conditions in JSON.

## click — event-a2ba2d174a15d1ff95

[code] [src/frontend/components/show/Projects.svelte:415](../../../../../src/frontend/components/show/Projects.svelte#L415); () => shareProjectLink(currentProject, $activeProject \|\| ""). partial.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject.

Calls: src/frontend/components/export/projectLink.ts:178 shareProjectLink (depth 1); src/frontend/components/export/projectLink.ts:9 exportProjectAsData (depth 2); src/frontend/components/export/projectLink.ts:15 <callback> (depth 3); src/frontend/components/export/projectLink.ts:15 <callback> (depth 3); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 3); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 4); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 5); src/frontend/components/helpers/setShow.ts:175 loadSingleShow (depth 5); src/frontend/components/helpers/setShow.ts:184 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:247 <callback> (depth 4); src/frontend/components/export/projectLink.ts:27 <callback> (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6).

Effects: src/frontend/components/export/projectLink.ts:188 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:186 ipc requestMain(Main.SHOW, { name: get(shows)&#91;id&#93;?.name, id }) ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 37. Full edges/effects/conditions in JSON.

## click — event-c02180102956622cc8

[code] [src/frontend/components/show/Projects.svelte:421](../../../../../src/frontend/components/show/Projects.svelte#L421); () => special.update((a) => ({ ...a, projectTimelineActive: !a.projectTimelineActive })). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject.

Calls: no function target resolved.

Effects: src/frontend/components/show/Projects.svelte:421 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f098fbabf6c137b52c

[code] [src/frontend/components/show/Projects.svelte:432](../../../../../src/frontend/components/show/Projects.svelte#L432); () => toggleSectionsCollapsed(). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject; src/frontend/components/show/Projects.svelte:429 currentProject.shows?.some((a) => a.type === "section").

Calls: src/frontend/components/show/Projects.svelte:312 toggleSectionsCollapsed (depth 1); src/frontend/components/show/Projects.svelte:319 updateProject (depth 2); src/frontend/components/show/Projects.svelte:321 <callback> (depth 3).

Effects: src/frontend/components/show/Projects.svelte:321 store-write src/frontend/stores.ts#projects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-72535bda2c7e520a7c

[code] [src/frontend/components/show/Projects.svelte:438](../../../../../src/frontend/components/show/Projects.svelte#L438); () => lockSections(). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:359 !$focusMode; src/frontend/components/show/Projects.svelte:367 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:384 showProjectDropdown && currentProject; src/frontend/components/show/Projects.svelte:429 currentProject.shows?.some((a) => a.type === "section").

Calls: src/frontend/components/show/Projects.svelte:315 lockSections (depth 1); src/frontend/components/show/Projects.svelte:319 updateProject (depth 2); src/frontend/components/show/Projects.svelte:321 <callback> (depth 3).

Effects: src/frontend/components/show/Projects.svelte:321 store-write src/frontend/stores.ts#projects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b6413e924be5830c5c

[code] [src/frontend/components/show/Projects.svelte:453](../../../../../src/frontend/components/show/Projects.svelte#L453); back. resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:450 $editingProjectTemplate.

Calls: src/frontend/components/show/Projects.svelte:129 back (depth 0).

Effects: src/frontend/components/show/Projects.svelte:130 store-write src/frontend/stores.ts#projectView ; src/frontend/components/show/Projects.svelte:131 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/show/Projects.svelte:132 store-write src/frontend/stores.ts#editingProjectTemplate .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
