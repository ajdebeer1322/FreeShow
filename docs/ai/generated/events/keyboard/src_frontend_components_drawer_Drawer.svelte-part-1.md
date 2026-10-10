# keyboard/src_frontend_components_drawer_Drawer.svelte (1)

## dynamic — event-7eee1b7ec699a9b000

[code] [src/frontend/components/drawer/Drawer.svelte:255](../../../../../src/frontend/components/drawer/Drawer.svelte#L255); keydown. partial.

Conditions: src/frontend/components/drawer/Drawer.svelte:165 e.shiftKey \|\| e.altKey; src/frontend/components/drawer/Drawer.svelte:169 ctrlKey === "f"; src/frontend/components/drawer/Drawer.svelte:170 $activePopup === "show" \|\| shouldOpenReplace(); src/frontend/components/drawer/Drawer.svelte:177 isClosed && mediaTab; src/frontend/components/drawer/Drawer.svelte:184 ctrlKey === "d" && !isTypingTarget(document.activeElement); src/frontend/components/drawer/Drawer.svelte:185 !$selected?.id && !$activeEdit.items.length; src/frontend/components/drawer/Drawer.svelte:186 e.key === "Enter"; src/frontend/components/drawer/Drawer.svelte:187 document.activeElement !== searchElem \|\| !searchValue.trim().length \|\| !firstMatch \|\| $focusMode; src/frontend/components/drawer/Drawer.svelte:188 $activeDrawerTab !== "shows"; src/frontend/components/drawer/Drawer.svelte:193 match === "SEARCH_CREATE"; src/frontend/components/drawer/Drawer.svelte:200 !$activeProject; src/frontend/components/drawer/Drawer.svelte:207 e.ctrlKey \|\| e.metaKey; src/frontend/components/drawer/Drawer.svelte:210 !$showsCache&#91;showId&#93;; src/frontend/components/drawer/Drawer.svelte:214 firstEnabledIndex === -1.

Calls: src/frontend/components/drawer/Drawer.svelte:164 keydown (depth 0); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 1); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 2); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 2); src/frontend/utils/shortcuts.ts:147 shouldOpenReplace (depth 1); src/frontend/components/drawer/Drawer.svelte:247 focusSearch (depth 1); src/frontend/components/drawer/Drawer.svelte:249 <callback> (depth 2); src/frontend/components/drawer/Drawer.svelte:179 <callback> (depth 1); src/frontend/utils/shortcutsHelper.ts:40 isTypingTarget (depth 1); src/frontend/components/drawer/Drawer.svelte:81 click (depth 1); src/frontend/components/drawer/Drawer.svelte:108 closeDrawer (depth 2); src/frontend/components/drawer/Drawer.svelte:100 <callback> (depth 2); src/frontend/components/drawer/Drawer.svelte:101 <callback> (depth 2); src/frontend/components/helpers/setShow.ts:229 loadShows (depth 1); src/frontend/components/helpers/setShow.ts:233 <callback> (depth 2); src/frontend/components/helpers/setShow.ts:235 <callback> (depth 3).

Effects: src/frontend/components/drawer/Drawer.svelte:216 presentation updateOut ; src/frontend/components/drawer/Drawer.svelte:217 presentation setOutput ; src/frontend/components/drawer/Drawer.svelte:223 history history UPDATE; src/frontend/components/drawer/Drawer.svelte:178 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/drawer/Drawer.svelte:195 store-write src/frontend/stores.ts#quickTextCache ; src/frontend/components/drawer/Drawer.svelte:196 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/Drawer.svelte:202 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/drawer/Drawer.svelte:224 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/drawer/Drawer.svelte:179 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/components/drawer/Drawer.svelte:90 store-write src/frontend/stores.ts#drawerOpenedInEdit ; src/frontend/components/drawer/Drawer.svelte:95 store-write src/frontend/stores.ts#drawer ; src/frontend/components/drawer/Drawer.svelte:96 store-write src/frontend/stores.ts#drawerOpenedInEdit ; src/frontend/components/drawer/Drawer.svelte:109 store-write src/frontend/stores.ts#drawer ; src/frontend/components/drawer/Drawer.svelte:110 store-write src/frontend/stores.ts#drawerOpenedInEdit .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 88; depth cutoffs: 343. Full edges/effects/conditions in JSON.

## dynamic — event-3c72f8047b6e6e6e12

[code] [src/frontend/components/drawer/Drawer.svelte:263](../../../../../src/frontend/components/drawer/Drawer.svelte#L263); () => { // does not work and prevents search input keys // if (e.key === "Enter" \|\| e.key === " ") { // e.preventDefault() // click(e) // } }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-c625690b4376ae278e

[code] [src/frontend/components/drawer/Drawer.svelte:287](../../../../../src/frontend/components/drawer/Drawer.svelte#L287); searchKeydown. resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:230 e.key === "Escape".

Calls: src/frontend/components/drawer/Drawer.svelte:229 searchKeydown (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
