# automatic/src_frontend_components_drawer_pages_OverlayActions.svelte (1)

## setTimeout — event-b3dfc01d5df79b9da3

[code] [src/frontend/components/drawer/pages/OverlayActions.svelte:18](../../../../../src/frontend/components/drawer/pages/OverlayActions.svelte#L18); () => { // WIP history overlays.update((a) => { delete a&#91;overlayId&#93;&#91;actionId&#93; a&#91;overlayId&#93;.modified = Date.now() return a }) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/OverlayActions.svelte:18 <callback> (depth 0); src/frontend/components/drawer/pages/OverlayActions.svelte:20 <callback> (depth 1).

Effects: src/frontend/components/drawer/pages/OverlayActions.svelte:20 store-write src/frontend/stores.ts#overlays .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
