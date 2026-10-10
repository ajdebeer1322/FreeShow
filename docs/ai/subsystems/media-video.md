# Backgrounds, media and video synchronization

## Purpose

[code] Resolve background media, load compatible sources and coordinate video playback with audio/output state. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/output/layers/Background.svelte](../generated/files/src_frontend_components_output_layers_Background.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/media.ts](../generated/files/src_frontend_components_helpers_media.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/media/Video.svelte](../generated/files/src_frontend_components_media_Video.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/media/video/videoSync.ts](../generated/files/src_frontend_components_media_video_videoSync.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/showActions.ts](../generated/files/src_frontend_components_helpers_showActions.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Background rendering delegates media handling while retaining output transition/style context. ([src/frontend/components/output/layers/Background.svelte:5](../../../src/frontend/components/output/layers/Background.svelte#L5))
2. [code] File location and online/local media handling are centralized rather than guessed by each preview. ([src/frontend/components/helpers/media.ts:261](../../../src/frontend/components/helpers/media.ts#L261))
3. [code] Video playback can follow playing-audio time through videoSync, with soft-loop/fading context. ([src/frontend/components/media/Video.svelte:7](../../../src/frontend/components/media/Video.svelte#L7))
4. [code] Synchronization uses the dedicated correction helper; seek/nudge behavior belongs here. ([src/frontend/components/media/video/videoSync.ts:40](../../../src/frontend/components/media/video/videoSync.ts#L40))
5. [code] End-of-media progression uses the shared output navigation path. ([src/frontend/components/helpers/showActions.ts:677](../../../src/frontend/components/helpers/showActions.ts#L677))

## Stores and messages

[code] Static scope: 11 files, 43 referenced stores, 16 concrete message keys, 49 timing entries. [Complete dependency index](media-video.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activeInteractions](../generated/stores/src_frontend_stores.ts_activeInteractions.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioData](../generated/stores/src_frontend_stores.ts_audioData.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#cachePath](../generated/stores/src_frontend_stores.ts_cachePath.md)
- [code] [src/frontend/stores.ts#cachedDynamicValues](../generated/stores/src_frontend_stores.ts_cachedDynamicValues.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#customMetadata](../generated/stores/src_frontend_stores.ts_customMetadata.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#dynamicValueData](../generated/stores/src_frontend_stores.ts_dynamicValueData.md)
- [code] [src/frontend/stores.ts#editingProjectTemplate](../generated/stores/src_frontend_stores.ts_editingProjectTemplate.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#interactions](../generated/stores/src_frontend_stores.ts_interactions.md)
- [code] [src/frontend/stores.ts#loadedMediaThumbnails](../generated/stores/src_frontend_stores.ts_loadedMediaThumbnails.md)
- [code] [src/frontend/stores.ts#media](../generated/stores/src_frontend_stores.ts_media.md)
- [code] [src/frontend/stores.ts#mediaFolders](../generated/stores/src_frontend_stores.ts_mediaFolders.md)
- [code] [src/frontend/stores.ts#outLocked](../generated/stores/src_frontend_stores.ts_outLocked.md)
- [code] [src/frontend/stores.ts#outputDisplay](../generated/stores/src_frontend_stores.ts_outputDisplay.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Do not overwrite playback rate reactively while the synchronization helper is nudging it. ([src/frontend/components/media/Video.svelte:149](../../../src/frontend/components/media/Video.svelte#L149))
- [code] Reuse path encoding and source resolution so file URLs remain compatible with local/remote media. ([src/frontend/components/helpers/media.ts:74](../../../src/frontend/components/helpers/media.ts#L74))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/helpers/showActions.ts:92](../../../src/frontend/components/helpers/showActions.ts#L92): // TODO: combine with ShowButton.svelte click()
- [code] [src/frontend/components/helpers/showActions.ts:333](../../../src/frontend/components/helpers/showActions.ts#L333): // WIP custom next slide timer duration (has to be changed on slide click & in preview as well)
- [code] [src/frontend/components/helpers/showActions.ts:369](../../../src/frontend/components/helpers/showActions.ts#L369): // WIP remove layout ghost bg after actual slide bg (we don't need ghosts for slide backgrounds)
- [code] [src/frontend/components/helpers/showActions.ts:382](../../../src/frontend/components/helpers/showActions.ts#L382): // WIP getMediaLayerType - use what is set in show only

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-poll-interval-9aea957a500b4301](../history/records/src_frontend_components_helpers_media.ts-1.md): poll-interval: 20 (20 ms).
- [code] [D-poll-timeout-40d26b0f5ebcb0a8](../history/records/src_frontend_components_helpers_media.ts-1.md): poll-timeout: 5000 (5000 ms).
- [code] [D-timer-e8b7794a60cb9b55](../history/records/src_frontend_components_helpers_media.ts-1.md): wait: loading (dynamic ms).
- [code] [D-timer-c1b7dd5471c77c43](../history/records/src_frontend_components_helpers_showActions.ts-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-2efd07edaaf6af61](../history/records/src_frontend_components_helpers_showActions.ts-1.md): setTimeout: 200 (200 ms).
- [code] [D-workaround-743511ce00359c38](../history/records/src_frontend_components_output_layers_Background.svelte-1.md): // prevent svelte bug creating multiple items if creating new while old clears.

[code] All 71 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-015](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
