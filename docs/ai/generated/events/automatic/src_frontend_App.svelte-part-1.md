# automatic/src_frontend_App.svelte (1)

## setTimeout — event-93f2ae85d11c81b289

[code] [src/frontend/App.svelte:40](../../../../../src/frontend/App.svelte#L40); toggleRemoteStream. partial.

Conditions: src/frontend/App.svelte:40 ($loaded && $disabledServers.output_stream !== "") \|\| !$outputDisplay; src/frontend/utils/common.ts:169 !isMainWindow(); src/frontend/utils/common.ts:173 !captureOutputId \|\| !get(outputs)&#91;captureOutputId&#93;; src/frontend/utils/common.ts:174 get(disabledServers).output_stream === false.

Calls: src/frontend/utils/common.ts:167 toggleRemoteStream (depth 0); src/frontend/utils/common.ts:18 isMainWindow (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 1); src/frontend/components/helpers/array.ts:42 sortByName (depth 2); src/frontend/components/helpers/array.ts:45 <callback> (depth 3); src/frontend/components/helpers/array.ts:46 <callback> (depth 3); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/components/helpers/output.ts:677 <callback> (depth 2); src/frontend/components/helpers/output.ts:679 <callback> (depth 2); src/frontend/components/helpers/output.ts:679 <callback> (depth 2); src/frontend/components/helpers/output.ts:681 <callback> (depth 2); src/frontend/components/helpers/output.ts:1102 addOutput (depth 2); src/frontend/components/helpers/output.ts:1106 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/output.ts:1116 <callback> (depth 4).

Effects: src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/utils/common.ts:177 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: captureOutputId, key: "capture", value }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 9. Full edges/effects/conditions in JSON.

## setTimeout — event-4a2c38172a2481e43e

[code] [src/frontend/App.svelte:43](../../../../../src/frontend/App.svelte#L43); () => closeAd.set(false). resolved-within-bound.

Conditions: src/frontend/App.svelte:43 $closeAd.

Calls: src/frontend/App.svelte:43 <callback> (depth 0).

Effects: src/frontend/App.svelte:43 store-write src/frontend/stores.ts#closeAd .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-948ee8b9af7ccce079

[code] [src/frontend/App.svelte:60](../../../../../src/frontend/App.svelte#L60); () => { // prevent brief flash ready = true }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/App.svelte:60 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
