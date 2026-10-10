# click/src_frontend_components_edit_AudioTools.svelte (1)

## click — event-e0c7de90cf00a47287

[code] [src/frontend/components/edit/AudioTools.svelte:77](../../../../../src/frontend/components/edit/AudioTools.svelte#L77); reset. partial.

Conditions: src/frontend/components/edit/AudioTools.svelte:35 currentMedia.volume; src/frontend/components/edit/AudioTools.svelte:36 currentMedia.pitch; src/frontend/components/edit/AudioTools.svelte:37 currentMedia.tempo.

Calls: src/frontend/components/edit/AudioTools.svelte:32 reset (depth 0); src/frontend/components/edit/AudioTools.svelte:35 <callback> (depth 1); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6); src/frontend/components/edit/AudioTools.svelte:36 <callback> (depth 1); src/frontend/audio/audioPlayer.ts:463 setPitch (depth 2); src/frontend/audio/audioAnalyser.ts:392 setPitch (depth 3).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 2. Full edges/effects/conditions in JSON.
