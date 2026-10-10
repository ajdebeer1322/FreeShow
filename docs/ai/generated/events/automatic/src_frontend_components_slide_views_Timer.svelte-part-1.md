# automatic/src_frontend_components_slide_views_Timer.svelte (1)

## setInterval — event-b973e14922e119d0fa

[code] [src/frontend/components/slide/views/Timer.svelte:109](../../../../../src/frontend/components/slide/views/Timer.svelte#L109); () => { blinkingOff = true setTimeout(() => { blinkingOff = false }, INTERVAL * 0.2) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/views/Timer.svelte:109 <callback> (depth 0); src/frontend/components/slide/views/Timer.svelte:111 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-76bef39d3eb6c9ae19

[code] [src/frontend/components/slide/views/Timer.svelte:111](../../../../../src/frontend/components/slide/views/Timer.svelte#L111); () => { blinkingOff = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/views/Timer.svelte:111 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-ad74e4eb49fb1d0db5

[code] [src/frontend/components/slide/views/Timer.svelte:134](../../../../../src/frontend/components/slide/views/Timer.svelte#L134); update. resolved-within-bound.

Conditions: src/frontend/components/slide/views/Timer.svelte:143 !hasDynamicValues.

Calls: src/frontend/components/slide/views/Timer.svelte:142 update (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
