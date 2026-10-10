# automatic/src_server_stage_components_Timer.svelte (1)

## setInterval — event-00c6e40d05cc1a60a5

[code] [src/server/stage/components/Timer.svelte:59](../../../../../src/server/stage/components/Timer.svelte#L59); () => { blinkingOff = true setTimeout(() => { blinkingOff = false }, INTERVAL * 0.2) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/components/Timer.svelte:59 <callback> (depth 0); src/server/stage/components/Timer.svelte:61 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-8f8e311459c4e1fec2

[code] [src/server/stage/components/Timer.svelte:61](../../../../../src/server/stage/components/Timer.svelte#L61); () => { blinkingOff = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/components/Timer.svelte:61 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
