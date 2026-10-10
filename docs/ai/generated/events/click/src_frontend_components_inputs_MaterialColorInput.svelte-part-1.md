# click/src_frontend_components_inputs_MaterialColorInput.svelte (1)

## click — event-1c15809f3736ff3ef9

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:206](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L206); togglePicker. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:205 !alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:52 disabled.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:51 togglePicker (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7056c2c1caf4dd80cb

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:208](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L208); togglePicker. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:205 !alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:52 disabled.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:51 togglePicker (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c235de635da617f531

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:230](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L230); () => selectColor(color.value, true, true). partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:216 pickerOpen \|\| alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:223 selectedMode === "gradient"; src/frontend/components/inputs/MaterialColorInput.svelte:227 color === "BREAK".

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-87293ad659b8d72e2f

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:248](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L248); () => { popupData.set({ value: hexValue, trigger: (newValue) => { selectColor(newValue) if (editMode) setTimeout(() => activePopup.set("manage_colors")) } }) activePopup.set("color. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:216 pickerOpen \|\| alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:223 selectedMode === "gradient".

Calls: no function target resolved.

Effects: src/frontend/components/inputs/MaterialColorInput.svelte:249 store-write src/frontend/stores.ts#popupData ; src/frontend/components/inputs/MaterialColorInput.svelte:256 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-46bbd64cbec3fa8432

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:270](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L270); () => { opacity = 100 selectColor("") }. partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:216 pickerOpen \|\| alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:223 selectedMode === "gradient"; src/frontend/components/inputs/MaterialColorInput.svelte:263 allowEmpty.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2f23c1c48f38f3c876

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:284](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L284); () => selectColor(color.value, true, true). partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:216 pickerOpen \|\| alwaysVisible; src/frontend/components/inputs/MaterialColorInput.svelte:223 selectedMode === "gradient"; src/frontend/components/inputs/MaterialColorInput.svelte:281 color === "BREAK".

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
