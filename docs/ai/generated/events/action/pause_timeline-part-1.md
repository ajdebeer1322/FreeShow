# action/pause_timeline (1)

## pause_timeline — event-2c3f58bbea80e6ae1f

[code] [src/frontend/components/actions/api.ts:338](../../../../../src/frontend/components/actions/api.ts#L338); () => pauseTimeline("show"). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:338 pause_timeline (depth 0); src/frontend/components/timeline/TimelinePlayback.ts:49 pauseTimeline (depth 1); src/frontend/components/timeline/TimelinePlayback.ts:25 getActiveTimelinePlayback (depth 2); src/frontend/components/timeline/TimelinePlayback.ts:125 pause (depth 2); src/frontend/components/timeline/TimelinePlayback.ts:472 checkMediaPause (depth 3); src/frontend/audio/audioPlayer.ts:383 pause (depth 4); src/frontend/audio/audioPlayer.ts:643 audioExists (depth 5); src/frontend/audio/audioPlayer.ts:529 getPlaying (depth 6); src/frontend/audio/audioPlayer.ts:665 updatePlayingStore (depth 5); src/frontend/audio/audioPlayer.ts:666 <callback> (depth 6); src/frontend/audio/audioPlayer.ts:544 getAudio (depth 5); src/frontend/audio/audioAnalyser.ts:285 shouldAnalyse (depth 5); src/frontend/audio/audioAnalyser.ts:289 getActiveAudio (depth 6); src/frontend/audio/audioAnalyser.ts:297 getActiveVideos (depth 6); src/frontend/audio/audioAnalyser.ts:310 sendOutputShowAudio (depth 6); src/frontend/audio/audioPlayer.ts:351 stopCheckLoop (depth 5).

Effects: src/frontend/components/timeline/TimelinePlayback.ts:134 store-write src/frontend/stores.ts#isTimelinePlaying ; src/frontend/components/timeline/TimelinePlayback.ts:136 ipc sendMain(Main.TIMECODE_STOP) ; src/frontend/audio/audioPlayer.ts:666 store-write src/frontend/stores.ts#playingAudio ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 15. Full edges/effects/conditions in JSON.
