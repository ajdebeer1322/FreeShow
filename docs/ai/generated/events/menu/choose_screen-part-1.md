# menu/choose_screen (1)

## choose_screen — event-e89d53d19230ca03bc

[code] [src/frontend/components/context/contextMenus.ts:89](../../../../../src/frontend/components/context/contextMenus.ts#L89); choose_screen. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:900 choose_screen (depth 0).

Effects: src/frontend/components/context/menuClick.ts:901 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:902 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
