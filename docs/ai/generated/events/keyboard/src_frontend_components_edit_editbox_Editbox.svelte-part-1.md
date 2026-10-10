# keyboard/src_frontend_components_edit_editbox_Editbox.svelte (1)

## dynamic — event-b014b2cbe05346b345

[code] [src/frontend/components/edit/editbox/Editbox.svelte:238](../../../../../src/frontend/components/edit/editbox/Editbox.svelte#L238); keydown. partial.

Conditions: src/frontend/components/edit/editbox/Editbox.svelte:118 e.key === "Shift"; src/frontend/components/edit/editbox/Editbox.svelte:120 isComposing(e); src/frontend/components/edit/editbox/Editbox.svelte:121 cropElem?.handleKeydown(e); src/frontend/components/edit/editbox/Editbox.svelte:123 e.key === "Escape"; src/frontend/components/edit/editbox/Editbox.svelte:126 $activeEdit.items.length; src/frontend/components/edit/editbox/Editbox.svelte:137 !$activeEdit.items.includes(index) \|\| document.activeElement?.closest(".item") \|\| document.activeElement?.closest("input"); src/frontend/components/edit/editbox/Editbox.svelte:139 document.querySelector(".timeline-track .action-marker.selected"); src/frontend/components/edit/editbox/Editbox.svelte:141 e.key === "Backspace" \|\| e.key === "Delete".

Calls: src/frontend/components/edit/editbox/Editbox.svelte:117 keydown (depth 0); src/frontend/utils/shortcuts.ts:336 isComposing (depth 1); src/frontend/components/edit/editbox/Editbox.svelte:128 <callback> (depth 1); src/frontend/components/edit/editbox/Editbox.svelte:129 <callback> (depth 2); src/frontend/components/helpers/clipboard.ts:200 deleteAction (depth 1).

Effects: src/frontend/components/edit/editbox/Editbox.svelte:129 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-cbc882b7e7065635a8

[code] [src/frontend/components/edit/editbox/Editbox.svelte:238](../../../../../src/frontend/components/edit/editbox/Editbox.svelte#L238); keyup. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/Editbox.svelte:115 e.key === "Shift".

Calls: src/frontend/components/edit/editbox/Editbox.svelte:114 keyup (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
