# action/change_transition (1)

## change_transition — event-affab4dc83424fce99

[code] [src/frontend/components/actions/api.ts:297](../../../../../src/frontend/components/actions/api.ts#L297); (data: API_transition) => updateTransition(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:297 change_transition (depth 0); src/frontend/utils/transitions.ts:80 updateTransition (depth 1); src/frontend/utils/transitions.ts:81 <callback> (depth 2).

Effects: src/frontend/utils/transitions.ts:81 store-write src/frontend/stores.ts#transitionData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_transition. [External/internal input routes](../inputs.json) retain transport and permission limits.
