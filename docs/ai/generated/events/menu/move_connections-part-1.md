# menu/move_connections (1)

## move_connections — event-63e33497dd9baebe6f

[code] [src/frontend/components/context/contextMenus.ts:218](../../../../../src/frontend/components/context/contextMenus.ts#L218); move_connections. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1919 move_connections (depth 0); src/frontend/components/actions/apiHelper.ts:363 moveStageConnection (depth 1); src/frontend/utils/request.ts:4 send (depth 2); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 4); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 5); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 5); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 5); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:365 ipc send(STAGE, &#91;"SWITCH"&#93;, { id }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 1. Full edges/effects/conditions in JSON.

Menu layouts: stage_slide src/frontend/components/context/contextMenus.ts:410; stage_slide_readonly src/frontend/components/context/contextMenus.ts:411. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:151 move_connections: () => { hide = $disabledServers.stage === true }. Appears: no literal appearance indexed; mounting may be dynamic.
