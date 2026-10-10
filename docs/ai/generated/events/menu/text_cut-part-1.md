# menu/text_cut (1)

## text_cut — event-bdb6ebaf45cdd3c2d2

[code] [src/frontend/components/context/contextMenus.ts:127](../../../../../src/frontend/components/context/contextMenus.ts#L127); text_cut. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:215 !editElem; src/frontend/components/context/menuClick.ts:219 editElem instanceof HTMLTextAreaElement.

Calls: src/frontend/components/context/menuClick.ts:213 text_cut (depth 0); src/frontend/components/context/menuClick.ts:2273 focusAndRestoreSelection (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: editbox_text src/frontend/components/context/contextMenus.ts:419. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:198 text_cut: () => { // $spellcheck?.suggestions \|\| if (!window.getSelection()?.toString()) hide = true }. Appears: src/frontend/components/edit/editbox/EditboxLines.svelte:762; src/frontend/components/show/TextEditor.svelte:63.
