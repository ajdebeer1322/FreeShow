# automatic/src_frontend_components_show_AudioPreview.svelte (1)

## setInterval — event-12a51c56695bb6e372

[code] [src/frontend/components/show/AudioPreview.svelte:38](../../../../../src/frontend/components/show/AudioPreview.svelte#L38); () => { if (paused) { if (updaterInterval) clearInterval(updaterInterval) updaterInterval = null } if (sliderValue === null) currentTime = AudioPlayer.getTime(path) }. resolved-within-bound.

Conditions: src/frontend/components/show/AudioPreview.svelte:39 paused; src/frontend/components/show/AudioPreview.svelte:40 updaterInterval; src/frontend/components/show/AudioPreview.svelte:43 sliderValue === null.

Calls: src/frontend/components/show/AudioPreview.svelte:38 <callback> (depth 0); src/frontend/audio/audioPlayer.ts:548 getTime (depth 1); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 2); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 3); src/frontend/audio/audioPlayer.ts:531 <callback> (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d036631808dcf73df5

[code] [src/frontend/components/show/AudioPreview.svelte:101](../../../../../src/frontend/components/show/AudioPreview.svelte#L101); () => { if (path === currentPath && $playingAudio&#91;currentPath&#93;?.paused === false && canvas) { renderVisualiser() } }. partial.

Conditions: src/frontend/components/show/AudioPreview.svelte:100 !analysers.length; src/frontend/components/show/AudioPreview.svelte:102 path === currentPath && $playingAudio&#91;currentPath&#93;?.paused === false && canvas.

Calls: src/frontend/components/show/AudioPreview.svelte:101 <callback> (depth 0); src/frontend/components/show/AudioPreview.svelte:94 renderVisualiser (depth 1); src/frontend/components/show/AudioPreview.svelte:78 stopVisualiser (depth 2); src/frontend/audio/audioAnalyser.ts:490 getAnalysers (depth 2); src/frontend/audio/routing/audioInputCapture.ts:196 getAnalysers (depth 3); src/frontend/audio/routing/audioInputCapture.ts:154 getOrCaptureEntry (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:691 getInputNodes (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 6); src/frontend/audio/routing/audioInputCapture.ts:103 captureInput (depth 5); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 6); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 3); src/frontend/components/show/AudioPreview.svelte:121 <callback> (depth 2); src/frontend/components/show/AudioPreview.svelte:126 renderFrame (depth 2); src/frontend/components/show/AudioPreview.svelte:135 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 19; depth cutoffs: 5. Full edges/effects/conditions in JSON.
