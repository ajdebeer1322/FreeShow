# keyboard/src_frontend_components_drawer_navigation_NavigationSections.svelte (1)

## dynamic — event-86b5690360cbfd5a77

[code] [src/frontend/components/drawer/navigation/NavigationSections.svelte:73](../../../../../src/frontend/components/drawer/navigation/NavigationSections.svelte#L73); keydown. resolved-within-bound.

Conditions: src/frontend/components/drawer/navigation/NavigationSections.svelte:49 $activeEdit.items.length; src/frontend/components/drawer/navigation/NavigationSections.svelte:50 e.target?.closest?.(".edit") \|\| !(e.ctrlKey \|\| e.metaKey); src/frontend/components/drawer/navigation/NavigationSections.svelte:55 e.key === "ArrowDown"; src/frontend/components/drawer/navigation/NavigationSections.svelte:61 nextIndex < flatSections.length; src/frontend/components/drawer/navigation/NavigationSections.svelte:62 e.key === "ArrowUp"; src/frontend/components/drawer/navigation/NavigationSections.svelte:68 nextIndex >= 0.

Calls: src/frontend/components/drawer/navigation/NavigationSections.svelte:48 keydown (depth 0); src/frontend/components/drawer/navigation/NavigationSections.svelte:52 <callback> (depth 1); src/frontend/components/drawer/navigation/NavigationSections.svelte:56 <callback> (depth 1); src/frontend/components/drawer/navigation/NavigationSections.svelte:42 notATab (depth 1); src/frontend/components/drawer/navigation/NavigationSections.svelte:29 setSubTab (depth 1); src/frontend/components/drawer/navigation/NavigationSections.svelte:31 <callback> (depth 2); src/frontend/components/drawer/navigation/NavigationSections.svelte:63 <callback> (depth 1).

Effects: src/frontend/components/drawer/navigation/NavigationSections.svelte:37 store-write src/frontend/stores.ts#activeActionTagFilter ; src/frontend/components/drawer/navigation/NavigationSections.svelte:38 store-write src/frontend/stores.ts#activeVariableTagFilter ; src/frontend/components/drawer/navigation/NavigationSections.svelte:39 store-write src/frontend/stores.ts#activeTimerTagFilter ; src/frontend/components/drawer/navigation/NavigationSections.svelte:31 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
