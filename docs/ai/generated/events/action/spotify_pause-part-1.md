# action/spotify_pause (1)

## spotify_pause — event-01e84b81613bc644ac

[code] [src/frontend/components/actions/api.ts:371](../../../../../src/frontend/components/actions/api.ts#L371); () => spotifyPause(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:371 spotify_pause (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:155 spotifyPause (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:157 <callback> (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:157 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
