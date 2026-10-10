# automatic/src_server_stage_html_navigation.js (1)

## setTimeout — event-d9809b4050d6d60cf8

[code] [src/server/stage/html/navigation.js:27](../../../../../src/server/stage/html/navigation.js#L27); () => { // Timer ended - advance to next slide (matching desktop app behavior) navigateToSlide(1) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/html/navigation.js:27 <callback> (depth 0); src/server/stage/html/navigation.js:197 navigateToSlide (depth 1); src/server/stage/html/navigation.js:85 updateSlideContent (depth 2); src/server/stage/html/navigation.js:33 clearSlideTimer (depth 3); src/server/stage/html/navigation.js:41 loadSlideContent (depth 3); src/server/stage/html/navigation.js:124 <callback> (depth 3); src/server/stage/html/navigation.js:128 <callback> (depth 3); src/server/stage/html/navigation.js:144 <callback> (depth 3); src/server/stage/html/navigation.js:147 <callback> (depth 3); src/server/stage/html/navigation.js:181 fetchSlideTimerInfo (depth 3); src/server/stage/html/navigation.js:170 <callback> (depth 3); src/server/stage/html/navigation.js:22 startSlideTimer (depth 4).

Effects: src/server/stage/html/navigation.js:48 network fetch ; src/server/stage/html/navigation.js:184 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0dfd1d9ca76617ce1a

[code] [src/server/stage/html/navigation.js:167](../../../../../src/server/stage/html/navigation.js#L167); preloadAdjacentSlides. partial.

Conditions: src/server/stage/html/navigation.js:75 index >= 0 && index < slideIds.length; src/server/stage/html/navigation.js:77 !slideContentCache.has(slideId).

Calls: src/server/stage/html/navigation.js:72 preloadAdjacentSlides (depth 0); src/server/stage/html/navigation.js:74 <callback> (depth 1); src/server/stage/html/navigation.js:41 loadSlideContent (depth 2).

Effects: src/server/stage/html/navigation.js:48 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5becf8b31a3b3e8a81

[code] [src/server/stage/html/navigation.js:263](../../../../../src/server/stage/html/navigation.js#L263); preloadAdjacentSlides. partial.

Conditions: src/server/stage/html/navigation.js:75 index >= 0 && index < slideIds.length; src/server/stage/html/navigation.js:77 !slideContentCache.has(slideId).

Calls: src/server/stage/html/navigation.js:72 preloadAdjacentSlides (depth 0); src/server/stage/html/navigation.js:74 <callback> (depth 1); src/server/stage/html/navigation.js:41 loadSlideContent (depth 2).

Effects: src/server/stage/html/navigation.js:48 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9d506a08cfe58c825a

[code] [src/server/stage/html/navigation.js:268](../../../../../src/server/stage/html/navigation.js#L268); () => { startSlideTimer() }. partial.

Conditions: src/server/stage/html/navigation.js:266 nextTimer > 0.

Calls: src/server/stage/html/navigation.js:268 <callback> (depth 0); src/server/stage/html/navigation.js:22 startSlideTimer (depth 1); src/server/stage/html/navigation.js:33 clearSlideTimer (depth 2); src/server/stage/html/navigation.js:27 <callback> (depth 2); src/server/stage/html/navigation.js:197 navigateToSlide (depth 3); src/server/stage/html/navigation.js:85 updateSlideContent (depth 4); src/server/stage/html/navigation.js:41 loadSlideContent (depth 5); src/server/stage/html/navigation.js:124 <callback> (depth 5); src/server/stage/html/navigation.js:128 <callback> (depth 5); src/server/stage/html/navigation.js:144 <callback> (depth 5); src/server/stage/html/navigation.js:147 <callback> (depth 5); src/server/stage/html/navigation.js:181 fetchSlideTimerInfo (depth 5); src/server/stage/html/navigation.js:170 <callback> (depth 5).

Effects: src/server/stage/html/navigation.js:48 network fetch ; src/server/stage/html/navigation.js:184 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
