# automatic/src_frontend_components_output_layers_SlideContent.svelte (2)

## setTimeout — event-472621e9333ba5758c

[code] [src/frontend/components/output/layers/SlideContent.svelte:430](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L430); () => { if (gen !== updateGeneration) return // hold the outgoing items until the incoming text size is known (items with custom show/hide timers keep theirs) waitForAutoSize(hideA. partial.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:431 gen !== updateGeneration.

Calls: src/frontend/components/output/layers/SlideContent.svelte:430 <callback> (depth 0); src/frontend/components/output/layers/SlideContent.svelte:224 waitForAutoSize (depth 1); src/frontend/components/output/layers/SlideContent.svelte:236 stopAutoSizeWait (depth 2); src/frontend/components/output/layers/SlideContent.svelte:244 hasCustomTimer (depth 1); src/frontend/components/output/layers/SlideContent.svelte:245 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-71dd4338f468d73982

[code] [src/frontend/components/output/layers/SlideContent.svelte:450](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L450); () => (isReady = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/layers/SlideContent.svelte:450 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-43f4bdc43f3da143f3

[code] [src/frontend/components/output/layers/SlideContent.svelte:453](../../../../../src/frontend/components/output/layers/SlideContent.svelte#L453); () => { if (isClearing \|\| !isReady \|\| !timelineActions.length) return // WIP use actual slide timeline pos when available? timelinePos += 15 * $slideTimelineSpeedMultiplier styleAc. partial.

Conditions: src/frontend/components/output/layers/SlideContent.svelte:454 isClearing \|\| !isReady \|\| !timelineActions.length; src/frontend/components/output/layers/SlideContent.svelte:460 currentSlide?.timeline?.loop; src/frontend/components/output/layers/SlideContent.svelte:462 timelinePos >= lastActionTime.

Calls: src/frontend/components/output/layers/SlideContent.svelte:453 <callback> (depth 0); src/frontend/components/output/layers/SlideContent.svelte:466 styleActions (depth 1); src/frontend/components/output/layers/SlideContent.svelte:467 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/output/layers/SlideContent.svelte:485 <callback> (depth 2); src/frontend/components/output/layers/SlideContent.svelte:510 getPreviousAction (depth 3); src/frontend/components/output/layers/SlideContent.svelte:512 <callback> (depth 4); src/frontend/components/output/layers/SlideContent.svelte:515 getNextAction (depth 3); src/frontend/components/output/layers/SlideContent.svelte:517 <callback> (depth 4); src/frontend/components/timeline/SlideTimeline.ts:145 interpolateValue (depth 3); src/frontend/components/timeline/easingHelper.ts:60 evaluateTimelineCurve (depth 4); src/frontend/components/timeline/easingHelper.ts:39 getSegmentCurve (depth 5); src/frontend/components/timeline/easingHelper.ts:18 getActionEasing (depth 6); src/frontend/components/timeline/easingHelper.ts:65 solveCubicBezier (depth 5); src/frontend/components/timeline/easingHelper.ts:69 sampleCurve (depth 6); src/frontend/components/timeline/easingHelper.ts:74 sampleCurveDerivative (depth 6).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 3. Full edges/effects/conditions in JSON.
