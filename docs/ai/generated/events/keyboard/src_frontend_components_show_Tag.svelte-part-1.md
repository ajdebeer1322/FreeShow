# keyboard/src_frontend_components_show_Tag.svelte (1)

## dynamic — event-27d81b3264e9fcac50

[code] [src/frontend/components/show/Tag.svelte:54](../../../../../src/frontend/components/show/Tag.svelte#L54); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
