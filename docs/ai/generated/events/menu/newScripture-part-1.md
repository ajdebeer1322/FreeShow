# menu/newScripture (1)

## newScripture — event-086acc5a43b0f8480f

[code] [src/frontend/components/context/contextMenus.ts:77](../../../../../src/frontend/components/context/contextMenus.ts#L77); newScripture. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:984 newScripture (depth 0).

Effects: src/frontend/components/context/menuClick.ts:984 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
