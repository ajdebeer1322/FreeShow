# Suspected bugs and investigation targets

No product fixes were made. The HOW_IT_WORKS findings were checked first; known auto-size cache/geometry and transition timing findings are referenced by ID in the subsystem guides rather than re-reported.

## S-001: Explicit project occurrence may be overwritten during activation

[code] The click path explicitly sends the clicked projectIndex. ([src/frontend/components/show/Slides.svelte:159](../../src/frontend/components/show/Slides.svelte#L159))

[code] setOutput assigns active selection's index when the show IDs match, without first preserving a supplied projectIndex. ([src/frontend/components/helpers/output.ts:217](../../src/frontend/components/helpers/output.ts#L217))

[guess] With the same show repeated in a project, a clicked occurrence differing from active selection could acquire the wrong project context for dynamic values. Reproduce with two occurrences/layouts and log click data versus stored out.slide.projectIndex. It may be masked when selection updates before activation.

[code] Companion overlap check: No matching F-001–F-019 finding; separate from known auto-size/transition issues.

## S-002: Active-only output payload updates are suppressed

[code] The receiver excludes active from its JSON equality signature. ([src/frontend/utils/receivers.ts:200](../../src/frontend/utils/receivers.ts#L200))

[code] An equal content signature returns before restoring/storing the new active value. ([src/frontend/utils/receivers.ts:204](../../src/frontend/utils/receivers.ts#L204))

[guess] Active-only updates leave the renderer store's active field unchanged. This may be intentional because visibility is controlled elsewhere. Test whether any output-renderer consumers rely on active; do not change the guard without tracing window state.

[code] Companion overlap check: No matching F-001–F-019 finding.

## S-003: Stage buffer destination filter remains disabled

[code] The comment records that stage-output capture filtering is unfinished. ([src/frontend/utils/receivers.ts:220](../../src/frontend/utils/receivers.ts#L220))

[code] Fresh frames are cached by received ID without checking the selected stage source in this handler. ([src/frontend/utils/receivers.ts:113](../../src/frontend/utils/receivers.ts#L113))

[guess] Multiple stage output sources may consume memory/bandwidth for frames a window never renders. The eventual renderer might filter correctly. Measure incoming IDs, cache growth and actual source selection before judging this a rendering bug.

[code] Companion overlap check: No matching F-001–F-019 finding; already recorded as a source WIP, not a new proven defect.

## S-004: Some function-key clears can reach output while a popup is open

[code] Preview excludes the assign_shortcut popup, while other popups are not excluded by this early guard. ([src/frontend/components/output/preview/Preview.svelte:43](../../src/frontend/components/output/preview/Preview.svelte#L43))

[code] Input/.edit targets pass function keys through Preview, and F1/F3 clear background or overlay/effect state after only their lock checks. ([src/frontend/components/output/preview/Preview.svelte:51](../../src/frontend/components/output/preview/Preview.svelte#L51); [src/frontend/utils/shortcuts.ts:360](../../src/frontend/utils/shortcuts.ts#L360); [src/frontend/utils/shortcuts.ts:374](../../src/frontend/utils/shortcuts.ts#L374))

[guess] A user operating an ordinary popup may unintentionally clear audience media/overlays if no mounted modal handler stops propagation. This could be an intentional presentation-controller feature. The current traces verify the ordinary clear paths and Escape popup precedence, not every F-key/popup combination. Reproduce with popup, input and output-lock variants before changing guards.

[code] Companion overlap check: no matching F-001–F-019 finding. See [key conditions](events/keys/clear.md).

## S-005: Svelte derived_inert warnings during remote-driven presentation

[verified] The successful [remote next-slide recording](traces/remote-action-next.json) retains derived_inert warnings in console output while both outputs advance. No page exception was recorded for that fixture.

[guess] The warning may indicate reactive ownership/subscription behavior that warrants review; its source and impact are not localized by this recorder. Capture a source stack before attributing it to a specific module or treating it as a rendering failure. Existing F-017 tests ruled out other transition suspects; they do not establish the cause of this warning.
