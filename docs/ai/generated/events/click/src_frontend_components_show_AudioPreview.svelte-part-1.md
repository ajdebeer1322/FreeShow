# click/src_frontend_components_show_AudioPreview.svelte (1)

## click — event-f4e87545e9bc62a478

[code] [src/frontend/components/show/AudioPreview.svelte:173](../../../../../src/frontend/components/show/AudioPreview.svelte#L173); () => { if ($outLocked) return AudioPlayer.start(path, { name }, { pauseIfPlaying: true, startAt: currentTime }) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioPlayer.ts:81 start (depth 1); src/frontend/audio/audioPlayer.ts:60 getKey (depth 2); src/frontend/audio/audioPlayer.ts:68 isLoading (depth 2); src/frontend/audio/audioPlayer.ts:71 setLoading (depth 2); src/frontend/components/helpers/media.ts:261 locateMediaFile (depth 2); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 3); src/frontend/components/helpers/media.ts:38 getMediaType (depth 3); src/frontend/components/helpers/media.ts:19 getExtension (depth 3); src/frontend/components/helpers/media.ts:269 <callback> (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:74 clearLoading (depth 2).

Effects: src/frontend/components/helpers/media.ts:272 ipc requestMain(Main.LOCATE_MEDIA_FILE, { filePath: path, folders }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:100 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/utils/cloudSync.ts:222 ipc sendMain(Main.MEDIA_FOLDER_COPY, { paths: &#91;filePath&#93; }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 62; depth cutoffs: 123. Full edges/effects/conditions in JSON.

## click — event-63dceb357f2fd33f6a

[code] [src/frontend/components/show/AudioPreview.svelte:183](../../../../../src/frontend/components/show/AudioPreview.svelte#L183); () => { clearAudio(path) currentTime = 0 }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioFading.ts:22 clearAudio (depth 1); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 2); src/frontend/audio/audioPlayer.ts:60 getKey (depth 3); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 3); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 2); src/frontend/components/drawer/audio/metronome.ts:69 stopMetronome (depth 2); src/frontend/audio/audioFading.ts:33 <callback> (depth 2); src/frontend/audio/audioFading.ts:42 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:53 getPath (depth 3); src/frontend/audio/audioFading.ts:46 <callback> (depth 2); src/frontend/audio/audioFading.ts:50 clear (depth 2); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 3); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 4); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 5); src/frontend/audio/audioFading.ts:78 deleteAudio (depth 3); src/frontend/audio/audioPlayer.ts:394 stop (depth 4).

Effects: src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioPlayer.ts:524 ipc sendMain(Main.NOW_PLAYING, { filePath: path, name, unknownLang, format, duration }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 19; depth cutoffs: 35. Full edges/effects/conditions in JSON.

## click — event-6d8a27595a6207301f

[code] [src/frontend/components/show/AudioPreview.svelte:204](../../../../../src/frontend/components/show/AudioPreview.svelte#L204); () => (fullLength = !fullLength). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-beb94b1761a2db8664

[code] [src/frontend/components/show/AudioPreview.svelte:215](../../../../../src/frontend/components/show/AudioPreview.svelte#L215); () => { setTime(null, Math.max(currentTime - 10, 0.01)) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/AudioPreview.svelte:52 setTime (depth 1); src/frontend/audio/audioPlayer.ts:476 setTime (depth 2); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 3); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 4); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:53 getPath (depth 6); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 3); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e510bde35442708a1d

[code] [src/frontend/components/show/AudioPreview.svelte:223](../../../../../src/frontend/components/show/AudioPreview.svelte#L223); () => { setTime(null, Math.min(currentTime + 10, duration - 0.1)) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/AudioPreview.svelte:52 setTime (depth 1); src/frontend/audio/audioPlayer.ts:476 setTime (depth 2); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 3); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 4); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 5); src/frontend/audio/audioPlayer.ts:53 getPath (depth 6); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 3); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f50422c3066fb8e5ea

[code] [src/frontend/components/show/AudioPreview.svelte:233](../../../../../src/frontend/components/show/AudioPreview.svelte#L233); () => { let loop = !$media&#91;path&#93;?.loop media.update((a) => { if (!a&#91;path&#93;) a&#91;path&#93; = {} a&#91;path&#93;.loop = loop return a }) }. resolved-within-bound.

Conditions: src/frontend/components/show/AudioPreview.svelte:230 !isMic.

Calls: no function target resolved.

Effects: src/frontend/components/show/AudioPreview.svelte:235 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
