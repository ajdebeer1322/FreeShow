# automatic/src_frontend_components_media_video_videoPlayer.ts (1)

## setTimeout — event-27b05ce2b4fe11258a

[code] [src/frontend/components/media/video/videoPlayer.ts:179](../../../../../src/frontend/components/media/video/videoPlayer.ts#L179); startPlayback. partial.

Conditions: src/frontend/components/media/video/videoPlayer.ts:179 delayMs > 0; src/frontend/components/media/video/videoPlayer.ts:168 audio instanceof HTMLAudioElement; src/frontend/components/media/video/videoPlayer.ts:170 !options.paused; src/frontend/components/media/video/videoPlayer.ts:172 !audio.muted && audio instanceof HTMLAudioElement && durationMs > 0.

Calls: src/frontend/components/media/video/videoPlayer.ts:167 startPlayback (depth 0); src/frontend/components/media/video/videoPlayer.ts:717 attachToAnalyser (depth 1); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 2); src/frontend/audio/audioAnalyser.ts:58 hasSource (depth 2); src/frontend/audio/audioAnalyser.ts:94 attach (depth 2); src/frontend/audio/audioAnalyser.ts:98 <callback> (depth 3); src/frontend/audio/audioAnalyser.ts:48 createSourceNode (depth 3); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 3); src/frontend/audio/routing/audioRoutingManager.ts:130 cleanup (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:350 updateRoutingNodes (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:354 <callback> (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:360 executeRoutingUpdate (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:60 getInstance (depth 3); src/frontend/audio/routing/audioRoutingManager.ts:87 init (depth 4); src/frontend/audio/routing/audioRoutingManager.ts:89 <callback> (depth 5); src/frontend/audio/routing/audioRoutingManager.ts:97 <callback> (depth 5).

Effects: src/frontend/audio/audioSender.ts:305 ipc send(AUDIO, &#91;"CLOSE_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioSender.ts:169 ipc send(AUDIO, &#91;"INIT_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioMultichannel.ts:38 network fetch ; src/frontend/audio/audioSender.ts:305 ipc send(AUDIO, &#91;"CLOSE_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioSender.ts:169 ipc send(AUDIO, &#91;"INIT_PORT"&#93;, { id: targetId }) ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:256 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/components/media/video/videoPlayer.ts:743 store-write src/frontend/stores.ts#playingVideoState ; src/frontend/utils/shortcuts.ts:569 presentation setOutput ; src/frontend/utils/shortcuts.ts:552 ipc requestMain(Main.READ_FOLDER, { path }) ; src/frontend/components/helpers/showActions.ts:724 presentation OutputHelper.advanceOutput .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 81; depth cutoffs: 94. Full edges/effects/conditions in JSON.

## checkNextAfterMedia — event-8cce31c738af932a24

[code] [src/frontend/components/media/video/videoPlayer.ts:361](../../../../../src/frontend/components/media/video/videoPlayer.ts#L361); checkNextAfterMedia. partial.

Conditions: src/frontend/components/media/video/videoPlayer.ts:361 (await checkNextAfterMedia(path, "media", outputIds)) \|\| localLoop; src/frontend/components/helpers/showActions.ts:679 !targetOutputIds.length; src/frontend/components/helpers/showActions.ts:683 !outputId \|\| nextActive.includes(outputId); src/frontend/components/helpers/showActions.ts:686 !currentOutput; src/frontend/components/helpers/showActions.ts:689 !slideOut; src/frontend/components/helpers/showActions.ts:692 !layoutSlide; src/frontend/components/helpers/showActions.ts:695 type === "media" \|\| type === "audio"; src/frontend/components/helpers/showActions.ts:701 localPath === endedId \|\| m.path === endedId \|\| m.key === endedId; src/frontend/components/helpers/showActions.ts:705 type === "media"; src/frontend/components/helpers/showActions.ts:706 !allMediaIds.includes(layoutSlide.data?.background \|\| "") && layoutSlide.data?.background !== endedId; src/frontend/components/helpers/showActions.ts:707 type === "audio"; src/frontend/components/helpers/showActions.ts:708 !layoutSlide.data?.audio?.find((id) => allMediaIds.includes(id)); src/frontend/components/helpers/showActions.ts:710 type === "timer"; src/frontend/components/helpers/showActions.ts:713 !slideTimer.

Calls: src/frontend/components/helpers/showActions.ts:677 checkNextAfterMedia (depth 0); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 1); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 2); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 3); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 4); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/array.ts:53 sortObject (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:618 <callback> (depth 5); src/frontend/components/helpers/output.ts:628 <callback> (depth 4); src/frontend/components/helpers/output.ts:647 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3).

Effects: src/frontend/components/helpers/showActions.ts:724 presentation OutputHelper.advanceOutput ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 219. Full edges/effects/conditions in JSON.

## setTimeout — event-d052d125dde2d450a3

[code] [src/frontend/components/media/video/videoPlayer.ts:365](../../../../../src/frontend/components/media/video/videoPlayer.ts#L365); () => { const checkOutputIds = outputIds?.length ? outputIds : &#91;outputIds?.&#91;0&#93; \|\| ""&#93; checkOutputIds.forEach((outputId) => { if (!outputId) return // double check that output is st. partial.

Conditions: src/frontend/components/media/video/videoPlayer.ts:368 !outputId; src/frontend/components/media/video/videoPlayer.ts:373 newVideoPath === path.

Calls: src/frontend/components/media/video/videoPlayer.ts:365 <callback> (depth 0); src/frontend/components/media/video/videoPlayer.ts:367 <callback> (depth 1); src/frontend/components/output/clear.ts:88 clearBackground (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 3); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 4); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 5); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:649 <callback> (depth 5); src/frontend/components/helpers/output.ts:658 <callback> (depth 4); src/frontend/components/output/clear.ts:91 <callback> (depth 3); src/frontend/components/helpers/output.ts:158 setOutput (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6).

Effects: src/frontend/components/media/video/videoPlayer.ts:373 presentation clearBackground ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:228 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:270 presentation clearSlide ; src/frontend/components/helpers/output.ts:264 ipc sendMain(Main.PRESENTATION_CONTROL, { action: "stop" }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 100. Full edges/effects/conditions in JSON.

## setTimeout — event-2a74eabd7afb17d510

[code] [src/frontend/components/media/video/videoPlayer.ts:445](../../../../../src/frontend/components/media/video/videoPlayer.ts#L445); () => this.isStopping.delete(path). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/media/video/videoPlayer.ts:445 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b8be4b3c0fb1e8dd79

[code] [src/frontend/components/media/video/videoPlayer.ts:467](../../../../../src/frontend/components/media/video/videoPlayer.ts#L467); resolve. resolved-within-bound.

Conditions: src/frontend/components/media/video/videoPlayer.ts:463 "timeTick" in audio; src/frontend/components/media/video/videoPlayer.ts:460 audio instanceof HTMLAudioElement; src/frontend/components/media/video/videoPlayer.ts:459 durationMs > 0; src/frontend/components/media/video/videoPlayer.ts:457 shouldStop && audio && !reachedEnd && !audio.paused.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d43003b46e6f90bd3c

[code] [src/frontend/components/media/video/videoPlayer.ts:525](../../../../../src/frontend/components/media/video/videoPlayer.ts#L525); resolve. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
