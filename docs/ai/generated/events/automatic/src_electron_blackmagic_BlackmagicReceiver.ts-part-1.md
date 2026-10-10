# automatic/src_electron_blackmagic_BlackmagicReceiver.ts (1)

## setInterval — event-1184f9f79240f83b28

[code] [src/electron/blackmagic/BlackmagicReceiver.ts:81](../../../../../src/electron/blackmagic/BlackmagicReceiver.ts#L81); async () => { if (gettingFrame) return gettingFrame = true try { if (!receiver) return this.stopReceiver({ id: source.id, outputId }) const frame = await receiver.frame() this.send. partial.

Conditions: src/electron/blackmagic/BlackmagicReceiver.ts:83 gettingFrame; src/electron/blackmagic/BlackmagicReceiver.ts:87 !receiver.

Calls: src/electron/blackmagic/BlackmagicReceiver.ts:82 <callback> (depth 0); src/electron/blackmagic/BlackmagicReceiver.ts:176 stopReceiver (depth 1); src/electron/blackmagic/BlackmagicReceiver.ts:195 <callback> (depth 2); src/electron/blackmagic/BlackmagicReceiver.ts:122 sendFrame (depth 1); src/electron/blackmagic/BlackmagicReceiver.ts:153 convertVideoFrameFormat (depth 2); src/electron/ndi/vingester-util.ts:23 ARGBtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:848 YUVtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:15 getOutputBuffer (depth 4); src/electron/ndi/vingester-util.ts:34 BGRAtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:885 RGBXLEtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:890 RGBLEtoRGBA (depth 4); src/electron/blackmagic/ImageBufferConverter.ts:890 RGBLEtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:904 RGBXtoRGBA (depth 3); src/electron/blackmagic/ImageBufferConverter.ts:916 RGBtoRGBA (depth 3); src/electron/index.ts:422 toApp (depth 2); src/electron/blackmagic/BlackmagicReceiver.ts:143 <callback> (depth 2).

Effects: src/electron/blackmagic/BlackmagicReceiver.ts:144 presentation OutputHelper.Send.sendToWindow ; src/electron/output/helpers/OutputSend.ts:36 presentation OutputHelper.getOutput ; src/electron/output/helpers/OutputSend.ts:39 ipc output.window.webContents.send(channel, msg) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 0. Full edges/effects/conditions in JSON.
