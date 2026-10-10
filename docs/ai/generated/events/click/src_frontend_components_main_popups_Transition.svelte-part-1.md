# click/src_frontend_components_main_popups_Transition.svelte (1)

## click — event-70ae4db56a06238bec

[code] [src/frontend/components/main/popups/Transition.svelte:286](../../../../../src/frontend/components/main/popups/Transition.svelte#L286); () => (showMore = !showMore). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0fc3e018cbb589b1b8

[code] [src/frontend/components/main/popups/Transition.svelte:289](../../../../../src/frontend/components/main/popups/Transition.svelte#L289); reset. partial.

Conditions: src/frontend/components/main/popups/Transition.svelte:288 showMore.

Calls: src/frontend/components/main/popups/Transition.svelte:251 reset (depth 0); src/frontend/components/main/popups/Transition.svelte:254 <callback> (depth 1); src/frontend/components/main/popups/Transition.svelte:37 changeTransition (depth 2); src/frontend/components/main/popups/Transition.svelte:115 updateSpecific (depth 3); src/frontend/components/main/popups/Transition.svelte:124 <callback> (depth 4); src/frontend/components/main/popups/Transition.svelte:125 <callback> (depth 4); src/frontend/components/main/popups/Transition.svelte:131 <callback> (depth 4); src/frontend/components/main/popups/Transition.svelte:152 copyTransition (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/main/popups/Transition.svelte:54 <callback> (depth 3); src/frontend/components/main/popups/Transition.svelte:61 <callback> (depth 3); src/frontend/components/main/popups/Transition.svelte:62 <callback> (depth 3); src/frontend/components/helpers/history.ts:39 history (depth 3); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 4); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 5); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 6).

Effects: src/frontend/components/main/popups/Transition.svelte:65 history history UPDATE; src/frontend/components/main/popups/Transition.svelte:75 history history setItems; src/frontend/components/main/popups/Transition.svelte:94 history history SHOW_LAYOUT; src/frontend/components/main/popups/Transition.svelte:103 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:664 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 10; depth cutoffs: 114. Full edges/effects/conditions in JSON.

## click — event-3b58a52ef4c492f6bd

[code] [src/frontend/components/main/popups/Transition.svelte:302](../../../../../src/frontend/components/main/popups/Transition.svelte#L302); () => (enableSpecific = true). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Transition.svelte:299 enableSpecific; src/frontend/components/main/popups/Transition.svelte:301 showMore.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f71b9c6f1a3a5ad240

[code] [src/frontend/components/main/popups/Transition.svelte:312](../../../../../src/frontend/components/main/popups/Transition.svelte#L312); () => changeTransition(selectedType, "type", type.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/Transition.svelte:37 changeTransition (depth 1); src/frontend/components/main/popups/Transition.svelte:115 updateSpecific (depth 2); src/frontend/components/main/popups/Transition.svelte:124 <callback> (depth 3); src/frontend/components/main/popups/Transition.svelte:125 <callback> (depth 3); src/frontend/components/main/popups/Transition.svelte:131 <callback> (depth 3); src/frontend/components/main/popups/Transition.svelte:152 copyTransition (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/main/popups/Transition.svelte:54 <callback> (depth 2); src/frontend/components/main/popups/Transition.svelte:61 <callback> (depth 2); src/frontend/components/main/popups/Transition.svelte:62 <callback> (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6).

Effects: src/frontend/components/main/popups/Transition.svelte:65 history history UPDATE; src/frontend/components/main/popups/Transition.svelte:75 history history setItems; src/frontend/components/main/popups/Transition.svelte:94 history history SHOW_LAYOUT; src/frontend/components/main/popups/Transition.svelte:103 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 10; depth cutoffs: 122. Full edges/effects/conditions in JSON.
