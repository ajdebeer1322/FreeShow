# Clicking a slide

## Observed result

[verified] Real thumbnail click, output store and DOM. Evidence: [observation data](observations.json), action ID `clicking-slide`, recorded 2026-10-10T17:27:25.437Z.

[code] Verification scope: One ordinary two-slide show, one output, default style. Linked cards, reveals, project duplicates and rapid transition stress were not exercised.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The thumbnail handler remembers the explicit show/layout/index and expands a linked card when applicable. ([src/frontend/components/show/Slides.svelte:102](../../../src/frontend/components/show/Slides.svelte#L102))

2. [code] activateSlide checks locks/modifiers, custom actions and line/reveal state, then sends explicit presentation coordinates after a timeout. ([src/frontend/components/show/Slides.svelte:159](../../../src/frontend/components/show/Slides.svelte#L159))

3. [code] setOutput resolves bindings/explicit destinations and updates the active outputs' live content. ([src/frontend/components/helpers/output.ts:158](../../../src/frontend/components/helpers/output.ts#L158))

4. [code] updateOut applies slide extras such as background, overlays, actions and timers. ([src/frontend/components/helpers/showActions.ts:310](../../../src/frontend/components/helpers/showActions.ts#L310))

5. [code] The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))

6. [code] Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))

7. [code] The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature. ([src/frontend/utils/receivers.ts:204](../../../src/frontend/utils/receivers.ts#L204))

8. [code] Output resolves the show/temp slide and style/template data from its local stores. ([src/frontend/components/output/Output.svelte:171](../../../src/frontend/components/output/Output.svelte#L171))

9. [code] Output delays line/slide commits by 50 ms in an output renderer, 10 ms elsewhere; clearing uses the separate zero-delay branch. ([src/frontend/components/output/Output.svelte:227](../../../src/frontend/components/output/Output.svelte#L227))

10. [code] SlideContent prepares item state and hidden auto-size probes before its show/transition state changes. ([src/frontend/components/output/layers/SlideContent.svelte:157](../../../src/frontend/components/output/layers/SlideContent.svelte#L157))

11. [code] Textbox renders the item and can signal auto-size readiness to the parent; this does not prove that every item uses auto-size. ([src/frontend/components/slide/Textbox.svelte:70](../../../src/frontend/components/slide/Textbox.svelte#L70))

## State, messages and history

[code] Read [presentation](../subsystems/presentation.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/show/Slides.svelte](../generated/files/src_frontend_components_show_Slides.svelte.md)
- [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md)
- [src/frontend/components/helpers/showActions.ts](../generated/files/src_frontend_components_helpers_showActions.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md)
- [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md)
- [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md)
- [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md)
- [src/frontend/components/slide/Textbox.svelte](../generated/files/src_frontend_components_slide_Textbox.svelte.md)

[code] 117 related decision records: [full IDs and locations](clicking-slide.dependencies.json); representative records:

- [code] [D-timer-c1b7dd5471c77c43](../history/records/src_frontend_components_helpers_showActions.ts-1.md).
- [code] [D-timer-2efd07edaaf6af61](../history/records/src_frontend_components_helpers_showActions.ts-1.md).
- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-8093f55a2dd3b53d](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).

[code] Companion findings [F-008](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-009](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-010](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
