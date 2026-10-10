# keyboard/src_frontend_components_draw_DrawTabs.svelte (1)

## dynamic — event-636b7a6a85492ffd3f

[code] [src/frontend/components/draw/DrawTabs.svelte:27](../../../../../src/frontend/components/draw/DrawTabs.svelte#L27); keydown. resolved-within-bound.

Conditions: src/frontend/components/draw/DrawTabs.svelte:11 e.target?.closest?.(".edit") \|\| e.ctrlKey \|\| e.metaKey; src/frontend/components/draw/DrawTabs.svelte:16 e.key === "ArrowDown"; src/frontend/components/draw/DrawTabs.svelte:18 e.key === "ArrowUp"; src/frontend/components/draw/DrawTabs.svelte:22 nextTab < 0.

Calls: src/frontend/components/draw/DrawTabs.svelte:10 keydown (depth 0); src/frontend/components/draw/DrawTabs.svelte:14 <callback> (depth 1).

Effects: src/frontend/components/draw/DrawTabs.svelte:23 store-write src/frontend/stores.ts#drawTool .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
