# keyboard/src_server_stage_html_navigation.js (1)

## dynamic — event-82e03ef0c278e9e7b2

[code] [src/server/stage/html/navigation.js:213](../../../../../src/server/stage/html/navigation.js#L213); function (event) { switch (event.key) { case "ArrowLeft": event.preventDefault() navigateToSlide(-1) break case "ArrowRight": event.preventDefault() navigateToSlide(1) break case ". partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/html/navigation.js:213 <callback> (depth 0); src/server/stage/html/navigation.js:197 navigateToSlide (depth 1); src/server/stage/html/navigation.js:85 updateSlideContent (depth 2); src/server/stage/html/navigation.js:33 clearSlideTimer (depth 3); src/server/stage/html/navigation.js:41 loadSlideContent (depth 3); src/server/stage/html/navigation.js:124 <callback> (depth 3); src/server/stage/html/navigation.js:128 <callback> (depth 3); src/server/stage/html/navigation.js:144 <callback> (depth 3); src/server/stage/html/navigation.js:147 <callback> (depth 3); src/server/stage/html/navigation.js:181 fetchSlideTimerInfo (depth 3); src/server/stage/html/navigation.js:170 <callback> (depth 3); src/server/stage/html/navigation.js:22 startSlideTimer (depth 4); src/server/stage/html/navigation.js:27 <callback> (depth 5); src/server/stage/html/navigation.js:205 jumpToSlide (depth 1).

Effects: src/server/stage/html/navigation.js:48 network fetch ; src/server/stage/html/navigation.js:184 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
