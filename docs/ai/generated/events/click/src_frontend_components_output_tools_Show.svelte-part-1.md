# click/src_frontend_components_output_tools_Show.svelte (1)

## click — event-1ea2d253b4760980fe

[code] [src/frontend/components/output/tools/Show.svelte:54](../../../../../src/frontend/components/output/tools/Show.svelte#L54); openShow. resolved-within-bound.

Conditions: src/frontend/components/output/tools/Show.svelte:53 slide; src/frontend/components/output/tools/Show.svelte:25 !slide \|\| slide.id === "temp"; src/frontend/components/output/tools/Show.svelte:27 slide?.layout && $showsCache&#91;slide.id&#93;; src/frontend/components/output/tools/Show.svelte:29 !a&#91;slide.id&#93;.settings; src/frontend/components/output/tools/Show.svelte:35 $focusMode.

Calls: src/frontend/components/output/tools/Show.svelte:24 openShow (depth 0); src/frontend/components/output/tools/Show.svelte:28 <callback> (depth 1).

Effects: src/frontend/components/output/tools/Show.svelte:35 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/output/tools/Show.svelte:36 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/output/tools/Show.svelte:28 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-89048d6cf1dd917868

[code] [src/frontend/components/output/tools/Show.svelte:81](../../../../../src/frontend/components/output/tools/Show.svelte#L81); () => playPause(path, outputId, data.paused). partial.

Conditions: src/frontend/components/output/tools/Show.svelte:53 slide; src/frontend/components/output/tools/Show.svelte:72 itemVideos.length.

Calls: src/frontend/components/output/tools/Show.svelte:44 playPause (depth 1); src/frontend/components/media/video/videoPlayer.ts:386 play (depth 2); src/frontend/components/media/video/videoPlayer.ts:221 updateVolume (depth 3); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:223 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 5); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 6); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 5); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:228 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:239 isOutputMuted (depth 6); src/frontend/audio/audioAnalyser.ts:174 rampSourceVolume (depth 6); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6); src/frontend/components/media/video/videoPlayer.ts:673 audioExists (depth 3); src/frontend/components/media/video/videoPlayer.ts:674 <callback> (depth 4).

Effects: src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 13. Full edges/effects/conditions in JSON.

## click — event-ff8f61d92b1867aa6d

[code] [src/frontend/components/output/tools/Show.svelte:87](../../../../../src/frontend/components/output/tools/Show.svelte#L87); () => toggleLoop(path, outputId). partial.

Conditions: src/frontend/components/output/tools/Show.svelte:53 slide; src/frontend/components/output/tools/Show.svelte:72 itemVideos.length.

Calls: src/frontend/components/output/tools/Show.svelte:48 toggleLoop (depth 1); src/frontend/components/media/video/videoPlayer.ts:575 toggleLoop (depth 2); src/frontend/components/media/video/videoPlayer.ts:629 getPlaying (depth 3); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:580 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:581 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 3); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 4); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 4).

Effects: src/frontend/components/media/video/videoPlayer.ts:580 store-write src/frontend/stores.ts#playingVideos ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-01b5332ff12b36d49a

[code] [src/frontend/components/output/tools/Show.svelte:90](../../../../../src/frontend/components/output/tools/Show.svelte#L90); () => VideoPlayer.toggleMute(path, outputId). partial.

Conditions: src/frontend/components/output/tools/Show.svelte:53 slide; src/frontend/components/output/tools/Show.svelte:72 itemVideos.length.

Calls: src/frontend/components/media/video/videoPlayer.ts:594 toggleMute (depth 1); src/frontend/components/media/video/videoPlayer.ts:616 setAudioValue (depth 2); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 3); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 3); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 4); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 2); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:612 hasAudibleVideo (depth 2); src/frontend/components/media/video/videoPlayer.ts:613 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:603 isAudible (depth 4); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 5); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 6).

Effects: src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 10. Full edges/effects/conditions in JSON.
