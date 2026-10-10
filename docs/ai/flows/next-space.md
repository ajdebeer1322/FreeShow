# Next slide with Space

## Observed result

[verified] Real keyboard Space through the built-in shortcut. Evidence: [observation data](observations.json), action ID `next-space`, recorded 2026-10-10T19:27:33.662Z.

[code] Verification scope: The second ordinary slide was observed. Linked-output holds, end-of-project behavior and timeline interception remain source-only.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The Space shortcut rejects active context/timeline cases, prevents default and calls OutputHelper.advanceOutputs. ([src/frontend/utils/shortcuts.ts:390](../../../src/frontend/utils/shortcuts.ts#L390))

2. [code] The renderer OutputHelper computes linked waiting outputs, clears left-behind cards and steps each eligible output. ([src/frontend/components/helpers/OutputHelper.ts:23](../../../src/frontend/components/helpers/OutputHelper.ts#L23))

3. [code] Per-output advancement resolves the next item/reveal/line and invokes the common playback path. ([src/frontend/components/helpers/OutputHelper.ts:112](../../../src/frontend/components/helpers/OutputHelper.ts#L112))

4. [code] The selected destination receives the next live slide through the existing setOutput path. ([src/frontend/components/helpers/output.ts:158](../../../src/frontend/components/helpers/output.ts#L158))

5. [code] The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))

6. [code] Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))

7. [code] The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature. ([src/frontend/utils/receivers.ts:204](../../../src/frontend/utils/receivers.ts#L204))

8. [code] Output resolves the show/temp slide and style/template data from its local stores. ([src/frontend/components/output/Output.svelte:171](../../../src/frontend/components/output/Output.svelte#L171))

9. [code] Output delays line/slide commits by 50 ms in an output renderer, 10 ms elsewhere; clearing uses the separate zero-delay branch. ([src/frontend/components/output/Output.svelte:227](../../../src/frontend/components/output/Output.svelte#L227))

10. [code] SlideContent prepares item state and hidden auto-size probes before its show/transition state changes. ([src/frontend/components/output/layers/SlideContent.svelte:175](../../../src/frontend/components/output/layers/SlideContent.svelte#L175))

11. [code] Textbox renders the item and can signal auto-size readiness to the parent; this does not prove that every item uses auto-size. ([src/frontend/components/slide/Textbox.svelte:70](../../../src/frontend/components/slide/Textbox.svelte#L70))

## State, messages and history

[code] Read [presentation](../subsystems/presentation.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/utils/shortcuts.ts](../generated/files/src_frontend_utils_shortcuts.ts.md)
- [src/frontend/components/helpers/OutputHelper.ts](../generated/files/src_frontend_components_helpers_OutputHelper.ts.md)
- [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md)
- [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md)
- [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md)
- [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md)
- [src/frontend/components/slide/Textbox.svelte](../generated/files/src_frontend_components_slide_Textbox.svelte.md)

[code] 98 related decision records: [full IDs and locations](next-space.dependencies.json); representative records:

- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-24d1dc584a7d8c38](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-7e20e324eb39abdb](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-02741a0b4a6cecaf](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).

[code] Companion findings [F-008](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-010](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
