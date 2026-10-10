# automatic/src_frontend_components_drawer_pages_Templates.svelte (1)

## setTimeout — event-882a563394f56ca243

[code] [src/frontend/components/drawer/pages/Templates.svelte:61](../../../../../src/frontend/components/drawer/pages/Templates.svelte#L61); () => { nextScrollTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Templates.svelte:61 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e633a66bb85d06fe98

[code] [src/frontend/components/drawer/pages/Templates.svelte:85](../../../../../src/frontend/components/drawer/pages/Templates.svelte#L85); () => { const batch = lazyLoader === 0 ? 4 : Math.min(32, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Templates.svelte:81 lazyLoader >= fullFilteredTemplates.length; src/frontend/components/drawer/pages/Templates.svelte:80 !loaded && fullFilteredTemplates?.length.

Calls: src/frontend/components/drawer/pages/Templates.svelte:86 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-161ce43c2843af2edc

[code] [src/frontend/components/drawer/pages/Templates.svelte:173](../../../../../src/frontend/components/drawer/pages/Templates.svelte#L173); () => templateApplied.set(false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Templates.svelte:173 <callback> (depth 0).

Effects: src/frontend/components/drawer/pages/Templates.svelte:173 store-write src/frontend/stores.ts#templateApplied .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
