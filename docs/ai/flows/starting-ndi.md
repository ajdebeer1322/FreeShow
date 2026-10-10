# Starting NDI

## Observed result

[verified] Backend createSenderNDI and capture lifecycle; native sender status observed, external receiver/hardware not verified. Evidence: [observation data](observations.json), action ID `starting-ndi`, recorded 2026-10-10T17:27:25.437Z.

[code] Verification scope: The backend sender and capture toggle were started directly; worker status reported unconnected with zero connections. No external receiver, delivered frames, NDI UI toggle, GPU OSR, OMT or Blackmagic hardware was verified.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] Changing NDI/output capture properties follows the existing settings update/recreate path. ([src/frontend/components/settings/tabs/Outputs.svelte:77](../../../src/frontend/components/settings/tabs/Outputs.svelte#L77))

2. [code] Output creation initializes a named NDI sender and applies its configured sender data. ([src/electron/output/helpers/OutputLifecycle.ts:124](../../../src/electron/output/helpers/OutputLifecycle.ts#L124))

3. [code] The main-process proxy creates/reuses a worker, records provisional sender state and posts a create message. ([src/electron/ndi/NdiSender.ts:85](../../../src/electron/ndi/NdiSender.ts#L85))

4. [code] The NDI adapter loads the native library and creates the actual sender inside the shared worker engine. ([src/electron/ndi/ndiWorker.ts:107](../../../src/electron/ndi/ndiWorker.ts#L107))

5. [code] Worker polling reports actual connection state back to the proxy; create failure removes the provisional sender. ([src/electron/capture/senderWorker.ts:141](../../../src/electron/capture/senderWorker.ts#L141))

6. [code] Capture validates the window/toggles, starts transmitting and selects paint-driven OSR or the normal capture loop. ([src/electron/capture/helpers/CaptureLifecycle.ts:28](../../../src/electron/capture/helpers/CaptureLifecycle.ts#L28))

7. [code] Captured frames can be transferred with explicit buffer offsets/lengths to worker video delivery. ([src/electron/ndi/NdiSender.ts:104](../../../src/electron/ndi/NdiSender.ts#L104))

8. [code] NDI status propagates back to the operator renderer and can update capture frame rate. ([src/electron/ndi/NdiSender.ts:64](../../../src/electron/ndi/NdiSender.ts#L64))

## State, messages and history

[code] Read [capture](../subsystems/capture.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/components/settings/tabs/Outputs.svelte](../generated/files/src_frontend_components_settings_tabs_Outputs.svelte.md)
- [src/electron/output/helpers/OutputLifecycle.ts](../generated/files/src_electron_output_helpers_OutputLifecycle.ts.md)
- [src/electron/ndi/NdiSender.ts](../generated/files/src_electron_ndi_NdiSender.ts.md)
- [src/electron/ndi/ndiWorker.ts](../generated/files/src_electron_ndi_ndiWorker.ts.md)
- [src/electron/capture/senderWorker.ts](../generated/files/src_electron_capture_senderWorker.ts.md)
- [src/electron/capture/helpers/CaptureLifecycle.ts](../generated/files/src_electron_capture_helpers_CaptureLifecycle.ts.md)

[code] 30 related decision records: [full IDs and locations](starting-ndi.dependencies.json); representative records:

- [code] [D-timer-447c94fa7f1fb475](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md).
- [code] [D-timer-9ad0217da931d2a8](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md).
- [code] [D-workaround-ed0583a51419340e](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md).
- [guess] [D-hotspot-05827e5cde4b8d8f](../history/records/src_electron_capture_helpers_CaptureLifecycle.ts-1.md).
- [guess] [D-hotspot-41b7a5869060aa8d](../history/records/src_electron_capture_senderWorker.ts-1.md).

[code] No specific companion finding assigned. See the [evidence method](README.md) before reusing these observations.
