# click/src_frontend_components_output_tools_MediaControls.svelte (1)

## click — event-f1bc187b42c1d3db98

[code] [src/frontend/components/output/tools/MediaControls.svelte:115](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L115); playPause. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:113 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:98 !path; src/frontend/components/output/tools/MediaControls.svelte:103 isPaused.

Calls: src/frontend/components/output/tools/MediaControls.svelte:97 playPause (depth 0); src/frontend/components/media/video/videoPlayer.ts:386 play (depth 1); src/frontend/components/media/video/videoPlayer.ts:221 updateVolume (depth 2); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:222 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:223 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 4); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 5); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 4); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:228 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:239 isOutputMuted (depth 5); src/frontend/audio/audioAnalyser.ts:174 rampSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:175 <callback> (depth 6); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 5); src/frontend/audio/audioAnalyser.ts:159 <callback> (depth 6).

Effects: src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 18. Full edges/effects/conditions in JSON.

## click — event-aebfa73ccc3b2a7f9b

[code] [src/frontend/components/output/tools/MediaControls.svelte:127](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L127); () => { changeValue = Math.max(videoTime - 10, 0.01) }. resolved-within-bound.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:113 type === "video" \|\| background?.type === "player".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-811a3834320ec7cefe

[code] [src/frontend/components/output/tools/MediaControls.svelte:135](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L135); () => { changeValue = Math.min(videoTime + 10, videoData.duration - 0.1) }. resolved-within-bound.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:113 type === "video" \|\| background?.type === "player".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-89e82507dc928c3543

[code] [src/frontend/components/output/tools/MediaControls.svelte:144](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L144); toggleLoop. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:113 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:83 !path.

Calls: src/frontend/components/output/tools/MediaControls.svelte:82 toggleLoop (depth 0); src/frontend/components/media/video/videoPlayer.ts:575 toggleLoop (depth 1); src/frontend/components/media/video/videoPlayer.ts:629 getPlaying (depth 2); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:580 <callback> (depth 2); src/frontend/components/media/video/videoPlayer.ts:581 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 2); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 3); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:326 checkIfEnding (depth 6); src/frontend/components/media/video/videoPlayer.ts:758 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:760 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:763 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 3).

Effects: src/frontend/components/media/video/videoPlayer.ts:580 store-write src/frontend/stores.ts#playingVideos ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 12. Full edges/effects/conditions in JSON.

## click — event-89564e7962b5c05fe8

[code] [src/frontend/components/output/tools/MediaControls.svelte:148](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L148); toggleMute. partial.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:113 type === "video" \|\| background?.type === "player"; src/frontend/components/output/tools/MediaControls.svelte:75 !path.

Calls: src/frontend/components/output/tools/MediaControls.svelte:74 toggleMute (depth 0); src/frontend/components/media/video/videoPlayer.ts:594 toggleMute (depth 1); src/frontend/components/media/video/videoPlayer.ts:616 setAudioValue (depth 2); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 3); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:734 initSyncClock (depth 3); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 4); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 4); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 2); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:612 hasAudibleVideo (depth 2); src/frontend/components/media/video/videoPlayer.ts:613 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:603 isAudible (depth 4); src/frontend/components/media/video/videoPlayer.ts:642 getVolume (depth 5).

Effects: src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 10. Full edges/effects/conditions in JSON.

## click — event-b82557ffeb8cdf39f0

[code] [src/frontend/components/output/tools/MediaControls.svelte:154](../../../../../src/frontend/components/output/tools/MediaControls.svelte#L154); openPreview. resolved-within-bound.

Conditions: src/frontend/components/output/tools/MediaControls.svelte:110 background; src/frontend/components/output/tools/MediaControls.svelte:111 big; src/frontend/components/output/tools/MediaControls.svelte:91 !background \|\| !path; src/frontend/components/output/tools/MediaControls.svelte:93 $focusMode.

Calls: src/frontend/components/output/tools/MediaControls.svelte:90 openPreview (depth 0).

Effects: src/frontend/components/output/tools/MediaControls.svelte:93 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/output/tools/MediaControls.svelte:94 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
