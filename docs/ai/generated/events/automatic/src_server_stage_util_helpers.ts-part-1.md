# automatic/src_server_stage_util_helpers.ts (1)

## setTimeout — event-d42615b8efb669867e

[code] [src/server/stage/util/helpers.ts:17](../../../../../src/server/stage/util/helpers.ts#L17); () => { errors = clone(_get("errors")) errors.shift() _set("errors", errors) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/stage/util/helpers.ts:17 <callback> (depth 0); src/server/common/util/helpers.ts:4 clone (depth 1); src/server/stage/util/stores.ts:91 _get (depth 1); src/server/stage/util/stores.ts:96 _set (depth 1).

Effects: src/server/stage/util/helpers.ts:20 store-write src/server/stage/util/stores.ts#errors .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
