# Cloud sync and backup

## Purpose

[code] Synchronize edited/deleted content using per-item bookkeeping and create/restore portable archive backups. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/cloud/syncLedger.ts](../generated/files/src_electron_cloud_syncLedger.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/cloud/syncManager.ts](../generated/files/src_electron_cloud_syncManager.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/cloudSync.ts](../generated/files/src_frontend_utils_cloudSync.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/data/backup.ts](../generated/files/src_electron_data_backup.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/data/store.ts](../generated/files/src_electron_data_store.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Sync ledger tracks item create/delete intent rather than treating absence alone as a universal update. ([src/electron/cloud/syncLedger.ts:2](../../../src/electron/cloud/syncLedger.ts#L2))
2. [code] Main-process sync coordinates data/provider operations with renderer requests. ([src/electron/cloud/syncManager.ts:16](../../../src/electron/cloud/syncManager.ts#L16))
3. [code] Renderer sync state coordinates operating saves and cloud actions. ([src/frontend/utils/cloudSync.ts:48](../../../src/frontend/utils/cloudSync.ts#L48))
4. [code] Backup collects portable grouped stores and separately enumerates show files. ([src/electron/data/backup.ts:22](../../../src/electron/data/backup.ts#L22))
5. [code] Cloud backups include Bible/media data through a distinct branch; ordinary local archives have different membership. ([src/electron/data/backup.ts:29](../../../src/electron/data/backup.ts#L29))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 11 files, 21 referenced stores, 13 concrete message keys, 15 timing entries. [Complete dependency index](cloud-backup.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#cloudSyncData](../generated/stores/src_frontend_stores.ts_cloudSyncData.md)
- [code] [src/frontend/stores.ts#cloudUsers](../generated/stores/src_frontend_stores.ts_cloudUsers.md)
- [code] [src/frontend/stores.ts#deletedShows](../generated/stores/src_frontend_stores.ts_deletedShows.md)
- [code] [src/frontend/stores.ts#deviceId](../generated/stores/src_frontend_stores.ts_deviceId.md)
- [code] [src/frontend/stores.ts#driveData](../generated/stores/src_frontend_stores.ts_driveData.md)
- [code] [src/frontend/stores.ts#driveKeys](../generated/stores/src_frontend_stores.ts_driveKeys.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#popupData](../generated/stores/src_frontend_stores.ts_popupData.md)
- [code] [src/frontend/stores.ts#providerConnections](../generated/stores/src_frontend_stores.ts_providerConnections.md)
- [code] [src/frontend/stores.ts#renamedShows](../generated/stores/src_frontend_stores.ts_renamedShows.md)
- [code] [src/frontend/stores.ts#saved](../generated/stores/src_frontend_stores.ts_saved.md)
- [code] [src/frontend/stores.ts#scripturesCache](../generated/stores/src_frontend_stores.ts_scripturesCache.md)
- [code] [src/frontend/stores.ts#shows](../generated/stores/src_frontend_stores.ts_shows.md)
- [code] [src/frontend/stores.ts#showsCache](../generated/stores/src_frontend_stores.ts_showsCache.md)
- [code] [src/frontend/stores.ts#special](../generated/stores/src_frontend_stores.ts_special.md)

[code] Message families: [CLOUD](../generated/channels/CLOUD.md), [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Preserve deletion ledger intent to avoid resurrecting removed items. ([src/electron/cloud/syncLedger.ts:11](../../../src/electron/cloud/syncLedger.ts#L11))
- [code] An ordering comment explicitly records missing historical rationale; do not invent a reason for it. ([src/electron/data/backup.ts:33](../../../src/electron/data/backup.ts#L33))
- [code] Keep portable/local store membership deliberate when adding saved data. ([src/electron/data/store.ts:31](../../../src/electron/data/store.ts#L31))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/electron/cloud/syncLedger.test.ts:157](../../../src/electron/cloud/syncLedger.test.ts#L157): // ← King James (A's) is gone: the bug
- [code] [src/electron/cloud/syncManager.ts:81](../../../src/electron/cloud/syncManager.ts#L81): // WIP write changes
- [code] [src/frontend/utils/cloudSync.ts:104](../../../src/frontend/utils/cloudSync.ts#L104): // ensure previous popup is closed first to prevent Svelte bug "locking" popup

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-d8977510d8dcc3d0](../history/records/src_frontend_utils_cloudSync.ts-1.md): setTimeout: 250 (250 ms).
- [code] [D-timer-91ce986820e52e49](../history/records/src_frontend_utils_cloudSync.ts-1.md): wait: 100 (100 ms).
- [code] [D-workaround-aaf1d709f51e81df](../history/records/src_frontend_utils_cloudSync.ts-1.md): // ensure previous popup is closed first to prevent Svelte bug "locking" popup.

[code] All 18 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
