# automatic/src_frontend_components_inputs_Dropdown.svelte (1)

## setTimeout — event-67a4f887ca337975d8

[code] [src/frontend/components/inputs/Dropdown.svelte:40](../../../../../src/frontend/components/inputs/Dropdown.svelte#L40); () => { nextScrollTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/Dropdown.svelte:40 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6e0de4836f3ce16312

[code] [src/frontend/components/inputs/Dropdown.svelte:50](../../../../../src/frontend/components/inputs/Dropdown.svelte#L50); () => { // dropdown does not have a scroll bar if not much content, return so parent is not scrolled! if (!self \|\| options.length < 10) return let activeElem = self.querySelector(". partial.

Conditions: src/frontend/components/inputs/Dropdown.svelte:52 !self \|\| options.length < 10.

Calls: src/frontend/components/inputs/Dropdown.svelte:50 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
