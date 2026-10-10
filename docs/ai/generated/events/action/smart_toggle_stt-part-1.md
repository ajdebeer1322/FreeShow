# action/smart_toggle_stt (1)

## smart_toggle_stt — event-006929716b05c415fe

[code] [src/frontend/components/actions/api.ts:377](../../../../../src/frontend/components/actions/api.ts#L377); (data: API_toggle_specific = {}) => toggleSttListening(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:377 smart_toggle_stt (depth 0); src/frontend/components/actions/apiHelper.ts:950 toggleSttListening (depth 1); src/frontend/utils/common.ts:213 triggerFunction (depth 2); src/frontend/utils/common.ts:217 <callback> (depth 3).

Effects: src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
