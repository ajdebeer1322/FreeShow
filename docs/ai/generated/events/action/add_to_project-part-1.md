# action/add_to_project (1)

## add_to_project — event-8095ca59d8dbb7efd3

[code] [src/frontend/components/actions/api.ts:389](../../../../../src/frontend/components/actions/api.ts#L389); (data: API_add_to_project) => addToProject(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:389 add_to_project (depth 0); src/frontend/components/actions/apiHelper.ts:1194 addToProject (depth 1); src/frontend/components/actions/apiHelper.ts:1198 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:1199 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:1196 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/actions/apiHelper.ts:1198 store-write src/frontend/stores.ts#projects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_add_to_project. [External/internal input routes](../inputs.json) retain transport and permission limits.
