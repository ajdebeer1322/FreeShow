# click/src_frontend_components_edit_tools_ItemsList.svelte (1)

## click — event-1b75204221b50b9da8

[code] [src/frontend/components/edit/tools/ItemsList.svelte:77](../../../../../src/frontend/components/edit/tools/ItemsList.svelte#L77); (e) => { selected.set({ id: null, data: &#91;&#93; }) activeEdit.update((ae) => { if (e.detail.ctrl) { if (ae.items.includes(index)) ae.items.splice(ae.items.indexOf(index), 1) else ae.ite. resolved-within-bound.

Conditions: src/frontend/components/edit/tools/ItemsList.svelte:46 invertedItemList.length.

Calls: no function target resolved.

Effects: src/frontend/components/edit/tools/ItemsList.svelte:78 store-write src/frontend/stores.ts#selected ; src/frontend/components/edit/tools/ItemsList.svelte:79 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-354163dda533832a8c

[code] [src/frontend/components/edit/tools/ItemsList.svelte:96](../../../../../src/frontend/components/edit/tools/ItemsList.svelte#L96); () => rearrangeItems("backward", index). partial.

Conditions: src/frontend/components/edit/tools/ItemsList.svelte:46 invertedItemList.length.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:205 rearrangeItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:191 getEditItems (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:177 getEditSlide (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6); src/frontend/components/helpers/shows.ts:520 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6); src/frontend/components/helpers/shows.ts:38 set (depth 6).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:222 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:225 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:235 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 125. Full edges/effects/conditions in JSON.

## click — event-be5b8cedba18e7cc4e

[code] [src/frontend/components/edit/tools/ItemsList.svelte:97](../../../../../src/frontend/components/edit/tools/ItemsList.svelte#L97); () => rearrangeItems("forward", index). partial.

Conditions: src/frontend/components/edit/tools/ItemsList.svelte:46 invertedItemList.length.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:205 rearrangeItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:191 getEditItems (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:177 getEditSlide (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6); src/frontend/components/helpers/shows.ts:520 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6); src/frontend/components/helpers/shows.ts:38 set (depth 6).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:222 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:225 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:235 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 125. Full edges/effects/conditions in JSON.
