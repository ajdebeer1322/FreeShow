# click/src_frontend_components_output_tools_MediaControls.svelte (2)

## click — event-dec48117cea4acb268

[code] [src/frontend/components/output/tools/MediaControls.svelte:164](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L164); playPause. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:162 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:98 !path; src/frontend/components/output/tools/MediaControls.svelte:103 isPaused.

Calls: src/frontend/components/output/tools/MediaControls.svelte:97 playPause (depth 0); src/frontend/components/media/video/videoPlayer.ts:386 play (depth 1); src/frontend/components/media/video/videoPlayer.ts:221 updateVolume (depth 2); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:223 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 4); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 5); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 4); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:228 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:239 isOutputMuted (depth 5); src/frontend/audio/audioAnalyser.ts:174 rampSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:175 <callback> (depth 6); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 18. Full edges/effects/conditions in JSON.

## click — event-0563aaea2014525e5b

[code] [src/frontend/components/output/tools/MediaControls.svelte:173](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L173); () => { changeValue = Math.min(videoTime + 10, videoData.duration - 0.1) }. resolved-within-bound.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:162 type === "video" \|\| background?.type === "player".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ad77e6aee52e2f7399

[code] [src/frontend/components/output/tools/MediaControls.svelte:179](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L179); toggleLoop. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:162 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:83 !path.

Calls: src/frontend/components/output/tools/MediaControls.svelte:82 toggleLoop (depth 0); src/frontend/components/media/video/videoPlayer.ts:575 toggleLoop (depth 1); src/frontend/components/media/video/videoPlayer.ts:629 getPlaying (depth 2); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:580 <callback> (depth 2); src/frontend/components/media/video/videoPlayer.ts:581 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 2); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 3); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:326 checkIfEnding (depth 6); src/frontend/components/media/video/videoPlayer.ts:758 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:760 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:763 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 3).

Effects: src/frontend/components/media/video/videoPlayer.ts:580 store-write src/frontend/stores.ts#playingVideos ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 12. Full edges/effects/conditions in JSON.

## click — event-86eaf16368fb2eff12

[code] [src/frontend/components/output/tools/MediaControls.svelte:182](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L182); toggleMute. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:162 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:75 !path.

Calls: src/frontend/components/output/tools/MediaControls.svelte:74 toggleMute (depth 0); src/frontend/components/media/video/videoPlayer.ts:594 toggleMute (depth 1); src/frontend/components/media/video/videoPlayer.ts:616 setAudioValue (depth 2); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 3); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 3); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 4); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 2); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:612 hasAudibleVideo (depth 2); src/frontend/components/media/video/videoPlayer.ts:613 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:603 isAudible (depth 4); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 5).

Effects: src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 10. Full edges/effects/conditions in JSON.
