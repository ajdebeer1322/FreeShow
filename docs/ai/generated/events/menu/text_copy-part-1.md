# menu/text_copy (1)

## text_copy — event-0f7e1e56989d9ab41e

[code] [src/frontend/components/context/contextMenus.ts:126](../../../../../src/frontend/components/context/contextMenus.ts#L126); text_copy. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:208 !editElem.

Calls: src/frontend/components/context/menuClick.ts:206 text_copy (depth 0); src/frontend/components/context/menuClick.ts:2273 focusAndRestoreSelection (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
