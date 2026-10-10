# click/src_frontend_components_edit_tools_MessageDesignTools.svelte (1)

## click — event-98ba1863f0dad04ede

[code] [src/frontend/components/edit/tools/MessageDesignTools.svelte:67](../../../../../src/frontend/components/edit/tools/MessageDesignTools.svelte#L67); () => (previewOpen = !previewOpen). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4d8f3946eb0990ce98

[code] [src/frontend/components/edit/tools/MessageDesignTools.svelte:78](../../../../../src/frontend/components/edit/tools/MessageDesignTools.svelte#L78); addShape. partial.

Conditions: src/frontend/components/edit/tools/MessageDesignTools.svelte:34 readOnly.

Calls: src/frontend/components/edit/tools/MessageDesignTools.svelte:33 addShape (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/components/edit/tools/MessageDesignTools.svelte:39 <callback> (depth 1); src/frontend/components/helpers/messageShapes.ts:16 createMessageShape (depth 1); src/frontend/components/helpers/messageShapes.ts:7 shapeStyle (depth 2); src/frontend/components/helpers/style.ts:6 getStyles (depth 3); src/frontend/components/helpers/style.ts:15 <callback> (depth 4); src/frontend/components/helpers/style.ts:22 <callback> (depth 5); src/frontend/components/helpers/style.ts:49 removeText (depth 5); src/frontend/components/helpers/style.ts:37 getFilters (depth 5); src/frontend/components/helpers/style.ts:41 <callback> (depth 6); src/frontend/components/helpers/messageShapes.ts:12 <callback> (depth 3); src/frontend/components/edit/tools/MessageDesignTools.svelte:28 saveItems (depth 1); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4).

Effects: src/frontend/components/edit/tools/MessageDesignTools.svelte:30 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-3cb3eb38b30a549c40

[code] [src/frontend/components/edit/tools/MessageDesignTools.svelte:91](../../../../../src/frontend/components/edit/tools/MessageDesignTools.svelte#L91); () => rearrangeItems("backward", selectedIndex). partial.

Conditions: src/frontend/components/edit/tools/MessageDesignTools.svelte:84 selectedItem.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:205 rearrangeItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:191 getEditItems (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:177 getEditSlide (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6); src/frontend/components/helpers/shows.ts:520 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6); src/frontend/components/helpers/shows.ts:38 set (depth 6).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:222 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:225 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:235 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 125. Full edges/effects/conditions in JSON.

## click — event-8d7f9f8db6db9c0bce

[code] [src/frontend/components/edit/tools/MessageDesignTools.svelte:91](../../../../../src/frontend/components/edit/tools/MessageDesignTools.svelte#L91); () => rearrangeItems("forward", selectedIndex). partial.

Conditions: src/frontend/components/edit/tools/MessageDesignTools.svelte:84 selectedItem.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:205 rearrangeItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:191 getEditItems (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:177 getEditSlide (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6); src/frontend/components/helpers/shows.ts:520 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6); src/frontend/components/helpers/shows.ts:38 set (depth 6).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:222 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:225 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:235 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 125. Full edges/effects/conditions in JSON.
