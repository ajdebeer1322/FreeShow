# automatic/src_electron_utils_close.ts (1)

## setTimeout — event-31406a64f34ba66c59

[code] [src/electron/utils/close.ts:72](../../../../../src/electron/utils/close.ts#L72); () => { app.exit() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/utils/close.ts:72 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-56cceb3e0016aaa62b

[code] [src/electron/utils/close.ts:90](../../../../../src/electron/utils/close.ts#L90); exitApp. partial.

Conditions: src/electron/utils/close.ts:30 isExiting; src/electron/utils/close.ts:64 powerSaveBlockerId !== null.

Calls: src/electron/utils/close.ts:29 exitApp (depth 0); src/electron/ai/stt/SpeechToTextManager.ts:46 stop (depth 1); src/electron/ai/stt/SpeechToTextManager.ts:50 stopInternal (depth 2); src/electron/ai/stt/models/NemotronTranscriber.ts:55 stop (depth 3); src/electron/ai/stt/models/NemotronTranscriber.ts:173 clearStallTimer (depth 4); src/electron/ai/stt/models/NemotronTranscriber.ts:165 post (depth 4); src/electron/ai/stt/models/NemotronTranscriber.ts:65 <callback> (depth 4); src/electron/ai/stt/models/NemotronTranscriber.ts:67 <callback> (depth 5); src/electron/ai/stt/models/nemotronWorker.ts:107 stop (depth 4); src/electron/ai/stt/models/nemotronWorker.ts:182 flushTail (depth 5); src/electron/ai/stt/models/nemotronWorker.ts:236 closeUtterance (depth 5); src/electron/ai/stt/models/nemotronWorker.ts:188 emitFromHypothesis (depth 6); src/electron/ai/stt/models/nemotronWorker.ts:172 readHypothesis (depth 5); src/electron/IPC/main.ts:9 sendToMain (depth 3); src/electron/streaming/RtmpStreamer.ts:224 stopAll (depth 1); src/electron/streaming/RtmpStreamer.ts:194 stop (depth 2).

Effects: src/electron/utils/close.ts:40 presentation OutputHelper.Lifecycle.closeAllOutputs ; src/electron/ai/stt/SpeechToTextManager.ts:62 ipc sendToMain(ToMain.AI_TRANSCRIPT, { text: "", interim: true }) ; src/electron/ai/stt/SpeechToTextManager.ts:63 ipc sendToMain(ToMain.AI_STATUS, { state: "stopped" }) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) ; src/electron/output/helpers/OutputLifecycle.ts:955 presentation OutputHelper.getKeys().map ; src/electron/output/helpers/OutputLifecycle.ts:955 presentation OutputHelper.getKeys ; src/electron/output/helpers/OutputLifecycle.ts:874 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:878 presentation OutputHelper.deleteOutput ; src/electron/capture/helpers/CaptureLifecycle.ts:186 presentation OutputHelper.getOutput ; src/electron/capture/helpers/CaptureLifecycle.ts:200 presentation OutputHelper.Lifecycle.releaseOsrCaptureTextures ; src/electron/capture/helpers/CaptureLifecycle.ts:217 presentation OutputHelper.getAllOutputs ; src/electron/capture/helpers/CaptureLifecycle.ts:253 presentation OutputHelper.getAllOutputs ; src/electron/output/helpers/OutputLifecycle.ts:92 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputLifecycle.ts:101 presentation OutputHelper.Bounds.disableWindowMoveListener .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 104; depth cutoffs: 60. Full edges/effects/conditions in JSON.
