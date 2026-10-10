# menu/link_slides (1)

## link_slides — event-7b2e70c1a16332f6d9

[code] [src/frontend/components/context/contextMenus.ts:151](../../../../../src/frontend/components/context/contextMenus.ts#L151); link_slides. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:1953 link_slides (depth 0); src/frontend/components/helpers/show.ts:493 linkSlides (depth 1); src/frontend/components/helpers/show.ts:456 canLinkSlides (depth 2); src/frontend/components/helpers/show.ts:459 <callback> (depth 3); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 4); src/frontend/components/helpers/shows.ts:375 get (depth 5); src/frontend/components/helpers/shows.ts:379 <callback> (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 5); src/frontend/components/helpers/shows.ts:478 <callback> (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 5).

Effects: src/frontend/components/helpers/show.ts:501 history history SHOW_LAYOUT; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 106. Full edges/effects/conditions in JSON.

Menu layouts: slide src/frontend/components/context/contextMenus.ts:384; slideChild src/frontend/components/context/contextMenus.ts:386. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: src/server/remote/components/show/ShowSlide.svelte:63.
