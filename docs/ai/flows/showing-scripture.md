# Showing scripture

## Observed result

[verified] Seeded local Bible selection, native playScripture helper, output DOM; no external Bible API. Evidence: [observation data](observations.json), action ID `showing-scripture`, recorded 2026-10-10T19:27:33.662Z.

[code] Verification scope: A seeded local Bible and playScripture produced id=temp and rendered the verse. The drawer action, external Bible APIs, licensing attribution, multilingual templates and multiple selections were not exercised.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The scripture display/update button invokes playScripture with the current selection. ([src/frontend/components/drawer/bible/Scripture.svelte:1261](../../../src/frontend/components/drawer/bible/Scripture.svelte#L1261))

2. [code] The active drawer tab, Bible definition and reference determine versions/books/chapters/verses to load. ([src/frontend/components/drawer/bible/scripture.ts:121](../../../src/frontend/components/drawer/bible/scripture.ts#L121))

3. [code] Bible loading caches local or API instances; the probe seeded a local cache to avoid an external service. ([src/frontend/components/drawer/bible/scripture.ts:43](../../../src/frontend/components/drawer/bible/scripture.ts#L43))

4. [code] playScripture resolves selected content, builds template items/dynamic values and records usage/history. ([src/frontend/components/drawer/bible/scripture.ts:278](../../../src/frontend/components/drawer/bible/scripture.ts#L278))

5. [code] Scripture enters ordinary output routing as a temporary slide with items, neighboring previews, attribution and translation context. ([src/frontend/components/drawer/bible/scripture.ts:341](../../../src/frontend/components/drawer/bible/scripture.ts#L341))

6. [code] The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))

7. [code] Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))

8. [code] The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature. ([src/frontend/utils/receivers.ts:204](../../../src/frontend/utils/receivers.ts#L204))

9. [code] Output resolves the show/temp slide and style/template data from its local stores. ([src/frontend/components/output/Output.svelte:171](../../../src/frontend/components/output/Output.svelte#L171))

10. [code] Output delays line/slide commits by 50 ms in an output renderer, 10 ms elsewhere; clearing uses the separate zero-delay branch. ([src/frontend/components/output/Output.svelte:227](../../../src/frontend/components/output/Output.svelte#L227))

11. [code] SlideContent prepares item state and hidden auto-size probes before its show/transition state changes. ([src/frontend/components/output/layers/SlideContent.svelte:175](../../../src/frontend/components/output/layers/SlideContent.svelte#L175))

12. [code] Textbox renders the item and can signal auto-size readiness to the parent; this does not prove that every item uses auto-size. ([src/frontend/components/slide/Textbox.svelte:70](../../../src/frontend/components/slide/Textbox.svelte#L70))

## State, messages and history

[code] Read [scripture](../subsystems/scripture.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/drawer/bible/Scripture.svelte](../generated/files/src_frontend_components_drawer_bible_Scripture.svelte.md)
- [src/frontend/components/drawer/bible/scripture.ts](../generated/files/src_frontend_components_drawer_bible_scripture.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md)
- [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md)
- [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md)
- [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md)
- [src/frontend/components/slide/Textbox.svelte](../generated/files/src_frontend_components_slide_Textbox.svelte.md)

[code] 92 related decision records: [full IDs and locations](showing-scripture.dependencies.json); representative records:

- [code] [D-timer-1740a1819cd38b97](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md).
- [code] [D-timer-8303c02ad65c136f](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md).
- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).
- [code] [D-timer-24d1dc584a7d8c38](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md).

[code] Companion findings [F-007](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
