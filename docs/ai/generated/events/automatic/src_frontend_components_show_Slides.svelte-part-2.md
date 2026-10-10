# automatic/src_frontend_components_show_Slides.svelte (2)

## setTimeout — event-f1d781c06f456f7624

[code] [src/frontend/components/show/Slides.svelte:296](../../../../../src/frontend/components/show/Slides.svelte#L296); () => { if (altTemp && document.hasFocus()) altKeyPressed = true }. resolved-within-bound.

Conditions: src/frontend/components/show/Slides.svelte:290 e.altKey; src/frontend/components/show/Slides.svelte:297 altTemp && document.hasFocus().

Calls: src/frontend/components/show/Slides.svelte:296 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b12b684142f87e4cd6

[code] [src/frontend/components/show/Slides.svelte:416](../../../../../src/frontend/components/show/Slides.svelte#L416); async () => { // might already be done (check first slide) let mediaId = layoutSlides&#91;lazyLoader&#93;?.background let mediaPath = currentShow.media?.&#91;mediaId&#93;?.path \|\| "" let exists =. partial.

Conditions: src/frontend/components/show/Slides.svelte:415 count === undefined; src/frontend/components/show/Slides.svelte:410 isLessons; src/frontend/components/show/Slides.svelte:422 exists; src/frontend/components/show/Slides.svelte:424 lazyLoader > 0.

Calls: src/frontend/components/show/Slides.svelte:416 <callback> (depth 0); src/frontend/components/show/Slides.svelte:480 checkImage (depth 1); src/frontend/components/helpers/media.ts:19 getExtension (depth 2); src/frontend/components/show/Slides.svelte:485 <callback> (depth 2); src/frontend/components/show/Slides.svelte:490 <callback> (depth 3); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 3); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 4); src/frontend/components/helpers/media.ts:54 splitPath (depth 4); src/frontend/components/helpers/media.ts:87 <callback> (depth 4); src/frontend/components/helpers/media.ts:62 joinPath (depth 4); src/frontend/components/show/Slides.svelte:497 onLoaded (depth 3); src/frontend/utils/common.ts:46 wait (depth 1); src/frontend/utils/common.ts:47 <callback> (depth 2); src/frontend/utils/common.ts:48 <callback> (depth 3); src/frontend/components/show/Slides.svelte:399 startLazyLoader (depth 1); src/frontend/components/show/Slides.svelte:468 next (depth 2).

Effects: src/frontend/components/show/Slides.svelte:450 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:451 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/show/Slides.svelte:453 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:454 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:455 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/show/Slides.svelte:459 store-write src/frontend/stores.ts#lessonsLoaded .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e4a9be72b97e0d9961

[code] [src/frontend/components/show/Slides.svelte:466](../../../../../src/frontend/components/show/Slides.svelte#L466); next. partial.

Conditions: src/frontend/components/show/Slides.svelte:469 isDestroyed; src/frontend/components/show/Slides.svelte:474 timeout && typeof timeout !== "boolean".

Calls: src/frontend/components/show/Slides.svelte:468 next (depth 0); src/frontend/components/show/Slides.svelte:399 startLazyLoader (depth 1); src/frontend/components/show/Slides.svelte:416 <callback> (depth 2); src/frontend/components/show/Slides.svelte:480 checkImage (depth 3); src/frontend/components/helpers/media.ts:19 getExtension (depth 4); src/frontend/components/show/Slides.svelte:485 <callback> (depth 4); src/frontend/components/show/Slides.svelte:490 <callback> (depth 5); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 5); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 6); src/frontend/components/helpers/media.ts:54 splitPath (depth 6); src/frontend/components/helpers/media.ts:87 <callback> (depth 6); src/frontend/components/helpers/media.ts:62 joinPath (depth 6); src/frontend/components/show/Slides.svelte:497 onLoaded (depth 5); src/frontend/utils/common.ts:46 wait (depth 3); src/frontend/utils/common.ts:47 <callback> (depth 4); src/frontend/utils/common.ts:48 <callback> (depth 5).

Effects: src/frontend/components/show/Slides.svelte:450 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:451 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/show/Slides.svelte:453 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:454 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/show/Slides.svelte:455 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/show/Slides.svelte:459 store-write src/frontend/stores.ts#lessonsLoaded .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setTimeout — event-74fde529f6f8d3c8ce

[code] [src/frontend/components/show/Slides.svelte:511](../../../../../src/frontend/components/show/Slides.svelte#L511); () => { loading = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/Slides.svelte:511 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
