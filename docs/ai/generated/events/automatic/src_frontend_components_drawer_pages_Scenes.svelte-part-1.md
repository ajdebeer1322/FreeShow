# automatic/src_frontend_components_drawer_pages_Scenes.svelte (1)

## setTimeout — event-b51d3d08b329c51ce6

[code] [src/frontend/components/drawer/pages/Scenes.svelte:46](../../../../../src/frontend/components/drawer/pages/Scenes.svelte#L46); () => { nextScrollTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Scenes.svelte:46 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-8cd33e5003a9d17975

[code] [src/frontend/components/drawer/pages/Scenes.svelte:70](../../../../../src/frontend/components/drawer/pages/Scenes.svelte#L70); () => { const batch = lazyLoader === 0 ? 4 : Math.min(32, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Scenes.svelte:66 lazyLoader >= fullFilteredScenes.length; src/frontend/components/drawer/pages/Scenes.svelte:65 !loaded && fullFilteredScenes?.length.

Calls: src/frontend/components/drawer/pages/Scenes.svelte:71 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
