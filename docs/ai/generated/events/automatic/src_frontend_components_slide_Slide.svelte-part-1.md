# automatic/src_frontend_components_slide_Slide.svelte (1)

## setTimeout — event-f861dfb8a1e416c9f7

[code] [src/frontend/components/slide/Slide.svelte:61](../../../../../src/frontend/components/slide/Slide.svelte#L61); checkGhostBackground. resolved-within-bound.

Conditions: src/frontend/components/slide/Slide.svelte:61 !background && ($special.optimizedMode ? index < 40 : true) && layoutSlides.length; src/frontend/components/slide/Slide.svelte:65 i > index; src/frontend/components/slide/Slide.svelte:67 slideHasAction(a.actions, "clear_background") && (!a.disabled \|\| i === index); src/frontend/components/slide/Slide.svelte:68 a.background && !a.disabled; src/frontend/components/slide/Slide.svelte:74 mediaData && (mediaData?.loop === false \|\| $media&#91;mediaData?.path \|\| ""&#93;?.videoType === "foreground").

Calls: src/frontend/components/slide/Slide.svelte:62 checkGhostBackground (depth 0); src/frontend/components/slide/Slide.svelte:64 <callback> (depth 1); src/frontend/components/actions/actions.ts:223 slideHasAction (depth 2); src/frontend/components/actions/actions.ts:224 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-91e4bb84572ffeb4e1

[code] [src/frontend/components/slide/Slide.svelte:93](../../../../../src/frontend/components/slide/Slide.svelte#L93); loadBackground. partial.

Conditions: src/frontend/components/slide/Slide.svelte:93 bgPath && !disableThumbnails; src/frontend/components/slide/Slide.svelte:99 bg?.type === "player" \|\| $playerVideos&#91;bgPath&#93;; src/frontend/components/slide/Slide.svelte:101 playerVid?.id; src/frontend/components/slide/Slide.svelte:102 playerVid.type === "youtube"; src/frontend/components/slide/Slide.svelte:103 playerVid.type === "vimeo"; src/frontend/components/slide/Slide.svelte:109 isLessons; src/frontend/components/slide/Slide.svelte:112 ghostBackground; src/frontend/components/slide/Slide.svelte:118 !media; src/frontend/components/slide/Slide.svelte:125 !bgPath.startsWith("http"); src/frontend/components/slide/Slide.svelte:128 $special.optimizedMode \|\| refs.some((a) => a.length > 28); src/frontend/components/slide/Slide.svelte:132 !media.

Calls: src/frontend/components/slide/Slide.svelte:94 loadBackground (depth 0); src/frontend/utils/common.ts:46 wait (depth 1); src/frontend/utils/common.ts:47 <callback> (depth 2); src/frontend/utils/common.ts:48 <callback> (depth 3); src/frontend/components/helpers/media.ts:247 getMediaCached (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/utils/common.ts:55 waitUntilValueIsDefined (depth 2); src/frontend/utils/common.ts:56 <callback> (depth 3); src/frontend/utils/common.ts:60 <callback> (depth 4); src/frontend/utils/common.ts:73 exit (depth 5); src/frontend/utils/common.ts:65 <callback> (depth 4); src/frontend/utils/common.ts:73 exit (depth 4); src/frontend/components/helpers/media.ts:254 <callback> (depth 2); src/frontend/components/helpers/media.ts:182 getMedia (depth 1); src/frontend/components/helpers/media.ts:192 <callback> (depth 2); src/frontend/components/helpers/media.ts:781 downloadOnlineMedia (depth 2).

Effects: src/frontend/components/helpers/media.ts:785 ipc requestMain(Main.MEDIA_IS_DOWNLOADED, { url, contentFile: mediaData?.contentFile }) ; src/frontend/components/helpers/media.ts:804 ipc sendMain(Main.MEDIA_DOWNLOAD, { url, contentFile: updatedMediaData?.contentFile }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/media.ts:821 ipc requestMain(Main.CHECK_MEDIA_LICENSE, { providerId, mediaId }) ; src/frontend/components/helpers/media.ts:824 store-write src/frontend/stores.ts#media ; src/frontend/components/helpers/media.ts:832 store-write src/frontend/stores.ts#media ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/media.ts:272 ipc requestMain(Main.LOCATE_MEDIA_FILE, { filePath: path, folders }) ; src/frontend/utils/cloudSync.ts:222 ipc sendMain(Main.MEDIA_FOLDER_COPY, { paths: &#91;filePath&#93; }) ; src/frontend/components/helpers/media.ts:445 ipc requestMain(Main.GET_THUMBNAIL, { input, size }) ; src/frontend/components/helpers/media.ts:486 store-write src/frontend/stores.ts#loadedMediaThumbnails ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 35. Full edges/effects/conditions in JSON.

## setTimeout — event-25122af2105e463e91

[code] [src/frontend/components/slide/Slide.svelte:222](../../../../../src/frontend/components/slide/Slide.svelte#L222); () => { refreshListBoxes.set(-1) }. resolved-within-bound.

Conditions: src/frontend/components/slide/Slide.svelte:221 $refreshListBoxes >= 0.

Calls: src/frontend/components/slide/Slide.svelte:222 <callback> (depth 0).

Effects: src/frontend/components/slide/Slide.svelte:223 store-write src/frontend/stores.ts#refreshListBoxes .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-45ba413248bf7ae23b

[code] [src/frontend/components/slide/Slide.svelte:270](../../../../../src/frontend/components/slide/Slide.svelte#L270); () => { if (!Array.isArray(itemsList)) return if (itemsList.find((a) => a?.conditions)) conditionsUpdater++ }. resolved-within-bound.

Conditions: src/frontend/components/slide/Slide.svelte:271 !Array.isArray(itemsList); src/frontend/components/slide/Slide.svelte:272 itemsList.find((a) => a?.conditions).

Calls: src/frontend/components/slide/Slide.svelte:270 <callback> (depth 0); src/frontend/components/slide/Slide.svelte:272 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
