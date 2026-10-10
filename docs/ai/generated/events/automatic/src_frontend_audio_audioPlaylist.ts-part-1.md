# automatic/src_frontend_audio_audioPlaylist.ts (1)

## setTimeout — event-45d88d0b3764dd669e

[code] [src/frontend/audio/audioPlaylist.ts:98](../../../../../src/frontend/audio/audioPlaylist.ts#L98); () => (this.isCrossfading = false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/audio/audioPlaylist.ts:98 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-497a2bff6e624a5455

[code] [src/frontend/audio/audioPlaylist.ts:147](../../../../../src/frontend/audio/audioPlaylist.ts#L147); () => { const previousKey = AudioPlaylist.getPlayingKey() if (!get(playingAudio)&#91;previousKey&#93;) customActionActivation("audio_playlist_ended") }. partial.

Conditions: src/frontend/audio/audioPlaylist.ts:143 !data.loop && !audioIsFading(); src/frontend/audio/audioPlaylist.ts:142 !nextSong; src/frontend/audio/audioPlaylist.ts:149 !get(playingAudio)&#91;previousKey&#93;.

Calls: src/frontend/audio/audioPlaylist.ts:147 <callback> (depth 0); src/frontend/audio/audioPlaylist.ts:73 getPlayingKey (depth 1); src/frontend/audio/audioPlayer.ts:60 getKey (depth 2); src/frontend/audio/audioPlaylist.ts:68 getPlayingPath (depth 2); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.
