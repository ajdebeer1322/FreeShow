# keyboard/src_frontend_components_inputs_Dropdown.svelte (1)

## dynamic — event-d6d6f868cdae5d8e21

[code] [src/frontend/components/inputs/Dropdown.svelte:96](../../../../../src/frontend/components/inputs/Dropdown.svelte#L96); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/components/inputs/Dropdown.svelte:79 active; src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
