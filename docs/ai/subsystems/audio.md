# Audio playback and routing

## Purpose

[code] Load/play audio, manage fades/playlists and route mixed or multichannel audio to outputs and capture senders. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/audio/audioPlayer.ts](../generated/files/src_frontend_audio_audioPlayer.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/audio/routing/audioRoutingManager.ts](../generated/files/src_frontend_audio_routing_audioRoutingManager.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/audio/audioFading.ts](../generated/files/src_frontend_audio_audioFading.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/audio/audioSender.ts](../generated/files/src_frontend_audio_audioSender.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] AudioPlayer locates a source, guards loading/lock/clearing state, and starts the shared playback lifecycle. ([src/frontend/audio/audioPlayer.ts:81](../../../src/frontend/audio/audioPlayer.ts#L81))
2. [code] Playlist occurrence indexes can be part of the playing key; a path is not always a unique playback instance. ([src/frontend/audio/audioPlayer.ts:60](../../../src/frontend/audio/audioPlayer.ts#L60))
3. [code] Audio routing is a separate manager rather than a collection of unrelated element volume changes. ([src/frontend/audio/routing/audioRoutingManager.ts:58](../../../src/frontend/audio/routing/audioRoutingManager.ts#L58))
4. [code] Clear/fade operations coordinate ongoing playback rather than simply deleting playing store entries. ([src/frontend/audio/audioFading.ts:22](../../../src/frontend/audio/audioFading.ts#L22))
5. [code] Sender targets derive from active outputs and configured audio/capture routing. ([src/frontend/audio/audioSender.ts:91](../../../src/frontend/audio/audioSender.ts#L91))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 53 files, 40 referenced stores, 10 concrete message keys, 49 timing entries. [Complete dependency index](audio.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeAudioEffects](../generated/stores/src_frontend_stores.ts_activeAudioEffects.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePlaylist](../generated/stores/src_frontend_stores.ts_activePlaylist.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioEffectPresets](../generated/stores/src_frontend_stores.ts_audioEffectPresets.md)
- [code] [src/frontend/stores.ts#audioEffects](../generated/stores/src_frontend_stores.ts_audioEffects.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#audioPlaylists](../generated/stores/src_frontend_stores.ts_audioPlaylists.md)
- [code] [src/frontend/stores.ts#audioRouting](../generated/stores/src_frontend_stores.ts_audioRouting.md)
- [code] [src/frontend/stores.ts#channelSidechainMultipliers](../generated/stores/src_frontend_stores.ts_channelSidechainMultipliers.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#customMetadata](../generated/stores/src_frontend_stores.ts_customMetadata.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#disabledServers](../generated/stores/src_frontend_stores.ts_disabledServers.md)
- [code] [src/frontend/stores.ts#drawer](../generated/stores/src_frontend_stores.ts_drawer.md)
- [code] [src/frontend/stores.ts#drawerTabsData](../generated/stores/src_frontend_stores.ts_drawerTabsData.md)
- [code] [src/frontend/stores.ts#effectsLibrary](../generated/stores/src_frontend_stores.ts_effectsLibrary.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#isFadingOut](../generated/stores/src_frontend_stores.ts_isFadingOut.md)

[code] Message families: [AUDIO](../generated/channels/AUDIO.md), [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Retain per-key loading exclusion to avoid duplicate concurrent players. ([src/frontend/audio/audioPlayer.ts:85](../../../src/frontend/audio/audioPlayer.ts#L85))
- [code] Keep fades, clearing and playlist progression coordinated with the existing playback state. ([src/frontend/audio/audioPlayer.ts:12](../../../src/frontend/audio/audioPlayer.ts#L12))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/electron/audio/IcecastSender.ts:33](../../../src/electron/audio/IcecastSender.ts#L33): // Separated real audio time tracking to fix the silence pacing bug
- [code] [src/frontend/audio/audioAnalyser.ts:13](../../../src/frontend/audio/audioAnalyser.ts#L13): // NOTE: we don't have access to analyse audio from Website/YouTube/Vimeo (But the "Desktop audio" input is a good workaround)
- [code] [src/frontend/audio/audioAnalyser.ts:493](../../../src/frontend/audio/audioAnalyser.ts#L493): // WIP per item capture for visualizer (audio file playback preview) ?
- [code] [src/frontend/audio/audioFading.ts:162](../../../src/frontend/audio/audioFading.ts#L162): // WIP non linear easing

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-poll-interval-e1c9f567f16d54f5](../history/records/src_frontend_audio_routing_audioRoutingInit.ts-1.md): poll-interval: 50 (50 ms).
- [code] [D-poll-timeout-f679a6bd0a5b855e](../history/records/src_frontend_audio_routing_audioRoutingInit.ts-1.md): poll-timeout: 5000 (5000 ms).
- [code] [D-workaround-24932ccfa7cdf39e](../history/records/src_electron_audio_IcecastSender.ts-1.md): // Separated real audio time tracking to fix the silence pacing bug.
- [guess] [D-hotspot-4f6da6366e4a661b](../history/records/src_frontend_components_output_tools_Audio.svelte-1.md): Module hotspot: src/frontend/components/output/tools/Audio.svelte.
- [code] [D-fork-a22ec4a7fd8398e1](../history/records/src_frontend_audio_audioAnalyser.ts-1.md): Use type-only imports for types in .ts files.

[code] All 56 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
