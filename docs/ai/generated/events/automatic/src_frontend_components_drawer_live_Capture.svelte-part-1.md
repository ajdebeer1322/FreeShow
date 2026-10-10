# automatic/src_frontend_components_drawer_live_Capture.svelte (1)

## setTimeout — event-679406769672e45e0d

[code] [src/frontend/components/drawer/live/Capture.svelte:58](../../../../../src/frontend/components/drawer/live/Capture.svelte#L58); ready. partial.

Conditions: src/frontend/components/drawer/live/Capture.svelte:20 loaded \|\| !videoElem \|\| background \|\| !canvas.

Calls: src/frontend/components/drawer/live/Capture.svelte:19 ready (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ce424cd37eb2fbc53f

[code] [src/frontend/components/drawer/live/Capture.svelte:70](../../../../../src/frontend/components/drawer/live/Capture.svelte#L70); capture. resolved-within-bound.

Conditions: src/frontend/components/drawer/live/Capture.svelte:52 !videoElem.

Calls: src/frontend/components/drawer/live/Capture.svelte:48 capture (depth 0); src/frontend/components/drawer/live/Capture.svelte:51 <callback> (depth 1); src/frontend/components/drawer/live/Capture.svelte:56 <callback> (depth 2); src/frontend/components/drawer/live/Capture.svelte:61 <callback> (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/drawer/live/Capture.svelte:66 ipc sendMain(Main.ACCESS_SCREEN_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
