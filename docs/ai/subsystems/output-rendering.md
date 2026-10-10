# Output window rendering

## Purpose

[code] Render a destination's current slide, media, overlays, effects and messages with stable layer lifetimes. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/MainOutput.svelte](../generated/files/src_frontend_MainOutput.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] MainOutput selects the output renderer or stage layout using received output configuration. ([src/frontend/MainOutput.svelte:7](../../../src/frontend/MainOutput.svelte#L7))
2. [code] Output resolves its ID against outputs/allOutputs and applies style or explicit preview overrides. ([src/frontend/components/output/Output.svelte:37](../../../src/frontend/components/output/Output.svelte#L37))
3. [code] JSON signatures prevent unchanged content from rebuilding local layer snapshots. ([src/frontend/components/output/Output.svelte:80](../../../src/frontend/components/output/Output.svelte#L80))
4. [code] Messages render through the ordinary output overlay layer rather than a separate window system. ([src/frontend/components/output/Output.svelte:426](../../../src/frontend/components/output/Output.svelte#L426))
5. [code] Electron output sending filters destination data before the output receiver handles it. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))
6. [code] The output receiver excludes active from its equality signature before storing a changed payload. ([src/frontend/utils/receivers.ts:200](../../../src/frontend/utils/receivers.ts#L200))

## Stores and messages

[code] Static scope: 43 files, 94 referenced stores, 72 concrete message keys, 69 timing entries. [Complete dependency index](output-rendering.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/output/preview/SpotifyManager.ts#spotifyIsFading](../generated/stores/src_frontend_components_output_preview_SpotifyManager.ts_spotifyIsFading.md)
- [code] [src/frontend/components/output/preview/SpotifyManager.ts#spotifyState](../generated/stores/src_frontend_components_output_preview_SpotifyManager.ts_spotifyState.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeAnimate](../generated/stores/src_frontend_stores.ts_activeAnimate.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activeMessage](../generated/stores/src_frontend_stores.ts_activeMessage.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePlaylist](../generated/stores/src_frontend_stores.ts_activePlaylist.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRecording](../generated/stores/src_frontend_stores.ts_activeRecording.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#activeStyle](../generated/stores/src_frontend_stores.ts_activeStyle.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioData](../generated/stores/src_frontend_stores.ts_audioData.md)
- [code] [src/frontend/stores.ts#audioPlaylists](../generated/stores/src_frontend_stores.ts_audioPlaylists.md)
- [code] [src/frontend/stores.ts#cachedDynamicValues](../generated/stores/src_frontend_stores.ts_cachedDynamicValues.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)

[code] Message families: [CLOUD](../generated/channels/CLOUD.md), [MAIN](../generated/channels/MAIN.md), [NDI](../generated/channels/NDI.md), [OMT](../generated/channels/OMT.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Layer configuration and content equality checks serve different lifetimes; preserve that distinction. ([src/frontend/components/output/Output.svelte:71](../../../src/frontend/components/output/Output.svelte#L71))
- [code] Retain generation guards so superseded timer callbacks cannot replace newer slide content. ([src/frontend/components/output/layers/SlideContent.svelte:143](../../../src/frontend/components/output/layers/SlideContent.svelte#L143))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/MainOutput.svelte:35](../../../src/frontend/MainOutput.svelte#L35): // make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug
- [code] [src/frontend/components/output/Output.svelte:126](../../../src/frontend/components/output/Output.svelte#L126): // WIP option to turn off "content refresh" if slide content is identical to previous content ?
- [code] [src/frontend/components/output/Output.svelte:213](../../../src/frontend/components/output/Output.svelte#L213): // WIP revert to old style when output style is reverted to no style (REFRESH OUTPUT)
- [code] [src/frontend/components/output/ShowActions.svelte:69](../../../src/frontend/components/output/ShowActions.svelte#L69): // // WIP play media (see VideoShow.svelte)

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-6c606adee9f9fe54](../history/records/src_frontend_MainOutput.svelte-1.md): setTimeout: 2000 (2000 ms).
- [code] [D-timer-3517f50f02ec5b4a](../history/records/src_frontend_components_output_animation.ts-1.md): wait: 50 (50 ms).
- [code] [D-timer-f6ec73855261ef74](../history/records/src_frontend_components_output_layers_Overlay.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: betweenClearingTransition.duration (dynamic ms).
- [code] [D-timer-8093f55a2dd3b53d](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).

[code] All 135 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-003](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-014](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-016](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
