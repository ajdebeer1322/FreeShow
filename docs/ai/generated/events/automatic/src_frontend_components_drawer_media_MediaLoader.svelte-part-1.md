# automatic/src_frontend_components_drawer_media_MediaLoader.svelte (1)

## setTimeout — event-d18de228f7f671b5ad

[code] [src/frontend/components/drawer/media/MediaLoader.svelte:115](../../../../../src/frontend/components/drawer/media/MediaLoader.svelte#L115); () => { retryCount++ }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/media/MediaLoader.svelte:115 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5c2daf92081bf4c431

[code] [src/frontend/components/drawer/media/MediaLoader.svelte:127](../../../../../src/frontend/components/drawer/media/MediaLoader.svelte#L127); () => { let video = document.createElement("video") video.onloadeddata = () => { const loadedDuration = video.duration duration = Number.isFinite(loadedDuration) ? loadedDuration :. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/media/MediaLoader.svelte:127 <callback> (depth 0); src/frontend/components/drawer/media/MediaLoader.svelte:129 <callback> (depth 1); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 1); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 2); src/frontend/components/helpers/media.ts:54 splitPath (depth 2); src/frontend/components/helpers/media.ts:87 <callback> (depth 2); src/frontend/components/helpers/media.ts:62 joinPath (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## canplaythrough — event-2314c2bf719a429856

[code] [src/frontend/components/drawer/media/MediaLoader.svelte:186](../../../../../src/frontend/components/drawer/media/MediaLoader.svelte#L186); getCurrentDuration. partial.

Conditions: src/frontend/components/drawer/media/MediaLoader.svelte:159 type === "camera"; src/frontend/components/drawer/media/MediaLoader.svelte:163 type === "screen"; src/frontend/components/drawer/media/MediaLoader.svelte:165 type === "ndi"; src/frontend/components/drawer/media/MediaLoader.svelte:167 type === "omt"; src/frontend/components/drawer/media/MediaLoader.svelte:169 readyToLoad; src/frontend/components/drawer/media/MediaLoader.svelte:180 type === "video" && useOriginal && !ghost; src/frontend/components/drawer/media/MediaLoader.svelte:86 !videoElem; src/frontend/components/drawer/media/MediaLoader.svelte:89 !Number.isFinite(videoDuration) \|\| videoDuration <= 0; src/frontend/components/drawer/media/MediaLoader.svelte:97 hover \|\| !useOriginal.

Calls: src/frontend/components/drawer/media/MediaLoader.svelte:85 getCurrentDuration (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
