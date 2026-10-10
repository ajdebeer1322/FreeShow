# automatic/src_frontend_components_inputs_MaterialColorInput.svelte (1)

## setTimeout — event-c6d9c5d30e611711a0

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:106](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L106); () => (resetFromValue = ""). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:106 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-fb575a9c6183911bb8

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:121](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L121); () => document.getElementById(pickerId)?.focus(). resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:117 event.key === "Escape".

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:121 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-cda4eca56e3911cf4d

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:180](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L180); () => (mounted = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:180 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-22ba503cffef5fb13c

[code] [src/frontend/components/inputs/MaterialColorInput.svelte:191](../../../../../src/frontend/components/inputs/MaterialColorInput.svelte#L191); () => { selectColor(hexValue, false) updated = null if (gotUpdate) { gotUpdate = false opacityChanged() } }. partial.

Conditions: src/frontend/components/inputs/MaterialColorInput.svelte:194 gotUpdate.

Calls: src/frontend/components/inputs/MaterialColorInput.svelte:191 <callback> (depth 0); src/frontend/components/inputs/MaterialColorInput.svelte:86 selectColor (depth 1); src/frontend/components/inputs/MaterialColorInput.svelte:65 colorUpdate (depth 2); src/frontend/components/edit/scripts/edit.ts:10 addOpacityToGradient (depth 3); src/frontend/components/edit/scripts/edit.ts:11 <callback> (depth 4); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 5); src/frontend/components/helpers/color.ts:55 hexToRgb (depth 3); src/frontend/components/inputs/MaterialColorInput.svelte:183 opacityChanged (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
