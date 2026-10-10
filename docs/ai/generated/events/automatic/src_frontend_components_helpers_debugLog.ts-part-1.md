# automatic/src_frontend_components_helpers_debugLog.ts (1)

## setTimeout — event-67078c329902068f35

[code] [src/frontend/components/helpers/debugLog.ts:62](../../../../../src/frontend/components/helpers/debugLog.ts#L62); () => { flushTimer = null // lines from the output windows arrive a little later than they happened debugEntries.set(buffer.slice().sort((a, b) => a.time - b.time)) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 0); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 1).

Effects: src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-30c27d864c24f415c3

[code] [src/frontend/components/helpers/debugLog.ts:388](../../../../../src/frontend/components/helpers/debugLog.ts#L388); () => { timer = null if (added + removed >= DOM_BURST_MIN) { debugLog("UI", 'window part rebuilt: ${removed} elements removed, ${added} added within 60ms\n removed: ${biggestRemove. partial.

Conditions: src/frontend/components/helpers/debugLog.ts:390 added + removed >= DOM_BURST_MIN.

Calls: src/frontend/components/helpers/debugLog.ts:388 <callback> (depth 0); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 1); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 2); src/frontend/utils/request.ts:4 send (depth 2); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 4); src/frontend/utils/request.ts:6 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 2); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 3); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 2); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 2); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:391 <callback> (depth 1); src/frontend/components/helpers/debugLog.ts:391 <callback> (depth 1).

Effects: src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
