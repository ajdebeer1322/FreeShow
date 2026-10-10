# Setting a video background

## Observed result

[verified] Existing setOutput helper with the repository clipA.mp4 fixture; media DOM observed. Evidence: [observation data](observations.json), action ID `video-background`, recorded 2026-10-10T19:27:33.662Z.

[code] Verification scope: A muted local MP4 decoded in the output (readyState 4, not paused). The helper was invoked directly; drawer selection, network media, audible audio, drift across outputs and soft loops were not verified.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The video preview's play path sends the media path/style to setOutput as a background. ([src/frontend/components/show/VideoShow.svelte:204](../../../src/frontend/components/show/VideoShow.svelte#L204))

2. [code] setOutput reconciles foreground/PDF/PPT content and applies background normalization before writing live state. ([src/frontend/components/helpers/output.ts:267](../../../src/frontend/components/helpers/output.ts#L267))

3. [code] The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))

4. [code] Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))

5. [code] The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature. ([src/frontend/utils/receivers.ts:204](../../../src/frontend/utils/receivers.ts#L204))

6. [code] The background layer is rendered subject to output layers and scene visibility. ([src/frontend/components/output/Output.svelte:376](../../../src/frontend/components/output/Output.svelte#L376))

7. [code] Background manages two fading media slots, load fallback and rapid-change retry timers. ([src/frontend/components/output/layers/Background.svelte:40](../../../src/frontend/components/output/layers/Background.svelte#L40))

8. [code] BackgroundMedia passes the resolved path/style and fading context to the media layer. ([src/frontend/components/output/layers/BackgroundMedia.svelte:38](../../../src/frontend/components/output/layers/BackgroundMedia.svelte#L38))

9. [code] Video subscribes to playback state and uses videoSync correction against the associated clock. ([src/frontend/components/media/Video.svelte:44](../../../src/frontend/components/media/Video.svelte#L44))

10. [code] The native video element receives the encoded file source, loop state and loadedmetadata handler. ([src/frontend/components/media/Video.svelte:215](../../../src/frontend/components/media/Video.svelte#L215))

## State, messages and history

[code] Read [media-video](../subsystems/media-video.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/show/VideoShow.svelte](../generated/files/src_frontend_components_show_VideoShow.svelte.md)
- [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md)
- [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md)
- [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md)
- [src/frontend/components/output/layers/Background.svelte](../generated/files/src_frontend_components_output_layers_Background.svelte.md)
- [src/frontend/components/output/layers/BackgroundMedia.svelte](../generated/files/src_frontend_components_output_layers_BackgroundMedia.svelte.md)
- [src/frontend/components/media/Video.svelte](../generated/files/src_frontend_components_media_Video.svelte.md)

[code] 83 related decision records: [full IDs and locations](video-background.dependencies.json); representative records:

- [code] [D-timer-7e64037759e23a26](../history/records/src_frontend_components_show_VideoShow.svelte-1.md).
- [code] [D-timer-4094713e914b0c42](../history/records/src_frontend_utils_listeners.ts-1.md).
- [code] [D-workaround-743511ce00359c38](../history/records/src_frontend_components_output_layers_Background.svelte-1.md).
- [guess] [D-hotspot-94b53592b6d592e8](../history/records/src_electron_output_helpers_OutputSend.ts-1.md).
- [guess] [D-hotspot-7af11be48814e880](../history/records/src_frontend_components_helpers_output.ts-1.md).

[code] No specific companion finding assigned. See the [evidence method](README.md) before reusing these observations.
