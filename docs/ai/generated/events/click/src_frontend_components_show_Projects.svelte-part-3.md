# click/src_frontend_components_show_Projects.svelte (3)

## click — event-4595ce2790c6761477

[code] [src/frontend/components/show/Projects.svelte:466](../../../../../src/frontend/components/show/Projects.svelte#L466); () => (showProjectsOptions = false). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:450 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:464 showProjectsOptions.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-97779ae54664335ac6

[code] [src/frontend/components/show/Projects.svelte:475](../../../../../src/frontend/components/show/Projects.svelte#L475); () => (showProjectDropdown = !showProjectDropdown). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:450 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:473 !showProjectsOptions.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d920edc2aedde61d00

[code] [src/frontend/components/show/Projects.svelte:480](../../../../../src/frontend/components/show/Projects.svelte#L480); () => (showProjectDropdown = false). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:450 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:473 !showProjectsOptions; src/frontend/components/show/Projects.svelte:479 showProjectDropdown.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5f4c13d9163d3a0c5b

[code] [src/frontend/components/show/Projects.svelte:481](../../../../../src/frontend/components/show/Projects.svelte#L481); () => (showProjectsOptions = !showProjectsOptions). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:358 projectActive \|\| recentlyUsedList.length; src/frontend/components/show/Projects.svelte:450 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:473 !showProjectsOptions; src/frontend/components/show/Projects.svelte:479 showProjectDropdown.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-12791349de2c67f54a

[code] [src/frontend/components/show/Projects.svelte:499](../../../../../src/frontend/components/show/Projects.svelte#L499); (e) => openRecentlyUsed(e, project.id). partial.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:498 isVisible.

Calls: src/frontend/components/show/Projects.svelte:199 openRecentlyUsed (depth 1); src/frontend/components/show/project.ts:11 openProject (depth 2); src/frontend/components/show/project.ts:24 markProjectAsUsed (depth 3); src/frontend/components/show/project.ts:26 <callback> (depth 4); src/frontend/components/show/project.ts:29 <callback> (depth 4); src/frontend/components/show/project.ts:42 openProjectItem (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 4); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 5); src/frontend/utils/request.ts:4 send (depth 5); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 6); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 5); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 5); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 5); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 6).

Effects: src/frontend/components/show/project.ts:12 store-write src/frontend/stores.ts#projectView ; src/frontend/components/show/project.ts:17 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/show/project.ts:18 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/show/project.ts:26 store-write src/frontend/stores.ts#saved ; src/frontend/components/show/project.ts:29 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/project.ts:52 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/show/project.ts:74 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/show/project.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-ea5cd0f3d8a4a7ef5e

[code] [src/frontend/components/show/Projects.svelte:530](../../../../../src/frontend/components/show/Projects.svelte#L530); () => (addMenuOpen = false). resolved-within-bound.

Conditions: src/frontend/components/show/Projects.svelte:492 recentlyUsedList.length; src/frontend/components/show/Projects.svelte:506 $editingProjectTemplate; src/frontend/components/show/Projects.svelte:508 !projectActive && showProjectsOptions; src/frontend/components/show/Projects.svelte:513 !projectActive; src/frontend/components/show/Projects.svelte:529 addMenuOpen.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
