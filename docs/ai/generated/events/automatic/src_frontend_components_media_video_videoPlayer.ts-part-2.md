# automatic/src_frontend_components_media_video_videoPlayer.ts (2)

## setTimeout — event-34951900a4d445bb66

[code] [src/frontend/components/media/video/videoPlayer.ts:558](../../../../../src/frontend/components/media/video/videoPlayer.ts#L558); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-de0254621089a15e15

[code] [src/frontend/components/media/video/videoPlayer.ts:737](../../../../../src/frontend/components/media/video/videoPlayer.ts#L737); () => this.syncState(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/media/video/videoPlayer.ts:737 <callback> (depth 0); src/frontend/components/media/video/videoPlayer.ts:740 syncState (depth 1); src/frontend/components/media/video/videoPlayer.ts:743 <callback> (depth 2); src/frontend/components/media/video/videoPlayer.ts:744 <callback> (depth 3); src/frontend/components/media/video/videoPlayer.ts:326 checkIfEnding (depth 4); src/frontend/components/media/video/videoPlayer.ts:629 getPlaying (depth 5); src/frontend/components/media/video/videoPlayer.ts:630 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:379 finish (depth 5); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 5); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 6); src/frontend/components/media/video/videoPlayer.ts:651 getEndTime (depth 5); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 6); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 5); src/frontend/components/media/video/videoPlayer.ts:646 getStartTime (depth 5); src/frontend/components/media/video/videoPlayer.ts:346 <callback> (depth 5); src/frontend/utils/shortcuts.ts:547 playFolder (depth 5).

Effects: src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/utils/shortcuts.ts:569 presentation setOutput ; src/frontend/utils/shortcuts.ts:552 ipc requestMain(Main.READ_FOLDER, { path }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/helpers/output.ts:399 presentation setOutput ; src/frontend/components/helpers/showActions.ts:724 presentation OutputHelper.advanceOutput ; src/frontend/components/helpers/media.ts:785 ipc requestMain(Main.MEDIA_IS_DOWNLOADED, { url, contentFile: mediaData?.contentFile }) ; src/frontend/components/helpers/media.ts:804 ipc sendMain(Main.MEDIA_DOWNLOAD, { url, contentFile: updatedMediaData?.contentFile }) ; src/frontend/components/media/video/videoPlayer.ts:373 presentation clearBackground .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 102. Full edges/effects/conditions in JSON.

## setTimeout — event-04ffcd9ec4ed29f27c

[code] [src/frontend/components/media/video/videoPlayer.ts:890](../../../../../src/frontend/components/media/video/videoPlayer.ts#L890); () => delete (video as any).isSwapping. resolved-within-bound.

Conditions: src/frontend/components/media/video/videoPlayer.ts:873 remaining <= 0.1 && !(video as any).isSwapping; src/frontend/components/media/video/videoPlayer.ts:837 audio instanceof HTMLAudioElement.

Calls: src/frontend/components/media/video/videoPlayer.ts:890 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-405443c0bc174eb00e

[code] [src/frontend/components/media/video/videoPlayer.ts:909](../../../../../src/frontend/components/media/video/videoPlayer.ts#L909); () => { customActionActivation("video_end") }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/media/video/videoPlayer.ts:909 <callback> (depth 0); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 1); src/frontend/components/actions/actions.ts:159 <callback> (depth 2); src/frontend/components/actions/actions.ts:33 runAction (depth 3); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:49 <callback> (depth 4); src/frontend/components/actions/actions.ts:74 runTrigger (depth 4); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 5); src/frontend/utils/common.ts:46 wait (depth 5); src/frontend/utils/common.ts:47 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 34. Full edges/effects/conditions in JSON.
