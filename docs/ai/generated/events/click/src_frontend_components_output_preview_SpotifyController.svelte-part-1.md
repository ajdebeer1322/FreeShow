# click/src_frontend_components_output_preview_SpotifyController.svelte (1)

## click — event-d2e7ba3188be5e44d4

[code] [src/frontend/components/output/preview/SpotifyController.svelte:122](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L122); openSpotify. resolved-within-bound.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState.

Calls: src/frontend/components/output/preview/SpotifyController.svelte:15 openSpotify (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/output/preview/SpotifyController.svelte:16 ipc sendMain(Main.URL, "spotify:") ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9de1355f2e07e3eb4c

[code] [src/frontend/components/output/preview/SpotifyController.svelte:135](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L135); skipPrev. partial.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:168 skipPrev (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:161 skip (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:162 <callback> (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:162 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-84e7c822ceebcfd197

[code] [src/frontend/components/output/preview/SpotifyController.svelte:138](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L138); togglePlay. partial.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:145 togglePlay (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:146 <callback> (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:146 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c3d0960041d984dc37

[code] [src/frontend/components/output/preview/SpotifyController.svelte:141](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L141); skipNext. partial.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:167 skipNext (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:161 skip (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:162 <callback> (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:162 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b9bb9c0ea5decd6ab2

[code] [src/frontend/components/output/preview/SpotifyController.svelte:148](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L148); handleSeek. partial.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState; src/frontend/components/output/preview/SpotifyController.svelte:106 $spotifyIsFading; src/frontend/components/output/preview/SpotifyController.svelte:109 $spotifyState.

Calls: src/frontend/components/output/preview/SpotifyController.svelte:105 handleSeek (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:170 seekTo (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:171 <callback> (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:171 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d9ef0537dd9aa8d55b

[code] [src/frontend/components/output/preview/SpotifyController.svelte:157](../../../../../src/frontend/components/output/preview/SpotifyController.svelte#L157); fadePause. partial.

Conditions: src/frontend/components/output/preview/SpotifyController.svelte:120 $spotifyState; src/frontend/components/output/preview/SpotifyController.svelte:155 $spotifyState.isPlaying; src/frontend/components/output/preview/SpotifyManager.ts:177 get(spotifyIsFading); src/frontend/components/output/preview/SpotifyManager.ts:182 fresh; src/frontend/components/output/preview/SpotifyManager.ts:183 !fresh.isPlaying.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:176 fadePause (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 1); src/frontend/utils/common.ts:46 wait (depth 1); src/frontend/utils/common.ts:47 <callback> (depth 2); src/frontend/utils/common.ts:48 <callback> (depth 3).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:178 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:183 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:199 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:181 ipc requestMain(Main.SPOTIFY_GET_STATE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
