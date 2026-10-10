# menu/view_simple (1)

## view_simple — event-c5c69e2cdbfafbe853

[code] [src/frontend/components/context/contextMenus.ts:136](../../../../../src/frontend/components/context/contextMenus.ts#L136); view_simple. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1209 view_simple (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1210 store-write src/frontend/stores.ts#slidesOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: slideViews src/frontend/components/context/contextMenus.ts:394. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:31 view_simple: () => ($slidesOptions.mode === "simple" ? (enabled = true) : ""). Appears: src/frontend/components/slide/SlideBar.svelte:102; src/server/remote/components/tablet/layout/TabletCenter.svelte:269.
