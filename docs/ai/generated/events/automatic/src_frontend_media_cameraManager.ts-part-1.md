# automatic/src_frontend_media_cameraManager.ts (1)

## setTimeout — event-ad9f0728bea170268a

[code] [src/frontend/media/cameraManager.ts:168](../../../../../src/frontend/media/cameraManager.ts#L168); () => { if (paused \|\| isDestroyed?.() \|\| !videoElement) return paused = true if (!isHovered?.()) this.pause(videoElement) }. partial.

Conditions: src/frontend/media/cameraManager.ts:169 paused \|\| isDestroyed?.() \|\| !videoElement; src/frontend/media/cameraManager.ts:172 !isHovered?.().

Calls: src/frontend/media/cameraManager.ts:168 <callback> (depth 0); src/frontend/media/cameraManager.ts:156 pause (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f186fe17e61a876a5b

[code] [src/frontend/media/cameraManager.ts:182](../../../../../src/frontend/media/cameraManager.ts#L182); () => pauseVideo(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/media/cameraManager.ts:182 <callback> (depth 0); src/frontend/media/cameraManager.ts:167 pauseVideo (depth 1); src/frontend/media/cameraManager.ts:168 <callback> (depth 2); src/frontend/media/cameraManager.ts:156 pause (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-942a73698a75b7631a

[code] [src/frontend/media/cameraManager.ts:330](../../../../../src/frontend/media/cameraManager.ts#L330); () => this.checkAndRestartDeadCameras(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/media/cameraManager.ts:330 <callback> (depth 0); src/frontend/media/cameraManager.ts:339 checkAndRestartDeadCameras (depth 1); src/frontend/media/cameraManager.ts:269 getStartupCameras (depth 2); src/frontend/media/cameraManager.ts:343 <callback> (depth 2); src/frontend/media/cameraManager.ts:66 getCameraFromId (depth 2); src/frontend/media/cameraManager.ts:42 getCamerasList (depth 3); src/frontend/media/cameraManager.ts:50 <callback> (depth 4); src/frontend/media/cameraManager.ts:51 <callback> (depth 4); src/frontend/media/cameraManager.ts:68 <callback> (depth 3); src/frontend/media/cameraManager.ts:88 getCameraStream (depth 2); src/frontend/media/cameraManager.ts:91 <callback> (depth 3); src/frontend/media/cameraManager.ts:286 clearBadCamera (depth 3); src/frontend/media/cameraManager.ts:273 updateBadCameras (depth 4); src/frontend/media/cameraManager.ts:274 <callback> (depth 5); src/frontend/media/cameraManager.ts:288 <callback> (depth 4); src/frontend/media/cameraManager.ts:288 <callback> (depth 5).

Effects: src/frontend/media/cameraManager.ts:274 store-write src/frontend/stores.ts#special ; src/frontend/media/cameraManager.ts:134 ipc sendMain(Main.ACCESS_CAMERA_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 0. Full edges/effects/conditions in JSON.
