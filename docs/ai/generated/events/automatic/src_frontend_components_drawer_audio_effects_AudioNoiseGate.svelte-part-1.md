# automatic/src_frontend_components_drawer_audio_effects_AudioNoiseGate.svelte (1)

## setInterval — event-91ad2cb2898b933b67

[code] [src/frontend/components/drawer/audio/effects/AudioNoiseGate.svelte:34](../../../../../src/frontend/components/drawer/audio/effects/AudioNoiseGate.svelte#L34); () => { const channelDb = AudioAnalyser.getChannelLiveVolume(channelId) inputLevelDb = Math.max(dbMin, Math.min(dbMax, channelDb)) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/effects/AudioNoiseGate.svelte:34 <callback> (depth 0); src/frontend/audio/audioAnalyser.ts:469 getChannelLiveVolume (depth 1); src/frontend/audio/audioAnalyser.ts:490 getAnalysers (depth 2); src/frontend/audio/routing/audioInputCapture.ts:196 getAnalysers (depth 3); src/frontend/audio/routing/audioInputCapture.ts:154 getOrCaptureEntry (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:691 getInputNodes (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 6); src/frontend/audio/routing/audioInputCapture.ts:103 captureInput (depth 5); src/frontend/audio/routing/audioInputCapture.ts:174 removeInput (depth 6); src/frontend/audio/routing/audioInputCapture.ts:28 getInstance (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 5. Full edges/effects/conditions in JSON.
