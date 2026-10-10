# automatic/src_electron_cloud_syncManager.ts (1)

## setTimeout — event-b1c0cdd54a53344d68

[code] [src/electron/cloud/syncManager.ts:465](../../../../../src/electron/cloud/syncManager.ts#L465); async () => { try { await uploadBackupData() } catch (err) { console.error("Backup sync error:", err) } finally { await deleteFolderAsync(EXTRACT_LOCATION) console.log("Backup sync. partial.

Conditions: src/electron/cloud/syncManager.ts:463 willRunBackup.

Calls: src/electron/cloud/syncManager.ts:465 <callback> (depth 0); src/electron/cloud/syncManager.ts:493 uploadBackupData (depth 1); src/electron/cloud/ChurchAppsSyncManager.ts:179 getBackup (depth 2); src/electron/cloud/ChurchAppsSyncManager.ts:80 getData (depth 3); src/electron/cloud/ChurchAppsSyncManager.ts:85 <callback> (depth 4); src/electron/utils/requests.ts:8 httpsRequest (depth 5); src/electron/utils/requests.ts:12 cb (depth 6); src/electron/utils/requests.ts:46 <callback> (depth 6); src/electron/utils/requests.ts:146 <callback> (depth 6); src/electron/utils/requests.ts:154 <callback> (depth 6); src/electron/IPC/responsesMain.ts:511 createLog (depth 6); src/electron/IPC/responsesMain.ts:482 logError (depth 6); src/electron/cloud/ChurchAppsSyncManager.ts:88 response (depth 5); src/electron/cloud/ChurchAppsSyncManager.ts:145 isOffline (depth 6); src/electron/IPC/main.ts:9 sendToMain (depth 6); src/electron/cloud/syncManager.ts:510 upload (depth 2).

Effects: src/electron/utils/requests.ts:46 network https.request ; src/electron/cloud/ChurchAppsSyncManager.ts:102 ipc sendToMain(ToMain.ALERT, "Failed to get data: " + err.message) ; src/electron/cloud/ChurchAppsSyncManager.ts:148 ipc sendToMain(ToMain.ALERT, "Offline: Data will not be synced to the cloud.") ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) ; src/electron/utils/files.ts:310 ipc sendToMain(ToMain.ALERT, "Error: Could not create folder at: " + folderPath + "!") ; src/electron/cloud/ChurchAppsSyncManager.ts:168 network axios.post .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 53; depth cutoffs: 20. Full edges/effects/conditions in JSON.
