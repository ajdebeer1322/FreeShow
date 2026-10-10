# action/stop_audio (1)

## stop_audio — event-47e376c1d231afe930

[code] [src/frontend/components/actions/api.ts:305](../../../../../src/frontend/components/actions/api.ts#L305); (data: API_media) => stopAudio(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:305 stop_audio (depth 0); src/frontend/components/actions/apiHelper.ts:820 stopAudio (depth 1); src/frontend/audio/audioFading.ts:22 clearAudio (depth 2); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 3); src/frontend/audio/audioPlayer.ts:60 getKey (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 3); src/frontend/components/drawer/audio/metronome.ts:69 stopMetronome (depth 3); src/frontend/audio/audioFading.ts:33 <callback> (depth 3); src/frontend/audio/audioFading.ts:42 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4); src/frontend/audio/audioFading.ts:46 <callback> (depth 3); src/frontend/audio/audioFading.ts:50 clear (depth 3); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 4); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 5); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 6).

Effects: src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 15; depth cutoffs: 36. Full edges/effects/conditions in JSON.

[code] Payload type: API_media. [External/internal input routes](../inputs.json) retain transport and permission limits.
