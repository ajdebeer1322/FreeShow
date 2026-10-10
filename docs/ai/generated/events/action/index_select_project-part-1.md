# action/index_select_project (1)

## index_select_project — event-83672fb6ebe3a361bf

[code] [src/frontend/components/actions/api.ts:217](../../../../../src/frontend/components/actions/api.ts#L217); (data: API_index) => selectProjectByIndex(data.index). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:217 index_select_project (depth 0); src/frontend/components/actions/apiHelper.ts:99 selectProjectByIndex (depth 1); src/frontend/components/helpers/array.ts:42 sortByName (depth 2); src/frontend/components/helpers/array.ts:45 <callback> (depth 3); src/frontend/components/helpers/array.ts:46 <callback> (depth 3); src/frontend/components/helpers/array.ts:148 removeDeleted (depth 2); src/frontend/components/helpers/array.ts:150 <callback> (depth 3); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:109 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/actions/apiHelper.ts:110 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_index. [External/internal input routes](../inputs.json) retain transport and permission limits.
