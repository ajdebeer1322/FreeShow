# automatic/src_frontend_utils_common.ts (2)

## setTimeout — event-d56529731fc425d8b6

[code] [src/frontend/utils/common.ts:217](../../../../../src/frontend/utils/common.ts#L217); () => { activeTriggerFunction.set("") triggerTimeout = null }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:217 <callback> (depth 0).

Effects: src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5309f5c421be072859

[code] [src/frontend/utils/common.ts:247](../../../../../src/frontend/utils/common.ts#L247); () => { if (throttled&#91;id&#93; !== "WAITING") callback(throttled&#91;id&#93;) delete throttled&#91;id&#93; }. partial.

Conditions: src/frontend/utils/common.ts:248 throttled&#91;id&#93; !== "WAITING".

Calls: src/frontend/utils/common.ts:247 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6cc62eb2d63b9db3de

[code] [src/frontend/utils/common.ts:263](../../../../../src/frontend/utils/common.ts#L263); () => { delete limited&#91;id&#93; resolve(false) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/common.ts:263 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
