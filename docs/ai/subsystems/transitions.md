# Transitions and delayed layer replacement

## Purpose

[code] Keep outgoing and incoming slide items alive for the required animation while avoiding stale replacement callbacks. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/output/transitions/OutputTransition.svelte](../generated/files/src_frontend_components_output_transitions_OutputTransition.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/transitions/SlideItemTransition.svelte](../generated/files/src_frontend_components_output_transitions_SlideItemTransition.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/layers/SlideContent.svelte](../generated/files/src_frontend_components_output_layers_SlideContent.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] A conditional wrapper chooses the direct no-transition branch or global in/out custom transitions. ([src/frontend/components/output/transitions/OutputTransition.svelte:9](../../../src/frontend/components/output/transitions/OutputTransition.svelte#L9))
2. [code] Item transitions manage retained/rendered references separately from the enclosing slide. ([src/frontend/components/output/transitions/SlideItemTransition.svelte:25](../../../src/frontend/components/output/transitions/SlideItemTransition.svelte#L25))
3. [code] Incoming timing uses transition duration multiplied by fadeInOffset/100, defaulting to 50%. ([src/frontend/components/output/layers/SlideContent.svelte:331](../../../src/frontend/components/output/layers/SlideContent.svelte#L331))
4. [code] The hide/rebuild/show timer chain aborts obsolete generations. ([src/frontend/components/output/layers/SlideContent.svelte:395](../../../src/frontend/components/output/layers/SlideContent.svelte#L395))
5. [code] Unchanged items can remain rendered rather than entering the hide/show cycle. ([src/frontend/components/output/layers/SlideContent.svelte:403](../../../src/frontend/components/output/layers/SlideContent.svelte#L403))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 5 files, 6 referenced stores, 0 concrete message keys, 19 timing entries. [Complete dependency index](transitions.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#scriptureSettings](../generated/stores/src_frontend_stores.ts_scriptureSettings.md)
- [code] [src/frontend/stores.ts#showsCache](../generated/stores/src_frontend_stores.ts_showsCache.md)
- [code] [src/frontend/stores.ts#slideTimelineSpeedMultiplier](../generated/stores/src_frontend_stores.ts_slideTimelineSpeedMultiplier.md)
- [code] [src/frontend/stores.ts#templates](../generated/stores/src_frontend_stores.ts_templates.md)
- [code] [src/frontend/stores.ts#transitionData](../generated/stores/src_frontend_stores.ts_transitionData.md)

[code] Message families: none concretely indexed in this scope. Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Do not assume an element leaves the DOM when show becomes false; its outro can retain it. ([src/frontend/components/output/layers/SlideContent.svelte:399](../../../src/frontend/components/output/layers/SlideContent.svelte#L399))
- [code] Treat removal of a workaround as a behavior change requiring the output timeline harness. ([src/frontend/components/output/transitions/OutputTransition.svelte:12](../../../src/frontend/components/output/transitions/OutputTransition.svelte#L12))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/output/layers/Overlay.svelte:35](../../../src/frontend/components/output/layers/Overlay.svelte#L35): // WIP similar to SlideContent.svelte
- [code] [src/frontend/components/output/layers/SlideContent.svelte:304](../../../src/frontend/components/output/layers/SlideContent.svelte#L304): // if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)
- [code] [src/frontend/components/output/layers/SlideContent.svelte:449](../../../src/frontend/components/output/layers/SlideContent.svelte#L449): // timelineItems = new Set<Item&#91;&#93;>() // WIP reset eventually?
- [code] [src/frontend/components/output/layers/SlideContent.svelte:455](../../../src/frontend/components/output/layers/SlideContent.svelte#L455): // WIP use actual slide timeline pos when available?

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-f6ec73855261ef74](../history/records/src_frontend_components_output_layers_Overlay.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-cf6a381999a4c4c9](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: betweenClearingTransition.duration (dynamic ms).
- [code] [D-timer-5a0884eced6ca67c](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-24d1dc584a7d8c38](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: waitToShow (dynamic ms).
- [code] [D-timer-7e20e324eb39abdb](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-02741a0b4a6cecaf](../history/records/src_frontend_components_output_layers_SlideContent.svelte-1.md): setTimeout: omitted (0 ms).

[code] All 33 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-003](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-016](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
