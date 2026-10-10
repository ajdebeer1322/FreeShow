# automatic/src_frontend_components_output_preview_SpotifyManager.ts (1)

## setInterval — event-ac0e1b39c71c838ab3

[code] [src/frontend/components/output/preview/SpotifyManager.ts:28](../../../../../src/frontend/components/output/preview/SpotifyManager.ts#L28); checkAndFetch. partial.

Conditions: src/frontend/components/output/preview/SpotifyManager.ts:35 interval !== currentInterval.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:31 checkAndFetch (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:54 fetchState (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/output/preview/SpotifyManager.ts:65 <callback> (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:93 extractColor (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:97 <callback> (depth 4); src/frontend/components/output/preview/SpotifyManager.ts:121 rgbToHsl (depth 5); src/frontend/components/output/preview/SpotifyManager.ts:117 <callback> (depth 5); src/frontend/components/output/preview/SpotifyManager.ts:26 scheduleFetch (depth 1).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:60 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:58 ipc requestMain(Main.SPOTIFY_GET_STATE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/output/preview/SpotifyManager.ts:65 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:117 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-bfc35e6eb372139e8e

[code] [src/frontend/components/output/preview/SpotifyManager.ts:40](../../../../../src/frontend/components/output/preview/SpotifyManager.ts#L40); () => { spotifyState.update((s) => (s?.isPlaying && s.positionSec < s.durationSec ? { ...s, positionSec: s.positionSec + 0.05 } : s)) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:40 <callback> (depth 0); src/frontend/components/output/preview/SpotifyManager.ts:41 <callback> (depth 1).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:41 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1210b1a556e2587bd3

[code] [src/frontend/components/output/preview/SpotifyManager.ts:164](../../../../../src/frontend/components/output/preview/SpotifyManager.ts#L164); fetchState. partial.

Conditions: src/frontend/components/output/preview/SpotifyManager.ts:55 fetching; src/frontend/components/output/preview/SpotifyManager.ts:59 !res; src/frontend/components/output/preview/SpotifyManager.ts:67 curr && lastFetched && res.title === curr.title; src/frontend/components/output/preview/SpotifyManager.ts:69 Date.now() < lock; src/frontend/components/output/preview/SpotifyManager.ts:72 (isStale \|\| diff < 1.5) && res.isPlaying === curr.isPlaying; src/frontend/components/output/preview/SpotifyManager.ts:77 newState.albumArt && newState.albumArt !== lastArt; src/frontend/components/output/preview/SpotifyManager.ts:80 !newState.albumArt; src/frontend/components/output/preview/SpotifyManager.ts:81 curr.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:54 fetchState (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:65 <callback> (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:93 extractColor (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:97 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:121 rgbToHsl (depth 4); src/frontend/components/output/preview/SpotifyManager.ts:117 <callback> (depth 4).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:60 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:58 ipc requestMain(Main.SPOTIFY_GET_STATE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/output/preview/SpotifyManager.ts:65 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:117 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-cb152fb27b16bb4caa

[code] [src/frontend/components/output/preview/SpotifyManager.ts:173](../../../../../src/frontend/components/output/preview/SpotifyManager.ts#L173); fetchState. partial.

Conditions: src/frontend/components/output/preview/SpotifyManager.ts:55 fetching; src/frontend/components/output/preview/SpotifyManager.ts:59 !res; src/frontend/components/output/preview/SpotifyManager.ts:67 curr && lastFetched && res.title === curr.title; src/frontend/components/output/preview/SpotifyManager.ts:69 Date.now() < lock; src/frontend/components/output/preview/SpotifyManager.ts:72 (isStale \|\| diff < 1.5) && res.isPlaying === curr.isPlaying; src/frontend/components/output/preview/SpotifyManager.ts:77 newState.albumArt && newState.albumArt !== lastArt; src/frontend/components/output/preview/SpotifyManager.ts:80 !newState.albumArt; src/frontend/components/output/preview/SpotifyManager.ts:81 curr.

Calls: src/frontend/components/output/preview/SpotifyManager.ts:54 fetchState (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:65 <callback> (depth 1); src/frontend/components/output/preview/SpotifyManager.ts:93 extractColor (depth 2); src/frontend/components/output/preview/SpotifyManager.ts:97 <callback> (depth 3); src/frontend/components/output/preview/SpotifyManager.ts:121 rgbToHsl (depth 4); src/frontend/components/output/preview/SpotifyManager.ts:117 <callback> (depth 4).

Effects: src/frontend/components/output/preview/SpotifyManager.ts:60 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:58 ipc requestMain(Main.SPOTIFY_GET_STATE) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/output/preview/SpotifyManager.ts:65 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState ; src/frontend/components/output/preview/SpotifyManager.ts:117 store-write src/frontend/components/output/preview/SpotifyManager.ts#spotifyState .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.
