# keyboard/src_frontend_components_main_popups_InteractionInput.svelte (1)

## dynamic — event-7be7aed0cf41693fa1

[code] [src/frontend/components/main/popups/InteractionInput.svelte:153](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L153); (e) => { if (e.key === "Enter" && i === (currentInput.options?.length \|\| 0) - 1) { if (!currentInput.options) currentInput.options = &#91;&#93; currentInput.options.push({ value: "" }) cur. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType; src/frontend/components/main/popups/InteractionInput.svelte:123 currentInput.type === "multi_choice".

Calls: src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
