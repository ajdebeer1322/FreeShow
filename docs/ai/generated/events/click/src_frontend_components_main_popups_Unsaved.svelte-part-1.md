# click/src_frontend_components_main_popups_Unsaved.svelte (1)

## click — event-f2d1eb8bdf09683328

[code] [src/frontend/components/main/popups/Unsaved.svelte:26](../../../../../src/frontend/components/main/popups/Unsaved.svelte#L26); () => activePopup.set(null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/Unsaved.svelte:26 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-db5d077f57e6e9dfe2

[code] [src/frontend/components/main/popups/Unsaved.svelte:31](../../../../../src/frontend/components/main/popups/Unsaved.svelte#L31); () => saveComplete({ closeWhenFinished: true }). partial.

Conditions: src/frontend/components/main/popups/Unsaved.svelte:30 $saved.

Calls: src/frontend/utils/save.ts:295 saveComplete (depth 1); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 2); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:677 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:681 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:1102 addOutput (depth 4).

Effects: src/frontend/utils/save.ts:300 store-write src/frontend/stores.ts#saved ; src/frontend/utils/save.ts:307 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:308 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/utils/cloudSync.ts:149 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/cloudSync.ts:150 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/utils/cloudSync.ts:151 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/cloudSync.ts:152 store-write src/frontend/stores.ts#renamedShows ; src/frontend/utils/cloudSync.ts:153 store-write src/frontend/stores.ts#activeShow .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 33; depth cutoffs: 30. Full edges/effects/conditions in JSON.

## click — event-98014229e15b898589

[code] [src/frontend/components/main/popups/Unsaved.svelte:36](../../../../../src/frontend/components/main/popups/Unsaved.svelte#L36); closeApp. partial.

Conditions: src/frontend/components/main/popups/Unsaved.svelte:30 $saved.

Calls: src/frontend/utils/save.ts:347 closeApp (depth 0); src/frontend/utils/save.ts:349 timeout (depth 1); src/frontend/utils/save.ts:350 <callback> (depth 2); src/frontend/components/drawer/pages/interactions.ts:44 stopAllInteractions (depth 1); src/frontend/components/drawer/pages/interactions.ts:9 updateActiveInteractions (depth 2); src/frontend/utils/remoteController.ts:58 stopRemoteController (depth 1); src/frontend/utils/remoteController.ts:76 autoDisableRemoteController (depth 1); src/frontend/utils/remoteController.ts:79 <callback> (depth 2); src/frontend/components/drawer/live/recorder.ts:55 stopMediaRecorder (depth 1); src/frontend/components/drawer/live/recorder.ts:64 <callback> (depth 2); src/frontend/components/drawer/live/recorder.ts:80 handleStop (depth 3); src/frontend/utils/common.ts:26 newToast (depth 4); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 5); src/frontend/components/drawer/live/recorder.ts:25 getMimeType (depth 4); src/frontend/components/drawer/live/recorder.ts:74 getRecordingFileName (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 4).

Effects: src/frontend/utils/save.ts:363 ipc sendMain(Main.CLOSE) ; src/frontend/components/drawer/pages/interactions.ts:10 store-write src/frontend/stores.ts#activeInteractions ; src/frontend/utils/remoteController.ts:79 store-write src/frontend/stores.ts#special ; src/frontend/components/drawer/live/recorder.ts:59 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:60 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:94 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:95 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:88 ipc sendMain(Main.RECORDER, { blob: arraybuffer, name, path: get(special)?.audioRecordingsPath }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioChannelRecorder.ts:59 store-write src/frontend/stores.ts#recordingChannels ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-de0a2dc07069e97217

[code] [src/frontend/components/main/popups/Unsaved.svelte:40](../../../../../src/frontend/components/main/popups/Unsaved.svelte#L40); () => save(true). partial.

Conditions: src/frontend/components/main/popups/Unsaved.svelte:30 $saved.

Calls: src/frontend/utils/save.ts:124 save (depth 1); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 2); src/frontend/components/helpers/output.ts:115 <callback> (depth 3); src/frontend/utils/common.ts:117 startAutosave (depth 2); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/utils/common.ts:129 <callback> (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 2); src/frontend/components/actions/actions.ts:159 <callback> (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 4); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:49 <callback> (depth 5); src/frontend/components/actions/actions.ts:74 runTrigger (depth 5); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 6).

Effects: src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:139 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:249 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/save.ts:250 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/output.ts:115 store-write src/frontend/stores.ts#syncedOutputs ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:144 store-write src/frontend/stores.ts#special ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:254 ipc sendMain(Main.SAVE, saveData) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.
