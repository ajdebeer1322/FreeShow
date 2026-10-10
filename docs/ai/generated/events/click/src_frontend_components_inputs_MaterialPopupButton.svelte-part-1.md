# click/src_frontend_components_inputs_MaterialPopupButton.svelte (1)

## click — event-981748d6548e7d323b

[code] [src/frontend/components/inputs/MaterialPopupButton.svelte:72](../../../../../src/frontend/components/inputs/MaterialPopupButton.svelte#L72); (e) => { if (e.target?.closest(".remove")) return openPopup() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialPopupButton.svelte:24 openPopup (depth 1); src/frontend/components/inputs/MaterialPopupButton.svelte:32 trigger (depth 2).

Effects: src/frontend/components/inputs/MaterialPopupButton.svelte:33 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/inputs/MaterialPopupButton.svelte:32 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-47ee1f074af4fab443

[code] [src/frontend/components/inputs/MaterialPopupButton.svelte:115](../../../../../src/frontend/components/inputs/MaterialPopupButton.svelte#L115); () => dispatch("change", null). partial.

Conditions: src/frontend/components/inputs/MaterialPopupButton.svelte:113 allowEmpty && value && !disabled.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5015c52ebb861e85b6

[code] [src/frontend/components/inputs/MaterialPopupButton.svelte:123](../../../../../src/frontend/components/inputs/MaterialPopupButton.svelte#L123); reset. partial.

Conditions: src/frontend/components/inputs/MaterialPopupButton.svelte:120 defaultValue; src/frontend/components/inputs/MaterialPopupButton.svelte:122 JSON.stringify(value) !== JSON.stringify(defaultValue).

Calls: src/frontend/components/inputs/MaterialPopupButton.svelte:51 reset (depth 0); src/frontend/components/inputs/MaterialPopupButton.svelte:54 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bcf8ae5bdb28ac1801

[code] [src/frontend/components/inputs/MaterialPopupButton.svelte:127](../../../../../src/frontend/components/inputs/MaterialPopupButton.svelte#L127); undoReset. partial.

Conditions: src/frontend/components/inputs/MaterialPopupButton.svelte:120 defaultValue; src/frontend/components/inputs/MaterialPopupButton.svelte:122 JSON.stringify(value) !== JSON.stringify(defaultValue); src/frontend/components/inputs/MaterialPopupButton.svelte:126 resetFromValue.

Calls: src/frontend/components/inputs/MaterialPopupButton.svelte:59 undoReset (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
