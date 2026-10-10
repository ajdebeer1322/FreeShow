# Clearing all

## Observed result

[verified] Real keyboard Escape through clearAll. Evidence: [observation data](observations.json), action ID `clearing-all`, recorded 2026-10-10T17:27:25.437Z.

[code] Verification scope: Escape cleared the live slide and background; old lyric text disappeared. Locked overlays, active microphones, restores and focus-mode cache semantics were not exercised.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] Escape schedules clearAll through preview shortcut routing. ([src/frontend/utils/shortcuts.ts:355](../../../src/frontend/utils/shortcuts.ts#L355))

2. [code] clearAll checks output locks and interaction state, resets slide position cache and detects an already-cleared presentation. ([src/frontend/components/output/clear.ts:14](../../../src/frontend/components/output/clear.ts#L14))

3. [code] Before clearing it retains active output/audio content for restore, then stops the active timeline. ([src/frontend/components/output/clear.ts:25](../../../src/frontend/components/output/clear.ts#L25))

4. [code] The clear sequence removes background/slide/messages, clears audio/timers and clears overlays except those retained by the locked-overlay rule. ([src/frontend/components/output/clear.ts:33](../../../src/frontend/components/output/clear.ts#L33))

5. [code] Each visual clear passes through common output routing rather than removing output windows. ([src/frontend/components/helpers/output.ts:158](../../../src/frontend/components/helpers/output.ts#L158))

6. [code] The outputs subscription coalesces updates over a 1 ms debounce, then sends OUTPUT/OUTPUTS and related views. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))

7. [code] Electron forwards state to each real output renderer, narrowing OUTPUTS to its matching output ID; shared-render followers are skipped. ([src/electron/output/helpers/OutputSend.ts:19](../../../src/electron/output/helpers/OutputSend.ts#L19))

8. [code] The output receiver deduplicates the content signature before writing its local outputs store; active is excluded from that signature. ([src/frontend/utils/receivers.ts:204](../../../src/frontend/utils/receivers.ts#L204))

9. [code] Output marks the clearing state before committing null so transition conditions can avoid redisplaying old content. ([src/frontend/components/output/Output.svelte:350](../../../src/frontend/components/output/Output.svelte#L350))

## State, messages and history

[code] Read [overlays-effects-messages](../subsystems/overlays-effects-messages.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/utils/shortcuts.ts](../generated/files/src_frontend_utils_shortcuts.ts.md)
- [src/frontend/components/output/clear.ts](../generated/files/src_frontend_components_output_clear.ts.md)
- [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md)
- [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md)
- [src/electron/output/helpers/OutputSend.ts](../generated/files/src_electron_output_helpers_OutputSend.ts.md)
- [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md)
- [src/frontend/components/output/Output.svelte](../generated/files/src_frontend_components_output_Output.svelte.md)

[code] 64 related decision records: [full IDs and locations](clearing-all.dependencies.json); representative records:

- [code] [D-timer-4094713e914b0c42](../history/records/src_frontend_utils_listeners.ts-1.md).
- [guess] [D-hotspot-94b53592b6d592e8](../history/records/src_electron_output_helpers_OutputSend.ts-1.md).
- [guess] [D-hotspot-7af11be48814e880](../history/records/src_frontend_components_helpers_output.ts-1.md).
- [guess] [D-hotspot-972464c413969487](../history/records/src_frontend_components_output_Output.svelte-1.md).
- [guess] [D-hotspot-2ac59dd4ca721755](../history/records/src_frontend_components_output_clear.ts-1.md).

[code] Companion findings [F-016](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
