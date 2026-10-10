# Capture: NDI, OMT, Blackmagic, WebRTC and RTMP

## Purpose

[code] Capture output frames, regulate throughput and route them to native or network senders. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/output/helpers/OutputLifecycle.ts](../generated/files/src_electron_output_helpers_OutputLifecycle.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/capture/helpers/CaptureLifecycle.ts](../generated/files/src_electron_capture_helpers_CaptureLifecycle.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/ndi/NdiSender.ts](../generated/files/src_electron_ndi_NdiSender.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/capture/helpers/CaptureTransmitter.ts](../generated/files/src_electron_capture_helpers_CaptureTransmitter.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/streaming/RtmpStreamer.ts](../generated/files/src_electron_streaming_RtmpStreamer.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Output creation schedules capture start 1,200 ms later and checks that the output still exists. ([src/electron/output/helpers/OutputLifecycle.ts:121](../../../src/electron/output/helpers/OutputLifecycle.ts#L121))
2. [code] Capture lifecycle validates window/toggles, starts transmission and chooses paint-driven OSR or a capture loop. ([src/electron/capture/helpers/CaptureLifecycle.ts:28](../../../src/electron/capture/helpers/CaptureLifecycle.ts#L28))
3. [code] Idle content reduces capture to 3 fps after 2,000 ms; this is separate from requested sender frame rate. ([src/electron/capture/helpers/CaptureLifecycle.ts:23](../../../src/electron/capture/helpers/CaptureLifecycle.ts#L23))
4. [code] NDI sending uses a worker proxy so native encoding/dispatch do not run directly in the main helper. ([src/electron/ndi/NdiSender.ts:34](../../../src/electron/ndi/NdiSender.ts#L34))
5. [code] The transmitter coordinates per-channel frame delivery and receiver capacity. ([src/electron/capture/helpers/CaptureTransmitter.ts:21](../../../src/electron/capture/helpers/CaptureTransmitter.ts#L21))
6. [code] RTMP has its own streaming/reconnection lifecycle and FFmpeg integration. ([src/electron/streaming/RtmpStreamer.ts:104](../../../src/electron/streaming/RtmpStreamer.ts#L104))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 48 files, 0 referenced stores, 31 concrete message keys, 69 timing entries. [Complete dependency index](capture.dependencies.json) includes conditional and test paths. Runtime use can be narrower.



[code] Message families: [BLACKMAGIC](../generated/channels/BLACKMAGIC.md), [MAIN](../generated/channels/MAIN.md), [NDI](../generated/channels/NDI.md), [OMT](../generated/channels/OMT.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Retain per-output loop tokens so a stopped/restarted capture cannot leave two active loops. ([src/electron/capture/helpers/CaptureLifecycle.ts:25](../../../src/electron/capture/helpers/CaptureLifecycle.ts#L25))
- [code] Preserve buffer offsets/lengths and transferable ownership when sending frames to workers. ([src/electron/ndi/NdiSender.ts:111](../../../src/electron/ndi/NdiSender.ts#L111))
- [code] Respect device backpressure instead of queuing unbounded capture frames. ([src/electron/capture/helpers/CaptureLifecycle.ts:82](../../../src/electron/capture/helpers/CaptureLifecycle.ts#L82))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/electron/output/helpers/OutputAlwaysOnTop.ts:24](../../../src/electron/output/helpers/OutputAlwaysOnTop.ts#L24): // which avoids the bug where setVisibleOnAllWorkspaces hides the app's Dock icon.
- [code] [src/electron/output/ppt/presentation.ts:183](../../../src/electron/output/ppt/presentation.ts#L183): // WIP black screen not working

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-2e38a23fc7573d7b](../history/records/src_electron_blackmagic_BlackmagicSender.ts-1.md): wait: 2000 (2000 ms).
- [code] [D-timer-1f5d74ec1269c927](../history/records/src_electron_blackmagic_BlackmagicSender.ts-1.md): setTimeout: 10000 (10000 ms).
- [code] [D-timer-1bbbbca048a4ae02](../history/records/src_electron_blackmagic_BlackmagicSender.ts-1.md): setTimeout: 0 (0 ms).
- [code] [D-timer-f2460ea3235644f8](../history/records/src_electron_blackmagic_bmdTalk.ts-1.md): wait: 100 (100 ms).
- [code] [D-timer-fb6abda19b31cf90](../history/records/src_electron_output_helpers_OutputBounds.ts-1.md): setTimeout: 80 (80 ms).
- [code] [D-timer-03148b700a74112a](../history/records/src_electron_streaming_RtmpStreamer.integration.test.ts-1.md): setTimeout: 600 (600 ms).

[code] All 112 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
