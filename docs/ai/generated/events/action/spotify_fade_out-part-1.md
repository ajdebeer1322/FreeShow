# action/spotify_fade_out (1)

## spotify_fade_out — event-131db6f070a5efe242

[code] [src/frontend/components/actions/api.ts:372](../../../../../src/frontend/components/actions/api.ts#L372); () => fadePause(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:372 spotify_fade_out (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:176 fadePause (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 2); src/frontend/utils/common.ts:46 wait (depth 2); src/frontend/utils/common.ts:47 <callback> (depth 3); src/frontend/utils/common.ts:48 <callback> (depth 4).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:178 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:183 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:199 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading ; src/frontend/components/output/preview/SpotifyManager.ts:181 ipc requestMain(Main.SPOTIFY_GET_STATE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
