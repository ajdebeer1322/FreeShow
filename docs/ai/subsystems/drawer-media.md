# Drawer and media library

## Purpose

[code] Browse libraries through reusable drawer tabs, folder/thumbnail caches and media preview components. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/drawer/Drawer.svelte](../generated/files/src_frontend_components_drawer_Drawer.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/values/tabs.ts](../generated/files/src_frontend_values_tabs.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/drawer/media/MediaLoader.svelte](../generated/files/src_frontend_components_drawer_media_MediaLoader.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/media.ts](../generated/files/src_frontend_components_helpers_media.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Drawer composes navigation and content while stored state controls tab/size behavior. ([src/frontend/components/drawer/Drawer.svelte:12](../../../src/frontend/components/drawer/Drawer.svelte#L12))
2. [code] Tab definitions are declarative and separate from the component implementing each tab. ([src/frontend/values/tabs.ts:3](../../../src/frontend/values/tabs.ts#L3))
3. [code] MediaLoader selects media/thumbnail handling rather than assuming every file is an image. ([src/frontend/components/drawer/media/MediaLoader.svelte:3](../../../src/frontend/components/drawer/media/MediaLoader.svelte#L3))
4. [code] Media lookup and cached thumbnails belong to the shared media helper. ([src/frontend/components/helpers/media.ts:247](../../../src/frontend/components/helpers/media.ts#L247))
5. [code] Native thumbnail generation is requested through IPC. ([src/frontend/components/helpers/media.ts:104](../../../src/frontend/components/helpers/media.ts#L104))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 126 files, 128 referenced stores, 43 concrete message keys, 156 timing entries. [Complete dependency index](drawer-media.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/drawer/media/MediaCard.svelte#currentOutput](../generated/stores/src_frontend_components_drawer_media_MediaCard.svelte_currentOutput.md)
- [code] [src/frontend/components/drawer/media/MediaCard.svelte#currentStyle](../generated/stores/src_frontend_components_drawer_media_MediaCard.svelte_currentStyle.md)
- [code] [src/frontend/stores.ts#actionHistory](../generated/stores/src_frontend_stores.ts_actionHistory.md)
- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeActionTagFilter](../generated/stores/src_frontend_stores.ts_activeActionTagFilter.md)
- [code] [src/frontend/stores.ts#activeAudioEffects](../generated/stores/src_frontend_stores.ts_activeAudioEffects.md)
- [code] [src/frontend/stores.ts#activeCanvaPresentation](../generated/stores/src_frontend_stores.ts_activeCanvaPresentation.md)
- [code] [src/frontend/stores.ts#activeDays](../generated/stores/src_frontend_stores.ts_activeDays.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activeInteractions](../generated/stores/src_frontend_stores.ts_activeInteractions.md)
- [code] [src/frontend/stores.ts#activeMediaTagFilter](../generated/stores/src_frontend_stores.ts_activeMediaTagFilter.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePlayerTagFilter](../generated/stores/src_frontend_stores.ts_activePlayerTagFilter.md)
- [code] [src/frontend/stores.ts#activePlaylist](../generated/stores/src_frontend_stores.ts_activePlaylist.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRecording](../generated/stores/src_frontend_stores.ts_activeRecording.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeScripture](../generated/stores/src_frontend_stores.ts_activeScripture.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)

[code] Message families: [BLACKMAGIC](../generated/channels/BLACKMAGIC.md), [EXPORT](../generated/channels/EXPORT.md), [MAIN](../generated/channels/MAIN.md), [NDI](../generated/channels/NDI.md), [OMT](../generated/channels/OMT.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Do not confuse a media-library path with a guaranteed available local file. ([src/frontend/components/helpers/media.ts:107](../../../src/frontend/components/helpers/media.ts#L107))
- [code] Preserve loader lifecycle cleanup; previews can allocate observers/player resources. ([src/frontend/components/drawer/media/MediaLoader.svelte:2](../../../src/frontend/components/drawer/media/MediaLoader.svelte#L2))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/drawer/VirtualList.svelte:159](../../../src/frontend/components/drawer/VirtualList.svelte#L159): // TODO if we overestimated the space these
- [code] [src/frontend/components/drawer/audio/Metronome.svelte:91](../../../src/frontend/components/drawer/audio/Metronome.svelte#L91): <!-- TODO: last used values, click to play with preset values -->
- [code] [src/frontend/components/drawer/bible/Scripture.svelte:267](../../../src/frontend/components/drawer/bible/Scripture.svelte#L267): // WIP similar to getSplittedVerses in scripture.ts
- [code] [src/frontend/components/drawer/bible/Scripture.svelte:440](../../../src/frontend/components/drawer/bible/Scripture.svelte#L440): // WIP move this?

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-1740a1819cd38b97](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md): setTimeout: 1500 (1500 ms).
- [code] [D-timer-8303c02ad65c136f](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md): setTimeout: 1500 (1500 ms).
- [code] [D-timer-888bfd504fd4736a](../history/records/src_frontend_components_drawer_player_YouTubePlayerLite.svelte-1.md): setTimeout: 100 (100 ms).
- [code] [D-poll-interval-9aea957a500b4301](../history/records/src_frontend_components_helpers_media.ts-1.md): poll-interval: 20 (20 ms).
- [code] [D-poll-timeout-40d26b0f5ebcb0a8](../history/records/src_frontend_components_helpers_media.ts-1.md): poll-timeout: 5000 (5000 ms).
- [code] [D-timer-e8b7794a60cb9b55](../history/records/src_frontend_components_helpers_media.ts-1.md): wait: loading (dynamic ms).

[code] All 191 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
