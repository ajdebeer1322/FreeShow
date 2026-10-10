# automatic/src_electron_output_helpers_OutputLifecycle.ts (2)

## setTimeout — event-c3788bdfb4d74c676a

[code] [src/electron/output/helpers/OutputLifecycle.ts:647](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L647); () => { admitTimer = null if (!pendingFrame) return const stillFull = offMainInFlight >= OutputLifecycle.depthFor(id) \|\| OutputLifecycle.globalInFlight >= OutputLifecycle.ADDON_MAX. partial.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:646 !admitTimer; src/electron/output/helpers/OutputLifecycle.ts:644 overBudget \|\| overPool; src/electron/output/helpers/OutputLifecycle.ts:649 !pendingFrame; src/electron/output/helpers/OutputLifecycle.ts:651 pendingFrame === parked && stillFull; src/electron/output/helpers/OutputLifecycle.ts:652 STATS.

Calls: src/electron/output/helpers/OutputLifecycle.ts:647 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:369 depthFor (depth 1); src/electron/output/helpers/OutputLifecycle.ts:363 capFor (depth 2); src/electron/output/helpers/OutputLifecycle.ts:482 releaseTex (depth 1); src/electron/output/helpers/OutputLifecycle.ts:623 tryAdmit (depth 1); src/electron/output/helpers/OutputLifecycle.ts:628 <callback> (depth 2); src/electron/output/helpers/OutputLifecycle.ts:856 getOsrTargetInterval (depth 2); src/electron/output/helpers/OutputLifecycle.ts:357 rendererTargetFps (depth 3); src/electron/output/OutputHelper.ts:51 getOutput (depth 4); src/electron/capture/CaptureHelper.ts:53 getMaxActiveFramerate (depth 4); src/electron/output/helpers/OutputLifecycle.ts:588 forwardOffMain (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 3); src/electron/capture/helpers/CaptureTransmitter.ts:121 groupOffMainInfo (depth 3); src/electron/capture/helpers/CaptureTransmitter.ts:125 <callback> (depth 4); src/electron/capture/helpers/CaptureTransmitter.ts:126 <callback> (depth 4); src/electron/capture/helpers/CaptureTransmitter.ts:127 <callback> (depth 4).

Effects: src/electron/output/helpers/OutputLifecycle.ts:358 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:590 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 3. Full edges/effects/conditions in JSON.

## setTimeout — event-dfae45b247efb148b4

[code] [src/electron/output/helpers/OutputLifecycle.ts:840](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L840); tick. resolved-within-bound.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:837 !window.isDestroyed().

Calls: src/electron/output/helpers/OutputLifecycle.ts:835 tick (depth 0); src/electron/output/helpers/OutputLifecycle.ts:846 getOsrSendInterval (depth 1); src/electron/output/OutputHelper.ts:51 getOutput (depth 2); src/electron/capture/CaptureHelper.ts:53 getMaxActiveFramerate (depth 2).

Effects: src/electron/output/helpers/OutputLifecycle.ts:847 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-109f956a6ee7f19c59

[code] [src/electron/output/helpers/OutputLifecycle.ts:842](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L842); tick. resolved-within-bound.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:837 !window.isDestroyed().

Calls: src/electron/output/helpers/OutputLifecycle.ts:835 tick (depth 0); src/electron/output/helpers/OutputLifecycle.ts:846 getOsrSendInterval (depth 1); src/electron/output/OutputHelper.ts:51 getOutput (depth 2); src/electron/capture/CaptureHelper.ts:53 getMaxActiveFramerate (depth 2).

Effects: src/electron/output/helpers/OutputLifecycle.ts:847 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
