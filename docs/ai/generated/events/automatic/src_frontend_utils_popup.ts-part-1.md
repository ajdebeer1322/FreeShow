# automatic/src_frontend_utils_popup.ts (1)

## setInterval — event-3657d68f81bb5bbf88

[code] [src/frontend/utils/popup.ts:194](../../../../../src/frontend/utils/popup.ts#L194); () => { if (get(activePopup) !== popupId) finish(undefined) }. partial.

Conditions: src/frontend/utils/popup.ts:195 get(activePopup) !== popupId.

Calls: src/frontend/utils/popup.ts:194 <callback> (depth 0); src/frontend/utils/popup.ts:204 finish (depth 1); src/frontend/utils/popup.ts:191 unsubscribe (depth 2); src/frontend/utils/popup.ts:207 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bfbae1b66fe5b959f9

[code] [src/frontend/utils/popup.ts:207](../../../../../src/frontend/utils/popup.ts#L207); () => { resolve(value) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/popup.ts:207 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
