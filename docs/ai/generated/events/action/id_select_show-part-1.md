# action/id_select_show (1)

## id_select_show — event-7eedbd9b526795a510

[code] [src/frontend/components/actions/api.ts:226](../../../../../src/frontend/components/actions/api.ts#L226); (data: API_id) => selectShowById(data.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:226 id_select_show (depth 0); src/frontend/components/actions/apiHelper.ts:35 selectShowById (depth 1); src/frontend/components/actions/apiHelper.ts:59 setActiveShowById (depth 2); src/frontend/components/actions/apiHelper.ts:62 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:40 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/actions/apiHelper.ts:41 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/actions/apiHelper.ts:64 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
