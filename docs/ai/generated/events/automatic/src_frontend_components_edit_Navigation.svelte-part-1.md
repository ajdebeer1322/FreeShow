# automatic/src_frontend_components_edit_Navigation.svelte (1)

## setTimeout — event-b23de67fed01692da0

[code] [src/frontend/components/edit/Navigation.svelte:94](../../../../../src/frontend/components/edit/Navigation.svelte#L94); () => (clonedHistory = clone($editHistory).reverse()). partial.

Conditions: src/frontend/components/edit/Navigation.svelte:94 $editHistory.length !== clonedHistory.length \|\| (!$activeEdit.id && !$activeShow?.id).

Calls: src/frontend/components/edit/Navigation.svelte:94 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
