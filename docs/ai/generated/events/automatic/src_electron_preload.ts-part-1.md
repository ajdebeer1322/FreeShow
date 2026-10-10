# automatic/src_electron_preload.ts (1)

## setTimeout — event-37b85b00f452d4a83f

[code] [src/electron/preload.ts:34](../../../../../src/electron/preload.ts#L34); () => (appLoaded = true). resolved-within-bound.

Conditions: src/electron/preload.ts:34 !appLoaded && channel === "MAIN" && args?.channel === "SHOWS".

Calls: src/electron/preload.ts:34 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
