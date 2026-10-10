# action/interaction_stop (1)

## interaction_stop — event-6e11b69972de4e0aa2

[code] [src/frontend/components/actions/api.ts:358](../../../../../src/frontend/components/actions/api.ts#L358); (data: API_id) => stopInteraction(data.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:358 interaction_stop (depth 0); src/frontend/components/drawer/pages/interactions.ts:38 stopInteraction (depth 1); src/frontend/components/drawer/pages/interactions.ts:9 updateActiveInteractions (depth 2).

Effects: src/frontend/components/drawer/pages/interactions.ts:10 store-write src/frontend/stores.ts#activeInteractions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_id. [External/internal input routes](../inputs.json) retain transport and permission limits.
