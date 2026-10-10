# action/id_select_project (1)

## id_select_project — event-2f6e11b9671bdc1c30

[code] [src/frontend/components/actions/api.ts:216](../../../../../src/frontend/components/actions/api.ts#L216); (data: API_id) => selectProjectById(data.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:216 id_select_project (depth 0); src/frontend/components/actions/apiHelper.ts:93 selectProjectById (depth 1).

Effects: src/frontend/components/actions/apiHelper.ts:96 store-write src/frontend/stores.ts#activeProject .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
