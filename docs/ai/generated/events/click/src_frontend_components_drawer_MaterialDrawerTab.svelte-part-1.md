# click/src_frontend_components_drawer_MaterialDrawerTab.svelte (1)

## click — event-1ae4520d3406ddd7b9

[code] [src/frontend/components/drawer/MaterialDrawerTab.svelte:103](../../../../../src/frontend/components/drawer/MaterialDrawerTab.svelte#L103); click. partial.

Conditions: src/frontend/components/drawer/MaterialDrawerTab.svelte:48 ctrl; src/frontend/components/drawer/MaterialDrawerTab.svelte:50 category.openTrigger; src/frontend/components/drawer/MaterialDrawerTab.svelte:51 shift; src/frontend/components/drawer/MaterialDrawerTab.svelte:55 isSubmenu.

Calls: src/frontend/components/drawer/MaterialDrawerTab.svelte:46 click (depth 0); src/frontend/components/drawer/MaterialDrawerTab.svelte:53 <callback> (depth 1).

Effects: src/frontend/components/drawer/MaterialDrawerTab.svelte:53 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8ce5a125f9dc21d2ce

[code] [src/frontend/components/drawer/MaterialDrawerTab.svelte:149](../../../../../src/frontend/components/drawer/MaterialDrawerTab.svelte#L149); openSubMenu. partial.

Conditions: src/frontend/components/drawer/MaterialDrawerTab.svelte:148 !isSubmenu && submenu?.options?.length; src/frontend/components/drawer/MaterialDrawerTab.svelte:85 !a&#91;drawerId&#93;; src/frontend/components/drawer/MaterialDrawerTab.svelte:89 existingIndex < 0; src/frontend/components/drawer/MaterialDrawerTab.svelte:93 category.openTrigger.

Calls: src/frontend/components/drawer/MaterialDrawerTab.svelte:83 openSubMenu (depth 0); src/frontend/components/drawer/MaterialDrawerTab.svelte:84 <callback> (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/drawer/MaterialDrawerTab.svelte:88 <callback> (depth 2).

Effects: src/frontend/components/drawer/MaterialDrawerTab.svelte:84 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
