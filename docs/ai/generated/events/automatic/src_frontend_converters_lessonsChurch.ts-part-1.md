# automatic/src_frontend_converters_lessonsChurch.ts (1)

## setTimeout — event-8bb64cf45235bc89e9

[code] [src/frontend/converters/lessonsChurch.ts:95](../../../../../src/frontend/converters/lessonsChurch.ts#L95); () => { refreshSlideThumbnails.set(true) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/converters/lessonsChurch.ts:95 <callback> (depth 0).

Effects: src/frontend/converters/lessonsChurch.ts:96 store-write src/frontend/stores.ts#refreshSlideThumbnails .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-21ffc6481f576aafa5

[code] [src/frontend/converters/lessonsChurch.ts:109](../../../../../src/frontend/converters/lessonsChurch.ts#L109); () => { activeRename.set(null) projectView.set(false) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/converters/lessonsChurch.ts:109 <callback> (depth 0).

Effects: src/frontend/converters/lessonsChurch.ts:110 store-write src/frontend/stores.ts#activeRename ; src/frontend/converters/lessonsChurch.ts:111 store-write src/frontend/stores.ts#projectView .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-93500275ce1210422c

[code] [src/frontend/converters/lessonsChurch.ts:187](../../../../../src/frontend/converters/lessonsChurch.ts#L187); () => { removeListener() console.warn("Timed out!") resolve(&#91;&#93;) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/converters/lessonsChurch.ts:187 <callback> (depth 0); src/frontend/converters/lessonsChurch.ts:198 removeListener (depth 1); src/frontend/IPC/main.ts:124 destroyMain (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
