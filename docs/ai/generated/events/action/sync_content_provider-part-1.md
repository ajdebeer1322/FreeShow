# action/sync_content_provider (1)

## sync_content_provider — event-c3c21c5f2b9aa1144d

[code] [src/frontend/components/actions/api.ts:348](../../../../../src/frontend/components/actions/api.ts#L348); () => contentProviderSync(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:348 sync_content_provider (depth 0); src/frontend/utils/startup.ts:139 contentProviderSync (depth 1); src/frontend/utils/cloudSync.ts:29 setupCloudSync (depth 2); src/frontend/utils/cloudSync.ts:16 queueProviderSync (depth 3); src/frontend/utils/cloudSync.ts:19 syncFinished (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/utils/cloudSync.ts:39 <callback> (depth 3); src/frontend/utils/cloudSync.ts:116 syncWithCloud (depth 3); src/frontend/utils/save.ts:124 save (depth 4); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 5); src/frontend/components/helpers/output.ts:115 <callback> (depth 6).

Effects: src/frontend/utils/cloudSync.ts:60 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/cloudSync.ts:61 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:77 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:78 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:38 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:51 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:56 ipc requestMain(Main.GET_TEAMS) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/cloudSync.ts:39 store-write src/frontend/stores.ts#providerConnections ; src/frontend/utils/cloudSync.ts:149 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/cloudSync.ts:150 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/utils/cloudSync.ts:151 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/cloudSync.ts:152 store-write src/frontend/stores.ts#renamedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 20. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
