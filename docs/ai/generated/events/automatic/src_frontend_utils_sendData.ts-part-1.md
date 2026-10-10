# automatic/src_frontend_utils_sendData.ts (1)

## setTimeout — event-712a1422f79ede7ac5

[code] [src/frontend/utils/sendData.ts:93](../../../../../src/frontend/utils/sendData.ts#L93); () => window.api.send(id, { channel: "SHOWS", data: get(shows) }). resolved-within-bound.

Conditions: src/frontend/utils/sendData.ts:91 id === "REMOTE" && apiId === "create_show"; src/frontend/utils/sendData.ts:83 channel === "API".

Calls: src/frontend/utils/sendData.ts:93 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-3565c419e1956c6e5b

[code] [src/frontend/utils/sendData.ts:133](../../../../../src/frontend/utils/sendData.ts#L133); () => { if (JSON.stringify(msg.data) !== first) run() delete timeouts&#91;timeID&#93; }. partial.

Conditions: src/frontend/utils/sendData.ts:128 !timeouts&#91;timeID&#93;; src/frontend/utils/sendData.ts:134 JSON.stringify(msg.data) !== first.

Calls: src/frontend/utils/sendData.ts:133 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
