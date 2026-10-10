# click/src_frontend_components_show_folder_FolderShow.svelte (1)

## click — event-f535b9d686d0d74924

[code] [src/frontend/components/show/folder/FolderShow.svelte:84](../../../../../src/frontend/components/show/folder/FolderShow.svelte#L84); () => playMedia(file). partial.

Conditions: src/frontend/components/show/folder/FolderShow.svelte:81 folderFiles.length.

Calls: src/frontend/components/show/folder/FolderShow.svelte:49 playMedia (depth 1); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 2); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:53 getPath (depth 4); src/frontend/audio/audioFading.ts:22 clearAudio (depth 2); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 3); src/frontend/audio/audioPlayer.ts:60 getKey (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 4); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 3); src/frontend/components/drawer/audio/metronome.ts:69 stopMetronome (depth 3); src/frontend/audio/audioFading.ts:33 <callback> (depth 3); src/frontend/audio/audioFading.ts:42 <callback> (depth 3); src/frontend/audio/audioFading.ts:46 <callback> (depth 3); src/frontend/audio/audioFading.ts:50 clear (depth 3); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 4); src/frontend/audio/audioFading.ts:78 deleteAudio (depth 4).

Effects: src/frontend/components/show/folder/FolderShow.svelte:59 presentation clearBackground ; src/frontend/components/show/folder/FolderShow.svelte:70 presentation clearSlide ; src/frontend/components/show/folder/FolderShow.svelte:71 presentation setOutput ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 59; depth cutoffs: 336. Full edges/effects/conditions in JSON.

## click — event-72a47aa4a3e72377e9

[code] [src/frontend/components/show/folder/FolderShow.svelte:126](../../../../../src/frontend/components/show/folder/FolderShow.svelte#L126); () => sendMain(Main.OPEN_FOLDER_PATH, path). resolved-within-bound.

Conditions: src/frontend/components/show/folder/FolderShow.svelte:124 !$focusMode.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0281e6c5d26e831692

[code] [src/frontend/components/show/folder/FolderShow.svelte:134](../../../../../src/frontend/components/show/folder/FolderShow.svelte#L134); () => { popupData.set({ type: "folder", value: timer, totalTime, count: folderFiles.filter((a) => a.type === "image").length }) activePopup.set("next_timer") }. resolved-within-bound.

Conditions: src/frontend/components/show/folder/FolderShow.svelte:124 !$focusMode.

Calls: no function target resolved.

Effects: src/frontend/components/show/folder/FolderShow.svelte:135 store-write src/frontend/stores.ts#popupData ; src/frontend/components/show/folder/FolderShow.svelte:136 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
