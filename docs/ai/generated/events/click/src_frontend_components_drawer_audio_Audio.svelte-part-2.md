# click/src_frontend_components_drawer_audio_Audio.svelte (2)

## click — event-34e51cf1b5be93bd13

[code] [src/frontend/components/drawer/audio/Audio.svelte:441](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L441); () => { if (!active) return AudioPlaylist.update(active, "autoNext", $audioPlaylists&#91;active&#93;?.autoNext === undefined ? false : !$audioPlaylists&#91;active&#93;?.autoNext) }. partial.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist.

Calls: src/frontend/audio/audioPlaylist.ts:48 update (depth 1); src/frontend/audio/audioPlaylist.ts:51 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/audio/audioPlaylist.ts:51 store-write src/frontend/stores.ts#audioPlaylists ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## click — event-928584f4918a6839da

[code] [src/frontend/components/drawer/audio/Audio.svelte:466](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L466); () => (playlistSettings = !playlistSettings). resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e6568b61a4acace3a8

[code] [src/frontend/components/drawer/audio/Audio.svelte:476](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L476); goBack. resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist; src/frontend/components/drawer/audio/Audio.svelte:470 active === "all" \|\| active === "favourites"; src/frontend/components/drawer/audio/Audio.svelte:474 rootPath !== path.

Calls: src/frontend/components/drawer/audio/Audio.svelte:220 goBack (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-aa0474b92b0c5cc0d7

[code] [src/frontend/components/drawer/audio/Audio.svelte:497](../../../../../src/frontend/components/drawer/audio/Audio.svelte#L497); createPlaylist. resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/Audio.svelte:393 active === "effects_library" \|\| active === "metronome"; src/frontend/components/drawer/audio/Audio.svelte:395 active === "inputs"; src/frontend/components/drawer/audio/Audio.svelte:403 playlist; src/frontend/components/drawer/audio/Audio.svelte:470 active === "all" \|\| active === "favourites"; src/frontend/components/drawer/audio/Audio.svelte:495 filteredFiles.filter((a) => !a.isFolder)?.length; src/frontend/components/drawer/audio/Audio.svelte:236 selectedFiles.length; src/frontend/components/drawer/audio/Audio.svelte:238 e.detail.ctrl; src/frontend/components/drawer/audio/Audio.svelte:240 !isDefault; src/frontend/components/drawer/audio/Audio.svelte:242 name.includes("."); src/frontend/components/drawer/audio/Audio.svelte:260 !playlistName \|\| !files.length.

Calls: src/frontend/components/drawer/audio/Audio.svelte:233 createPlaylist (depth 0); src/frontend/components/drawer/audio/Audio.svelte:235 <callback> (depth 1); src/frontend/components/drawer/audio/Audio.svelte:236 <callback> (depth 1); src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/components/drawer/audio/Audio.svelte:246 <callback> (depth 1); src/frontend/components/drawer/audio/Audio.svelte:249 <callback> (depth 2); src/frontend/components/drawer/audio/Audio.svelte:255 <callback> (depth 1).

Effects: src/frontend/components/drawer/audio/Audio.svelte:261 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/drawer/audio/Audio.svelte:246 store-write src/frontend/stores.ts#audioPlaylists ; src/frontend/components/drawer/audio/Audio.svelte:255 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
