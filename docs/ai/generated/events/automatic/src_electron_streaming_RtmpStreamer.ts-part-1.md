# automatic/src_electron_streaming_RtmpStreamer.ts (1)

## setTimeout — event-c41f79d2c321896335

[code] [src/electron/streaming/RtmpStreamer.ts:301](../../../../../src/electron/streaming/RtmpStreamer.ts#L301); () => { tick() const stdin = streamer.encoder?.stdin if (!stdin \|\| stdin.destroyed \|\| !streamer.lastFrame \|\| isWriting) return // Hold video until audio arrives if (config.enableAu. partial.

Conditions: src/electron/streaming/RtmpStreamer.ts:305 !stdin \|\| stdin.destroyed \|\| !streamer.lastFrame \|\| isWriting; src/electron/streaming/RtmpStreamer.ts:308 config.enableAudio && !streamer.hasReceivedFirstAudio; src/electron/streaming/RtmpStreamer.ts:312 stdin.writableLength > 0.

Calls: src/electron/streaming/RtmpStreamer.ts:301 <callback> (depth 0); src/electron/streaming/RtmpStreamer.ts:296 tick (depth 1); src/electron/streaming/RtmpStreamer.ts:316 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b099129d6616ea3cc9

[code] [src/electron/streaming/RtmpStreamer.ts:401](../../../../../src/electron/streaming/RtmpStreamer.ts#L401); () => { streamer.encoderRestartTimer = undefined if (!this.streamers.has(streamer.outputId) \|\| !streamer.inputSize) return this.respawnEncoder(streamer, streamer.inputSize, "Encode. partial.

Conditions: src/electron/streaming/RtmpStreamer.ts:403 !this.streamers.has(streamer.outputId) \|\| !streamer.inputSize.

Calls: src/electron/streaming/RtmpStreamer.ts:401 <callback> (depth 0); src/electron/streaming/RtmpStreamer.ts:349 respawnEncoder (depth 1); src/electron/streaming/RtmpStreamer.ts:332 stopEncoder (depth 2); src/electron/streaming/RtmpStreamer.ts:695 killGracefully (depth 3); src/electron/streaming/RtmpStreamer.ts:704 <callback> (depth 4); src/electron/streaming/RtmpStreamer.ts:709 <callback> (depth 4); src/electron/streaming/RtmpStreamer.ts:234 spawnEncoder (depth 2); src/electron/streaming/encoderProfiles.ts:136 buildEncoderCommand (depth 3); src/electron/streaming/encoderProfiles.ts:94 getProfile (depth 4); src/electron/streaming/encoderProfiles.ts:110 buildVideoFilter (depth 4); src/electron/streaming/RtmpStreamer.ts:271 <callback> (depth 3); src/electron/streaming/RtmpStreamer.ts:272 <callback> (depth 3); src/electron/streaming/RtmpStreamer.ts:274 <callback> (depth 3); src/electron/streaming/RtmpStreamer.ts:560 fanOut (depth 4); src/electron/streaming/RtmpStreamer.ts:25 getRelayBufferCap (depth 5); src/electron/streaming/RtmpStreamer.ts:547 restartRelay (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 28; depth cutoffs: 7. Full edges/effects/conditions in JSON.

## setTimeout — event-32bdd5dd85ac0e33ef

[code] [src/electron/streaming/RtmpStreamer.ts:477](../../../../../src/electron/streaming/RtmpStreamer.ts#L477); () => { if (relay.process !== child \|\| relay.stopped) return this.setRelayState(streamer, relay, "live") }. partial.

Conditions: src/electron/streaming/RtmpStreamer.ts:478 relay.process !== child \|\| relay.stopped.

Calls: src/electron/streaming/RtmpStreamer.ts:477 <callback> (depth 0); src/electron/streaming/RtmpStreamer.ts:646 setRelayState (depth 1); src/electron/streaming/RtmpStreamer.ts:668 pushStatus (depth 2); src/electron/streaming/RtmpStreamer.ts:672 <callback> (depth 3); src/electron/streaming/RtmpStreamer.ts:653 getStatus (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-017877df2fb5f54a69

[code] [src/electron/streaming/RtmpStreamer.ts:529](../../../../../src/electron/streaming/RtmpStreamer.ts#L529); () => { relay.restartTimer = undefined if (!this.streamers.has(streamer.outputId) \|\| relay.stopped) return this.spawnRelay(streamer, relay) }. partial.

Conditions: src/electron/streaming/RtmpStreamer.ts:531 !this.streamers.has(streamer.outputId) \|\| relay.stopped.

Calls: src/electron/streaming/RtmpStreamer.ts:529 <callback> (depth 0); src/electron/streaming/RtmpStreamer.ts:441 spawnRelay (depth 1); src/electron/streaming/encoderProfiles.ts:177 buildRelayCommand (depth 2); src/electron/streaming/RtmpStreamer.ts:688 buildDestinationUrl (depth 2); src/electron/streaming/RtmpStreamer.ts:520 noteRelayIssue (depth 2); src/electron/streaming/RtmpStreamer.ts:646 setRelayState (depth 2); src/electron/streaming/RtmpStreamer.ts:668 pushStatus (depth 3); src/electron/streaming/RtmpStreamer.ts:672 <callback> (depth 4); src/electron/streaming/RtmpStreamer.ts:653 getStatus (depth 5); src/electron/streaming/RtmpStreamer.ts:525 scheduleRelayRestart (depth 2); src/electron/streaming/RtmpStreamer.ts:461 <callback> (depth 2); src/electron/streaming/RtmpStreamer.ts:462 <callback> (depth 2); src/electron/streaming/RtmpStreamer.ts:477 <callback> (depth 2); src/electron/streaming/RtmpStreamer.ts:483 <callback> (depth 2); src/electron/streaming/RtmpStreamer.ts:510 clearRelayProcess (depth 3); src/electron/streaming/RtmpStreamer.ts:493 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-abc7aeaf24c0f83a05

[code] [src/electron/streaming/RtmpStreamer.ts:672](../../../../../src/electron/streaming/RtmpStreamer.ts#L672); () => { this.statusTimers.delete(outputId) if (!this.streamers.has(outputId)) return statusListener?.(outputId, this.getStatus(outputId)) }. partial.

Conditions: src/electron/streaming/RtmpStreamer.ts:674 !this.streamers.has(outputId).

Calls: src/electron/streaming/RtmpStreamer.ts:672 <callback> (depth 0); src/electron/streaming/RtmpStreamer.ts:653 getStatus (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c2bca47a03713733bf

[code] [src/electron/streaming/RtmpStreamer.ts:704](../../../../../src/electron/streaming/RtmpStreamer.ts#L704); () => { try { child.kill("SIGTERM") } catch {} }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/streaming/RtmpStreamer.ts:704 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
