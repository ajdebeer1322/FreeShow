# Overlays, effects and Messages

## Purpose

[code] Layer reusable overlay definitions, effects and immutable live message snapshots over ordinary presentation output. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/helpers/messages.ts](../generated/files/src_frontend_components_helpers_messages.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/messageOutput.ts](../generated/files/src_frontend_components_helpers_messageOutput.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/MainLayout.svelte](../generated/files/src_frontend_MainLayout.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/layers/MessageInstance.svelte](../generated/files/src_frontend_components_output_layers_MessageInstance.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/output/effects/EffectOutput.svelte](../generated/files/src_frontend_components_output_effects_EffectOutput.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Message snapshots resolve variables into copied native items, escape text and assign a revision. ([src/frontend/components/helpers/messages.ts:114](../../../src/frontend/components/helpers/messages.ts#L114))
2. [code] Message routing excludes disabled/stage outputs and respects configured destinations or current normal output selection. ([src/frontend/components/helpers/messageOutput.ts:17](../../../src/frontend/components/helpers/messageOutput.ts#L17))
3. [code] One desktop scheduler tracks each output/definition deadline and verifies revision before expiry. ([src/frontend/components/helpers/messageOutput.ts:41](../../../src/frontend/components/helpers/messageOutput.ts#L41))
4. [code] The scheduler belongs to the main layout lifetime, so closing the panel does not stop expiry. ([src/frontend/MainLayout.svelte:16](../../../src/frontend/MainLayout.svelte#L16))
5. [code] Message rendering keys operating revisions independently so old and new content can transition. ([src/frontend/components/output/layers/MessageInstance.svelte:13](../../../src/frontend/components/output/layers/MessageInstance.svelte#L13))
6. [code] Effects use their existing output renderer and configuration rather than storing them inside slide items. ([src/frontend/components/output/effects/EffectOutput.svelte:3](../../../src/frontend/components/output/effects/EffectOutput.svelte#L3))

## Stores and messages

[code] Static scope: 16 files, 27 referenced stores, 0 concrete message keys, 6 timing entries. [Complete dependency index](overlays-effects-messages.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/helpers/debugLog.ts#debugPanelOpen](../generated/stores/src_frontend_components_helpers_debugLog.ts_debugPanelOpen.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeMessage](../generated/stores/src_frontend_stores.ts_activeMessage.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#ai](../generated/stores/src_frontend_stores.ts_ai.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#editMode](../generated/stores/src_frontend_stores.ts_editMode.md)
- [code] [src/frontend/stores.ts#effects](../generated/stores/src_frontend_stores.ts_effects.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#hoveredEffectItem](../generated/stores/src_frontend_stores.ts_hoveredEffectItem.md)
- [code] [src/frontend/stores.ts#loaded](../generated/stores/src_frontend_stores.ts_loaded.md)
- [code] [src/frontend/stores.ts#messageDrafts](../generated/stores/src_frontend_stores.ts_messageDrafts.md)
- [code] [src/frontend/stores.ts#messagesPanelOpen](../generated/stores/src_frontend_stores.ts_messagesPanelOpen.md)
- [code] [src/frontend/stores.ts#os](../generated/stores/src_frontend_stores.ts_os.md)
- [code] [src/frontend/stores.ts#outLocked](../generated/stores/src_frontend_stores.ts_outLocked.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)
- [code] [src/frontend/stores.ts#profiles](../generated/stores/src_frontend_stores.ts_profiles.md)
- [code] [src/frontend/stores.ts#projectView](../generated/stores/src_frontend_stores.ts_projectView.md)
- [code] [src/frontend/stores.ts#resized](../generated/stores/src_frontend_stores.ts_resized.md)

[code] Message families: none concretely indexed in this scope. Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Escape operating text before the native HTML rendering path. ([src/frontend/components/helpers/messages.ts:71](../../../src/frontend/components/helpers/messages.ts#L71))
- [code] An older deadline must never remove a newer snapshot. ([src/frontend/components/helpers/messageOutput.ts:55](../../../src/frontend/components/helpers/messageOutput.ts#L55))
- [code] Manual Show/Hide/Clear honor the output lock; scheduler expiry separately checks revision. ([src/frontend/components/helpers/messageOutput.ts:8](../../../src/frontend/components/helpers/messageOutput.ts#L8))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/output/effects/effectRenderer.ts:629](../../../src/frontend/components/output/effects/effectRenderer.ts#L629): // WIP color range? / specific color with different brightness
- [code] [src/frontend/components/output/layers/Overlay.svelte:35](../../../src/frontend/components/output/layers/Overlay.svelte#L35): // WIP similar to SlideContent.svelte
- [code] [src/frontend/components/output/layers/Overlays.svelte:18](../../../src/frontend/components/output/layers/Overlays.svelte#L18): // prevent spamming overlays as they get stuck due to Svelte bug

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-f6ec73855261ef74](../history/records/src_frontend_components_output_layers_Overlay.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-workaround-b5317912fb4983b7](../history/records/src_frontend_components_output_layers_Overlays.svelte-1.md): // prevent spamming overlays as they get stuck due to Svelte bug.
- [guess] [D-hotspot-2b887fe783da1533](../history/records/src_frontend_components_output_effects_Effect.svelte-1.md): Module hotspot: src/frontend/components/output/effects/Effect.svelte.
- [guess] [D-hotspot-b8bfe90047044417](../history/records/src_frontend_components_output_effects_EffectOutput.svelte-1.md): Module hotspot: src/frontend/components/output/effects/EffectOutput.svelte.
- [guess] [D-hotspot-e432b4d64482f644](../history/records/src_frontend_components_output_effects_effectItems.ts-1.md): Module hotspot: src/frontend/components/output/effects/effectItems.ts.
- [guess] [D-hotspot-6a6d1ae35d346cb9](../history/records/src_frontend_components_output_effects_effectRenderer.ts-1.md): Module hotspot: src/frontend/components/output/effects/effectRenderer.ts.

[code] All 23 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-003](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
