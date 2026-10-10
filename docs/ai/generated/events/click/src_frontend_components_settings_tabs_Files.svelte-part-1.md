# click/src_frontend_components_settings_tabs_Files.svelte (1)

## click — event-1123971b18f408c9d3

[code] [src/frontend/components/settings/tabs/Files.svelte:286](../../../../../src/frontend/components/settings/tabs/Files.svelte#L286); () => contentProviderConnect("churchApps"). partial.

Conditions: src/frontend/components/settings/tabs/Files.svelte:284 !$providerConnections.churchApps \|\| (!$special.churchAppsCloudOnly && !$cloudSyncData.enabled).

Calls: src/frontend/components/settings/tabs/Files.svelte:192 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Files.svelte:195 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Files.svelte:226 toggleSync (depth 2); src/frontend/utils/cloudSync.ts:29 setupCloudSync (depth 3); src/frontend/utils/cloudSync.ts:16 queueProviderSync (depth 4); src/frontend/utils/cloudSync.ts:19 syncFinished (depth 4); src/frontend/utils/startup.ts:139 contentProviderSync (depth 5); src/frontend/utils/startup.ts:154 <callback> (depth 6); src/frontend/utils/startup.ts:167 <callback> (depth 6); src/frontend/IPC/main.ts:19 requestMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 5); src/frontend/IPC/main.ts:36 <callback> (depth 5); src/frontend/IPC/main.ts:37 <callback> (depth 6); src/frontend/IPC/main.ts:48 <callback> (depth 6); src/frontend/utils/cloudSync.ts:39 <callback> (depth 4).

Effects: src/frontend/components/settings/tabs/Files.svelte:194 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:204 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:220 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:200 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: true }) ; src/frontend/components/settings/tabs/Files.svelte:195 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/cloudSync.ts:60 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/cloudSync.ts:61 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:77 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:78 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:38 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:51 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:56 ipc requestMain(Main.GET_TEAMS) ; src/frontend/utils/startup.ts:164 ipc sendMain(Main.PROVIDER_STARTUP_LOAD, { providerId, scope, data, cloudOnly }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 16; depth cutoffs: 29. Full edges/effects/conditions in JSON.

## click — event-558893dde4399692cb

[code] [src/frontend/components/settings/tabs/Files.svelte:292](../../../../../src/frontend/components/settings/tabs/Files.svelte#L292); () => contentProviderConnect("churchApps"). partial.

Conditions: src/frontend/components/settings/tabs/Files.svelte:284 !$providerConnections.churchApps \|\| (!$special.churchAppsCloudOnly && !$cloudSyncData.enabled).

Calls: src/frontend/components/settings/tabs/Files.svelte:192 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Files.svelte:195 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Files.svelte:226 toggleSync (depth 2); src/frontend/utils/cloudSync.ts:29 setupCloudSync (depth 3); src/frontend/utils/cloudSync.ts:16 queueProviderSync (depth 4); src/frontend/utils/cloudSync.ts:19 syncFinished (depth 4); src/frontend/utils/startup.ts:139 contentProviderSync (depth 5); src/frontend/utils/startup.ts:154 <callback> (depth 6); src/frontend/utils/startup.ts:167 <callback> (depth 6); src/frontend/IPC/main.ts:19 requestMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 5); src/frontend/IPC/main.ts:36 <callback> (depth 5); src/frontend/IPC/main.ts:37 <callback> (depth 6); src/frontend/IPC/main.ts:48 <callback> (depth 6); src/frontend/utils/cloudSync.ts:39 <callback> (depth 4).

Effects: src/frontend/components/settings/tabs/Files.svelte:194 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:204 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:220 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Files.svelte:200 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: true }) ; src/frontend/components/settings/tabs/Files.svelte:195 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/cloudSync.ts:60 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/cloudSync.ts:61 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:77 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:78 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:38 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:51 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:56 ipc requestMain(Main.GET_TEAMS) ; src/frontend/utils/startup.ts:164 ipc sendMain(Main.PROVIDER_STARTUP_LOAD, { providerId, scope, data, cloudOnly }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 16; depth cutoffs: 29. Full edges/effects/conditions in JSON.

## click — event-8bc8682c23c17ca563

[code] [src/frontend/components/settings/tabs/Files.svelte:296](../../../../../src/frontend/components/settings/tabs/Files.svelte#L296); syncNow. partial.

Conditions: src/frontend/components/settings/tabs/Files.svelte:284 !$providerConnections.churchApps \|\| (!$special.churchAppsCloudOnly && !$cloudSyncData.enabled); src/frontend/components/settings/tabs/Files.svelte:295 $cloudSyncData.enabled.

Calls: src/frontend/components/settings/tabs/Files.svelte:234 syncNow (depth 0); src/frontend/utils/save.ts:124 save (depth 1); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 2); src/frontend/components/helpers/output.ts:115 <callback> (depth 3); src/frontend/utils/common.ts:117 startAutosave (depth 2); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/utils/common.ts:129 <callback> (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 2); src/frontend/utils/common.ts:39 <callback> (depth 3); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 2); src/frontend/components/actions/actions.ts:159 <callback> (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 4); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:49 <callback> (depth 5); src/frontend/components/actions/actions.ts:74 runTrigger (depth 5).

Effects: src/frontend/components/settings/tabs/Files.svelte:235 store-write src/frontend/stores.ts#saved ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:139 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:249 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/save.ts:250 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/output.ts:115 store-write src/frontend/stores.ts#syncedOutputs ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/save.ts:144 store-write src/frontend/stores.ts#special ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## click — event-e710524681781c6adb

[code] [src/frontend/components/settings/tabs/Files.svelte:309](../../../../../src/frontend/components/settings/tabs/Files.svelte#L309); changeTeam. partial.

Conditions: src/frontend/components/settings/tabs/Files.svelte:284 !$providerConnections.churchApps \|\| (!$special.churchAppsCloudOnly && !$cloudSyncData.enabled); src/frontend/components/settings/tabs/Files.svelte:308 $cloudSyncData.enabled && ($cloudSyncData.team?.count \|\| 0) > 1.

Calls: src/frontend/utils/cloudSync.ts:82 changeTeam (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/utils/cloudSync.ts:85 <callback> (depth 1).

Effects: src/frontend/utils/cloudSync.ts:87 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:88 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:83 ipc requestMain(Main.GET_TEAMS) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c6daf74b6331d0db82

[code] [src/frontend/components/settings/tabs/Files.svelte:331](../../../../../src/frontend/components/settings/tabs/Files.svelte#L331); restoreCloudBackupState. partial.

Conditions: src/frontend/components/settings/tabs/Files.svelte:284 !$providerConnections.churchApps \|\| (!$special.churchAppsCloudOnly && !$cloudSyncData.enabled); src/frontend/components/settings/tabs/Files.svelte:240 !$cloudSyncData.id \|\| !$cloudSyncData.team?.churchId \|\| !$cloudSyncData.team?.id.

Calls: src/frontend/components/settings/tabs/Files.svelte:239 restoreCloudBackupState (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Files.svelte:244 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/settings/tabs/Files.svelte:245 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/settings/tabs/Files.svelte:242 ipc requestMain(Main.RESTORE_CLOUD_BACKUP, { id: "churchApps", churchId: $cloudSyncData.team.churchId, teamId: $cloudSyncData.team.id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
