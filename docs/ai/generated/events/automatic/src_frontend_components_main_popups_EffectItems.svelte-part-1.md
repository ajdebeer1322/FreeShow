# automatic/src_frontend_components_main_popups_EffectItems.svelte (1)

## setInterval — event-dce6627d3a93a314ac

[code] [src/frontend/components/main/popups/EffectItems.svelte:23](../../../../../src/frontend/components/main/popups/EffectItems.svelte#L23); () => { slowLoader++ if (slowLoader > Object.keys(effectItems).length + 1) clearInterval(loader) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/EffectItems.svelte:25 slowLoader > Object.keys(effectItems).length + 1.

Calls: src/frontend/components/main/popups/EffectItems.svelte:23 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
