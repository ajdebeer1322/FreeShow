# keyboard/src_frontend_components_inputs_MaterialTextInput.svelte (1)

## dynamic — event-83a06247c97e1f76af

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:36](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L36); handler. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:33 e.key === "Enter".

Calls: src/frontend/components/inputs/MaterialTextInput.svelte:32 handler (depth 0); src/frontend/components/inputs/MaterialTextInput.svelte:33 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-90808ecf787e392562

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:83](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L83); <forwarded event>. forwarded.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:82 type === "password" && !showText; src/frontend/components/inputs/MaterialDropdown.svelte:271 e.key === "Enter"; src/frontend/components/main/popups/Variable.svelte:243 currentVariable.type === "text" && e.key === "Enter" && e.target?.value; src/frontend/components/main/popups/Variable.svelte:213 e.key === "Tab" && e.target?.value.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:270 keydown (depth 0); src/frontend/components/inputs/MaterialDropdown.svelte:264 createNewEvent (depth 1); src/frontend/components/main/popups/Variable.svelte:242 nameKeydown (depth 0); src/frontend/components/main/popups/Variable.svelte:212 textSetKeydown (depth 0); src/frontend/components/main/popups/Variable.svelte:165 addTextSetVariable (depth 1); src/frontend/components/main/popups/Variable.svelte:170 <callback> (depth 2); src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/Variable.svelte:244 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Variable.svelte:170 store-write src/frontend/stores.ts#variables ; src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-9b0cc85f9d04f65688

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:85](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L85); <forwarded event>. forwarded.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:82 type === "password" && !showText; src/frontend/components/inputs/MaterialDropdown.svelte:271 e.key === "Enter"; src/frontend/components/main/popups/Variable.svelte:243 currentVariable.type === "text" && e.key === "Enter" && e.target?.value; src/frontend/components/main/popups/Variable.svelte:213 e.key === "Tab" && e.target?.value.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:270 keydown (depth 0); src/frontend/components/inputs/MaterialDropdown.svelte:264 createNewEvent (depth 1); src/frontend/components/main/popups/Variable.svelte:242 nameKeydown (depth 0); src/frontend/components/main/popups/Variable.svelte:212 textSetKeydown (depth 0); src/frontend/components/main/popups/Variable.svelte:165 addTextSetVariable (depth 1); src/frontend/components/main/popups/Variable.svelte:170 <callback> (depth 2); src/frontend/components/main/popups/InteractionInput.svelte:69 updateInput (depth 1); src/frontend/components/main/popups/InteractionInput.svelte:70 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/main/popups/Variable.svelte:244 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Variable.svelte:170 store-write src/frontend/stores.ts#variables ; src/frontend/components/main/popups/InteractionInput.svelte:70 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
