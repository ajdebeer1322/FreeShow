# click/src_frontend_components_output_tools_Audio.svelte (1)

## click — event-693def6ed1d03958e6

[code] [src/frontend/components/output/tools/Audio.svelte:90](../../../../../src/frontend/components/output/tools/Audio.svelte#L90); () => openAudio(id, audio). resolved-within-bound.

Conditions: src/frontend/components/output/tools/Audio.svelte:86 Object.keys($playingAudio).length > 1.

Calls: src/frontend/components/output/tools/Audio.svelte:78 openAudio (depth 1).

Effects: src/frontend/components/output/tools/Audio.svelte:79 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/output/tools/Audio.svelte:80 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bad082bc96e33a7bcd

[code] [src/frontend/components/output/tools/Audio.svelte:99](../../../../../src/frontend/components/output/tools/Audio.svelte#L99); () => openAudio(key, playing). resolved-within-bound.

Conditions: src/frontend/components/output/tools/Audio.svelte:86 Object.keys($playingAudio).length > 1; src/frontend/components/output/tools/Audio.svelte:96 key.

Calls: src/frontend/components/output/tools/Audio.svelte:78 openAudio (depth 1).

Effects: src/frontend/components/output/tools/Audio.svelte:79 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/output/tools/Audio.svelte:80 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2abf4f4f00f2080ccb

[code] [src/frontend/components/output/tools/Audio.svelte:112](../../../../../src/frontend/components/output/tools/Audio.svelte#L112); () => { if ($outLocked) return AudioPlayer.start(path, { name }, { pauseIfPlaying: true, startAt: currentTime, playlistIndex: playing.index, playlistId: playing.playlistId }) }. partial.

Conditions: src/frontend/components/output/tools/Audio.svelte:86 Object.keys($playingAudio).length > 1; src/frontend/components/output/tools/Audio.svelte:96 key; src/frontend/components/output/tools/Audio.svelte:105 !playing.isMic.

Calls: src/frontend/audio/audioPlayer.ts:81 start (depth 1); src/frontend/audio/audioPlayer.ts:60 getKey (depth 2); src/frontend/audio/audioPlayer.ts:68 isLoading (depth 2); src/frontend/audio/audioPlayer.ts:71 setLoading (depth 2); src/frontend/components/helpers/media.ts:261 locateMediaFile (depth 2); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 3); src/frontend/components/helpers/media.ts:38 getMediaType (depth 3); src/frontend/components/helpers/media.ts:19 getExtension (depth 3); src/frontend/components/helpers/media.ts:269 <callback> (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:74 clearLoading (depth 2).

Effects: src/frontend/components/helpers/media.ts:272 ipc requestMain(Main.LOCATE_MEDIA_FILE, { filePath: path, folders }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:100 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/utils/cloudSync.ts:222 ipc sendMain(Main.MEDIA_FOLDER_COPY, { paths: &#91;filePath&#93; }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 62; depth cutoffs: 123. Full edges/effects/conditions in JSON.

## click — event-af1ca845a6559cba34

[code] [src/frontend/components/output/tools/Audio.svelte:132](../../../../../src/frontend/components/output/tools/Audio.svelte#L132); () => (fullLength = !fullLength). resolved-within-bound.

Conditions: src/frontend/components/output/tools/Audio.svelte:86 Object.keys($playingAudio).length > 1; src/frontend/components/output/tools/Audio.svelte:96 key; src/frontend/components/output/tools/Audio.svelte:105 !playing.isMic.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-11d4b0d6c86c2c155c

[code] [src/frontend/components/output/tools/Audio.svelte:141](../../../../../src/frontend/components/output/tools/Audio.svelte#L141); () => AudioPlaylist.next(). partial.

Conditions: src/frontend/components/output/tools/Audio.svelte:86 Object.keys($playingAudio).length > 1; src/frontend/components/output/tools/Audio.svelte:96 key; src/frontend/components/output/tools/Audio.svelte:105 !playing.isMic; src/frontend/components/output/tools/Audio.svelte:140 $activePlaylist?.activeKey === key \|\| $activePlaylist?.active === path.

Calls: src/frontend/audio/audioPlaylist.ts:59 next (depth 1); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 2); src/frontend/audio/audioPlaylist.ts:121 nextInternal (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/audio/audioPlaylist.ts:181 getSongs (depth 3); src/frontend/components/helpers/array.ts:211 shuffleArray (depth 4); src/frontend/audio/audioPlaylist.ts:191 <callback> (depth 4); src/frontend/audio/audioFading.ts:191 audioIsFading (depth 3); src/frontend/audio/audioFading.ts:92 fadeOutAudio (depth 3); src/frontend/audio/audioFading.ts:260 stopFading (depth 4); src/frontend/audio/audioFading.ts:261 <callback> (depth 5); src/frontend/audio/audioFading.ts:240 stopFade (depth 6); src/frontend/audio/audioFading.ts:262 <callback> (depth 5); src/frontend/audio/audioFading.ts:266 <callback> (depth 5); src/frontend/audio/audioFading.ts:95 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5).

Effects: src/frontend/audio/audioPlaylist.ts:191 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:271 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 28; depth cutoffs: 78. Full edges/effects/conditions in JSON.
