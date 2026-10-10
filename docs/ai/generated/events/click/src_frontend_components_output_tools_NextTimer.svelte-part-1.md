# click/src_frontend_components_output_tools_NextTimer.svelte (1)

## click — event-207bb871450a9b1405

[code] [src/frontend/components/output/tools/NextTimer.svelte:76](../../../../../src/frontend/components/output/tools/NextTimer.svelte#L76); () => playPause(timer.paused). partial.

Conditions: src/frontend/components/output/tools/NextTimer.svelte:73 timer.timer && timer.max.

Calls: src/frontend/components/output/tools/NextTimer.svelte:51 playPause (depth 1); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:658 <callback> (depth 3); src/frontend/components/output/tools/NextTimer.svelte:53 <callback> (depth 2).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 4. Full edges/effects/conditions in JSON.
