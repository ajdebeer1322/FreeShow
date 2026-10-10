# click/src_frontend_components_drawer_pages_Variables.svelte (1)

## click — event-a8444963f6d6a0a4ad

[code] [src/frontend/components/drawer/pages/Variables.svelte:77](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L77); () => updateVariable(defaultValue, variable.id, "number"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/drawer/pages/Variables.svelte:29 updateVariable (depth 1); src/frontend/components/drawer/pages/Variables.svelte:33 <callback> (depth 2).

Effects: src/frontend/components/drawer/pages/Variables.svelte:33 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0d8c5447e4382256c0

[code] [src/frontend/components/drawer/pages/Variables.svelte:98](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L98); () => updateVariable(Math.max(min, number - 1 * stepSize), variable.id, "number"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/drawer/pages/Variables.svelte:29 updateVariable (depth 1); src/frontend/components/drawer/pages/Variables.svelte:33 <callback> (depth 2).

Effects: src/frontend/components/drawer/pages/Variables.svelte:33 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d6cb02ca2ec824f790

[code] [src/frontend/components/drawer/pages/Variables.svelte:101](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L101); () => updateVariable(Math.min(max, number + 1 * stepSize), variable.id, "number"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/drawer/pages/Variables.svelte:29 updateVariable (depth 1); src/frontend/components/drawer/pages/Variables.svelte:33 <callback> (depth 2).

Effects: src/frontend/components/drawer/pages/Variables.svelte:33 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-65810b45cd0a30713f

[code] [src/frontend/components/drawer/pages/Variables.svelte:137](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L137); () => resetVariable(variable.id). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/actions/apiHelper.ts:496 resetVariable (depth 1); src/frontend/components/actions/apiHelper.ts:490 updateVariable (depth 2); src/frontend/components/actions/apiHelper.ts:491 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:491 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-18ce4eaba82f111684

[code] [src/frontend/components/drawer/pages/Variables.svelte:164](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L164); () => setRandomValue(variable.id). partial.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/helpers/randomValue.ts:12 setRandomValue (depth 1); src/frontend/components/helpers/randomValue.ts:19 <callback> (depth 2); src/frontend/components/helpers/randomValue.ts:31 <callback> (depth 2); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3); src/frontend/components/helpers/randomValue.ts:55 <callback> (depth 2); src/frontend/components/helpers/randomValue.ts:5 updateVariable (depth 2); src/frontend/components/helpers/randomValue.ts:6 <callback> (depth 3); src/frontend/components/helpers/randomValue.ts:71 animateValue (depth 2); src/frontend/components/helpers/randomValue.ts:73 <callback> (depth 3); src/frontend/utils/common.ts:46 wait (depth 3); src/frontend/utils/common.ts:47 <callback> (depth 4); src/frontend/utils/common.ts:48 <callback> (depth 5); src/frontend/components/helpers/randomValue.ts:108 <callback> (depth 3); src/frontend/components/helpers/randomValue.ts:138 setRandom (depth 3); src/frontend/components/helpers/randomValue.ts:139 <callback> (depth 4).

Effects: src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/randomValue.ts:6 store-write src/frontend/stores.ts#variables ; src/frontend/components/helpers/randomValue.ts:73 store-write src/frontend/stores.ts#randomNumberVariable ; src/frontend/components/helpers/randomValue.ts:139 store-write src/frontend/stores.ts#variables ; src/frontend/components/helpers/randomValue.ts:132 store-write src/frontend/stores.ts#randomNumberVariable ; src/frontend/components/helpers/randomValue.ts:139 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9085deb5b92c9bfc0a

[code] [src/frontend/components/drawer/pages/Variables.svelte:240](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L240); () => updateVariable(Math.max(activeSet - 1, 0), variable.id, "activeTextSet"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/drawer/pages/Variables.svelte:29 updateVariable (depth 1); src/frontend/components/drawer/pages/Variables.svelte:33 <callback> (depth 2).

Effects: src/frontend/components/drawer/pages/Variables.svelte:33 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
