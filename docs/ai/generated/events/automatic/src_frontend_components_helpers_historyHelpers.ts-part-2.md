# automatic/src_frontend_components_helpers_historyHelpers.ts (2)

## setTimeout — event-571fdf08ba8e3a3d67

[code] [src/frontend/components/helpers/historyHelpers.ts:572](../../../../../src/frontend/components/helpers/historyHelpers.ts#L572); () => { const allNormalOutputs = Object.keys(get(outputs)).filter((outputId) => { const output = get(outputs)&#91;outputId&#93; return !output.stageOutput }) if (allNormalOutputs.length >. resolved-within-bound.

Conditions: src/frontend/components/helpers/historyHelpers.ts:578 allNormalOutputs.length > 0; src/frontend/components/helpers/historyHelpers.ts:581 !allEnabled.length.

Calls: src/frontend/components/helpers/historyHelpers.ts:572 <callback> (depth 0); src/frontend/components/helpers/historyHelpers.ts:573 <callback> (depth 1); src/frontend/components/helpers/historyHelpers.ts:580 <callback> (depth 1); src/frontend/components/helpers/historyHelpers.ts:582 <callback> (depth 1); src/frontend/components/helpers/historyHelpers.ts:591 <callback> (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3).

Effects: src/frontend/components/helpers/historyHelpers.ts:582 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/historyHelpers.ts:591 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
