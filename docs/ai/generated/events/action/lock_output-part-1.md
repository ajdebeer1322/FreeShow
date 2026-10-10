# action/lock_output (1)

## lock_output — event-7bfd93f8d7b6df424f

[code] [src/frontend/components/actions/api.ts:291](../../../../../src/frontend/components/actions/api.ts#L291); (data: API_output_lock) => toggleLock(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:291 lock_output (depth 0); src/frontend/components/actions/apiHelper.ts:332 toggleLock (depth 1); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 2); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/array.ts:53 sortObject (depth 4); src/frontend/components/helpers/array.ts:54 <callback> (depth 5); src/frontend/utils/language.ts:83 translateText (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 4); src/frontend/components/helpers/array.ts:45 <callback> (depth 5); src/frontend/components/helpers/array.ts:46 <callback> (depth 5); src/frontend/components/helpers/array.ts:137 keysToID (depth 4); src/frontend/components/helpers/array.ts:139 <callback> (depth 5); src/frontend/components/helpers/output.ts:616 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:618 <callback> (depth 3).

Effects: src/frontend/components/actions/apiHelper.ts:335 store-write src/frontend/stores.ts#outLocked ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/actions/apiHelper.ts:348 store-write src/frontend/stores.ts#outputs ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 2. Full edges/effects/conditions in JSON.

[code] Payload type: API_output_lock. [External/internal input routes](../inputs.json) retain transport and permission limits.
