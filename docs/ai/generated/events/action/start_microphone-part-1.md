# action/start_microphone (1)

## start_microphone — event-f81ca907af34f67911

[code] [src/frontend/components/actions/api.ts:317](../../../../../src/frontend/components/actions/api.ts#L317); (data: API_microphone) => AudioMicrophone.start(data.id, { name: data.name \|\| "" }). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:317 start_microphone (depth 0); src/frontend/audio/audioMicrophone.ts:49 start (depth 1); src/frontend/audio/audioPlayer.ts:643 audioExists (depth 2); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 3); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlayer.ts:394 stop (depth 2); src/frontend/audio/audioPlayer.ts:383 pause (depth 3); src/frontend/audio/audioPlayer.ts:665 updatePlayingStore (depth 4); src/frontend/audio/audioPlayer.ts:666 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 4); src/frontend/audio/audioAnalyser.ts:285 shouldAnalyse (depth 4); src/frontend/audio/audioAnalyser.ts:289 getActiveAudio (depth 5); src/frontend/audio/audioAnalyser.ts:297 getActiveVideos (depth 5); src/frontend/audio/audioAnalyser.ts:310 sendOutputShowAudio (depth 5); src/frontend/audio/audioAnalyser.ts:306 getOutputShowId (depth 6).

Effects: src/frontend/audio/audioMicrophone.ts:64 ipc sendMain(Main.ACCESS_MICROPHONE_PERMISSION) ; src/frontend/audio/audioPlayer.ts:666 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioPlayer.ts:524 ipc sendMain(Main.NOW_PLAYING, { filePath: path, name, unknownLang, format, duration }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:213 store-write src/frontend/stores.ts#playingAudio ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 40; depth cutoffs: 47. Full edges/effects/conditions in JSON.

[code] Payload type: API_microphone. [External/internal input routes](../inputs.json) retain transport and permission limits.
