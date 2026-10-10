# click/src_frontend_components_drawer_Drawer.svelte (1)

## click — event-45ca1bf6ca1de7ac2d

[code] [src/frontend/components/drawer/Drawer.svelte:262](../../../../../src/frontend/components/drawer/Drawer.svelte#L262); click. resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:82 (height > minHeight && e?.target?.closest("button")) \|\| move \|\| e?.target instanceof HTMLInputElement; src/frontend/components/drawer/Drawer.svelte:87 height > minHeight; src/frontend/components/drawer/Drawer.svelte:89 e === null \|\| e?.target.classList.contains("top") \|\| e?.target?.closest("#" + $activeDrawerTab); src/frontend/components/drawer/Drawer.svelte:96 $activePage === "edit"; src/frontend/components/drawer/Drawer.svelte:99 e === null && &#91;"shows", "overlays", "templates", "media", "audio"&#93;.includes($activeDrawerTab); src/frontend/components/drawer/Drawer.svelte:100 $activeDrawerTab === "media".

Calls: src/frontend/components/drawer/Drawer.svelte:81 click (depth 0); src/frontend/components/drawer/Drawer.svelte:108 closeDrawer (depth 1); src/frontend/components/drawer/Drawer.svelte:100 <callback> (depth 1); src/frontend/components/drawer/Drawer.svelte:101 <callback> (depth 1).

Effects: src/frontend/components/drawer/Drawer.svelte:90 store-write src/frontend/stores.ts#drawerOpenedInEdit ; src/frontend/components/drawer/Drawer.svelte:95 store-write src/frontend/stores.ts#drawer ; src/frontend/components/drawer/Drawer.svelte:96 store-write src/frontend/stores.ts#drawerOpenedInEdit ; src/frontend/components/drawer/Drawer.svelte:109 store-write src/frontend/stores.ts#drawer ; src/frontend/components/drawer/Drawer.svelte:110 store-write src/frontend/stores.ts#drawerOpenedInEdit ; src/frontend/components/drawer/Drawer.svelte:100 store-write src/frontend/stores.ts#mediaOptions ; src/frontend/components/drawer/Drawer.svelte:101 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/components/drawer/Drawer.svelte:102 store-write src/frontend/stores.ts#activeDrawerTab .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b1eec8517bf2dbcc8d

[code] [src/frontend/components/drawer/Drawer.svelte:277](../../../../../src/frontend/components/drawer/Drawer.svelte#L277); () => openDrawerTab(tab). resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:275 $drawerTabsData&#91;tab.id&#93;?.enabled !== false && getAccess(tab.id).global !== "none" && (!$focusMode \|\| !hiddenInFocusMode.includes(tab.id)).

Calls: src/frontend/components/drawer/Drawer.svelte:133 openDrawerTab (depth 1); src/frontend/components/drawer/Drawer.svelte:141 <callback> (depth 2); src/frontend/components/drawer/Drawer.svelte:145 <callback> (depth 3).

Effects: src/frontend/components/drawer/Drawer.svelte:142 store-write src/frontend/stores.ts#activeDrawerTab .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f1278e473d1c913c6d

[code] [src/frontend/components/drawer/Drawer.svelte:289](../../../../../src/frontend/components/drawer/Drawer.svelte#L289); () => (searchActive = true). resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:288 !searchActive && !searchValue.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-87e01fc1949abd602b

[code] [src/frontend/components/drawer/Drawer.svelte:299](../../../../../src/frontend/components/drawer/Drawer.svelte#L299); () => activePopup.set("drawer_search_options"). resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:288 !searchActive && !searchValue.length; src/frontend/components/drawer/Drawer.svelte:294 $activeDrawerTab === "scripture".

Calls: no function target resolved.

Effects: src/frontend/components/drawer/Drawer.svelte:299 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-37c91c14884b586dea

[code] [src/frontend/components/drawer/Drawer.svelte:308](../../../../../src/frontend/components/drawer/Drawer.svelte#L308); () => { searchValue = "" searchElem?.focus() }. resolved-within-bound.

Conditions: src/frontend/components/drawer/Drawer.svelte:288 !searchActive && !searchValue.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
