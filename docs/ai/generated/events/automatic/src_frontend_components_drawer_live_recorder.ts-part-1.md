# automatic/src_frontend_components_drawer_live_recorder.ts (1)

## setInterval — event-bb8cd075ac1247a7a5

[code] [src/frontend/components/drawer/live/recorder.ts:139](../../../../../src/frontend/components/drawer/live/recorder.ts#L139); () => { if (!active \|\| !ctx) return if (lastImageData) { ctx.putImageData(lastImageData, 0, 0) } }. partial.

Conditions: src/frontend/components/drawer/live/recorder.ts:140 !active \|\| !ctx; src/frontend/components/drawer/live/recorder.ts:141 lastImageData.

Calls: src/frontend/components/drawer/live/recorder.ts:139 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
