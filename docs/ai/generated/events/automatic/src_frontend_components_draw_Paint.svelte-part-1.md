# automatic/src_frontend_components_draw_Paint.svelte (1)

## setTimeout — event-d67015ebdc145479d3

[code] [src/frontend/components/draw/Paint.svelte:80](../../../../../src/frontend/components/draw/Paint.svelte#L80); () => { drawSettings.update((a) => { if (a.paint?.clear) delete a.paint.clear return a }) }. resolved-within-bound.

Conditions: src/frontend/components/draw/Paint.svelte:82 a.paint?.clear.

Calls: src/frontend/components/draw/Paint.svelte:80 <callback> (depth 0); src/frontend/components/draw/Paint.svelte:81 <callback> (depth 1).

Effects: src/frontend/components/draw/Paint.svelte:81 store-write src/frontend/stores.ts#drawSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f262b5a6422f67c1f5

[code] [src/frontend/components/draw/Paint.svelte:94](../../../../../src/frontend/components/draw/Paint.svelte#L94); () => { drawStop = true setTimeout(() => { timeout = null startTimeout() }, 20) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/draw/Paint.svelte:94 <callback> (depth 0); src/frontend/components/draw/Paint.svelte:96 <callback> (depth 1); src/frontend/components/draw/Paint.svelte:91 startTimeout (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ef1ae3931e1ed12207

[code] [src/frontend/components/draw/Paint.svelte:96](../../../../../src/frontend/components/draw/Paint.svelte#L96); () => { timeout = null startTimeout() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/draw/Paint.svelte:96 <callback> (depth 0); src/frontend/components/draw/Paint.svelte:91 startTimeout (depth 1); src/frontend/components/draw/Paint.svelte:94 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
