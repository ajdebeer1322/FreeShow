# menu/item_bind_to (1)

## item_bind_to — event-332d5115b96088bd0a

[code] [src/frontend/components/context/contextMenus.ts:163](../../../../../src/frontend/components/context/contextMenus.ts#L163); submenu loader. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: edit_box src/frontend/components/context/contextMenus.ts:418. Loaders: bind_item src/frontend/components/context/loadItems.ts:372.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/edit/editbox/Editbox.svelte:242.
