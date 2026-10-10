# automatic/src_server_remote_components_show_Slides.svelte (1)

## setTimeout — event-2d4d5bd880922a4c01

[code] [src/server/remote/components/show/Slides.svelte:36](../../../../../src/server/remote/components/show/Slides.svelte#L36); runAutoScroll. partial.

Conditions: src/server/remote/components/show/Slides.svelte:33 pendingScrollTries < 80; src/server/remote/components/show/Slides.svelte:32 !slideElem; src/server/remote/components/show/Slides.svelte:29 !scrollElem \|\| pendingScrollIndex === null; src/server/remote/components/show/Slides.svelte:32 !slideElem; src/server/remote/components/show/Slides.svelte:33 pendingScrollTries < 80; src/server/remote/components/show/Slides.svelte:35 pendingScrollTimer; src/server/remote/components/show/Slides.svelte:47 pendingScrollTimer.

Calls: src/server/remote/components/show/Slides.svelte:28 runAutoScroll (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9e5dd1ac423f200212

[code] [src/server/remote/components/show/Slides.svelte:140](../../../../../src/server/remote/components/show/Slides.svelte#L140); () => { renderBatchTimer = null renderedCount = Math.min(allSlides.length, renderedCount + RENDER_BATCH_SIZE) if (renderedCount < allSlides.length) queueRenderBatch() }. resolved-within-bound.

Conditions: src/server/remote/components/show/Slides.svelte:143 renderedCount < allSlides.length.

Calls: src/server/remote/components/show/Slides.svelte:140 <callback> (depth 0); src/server/remote/components/show/Slides.svelte:137 queueRenderBatch (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-59ea25dcbeb63b2e50

[code] [src/server/remote/components/show/Slides.svelte:155](../../../../../src/server/remote/components/show/Slides.svelte#L155); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
