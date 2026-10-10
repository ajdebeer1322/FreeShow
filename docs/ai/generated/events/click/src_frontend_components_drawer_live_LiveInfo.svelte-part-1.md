# click/src_frontend_components_drawer_live_LiveInfo.svelte (1)

## click — event-6bd3f88f7dfd10517d

[code] [src/frontend/components/drawer/live/LiveInfo.svelte:41](../../../../../src/frontend/components/drawer/live/LiveInfo.svelte#L41); () => (paused = toggleMediaRecorder()). partial.

Conditions: src/frontend/components/drawer/live/LiveInfo.svelte:35 $activeRecording.

Calls: src/frontend/components/drawer/live/recorder.ts:45 toggleMediaRecorder (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-756ebf428ef68fb37e

[code] [src/frontend/components/drawer/live/LiveInfo.svelte:57](../../../../../src/frontend/components/drawer/live/LiveInfo.svelte#L57); stopMediaRecorder. partial.

Conditions: src/frontend/components/drawer/live/LiveInfo.svelte:35 $activeRecording; src/frontend/components/drawer/live/recorder.ts:56 !get(activeRecording) \|\| !mediaRecorder; src/frontend/components/drawer/live/recorder.ts:66 mediaRecorder && mediaRecorder.state !== "inactive".

Calls: src/frontend/components/drawer/live/recorder.ts:55 stopMediaRecorder (depth 0); src/frontend/components/drawer/live/recorder.ts:64 <callback> (depth 1); src/frontend/components/drawer/live/recorder.ts:80 handleStop (depth 2); src/frontend/utils/common.ts:26 newToast (depth 3); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 4); src/frontend/components/drawer/live/recorder.ts:25 getMimeType (depth 3); src/frontend/components/drawer/live/recorder.ts:74 getRecordingFileName (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 3).

Effects: src/frontend/components/drawer/live/recorder.ts:59 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:60 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:94 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:95 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:88 ipc sendMain(Main.RECORDER, { blob: arraybuffer, name, path: get(special)?.audioRecordingsPath }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.
