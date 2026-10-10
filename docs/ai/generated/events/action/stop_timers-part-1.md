# action/stop_timers (1)

## stop_timers — event-ba3be14939a62365cf

[code] [src/frontend/components/actions/api.ts:326](../../../../../src/frontend/components/actions/api.ts#L326); () => stopTimers(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:326 stop_timers (depth 0); src/frontend/components/helpers/timerTick.ts:57 stopTimers (depth 1); src/frontend/components/helpers/timerTick.ts:59 <callback> (depth 2); src/frontend/components/helpers/timerTick.ts:61 <callback> (depth 3); src/frontend/components/helpers/timerTick.ts:61 <callback> (depth 4).

Effects: src/frontend/components/helpers/timerTick.ts:61 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
