# automatic/src_frontend_utils_listeners.ts (1)

## setTimeout — event-cf5ea16e1909fb6533

[code] [src/frontend/utils/listeners.ts:207](../../../../../src/frontend/utils/listeners.ts#L207); () => { sendData(REMOTE, { channel: "OUT" }) sendData(REMOTE, { channel: "OUT_DATA" }) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/listeners.ts:207 <callback> (depth 0); src/frontend/utils/sendData.ts:61 sendData (depth 1); src/frontend/utils/common.ts:18 isMainWindow (depth 2); src/frontend/utils/sendData.ts:93 <callback> (depth 2); src/frontend/utils/sendData.ts:142 checkSent (depth 2).

Effects: src/frontend/utils/listeners.ts:208 ipc sendData(REMOTE, { channel: "OUT" }) ; src/frontend/utils/listeners.ts:209 ipc sendData(REMOTE, { channel: "OUT_DATA" }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0e83a09b99913d4756

[code] [src/frontend/utils/listeners.ts:461](../../../../../src/frontend/utils/listeners.ts#L461); () => { refreshSlideThumbnails.set(false) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/listeners.ts:461 <callback> (depth 0).

Effects: src/frontend/utils/listeners.ts:462 store-write src/frontend/stores.ts#refreshSlideThumbnails .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0c16d50be846695c8e

[code] [src/frontend/utils/listeners.ts:522](../../../../../src/frontend/utils/listeners.ts#L522); () => { send(OUTPUT, &#91;"OUTPUTS"&#93;, get(outputs)) // used for stage mirror data send(OUTPUT, &#91;"ALL_OUTPUTS"&#93;, get(outputs)) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/listeners.ts:522 <callback> (depth 0); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/utils/listeners.ts:523 ipc send(OUTPUT, &#91;"OUTPUTS"&#93;, get(outputs)) ; src/frontend/utils/listeners.ts:525 ipc send(OUTPUT, &#91;"ALL_OUTPUTS"&#93;, get(outputs)) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
