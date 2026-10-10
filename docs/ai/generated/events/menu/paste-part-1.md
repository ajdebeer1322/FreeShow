# menu/paste (1)

## paste — event-8e7e12bc2fbe82e2fc

[code] [src/frontend/components/context/contextMenus.ts:30](../../../../../src/frontend/components/context/contextMenus.ts#L30); paste. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:252 paste (depth 0); src/frontend/components/helpers/clipboard.ts:135 paste (depth 1); src/frontend/components/helpers/caretHelper.ts:1 pasteText (depth 2); src/frontend/components/helpers/caretHelper.ts:6 <callback> (depth 3); src/frontend/components/helpers/caretHelper.ts:17 insertValue (depth 4); src/frontend/components/helpers/caretHelper.ts:37 getCaretPos (depth 5); src/frontend/components/helpers/caretHelper.ts:27 <callback> (depth 5); src/frontend/components/helpers/caretHelper.ts:46 pasteInDom (depth 4); src/frontend/components/helpers/caretHelper.ts:12 <callback> (depth 3); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/components/helpers/clipboard.ts:1273 mediaPaste (depth 2); src/frontend/components/helpers/clipboard.ts:1277 <callback> (depth 3); src/frontend/components/helpers/clipboard.ts:1279 <callback> (depth 3); src/frontend/components/helpers/clipboard.ts:1280 <callback> (depth 4); src/frontend/components/helpers/clipboard.ts:1285 <callback> (depth 5); src/frontend/utils/common.ts:33 setStatus (depth 2).

Effects: src/frontend/components/helpers/clipboard.ts:1279 store-write src/frontend/stores.ts#media ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
