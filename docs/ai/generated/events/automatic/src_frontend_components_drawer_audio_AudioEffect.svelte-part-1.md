# automatic/src_frontend_components_drawer_audio_AudioEffect.svelte (1)

## setInterval — event-b07fae2fc3834a83ef

[code] [src/frontend/components/drawer/audio/AudioEffect.svelte:25](../../../../../src/frontend/components/drawer/audio/AudioEffect.svelte#L25); () => { let audio = AudioPlayer.getAudio(path) if (!audio) return currentTime = audio.currentTime duration = audio.duration }. resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/AudioEffect.svelte:27 !audio.

Calls: src/frontend/components/drawer/audio/AudioEffect.svelte:25 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 1); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 2); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
