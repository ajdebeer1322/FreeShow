# automatic/src_frontend_audio_routing_audioRoutingManager.ts (1)

## setTimeout — event-79d23d709731479310

[code] [src/frontend/audio/routing/audioRoutingManager.ts:563](../../../../../src/frontend/audio/routing/audioRoutingManager.ts#L563); () => AudioInputCapture.getInstance().captureInput("icecast", outNode). partial.

Conditions: src/frontend/audio/routing/audioRoutingManager.ts:559 hasIcecast.

Calls: src/frontend/audio/routing/audioRoutingManager.ts:563 <callback> (depth 0); src/frontend/audio/routing/audioInputCapture.ts:103 captureInput (depth 1); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 2); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ea2b42eced4a37ec61

[code] [src/frontend/audio/routing/audioRoutingManager.ts:587](../../../../../src/frontend/audio/routing/audioRoutingManager.ts#L587); () => AudioInputCapture.getInstance().captureInput(targetId, speakerNode, maxChannels). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/routing/audioRoutingManager.ts:587 <callback> (depth 0); src/frontend/audio/routing/audioInputCapture.ts:103 captureInput (depth 1); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 2); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.
