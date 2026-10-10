# action/id_pause_timer (1)

## id_pause_timer — event-6ca216b229b2dcd336

[code] [src/frontend/components/actions/api.ts:330](../../../../../src/frontend/components/actions/api.ts#L330); (data: API_id) => pauseTimerById(data.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:330 id_pause_timer (depth 0); src/frontend/components/actions/apiHelper.ts:517 pauseTimerById (depth 1); src/frontend/components/actions/apiHelper.ts:524 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:525 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:524 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
