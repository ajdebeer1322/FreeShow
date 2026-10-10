# menu/insert_virtual_break (1)

## insert_virtual_break — event-7a465317eb58356d04

[code] [src/frontend/components/context/contextMenus.ts:171](../../../../../src/frontend/components/context/contextMenus.ts#L171); insert_virtual_break. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:243 !editElem; src/frontend/components/context/menuClick.ts:247 editElem instanceof HTMLTextAreaElement.

Calls: src/frontend/components/context/menuClick.ts:241 insert_virtual_break (depth 0); src/frontend/components/context/menuClick.ts:2273 focusAndRestoreSelection (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
