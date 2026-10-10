# automatic/src_frontend_IPC_responsesMain.ts (1)

## setTimeout — event-95117e943416640239

[code] [src/frontend/IPC/responsesMain.ts:255](../../../../../src/frontend/IPC/responsesMain.ts#L255); () => { mediaDownloads.update((d) => { const updated = new Map(d) updated.delete(data.url) return updated }) }. resolved-within-bound.

Conditions: src/frontend/IPC/responsesMain.ts:253 data.status === "complete" \|\| data.status === "error".

Calls: src/frontend/IPC/responsesMain.ts:255 <callback> (depth 0); src/frontend/IPC/responsesMain.ts:256 <callback> (depth 1).

Effects: src/frontend/IPC/responsesMain.ts:256 store-write src/frontend/stores.ts#mediaDownloads .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-836c3d998339dad5b4

[code] [src/frontend/IPC/responsesMain.ts:279](../../../../../src/frontend/IPC/responsesMain.ts#L279); () => { pdfImports.update((current) => { const cleaned = new Map(current) cleaned.delete(data.filePath) return cleaned }) }. resolved-within-bound.

Conditions: src/frontend/IPC/responsesMain.ts:278 data.status === "complete" \|\| data.status === "error".

Calls: src/frontend/IPC/responsesMain.ts:280 <callback> (depth 0); src/frontend/IPC/responsesMain.ts:281 <callback> (depth 1).

Effects: src/frontend/IPC/responsesMain.ts:281 store-write src/frontend/stores.ts#pdfImports .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4708b2cdf43317693f

[code] [src/frontend/IPC/responsesMain.ts:354](../../../../../src/frontend/IPC/responsesMain.ts#L354); () => setupCloudSync(false). partial.

Conditions: src/frontend/IPC/responsesMain.ts:353 data.providerId === "churchApps"; src/frontend/IPC/responsesMain.ts:350 data.isFirstConnection.

Calls: src/frontend/IPC/responsesMain.ts:354 <callback> (depth 0); src/frontend/utils/cloudSync.ts:29 setupCloudSync (depth 1); src/frontend/utils/cloudSync.ts:16 queueProviderSync (depth 2); src/frontend/utils/cloudSync.ts:19 syncFinished (depth 2); src/frontend/utils/startup.ts:139 contentProviderSync (depth 3); src/frontend/utils/startup.ts:154 <callback> (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 5); src/frontend/utils/startup.ts:167 <callback> (depth 4); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/utils/cloudSync.ts:39 <callback> (depth 2); src/frontend/utils/cloudSync.ts:116 syncWithCloud (depth 2).

Effects: src/frontend/utils/cloudSync.ts:60 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/cloudSync.ts:61 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:77 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:78 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:38 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:51 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:56 ipc requestMain(Main.GET_TEAMS) ; src/frontend/utils/startup.ts:164 ipc sendMain(Main.PROVIDER_STARTUP_LOAD, { providerId, scope, data, cloudOnly }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/startup.ts:172 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/startup.ts:173 store-write src/frontend/stores.ts#activePopup ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/cloudSync.ts:39 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 18; depth cutoffs: 15. Full edges/effects/conditions in JSON.
