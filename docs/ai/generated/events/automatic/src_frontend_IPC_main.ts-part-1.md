# automatic/src_frontend_IPC_main.ts (1)

## setTimeout — event-6116b8029e4db8b5e7

[code] [src/frontend/IPC/main.ts:37](../../../../../src/frontend/IPC/main.ts#L37); () => { if (settled) return settled = true if (get(isDev)) console.error('IPC Message Timed Out: ${id}') cleanup() resolve(undefined) }. partial.

Conditions: src/frontend/IPC/main.ts:38 settled; src/frontend/IPC/main.ts:41 get(isDev).

Calls: src/frontend/IPC/main.ts:37 <callback> (depth 0); src/frontend/IPC/main.ts:28 cleanup (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
