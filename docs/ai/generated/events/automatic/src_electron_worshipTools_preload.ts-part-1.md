# automatic/src_electron_worshipTools_preload.ts (1)

## setTimeout — event-0d9d157fbf4946c4e2

[code] [src/electron/worshipTools/preload.ts:21](../../../../../src/electron/worshipTools/preload.ts#L21); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-3fccfb2fd85f57b81c

[code] [src/electron/worshipTools/preload.ts:99](../../../../../src/electron/worshipTools/preload.ts#L99); publishCatalog. partial.

Conditions: src/electron/worshipTools/preload.ts:98 isTopFrame; src/electron/worshipTools/preload.ts:30 signature === lastCatalog.

Calls: src/electron/worshipTools/preload.ts:27 publishCatalog (depth 0); src/electron/worshipTools/extract.ts:28 readServiceSongs (depth 1); src/electron/worshipTools/extract.ts:37 <callback> (depth 2); src/electron/worshipTools/extract.ts:9 cleanText (depth 3); src/electron/worshipTools/extract.ts:43 <callback> (depth 3).

Effects: src/electron/worshipTools/preload.ts:33 ipc ipcRenderer.send(WT_CATALOG, catalog) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
