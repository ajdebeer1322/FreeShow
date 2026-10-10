# click/src_frontend_components_drawer_live_Cameras.svelte (1)

## click — event-4a39c38f06f1c8ab65

[code] [src/frontend/components/drawer/live/Cameras.svelte:34](../../../../../src/frontend/components/drawer/live/Cameras.svelte#L34); (e) => click(e.detail, cam). partial.

Conditions: src/frontend/components/drawer/live/Cameras.svelte:32 cams.length.

Calls: src/frontend/components/drawer/live/Cameras.svelte:20 click (depth 1); src/frontend/media/cameraManager.ts:286 clearBadCamera (depth 2); src/frontend/media/cameraManager.ts:273 updateBadCameras (depth 3); src/frontend/media/cameraManager.ts:274 <callback> (depth 4); src/frontend/media/cameraManager.ts:288 <callback> (depth 3); src/frontend/media/cameraManager.ts:288 <callback> (depth 4).

Effects: src/frontend/media/cameraManager.ts:274 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
