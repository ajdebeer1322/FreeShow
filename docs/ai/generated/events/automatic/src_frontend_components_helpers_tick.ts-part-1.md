# automatic/src_frontend_components_helpers_tick.ts (1)

## setTimeout — event-29434e2398d278ebd4

[code] [src/frontend/components/helpers/tick.ts:22](../../../../../src/frontend/components/helpers/tick.ts#L22); () => { get(slideTimers)&#91;timerId&#93;?.timer?.resume() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/tick.ts:22 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4efc963927a7531f1c

[code] [src/frontend/components/helpers/tick.ts:94](../../../../../src/frontend/components/helpers/tick.ts#L94); () => { if (timeout) clearTimeout(timeout) timeout = null callback(timerId) }. partial.

Conditions: src/frontend/components/helpers/tick.ts:95 timeout.

Calls: src/frontend/components/helpers/tick.ts:94 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-94971928cbce5405d8

[code] [src/frontend/components/helpers/tick.ts:119](../../../../../src/frontend/components/helpers/tick.ts#L119); () => { options = clone(get(slideTimers)&#91;id&#93;) if (!options \|\| !options.sliderTimer \|\| !options.timer \|\| options.paused) return slideTimers.update((a) => { if (!options.remaining \|\|. partial.

Conditions: src/frontend/components/helpers/tick.ts:121 !options \|\| !options.sliderTimer \|\| !options.timer \|\| options.paused; src/frontend/components/helpers/tick.ts:124 !options.remaining \|\| !options.start.

Calls: src/frontend/components/helpers/tick.ts:119 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/helpers/tick.ts:123 <callback> (depth 1); src/frontend/components/helpers/tick.ts:134 <callback> (depth 1); src/frontend/components/helpers/tick.ts:114 sliderTime (depth 2).

Effects: src/frontend/components/helpers/tick.ts:123 store-write src/frontend/stores.ts#slideTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-360fb8de37008189a1

[code] [src/frontend/components/helpers/tick.ts:134](../../../../../src/frontend/components/helpers/tick.ts#L134); () => { sliderTime(id) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/tick.ts:134 <callback> (depth 0); src/frontend/components/helpers/tick.ts:114 sliderTime (depth 1); src/frontend/components/helpers/tick.ts:119 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/tick.ts:123 <callback> (depth 3).

Effects: src/frontend/components/helpers/tick.ts:123 store-write src/frontend/stores.ts#slideTimers .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
