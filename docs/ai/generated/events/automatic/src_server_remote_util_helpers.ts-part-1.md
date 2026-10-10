# automatic/src_server_remote_util_helpers.ts (1)

## setTimeout — event-c5bddd74e971e5d792

[code] [src/server/remote/util/helpers.ts:27](../../../../../src/server/remote/util/helpers.ts#L27); () => { errors = clone(_get("errors")) errors.shift() _set("errors", errors) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/util/helpers.ts:27 <callback> (depth 0); src/server/common/util/helpers.ts:4 clone (depth 1); src/server/remote/util/stores.ts:197 _get (depth 1); src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: src/server/remote/util/helpers.ts:30 store-write src/server/remote/util/stores.ts#errors .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-832b32f5decf397e0a

[code] [src/server/remote/util/helpers.ts:126](../../../../../src/server/remote/util/helpers.ts#L126); () => fn(...args). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/util/helpers.ts:126 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-7b58eb9cfa97fea7cb

[code] [src/server/remote/util/helpers.ts:137](../../../../../src/server/remote/util/helpers.ts#L137); () => (waiting = false). resolved-within-bound.

Conditions: src/server/remote/util/helpers.ts:134 !waiting.

Calls: src/server/remote/util/helpers.ts:137 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5e4bd8b7ff2ae7fbe8

[code] [src/server/remote/util/helpers.ts:195](../../../../../src/server/remote/util/helpers.ts#L195); () => { lastLongPressAt = Date.now() options.onLongPress(context) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/util/helpers.ts:195 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
