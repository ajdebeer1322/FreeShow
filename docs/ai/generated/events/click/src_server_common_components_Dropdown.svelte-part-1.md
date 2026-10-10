# click/src_server_common_components_Dropdown.svelte (1)

## click — event-8b71ef673796cda4ea

[code] [src/server/common/components/Dropdown.svelte:50](../../../../../src/server/common/components/Dropdown.svelte#L50); () => (disabled ? null : (active = !active)). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-79a8de46ebda1583e4

[code] [src/server/common/components/Dropdown.svelte:58](../../../../../src/server/common/components/Dropdown.svelte#L58); () => { if (disabled) return active = false // allow dropdown to close before updating, so svelte visual bug don't duplicate inputs on close transition in boxstyle edit etc. setTim. resolved-within-bound.

Conditions: src/server/common/components/Dropdown.svelte:53 active.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
