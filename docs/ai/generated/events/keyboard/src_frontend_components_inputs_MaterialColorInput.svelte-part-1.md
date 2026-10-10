# keyboard/src_frontend_components_inputs_MaterialColorInput.svelte (1)

## dynamic — event-fb2b33c7ecccbcfc08

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:204](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L204); handleKey. partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:115 disabled; src/frontend/components/inputs/MaterialColorInput.svelte:117 event.key === "Escape"; src/frontend/components/inputs/MaterialColorInput.svelte:118 !pickerOpen; src/frontend/components/inputs/MaterialColorInput.svelte:125 event.key === "Enter" \|\| event.key === " "; src/frontend/components/inputs/MaterialColorInput.svelte:127 picker; src/frontend/components/inputs/MaterialColorInput.svelte:130 pickColor.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:114 handleKey (depth 0); src/frontend/components/inputs/MaterialColorInput.svelte:121 <callback> (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3); src/frontend/components/inputs/MaterialColorInput.svelte:51 togglePicker (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
