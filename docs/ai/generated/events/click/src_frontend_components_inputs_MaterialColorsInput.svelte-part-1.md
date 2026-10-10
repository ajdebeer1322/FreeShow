# click/src_frontend_components_inputs_MaterialColorsInput.svelte (1)

## click — event-369aebbbbd5a4ba4dc

[code] [src/frontend/components/inputs/MaterialColorsInput.svelte:84](../../../../../src/frontend/components/inputs/MaterialColorsInput.svelte#L84); () => (open = !open). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1ad0521bc5fdb34051

[code] [src/frontend/components/inputs/MaterialColorsInput.svelte:95](../../../../../src/frontend/components/inputs/MaterialColorsInput.svelte#L95); () => removeColor(i). partial.

Conditions: src/frontend/components/inputs/MaterialColorsInput.svelte:94 colors.length > minColors.

Calls: src/frontend/components/inputs/MaterialColorsInput.svelte:72 removeColor (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9800bf37d6ca0ae2ba

[code] [src/frontend/components/inputs/MaterialColorsInput.svelte:103](../../../../../src/frontend/components/inputs/MaterialColorsInput.svelte#L103); addColor. partial.

Conditions: src/frontend/components/inputs/MaterialColorsInput.svelte:102 colors.length < maxColors; src/frontend/components/inputs/MaterialColorsInput.svelte:64 disabled \|\| colors.length >= maxColors.

Calls: src/frontend/components/inputs/MaterialColorsInput.svelte:63 addColor (depth 0); src/frontend/components/inputs/MaterialColorsInput.svelte:24 getNextGradientColor (depth 1); src/frontend/components/helpers/color.ts:254 hexToHSL (depth 2); src/frontend/components/helpers/color.ts:289 hslToHex (depth 2); src/frontend/components/helpers/color.ts:325 toHex (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
