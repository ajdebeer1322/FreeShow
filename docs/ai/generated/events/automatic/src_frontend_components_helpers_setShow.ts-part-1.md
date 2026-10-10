# automatic/src_frontend_components_helpers_setShow.ts (1)

## setTimeout — event-92ae4a2ea5173999c4

[code] [src/frontend/components/helpers/setShow.ts:247](../../../../../src/frontend/components/helpers/setShow.ts#L247); () => saved.set(true). resolved-within-bound.

Conditions: src/frontend/components/helpers/setShow.ts:247 savedBeforeLoading; src/frontend/components/helpers/setShow.ts:245 promises.length.

Calls: src/frontend/components/helpers/setShow.ts:247 <callback> (depth 0).

Effects: src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7e2dccf2222a71a605

[code] [src/frontend/components/helpers/setShow.ts:262](../../../../../src/frontend/components/helpers/setShow.ts#L262); () => { textCache.set({ ...get(textCache), ...tempCache }) tempCache = {} invalidateSearchIndex() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/setShow.ts:262 <callback> (depth 0); src/frontend/utils/searchFast.ts:263 invalidateSearchIndex (depth 1).

Effects: src/frontend/components/helpers/setShow.ts:263 store-write src/frontend/stores.ts#textCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
