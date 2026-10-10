# action/pause_timers (1)

## pause_timers — event-3989b1473fd7201d9e

[code] [src/frontend/components/actions/api.ts:325](../../../../../src/frontend/components/actions/api.ts#L325); () => pauseAllTimers(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:325 pause_timers (depth 0); src/frontend/components/drawer/timers/timers.ts:167 pauseAllTimers (depth 1); src/frontend/components/drawer/timers/timers.ts:168 <callback> (depth 2); src/frontend/components/drawer/timers/timers.ts:169 <callback> (depth 3).

Effects: src/frontend/components/drawer/timers/timers.ts:168 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
