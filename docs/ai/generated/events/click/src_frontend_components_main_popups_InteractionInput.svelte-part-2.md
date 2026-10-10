# click/src_frontend_components_main_popups_InteractionInput.svelte (2)

## click — event-0a3e0f4059e3e8326d

[code] [src/frontend/components/main/popups/InteractionInput.svelte:182](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L182); () => { if (!currentInput.options) currentInput.options = &#91;&#93; currentInput.options.push({ value: "" }) currentInput.options = currentInput.options updateInput() }. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType; src/frontend/components/main/popups/InteractionInput.svelte:123 currentInput.type === "multi_choice".

Calls: src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
