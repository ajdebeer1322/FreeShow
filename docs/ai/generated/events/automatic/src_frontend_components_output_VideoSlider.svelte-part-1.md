# automatic/src_frontend_components_output_VideoSlider.svelte (1)

## setTimeout — event-ad0e1ed54f4d687cb1

[code] [src/frontend/components/output/VideoSlider.svelte:69](../../../../../src/frontend/components/output/VideoSlider.svelte#L69); () => { dragSeekTimeout = null if (movePause && sliderValue !== null) { videoTime = sliderValue lastSeekedValue = videoTime if (path && outputId) VideoPlayer.seekTo(path, outputId,. partial.

Conditions: src/frontend/components/output/VideoSlider.svelte:68 !dragSeekTimeout; src/frontend/components/output/VideoSlider.svelte:71 movePause && sliderValue !== null; src/frontend/components/output/VideoSlider.svelte:74 path && outputId.

Calls: src/frontend/components/output/VideoSlider.svelte:69 <callback> (depth 0); src/frontend/components/media/video/videoPlayer.ts:571 seekTo (depth 1); src/frontend/components/media/video/videoPlayer.ts:616 setAudioValue (depth 2); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 3); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 3); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 4); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 4).

Effects: src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 4. Full edges/effects/conditions in JSON.
