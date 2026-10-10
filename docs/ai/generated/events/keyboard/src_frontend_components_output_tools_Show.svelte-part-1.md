# keyboard/src_frontend_components_output_tools_Show.svelte (1)

## dynamic — event-2ae0fbdd46b2276b1e

[code] [src/frontend/components/output/tools/Show.svelte:54](../../../../../src/frontend/components/output/tools/Show.svelte#L54); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/components/output/tools/Show.svelte:53 slide; src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
