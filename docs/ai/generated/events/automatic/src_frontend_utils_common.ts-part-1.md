# automatic/src_frontend_utils_common.ts (1)

## setTimeout — event-ac6e48949ccfd6a422

[code] [src/frontend/utils/common.ts:39](../../../../../src/frontend/utils/common.ts#L39); () => { statusIndicator.set("") statusTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:39 <callback> (depth 0).

Effects: src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1440ad643e93a82687

[code] [src/frontend/utils/common.ts:48](../../../../../src/frontend/utils/common.ts#L48); () => { resolve("ended") }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:48 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b298d85d32171c9b61

[code] [src/frontend/utils/common.ts:60](../../../../../src/frontend/utils/common.ts#L60); () => { exit() resolve(null) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:60 <callback> (depth 0); src/frontend/utils/common.ts:73 exit (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-b7fd6893fee8082b94

[code] [src/frontend/utils/common.ts:65](../../../../../src/frontend/utils/common.ts#L65); async () => { currentValue = await value() if (!currentValue) return exit() resolve(currentValue) }. partial.

Conditions: src/frontend/utils/common.ts:67 !currentValue.

Calls: src/frontend/utils/common.ts:65 <callback> (depth 0); src/frontend/utils/common.ts:73 exit (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-761081d8e06b1742b1

[code] [src/frontend/utils/common.ts:129](../../../../../src/frontend/utils/common.ts#L129); () => { const skip = get(activePopup) === "initialize" \|\| get(activePopup) === "cloud_method" if (skip) startAutosave() else save(false, { autosave: true }) }. partial.

Conditions: src/frontend/utils/common.ts:131 skip.

Calls: src/frontend/utils/common.ts:129 <callback> (depth 0); src/frontend/utils/common.ts:117 startAutosave (depth 1); src/frontend/utils/common.ts:18 isMainWindow (depth 2); src/frontend/utils/save.ts:124 save (depth 1); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 2); src/frontend/components/helpers/output.ts:115 <callback> (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 2); src/frontend/components/actions/actions.ts:159 <callback> (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 4); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:49 <callback> (depth 5); src/frontend/components/actions/actions.ts:74 runTrigger (depth 5); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 6).

Effects: src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:139 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:249 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/save.ts:250 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/output.ts:115 store-write src/frontend/stores.ts#syncedOutputs ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:144 store-write src/frontend/stores.ts#special ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:254 ipc sendMain(Main.SAVE, saveData) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## setTimeout — event-bbc093742a6a18b4bd

[code] [src/frontend/utils/common.ts:176](../../../../../src/frontend/utils/common.ts#L176); () => { send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: captureOutputId, key: "capture", value }) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:176 <callback> (depth 0); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/utils/common.ts:177 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: captureOutputId, key: "capture", value }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
