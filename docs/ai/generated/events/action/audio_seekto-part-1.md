# action/audio_seekto (1)

## audio_seekto — event-03ab45b4e5f4b1fd99

[code] [src/frontend/components/actions/api.ts:306](../../../../../src/frontend/components/actions/api.ts#L306); (data: API_seek) => audioSeekTo(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:306 audio_seekto (depth 0); src/frontend/components/actions/apiHelper.ts:824 audioSeekTo (depth 1); src/frontend/audio/audioPlayer.ts:535 getAllPlaying (depth 2); src/frontend/audio/audioPlayer.ts:538 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:476 setTime (depth 2); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 3); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 4); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:53 getPath (depth 6); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 3); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_seek. [External/internal input routes](../inputs.json) retain transport and permission limits.
