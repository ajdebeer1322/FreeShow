# click/src_frontend_components_drawer_audio_Audio.svelte (1)

## click — event-54f14ba766a6ba28ce

[code] [src/frontend/components/drawer/audio/Audio.svelte:321](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L321); () => setSubSubTab("microphones"). resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:319 active === "inputs".

Calls: src/frontend/components/drawer/audio/Audio.svelte:301 setSubSubTab (depth 1); src/frontend/components/drawer/audio/Audio.svelte:304 <callback> (depth 2).

Effects: src/frontend/components/drawer/audio/Audio.svelte:304 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6f2a99c0a098c814b7

[code] [src/frontend/components/drawer/audio/Audio.svelte:325](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L325); () => setSubSubTab("audio_streams"). resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:319 active === "inputs".

Calls: src/frontend/components/drawer/audio/Audio.svelte:301 setSubSubTab (depth 1); src/frontend/components/drawer/audio/Audio.svelte:304 <callback> (depth 2).

Effects: src/frontend/components/drawer/audio/Audio.svelte:304 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c27f8480a3a168d472

[code] [src/frontend/components/drawer/audio/Audio.svelte:398](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L398); () => activePopup.set("audio_stream"). resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:396 inputsTab === "audio_streams".

Calls: no function target resolved.

Effects: src/frontend/components/drawer/audio/Audio.svelte:398 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-45c2e7c7b905815b59

[code] [src/frontend/components/drawer/audio/Audio.svelte:408](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L408); () => { if ($outLocked) return $activePlaylist?.id === active ? AudioPlaylist.stop() : AudioPlaylist.start(active \|\| "") }. partial.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist.

Calls: src/frontend/audio/audioPlaylist.ts:42 stop (depth 1); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 2); src/frontend/audio/audioPlayer.ts:60 getKey (depth 3); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 3); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 2); src/frontend/audio/audioFading.ts:22 clearAudio (depth 2); src/frontend/components/drawer/audio/metronome.ts:69 stopMetronome (depth 3); src/frontend/audio/audioFading.ts:33 <callback> (depth 3); src/frontend/audio/audioFading.ts:42 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4); src/frontend/audio/audioFading.ts:46 <callback> (depth 3); src/frontend/audio/audioFading.ts:50 clear (depth 3); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 4); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 5); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 6); src/frontend/audio/audioFading.ts:78 deleteAudio (depth 4).

Effects: src/frontend/audio/audioPlaylist.ts:43 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 49; depth cutoffs: 97. Full edges/effects/conditions in JSON.

## click — event-1d947d5cc857b7539a

[code] [src/frontend/components/drawer/audio/Audio.svelte:420](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L420); () => { if (!active) return AudioPlaylist.update(active, "mode", $audioPlaylists&#91;active&#93;?.mode === "shuffle" ? "default" : "shuffle") // if ($activePlaylist?.id === active) playlis. partial.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist.

Calls: src/frontend/audio/audioPlaylist.ts:48 update (depth 1); src/frontend/audio/audioPlaylist.ts:51 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/audio/audioPlaylist.ts:51 store-write src/frontend/stores.ts#audioPlaylists ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## click — event-70390cec343749ffe9

[code] [src/frontend/components/drawer/audio/Audio.svelte:430](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L430); () => { if (!active) return AudioPlaylist.update(active, "loop", $audioPlaylists&#91;active&#93;?.loop === undefined ? false : !$audioPlaylists&#91;active&#93;?.loop) }. partial.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist.

Calls: src/frontend/audio/audioPlaylist.ts:48 update (depth 1); src/frontend/audio/audioPlaylist.ts:51 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/audio/audioPlaylist.ts:51 store-write src/frontend/stores.ts#audioPlaylists ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 1. Full edges/effects/conditions in JSON.
