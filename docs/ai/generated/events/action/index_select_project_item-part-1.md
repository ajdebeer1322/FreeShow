# action/index_select_project_item (1)

## index_select_project_item — event-06d9532bf7a19306f3

[code] [src/frontend/components/actions/api.ts:221](../../../../../src/frontend/components/actions/api.ts#L221); (data: API_index) => selectProjectShow(data.index). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:221 index_select_project_item (depth 0); src/frontend/components/helpers/showActions.ts:103 selectProjectShow (depth 1); src/frontend/components/helpers/showActions.ts:113 <callback> (depth 2); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 3); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 4); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 5); src/frontend/components/helpers/setShow.ts:175 loadSingleShow (depth 5); src/frontend/components/helpers/setShow.ts:184 <callback> (depth 6); src/frontend/components/helpers/setShow.ts:247 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:125 swichProjectItem (depth 3); src/frontend/components/helpers/showActions.ts:136 <callback> (depth 4); src/frontend/components/helpers/showActions.ts:145 <callback> (depth 4).

Effects: src/frontend/components/helpers/showActions.ts:121 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/helpers/showActions.ts:122 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:186 ipc requestMain(Main.SHOW, { name: get(shows)&#91;id&#93;?.name, id }) ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/showActions.ts:136 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 5. Full edges/effects/conditions in JSON.
