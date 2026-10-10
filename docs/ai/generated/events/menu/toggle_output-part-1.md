# menu/toggle_output (1)

## toggle_output — event-8f15790b2b64848654

[code] [src/frontend/components/context/contextMenus.ts:90](../../../../../src/frontend/components/context/contextMenus.ts#L90); toggle_output. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:904 toggle_output (depth 0); src/frontend/components/helpers/output.ts:149 toggleOutput (depth 1); src/frontend/components/helpers/output.ts:130 toggleOutputs (depth 2); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:677 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:681 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:1102 addOutput (depth 4); src/frontend/components/helpers/output.ts:1106 <callback> (depth 5).

Effects: src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 6. Full edges/effects/conditions in JSON.

Menu layouts: output_active_button src/frontend/components/context/contextMenus.ts:263. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:288 toggle_output: () => { let outputId = contextElem?.id \|\| "" disabled = !!$outputs&#91;outputId&#93;?.invisible }. Appears: src/frontend/components/output/preview/PreviewOutputs.svelte:63.
