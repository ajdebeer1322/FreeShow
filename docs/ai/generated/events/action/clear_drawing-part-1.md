# action/clear_drawing (1)

## clear_drawing — event-ed48b7cb273c80a6d2

[code] [src/frontend/components/actions/api.ts:259](../../../../../src/frontend/components/actions/api.ts#L259); () => clearDrawing(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:259 clear_drawing (depth 0); src/frontend/components/output/clear.ts:183 clearDrawing (depth 1); src/frontend/components/output/clear.ts:184 <callback> (depth 2).

Effects: src/frontend/components/output/clear.ts:184 store-write src/frontend/stores.ts#drawSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
