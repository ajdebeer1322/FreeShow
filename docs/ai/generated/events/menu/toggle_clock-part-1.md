# menu/toggle_clock (1)

## toggle_clock — event-f3ab3a2a077172103a

[code] [src/frontend/components/context/contextMenus.ts:85](../../../../../src/frontend/components/context/contextMenus.ts#L85); toggle_clock. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:893 toggle_clock (depth 0).

Effects: src/frontend/components/context/menuClick.ts:894 store-write src/frontend/stores.ts#forceClock .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: drawer_info src/frontend/components/context/contextMenus.ts:267. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:331 toggle_clock: () => { if ($forceClock) enabled = true }. Appears: src/frontend/components/drawer/info/Info.svelte:24.
