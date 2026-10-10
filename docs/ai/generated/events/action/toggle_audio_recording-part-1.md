# action/toggle_audio_recording (1)

## toggle_audio_recording — event-7729a4742788669924

[code] [src/frontend/components/actions/api.ts:310](../../../../../src/frontend/components/actions/api.ts#L310); (data: API_toggle_id = {}) => toggleAudioRecording(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:310 toggle_audio_recording (depth 0); src/frontend/components/actions/apiHelper.ts:917 toggleAudioRecording (depth 1); src/frontend/components/actions/apiHelper.ts:922 <callback> (depth 2); src/frontend/audio/audioChannelRecorder.ts:68 isChannelRecording (depth 2); src/frontend/audio/audioChannelRecorder.ts:19 startChannelRecording (depth 2); src/frontend/audio/audioAnalyser.ts:35 getAudioContext (depth 3); src/frontend/audio/audioAnalyser.ts:36 <callback> (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:130 cleanup (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:350 updateRoutingNodes (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:354 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:89 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:97 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:110 <callback> (depth 6).

Effects: src/frontend/audio/audioChannelRecorder.ts:39 ipc sendMain(Main.RECORDER, { blob: arraybuffer, name, path: customPath }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioChannelRecorder.ts:50 store-write src/frontend/stores.ts#recordingChannels ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioChannelRecorder.ts:59 store-write src/frontend/stores.ts#recordingChannels .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 24; depth cutoffs: 17. Full edges/effects/conditions in JSON.

[code] Payload type: API_toggle_id. [External/internal input routes](../inputs.json) retain transport and permission limits.
