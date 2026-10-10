# menu/category_action (1)

## category_action — event-0ebc20cfcc3e1c7640

[code] [src/frontend/components/context/contextMenus.ts:80](../../../../../src/frontend/components/context/contextMenus.ts#L80); category_action. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:840 !id.

Calls: src/frontend/components/context/menuClick.ts:838 category_action (depth 0).

Effects: src/frontend/components/context/menuClick.ts:842 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:843 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
