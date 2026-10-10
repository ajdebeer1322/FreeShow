# click/src_frontend_components_inputs_Dropdown.svelte (1)

## click — event-c439157ded1a6875b7

[code] [src/frontend/components/inputs/Dropdown.svelte:72](../../../../../src/frontend/components/inputs/Dropdown.svelte#L72); () => (disabled ? null : (active = !active)). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b78ce241af5d635213

[code] [src/frontend/components/inputs/Dropdown.svelte:88](../../../../../src/frontend/components/inputs/Dropdown.svelte#L88); () => { if (disabled) return active = false // allow dropdown to close before updating, so svelte visual bug don't duplicate inputs on close transition in boxstyle edit etc. setTim. resolved-within-bound.

Conditions: src/frontend/components/inputs/Dropdown.svelte:79 active.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
