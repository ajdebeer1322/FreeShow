# drag-drop/src_frontend_components_edit_editbox_EditboxChords.svelte (1)

## dragstart — event-c39d17ea541e5d1724

[code] [src/frontend/components/edit/editbox/EditboxChords.svelte:228](../../../../../src/frontend/components/edit/editbox/EditboxChords.svelte#L228); handleDragStart. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/EditboxChords.svelte:227 item?.lines; src/frontend/components/edit/editbox/EditboxChords.svelte:134 !target; src/frontend/components/edit/editbox/EditboxChords.svelte:136 !id.

Calls: src/frontend/components/edit/editbox/EditboxChords.svelte:132 handleDragStart (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragover — event-9a2700d36c5251fc4f

[code] [src/frontend/components/edit/editbox/EditboxChords.svelte:228](../../../../../src/frontend/components/edit/editbox/EditboxChords.svelte#L228); handleDragOver. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/EditboxChords.svelte:227 item?.lines; src/frontend/components/edit/editbox/EditboxChords.svelte:145 !add; src/frontend/components/edit/editbox/EditboxChords.svelte:148 lastDropTarget && lastDropTarget !== add; src/frontend/components/edit/editbox/EditboxChords.svelte:149 lastDropTarget !== (add as HTMLElement); src/frontend/components/edit/editbox/EditboxChords.svelte:154 e.dataTransfer.

Calls: src/frontend/components/edit/editbox/EditboxChords.svelte:143 handleDragOver (depth 0); src/frontend/components/edit/editbox/EditboxChords.svelte:126 findAddTarget (depth 1).

Effects: src/frontend/components/edit/editbox/EditboxChords.svelte:152 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragleave — event-bce04dfd977b981ef8

[code] [src/frontend/components/edit/editbox/EditboxChords.svelte:228](../../../../../src/frontend/components/edit/editbox/EditboxChords.svelte#L228); handleDragLeave. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/EditboxChords.svelte:227 item?.lines; src/frontend/components/edit/editbox/EditboxChords.svelte:158 add && lastDropTarget === add.

Calls: src/frontend/components/edit/editbox/EditboxChords.svelte:156 handleDragLeave (depth 0); src/frontend/components/edit/editbox/EditboxChords.svelte:126 findAddTarget (depth 1).

Effects: src/frontend/components/edit/editbox/EditboxChords.svelte:161 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## drop — event-e27af26a40e78832c4

[code] [src/frontend/components/edit/editbox/EditboxChords.svelte:228](../../../../../src/frontend/components/edit/editbox/EditboxChords.svelte#L228); handleDrop. partial.

Conditions: src/frontend/components/edit/editbox/EditboxChords.svelte:227 item?.lines; src/frontend/components/edit/editbox/EditboxChords.svelte:175 !add; src/frontend/components/edit/editbox/EditboxChords.svelte:186 sourceIndex == null \|\| isNaN(sourceIndex); src/frontend/components/edit/editbox/EditboxChords.svelte:191 lastDropTarget.

Calls: src/frontend/components/edit/editbox/EditboxChords.svelte:172 handleDrop (depth 0); src/frontend/components/edit/editbox/EditboxChords.svelte:126 findAddTarget (depth 1); src/frontend/components/edit/editbox/EditboxChords.svelte:199 moveChord (depth 1); src/frontend/components/edit/editbox/EditboxChords.svelte:207 <callback> (depth 2); src/frontend/components/edit/editbox/EditboxChords.svelte:216 <callback> (depth 2); src/frontend/components/edit/editbox/EditboxChords.svelte:65 createChordLines (depth 2); src/frontend/components/edit/editbox/EditboxChords.svelte:69 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/edit/editbox/EditboxChords.svelte:76 <callback> (depth 4); src/frontend/components/edit/editbox/EditboxChords.svelte:85 <callback> (depth 5); src/frontend/components/edit/editbox/EditboxChords.svelte:86 <callback> (depth 6); src/frontend/components/edit/editbox/EditboxChords.svelte:107 <callback> (depth 4); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5).

Effects: src/frontend/components/edit/editbox/EditboxChords.svelte:195 store-write src/frontend/stores.ts#activeDropId ; src/frontend/components/edit/editbox/EditboxChords.svelte:222 history history SHOW_ITEMS; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## dragend — event-c4b796571f148af3c3

[code] [src/frontend/components/edit/editbox/EditboxChords.svelte:228](../../../../../src/frontend/components/edit/editbox/EditboxChords.svelte#L228); handleDragEnd. resolved-within-bound.

Conditions: src/frontend/components/edit/editbox/EditboxChords.svelte:227 item?.lines; src/frontend/components/edit/editbox/EditboxChords.svelte:166 lastDropTarget.

Calls: src/frontend/components/edit/editbox/EditboxChords.svelte:164 handleDragEnd (depth 0).

Effects: src/frontend/components/edit/editbox/EditboxChords.svelte:170 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
