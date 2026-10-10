# click/src_frontend_components_edit_SceneTools.svelte (1)

## click — event-b4d50174639e3be3fe

[code] [src/frontend/components/edit/SceneTools.svelte:116](../../../../../src/frontend/components/edit/SceneTools.svelte#L116); (e) => { if (!e.target?.closest(".overlay-item") && !e.target?.closest(".contextMenu")) deselectOverlay() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/SceneTools.svelte:103 deselectOverlay (depth 1).

Effects: src/frontend/components/edit/SceneTools.svelte:105 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-61d28557e09f1ed5c2

[code] [src/frontend/components/edit/SceneTools.svelte:132](../../../../../src/frontend/components/edit/SceneTools.svelte#L132); editStyle. resolved-within-bound.

Conditions: src/frontend/components/edit/SceneTools.svelte:131 $styles&#91;styleId&#93;.

Calls: src/frontend/components/edit/SceneTools.svelte:25 editStyle (depth 0).

Effects: src/frontend/components/edit/SceneTools.svelte:26 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/edit/SceneTools.svelte:27 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/edit/SceneTools.svelte:28 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cab53b78b2b08ae5ed

[code] [src/frontend/components/edit/SceneTools.svelte:155](../../../../../src/frontend/components/edit/SceneTools.svelte#L155); () => toggleSelectOverlay(index, overlayId). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/SceneTools.svelte:95 toggleSelectOverlay (depth 1).

Effects: src/frontend/components/edit/SceneTools.svelte:97 store-write src/frontend/stores.ts#selected ; src/frontend/components/edit/SceneTools.svelte:99 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b75b2be1cc52248c41

[code] [src/frontend/components/edit/SceneTools.svelte:170](../../../../../src/frontend/components/edit/SceneTools.svelte#L170); () => moveOverlay(index, 1). partial.

Conditions: src/frontend/components/edit/SceneTools.svelte:169 index < overlaysList.length - 1.

Calls: src/frontend/components/edit/SceneTools.svelte:73 moveOverlay (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/edit/SceneTools.svelte:31 updateContent (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 3); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 4); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 5); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 5); src/frontend/components/helpers/historyActions.ts:230 handleShows (depth 6); src/frontend/components/helpers/historyActions.ts:30 SLIDES (depth 5); src/frontend/components/helpers/historyActions.ts:376 handleSlides (depth 6); src/frontend/components/helpers/historyActions.ts:31 TEMPLATE (depth 5); src/frontend/components/helpers/historyActions.ts:604 handleTemplate (depth 6); src/frontend/components/helpers/historyActions.ts:32 SHOW_LAYOUT (depth 5); src/frontend/components/helpers/historyActions.ts:812 handleShowLayout (depth 6); src/frontend/components/helpers/historyActions.ts:33 SHOW_ITEMS (depth 5).

Effects: src/frontend/components/edit/SceneTools.svelte:35 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:664 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 127. Full edges/effects/conditions in JSON.

## click — event-2e090cb6f1b994c45c

[code] [src/frontend/components/edit/SceneTools.svelte:173](../../../../../src/frontend/components/edit/SceneTools.svelte#L173); () => moveOverlay(index, -1). partial.

Conditions: src/frontend/components/edit/SceneTools.svelte:172 index > 0.

Calls: src/frontend/components/edit/SceneTools.svelte:73 moveOverlay (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/edit/SceneTools.svelte:31 updateContent (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 3); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 4); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 5); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 5); src/frontend/components/helpers/historyActions.ts:230 handleShows (depth 6); src/frontend/components/helpers/historyActions.ts:30 SLIDES (depth 5); src/frontend/components/helpers/historyActions.ts:376 handleSlides (depth 6); src/frontend/components/helpers/historyActions.ts:31 TEMPLATE (depth 5); src/frontend/components/helpers/historyActions.ts:604 handleTemplate (depth 6); src/frontend/components/helpers/historyActions.ts:32 SHOW_LAYOUT (depth 5); src/frontend/components/helpers/historyActions.ts:812 handleShowLayout (depth 6); src/frontend/components/helpers/historyActions.ts:33 SHOW_ITEMS (depth 5).

Effects: src/frontend/components/edit/SceneTools.svelte:35 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:664 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 127. Full edges/effects/conditions in JSON.

## click — event-56390e2eb647aa678c

[code] [src/frontend/components/edit/SceneTools.svelte:179](../../../../../src/frontend/components/edit/SceneTools.svelte#L179); openAddOverlay. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/SceneTools.svelte:48 openAddOverlay (depth 0); src/frontend/components/edit/SceneTools.svelte:51 trigger (depth 1); src/frontend/components/edit/SceneTools.svelte:57 addOverlay (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/edit/SceneTools.svelte:31 updateContent (depth 3); src/frontend/components/helpers/history.ts:39 history (depth 4); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 5); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 6); src/frontend/components/helpers/historyActions.ts:30 SLIDES (depth 6); src/frontend/components/helpers/historyActions.ts:31 TEMPLATE (depth 6); src/frontend/components/helpers/historyActions.ts:32 SHOW_LAYOUT (depth 6); src/frontend/components/helpers/historyActions.ts:33 SHOW_ITEMS (depth 6); src/frontend/components/helpers/shows.ts:226 add (depth 5); src/frontend/components/helpers/shows.ts:227 <callback> (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 5).

Effects: src/frontend/components/edit/SceneTools.svelte:49 store-write src/frontend/stores.ts#popupData ; src/frontend/components/edit/SceneTools.svelte:54 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/SceneTools.svelte:35 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 4; depth cutoffs: 66. Full edges/effects/conditions in JSON.
