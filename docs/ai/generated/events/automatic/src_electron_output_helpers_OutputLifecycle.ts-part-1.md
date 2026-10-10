# automatic/src_electron_output_helpers_OutputLifecycle.ts (1)

## setTimeout — event-044531c6f540c3919b

[code] [src/electron/output/helpers/OutputLifecycle.ts:46](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L46); () => this.restoreAllOutputBounds(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/helpers/OutputLifecycle.ts:46 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:56 restoreAllOutputBounds (depth 1); src/electron/output/OutputHelper.ts:67 getKeys (depth 2); src/electron/output/helpers/OutputLifecycle.ts:57 <callback> (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 3); src/electron/output/helpers/OutputBounds.ts:57 getRenderBounds (depth 3); src/electron/output/helpers/OutputBounds.ts:23 updateBounds (depth 3); src/electron/output/helpers/OutputBounds.ts:13 disableWindowMoveListener (depth 4); src/electron/output/helpers/OutputBounds.ts:17 <callback> (depth 5); src/electron/output/helpers/OutputBounds.ts:37 <callback> (depth 4); src/electron/output/helpers/OutputBounds.ts:43 <callback> (depth 4); src/electron/output/helpers/OutputLifecycle.ts:934 updateWindowConstraints (depth 5); src/electron/output/helpers/OutputLifecycle.ts:75 <callback> (depth 3); src/electron/output/helpers/OutputVisibility.ts:62 resolveOutputBounds (depth 3); src/electron/output/helpers/OutputVisibility.ts:111 amountCovered (depth 4); src/electron/output/helpers/OutputVisibility.ts:71 <callback> (depth 4).

Effects: src/electron/output/helpers/OutputLifecycle.ts:57 presentation OutputHelper.getKeys().forEach ; src/electron/output/helpers/OutputLifecycle.ts:57 presentation OutputHelper.getKeys ; src/electron/output/helpers/OutputLifecycle.ts:58 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:64 presentation OutputHelper.Bounds.getRenderBounds ; src/electron/output/helpers/OutputLifecycle.ts:67 presentation OutputHelper.Bounds.updateBounds ; src/electron/output/helpers/OutputLifecycle.ts:82 presentation OutputHelper.Bounds.updateBounds ; src/electron/output/helpers/OutputBounds.ts:24 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputBounds.ts:46 presentation OutputHelper.Lifecycle.updateWindowConstraints ; src/electron/output/helpers/OutputLifecycle.ts:935 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 25; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a03e576869781204d4

[code] [src/electron/output/helpers/OutputLifecycle.ts:49](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L49); () => this.restoreAllOutputBounds(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/output/helpers/OutputLifecycle.ts:49 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:56 restoreAllOutputBounds (depth 1); src/electron/output/OutputHelper.ts:67 getKeys (depth 2); src/electron/output/helpers/OutputLifecycle.ts:57 <callback> (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 3); src/electron/output/helpers/OutputBounds.ts:57 getRenderBounds (depth 3); src/electron/output/helpers/OutputBounds.ts:23 updateBounds (depth 3); src/electron/output/helpers/OutputBounds.ts:13 disableWindowMoveListener (depth 4); src/electron/output/helpers/OutputBounds.ts:17 <callback> (depth 5); src/electron/output/helpers/OutputBounds.ts:37 <callback> (depth 4); src/electron/output/helpers/OutputBounds.ts:43 <callback> (depth 4); src/electron/output/helpers/OutputLifecycle.ts:934 updateWindowConstraints (depth 5); src/electron/output/helpers/OutputLifecycle.ts:75 <callback> (depth 3); src/electron/output/helpers/OutputVisibility.ts:62 resolveOutputBounds (depth 3); src/electron/output/helpers/OutputVisibility.ts:111 amountCovered (depth 4); src/electron/output/helpers/OutputVisibility.ts:71 <callback> (depth 4).

Effects: src/electron/output/helpers/OutputLifecycle.ts:57 presentation OutputHelper.getKeys().forEach ; src/electron/output/helpers/OutputLifecycle.ts:57 presentation OutputHelper.getKeys ; src/electron/output/helpers/OutputLifecycle.ts:58 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:64 presentation OutputHelper.Bounds.getRenderBounds ; src/electron/output/helpers/OutputLifecycle.ts:67 presentation OutputHelper.Bounds.updateBounds ; src/electron/output/helpers/OutputLifecycle.ts:82 presentation OutputHelper.Bounds.updateBounds ; src/electron/output/helpers/OutputBounds.ts:24 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputBounds.ts:46 presentation OutputHelper.Lifecycle.updateWindowConstraints ; src/electron/output/helpers/OutputLifecycle.ts:935 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 25; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e2f0b455a181014a7d

[code] [src/electron/output/helpers/OutputLifecycle.ts:116](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L116); () => { delete this.pendingCaptureStart&#91;id&#93; if (!CaptureHelper.Lifecycle \|\| !OutputHelper.getOutput(id)) return // window closed before timeout finished CaptureHelper.Lifecycle.sta. partial.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:119 !CaptureHelper.Lifecycle \|\| !OutputHelper.getOutput(id).

Calls: src/electron/output/helpers/OutputLifecycle.ts:116 <callback> (depth 0); src/electron/output/OutputHelper.ts:51 getOutput (depth 1); src/electron/capture/helpers/CaptureLifecycle.ts:28 startCapture (depth 1); src/electron/capture/helpers/CaptureLifecycle.ts:182 stopCapture (depth 2); src/electron/capture/helpers/CaptureLifecycle.ts:196 <callback> (depth 3); src/electron/capture/helpers/CaptureTransmitter.ts:72 stopChannel (depth 4); src/electron/capture/helpers/CaptureTransmitter.ts:82 <callback> (depth 5); src/electron/output/helpers/OutputLifecycle.ts:460 releaseOsrCaptureTextures (depth 3); src/electron/capture/helpers/CaptureLifecycle.ts:207 cleanupListeners (depth 3); src/electron/capture/helpers/CaptureLifecycle.ts:216 updateWebRtcHostState (depth 3); src/electron/output/OutputHelper.ts:55 getAllOutputs (depth 4); src/electron/output/OutputHelper.ts:56 <callback> (depth 5); src/electron/capture/helpers/CaptureLifecycle.ts:218 <callback> (depth 4); src/electron/streaming/WebRtcHost.ts:85 isRunning (depth 4); src/electron/streaming/WebRtcHost.ts:93 start (depth 4); src/electron/streaming/WebRtcHost.ts:158 buildHostHtml (depth 5).

Effects: src/electron/output/helpers/OutputLifecycle.ts:119 presentation OutputHelper.getOutput ; src/electron/capture/helpers/CaptureLifecycle.ts:29 presentation OutputHelper.getOutput ; src/electron/capture/helpers/CaptureLifecycle.ts:186 presentation OutputHelper.getOutput ; src/electron/capture/helpers/CaptureLifecycle.ts:200 presentation OutputHelper.Lifecycle.releaseOsrCaptureTextures ; src/electron/capture/helpers/CaptureLifecycle.ts:217 presentation OutputHelper.getAllOutputs ; src/electron/streaming/WebRtcHost.ts:149 ipc this.window!.webContents.send("START_WHIP", { outputId, url, token, fps: options?.fps \|\| 30, bitrate: options?.bitrate \|\| 2500 }) ; src/electron/streaming/WebRtcHost.ts:155 ipc this.window!.webContents.send("STOP_WHIP", { outputId }) ; src/electron/capture/helpers/CaptureLifecycle.ts:253 presentation OutputHelper.getAllOutputs ; src/electron/capture/CaptureHelper.ts:67 presentation OutputHelper.getOutput ; src/electron/capture/CaptureHelper.ts:77 presentation OutputHelper.setOutput ; src/electron/capture/CaptureHelper.ts:88 presentation OutputHelper.setOutput ; src/electron/capture/CaptureHelper.ts:101 presentation OutputHelper.getOutput ; src/electron/capture/CaptureHelper.ts:120 presentation OutputHelper.Lifecycle.updateOsrPaintDrive ; src/electron/capture/helpers/CaptureTransmitter.ts:54 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 38; depth cutoffs: 34. Full edges/effects/conditions in JSON.

## setInterval — event-e81500e90a2f8dd1dd

[code] [src/electron/output/helpers/OutputLifecycle.ts:278](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L278); () => { if (window.isDestroyed()) { this.stopOsrPaintDrive(id) return } try { const wc = window.webContents if (!wc.isPainting()) wc.startPainting() const lastNatural = this.lastNa. partial.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:279 window.isDestroyed(); src/electron/output/helpers/OutputLifecycle.ts:285 !wc.isPainting(); src/electron/output/helpers/OutputLifecycle.ts:288 now - lastNatural < interval * 2; src/electron/output/helpers/OutputLifecycle.ts:289 this.osrInvalidateInFlight.get(id); src/electron/output/helpers/OutputLifecycle.ts:291 now - invalidatedAt < interval * this.DRIVE_TIMEOUT_INTERVALS.

Calls: src/electron/output/helpers/OutputLifecycle.ts:278 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:304 stopOsrPaintDrive (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-47784e9ab2a63b0579

[code] [src/electron/output/helpers/OutputLifecycle.ts:529](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L529); () => { const rtt = sRttCount ? Math.round(sRttSum / sRttCount) : 0 const sendCap = Math.round(1000 / this.getOsrSendInterval(id)) // admit = group admission target (max configured. resolved-within-bound.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:528 STATS; src/electron/output/helpers/OutputLifecycle.ts:541 sGaps.length; src/electron/output/helpers/OutputLifecycle.ts:552 nTl; src/electron/output/helpers/OutputLifecycle.ts:562 idleSince.

Calls: src/electron/output/helpers/OutputLifecycle.ts:529 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:846 getOsrSendInterval (depth 1); src/electron/output/OutputHelper.ts:51 getOutput (depth 2); src/electron/capture/CaptureHelper.ts:53 getMaxActiveFramerate (depth 2); src/electron/output/helpers/OutputLifecycle.ts:856 getOsrTargetInterval (depth 1); src/electron/output/helpers/OutputLifecycle.ts:357 rendererTargetFps (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 1); src/electron/output/helpers/OutputLifecycle.ts:542 <callback> (depth 1); src/electron/output/helpers/OutputLifecycle.ts:543 <callback> (depth 1); src/electron/output/helpers/OutputLifecycle.ts:544 <callback> (depth 1); src/electron/output/helpers/OutputLifecycle.ts:546 <callback> (depth 1); src/electron/output/helpers/OutputLifecycle.ts:553 mean (depth 1); src/electron/output/helpers/OutputLifecycle.ts:553 <callback> (depth 2); src/electron/output/helpers/OutputLifecycle.ts:554 p95 (depth 1); src/electron/output/helpers/OutputLifecycle.ts:555 <callback> (depth 2); src/electron/output/helpers/OutputLifecycle.ts:404 pipeRttFor (depth 1).

Effects: src/electron/output/helpers/OutputLifecycle.ts:535 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:847 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:358 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0e6ab3b3059f6dcabb

[code] [src/electron/output/helpers/OutputLifecycle.ts:628](../../../../../src/electron/output/helpers/OutputLifecycle.ts#L628); () => { admitTimer = null tryAdmit() }. partial.

Conditions: src/electron/output/helpers/OutputLifecycle.ts:627 !admitTimer; src/electron/output/helpers/OutputLifecycle.ts:626 now < admitNextDue.

Calls: src/electron/output/helpers/OutputLifecycle.ts:628 <callback> (depth 0); src/electron/output/helpers/OutputLifecycle.ts:623 tryAdmit (depth 1); src/electron/output/helpers/OutputLifecycle.ts:369 depthFor (depth 2); src/electron/output/helpers/OutputLifecycle.ts:363 capFor (depth 3); src/electron/output/helpers/OutputLifecycle.ts:647 <callback> (depth 2); src/electron/output/helpers/OutputLifecycle.ts:482 releaseTex (depth 3); src/electron/output/helpers/OutputLifecycle.ts:856 getOsrTargetInterval (depth 2); src/electron/output/helpers/OutputLifecycle.ts:357 rendererTargetFps (depth 3); src/electron/output/OutputHelper.ts:51 getOutput (depth 4); src/electron/capture/CaptureHelper.ts:53 getMaxActiveFramerate (depth 4); src/electron/output/helpers/OutputLifecycle.ts:588 forwardOffMain (depth 2); src/electron/output/OutputHelper.ts:51 getOutput (depth 3); src/electron/capture/helpers/CaptureTransmitter.ts:121 groupOffMainInfo (depth 3); src/electron/capture/helpers/CaptureTransmitter.ts:125 <callback> (depth 4); src/electron/capture/helpers/CaptureTransmitter.ts:126 <callback> (depth 4); src/electron/capture/helpers/CaptureTransmitter.ts:127 <callback> (depth 4).

Effects: src/electron/output/helpers/OutputLifecycle.ts:358 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:590 presentation OutputHelper.getOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 3. Full edges/effects/conditions in JSON.
