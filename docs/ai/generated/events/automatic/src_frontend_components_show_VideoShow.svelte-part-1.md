# automatic/src_frontend_components_show_VideoShow.svelte (1)

## setTimeout — event-c41c0bcf387b4c3eb1

[code] [src/frontend/components/show/VideoShow.svelte:51](../../../../../src/frontend/components/show/VideoShow.svelte#L51); () => pathChanged(mediaPath, outputId). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/VideoShow.svelte:51 <callback> (depth 0); src/frontend/components/show/VideoShow.svelte:52 pathChanged (depth 1); src/frontend/components/media/video/videoSync.ts:4 videoSync (depth 2); src/frontend/components/media/video/videoSync.ts:9 <callback> (depth 3); src/frontend/components/show/VideoShow.svelte:64 <callback> (depth 2); src/frontend/components/show/VideoShow.svelte:67 <callback> (depth 3); src/frontend/components/media/video/videoSync.ts:40 syncVideoToAudio (depth 3); src/frontend/components/media/video/videoSync.ts:30 clampPlaybackRate (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e0e4e21599e742b862

[code] [src/frontend/components/show/VideoShow.svelte:67](../../../../../src/frontend/components/show/VideoShow.svelte#L67); () => { videoTime = data.currentTime \|\| 0 }. resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:65 firstLoad.

Calls: src/frontend/components/show/VideoShow.svelte:67 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-aa942295ab6b33cde3

[code] [src/frontend/components/show/VideoShow.svelte:127](../../../../../src/frontend/components/show/VideoShow.svelte#L127); () => (videoTime = 0). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/VideoShow.svelte:127 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-3b236d1dc1616b8545

[code] [src/frontend/components/show/VideoShow.svelte:144](../../../../../src/frontend/components/show/VideoShow.svelte#L144); () => { videoData.paused = true videoTime = videoData.duration ? videoData.duration / 2 : 0 }. resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:142 $focusMode.

Calls: src/frontend/components/show/VideoShow.svelte:144 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-573851db845e220d51

[code] [src/frontend/components/show/VideoShow.svelte:163](../../../../../src/frontend/components/show/VideoShow.svelte#L163); () => { videoData.paused = true videoTime = videoData.duration ? videoData.duration / 2 : 0 }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/VideoShow.svelte:163 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
