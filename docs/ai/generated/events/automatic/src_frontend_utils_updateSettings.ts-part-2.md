# automatic/src_frontend_utils_updateSettings.ts (2)

## setTimeout — event-54ff7833b34cb331ac

[code] [src/frontend/utils/updateSettings.ts:406](../../../../../src/frontend/utils/updateSettings.ts#L406); () => { sendMain(Main.WEBSOCKET_START, { port: get(ports).companion, password: v.password }) }. resolved-within-bound.

Conditions: src/frontend/utils/updateSettings.ts:405 v.enabled.

Calls: src/frontend/utils/updateSettings.ts:406 <callback> (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/utils/updateSettings.ts:407 ipc sendMain(Main.WEBSOCKET_START, { port: get(ports).companion, password: v.password }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d57d93de356ffeb0e7

[code] [src/frontend/utils/updateSettings.ts:418](../../../../../src/frontend/utils/updateSettings.ts#L418); () => projectView.set(true). resolved-within-bound.

Conditions: src/frontend/utils/updateSettings.ts:415 v.startupProjectsList.

Calls: src/frontend/utils/updateSettings.ts:418 <callback> (depth 0).

Effects: src/frontend/utils/updateSettings.ts:418 store-write src/frontend/stores.ts#projectView .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
