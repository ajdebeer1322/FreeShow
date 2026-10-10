# click/src_frontend_components_input_Input.svelte (1)

## click — event-621c5844bc849922da

[code] [src/frontend/components/input/Input.svelte:34](../../../../../src/frontend/components/input/Input.svelte#L34); () => { select("timer", { id: input.value }) activePopup.set("timer") }. resolved-within-bound.

Conditions: src/frontend/components/input/Input.svelte:27 input.type === "dropdown"; src/frontend/components/input/Input.svelte:31 input.label === "items.timer" && input.value.

Calls: src/frontend/components/helpers/select.ts:6 select (depth 1); src/frontend/components/helpers/select.ts:7 <callback> (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/components/helpers/select.ts:7 store-write src/frontend/stores.ts#selected ; src/frontend/components/input/Input.svelte:36 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
