# automatic/src_electron_utils_helpers.ts (1)

## setTimeout — event-b91f451376f79709fd

[code] [src/electron/utils/helpers.ts:32](../../../../../src/electron/utils/helpers.ts#L32); () => { resolve("ended") }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/utils/helpers.ts:32 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-092991fdcc5ad3b7d3

[code] [src/electron/utils/helpers.ts:44](../../../../../src/electron/utils/helpers.ts#L44); () => { exit() resolve(null) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/utils/helpers.ts:44 <callback> (depth 0); src/electron/utils/helpers.ts:57 exit (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-ca06d54e7492f6eeb5

[code] [src/electron/utils/helpers.ts:49](../../../../../src/electron/utils/helpers.ts#L49); () => { currentValue = value() if (!currentValue) return exit() resolve(currentValue) }. partial.

Conditions: src/electron/utils/helpers.ts:51 !currentValue.

Calls: src/electron/utils/helpers.ts:49 <callback> (depth 0); src/electron/utils/helpers.ts:57 exit (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
