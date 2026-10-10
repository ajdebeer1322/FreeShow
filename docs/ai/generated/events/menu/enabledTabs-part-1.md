# menu/enabledTabs (1)

## enabledTabs — event-8db2ff05bb8d9ed508

[code] [src/frontend/components/context/contextMenus.ts:54](../../../../../src/frontend/components/context/contextMenus.ts#L54); submenu loader. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: drawer_top src/frontend/components/context/contextMenus.ts:266. Loaders: enabled_drawer_tabs src/frontend/components/context/loadItems.ts:22.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/context/ContextMenu.svelte:56; src/frontend/components/drawer/Drawer.svelte:260; src/frontend/components/drawer/Drawer.svelte:277; src/server/remote/components/tablet/layout/TabletDrawer.svelte:146.
