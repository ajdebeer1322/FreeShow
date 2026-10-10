# menu/quit (1)

## quit — event-8bebd366192611c64c

[code] [src/frontend/components/context/contextMenus.ts:40](../../../../../src/frontend/components/context/contextMenus.ts#L40); quit. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:157 quit (depth 0); src/frontend/utils/save.ts:339 initializeClosing (depth 1); src/frontend/utils/save.ts:295 saveComplete (depth 2); src/frontend/utils/common.ts:33 setStatus (depth 3); src/frontend/utils/common.ts:39 <callback> (depth 4); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 3); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 4); src/frontend/components/helpers/array.ts:42 sortByName (depth 5); src/frontend/components/helpers/array.ts:45 <callback> (depth 6); src/frontend/components/helpers/array.ts:46 <callback> (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/components/helpers/output.ts:677 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:681 <callback> (depth 5).

Effects: src/frontend/utils/save.ts:341 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:300 store-write src/frontend/stores.ts#saved ; src/frontend/utils/save.ts:307 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:308 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/utils/cloudSync.ts:149 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/cloudSync.ts:150 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/utils/cloudSync.ts:151 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/cloudSync.ts:152 store-write src/frontend/stores.ts#renamedShows .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 31; depth cutoffs: 47. Full edges/effects/conditions in JSON.

Menu layouts: file src/frontend/components/context/contextMenus.ts:245. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
