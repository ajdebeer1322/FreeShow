# automatic/src_frontend_components_drawer_audio_metronome.ts (1)

## setInterval — event-1a5b0b6824d1992393

[code] [src/frontend/components/drawer/audio/metronome.ts:141](../../../../../src/frontend/components/drawer/audio/metronome.ts#L141); () => scheduler(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/metronome.ts:141 <callback> (depth 0); src/frontend/components/drawer/audio/metronome.ts:146 scheduler (depth 1); src/frontend/components/drawer/audio/metronome.ts:10 getAudioContext (depth 2); src/frontend/audio/audioAnalyser.ts:35 getAudioContext (depth 3); src/frontend/audio/audioAnalyser.ts:36 <callback> (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:130 cleanup (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:350 updateRoutingNodes (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:354 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:89 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:97 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:110 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:111 <callback> (depth 6); src/frontend/audio/audioSidechain.ts:17 getInstance (depth 6).

Effects: src/frontend/components/drawer/audio/metronome.ts:185 store-write src/frontend/stores.ts#metronomeTimer .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 24; depth cutoffs: 19. Full edges/effects/conditions in JSON.

## setTimeout — event-9becb485feb1cc4d6a

[code] [src/frontend/components/drawer/audio/metronome.ts:184](../../../../../src/frontend/components/drawer/audio/metronome.ts#L184); () => { if (get(playingMetronome)) metronomeTimer.set({ beat, timeToNext: 0 }) }. resolved-within-bound.

Conditions: src/frontend/components/drawer/audio/metronome.ts:185 get(playingMetronome).

Calls: src/frontend/components/drawer/audio/metronome.ts:184 <callback> (depth 0).

Effects: src/frontend/components/drawer/audio/metronome.ts:185 store-write src/frontend/stores.ts#metronomeTimer .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
