# action/edit_timer (1)

## edit_timer — event-84b86754130a6c5cc1

[code] [src/frontend/components/actions/api.ts:329](../../../../../src/frontend/components/actions/api.ts#L329); (data: API_edit_timer) => editTimer(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:329 edit_timer (depth 0); src/frontend/components/actions/apiHelper.ts:400 editTimer (depth 1); src/frontend/components/actions/apiHelper.ts:403 <callback> (depth 2).

Effects: src/frontend/components/actions/apiHelper.ts:403 store-write src/frontend/stores.ts#timers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_edit_timer. [External/internal input routes](../inputs.json) retain transport and permission limits.
