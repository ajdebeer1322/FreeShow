# automatic/src_frontend_utils_startup.ts (1)

## checkStartupActions — event-20bda8db2f5f4ce8ad

[code] [src/frontend/utils/startup.ts:77](../../../../../src/frontend/utils/startup.ts#L77); checkStartupActions. partial.

Conditions: src/frontend/utils/startup.ts:77 !hasProfiles \|\| get(activeProfile) !== null; src/frontend/components/actions/actions.ts:151 startupActionsTriggered.

Calls: src/frontend/components/actions/actions.ts:150 checkStartupActions (depth 0); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.

## setTimeout — event-5e1d33f45a15514abd

[code] [src/frontend/utils/startup.ts:102](../../../../../src/frontend/utils/startup.ts#L102); () => checkRamUsage(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/startup.ts:102 <callback> (depth 0); src/frontend/utils/startup.ts:120 checkRamUsage (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4).

Effects: src/frontend/utils/startup.ts:122 store-write src/frontend/stores.ts#special ; src/frontend/utils/startup.ts:121 ipc requestMain(Main.CHECK_RAM_USAGE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-e452e76248e6141bc6

[code] [src/frontend/utils/startup.ts:103](../../../../../src/frontend/utils/startup.ts#L103); () => checkRamUsage(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/startup.ts:103 <callback> (depth 0); src/frontend/utils/startup.ts:120 checkRamUsage (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4).

Effects: src/frontend/utils/startup.ts:122 store-write src/frontend/stores.ts#special ; src/frontend/utils/startup.ts:121 ipc requestMain(Main.CHECK_RAM_USAGE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a3bb156f55ab3950db

[code] [src/frontend/utils/startup.ts:167](../../../../../src/frontend/utils/startup.ts#L167); () => { if (get(cloudSyncData).id) return const hasDriveSync = typeof get(driveKeys) === "object" && Object.keys(get(driveKeys)).length if (!Object.keys(get(providerConnections)).l. resolved-within-bound.

Conditions: src/frontend/utils/startup.ts:168 get(cloudSyncData).id; src/frontend/utils/startup.ts:171 !Object.keys(get(providerConnections)).length && !get(activePopup) && Math.random() < (hasDriveSync ? 0.2 : 0.001).

Calls: src/frontend/utils/startup.ts:167 <callback> (depth 0).

Effects: src/frontend/utils/startup.ts:172 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/startup.ts:173 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
