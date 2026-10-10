# click/src_frontend_components_inputs_MaterialColorInput.svelte (2)

## click — event-baebee0ffe32233c42

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:312](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L312); reset. partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:309 defaultValue; src/frontend/components/inputs/MaterialColorInput.svelte:311 hexValue !== defaultValue.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:103 reset (depth 0); src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3); src/frontend/components/inputs/MaterialColorInput.svelte:106 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ecc0f1e70a144548ef

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:316](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L316); undoReset. partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:309 defaultValue; src/frontend/components/inputs/MaterialColorInput.svelte:311 hexValue !== defaultValue; src/frontend/components/inputs/MaterialColorInput.svelte:315 resetFromValue.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:109 undoReset (depth 0); src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
