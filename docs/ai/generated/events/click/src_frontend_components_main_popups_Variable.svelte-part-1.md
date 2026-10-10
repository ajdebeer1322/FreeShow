# click/src_frontend_components_main_popups_Variable.svelte (1)

## click — event-a049c5b81ed93b184a

[code] [src/frontend/components/main/popups/Variable.svelte:254](../../../../../src/frontend/components/main/popups/Variable.svelte#L254); (e) => { chosenType = e.detail updateValue(chosenType, "type") }. partial.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType.

Calls: src/frontend/components/main/popups/Variable.svelte:34 updateValue (depth 1); src/frontend/components/main/popups/Variable.svelte:54 <callback> (depth 2); src/frontend/components/helpers/historyStores.ts:21 updateStore (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/historyStores.ts:61 updateStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:64 <callback> (depth 4); src/frontend/components/helpers/history.ts:269 historyNew (depth 3); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 5); src/frontend/components/helpers/historyStores.ts:70 deleteStoreHistory (depth 4); src/frontend/components/helpers/historyStores.ts:73 <callback> (depth 5); src/frontend/components/helpers/history.ts:283 <callback> (depth 4); src/frontend/components/helpers/historyStores.ts:11 createStore (depth 2); src/frontend/components/helpers/historyStores.ts:48 createStoreHistory (depth 3); src/frontend/components/helpers/historyStores.ts:52 <callback> (depth 4).

Effects: src/frontend/components/helpers/history.ts:283 store-write src/frontend/stores.ts#undoHistory .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3e4435ad0e404c6332

[code] [src/frontend/components/main/popups/Variable.svelte:261](../../../../../src/frontend/components/main/popups/Variable.svelte#L261); () => (chosenType = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:260 !existing.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4a3e6ea3abf3351f2f

[code] [src/frontend/components/main/popups/Variable.svelte:275](../../../../../src/frontend/components/main/popups/Variable.svelte#L275); () => (showMoreRN = !showMoreRN). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-436e1530ee90db87af

[code] [src/frontend/components/main/popups/Variable.svelte:307](../../../../../src/frontend/components/main/popups/Variable.svelte#L307); () => duplicateSet(i). partial.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:306 (currentVariable.sets?.length \|\| 1) > 1.

Calls: src/frontend/components/main/popups/Variable.svelte:91 duplicateSet (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/main/popups/Variable.svelte:100 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:100 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-86bac0ed3d32975baf

[code] [src/frontend/components/main/popups/Variable.svelte:308](../../../../../src/frontend/components/main/popups/Variable.svelte#L308); () => removeSet(i). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:306 (currentVariable.sets?.length \|\| 1) > 1.

Calls: src/frontend/components/main/popups/Variable.svelte:106 removeSet (depth 1); src/frontend/components/main/popups/Variable.svelte:112 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:112 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-12ad00aea4c27ce013

[code] [src/frontend/components/main/popups/Variable.svelte:317](../../../../../src/frontend/components/main/popups/Variable.svelte#L317); () => { if (!currentVariable.sets) updateSet(0, DEFAULT_SET.minValue, "minValue") updateSet(currentVariable.sets?.length \|\| 0, DEFAULT_SET.minValue, "minValue") }. partial.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number".

Calls: src/frontend/components/main/popups/Variable.svelte:76 updateSet (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/main/popups/Variable.svelte:85 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:85 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
