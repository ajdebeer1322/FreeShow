# automatic/src_frontend_utils_cloudSync.ts (1)

## setTimeout — event-63c52d0498cc81a090

[code] [src/frontend/utils/cloudSync.ts:106](../../../../../src/frontend/utils/cloudSync.ts#L106); () => activePopup.set("cloud_method"). resolved-within-bound.

Conditions: src/frontend/utils/cloudSync.ts:103 existingData.

Calls: src/frontend/utils/cloudSync.ts:106 <callback> (depth 0).

Effects: src/frontend/utils/cloudSync.ts:106 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-cb4fde2d77d8a4044c

[code] [src/frontend/utils/cloudSync.ts:204](../../../../../src/frontend/utils/cloudSync.ts#L204); () => saved.set(true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/cloudSync.ts:204 <callback> (depth 0).

Effects: src/frontend/utils/cloudSync.ts:204 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2949f6f4498405cfb8

[code] [src/frontend/utils/cloudSync.ts:418](../../../../../src/frontend/utils/cloudSync.ts#L418); () => previousData.set(key, clone(get(store))). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/cloudSync.ts:418 <callback> (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
