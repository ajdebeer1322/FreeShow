# click/src_frontend_components_draw_DrawSettings.svelte (1)

## click — event-de3bd4d908dcb2a5d4

[code] [src/frontend/components/draw/DrawSettings.svelte:124](../../../../../src/frontend/components/draw/DrawSettings.svelte#L124); clearDrawing. resolved-within-bound.

Conditions: src/frontend/components/draw/DrawSettings.svelte:123 tool === "paint"; src/frontend/components/output/clear.ts:185 !a.paint.

Calls: src/frontend/components/output/clear.ts:183 clearDrawing (depth 0); src/frontend/components/output/clear.ts:184 <callback> (depth 1).

Effects: src/frontend/components/output/clear.ts:184 store-write src/frontend/stores.ts#drawSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-18b5c5e1952cfeb754

[code] [src/frontend/components/draw/DrawSettings.svelte:132](../../../../../src/frontend/components/draw/DrawSettings.svelte#L132); reset. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/draw/DrawSettings.svelte:71 reset (depth 0); src/frontend/components/draw/DrawSettings.svelte:72 <callback> (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2).

Effects: src/frontend/components/draw/DrawSettings.svelte:72 store-write src/frontend/stores.ts#drawSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
