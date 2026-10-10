# click/src_frontend_components_edit_EffectTools.svelte (1)

## click — event-75449ef3c444fdb61f

[code] [src/frontend/components/edit/EffectTools.svelte:97](../../../../../src/frontend/components/edit/EffectTools.svelte#L97); () => move(index, index - 1). resolved-within-bound.

Conditions: src/frontend/components/edit/EffectTools.svelte:82 active === "effect"; src/frontend/components/edit/EffectTools.svelte:83 currentEffect; src/frontend/components/edit/EffectTools.svelte:96 displayIndex < invertedItems.length - 1.

Calls: src/frontend/components/edit/EffectTools.svelte:43 move (depth 1); src/frontend/components/edit/EffectTools.svelte:46 <callback> (depth 2); src/frontend/components/helpers/mover.ts:25 addToPos (depth 3); src/frontend/components/edit/EffectTools.svelte:53 <callback> (depth 2).

Effects: src/frontend/components/edit/EffectTools.svelte:46 store-write src/frontend/stores.ts#effects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e7d1af0e75566f3036

[code] [src/frontend/components/edit/EffectTools.svelte:100](../../../../../src/frontend/components/edit/EffectTools.svelte#L100); () => move(index, index + 1). resolved-within-bound.

Conditions: src/frontend/components/edit/EffectTools.svelte:82 active === "effect"; src/frontend/components/edit/EffectTools.svelte:83 currentEffect; src/frontend/components/edit/EffectTools.svelte:99 displayIndex > 0.

Calls: src/frontend/components/edit/EffectTools.svelte:43 move (depth 1); src/frontend/components/edit/EffectTools.svelte:46 <callback> (depth 2); src/frontend/components/helpers/mover.ts:25 addToPos (depth 3); src/frontend/components/edit/EffectTools.svelte:53 <callback> (depth 2).

Effects: src/frontend/components/edit/EffectTools.svelte:46 store-write src/frontend/stores.ts#effects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
