# automatic/src_frontend_components_slide_views_Visualizer.svelte (1)

## setInterval — event-d467f6b7735ec09f8b

[code] [src/frontend/components/slide/views/Visualizer.svelte:23](../../../../../src/frontend/components/slide/views/Visualizer.svelte#L23); () => { analysers = AudioAnalyser.getAnalysers() if (analysers.length) clearInterval(checkInterval!) }. partial.

Conditions: src/frontend/components/slide/views/Visualizer.svelte:22 preview && !$currentWindow && !analysers.length; src/frontend/components/slide/views/Visualizer.svelte:25 analysers.length.

Calls: src/frontend/components/slide/views/Visualizer.svelte:23 <callback> (depth 0); src/frontend/audio/audioAnalyser.ts:490 getAnalysers (depth 1); src/frontend/audio/routing/audioInputCapture.ts:196 getAnalysers (depth 2); src/frontend/audio/routing/audioInputCapture.ts:154 getOrCaptureEntry (depth 3); src/frontend/audio/routing/audioRoutingManager.ts:691 getInputNodes (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:89 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:97 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:110 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:111 <callback> (depth 6); src/frontend/audio/audioSidechain.ts:17 getInstance (depth 6); src/frontend/audio/routing/audioInputCapture.ts:103 captureInput (depth 4); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 5); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 7. Full edges/effects/conditions in JSON.
