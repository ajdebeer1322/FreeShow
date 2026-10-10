# keyboard/src_frontend_components_inputs_MaterialPopupButton.svelte (1)

## dynamic — event-a4b285c9c4efc229ac

[code] [src/frontend/components/inputs/MaterialPopupButton.svelte:76](../../../../../src/frontend/components/inputs/MaterialPopupButton.svelte#L76); handleKeydown. partial.

Conditions: src/frontend/components/inputs/MaterialPopupButton.svelte:39 disabled; src/frontend/components/inputs/MaterialPopupButton.svelte:41 event.key === "Enter" \|\| event.key === " ".

Calls: src/frontend/components/inputs/MaterialPopupButton.svelte:38 handleKeydown (depth 0); src/frontend/components/inputs/MaterialPopupButton.svelte:24 openPopup (depth 1); src/frontend/components/inputs/MaterialPopupButton.svelte:32 trigger (depth 2).

Effects: src/frontend/components/inputs/MaterialPopupButton.svelte:33 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/inputs/MaterialPopupButton.svelte:32 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
