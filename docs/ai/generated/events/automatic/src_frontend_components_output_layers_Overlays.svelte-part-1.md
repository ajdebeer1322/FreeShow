# automatic/src_frontend_components_output_layers_Overlays.svelte (1)

## setTimeout — event-871def2494df313350

[code] [src/frontend/components/output/layers/Overlays.svelte:42](../../../../../src/frontend/components/output/layers/Overlays.svelte#L42); clearingFinished. resolved-within-bound.

Conditions: src/frontend/components/output/layers/Overlays.svelte:47 activeOverlays.includes(id) && !outputtedOverlays.includes(id).

Calls: src/frontend/components/output/layers/Overlays.svelte:45 clearingFinished (depth 0); src/frontend/components/output/layers/Overlays.svelte:46 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-996fba2b555cd68752

[code] [src/frontend/components/output/layers/Overlays.svelte:60](../../../../../src/frontend/components/output/layers/Overlays.svelte#L60); () => { actualOutputtedOverlays = clone(outputtedOverlays) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/layers/Overlays.svelte:60 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
