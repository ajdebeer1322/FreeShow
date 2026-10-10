# click/src_frontend_components_output_preview_ClearButtons.svelte (1)

## click — event-dc493109b36a48d56b

[code] [src/frontend/components/output/preview/ClearButtons.svelte:118](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L118); () => clear("scene"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:115 !sceneCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7b794fb30877c846cb

[code] [src/frontend/components/output/preview/ClearButtons.svelte:128](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L128); restoreOutput. partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:127 allCleared && $outputCache && $outputCache?.slide?.type !== "ppt"; src/frontend/components/output/clear.ts:62 get(outLocked) \|\| !get(outputCache); src/frontend/components/output/clear.ts:68 id.includes("playing"); src/frontend/components/output/clear.ts:70 !outputIds.includes(id) \|\| !a&#91;id&#93;; src/frontend/components/output/clear.ts:78 get(outputCache).playingAudioData; src/frontend/components/output/clear.ts:83 get(outputCache).playingMetronome.

Calls: src/frontend/components/output/clear.ts:61 restoreOutput (depth 0); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 1); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 2); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 3); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 4); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/array.ts:53 sortObject (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:618 <callback> (depth 5); src/frontend/components/helpers/output.ts:628 <callback> (depth 4); src/frontend/components/helpers/output.ts:647 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3).

Effects: src/frontend/components/output/clear.ts:85 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:66 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/media.ts:272 ipc requestMain(Main.LOCATE_MEDIA_FILE, { filePath: path, folders }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:100 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/utils/cloudSync.ts:222 ipc sendMain(Main.MEDIA_FOLDER_COPY, { paths: &#91;filePath&#93; }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 61; depth cutoffs: 136. Full edges/effects/conditions in JSON.

## click — event-a5a37b430918de661d

[code] [src/frontend/components/output/preview/ClearButtons.svelte:133](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L133); () => clearAll(true). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:127 allCleared && $outputCache && $outputCache?.slide?.type !== "ppt".

Calls: src/frontend/components/output/clear.ts:14 clearAll (depth 1); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 2); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:677 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:681 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:1102 addOutput (depth 4); src/frontend/components/helpers/output.ts:1106 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6).

Effects: src/frontend/components/output/clear.ts:30 presentation clearBackground ; src/frontend/components/output/clear.ts:31 presentation clearSlide ; src/frontend/components/output/clear.ts:32 presentation clearOverlays ; src/frontend/components/output/clear.ts:19 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/output/clear.ts:39 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:43 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/timeline/TimelinePlayback.ts:154 store-write src/frontend/stores.ts#isTimelinePlaying ; src/frontend/components/timeline/TimelinePlayback.ts:156 ipc sendMain(Main.TIMECODE_STOP) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 34; depth cutoffs: 343. Full edges/effects/conditions in JSON.

## click — event-ab5399b7ae6fd3d423

[code] [src/frontend/components/output/preview/ClearButtons.svelte:144](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L144); () => clear("background"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:142 outputContent?.type !== "pdf" && outputContent?.type !== "ppt".

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-39c8aaa6a4d0b592c9

[code] [src/frontend/components/output/preview/ClearButtons.svelte:148](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L148); () => openPreview("background"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:142 outputContent?.type !== "pdf" && outputContent?.type !== "ppt"; src/frontend/components/output/preview/ClearButtons.svelte:147 !allCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:56 openPreview (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b71212f3e8f32e246a

[code] [src/frontend/components/output/preview/ClearButtons.svelte:159](../../../../../src/frontend/components/output/preview/ClearButtons.svelte#L159); () => clear("slide"). partial.

Conditions: src/frontend/components/output/preview/ClearButtons.svelte:157 getMediaLayerType(outBackground.path \|\| "", backgroundData) !== "foreground" \|\| !slideCleared.

Calls: src/frontend/components/output/preview/ClearButtons.svelte:45 clear (depth 1).

Effects: src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
