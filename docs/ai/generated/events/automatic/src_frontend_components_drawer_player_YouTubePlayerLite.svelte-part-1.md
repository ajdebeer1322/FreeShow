# automatic/src_frontend_components_drawer_player_YouTubePlayerLite.svelte (1)

## setTimeout — event-55fb3affe3ba940040

[code] [src/frontend/components/drawer/player/YouTubePlayerLite.svelte:22](../../../../../src/frontend/components/drawer/player/YouTubePlayerLite.svelte#L22); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5835aad5f8366243ae

[code] [src/frontend/components/drawer/player/YouTubePlayerLite.svelte:27](../../../../../src/frontend/components/drawer/player/YouTubePlayerLite.svelte#L27); async () => { await initializePlayer() }. partial.

Conditions: src/frontend/components/drawer/player/YouTubePlayerLite.svelte:26 options.playerVars?.autoplay === 1; src/frontend/components/drawer/player/YouTubePlayerLite.svelte:24 liteYTElem.

Calls: src/frontend/components/drawer/player/YouTubePlayerLite.svelte:27 <callback> (depth 0); src/frontend/components/drawer/player/YouTubePlayerLite.svelte:34 initializePlayer (depth 1); src/frontend/components/drawer/player/YouTubePlayerLite.svelte:56 onPlayerReady (depth 2); src/frontend/components/drawer/player/YouTubePlayerLite.svelte:63 <callback> (depth 3); src/frontend/components/drawer/player/YouTubePlayerLite.svelte:80 handleStateChange (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-cab804682a2f517b22

[code] [src/frontend/components/drawer/player/YouTubePlayerLite.svelte:63](../../../../../src/frontend/components/drawer/player/YouTubePlayerLite.svelte#L63); () => { if (player && player.getPlayerState) { try { const state = player.getPlayerState() if (state !== lastState) { lastState = state handleStateChange({ data: state }) } } catch. partial.

Conditions: src/frontend/components/drawer/player/YouTubePlayerLite.svelte:64 player && player.getPlayerState; src/frontend/components/drawer/player/YouTubePlayerLite.svelte:67 state !== lastState.

Calls: src/frontend/components/drawer/player/YouTubePlayerLite.svelte:63 <callback> (depth 0); src/frontend/components/drawer/player/YouTubePlayerLite.svelte:80 handleStateChange (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
