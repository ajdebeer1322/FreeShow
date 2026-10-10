# action/change_volume (1)

## change_volume — event-9925bb1c00419f3822

[code] [src/frontend/components/actions/api.ts:307](../../../../../src/frontend/components/actions/api.ts#L307); (data: API_volume) => updateVolumeValues(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:307 change_volume (depth 0); src/frontend/components/actions/apiHelper.ts:831 updateVolumeValues (depth 1); src/frontend/audio/dBUtils.ts:21 dbToGain (depth 2); src/frontend/components/actions/apiHelper.ts:850 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/components/actions/apiHelper.ts:850 store-write src/frontend/stores.ts#audioChannelsData ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 1. Full edges/effects/conditions in JSON.

[code] Payload type: API_volume. [External/internal input routes](../inputs.json) retain transport and permission limits.
