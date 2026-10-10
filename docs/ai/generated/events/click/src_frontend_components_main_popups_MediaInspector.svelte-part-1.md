# click/src_frontend_components_main_popups_MediaInspector.svelte (1)

## click — event-10f8a821e10e99c2f6

[code] [src/frontend/components/main/popups/MediaInspector.svelte:151](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L151); () => cropEditor?.fitToScreen(). partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:142 isImage.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b747690216764b8a2d

[code] [src/frontend/components/main/popups/MediaInspector.svelte:154](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L154); () => cropEditor?.clearCrop(). partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:142 isImage.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a93546dd10b50245ab

[code] [src/frontend/components/main/popups/MediaInspector.svelte:178](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L178); () => applyTrim("fromTime", videoTime). partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:142 isImage.

Calls: src/frontend/components/main/popups/MediaInspector.svelte:91 applyTrim (depth 1); src/frontend/components/helpers/mediaInspector.ts:154 setMediaSetting (depth 2); src/frontend/components/helpers/update.ts:26 removeStore (depth 3); src/frontend/components/helpers/update.ts:10 updateStore (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/update.ts:14 <callback> (depth 5); src/frontend/components/helpers/update.ts:30 splitKeys (depth 6); src/frontend/components/helpers/update.ts:10 updateStore (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/update.ts:14 <callback> (depth 4); src/frontend/components/helpers/update.ts:30 splitKeys (depth 5); src/frontend/components/media/video/videoPlayer.ts:191 updateProperties (depth 3); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 4); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 4); src/frontend/components/media/video/videoPlayer.ts:197 <callback> (depth 4).

Effects: src/frontend/components/media/video/videoPlayer.ts:197 store-write src/frontend/stores.ts#playingVideos ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/mediaInspector.ts:149 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 57. Full edges/effects/conditions in JSON.

## click — event-df794c124e5c31ab59

[code] [src/frontend/components/main/popups/MediaInspector.svelte:182](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L182); () => applyTrim("toTime", videoTime). partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:142 isImage.

Calls: src/frontend/components/main/popups/MediaInspector.svelte:91 applyTrim (depth 1); src/frontend/components/helpers/mediaInspector.ts:154 setMediaSetting (depth 2); src/frontend/components/helpers/update.ts:26 removeStore (depth 3); src/frontend/components/helpers/update.ts:10 updateStore (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/helpers/update.ts:14 <callback> (depth 5); src/frontend/components/helpers/update.ts:30 splitKeys (depth 6); src/frontend/components/helpers/update.ts:10 updateStore (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/update.ts:14 <callback> (depth 4); src/frontend/components/helpers/update.ts:30 splitKeys (depth 5); src/frontend/components/media/video/videoPlayer.ts:191 updateProperties (depth 3); src/frontend/components/media/video/videoPlayer.ts:633 getAudio (depth 4); src/frontend/components/media/video/videoPlayer.ts:634 <callback> (depth 5); src/frontend/components/media/video/videoPlayer.ts:638 getGlobalOptions (depth 4); src/frontend/components/media/video/videoPlayer.ts:197 <callback> (depth 4).

Effects: src/frontend/components/media/video/videoPlayer.ts:197 store-write src/frontend/stores.ts#playingVideos ; src/frontend/audio/audioFading.ts:165 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/mediaInspector.ts:149 presentation setOutput ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 57. Full edges/effects/conditions in JSON.

## click — event-95726dadf49989f143

[code] [src/frontend/components/main/popups/MediaInspector.svelte:195](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L195); duplicate. partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:115 busy \|\| isLocked.

Calls: src/frontend/components/main/popups/MediaInspector.svelte:114 duplicate (depth 0); src/frontend/components/helpers/mediaInspector.ts:65 duplicateBackground (depth 1); src/frontend/components/helpers/mediaInspector.ts:27 getInspectorBackground (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/helpers/mediaInspector.ts:76 ipc requestMain(Main.DUPLICATE_MEDIA_FILE, { path: sourcePath }) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 104. Full edges/effects/conditions in JSON.

## click — event-c96b1a5e55d856b1eb

[code] [src/frontend/components/main/popups/MediaInspector.svelte:200](../../../../../src/frontend/components/main/popups/MediaInspector.svelte#L200); original. partial.

Conditions: src/frontend/components/main/popups/MediaInspector.svelte:127 bg; src/frontend/components/main/popups/MediaInspector.svelte:199 bg.isDuplicate; src/frontend/components/main/popups/MediaInspector.svelte:122 isLocked.

Calls: src/frontend/components/main/popups/MediaInspector.svelte:121 original (depth 0); src/frontend/components/helpers/mediaInspector.ts:99 backToOriginal (depth 1); src/frontend/components/helpers/mediaInspector.ts:27 getInspectorBackground (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 104. Full edges/effects/conditions in JSON.
