# action/pause_audio (1)

## pause_audio — event-715b52258e258c6230

[code] [src/frontend/components/actions/api.ts:304](../../../../../src/frontend/components/actions/api.ts#L304); (data: API_media) => pauseAudio(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:304 pause_audio (depth 0); src/frontend/components/actions/apiHelper.ts:816 pauseAudio (depth 1); src/frontend/audio/audioPlayer.ts:383 pause (depth 2); src/frontend/audio/audioPlayer.ts:643 audioExists (depth 3); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 4); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:53 getPath (depth 6); src/frontend/audio/audioPlayer.ts:665 updatePlayingStore (depth 3); src/frontend/audio/audioPlayer.ts:666 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 3); src/frontend/audio/audioAnalyser.ts:285 shouldAnalyse (depth 3); src/frontend/audio/audioAnalyser.ts:289 getActiveAudio (depth 4); src/frontend/audio/audioAnalyser.ts:297 getActiveVideos (depth 4); src/frontend/audio/audioAnalyser.ts:310 sendOutputShowAudio (depth 4); src/frontend/audio/audioAnalyser.ts:306 getOutputShowId (depth 5); src/frontend/components/helpers/output.ts:634 getFirstOutput (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:666 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 1. Full edges/effects/conditions in JSON.
