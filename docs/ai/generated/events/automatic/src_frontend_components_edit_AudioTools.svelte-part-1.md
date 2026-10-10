# automatic/src_frontend_components_edit_AudioTools.svelte (1)

## setTimeout — event-7eccd5438cbf0d0e56

[code] [src/frontend/components/edit/AudioTools.svelte:35](../../../../../src/frontend/components/edit/AudioTools.svelte#L35); () => AudioPlayer.updateVolume(audioId). partial.

Conditions: src/frontend/components/edit/AudioTools.svelte:35 currentMedia.volume.

Calls: src/frontend/components/edit/AudioTools.svelte:35 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 1); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 3); src/frontend/audio/audioPlayer.ts:60 getKey (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 4); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 3); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 3); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0f0833dbb7c85f447d

[code] [src/frontend/components/edit/AudioTools.svelte:36](../../../../../src/frontend/components/edit/AudioTools.svelte#L36); () => AudioPlayer.setPitch(audioId, 0). resolved-within-bound.

Conditions: src/frontend/components/edit/AudioTools.svelte:36 currentMedia.pitch.

Calls: src/frontend/components/edit/AudioTools.svelte:36 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:463 setPitch (depth 1); src/frontend/audio/audioAnalyser.ts:392 setPitch (depth 2); src/frontend/audio/audioAnalyser.ts:379 applyProcessorProperty (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9dc049cd5fd7aabbc2

[code] [src/frontend/components/edit/AudioTools.svelte:37](../../../../../src/frontend/components/edit/AudioTools.svelte#L37); () => AudioPlayer.setTempo(audioId, 1). resolved-within-bound.

Conditions: src/frontend/components/edit/AudioTools.svelte:37 currentMedia.tempo.

Calls: src/frontend/components/edit/AudioTools.svelte:37 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:467 setTempo (depth 1); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 2); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 3); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioAnalyser.ts:395 setTempo (depth 2); src/frontend/audio/audioAnalyser.ts:379 applyProcessorProperty (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-dce0cb4b291d7bd5a9

[code] [src/frontend/components/edit/AudioTools.svelte:58](../../../../../src/frontend/components/edit/AudioTools.svelte#L58); () => AudioPlayer.updateVolume(audioId). partial.

Conditions: src/frontend/components/edit/AudioTools.svelte:56 input.id === "volume".

Calls: src/frontend/components/edit/AudioTools.svelte:58 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 1); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 3); src/frontend/audio/audioPlayer.ts:60 getKey (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 4); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 3); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 3); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b599d6fa9dba1c0f53

[code] [src/frontend/components/edit/AudioTools.svelte:61](../../../../../src/frontend/components/edit/AudioTools.svelte#L61); () => AudioPlayer.setPitch(audioId, value). resolved-within-bound.

Conditions: src/frontend/components/edit/AudioTools.svelte:60 input.id === "pitch".

Calls: src/frontend/components/edit/AudioTools.svelte:61 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:463 setPitch (depth 1); src/frontend/audio/audioAnalyser.ts:392 setPitch (depth 2); src/frontend/audio/audioAnalyser.ts:379 applyProcessorProperty (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0902d23c1bb82f2d98

[code] [src/frontend/components/edit/AudioTools.svelte:64](../../../../../src/frontend/components/edit/AudioTools.svelte#L64); () => AudioPlayer.setTempo(audioId, value). resolved-within-bound.

Conditions: src/frontend/components/edit/AudioTools.svelte:63 input.id === "tempo".

Calls: src/frontend/components/edit/AudioTools.svelte:64 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:467 setTempo (depth 1); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 2); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 3); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioAnalyser.ts:395 setTempo (depth 2); src/frontend/audio/audioAnalyser.ts:379 applyProcessorProperty (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
