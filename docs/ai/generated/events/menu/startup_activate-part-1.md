# menu/startup_activate (1)

## startup_activate — event-492cfd798f599ab41a

[code] [src/frontend/components/context/contextMenus.ts:201](../../../../../src/frontend/components/context/contextMenus.ts#L201); startup_activate. partial.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1850 obj.sel?.id !== "camera"; src/frontend/components/context/menuClick.ts:1856 shouldActivate.

Calls: src/frontend/components/context/menuClick.ts:1849 startup_activate (depth 0); src/frontend/components/context/menuClick.ts:1852 <callback> (depth 1); src/frontend/components/context/menuClick.ts:1852 <callback> (depth 1); src/frontend/media/cameraManager.ts:269 getStartupCameras (depth 1); src/frontend/components/context/menuClick.ts:1857 <callback> (depth 1); src/frontend/media/cameraManager.ts:260 setStartupCameras (depth 1); src/frontend/media/cameraManager.ts:261 <callback> (depth 2); src/frontend/media/cameraManager.ts:291 initializeCameraWarming (depth 2); src/frontend/media/cameraManager.ts:42 getCamerasList (depth 3); src/frontend/media/cameraManager.ts:50 <callback> (depth 4); src/frontend/media/cameraManager.ts:51 <callback> (depth 4); src/frontend/media/cameraManager.ts:301 <callback> (depth 3); src/frontend/media/cameraManager.ts:333 stopKeepaliveMonitor (depth 3); src/frontend/media/cameraManager.ts:312 <callback> (depth 3); src/frontend/media/cameraManager.ts:88 getCameraStream (depth 3); src/frontend/media/cameraManager.ts:91 <callback> (depth 4).

Effects: src/frontend/media/cameraManager.ts:261 store-write src/frontend/stores.ts#special ; src/frontend/media/cameraManager.ts:274 store-write src/frontend/stores.ts#special ; src/frontend/media/cameraManager.ts:134 ipc sendMain(Main.ACCESS_CAMERA_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 2. Full edges/effects/conditions in JSON.

Menu layouts: camera_card src/frontend/components/context/contextMenus.ts:329. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:268 startup_activate: () => { const startupCameras = cameraManager.getStartupCameras() const camId = $selected.data&#91;0&#93;?.id enabled = camId && startupCameras.includes(camId) }. Appears: src/frontend/components/drawer/live/Cam.svelte:143.
