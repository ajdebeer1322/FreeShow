# automatic/src_electron_data_downloadMedia.ts (1)

## setTimeout — event-be8d16719133f4b3cd

[code] [src/electron/data/downloadMedia.ts:171](../../../../../src/electron/data/downloadMedia.ts#L171); () => { console.error('File timed out: ${file.name}') next() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/data/downloadMedia.ts:172 <callback> (depth 0); src/electron/data/downloadMedia.ts:190 next (depth 1); src/electron/data/downloadMedia.ts:93 initDownload (depth 2); src/electron/utils/helpers.ts:39 waitUntilValueIsDefined (depth 3); src/electron/utils/helpers.ts:40 <callback> (depth 4); src/electron/utils/helpers.ts:44 <callback> (depth 5); src/electron/utils/helpers.ts:57 exit (depth 6); src/electron/utils/helpers.ts:49 <callback> (depth 5); src/electron/utils/helpers.ts:57 exit (depth 5); src/electron/data/downloadMedia.ts:112 <callback> (depth 3); src/electron/data/downloadMedia.ts:158 startDownload (depth 3); src/electron/utils/files.ts:305 makeDir (depth 4); src/electron/IPC/main.ts:9 sendToMain (depth 5); src/electron/data/downloadMedia.ts:131 streamDownload (depth 4); src/electron/data/downloadMedia.ts:142 <callback> (depth 5); src/electron/data/downloadMedia.ts:143 <callback> (depth 6).

Effects: src/electron/data/downloadMedia.ts:183 ipc sendToMain(ToMain.LESSONS_DONE, { showId: data.showId, status: { finished: downloadCount, failed: failedDownloads } }) ; src/electron/utils/files.ts:310 ipc sendToMain(ToMain.ALERT, "Error: Could not create folder at: " + folderPath + "!") ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) ; src/electron/data/downloadMedia.ts:132 network fetch ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) ; src/electron/data/downloadMedia.ts:199 ipc sendToMain(ToMain.LESSONS_DONE, { showId: data.showId, status: { finished: downloadCount, failed: failedDownloads } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 20; depth cutoffs: 1. Full edges/effects/conditions in JSON.
