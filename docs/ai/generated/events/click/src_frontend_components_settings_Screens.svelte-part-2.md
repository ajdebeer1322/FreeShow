# click/src_frontend_components_settings_Screens.svelte (2)

## click — event-77c495e163047912bb

[code] [src/frontend/components/settings/Screens.svelte:289](../../../../../src/frontend/components/settings/Screens.svelte#L289); lockScreen. resolved-within-bound.

Conditions: src/frontend/components/settings/Screens.svelte:210 editCropping; src/frontend/components/settings/Screens.svelte:228 editEdgeBlending; src/frontend/components/settings/Screens.svelte:278 screens.length; src/frontend/components/settings/Screens.svelte:288 !activateOutput; src/frontend/components/settings/Screens.svelte:144 !screenId; src/frontend/components/settings/Screens.svelte:147 !a&#91;screenId&#93;.

Calls: src/frontend/components/settings/Screens.svelte:143 lockScreen (depth 0); src/frontend/components/settings/Screens.svelte:146 <callback> (depth 1).

Effects: src/frontend/components/settings/Screens.svelte:146 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-be2d1d940c0ffbf91b

[code] [src/frontend/components/settings/Screens.svelte:304](../../../../../src/frontend/components/settings/Screens.svelte#L304); () => { if (currentScreen?.forcedResolution \|\| currentScreen.boundsLocked) return // WIP this will not always change correct output if multiple & "activateOutput" changeOutputScree. partial.

Conditions: src/frontend/components/settings/Screens.svelte:210 editCropping; src/frontend/components/settings/Screens.svelte:228 editEdgeBlending; src/frontend/components/settings/Screens.svelte:278 screens.length.

Calls: src/frontend/components/settings/Screens.svelte:113 changeOutputScreen (depth 1); src/frontend/components/settings/Screens.svelte:119 <callback> (depth 2); src/frontend/components/settings/Screens.svelte:129 <callback> (depth 2); src/frontend/components/helpers/output.ts:130 toggleOutputs (depth 3); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 4); src/frontend/components/helpers/array.ts:42 sortByName (depth 5); src/frontend/components/helpers/array.ts:45 <callback> (depth 6); src/frontend/components/helpers/array.ts:46 <callback> (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/components/helpers/output.ts:677 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:681 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:1102 addOutput (depth 5).

Effects: src/frontend/components/settings/Screens.svelte:138 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/settings/Screens.svelte:139 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/settings/Screens.svelte:119 store-write src/frontend/stores.ts#outputs ; src/frontend/components/settings/Screens.svelte:133 ipc send(OUTPUT, &#91;"UPDATE_BOUNDS"&#93;, { id: screenId, ...currentScreen }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 14. Full edges/effects/conditions in JSON.

## click — event-d367b5b1db10021435

[code] [src/frontend/components/settings/Screens.svelte:323](../../../../../src/frontend/components/settings/Screens.svelte#L323); identifyScreens. partial.

Conditions: src/frontend/components/settings/Screens.svelte:210 editCropping; src/frontend/components/settings/Screens.svelte:228 editEdgeBlending; src/frontend/components/settings/Screens.svelte:321 !currentScreen.boundsLocked.

Calls: src/frontend/components/settings/Screens.svelte:154 identifyScreens (depth 0); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/components/settings/Screens.svelte:155 ipc send(OUTPUT, &#91;"IDENTIFY_SCREENS"&#93;, screens) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
