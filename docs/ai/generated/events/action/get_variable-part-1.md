# action/get_variable (1)

## get_variable — event-bc15c0a6b75ad2155d

[code] [src/frontend/components/actions/api.ts:426](../../../../../src/frontend/components/actions/api.ts#L426); (data: { id?: string; name?: string }) => getVariable(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:426 get_variable (depth 0); src/frontend/components/actions/apiGet.ts:137 getVariable (depth 1); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/components/actions/apiGet.ts:143 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: { id?: string; name?: string }. [External/internal input routes](../inputs.json) retain transport and permission limits.
