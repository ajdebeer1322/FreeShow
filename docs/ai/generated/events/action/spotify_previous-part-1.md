# action/spotify_previous (1)

## spotify_previous — event-5f93957d7494f0a3ad

[code] [src/frontend/components/actions/api.ts:374](../../../../../src/frontend/components/actions/api.ts#L374); () => skipPrev(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:374 spotify_previous (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:168 skipPrev (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:161 skip (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:162 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:141 runCmd (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 5); src/frontend/IPC/main.ts:28 cleanup (depth 5); src/frontend/IPC/main.ts:36 <callback> (depth 5); src/frontend/IPC/main.ts:37 <callback> (depth 6); src/frontend/IPC/main.ts:48 <callback> (depth 6).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:162 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:142 ipc requestMain(Main.SPOTIFY_COMMAND, { command, value } as any) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 1. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
