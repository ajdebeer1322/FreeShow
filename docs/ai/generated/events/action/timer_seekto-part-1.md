# action/timer_seekto (1)

## timer_seekto — event-e9068659e303c38e94

[code] [src/frontend/components/actions/api.ts:327](../../../../../src/frontend/components/actions/api.ts#L327); (data: API_seek) => timerSeekTo(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:327 timer_seekto (depth 0); src/frontend/components/actions/apiHelper.ts:876 timerSeekTo (depth 1); src/frontend/components/actions/apiHelper.ts:884 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:885 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:884 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
