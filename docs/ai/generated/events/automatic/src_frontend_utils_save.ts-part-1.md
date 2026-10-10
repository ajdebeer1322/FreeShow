# automatic/src_frontend_utils_save.ts (1)

## setTimeout — event-2cc89acbca8d21c486

[code] [src/frontend/utils/save.ts:254](../../../../../src/frontend/utils/save.ts#L254); () => sendMain(Main.SAVE, saveData). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/save.ts:254 <callback> (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/utils/save.ts:254 ipc sendMain(Main.SAVE, saveData) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a8e69a37e7b8f4abce

[code] [src/frontend/utils/save.ts:350](../../../../../src/frontend/utils/save.ts#L350); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bd9d09067289173a05

[code] [src/frontend/utils/save.ts:394](../../../../../src/frontend/utils/save.ts#L394); () => saved.set(false). resolved-within-bound.

Conditions: src/frontend/utils/save.ts:393 id === "deletedShows" \|\| id === "renamedShows".

Calls: src/frontend/utils/save.ts:394 <callback> (depth 0).

Effects: src/frontend/utils/save.ts:394 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
