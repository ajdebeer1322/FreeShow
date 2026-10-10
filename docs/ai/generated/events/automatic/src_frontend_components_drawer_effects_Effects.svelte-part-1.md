# automatic/src_frontend_components_drawer_effects_Effects.svelte (1)

## setInterval — event-889790b4f6b8a5969f

[code] [src/frontend/components/drawer/effects/Effects.svelte:43](../../../../../src/frontend/components/drawer/effects/Effects.svelte#L43); () => { slowLoader++ if (slowLoader > fullFilteredEffects.length + 1) { clearInterval(loader) slowLoader = -1 } }. resolved-within-bound.

Conditions: src/frontend/components/drawer/effects/Effects.svelte:45 slowLoader > fullFilteredEffects.length + 1.

Calls: src/frontend/components/drawer/effects/Effects.svelte:43 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
