# menu/route_bible (1)

## route_bible — event-eb6fad7cb652becaf7

[code] [src/frontend/components/context/contextMenus.ts:216](../../../../../src/frontend/components/context/contextMenus.ts#L216); route_bible. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:995 route_bible (depth 0); src/frontend/components/drawer/bible/scripture.ts:2178 openActiveInRouteBible (depth 1); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 2); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 4); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 6); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 6); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 4); src/frontend/values/keys.ts:7 getKey (depth 5); src/frontend/values/keys.ts:15 decrypt (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/IPC/main.ts:19 requestMain (depth 6); src/frontend/components/drawer/bible/scripture.ts:98 <callback> (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:2186 ipc sendMain(Main.URL, routeBibleURL) ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 6. Full edges/effects/conditions in JSON.
