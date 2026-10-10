# Opening an output

## Observed result

[verified] Existing toggleOutputs helper; renderer/window handshake observed. Evidence: [observation data](observations.json), action ID `opening-output`, recorded 2026-10-10T19:27:33.662Z.

[code] Verification scope: A real output renderer and initial state handshake were observed through toggleOutputs. Physical monitor positioning, fullscreen, multiple displays, capture-only OSR and stage-output switching were not tested.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The top output button resolves confirmation/force state before calling the shared toggle helper. ([src/frontend/components/main/Top.svelte:26](../../../src/frontend/components/main/Top.svelte#L26))

2. [code] The helper resolves IDs, filters enabled outputs and sends OUTPUT/TOGGLE_OUTPUTS with state and positioning options. ([src/frontend/components/helpers/output.ts:130](../../../src/frontend/components/helpers/output.ts#L130))

3. [code] Electron dispatches the channel to its OutputHelper, distinct from the renderer class of the same name. ([src/electron/index.ts:413](../../../src/electron/index.ts#L413))

4. [code] The message handler delegates opening/hiding to OutputVisibility. ([src/electron/output/OutputHelper.ts:21](../../../src/electron/output/OutputHelper.ts#L21))

5. [code] Visibility finds or creates the output, resolves bounds and shows/hides the physical window. ([src/electron/output/helpers/OutputVisibility.ts:23](../../../src/electron/output/helpers/OutputVisibility.ts#L23))

6. [code] Lifecycle waits for GPU state, creates/registers a BrowserWindow and schedules capture initialization. ([src/electron/output/helpers/OutputLifecycle.ts:87](../../../src/electron/output/helpers/OutputLifecycle.ts#L87))

7. [code] The output handshake sends the initial stores and matching output data, separate from later subscriptions. ([src/frontend/utils/listeners.ts:523](../../../src/frontend/utils/listeners.ts#L523))

8. [code] MainOutput gates ordinary Output mounting for 2,000 ms while preloading its font; stage output follows its own branch. ([src/frontend/MainOutput.svelte:40](../../../src/frontend/MainOutput.svelte#L40))

## State, messages and history

[code] Read [startup](../subsystems/startup.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/main/Top.svelte](../generated/files/src_frontend_components_main_Top.svelte.md)
- [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md)
- [src/electron/index.ts](../generated/files/src_electron_index.ts.md)
- [src/electron/output/OutputHelper.ts](../generated/files/src_electron_output_OutputHelper.ts.md)
- [src/electron/output/helpers/OutputVisibility.ts](../generated/files/src_electron_output_helpers_OutputVisibility.ts.md)
- [src/electron/output/helpers/OutputLifecycle.ts](../generated/files/src_electron_output_helpers_OutputLifecycle.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/frontend/MainOutput.svelte](../generated/files/src_frontend_MainOutput.svelte.md)

[code] 66 related decision records: [full IDs and locations](opening-output.dependencies.json); representative records:

- [code] [D-timer-6c606adee9f9fe54](../history/records/src_frontend_MainOutput.svelte-1.md).
- [code] [D-timer-03ccf6b182b056ea](../history/records/src_frontend_components_main_Top.svelte-1.md).
- [code] [D-timer-4094713e914b0c42](../history/records/src_frontend_utils_listeners.ts-1.md).
- [code] [D-workaround-dd6d6214d6a7e928](../history/records/src_frontend_MainOutput.svelte-1.md).
- [guess] [D-hotspot-e29021bf61ba180d](../history/records/src_electron_output_OutputHelper.ts-1.md).

[code] Companion findings [F-014](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
