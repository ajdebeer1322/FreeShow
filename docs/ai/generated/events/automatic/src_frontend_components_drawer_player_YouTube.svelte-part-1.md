# automatic/src_frontend_components_drawer_player_YouTube.svelte (1)

## setInterval — event-acaacf4caea200dc0e

[code] [src/frontend/components/drawer/player/YouTube.svelte:51](../../../../../src/frontend/components/drawer/player/YouTube.svelte#L51); () => { if (!player) return try { if (player.getPlayerState() === 1) actualVideoTime = player.getCurrentTime() } catch {} }. partial.

Conditions: src/frontend/components/drawer/player/YouTube.svelte:52 !player; src/frontend/components/drawer/player/YouTube.svelte:54 player.getPlayerState() === 1.

Calls: src/frontend/components/drawer/player/YouTube.svelte:51 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-eb18716bc4b0ee2d3e

[code] [src/frontend/components/drawer/player/YouTube.svelte:70](../../../../../src/frontend/components/drawer/player/YouTube.svelte#L70); () => { seeking = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/player/YouTube.svelte:70 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
