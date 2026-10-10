# click/src_frontend_components_show_pdf_PdfPreview.svelte (1)

## click — event-45ec9e004538551495

[code] [src/frontend/components/show/pdf/PdfPreview.svelte:200](../../../../../src/frontend/components/show/pdf/PdfPreview.svelte#L200); (e) => outputPdf(e, i). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/pdf/PdfPreview.svelte:43 outputPdf (depth 1); src/frontend/components/helpers/media.ts:26 removeExtension (depth 2); src/frontend/components/helpers/media.ts:46 getFileName (depth 2); src/frontend/components/helpers/output.ts:158 setOutput (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5).

Effects: src/frontend/components/show/pdf/PdfPreview.svelte:47 presentation setOutput ; src/frontend/components/show/pdf/PdfPreview.svelte:49 presentation clearBackground ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 128. Full edges/effects/conditions in JSON.

## click — event-cadb389b88f353b838

[code] [src/frontend/components/show/pdf/PdfPreview.svelte:219](../../../../../src/frontend/components/show/pdf/PdfPreview.svelte#L219); convertToImages. resolved-within-bound.

Conditions: src/frontend/components/show/pdf/PdfPreview.svelte:213 !$focusMode.

Calls: src/frontend/components/show/pdf/PdfPreview.svelte:174 convertToImages (depth 0); src/frontend/utils/common.ts:26 newToast (depth 1); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/show/pdf/PdfPreview.svelte:176 ipc sendMain(Main.PDF_TO_IMAGE, { filePath: show.id }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f5a5b4e6af8037632f

[code] [src/frontend/components/show/pdf/PdfPreview.svelte:227](../../../../../src/frontend/components/show/pdf/PdfPreview.svelte#L227); () => { popupData.set({ type: "pdf", value: timer, totalTime, count: pageCount }) activePopup.set("next_timer") }. resolved-within-bound.

Conditions: src/frontend/components/show/pdf/PdfPreview.svelte:213 !$focusMode.

Calls: no function target resolved.

Effects: src/frontend/components/show/pdf/PdfPreview.svelte:228 store-write src/frontend/stores.ts#popupData ; src/frontend/components/show/pdf/PdfPreview.svelte:229 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
