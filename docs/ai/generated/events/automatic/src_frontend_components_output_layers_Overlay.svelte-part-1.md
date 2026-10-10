# automatic/src_frontend_components_output_layers_Overlay.svelte (1)

## setTimeout — event-c18be822c7d4489f6c

[code] [src/frontend/components/output/layers/Overlay.svelte:42](../../../../../src/frontend/components/output/layers/Overlay.svelte#L42); () => { currentItems = clone(overlay.items \|\| &#91;&#93;) setShow(true) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/layers/Overlay.svelte:42 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/output/layers/Overlay.svelte:27 setShow (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-cd3a36553bd2d1b54d

[code] [src/frontend/components/output/layers/Overlay.svelte:56](../../../../../src/frontend/components/output/layers/Overlay.svelte#L56); () => { if (isClearing \|\| !Array.isArray(currentItems)) return if (currentItems.find((a) => a?.conditions)) conditionsUpdater++ }. resolved-within-bound.

Conditions: src/frontend/components/output/layers/Overlay.svelte:58 isClearing \|\| !Array.isArray(currentItems); src/frontend/components/output/layers/Overlay.svelte:59 currentItems.find((a) => a?.conditions).

Calls: src/frontend/components/output/layers/Overlay.svelte:57 <callback> (depth 0); src/frontend/components/output/layers/Overlay.svelte:59 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
