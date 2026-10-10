# action/playlist_next (1)

## playlist_next — event-39d3317b01305c1bb5

[code] [src/frontend/components/actions/api.ts:314](../../../../../src/frontend/components/actions/api.ts#L314); () => AudioPlaylist.next(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:314 playlist_next (depth 0); src/frontend/audio/audioPlaylist.ts:59 next (depth 1); src/frontend/audio/audioPlaylist.ts:77 getActivePlaylist (depth 2); src/frontend/audio/audioPlaylist.ts:121 nextInternal (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/audio/audioPlaylist.ts:181 getSongs (depth 3); src/frontend/components/helpers/array.ts:211 shuffleArray (depth 4); src/frontend/audio/audioPlaylist.ts:191 <callback> (depth 4); src/frontend/audio/audioFading.ts:191 audioIsFading (depth 3); src/frontend/audio/audioFading.ts:92 fadeOutAudio (depth 3); src/frontend/audio/audioFading.ts:260 stopFading (depth 4); src/frontend/audio/audioFading.ts:261 <callback> (depth 5); src/frontend/audio/audioFading.ts:240 stopFade (depth 6); src/frontend/audio/audioFading.ts:262 <callback> (depth 5); src/frontend/audio/audioFading.ts:266 <callback> (depth 5); src/frontend/audio/audioFading.ts:95 <callback> (depth 4).

Effects: src/frontend/audio/audioPlaylist.ts:191 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:271 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/audio/audioPlayer.ts:400 store-write src/frontend/stores.ts#playingAudio ; src/frontend/audio/audioPlayer.ts:432 ipc sendMain(Main.NOW_PLAYING_UNSET) ; src/frontend/audio/audioFading.ts:24 store-write src/frontend/stores.ts#activePlaylist ; src/frontend/audio/audioFading.ts:37 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/drawer/audio/metronome.ts:88 store-write src/frontend/stores.ts#playingMetronome ; src/frontend/components/drawer/audio/metronome.ts:89 store-write src/frontend/stores.ts#metronomeTimer ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:79 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 28; depth cutoffs: 78. Full edges/effects/conditions in JSON.

[code] Payload type: none/inferred. [External/internal input routes](../inputs.json) retain transport and permission limits.
