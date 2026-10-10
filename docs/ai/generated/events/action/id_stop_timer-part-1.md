# action/id_stop_timer (1)

## id_stop_timer — event-1774bb69ef8dbf24c6

[code] [src/frontend/components/actions/api.ts:332](../../../../../src/frontend/components/actions/api.ts#L332); (data: API_id) => stopTimerById(data.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:332 id_stop_timer (depth 0); src/frontend/components/actions/apiHelper.ts:544 stopTimerById (depth 1); src/frontend/components/actions/apiHelper.ts:552 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:553 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:552 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
