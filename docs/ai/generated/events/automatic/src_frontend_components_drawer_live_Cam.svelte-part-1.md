# automatic/src_frontend_components_drawer_live_Cam.svelte (1)

## setTimeout — event-178b2bf0eecb49d133

[code] [src/frontend/components/drawer/live/Cam.svelte:69](../../../../../src/frontend/components/drawer/live/Cam.svelte#L69); capture. partial.

Conditions: src/frontend/components/drawer/live/Cam.svelte:69 $os.platform === "darwin"; src/frontend/components/drawer/live/Cam.svelte:64 typeof res === "string"; src/frontend/components/drawer/live/Cam.svelte:47 disablePreview; src/frontend/components/drawer/live/Cam.svelte:48 ($special.cameraBad \|\| &#91;&#93;).includes(cam.id); src/frontend/components/drawer/live/Cam.svelte:62 isDestroyed; src/frontend/components/drawer/live/Cam.svelte:64 typeof res === "string"; src/frontend/components/drawer/live/Cam.svelte:69 $os.platform === "darwin".

Calls: src/frontend/components/drawer/live/Cam.svelte:46 capture (depth 0); src/frontend/media/cameraManager.ts:185 attachCamera (depth 1); src/frontend/media/cameraManager.ts:88 getCameraStream (depth 2); src/frontend/media/cameraManager.ts:91 <callback> (depth 3); src/frontend/media/cameraManager.ts:286 clearBadCamera (depth 3); src/frontend/media/cameraManager.ts:273 updateBadCameras (depth 4); src/frontend/media/cameraManager.ts:274 <callback> (depth 5); src/frontend/media/cameraManager.ts:288 <callback> (depth 4); src/frontend/media/cameraManager.ts:288 <callback> (depth 5); src/frontend/media/cameraManager.ts:66 getCameraFromId (depth 3); src/frontend/media/cameraManager.ts:42 getCamerasList (depth 4); src/frontend/media/cameraManager.ts:50 <callback> (depth 5); src/frontend/media/cameraManager.ts:51 <callback> (depth 5); src/frontend/media/cameraManager.ts:68 <callback> (depth 4); src/frontend/media/cameraManager.ts:116 <callback> (depth 3); src/frontend/media/cameraManager.ts:73 acquireMediaStream (depth 4).

Effects: src/frontend/media/cameraManager.ts:274 store-write src/frontend/stores.ts#special ; src/frontend/media/cameraManager.ts:134 ipc sendMain(Main.ACCESS_CAMERA_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 15; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-59a243264beebef5f7

[code] [src/frontend/components/drawer/live/Cam.svelte:95](../../../../../src/frontend/components/drawer/live/Cam.svelte#L95); () => (iconClicked = null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/live/Cam.svelte:95 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5d231ac4f1e96f6fcd

[code] [src/frontend/components/drawer/live/Cam.svelte:117](../../../../../src/frontend/components/drawer/live/Cam.svelte#L117); () => (iconClicked = null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/live/Cam.svelte:117 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
