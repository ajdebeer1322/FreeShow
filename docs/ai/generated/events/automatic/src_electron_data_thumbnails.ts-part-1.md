# automatic/src_electron_data_thumbnails.ts (1)

## setTimeout — event-831444b1b4851772b9

[code] [src/electron/data/thumbnails.ts:215](../../../../../src/electron/data/thumbnails.ts#L215); () => { mediaBeingCaptured = Math.max(0, mediaBeingCaptured - 1) captureTimeouts.delete(data.id) failedPaths.push(data.id) generationFinished(data.id) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/data/thumbnails.ts:215 <callback> (depth 0); src/electron/data/thumbnails.ts:117 generationFinished (depth 1); src/electron/data/thumbnails.ts:109 nextInQueue (depth 2); src/electron/data/thumbnails.ts:124 generateThumbnail (depth 3); src/electron/data/thumbnails.ts:360 getExtension (depth 4); src/electron/utils/files.ts:89 doesPathExistAsync (depth 4); src/electron/utils/files.ts:90 <callback> (depth 5); src/electron/utils/files.ts:91 <callback> (depth 6); src/electron/data/thumbnails.ts:185 generate (depth 4); src/electron/data/thumbnails.ts:364 parseSize (depth 5); src/electron/data/thumbnails.ts:207 captureWithCanvas (depth 5); src/electron/IPC/main.ts:9 sendToMain (depth 6); src/electron/utils/helpers.ts:39 waitUntilValueIsDefined (depth 6); src/electron/data/thumbnails.ts:229 <callback> (depth 6).

Effects: src/electron/data/thumbnails.ts:223 ipc sendToMain(ToMain.CAPTURE_CANVAS, data) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setTimeout — event-6e77e91631ae6af8cc

[code] [src/electron/data/thumbnails.ts:263](../../../../../src/electron/data/thumbnails.ts#L263); () => generationFinished(data.id!). partial.

Conditions: src/electron/data/thumbnails.ts:260 (!dataURL && !buffer) \|\| !savePath.

Calls: src/electron/data/thumbnails.ts:263 <callback> (depth 0); src/electron/data/thumbnails.ts:117 generationFinished (depth 1); src/electron/data/thumbnails.ts:109 nextInQueue (depth 2); src/electron/data/thumbnails.ts:124 generateThumbnail (depth 3); src/electron/data/thumbnails.ts:360 getExtension (depth 4); src/electron/utils/files.ts:89 doesPathExistAsync (depth 4); src/electron/utils/files.ts:90 <callback> (depth 5); src/electron/utils/files.ts:91 <callback> (depth 6); src/electron/data/thumbnails.ts:185 generate (depth 4); src/electron/data/thumbnails.ts:364 parseSize (depth 5); src/electron/data/thumbnails.ts:207 captureWithCanvas (depth 5); src/electron/data/thumbnails.ts:215 <callback> (depth 6); src/electron/IPC/main.ts:9 sendToMain (depth 6); src/electron/utils/helpers.ts:39 waitUntilValueIsDefined (depth 6); src/electron/data/thumbnails.ts:229 <callback> (depth 6).

Effects: src/electron/data/thumbnails.ts:223 ipc sendToMain(ToMain.CAPTURE_CANVAS, data) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## setTimeout — event-18911f1ba248778d0b

[code] [src/electron/data/thumbnails.ts:410](../../../../../src/electron/data/thumbnails.ts#L410); () => { if (window.isDestroyed()) return resolve(null) window.webContents.send(OUTPUT, { channel: "OUTPUTS", data: data.output }) window.webContents.setAudioMuted(true) // wait for. partial.

Conditions: src/electron/data/thumbnails.ts:411 window.isDestroyed(); src/electron/data/thumbnails.ts:418 window.isDestroyed().

Calls: src/electron/data/thumbnails.ts:410 <callback> (depth 0); src/electron/data/thumbnails.ts:417 <callback> (depth 1); src/electron/output/OutputHelper.ts:63 deleteOutput (depth 2).

Effects: src/electron/data/thumbnails.ts:413 ipc window.webContents.send(OUTPUT, { channel: "OUTPUTS", data: data.output }) ; src/electron/data/thumbnails.ts:425 presentation OutputHelper.deleteOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-eadb989ec31f40010f

[code] [src/electron/data/thumbnails.ts:417](../../../../../src/electron/data/thumbnails.ts#L417); async () => { if (window.isDestroyed()) return resolve(null) const page = await window.capturePage() const base64 = page.toDataURL({ scaleFactor: 1 }) resolve({ base64 }) window.de. partial.

Conditions: src/electron/data/thumbnails.ts:418 window.isDestroyed().

Calls: src/electron/data/thumbnails.ts:417 <callback> (depth 0); src/electron/output/OutputHelper.ts:63 deleteOutput (depth 1).

Effects: src/electron/data/thumbnails.ts:425 presentation OutputHelper.deleteOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
