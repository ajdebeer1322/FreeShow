# menu/settings (1)

## settings — event-ad02de4ad0528e0043

[code] [src/frontend/components/context/contextMenus.ts:41](../../../../../src/frontend/components/context/contextMenus.ts#L41); settings. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:153 get(activePage) === "stage"; src/frontend/components/context/menuClick.ts:154 get(activePage) === "settings".

Calls: src/frontend/components/context/menuClick.ts:152 settings (depth 0).

Effects: src/frontend/components/context/menuClick.ts:153 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/context/menuClick.ts:154 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/context/menuClick.ts:155 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: none indexed. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
