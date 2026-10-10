# automatic/src_frontend_components_settings_tabs_OutputsTabs.svelte (1)

## setTimeout — event-ec55a2511f308ea6c2

[code] [src/frontend/components/settings/tabs/OutputsTabs.svelte:51](../../../../../src/frontend/components/settings/tabs/OutputsTabs.svelte#L51); refreshOut. partial.

Conditions: src/frontend/components/settings/tabs/OutputsTabs.svelte:51 key === "style"; src/frontend/components/helpers/output.ts:743 refresh.

Calls: src/frontend/components/helpers/output.ts:735 refreshOut (depth 0); src/frontend/components/helpers/output.ts:736 <callback> (depth 1); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 2); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 3); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 4); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/array.ts:53 sortObject (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:618 <callback> (depth 5); src/frontend/components/helpers/output.ts:628 <callback> (depth 4); src/frontend/components/helpers/output.ts:647 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3).

Effects: src/frontend/components/helpers/output.ts:736 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 4. Full edges/effects/conditions in JSON.
