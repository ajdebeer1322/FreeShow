# menu/text_paste (1)

## text_paste — event-a924a24ffe6b35f2fc

[code] [src/frontend/components/context/contextMenus.ts:128](../../../../../src/frontend/components/context/contextMenus.ts#L128); text_paste. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:226 !editElem; src/frontend/components/context/menuClick.ts:231 !text; src/frontend/components/context/menuClick.ts:234 editElem instanceof HTMLTextAreaElement.

Calls: src/frontend/components/context/menuClick.ts:224 text_paste (depth 0); src/frontend/components/context/menuClick.ts:230 <callback> (depth 1); src/frontend/components/context/menuClick.ts:2273 focusAndRestoreSelection (depth 2); src/frontend/components/context/menuClick.ts:239 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: editbox_text src/frontend/components/context/contextMenus.ts:419. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:202 text_paste: () => { setTimeout(() => { if ($spellcheck?.suggestions) hide = true }, 20) }. Appears: src/frontend/components/edit/editbox/EditboxLines.svelte:762; src/frontend/components/show/TextEditor.svelte:63.
