# automatic/src_electron_capture_senderWorker.ts (1)

## setTimeout — event-b95988074f23ceec75

[code] [src/electron/capture/senderWorker.ts:98](../../../../../src/electron/capture/senderWorker.ts#L98); resolve. resolved-within-bound.

Conditions: src/electron/capture/senderWorker.ts:98 ADAPTER.recreateDelayMs; src/electron/capture/senderWorker.ts:96 SENDERS&#91;id&#93;.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-7083b8acc9240d2105

[code] [src/electron/capture/senderWorker.ts:133](../../../../../src/electron/capture/senderWorker.ts#L133); () => { const s = SENDERS&#91;id&#93; if (!s?.sender) return const conns = ADAPTER.connections(s.sender) s.status = conns > 0 ? "connected" : "unconnected" const newStatus = String(s.statu. partial.

Conditions: src/electron/capture/senderWorker.ts:135 !s?.sender; src/electron/capture/senderWorker.ts:140 newStatus !== s.previousStatus; src/electron/capture/senderWorker.ts:143 s.status === "connected".

Calls: src/electron/capture/senderWorker.ts:133 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7bf7272f0b6fda3e10

[code] [src/electron/capture/senderWorker.ts:291](../../../../../src/electron/capture/senderWorker.ts#L291); () => { const sd = SENDERS&#91;id&#93; if (!sd) return // stopped const interval = sd.paceInterval \|\| 1000 / 30 sd.paceNextDue = (sd.paceNextDue \|\| Date.now()) + interval if (sd.paceNextDu. partial.

Conditions: src/electron/capture/senderWorker.ts:293 !sd; src/electron/capture/senderWorker.ts:296 sd.paceNextDue < Date.now().

Calls: src/electron/capture/senderWorker.ts:291 <callback> (depth 0); src/electron/capture/senderWorker.ts:302 paceTick (depth 1); src/electron/capture/senderWorker.ts:321 paceSend (depth 2); src/electron/capture/senderWorker.ts:274 releasePacerRef (depth 3); src/electron/capture/senderWorker.ts:16 frameTimestamp (depth 3); src/electron/capture/senderWorker.ts:195 noteSendResult (depth 3); src/electron/capture/senderWorker.ts:287 schedulePaceTick (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-7034feca68d39014ec

[code] [src/electron/capture/senderWorker.ts:551](../../../../../src/electron/capture/senderWorker.ts#L551); () => { const nowCpu = process.cpuUsage() const nowAt = Date.now() const cpuCores = (nowCpu.user + nowCpu.system - lastCpu.user - lastCpu.system) / 1000 / Math.max(1, nowAt - lastC. partial.

Conditions: src/electron/capture/senderWorker.ts:559 !s?.sender; src/electron/capture/senderWorker.ts:565 gaps.length.

Calls: src/electron/capture/senderWorker.ts:551 <callback> (depth 0); src/electron/capture/senderWorker.ts:83 loadOsrCapture (depth 1); src/electron/capture/senderWorker.ts:566 <callback> (depth 1); src/electron/capture/senderWorker.ts:567 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
