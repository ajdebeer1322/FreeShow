# automatic/src_electron_utils_files.ts (1)

## setTimeout — event-b19fd94d84019f3100

[code] [src/electron/utils/files.ts:1035](../../../../../src/electron/utils/files.ts#L1035); async () => { const stats = await getFileStatsAsync(filePath) if (!stats) return knownFiles.add(filename) if (stats.birthtimeMs < Date.now() - ONE_MINUTE) return if (!allRecentFile. partial.

Conditions: src/electron/utils/files.ts:1037 !stats; src/electron/utils/files.ts:1040 stats.birthtimeMs < Date.now() - ONE_MINUTE; src/electron/utils/files.ts:1042 !allRecentFiles.includes(filePath).

Calls: src/electron/utils/files.ts:1035 <callback> (depth 0); src/electron/utils/files.ts:275 getFileStatsAsync (depth 1); src/electron/utils/files.ts:276 <callback> (depth 2); src/electron/utils/files.ts:278 <callback> (depth 3); src/electron/IPC/main.ts:9 sendToMain (depth 1).

Effects: src/electron/utils/files.ts:1043 ipc sendToMain(ToMain.RECENTLY_ADDED_FILES, { paths: allRecentFiles }) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 0. Full edges/effects/conditions in JSON.
