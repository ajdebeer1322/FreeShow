# action/id_select_stage_layout (1)

## id_select_stage_layout — event-9d982a00e3968418d5

[code] [src/frontend/components/actions/api.ts:300](../../../../../src/frontend/components/actions/api.ts#L300); (data: API_id) => moveStageConnection(data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:300 id_select_stage_layout (depth 0); src/frontend/components/actions/apiHelper.ts:363 moveStageConnection (depth 1); src/frontend/utils/request.ts:4 send (depth 2); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 3); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 4); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 4); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 4); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 5); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 6); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 5); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 5); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:365 ipc send(STAGE, &#91;"SWITCH"&#93;, { id }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 1. Full edges/effects/conditions in JSON.

[code] Payload type: API_id. [External/internal input routes](../inputs.json) retain transport and permission limits.
