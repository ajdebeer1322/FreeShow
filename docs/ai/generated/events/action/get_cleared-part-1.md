# action/get_cleared (1)

## get_cleared — event-9ca983f038b24ecaa6

[code] [src/frontend/components/actions/api.ts:439](../../../../../src/frontend/components/actions/api.ts#L439); () => getClearedState(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:439 get_cleared (depth 0); src/frontend/components/actions/apiHelper.ts:683 getClearedState (depth 1); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 2); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 3); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:677 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:679 <callback> (depth 4); src/frontend/components/helpers/output.ts:681 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:1102 addOutput (depth 4); src/frontend/components/helpers/output.ts:1106 <callback> (depth 5).

Effects: src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 5. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
