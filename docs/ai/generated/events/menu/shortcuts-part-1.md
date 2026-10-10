# menu/shortcuts (1)

## shortcuts — event-e207d4e51741906b4d

[code] [src/frontend/components/context/contextMenus.ts:43](../../../../../src/frontend/components/context/contextMenus.ts#L43); shortcuts. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:256 shortcuts (depth 0).

Effects: src/frontend/components/context/menuClick.ts:256 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: help src/frontend/components/context/contextMenus.ts:248. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
