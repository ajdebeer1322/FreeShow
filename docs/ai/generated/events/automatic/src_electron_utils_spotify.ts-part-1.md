# automatic/src_electron_utils_spotify.ts (1)

## setTimeout — event-d8cb72cfff91f6febf

[code] [src/electron/utils/spotify.ts:179](../../../../../src/electron/utils/spotify.ts#L179); () => pending === res && (pending(null), (pending = null)). partial.

Conditions: src/electron/utils/spotify.ts:172 isWin.

Calls: src/electron/utils/spotify.ts:179 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0d6accccfbd6a02f7e

[code] [src/electron/utils/spotify.ts:215](../../../../../src/electron/utils/spotify.ts#L215); () => bridge?.send({ type: "command", command: cmd, value: val }). resolved-within-bound.

Conditions: src/electron/utils/spotify.ts:213 isWin; src/electron/utils/spotify.ts:212 isWin && bridge?.connected; src/electron/utils/spotify.ts:209 isMac.

Calls: src/electron/utils/spotify.ts:215 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
