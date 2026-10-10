# menu/scene_actions (1)

## scene_actions — event-8d53a9ac83ae07e502

[code] [src/frontend/components/context/contextMenus.ts:209](../../../../../src/frontend/components/context/contextMenus.ts#L209); scene_actions. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1601 !scene.

Calls: src/frontend/components/context/menuClick.ts:1598 scene_actions (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1603 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:1604 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
