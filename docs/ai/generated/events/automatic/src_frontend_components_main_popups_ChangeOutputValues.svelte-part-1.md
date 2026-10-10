# automatic/src_frontend_components_main_popups_ChangeOutputValues.svelte (1)

## setTimeout — event-76dbe62bcf7971471b

[code] [src/frontend/components/main/popups/ChangeOutputValues.svelte:42](../../../../../src/frontend/components/main/popups/ChangeOutputValues.svelte#L42); () => send(OUTPUT, &#91;"UPDATE_BOUNDS"&#93;, currentOutput). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ChangeOutputValues.svelte:42 <callback> (depth 0); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/components/main/popups/ChangeOutputValues.svelte:42 ipc send(OUTPUT, &#91;"UPDATE_BOUNDS"&#93;, currentOutput) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
