# Textbox and auto-size measurement

## Purpose

[code] Measure DOM text against its actual box, cache compatible results, and keep measurement state separate from saved values. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/slide/Textbox.svelte](../generated/files/src_frontend_components_slide_Textbox.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/edit/scripts/autosize.ts](../generated/files/src_frontend_components_edit_scripts_autosize.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Non-preview Textbox mounting defers loaded by 100 ms; preview sets it immediately. ([src/frontend/components/slide/Textbox.svelte:118](../../../src/frontend/components/slide/Textbox.svelte#L118))
2. [code] Font/resource readiness waits have a 500 ms budget; this is not a promise that every measurement takes 500 ms. ([src/frontend/components/slide/Textbox.svelte:429](../../../src/frontend/components/slide/Textbox.svelte#L429))
3. [code] Auto-size searches bounded font sizes using measured overflow rather than a character-count heuristic. ([src/frontend/components/edit/scripts/autosize.ts:75](../../../src/frontend/components/edit/scripts/autosize.ts#L75))
4. [code] Message tickers may extend along travel direction; fitting checks the perpendicular axis. ([src/frontend/components/edit/scripts/autosize.ts:94](../../../src/frontend/components/edit/scripts/autosize.ts#L94))
5. [code] Some renderer contexts write measured sizes back to show/overlay/template state. ([src/frontend/components/slide/Textbox.svelte:413](../../../src/frontend/components/slide/Textbox.svelte#L413))
6. [code] This base already contains auto-size precompute scheduling; later companion findings describe revisions of its geometry/cache behavior. ([src/frontend/components/output/layers/SlideContent.svelte:157](../../../src/frontend/components/output/layers/SlideContent.svelte#L157))

## Stores and messages

[code] Static scope: 4 files, 11 referenced stores, 1 concrete message keys, 27 timing entries. [Complete dependency index](autosize-textbox.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#groups](../generated/stores/src_frontend_stores.ts_groups.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)
- [code] [src/frontend/stores.ts#scriptureSettings](../generated/stores/src_frontend_stores.ts_scriptureSettings.md)
- [code] [src/frontend/stores.ts#showsCache](../generated/stores/src_frontend_stores.ts_showsCache.md)
- [code] [src/frontend/stores.ts#slideTimelineSpeedMultiplier](../generated/stores/src_frontend_stores.ts_slideTimelineSpeedMultiplier.md)
- [code] [src/frontend/stores.ts#slidesOptions](../generated/stores/src_frontend_stores.ts_slidesOptions.md)
- [code] [src/frontend/stores.ts#styles](../generated/stores/src_frontend_stores.ts_styles.md)
- [code] [src/frontend/stores.ts#templates](../generated/stores/src_frontend_stores.ts_templates.md)
- [code] [src/frontend/stores.ts#variables](../generated/stores/src_frontend_stores.ts_variables.md)

[code] Message families: [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Always remove measurement clones, including failure paths. ([src/frontend/components/edit/scripts/autosize.ts:116](../../../src/frontend/components/edit/scripts/autosize.ts#L116))
- [code] A cached size is valid only for its signature; do not equate a persisted autoFontSize with a fresh output measurement. ([src/frontend/components/slide/Textbox.svelte:492](../../../src/frontend/components/slide/Textbox.svelte#L492))
- [code] Preserve the distinction between thumbnail/preview and live-output readiness. ([src/frontend/components/slide/Textbox.svelte:113](../../../src/frontend/components/slide/Textbox.svelte#L113))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/output/layers/SlideContent.svelte:226](../../../src/frontend/components/output/layers/SlideContent.svelte#L226): // if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)
- [code] [src/frontend/components/output/layers/SlideContent.svelte:364](../../../src/frontend/components/output/layers/SlideContent.svelte#L364): // timelineItems = new Set<Item&#91;&#93;>() // WIP reset eventually?
- [code] [src/frontend/components/output/layers/SlideContent.svelte:370](../../../src/frontend/components/output/layers/SlideContent.svelte#L370): // WIP use actual slide timeline pos when available?
- [code] [src/frontend/components/slide/Textbox.svelte:271](../../../src/frontend/components/slide/Textbox.svelte#L271): // WIP this will update the output immediately when template changes, but shouldn't update until refreshing

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: betweenClearingTransition.duration (dynamic ms).
- [code] [D-timer-8093f55a2dd3b53d](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-24d1dc584a7d8c38](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: waitToShow (dynamic ms).
- [code] [D-timer-7e20e324eb39abdb](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-ea90315dd39e1bd3](../history/records/src_frontend_components_slide_Textbox.svelte-1.md): wait: 10 (10 ms).

[code] All 40 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-001](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-002](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-004](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-005](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-006](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-010](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-018](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-019](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
