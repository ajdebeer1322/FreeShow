# automatic/src_electron_capture_streamReceiverProcess.ts (1)

## setTimeout — event-1fbd0e7dd799c54339

[code] [src/electron/capture/streamReceiverProcess.ts:162](../../../../../src/electron/capture/streamReceiverProcess.ts#L162); () => reject(new Error("NDI receiver timeout")). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/capture/streamReceiverProcess.ts:162 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-f02f51074ef7965ba6

[code] [src/electron/capture/streamReceiverProcess.ts:190](../../../../../src/electron/capture/streamReceiverProcess.ts#L190); () => { const sources = finder.sources() if (previousLength === sources.length) { clearInterval(this.findInterval!) resolve(sources) } previousLength = sources.length }. partial.

Conditions: src/electron/capture/streamReceiverProcess.ts:192 previousLength === sources.length.

Calls: src/electron/capture/streamReceiverProcess.ts:190 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f4f04ec1a54a862e51

[code] [src/electron/capture/streamReceiverProcess.ts:247](../../../../../src/electron/capture/streamReceiverProcess.ts#L247); resolve. resolved-within-bound.

Conditions: src/electron/capture/streamReceiverProcess.ts:247 thumbnail; src/electron/capture/streamReceiverProcess.ts:241 rawFrame.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-76e30dd595d72380f5

[code] [src/electron/capture/streamReceiverProcess.ts:261](../../../../../src/electron/capture/streamReceiverProcess.ts#L261); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-16a70b3fdff7dc786e

[code] [src/electron/capture/streamReceiverProcess.ts:295](../../../../../src/electron/capture/streamReceiverProcess.ts#L295); resolve. resolved-within-bound.

Conditions: src/electron/capture/streamReceiverProcess.ts:293 this.receivers&#91;source.id&#93;.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9fe898d6f371d9d507

[code] [src/electron/capture/streamReceiverProcess.ts:319](../../../../../src/electron/capture/streamReceiverProcess.ts#L319); () => { delete this.active&#91;data.id&#93; delete this.receivers&#91;data.id&#93; }. resolved-within-bound.

Conditions: src/electron/capture/streamReceiverProcess.ts:317 !this.outputs.length && this.receivers&#91;data.id&#93;; src/electron/capture/streamReceiverProcess.ts:311 data?.id.

Calls: src/electron/capture/streamReceiverProcess.ts:319 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
