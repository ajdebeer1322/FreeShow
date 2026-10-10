# action/get_thumbnail (1)

## get_thumbnail — event-7c020694c25701971e

[code] [src/frontend/components/actions/api.ts:436](../../../../../src/frontend/components/actions/api.ts#L436); (data: API_media) => getThumbnail(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:436 get_thumbnail (depth 0); src/frontend/components/helpers/media.ts:104 getThumbnail (depth 1); src/frontend/components/helpers/media.ts:261 locateMediaFile (depth 2); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 3); src/frontend/components/helpers/media.ts:38 getMediaType (depth 3); src/frontend/components/helpers/media.ts:19 getExtension (depth 3); src/frontend/components/helpers/media.ts:269 <callback> (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/components/helpers/media.ts:19 getExtension (depth 2); src/frontend/components/helpers/media.ts:452 getThumbnailPath (depth 2); src/frontend/components/helpers/media.ts:492 getThumbnailId (depth 3).

Effects: src/frontend/components/helpers/media.ts:272 ipc requestMain(Main.LOCATE_MEDIA_FILE, { filePath: path, folders }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_media. [External/internal input routes](../inputs.json) retain transport and permission limits.
