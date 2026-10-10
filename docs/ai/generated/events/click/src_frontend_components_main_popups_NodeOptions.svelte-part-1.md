# click/src_frontend_components_main_popups_NodeOptions.svelte (1)

## click — event-a6a3520b78e0d35560

[code] [src/frontend/components/main/popups/NodeOptions.svelte:59](../../../../../src/frontend/components/main/popups/NodeOptions.svelte#L59); () => updateChannelData("isMuted", !muted). partial.

Conditions: src/frontend/components/main/popups/NodeOptions.svelte:47 nodeId === "icecast"; src/frontend/components/main/popups/NodeOptions.svelte:55 isChannelNode.

Calls: src/frontend/components/main/popups/NodeOptions.svelte:36 updateChannelData (depth 1); src/frontend/components/main/popups/NodeOptions.svelte:37 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/components/main/popups/NodeOptions.svelte:37 store-write src/frontend/stores.ts#audioChannelsData ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 1. Full edges/effects/conditions in JSON.
