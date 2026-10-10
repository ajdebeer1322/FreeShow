# click/src_frontend_components_drawer_audio_AudioChannelMixer.svelte (1)

## click — event-cf9f4cfb9f52c2968f

[code] [src/frontend/components/drawer/audio/AudioChannelMixer.svelte:67](../../../../../src/frontend/components/drawer/audio/AudioChannelMixer.svelte#L67); () => updateData("isMuted", !muted). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/audio/AudioChannelMixer.svelte:18 updateData (depth 1); src/frontend/components/drawer/audio/AudioChannelMixer.svelte:19 <callback> (depth 2); src/frontend/audio/audioPlayer.ts:446 updateVolume (depth 2); src/frontend/audio/audioPlayer.ts:448 <callback> (depth 3); src/frontend/audio/audioPlayer.ts:582 getVolume (depth 4); src/frontend/audio/audioPlayer.ts:53 getPath (depth 5); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 4); src/frontend/audio/audioPlayer.ts:60 getKey (depth 5); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 5); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 4); src/frontend/audio/audioPlayer.ts:673 updateAudioStore (depth 4); src/frontend/audio/audioPlayer.ts:674 <callback> (depth 5); src/frontend/audio/audioAnalyser.ts:158 setSourceVolume (depth 6).

Effects: src/frontend/components/drawer/audio/AudioChannelMixer.svelte:19 store-write src/frontend/stores.ts#audioChannelsData ; src/frontend/audio/audioPlayer.ts:674 store-write src/frontend/stores.ts#playingAudio .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## click — event-d946b142da3d485eaa

[code] [src/frontend/components/drawer/audio/AudioChannelMixer.svelte:69](../../../../../src/frontend/components/drawer/audio/AudioChannelMixer.svelte#L69); () => toggleChannelRecording(channelId, label). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioChannelRecorder.ts:14 toggleChannelRecording (depth 1); src/frontend/audio/audioChannelRecorder.ts:54 stopChannelRecording (depth 2); src/frontend/audio/audioChannelRecorder.ts:59 <callback> (depth 3); src/frontend/audio/audioChannelRecorder.ts:19 startChannelRecording (depth 2); src/frontend/audio/audioAnalyser.ts:35 getAudioContext (depth 3); src/frontend/audio/audioAnalyser.ts:36 <callback> (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:130 cleanup (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:350 updateRoutingNodes (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:354 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:89 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:97 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:110 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:111 <callback> (depth 6).

Effects: src/frontend/audio/audioChannelRecorder.ts:59 store-write src/frontend/stores.ts#recordingChannels ; src/frontend/audio/audioChannelRecorder.ts:39 ipc sendMain(Main.RECORDER, { blob: arraybuffer, name, path: customPath }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/audio/audioChannelRecorder.ts:50 store-write src/frontend/stores.ts#recordingChannels ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 24; depth cutoffs: 17. Full edges/effects/conditions in JSON.

## click — event-991e130412667a20dc

[code] [src/frontend/components/drawer/audio/AudioChannelMixer.svelte:71](../../../../../src/frontend/components/drawer/audio/AudioChannelMixer.svelte#L71); () => activeAudioEffects.set(channelId). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/audio/AudioChannelMixer.svelte:71 store-write src/frontend/stores.ts#activeAudioEffects .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
