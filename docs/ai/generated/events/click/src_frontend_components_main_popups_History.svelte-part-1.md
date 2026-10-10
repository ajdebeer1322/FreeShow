# click/src_frontend_components_main_popups_History.svelte (1)

## click — event-65642ecb2f48d6cd55

[code] [src/frontend/components/main/popups/History.svelte:112](../../../../../src/frontend/components/main/popups/History.svelte#L112); clearHistory. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/History.svelte:93 clearHistory (depth 0).

Effects: src/frontend/components/main/popups/History.svelte:94 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/main/popups/History.svelte:95 store-write src/frontend/stores.ts#redoHistory .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-787941af19fe398897

[code] [src/frontend/components/main/popups/History.svelte:119](../../../../../src/frontend/components/main/popups/History.svelte#L119); () => callRedo(i). partial.

Conditions: src/frontend/components/main/popups/History.svelte:115 rHistory.length \|\| uHistory.length.

Calls: src/frontend/components/main/popups/History.svelte:85 callRedo (depth 1); src/frontend/components/main/popups/History.svelte:87 <callback> (depth 2); src/frontend/components/helpers/history.ts:325 redo (depth 3); src/frontend/components/helpers/history.ts:330 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:11 createStore (depth 4); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 5); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 6); src/frontend/components/helpers/history.ts:269 historyNew (depth 5); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 6); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 6); src/frontend/components/helpers/history.ts:283 <callback> (depth 6); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 5); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 6); src/frontend/components/helpers/historyStores.ts:35 deleteStore (depth 4).

Effects: src/frontend/components/helpers/history.ts:360 history history dynamic; src/frontend/components/helpers/history.ts:330 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:345 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 7; depth cutoffs: 67. Full edges/effects/conditions in JSON.

## click — event-0e67b158ad04e21ac0

[code] [src/frontend/components/main/popups/History.svelte:130](../../../../../src/frontend/components/main/popups/History.svelte#L130); () => callUndo(i - 1). partial.

Conditions: src/frontend/components/main/popups/History.svelte:115 rHistory.length \|\| uHistory.length.

Calls: src/frontend/components/main/popups/History.svelte:77 callUndo (depth 1); src/frontend/components/main/popups/History.svelte:79 <callback> (depth 2); src/frontend/components/helpers/history.ts:289 undo (depth 3); src/frontend/components/helpers/history.ts:294 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:35 deleteStore (depth 4); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 5); src/frontend/components/helpers/historyStores.ts:73 <callback> (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/history.ts:269 historyNew (depth 5); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 6); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 6); src/frontend/components/helpers/history.ts:283 <callback> (depth 6); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 4); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 5); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 6); src/frontend/components/helpers/historyStores.ts:11 createStore (depth 4).

Effects: src/frontend/components/helpers/history.ts:322 history history dynamic; src/frontend/components/helpers/history.ts:294 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory ; src/frontend/components/helpers/history.ts:309 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 7; depth cutoffs: 67. Full edges/effects/conditions in JSON.
