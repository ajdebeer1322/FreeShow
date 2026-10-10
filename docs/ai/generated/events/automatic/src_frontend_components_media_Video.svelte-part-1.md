# automatic/src_frontend_components_media_Video.svelte (1)

## setInterval — event-c407e509b4f6db199e

[code] [src/frontend/components/media/Video.svelte:93](../../../../../src/frontend/components/media/Video.svelte#L93); () => { if (videoData.paused) return pingbackTime++ if (pingbackTime < 30) return if (pingbackInterval) clearInterval(pingbackInterval) sendPingback() }. resolved-within-bound.

Conditions: src/frontend/components/media/Video.svelte:94 videoData.paused; src/frontend/components/media/Video.svelte:97 pingbackTime < 30; src/frontend/components/media/Video.svelte:99 pingbackInterval.

Calls: src/frontend/components/media/Video.svelte:93 <callback> (depth 0); src/frontend/components/media/Video.svelte:103 sendPingback (depth 1); src/frontend/components/media/Video.svelte:109 <callback> (depth 2); src/frontend/components/media/Video.svelte:110 <callback> (depth 2).

Effects: src/frontend/components/media/Video.svelte:108 network fetch .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d7cd5b65eee97d1d56

[code] [src/frontend/components/media/Video.svelte:164](../../../../../src/frontend/components/media/Video.svelte#L164); () => isVideoSupported(path). partial.

Conditions: src/frontend/components/media/Video.svelte:162 path.

Calls: src/frontend/components/media/Video.svelte:164 <callback> (depth 0); src/frontend/components/helpers/media.ts:332 isVideoSupported (depth 1); src/frontend/components/helpers/media.ts:303 getMediaInfo (depth 2); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/components/helpers/media.ts:323 <callback> (depth 3); src/frontend/components/helpers/media.ts:338 <callback> (depth 2); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/components/helpers/media.ts:312 ipc requestMain(Main.MEDIA_CODEC, { path }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/media.ts:323 store-write src/frontend/stores.ts#media ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d64c0f597c0108ad85

[code] [src/frontend/components/media/Video.svelte:174](../../../../../src/frontend/components/media/Video.svelte#L174); () => { if (subtitle !== undefined && video) enableSubtitle(video, subtitle) subtitleChange = null }. resolved-within-bound.

Conditions: src/frontend/components/media/Video.svelte:175 subtitle !== undefined && video.

Calls: src/frontend/components/media/Video.svelte:174 <callback> (depth 0); src/frontend/components/helpers/media.ts:357 enableSubtitle (depth 1); src/frontend/components/helpers/media.ts:361 <callback> (depth 2); src/frontend/components/helpers/media.ts:366 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
