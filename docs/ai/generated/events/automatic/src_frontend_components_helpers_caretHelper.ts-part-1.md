# automatic/src_frontend_components_helpers_caretHelper.ts (1)

## setTimeout — event-210b32544a6454a63a

[code] [src/frontend/components/helpers/caretHelper.ts:27](../../../../../src/frontend/components/helpers/caretHelper.ts#L27); () => { elem.selectionStart = elem.selectionEnd = newCaretPos // send event so inputs can update values elem.dispatchEvent(new Event("change")) elem.dispatchEvent(new Event("input". resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/caretHelper.ts:27 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
