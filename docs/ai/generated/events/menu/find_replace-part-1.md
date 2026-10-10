# menu/find_replace (1)

## find_replace — event-c70fd2259e648091cc

[code] [src/frontend/components/context/contextMenus.ts:170](../../../../../src/frontend/components/context/contextMenus.ts#L170); find_replace. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:2083 find_replace (depth 0).

Effects: src/frontend/components/context/menuClick.ts:2084 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:2085 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: none indexed. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
