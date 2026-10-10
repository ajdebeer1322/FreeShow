# click/src_frontend_components_drawer_info_PlayerInfo.svelte (1)

## click — event-8fa8ed44fe00bd5506

[code] [src/frontend/components/drawer/info/PlayerInfo.svelte:51](../../../../../src/frontend/components/drawer/info/PlayerInfo.svelte#L51); () => send(OUTPUT, &#91;"CLOSE_AD"&#93;). partial.

Conditions: src/frontend/components/drawer/info/PlayerInfo.svelte:45 active === "youtube"; src/frontend/components/drawer/info/PlayerInfo.svelte:46 isPlayingYoutube.

Calls: src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6); src/frontend/utils/request.ts:6 <callback> (depth 2).

Effects: src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e3c088e264c2637ba2

[code] [src/frontend/components/drawer/info/PlayerInfo.svelte:60](../../../../../src/frontend/components/drawer/info/PlayerInfo.svelte#L60); canvaDisconnect. partial.

Conditions: src/frontend/components/drawer/info/PlayerInfo.svelte:45 active === "youtube"; src/frontend/components/drawer/info/PlayerInfo.svelte:56 active === "canva"; src/frontend/components/drawer/info/PlayerInfo.svelte:57 optionsOpen; src/frontend/components/drawer/info/PlayerInfo.svelte:59 $providerConnections.canva; src/frontend/components/drawer/info/PlayerInfo.svelte:35 result?.success.

Calls: src/frontend/components/drawer/info/PlayerInfo.svelte:33 canvaDisconnect (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/components/drawer/info/PlayerInfo.svelte:34 <callback> (depth 1); src/frontend/components/drawer/info/PlayerInfo.svelte:36 <callback> (depth 2).

Effects: src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/info/PlayerInfo.svelte:34 ipc requestMain(Main.PROVIDER_DISCONNECT, { providerId: "canva" }, (result) => { if (result?.success) { providerConnections.update((c) => { c.canva = false return c }) } }) ; src/frontend/components/drawer/info/PlayerInfo.svelte:36 store-write src/frontend/stores.ts#providerConnections .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
