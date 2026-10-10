# menu/import_more (1)

## import_more — event-2779e46ba2c7d25bbd

[code] [src/frontend/components/context/contextMenus.ts:22](../../../../../src/frontend/components/context/contextMenus.ts#L22); import_more. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:150 import_more (depth 0).

Effects: src/frontend/components/context/menuClick.ts:150 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
