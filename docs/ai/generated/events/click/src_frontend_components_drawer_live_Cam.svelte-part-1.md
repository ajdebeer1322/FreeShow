# click/src_frontend_components_drawer_live_Cam.svelte (1)

## click — event-14687f0802f4cc2ae6

[code] [src/frontend/components/drawer/live/Cam.svelte:147](../../../../../src/frontend/components/drawer/live/Cam.svelte#L147); click. partial.

Conditions: src/frontend/components/drawer/live/Cam.svelte:124 item; src/frontend/components/drawer/live/Cam.svelte:84 iconClicked.

Calls: src/frontend/components/drawer/live/Cam.svelte:83 click (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d1b38484311c5c43fb

[code] [src/frontend/components/drawer/live/Cam.svelte:167](../../../../../src/frontend/components/drawer/live/Cam.svelte#L167); () => removeFromStartup(cam.id). partial.

Conditions: src/frontend/components/drawer/live/Cam.svelte:124 item; src/frontend/components/drawer/live/Cam.svelte:164 startupCameras.includes(cam.id).

Calls: src/frontend/components/drawer/live/Cam.svelte:116 removeFromStartup (depth 1); src/frontend/components/drawer/live/Cam.svelte:117 <callback> (depth 2); src/frontend/components/drawer/live/Cam.svelte:119 <callback> (depth 2); src/frontend/media/cameraManager.ts:260 setStartupCameras (depth 2); src/frontend/media/cameraManager.ts:261 <callback> (depth 3); src/frontend/media/cameraManager.ts:291 initializeCameraWarming (depth 3); src/frontend/media/cameraManager.ts:42 getCamerasList (depth 4); src/frontend/media/cameraManager.ts:50 <callback> (depth 5); src/frontend/media/cameraManager.ts:51 <callback> (depth 5); src/frontend/media/cameraManager.ts:269 getStartupCameras (depth 4); src/frontend/media/cameraManager.ts:301 <callback> (depth 4); src/frontend/media/cameraManager.ts:333 stopKeepaliveMonitor (depth 4); src/frontend/media/cameraManager.ts:312 <callback> (depth 4); src/frontend/media/cameraManager.ts:88 getCameraStream (depth 4); src/frontend/media/cameraManager.ts:91 <callback> (depth 5); src/frontend/media/cameraManager.ts:286 clearBadCamera (depth 5).

Effects: src/frontend/media/cameraManager.ts:261 store-write src/frontend/stores.ts#special ; src/frontend/media/cameraManager.ts:134 ipc sendMain(Main.ACCESS_CAMERA_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 10. Full edges/effects/conditions in JSON.

## click — event-4222e68b12687ce5d1

[code] [src/frontend/components/drawer/live/Cam.svelte:177](../../../../../src/frontend/components/drawer/live/Cam.svelte#L177); () => removeStyle("filters"). resolved-within-bound.

Conditions: src/frontend/components/drawer/live/Cam.svelte:124 item; src/frontend/components/drawer/live/Cam.svelte:174 !!mediaStyle.filter?.length \|\| $media&#91;cam.id&#93;?.fit \|\| mediaStyle.flipped \|\| mediaStyle.flippedY \|\| Object.keys(mediaStyle.cropping \|\| {}).length.

Calls: src/frontend/components/drawer/live/Cam.svelte:94 removeStyle (depth 1); src/frontend/components/drawer/live/Cam.svelte:95 <callback> (depth 2); src/frontend/components/drawer/live/Cam.svelte:97 <callback> (depth 2).

Effects: src/frontend/components/drawer/live/Cam.svelte:97 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
