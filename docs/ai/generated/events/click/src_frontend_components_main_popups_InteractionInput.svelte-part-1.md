# click/src_frontend_components_main_popups_InteractionInput.svelte (1)

## click — event-5b72df05ec27d80073

[code] [src/frontend/components/main/popups/InteractionInput.svelte:91](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L91); (e) => { chosenType = e.detail updateValue(chosenType, "type") }. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType.

Calls: src/frontend/components/main/popups/InteractionInput.svelte:51 updateValue (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 2); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c2efa6cce8d5249e3f

[code] [src/frontend/components/main/popups/InteractionInput.svelte:98](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L98); () => (chosenType = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7e741ad2989e8b48d0

[code] [src/frontend/components/main/popups/InteractionInput.svelte:102](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L102); (e) => { chosenInputType = e.detail updateValue(chosenInputType, "inputType") }. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType.

Calls: src/frontend/components/main/popups/InteractionInput.svelte:51 updateValue (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 2); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e476ff0ff6de75b282

[code] [src/frontend/components/main/popups/InteractionInput.svelte:114](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L114); () => { if (inputTypes&#91;chosenType&#93;?.length < 2) chosenType = "" chosenInputType = "" }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType; src/frontend/components/main/popups/InteractionInput.svelte:108 !existing.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7df52532f3fa99b6c4

[code] [src/frontend/components/main/popups/InteractionInput.svelte:132](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L132); () => { if (!currentInput.options) currentInput.options = &#91;&#93; // mark as answer currentInput.options&#91;i&#93;.isAnswer = !currentInput.options&#91;i&#93;.isAnswer updateInput() }. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType; src/frontend/components/main/popups/InteractionInput.svelte:123 currentInput.type === "multi_choice".

Calls: src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-15dc91bbcf8ec66470

[code] [src/frontend/components/main/popups/InteractionInput.svelte:167](../../../../../src/frontend/components/main/popups/InteractionInput.svelte#L167); () => { if (!currentInput.options) currentInput.options = &#91;&#93; currentInput.options.splice(i, 1) currentInput.options = currentInput.options updateInput() }. partial.

Conditions: src/frontend/components/main/popups/InteractionInput.svelte:88 !existing && !chosenType; src/frontend/components/main/popups/InteractionInput.svelte:97 !existing && !chosenInputType; src/frontend/components/main/popups/InteractionInput.svelte:123 currentInput.type === "multi_choice".

Calls: src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
