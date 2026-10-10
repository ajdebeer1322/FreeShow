# click/src_frontend_components_main_popups_OutputSelector.svelte (1)

## click — event-b5af5a6550726e375d

[code] [src/frontend/components/main/popups/OutputSelector.svelte:100](../../../../../src/frontend/components/main/popups/OutputSelector.svelte#L100); () => openOutput(currentScreen.id). resolved-within-bound.

Conditions: src/frontend/components/main/popups/OutputSelector.svelte:84 screens.length.

Calls: src/frontend/components/main/popups/OutputSelector.svelte:75 openOutput (depth 1).

Effects: src/frontend/components/main/popups/OutputSelector.svelte:76 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/main/popups/OutputSelector.svelte:77 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/main/popups/OutputSelector.svelte:78 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/popups/OutputSelector.svelte:79 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7252942e885ed53b51

[code] [src/frontend/components/main/popups/OutputSelector.svelte:114](../../../../../src/frontend/components/main/popups/OutputSelector.svelte#L114); identifyScreens. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/OutputSelector.svelte:71 identifyScreens (depth 0); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/components/main/popups/OutputSelector.svelte:72 ipc send(OUTPUT, &#91;"IDENTIFY_SCREENS"&#93;, screens) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
