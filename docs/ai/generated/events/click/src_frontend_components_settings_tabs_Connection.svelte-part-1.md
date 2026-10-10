# click/src_frontend_components_settings_tabs_Connection.svelte (1)

## click — event-b1c9f1f90b303f2d00

[code] [src/frontend/components/settings/tabs/Connection.svelte:229](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L229); () => { popupData.set({ ip, id: server.id }) activePopup.set("connect") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/settings/tabs/Connection.svelte:230 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/tabs/Connection.svelte:231 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-63622e562a69edaaaa

[code] [src/frontend/components/settings/tabs/Connection.svelte:266](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L266); () => { popupData.set({ remoteController: true }) activePopup.set("connect") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/settings/tabs/Connection.svelte:267 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/tabs/Connection.svelte:268 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c6e58461ecd1db04b2

[code] [src/frontend/components/settings/tabs/Connection.svelte:286](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L286); () => contentProviderConnect("planningcenter"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-412c57fae56fe6ce8c

[code] [src/frontend/components/settings/tabs/Connection.svelte:292](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L292); () => contentProviderConnect("churchApps"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-124a5e7eefdec9959d

[code] [src/frontend/components/settings/tabs/Connection.svelte:298](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L298); () => contentProviderConnect("amazinglife"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-23562893628a82681c

[code] [src/frontend/components/settings/tabs/Connection.svelte:304](../../../../../src/frontend/components/settings/tabs/Connection.svelte#L304); () => contentProviderConnect("onstage"). partial.

Conditions: src/frontend/components/settings/tabs/Connection.svelte:281 !$providerConnections.planningcenter && (!$providerConnections.churchApps \|\| cloudOnly.churchApps) && !$providerConnections.amazinglife && !$providerConnections.onstage.

Calls: src/frontend/components/settings/tabs/Connection.svelte:110 contentProviderConnect (depth 1); src/frontend/components/settings/tabs/Connection.svelte:113 <callback> (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/components/settings/tabs/Connection.svelte:127 <callback> (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/settings/tabs/Connection.svelte:134 <callback> (depth 2); src/frontend/components/settings/tabs/Connection.svelte:136 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/Connection.svelte:119 store-write src/frontend/stores.ts#cloudSyncData ; src/frontend/components/settings/tabs/Connection.svelte:123 ipc sendMain(Main.PROVIDER_LOAD_SERVICES, { providerId, cloudOnly: cloudOnly&#91;providerId&#93; \|\| false }) ; src/frontend/components/settings/tabs/Connection.svelte:113 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:127 store-write src/frontend/stores.ts#special ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/settings/tabs/Connection.svelte:134 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId }, (a) => { if (!a?.success) return providerConnections.update((c) => { c&#91;providerId&#93; = false return c }) }) ; src/frontend/components/settings/tabs/Connection.svelte:136 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
