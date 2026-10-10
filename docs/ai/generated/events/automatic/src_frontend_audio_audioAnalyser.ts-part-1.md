# automatic/src_frontend_audio_audioAnalyser.ts (1)

## setTimeout — event-dba44bdf695f68fae1

[code] [src/frontend/audio/audioAnalyser.ts:141](../../../../../src/frontend/audio/audioAnalyser.ts#L141); () => AudioRoutingManager.getInstance().updateRoutingNodes(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioAnalyser.ts:141 <callback> (depth 0); src/frontend/audio/routing/audioRoutingManager.ts:350 updateRoutingNodes (depth 1); src/frontend/audio/routing/audioRoutingManager.ts:354 <callback> (depth 2); src/frontend/audio/routing/audioRoutingManager.ts:360 executeRoutingUpdate (depth 3); src/frontend/audio/routing/audioRoutingManager.ts:157 getInactiveChannelIds (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:386 syncGainNodes (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:394 ensureGainNode (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:213 applyGain (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:408 cleanupRemovedChannels (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:145 disconnect (depth 5); src/frontend/audio/routing/audioInputCapture.ts:44 onNodeDisconnected (depth 6); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 6); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 5); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 59; depth cutoffs: 20. Full edges/effects/conditions in JSON.
