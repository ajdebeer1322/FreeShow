# automatic/src_frontend_components_edit_editbox_Editbox.svelte (1)

## setTimeout — event-c511b5c22ebe8f8946

[code] [src/frontend/components/edit/editbox/Editbox.svelte:128](../../../../../src/frontend/components/edit/editbox/Editbox.svelte#L128); () => { activeEdit.update((a) => { a.items = &#91;&#93; return a }) }. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/Editbox.svelte:126 $activeEdit.items.length; src/frontend/components/edit/editbox/Editbox.svelte:123 e.key === "Escape".

Calls: src/frontend/components/edit/editbox/Editbox.svelte:128 <callback> (depth 0); src/frontend/components/edit/editbox/Editbox.svelte:129 <callback> (depth 1).

Effects: src/frontend/components/edit/editbox/Editbox.svelte:129 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-58fe7a8cb8ffbd51f0

[code] [src/frontend/components/edit/editbox/Editbox.svelte:155](../../../../../src/frontend/components/edit/editbox/Editbox.svelte#L155); () => { activeEdit.update((ae) => { ae.items = &#91;&#93; return ae }) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/editbox/Editbox.svelte:155 <callback> (depth 0); src/frontend/components/edit/editbox/Editbox.svelte:156 <callback> (depth 1).

Effects: src/frontend/components/edit/editbox/Editbox.svelte:156 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
