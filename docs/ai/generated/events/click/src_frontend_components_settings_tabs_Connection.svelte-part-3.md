# click/src_frontend_components_settings_tabs_Connection.svelte (3)

## click — event-bfffbd26cfb4ed8464

[code] [src/frontend/components/settings/tabs/Connection.svelte:350](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L350); () => activePopup.set("sync_categories"). resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps.

Calls: no function target resolved.

Effects: src/frontend/components/settings/tabs/Connection.svelte:350 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a4be653f536eb5a939

[code] [src/frontend/components/settings/tabs/Connection.svelte:351](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L351); () => sendMain(Main.URL, "https://b1.church"). resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-aa0344b32b4c49b2d4

[code] [src/frontend/components/settings/tabs/Connection.svelte:366](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L366); () => contentProviderConnect("amazinglife"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps; src/frontend/components/settings/tabs/Connection.svelte:361 $providerConnections.amazinglife.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a036b87c16a011129e

[code] [src/frontend/components/settings/tabs/Connection.svelte:379](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L379); () => contentProviderConnect("onstage"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps; src/frontend/components/settings/tabs/Connection.svelte:361 $providerConnections.amazinglife; src/frontend/components/settings/tabs/Connection.svelte:374 $providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-29ac9efdf155dd7466

[code] [src/frontend/components/settings/tabs/Connection.svelte:382](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L382); syncContentProvider. partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps; src/frontend/components/settings/tabs/Connection.svelte:361 $providerConnections.amazinglife; src/frontend/components/settings/tabs/Connection.svelte:374 $providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:144 syncContentProvider (depth 0); src/frontend/utils/startup.ts:139 contentProviderSync (depth 1); src/frontend/utils/cloudSync.ts:29 setupCloudSync (depth 2); src/frontend/utils/cloudSync.ts:16 queueProviderSync (depth 3); src/frontend/utils/cloudSync.ts:19 syncFinished (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/utils/cloudSync.ts:39 <callback> (depth 3); src/frontend/utils/cloudSync.ts:116 syncWithCloud (depth 3); src/frontend/utils/save.ts:124 save (depth 4); src/frontend/components/helpers/output.ts:112 updateSyncedOutputs (depth 5); src/frontend/components/helpers/output.ts:115 <callback> (depth 6).

Effects: src/frontend/components/settings/tabs/Connection.svelte:147 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/settings/tabs/Connection.svelte:148 store-write src/frontend/stores.ts#activePage ; src/frontend/components/settings/tabs/Connection.svelte:149 store-write src/frontend/stores.ts#notFound ; src/frontend/utils/cloudSync.ts:60 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/cloudSync.ts:61 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:77 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/cloudSync.ts:78 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/cloudSync.ts:38 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:51 ipc requestMain(Main.CAN_SYNC) ; src/frontend/utils/cloudSync.ts:56 ipc requestMain(Main.GET_TEAMS) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/utils/cloudSync.ts:39 store-write src/frontend/stores.ts#providerConnections ; src/frontend/utils/cloudSync.ts:149 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 20. Full edges/effects/conditions in JSON.

## click — event-a5bf8dd0f1f9a0739c

[code] [src/frontend/components/settings/tabs/Connection.svelte:385](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L385); () => sendMain(Main.URL, "https://getonstage.app"). resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage; src/frontend/components/settings/tabs/Connection.svelte:308 $providerConnections.planningcenter; src/frontend/components/settings/tabs/Connection.svelte:339 $providerConnections.churchApps && !cloudOnly.churchApps; src/frontend/components/settings/tabs/Connection.svelte:361 $providerConnections.amazinglife; src/frontend/components/settings/tabs/Connection.svelte:374 $providerConnections.onstage.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
