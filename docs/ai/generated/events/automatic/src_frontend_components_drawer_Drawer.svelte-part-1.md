# automatic/src_frontend_components_drawer_Drawer.svelte (1)

## setTimeout — event-968681bb9e466848cf

[code] [src/frontend/components/drawer/Drawer.svelte:49](../../../../../src/frontend/components/drawer/Drawer.svelte#L49); () => drawer.set({ height: $drawer.stored ?? DEFAULT_DRAWER_HEIGHT, stored: null }). resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:49 $activePage === "show" && $drawer.autoclosed.

Calls: src/frontend/components/drawer/Drawer.svelte:49 <callback> (depth 0).

Effects: src/frontend/components/drawer/Drawer.svelte:49 store-write src/frontend/stores.ts#drawer .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4ca2bb62ac770a8b7d

[code] [src/frontend/components/drawer/Drawer.svelte:141](../../../../../src/frontend/components/drawer/Drawer.svelte#L141); () => { activeDrawerTab.set(newId) // remove focus for search function to work setTimeout(() => (document.activeElement as any)?.blur(), 10) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/Drawer.svelte:141 <callback> (depth 0); src/frontend/components/drawer/Drawer.svelte:145 <callback> (depth 1).

Effects: src/frontend/components/drawer/Drawer.svelte:142 store-write src/frontend/stores.ts#activeDrawerTab .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c1b5ac6ff0429c91a5

[code] [src/frontend/components/drawer/Drawer.svelte:145](../../../../../src/frontend/components/drawer/Drawer.svelte#L145); () => (document.activeElement as any)?.blur(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/Drawer.svelte:145 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7c1cb13f6070418e99

[code] [src/frontend/components/drawer/Drawer.svelte:242](../../../../../src/frontend/components/drawer/Drawer.svelte#L242); () => { searchElem?.focus() }. resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:241 searchActive.

Calls: src/frontend/components/drawer/Drawer.svelte:242 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-454750d0d252546d7a

[code] [src/frontend/components/drawer/Drawer.svelte:249](../../../../../src/frontend/components/drawer/Drawer.svelte#L249); () => (searchActive = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/Drawer.svelte:249 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
