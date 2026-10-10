# automatic/src_frontend_components_main_popups_Action.svelte (1)

## setTimeout — event-bbac0b57ccc814a47f

[code] [src/frontend/components/main/popups/Action.svelte:239](../../../../../src/frontend/components/main/popups/Action.svelte#L239); saveAction. partial.

Conditions: src/frontend/components/main/popups/Action.svelte:237 action; src/frontend/components/main/popups/Action.svelte:242 !loaded \|\| stopUpdate; src/frontend/components/main/popups/Action.svelte:243 mode !== "slide" && mode !== "overlay" && mode !== "template" && !action.name; src/frontend/components/main/popups/Action.svelte:245 action.midiEnabled && !action.midi; src/frontend/components/main/popups/Action.svelte:247 mode === "overlay"; src/frontend/components/main/popups/Action.svelte:250 !overlay; src/frontend/components/main/popups/Action.svelte:251 !action.triggers?.length; src/frontend/components/main/popups/Action.svelte:255 existingIndex > -1; src/frontend/components/main/popups/Action.svelte:260 mode === "template"; src/frontend/components/main/popups/Action.svelte:263 !template; src/frontend/components/main/popups/Action.svelte:264 !action.triggers?.length; src/frontend/components/main/popups/Action.svelte:270 existingIndex > -1; src/frontend/components/main/popups/Action.svelte:276 mode !== "slide"; src/frontend/components/main/popups/Action.svelte:280 !exists && $drawerTabsData.functions?.activeSubTab === "actions" && $drawerTabsData.functions?.activeSubmenu.

Calls: src/frontend/components/main/popups/Action.svelte:241 saveAction (depth 0); src/frontend/components/main/popups/Action.svelte:254 <callback> (depth 1); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5).

Effects: src/frontend/components/main/popups/Action.svelte:259 history history UPDATE; src/frontend/components/main/popups/Action.svelte:275 history history UPDATE; src/frontend/components/main/popups/Action.svelte:250 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/Action.svelte:263 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 123. Full edges/effects/conditions in JSON.

## setTimeout — event-0d7f601f87a19a0282

[code] [src/frontend/components/main/popups/Action.svelte:304](../../../../../src/frontend/components/main/popups/Action.svelte#L304); () => (stopUpdate = false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Action.svelte:304 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
