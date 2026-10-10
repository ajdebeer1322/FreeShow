# automatic/src_frontend_components_drawer_pages_Overlays.svelte (1)

## setTimeout — event-bdc67de4f82432039a

[code] [src/frontend/components/drawer/pages/Overlays.svelte:54](../../../../../src/frontend/components/drawer/pages/Overlays.svelte#L54); () => { nextScrollTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Overlays.svelte:54 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9abbc4d8cb442a232f

[code] [src/frontend/components/drawer/pages/Overlays.svelte:78](../../../../../src/frontend/components/drawer/pages/Overlays.svelte#L78); () => { const batch = lazyLoader === 0 ? 4 : Math.min(32, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Overlays.svelte:74 lazyLoader >= fullFilteredOverlays.length; src/frontend/components/drawer/pages/Overlays.svelte:73 !loaded && fullFilteredOverlays?.length.

Calls: src/frontend/components/drawer/pages/Overlays.svelte:79 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
