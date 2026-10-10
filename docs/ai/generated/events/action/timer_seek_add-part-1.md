# action/timer_seek_add (1)

## timer_seek_add — event-a742cd90c2fbad7cb0

[code] [src/frontend/components/actions/api.ts:328](../../../../../src/frontend/components/actions/api.ts#L328); (data: API_seek) => timerSeekAdd(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:328 timer_seek_add (depth 0); src/frontend/components/actions/apiHelper.ts:896 timerSeekAdd (depth 1); src/frontend/components/actions/apiHelper.ts:904 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:905 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:904 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
