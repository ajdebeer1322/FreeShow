# action/start_scripture (1)

## start_scripture — event-dc09df1f0d94a5d2f9

[code] [src/frontend/components/actions/api.ts:279](../../../../../src/frontend/components/actions/api.ts#L279); (data: API_scripture) => startScripture(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:279 start_scripture (depth 0); src/frontend/components/actions/apiHelper.ts:699 startScripture (depth 1); src/frontend/components/actions/apiHelper.ts:711 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:2208 resolveScriptureReference (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6); src/frontend/IPC/main.ts:28 cleanup (depth 6); src/frontend/IPC/main.ts:36 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:98 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:111 <callback> (depth 5).

Effects: src/frontend/components/actions/apiHelper.ts:725 store-write src/frontend/stores.ts#activePage ; src/frontend/components/actions/apiHelper.ts:727 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/actions/apiHelper.ts:729 store-write src/frontend/stores.ts#openScripture ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/historyHelpers.ts:765 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 2. Full edges/effects/conditions in JSON.
