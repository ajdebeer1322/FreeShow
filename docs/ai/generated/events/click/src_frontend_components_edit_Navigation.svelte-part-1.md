# click/src_frontend_components_edit_Navigation.svelte (1)

## click — event-2d2bf53349b30789ec

[code] [src/frontend/components/edit/Navigation.svelte:133](../../../../../src/frontend/components/edit/Navigation.svelte#L133); () => activePage.set("show"). resolved-within-bound.

Conditions: src/frontend/components/edit/Navigation.svelte:132 $focusMode.

Calls: no function target resolved.

Effects: src/frontend/components/edit/Navigation.svelte:133 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2464dce06f2216c59b

[code] [src/frontend/components/edit/Navigation.svelte:148](../../../../../src/frontend/components/edit/Navigation.svelte#L148); () => openRecent(edited). resolved-within-bound.

Conditions: src/frontend/components/edit/Navigation.svelte:139 $focusMode && currentShowId; src/frontend/components/edit/Navigation.svelte:141 $activeEdit.id \|\| ((!currentShowId \|\| !$shows&#91;currentShowId&#93;) && $editHistory.length) \|\| $editMode === "text_edit"; src/frontend/components/edit/Navigation.svelte:145 $editHistory.length.

Calls: src/frontend/components/edit/Navigation.svelte:117 openRecent (depth 1).

Effects: src/frontend/components/edit/Navigation.svelte:118 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Navigation.svelte:119 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/edit/Navigation.svelte:121 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Navigation.svelte:122 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-caad9fb152e6c0ba8e

[code] [src/frontend/components/edit/Navigation.svelte:167](../../../../../src/frontend/components/edit/Navigation.svelte#L167); addSlide. partial.

Conditions: src/frontend/components/edit/Navigation.svelte:139 $focusMode && currentShowId; src/frontend/components/edit/Navigation.svelte:141 $activeEdit.id \|\| ((!currentShowId \|\| !$shows&#91;currentShowId&#93;) && $editHistory.length) \|\| $editMode === "text_edit"; src/frontend/components/edit/Navigation.svelte:159 $activeShow && ($activeShow.type === undefined \|\| $activeShow.type === "show"); src/frontend/components/edit/Navigation.svelte:25 $activeEdit?.slide !== null && $activeEdit?.slide !== undefined; src/frontend/components/edit/Navigation.svelte:27 ref&#91;$activeEdit?.slide&#93;; src/frontend/components/edit/Navigation.svelte:30 e.detail.shift.

Calls: src/frontend/components/edit/Navigation.svelte:20 addSlide (depth 0); src/frontend/components/helpers/show.ts:418 getLayoutRef (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/edit/Navigation.svelte:31 history history SLIDES; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 89. Full edges/effects/conditions in JSON.
