# automatic/src_frontend_components_helpers_media.ts (1)

## setTimeout — event-a3c034974de94cad81

[code] [src/frontend/components/helpers/media.ts:650](../../../../../src/frontend/components/helpers/media.ts#L650); () => (isImage ? "" : (mediaElem as HTMLVideoElement)?.load()). resolved-within-bound.

Conditions: src/frontend/components/helpers/media.ts:649 retries&#91;data.input&#93; > 2 \|\| isLocalFile(data.input).

Calls: src/frontend/components/helpers/media.ts:650 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
