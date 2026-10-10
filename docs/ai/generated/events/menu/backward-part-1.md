# menu/backward (1)

## backward — event-03c55d930573e48f69

[code] [src/frontend/components/context/contextMenus.ts:181](../../../../../src/frontend/components/context/contextMenus.ts#L181); backward. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:2075 backward (depth 0); src/frontend/components/edit/scripts/itemHelpers.ts:205 rearrangeItems (depth 1); src/frontend/components/edit/scripts/itemHelpers.ts:191 getEditItems (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/scripts/itemHelpers.ts:177 getEditSlide (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6); src/frontend/components/helpers/shows.ts:520 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/edit/scripts/itemHelpers.ts:222 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:225 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:235 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 125. Full edges/effects/conditions in JSON.

Menu layouts: items_list_item src/frontend/components/context/contextMenus.ts:420. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/frontend/components/edit/tools/ItemsList.svelte:56.
