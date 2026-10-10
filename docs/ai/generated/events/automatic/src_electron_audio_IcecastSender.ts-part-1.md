# automatic/src_electron_audio_IcecastSender.ts (1)

## setTimeout — event-7ac58077050a9279d0

[code] [src/electron/audio/IcecastSender.ts:142](../../../../../src/electron/audio/IcecastSender.ts#L142); () => { if (this.activeConfig.enabled && !this.isConnected && !this.isConnecting) { this.connect() } }. partial.

Conditions: src/electron/audio/IcecastSender.ts:139 resp.includes("409 Conflict") \|\| resp.includes("Mountpoint in use"); src/electron/audio/IcecastSender.ts:143 this.activeConfig.enabled && !this.isConnected && !this.isConnecting.

Calls: src/electron/audio/IcecastSender.ts:142 <callback> (depth 0); src/electron/audio/IcecastSender.ts:97 connect (depth 1); src/electron/audio/IcecastSender.ts:119 <callback> (depth 2); src/electron/audio/IcecastSender.ts:129 <callback> (depth 3); src/electron/audio/IcecastSender.ts:185 startStreamHeaders (depth 4); src/electron/audio/IcecastSender.ts:291 parseArtistAndTitle (depth 5); src/electron/audio/IcecastSender.ts:302 createOpusTagsPacket (depth 5); src/electron/audio/IcecastSender.ts:198 writeOggPage (depth 5); src/electron/audio/IcecastSender.ts:15 oggCrc32 (depth 6); src/electron/audio/IcecastSender.ts:237 <callback> (depth 6); src/electron/audio/IcecastSender.ts:268 disconnect (depth 6); src/electron/audio/IcecastSender.ts:166 startIdleKeepAlive (depth 4); src/electron/audio/IcecastSender.ts:172 <callback> (depth 5); src/electron/audio/IcecastSender.ts:82 checkDebugStats (depth 6); src/electron/audio/IcecastSender.ts:137 <callback> (depth 2); src/electron/audio/IcecastSender.ts:268 disconnect (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 41; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## setInterval — event-bf5392d2bd34d34b22

[code] [src/electron/audio/IcecastSender.ts:172](../../../../../src/electron/audio/IcecastSender.ts#L172); () => { if (!this.isConnected \|\| !this.socket \|\| this.socket.destroyed) return const now = Date.now() if (now - this.lastRealAudioTime < 60) return this.granulePosition += BigInt(9. partial.

Conditions: src/electron/audio/IcecastSender.ts:173 !this.isConnected \|\| !this.socket \|\| this.socket.destroyed; src/electron/audio/IcecastSender.ts:176 now - this.lastRealAudioTime < 60.

Calls: src/electron/audio/IcecastSender.ts:172 <callback> (depth 0); src/electron/audio/IcecastSender.ts:198 writeOggPage (depth 1); src/electron/audio/IcecastSender.ts:15 oggCrc32 (depth 2); src/electron/audio/IcecastSender.ts:237 <callback> (depth 2); src/electron/audio/IcecastSender.ts:268 disconnect (depth 3); src/electron/audio/IcecastSender.ts:268 disconnect (depth 2); src/electron/audio/IcecastSender.ts:82 checkDebugStats (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 18; depth cutoffs: 0. Full edges/effects/conditions in JSON.
