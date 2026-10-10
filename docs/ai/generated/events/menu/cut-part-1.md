# menu/cut (1)

## cut — event-e48c482da10719fcfd

[code] [src/frontend/components/context/contextMenus.ts:27](../../../../../src/frontend/components/context/contextMenus.ts#L27); cut. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:190 cut (depth 0); src/frontend/components/helpers/clipboard.ts:176 cut (depth 1); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 2); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 3); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 3); src/frontend/components/helpers/clipboard.ts:84 copy (depth 2); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 3); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 4); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 5); src/frontend/components/helpers/shows.ts:389 ref (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 3); src/frontend/utils/common.ts:39 <callback> (depth 4).

Effects: src/frontend/components/helpers/clipboard.ts:186 file-write navigator.clipboard.writeText ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 13. Full edges/effects/conditions in JSON.

Menu layouts: edit src/frontend/components/context/contextMenus.ts:246. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
