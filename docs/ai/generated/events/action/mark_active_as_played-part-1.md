# action/mark_active_as_played (1)

## mark_active_as_played — event-656929712793b3fc6f

[code] [src/frontend/components/actions/api.ts:223](../../../../../src/frontend/components/actions/api.ts#L223); (data: API_toggle_specific) => markItemsAsPlayed("active", data.value). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:223 mark_active_as_played (depth 0); src/frontend/converters/project.ts:237 markItemsAsPlayed (depth 1); src/frontend/converters/project.ts:247 <callback> (depth 2); src/frontend/converters/project.ts:252 <callback> (depth 3).

Effects: src/frontend/converters/project.ts:247 store-write src/frontend/stores.ts#projects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
