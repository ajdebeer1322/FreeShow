# automatic/src_frontend_components_show_ppt_ScreenCapture.svelte (1)

## setTimeout — event-98c4e59c1f39f2cd6d

[code] [src/frontend/components/show/ppt/ScreenCapture.svelte:22](../../../../../src/frontend/components/show/ppt/ScreenCapture.svelte#L22); () => requestMain(Main.GET_WINDOWS, undefined, receiveWindows). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/ppt/ScreenCapture.svelte:23 <callback> (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3).

Effects: src/frontend/components/show/ppt/ScreenCapture.svelte:23 ipc requestMain(Main.GET_WINDOWS, undefined, receiveWindows) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-11febc860a9fa83afe

[code] [src/frontend/components/show/ppt/ScreenCapture.svelte:59](../../../../../src/frontend/components/show/ppt/ScreenCapture.svelte#L59); () => { requestMain(Main.GET_WINDOWS, undefined, receiveWindows) }. partial.

Conditions: src/frontend/components/show/ppt/ScreenCapture.svelte:58 !chosenWindow; src/frontend/components/show/ppt/ScreenCapture.svelte:52 windows.length > 1; src/frontend/components/show/ppt/ScreenCapture.svelte:50 windows.length === 1.

Calls: src/frontend/components/show/ppt/ScreenCapture.svelte:59 <callback> (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3).

Effects: src/frontend/components/show/ppt/ScreenCapture.svelte:60 ipc requestMain(Main.GET_WINDOWS, undefined, receiveWindows) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
