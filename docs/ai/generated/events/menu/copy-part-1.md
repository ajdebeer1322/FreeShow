# menu/copy (1)

## copy — event-35c2c6a9a652ceef7a

[code] [src/frontend/components/context/contextMenus.ts:28](../../../../../src/frontend/components/context/contextMenus.ts#L28); copy. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:191 copy (depth 0); src/frontend/components/helpers/clipboard.ts:84 copy (depth 1); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 2); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 3); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 3); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 2); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 3); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6).

Effects: src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.
