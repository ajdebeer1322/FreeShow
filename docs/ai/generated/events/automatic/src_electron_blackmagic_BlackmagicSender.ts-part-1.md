# automatic/src_electron_blackmagic_BlackmagicSender.ts (1)

## setInterval — event-d92845e15fac3ab440

[code] [src/electron/blackmagic/BlackmagicSender.ts:98](../../../../../src/electron/blackmagic/BlackmagicSender.ts#L98); () => { this.performGlobalCleanup() }. resolved-within-bound.

Conditions: src/electron/blackmagic/BlackmagicSender.ts:97 !this.globalCleanupTimer.

Calls: src/electron/blackmagic/BlackmagicSender.ts:98 <callback> (depth 0); src/electron/blackmagic/BlackmagicSender.ts:340 performGlobalCleanup (depth 1); src/electron/blackmagic/BlackmagicSender.ts:345 cleanupSilentAudioBuffers (depth 2); src/electron/blackmagic/BlackmagicSender.ts:348 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-81c3eaf79838b97fc9

[code] [src/electron/blackmagic/BlackmagicSender.ts:187](../../../../../src/electron/blackmagic/BlackmagicSender.ts#L187); () => { reject(new Error("Playback initialization timed out after 10 seconds")) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/electron/blackmagic/BlackmagicSender.ts:187 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9722ac0c50c64ba7ce

[code] [src/electron/blackmagic/BlackmagicSender.ts:606](../../../../../src/electron/blackmagic/BlackmagicSender.ts#L606); () => { try { // Skip empty frames if (!videoFrame \|\| videoFrame.length === 0) { return } // Check buffer status let bufferedFrames = 0 try { bufferedFrames = data.playback.buffere. partial.

Conditions: src/electron/blackmagic/BlackmagicSender.ts:609 !videoFrame \|\| videoFrame.length === 0; src/electron/blackmagic/BlackmagicSender.ts:620 bufferedFrames > maxBuffer; src/electron/blackmagic/BlackmagicSender.ts:633 preConverted; src/electron/blackmagic/BlackmagicSender.ts:635 videoFrame.length !== data.expectedVideoFrameSize; src/electron/blackmagic/BlackmagicSender.ts:636 now - (data.lastVideoSizeWarningTime \|\| 0) > 5000; src/electron/blackmagic/BlackmagicSender.ts:649 videoFrame.length !== expectedBytesForDeclaredSize; src/electron/blackmagic/BlackmagicSender.ts:654 videoFrame.length > maxAllowedInputBytes \|\| actualHeight <= 0 \|\| !Number.isFinite(actualHeight); src/electron/blackmagic/BlackmagicSender.ts:655 now - (data.lastVideoSizeWarningTime \|\| 0) > 5000; src/electron/blackmagic/BlackmagicSender.ts:664 now - (data.lastVideoSizeWarningTime \|\| 0) > 10000; src/electron/blackmagic/BlackmagicSender.ts:679 message.includes("allocation failed") \|\| message.includes("out of memory"); src/electron/blackmagic/BlackmagicSender.ts:691 convertedFrame.length !== data.expectedVideoFrameSize && now - (data.lastVideoSizeWarningTime \|\| 0) > 5000; src/electron/blackmagic/BlackmagicSender.ts:705 audioData.length !== expectedAudioSize && now - (data.lastAudioSizeWarningTime \|\| 0) > 5000; src/electron/blackmagic/BlackmagicSender.ts:743 !data.isStarted && bufferedFrames >= Math.min(2, data.targetBufferSize); src/electron/blackmagic/BlackmagicSender.ts:749 err instanceof Error && err.message !== "Already started".

Calls: src/electron/blackmagic/BlackmagicSender.ts:606 <callback> (depth 0); src/electron/blackmagic/BlackmagicSender.ts:482 getReusableConversionBuffer (depth 1); src/electron/blackmagic/BlackmagicSender.ts:493 <callback> (depth 2); src/electron/blackmagic/BlackmagicSender.ts:969 convertVideoFrameFormat (depth 1); src/electron/blackmagic/ImageBufferConverter.ts:593 BGRAtoRGBLE (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:15 getOutputBuffer (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:638 ARGBtoRGBLE (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:455 BGRAtoRGBXLE (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:412 to10BitFullRange (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:473 ARGBtoRGBXLE (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:491 BGRAtoRGBX (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:417 BGRAtoRGB (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:497 ARGBtoRGBX (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:437 ARGBtoRGB (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:417 BGRAtoRGB (depth 2); src/electron/blackmagic/ImageBufferConverter.ts:437 ARGBtoRGB (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 50; depth cutoffs: 6. Full edges/effects/conditions in JSON.

## setTimeout — event-7c017049d2d3561081

[code] [src/electron/blackmagic/BlackmagicSender.ts:779](../../../../../src/electron/blackmagic/BlackmagicSender.ts#L779); () => { this.reinitializePlayback(outputId, data.deviceIndex, data.displayMode, data.pixelFormat, data.enableKeying \|\| false, data.audioChannels \|\| 2) }. partial.

Conditions: src/electron/blackmagic/BlackmagicSender.ts:773 err instanceof Error && (err.message.includes("Already stopped") \|\| err.message.includes("Failed") \|\| err.message.includes("Error")).

Calls: src/electron/blackmagic/BlackmagicSender.ts:779 <callback> (depth 0); src/electron/blackmagic/BlackmagicSender.ts:792 reinitializePlayback (depth 1); src/electron/utils/helpers.ts:30 wait (depth 2); src/electron/utils/helpers.ts:31 <callback> (depth 3); src/electron/utils/helpers.ts:32 <callback> (depth 4); src/electron/blackmagic/BlackmagicSender.ts:112 initializeDevice (depth 2); src/electron/blackmagic/BlackmagicSender.ts:144 _performInitializeDevice (depth 3); src/electron/blackmagic/macadamLoader.ts:7 getMacadam (depth 4); src/electron/blackmagic/BlackmagicSender.ts:1057 stop (depth 4); src/electron/blackmagic/BlackmagicSender.ts:185 <callback> (depth 4); src/electron/blackmagic/BlackmagicSender.ts:187 <callback> (depth 5); src/electron/blackmagic/BlackmagicManager.ts:62 getDisplayMode (depth 5); src/electron/blackmagic/bmdFormats.ts:13 getBmdDisplayModes (depth 6); src/electron/blackmagic/BlackmagicManager.ts:89 getPixelFormat (depth 5); src/electron/blackmagic/bmdFormats.ts:111 getBmdPixelFormats (depth 6); src/electron/blackmagic/BlackmagicSender.ts:211 <callback> (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 15; depth cutoffs: 3. Full edges/effects/conditions in JSON.

## setTimeout — event-1b3f88f5a32977cf61

[code] [src/electron/blackmagic/BlackmagicSender.ts:839](../../../../../src/electron/blackmagic/BlackmagicSender.ts#L839); () => { this.initializeDevice(outputId, deviceIndex, displayMode, pixelFormat, enableKeying, audioChannels).then((success) => { if (success) { this.isPaused&#91;outputId&#93; = false } }). partial.

Conditions: src/electron/blackmagic/BlackmagicSender.ts:841 success.

Calls: src/electron/blackmagic/BlackmagicSender.ts:839 <callback> (depth 0); src/electron/blackmagic/BlackmagicSender.ts:112 initializeDevice (depth 1); src/electron/blackmagic/BlackmagicSender.ts:144 _performInitializeDevice (depth 2); src/electron/blackmagic/macadamLoader.ts:7 getMacadam (depth 3); src/electron/blackmagic/BlackmagicSender.ts:1057 stop (depth 3); src/electron/utils/helpers.ts:30 wait (depth 3); src/electron/utils/helpers.ts:31 <callback> (depth 4); src/electron/utils/helpers.ts:32 <callback> (depth 5); src/electron/blackmagic/BlackmagicSender.ts:185 <callback> (depth 3); src/electron/blackmagic/BlackmagicSender.ts:187 <callback> (depth 4); src/electron/blackmagic/BlackmagicManager.ts:62 getDisplayMode (depth 4); src/electron/blackmagic/bmdFormats.ts:13 getBmdDisplayModes (depth 5); src/electron/blackmagic/BlackmagicManager.ts:89 getPixelFormat (depth 4); src/electron/blackmagic/bmdFormats.ts:111 getBmdPixelFormats (depth 5); src/electron/blackmagic/BlackmagicSender.ts:211 <callback> (depth 4); src/electron/blackmagic/BlackmagicSender.ts:216 <callback> (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 16; depth cutoffs: 1. Full edges/effects/conditions in JSON.
