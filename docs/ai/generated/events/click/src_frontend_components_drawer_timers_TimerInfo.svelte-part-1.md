# click/src_frontend_components_drawer_timers_TimerInfo.svelte (1)

## click — event-0758549a86a0f492d3

[code] [src/frontend/components/drawer/timers/TimerInfo.svelte:27](../../../../../src/frontend/components/drawer/timers/TimerInfo.svelte#L27); () => actionOnAllTimers("paused", !allPaused). resolved-within-bound.

Conditions: src/frontend/components/drawer/timers/TimerInfo.svelte:26 $activeTimers?.length > 1.

Calls: src/frontend/components/drawer/timers/TimerInfo.svelte:15 actionOnAllTimers (depth 1); src/frontend/components/drawer/timers/TimerInfo.svelte:16 <callback> (depth 2); src/frontend/components/drawer/timers/TimerInfo.svelte:17 <callback> (depth 3).

Effects: src/frontend/components/drawer/timers/TimerInfo.svelte:16 store-write src/frontend/stores.ts#activeTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
