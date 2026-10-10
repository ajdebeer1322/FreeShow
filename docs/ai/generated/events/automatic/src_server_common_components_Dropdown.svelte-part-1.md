# automatic/src_server_common_components_Dropdown.svelte (1)

## setTimeout — event-f7fa17532cddeec584

[code] [src/server/common/components/Dropdown.svelte:28](../../../../../src/server/common/components/Dropdown.svelte#L28); () => { // dropdown does not have a scroll bar if not much content, return so parent is not scrolled! if (!self \|\| options.length < 10) return let activeElem = self.querySelector(". partial.

Conditions: src/server/common/components/Dropdown.svelte:30 !self \|\| options.length < 10.

Calls: src/server/common/components/Dropdown.svelte:28 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
