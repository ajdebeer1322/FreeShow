# action/change_layout (1)

## change_layout — event-b34150efede551cb28

[code] [src/frontend/components/actions/api.ts:229](../../../../../src/frontend/components/actions/api.ts#L229); (data: API_layout) => changeShowLayout(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:229 change_layout (depth 0); src/frontend/components/actions/apiHelper.ts:570 changeShowLayout (depth 1); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 2); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 3); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 4); src/frontend/components/helpers/setShow.ts:175 loadSingleShow (depth 4); src/frontend/components/helpers/setShow.ts:184 <callback> (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 6); src/frontend/components/helpers/setShow.ts:189 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:206 <callback> (depth 6); src/frontend/converters/importHelpers.ts:256 fixShowIssues (depth 6); src/frontend/components/helpers/setShow.ts:14 setShow (depth 6); src/frontend/components/helpers/setShow.ts:247 <callback> (depth 3); src/frontend/components/actions/apiHelper.ts:572 <callback> (depth 2).

Effects: src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:186 ipc requestMain(Main.SHOW, { name: get(shows)&#91;id&#93;?.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/helpers/setShow.ts:189 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:206 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/actions/apiHelper.ts:572 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 11. Full edges/effects/conditions in JSON.
