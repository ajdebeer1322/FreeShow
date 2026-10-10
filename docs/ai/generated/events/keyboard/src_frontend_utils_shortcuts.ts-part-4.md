# keyboard/src_frontend_utils_shortcuts.ts (4)

## Ctrl/Cmd+Shift+t — event-bfde8a842b04ee9d23

[code] [src/frontend/utils/shortcuts.ts:67](../../../../../src/frontend/utils/shortcuts.ts#L67); () => { // toggle text edit if (get(activeShow)?.type !== "show") return if (get(activePage) === "edit" && get(editMode) === "text_edit") { activePage.set("show") editMode.set("def. resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:69 get(activeShow)?.type !== "show"; src/frontend/utils/shortcuts.ts:70 get(activePage) === "edit" && get(editMode) === "text_edit"; src/frontend/utils/shortcuts.ts:75 !get(activeEdit)?.showId.

Calls: src/frontend/utils/shortcuts.ts:67 t (depth 0).

Effects: src/frontend/utils/shortcuts.ts:71 store-write src/frontend/stores.ts#activePage ; src/frontend/utils/shortcuts.ts:72 store-write src/frontend/stores.ts#editMode ; src/frontend/utils/shortcuts.ts:75 store-write src/frontend/stores.ts#activeEdit ; src/frontend/utils/shortcuts.ts:76 store-write src/frontend/stores.ts#editMode ; src/frontend/utils/shortcuts.ts:77 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+f — event-572c2d4e0fffc9a19c

[code] [src/frontend/utils/shortcuts.ts:79](../../../../../src/frontend/utils/shortcuts.ts#L79); () => menuClick("focus_mode"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:79 f (depth 0); src/frontend/components/context/menuClick.ts:136 menuClick (depth 1); src/frontend/components/context/menuClick.ts:159 focus_mode (depth 2); src/frontend/utils/common.ts:26 newToast (depth 3); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 4).

Effects: src/frontend/components/context/menuClick.ts:166 store-write src/frontend/stores.ts#previousShow ; src/frontend/components/context/menuClick.ts:167 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/context/menuClick.ts:168 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/context/menuClick.ts:173 store-write src/frontend/stores.ts#drawer ; src/frontend/components/context/menuClick.ts:176 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/context/menuClick.ts:178 store-write src/frontend/stores.ts#activePage ; src/frontend/components/context/menuClick.ts:179 store-write src/frontend/stores.ts#focusMode ; src/frontend/components/context/menuClick.ts:182 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+l — event-aec5438f4ff096c3d9

[code] [src/frontend/utils/shortcuts.ts:81](../../../../../src/frontend/utils/shortcuts.ts#L81); () => debugPanelOpen.update((a) => !a). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:81 l (depth 0); src/frontend/utils/shortcuts.ts:81 <callback> (depth 1).

Effects: src/frontend/utils/shortcuts.ts:81 store-write src/frontend/components/helpers/debugLog.ts#debugPanelOpen .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+n — event-51df2f1e623bb48439

[code] [src/frontend/utils/shortcuts.ts:82](../../../../../src/frontend/utils/shortcuts.ts#L82); () => activePopup.set("show"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:82 n (depth 0).

Effects: src/frontend/utils/shortcuts.ts:82 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+v — event-b00a96795444ac0966

[code] [src/frontend/utils/shortcuts.ts:83](../../../../../src/frontend/utils/shortcuts.ts#L83); () => changeSlidesView(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:83 v (depth 0); src/frontend/show/slides.ts:15 changeSlidesView (depth 1).

Effects: src/frontend/show/slides.ts:16 store-write src/frontend/stores.ts#slidesOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+Shift+z — event-8a74dd42267c267019

[code] [src/frontend/utils/shortcuts.ts:84](../../../../../src/frontend/utils/shortcuts.ts#L84); () => redo(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:84 z (depth 0); src/frontend/components/helpers/history.ts:325 redo (depth 1); src/frontend/components/helpers/history.ts:330 <callback> (depth 2); src/frontend/components/helpers/historyStores.ts:11 createStore (depth 2); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 4); src/frontend/components/helpers/history.ts:269 historyNew (depth 3); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 5); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:73 <callback> (depth 5); src/frontend/components/helpers/history.ts:283 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 4).

Effects: src/frontend/components/helpers/history.ts:360 history history dynamic; src/frontend/components/helpers/history.ts:330 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:345 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 120. Full edges/effects/conditions in JSON.
