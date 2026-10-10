# click/src_frontend_components_main_popups_ColorGradient.svelte (1)

## click — event-d38cd27a9149909399

[code] [src/frontend/components/main/popups/ColorGradient.svelte:86](../../../../../src/frontend/components/main/popups/ColorGradient.svelte#L86); () => moveUp(i). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ColorGradient.svelte:85 i > 0.

Calls: src/frontend/components/main/popups/ColorGradient.svelte:51 moveUp (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3dc7bc9f126e0ed258

[code] [src/frontend/components/main/popups/ColorGradient.svelte:89](../../../../../src/frontend/components/main/popups/ColorGradient.svelte#L89); () => deleteColor(i). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ColorGradient.svelte:88 parsedValue.colors.length > 2.

Calls: src/frontend/components/main/popups/ColorGradient.svelte:57 deleteColor (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-866e7852ac9a1d3f55

[code] [src/frontend/components/main/popups/ColorGradient.svelte:100](../../../../../src/frontend/components/main/popups/ColorGradient.svelte#L100); () => { parsedValue.colors.push({ color: "#ffffff", pos: 100 }) parsedValue.colors = parsedValue.colors }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1b7b95462688a483e6

[code] [src/frontend/components/main/popups/ColorGradient.svelte:110](../../../../../src/frontend/components/main/popups/ColorGradient.svelte#L110); change. partial.

Conditions: src/frontend/components/main/popups/ColorGradient.svelte:34 $popupData.trigger.

Calls: src/frontend/components/main/popups/ColorGradient.svelte:33 change (depth 0).

Effects: src/frontend/components/main/popups/ColorGradient.svelte:35 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/ColorGradient.svelte:36 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
