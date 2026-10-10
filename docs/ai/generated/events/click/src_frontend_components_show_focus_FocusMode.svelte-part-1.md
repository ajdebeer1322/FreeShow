# click/src_frontend_components_show_focus_FocusMode.svelte (1)

## click — event-2d7d74124d1fc70721

[code] [src/frontend/components/show/focus/FocusMode.svelte:250](../../../../../src/frontend/components/show/focus/FocusMode.svelte#L250); () => selectItem(i). partial.

Conditions: src/frontend/components/show/focus/FocusMode.svelte:243 projectList === null; src/frontend/components/show/focus/FocusMode.svelte:247 projectList.length.

Calls: src/frontend/components/show/focus/FocusMode.svelte:190 selectItem (depth 1); src/frontend/components/show/project.ts:42 openProjectItem (depth 2); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/utils/request.ts:4 send (depth 4); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 5); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/components/show/project.ts:57 <callback> (depth 3); src/frontend/components/show/project.ts:65 <callback> (depth 4).

Effects: src/frontend/components/show/project.ts:52 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/show/project.ts:74 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/show/project.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries ; src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9c7a64734fffa299d1

[code] [src/frontend/components/show/focus/FocusMode.svelte:252](../../../../../src/frontend/components/show/focus/FocusMode.svelte#L252); () => selectItem(i). partial.

Conditions: src/frontend/components/show/focus/FocusMode.svelte:243 projectList === null; src/frontend/components/show/focus/FocusMode.svelte:247 projectList.length.

Calls: src/frontend/components/show/focus/FocusMode.svelte:190 selectItem (depth 1); src/frontend/components/show/project.ts:42 openProjectItem (depth 2); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/utils/request.ts:4 send (depth 4); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 5); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/components/show/project.ts:57 <callback> (depth 3); src/frontend/components/show/project.ts:65 <callback> (depth 4).

Effects: src/frontend/components/show/project.ts:52 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/show/project.ts:74 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/show/project.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries ; src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
