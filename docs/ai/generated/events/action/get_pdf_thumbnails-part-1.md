# action/get_pdf_thumbnails (1)

## get_pdf_thumbnails — event-ebb4fd04f2bcb1b03d

[code] [src/frontend/components/actions/api.ts:438](../../../../../src/frontend/components/actions/api.ts#L438); (data: API_media) => getPDFThumbnails(data). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:438 get_pdf_thumbnails (depth 0); src/frontend/components/actions/apiHelper.ts:1089 getPDFThumbnails (depth 1); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 2); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 3); src/frontend/components/helpers/media.ts:54 splitPath (depth 3); src/frontend/components/helpers/media.ts:87 <callback> (depth 3); src/frontend/components/helpers/media.ts:62 joinPath (depth 3); src/frontend/components/actions/apiHelper.ts:1104 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:1145 <callback> (depth 2); src/frontend/components/actions/apiHelper.ts:1154 <callback> (depth 2).

Effects: src/frontend/components/actions/apiHelper.ts:1104 store-write src/frontend/stores.ts#pdfImports ; src/frontend/components/actions/apiHelper.ts:1145 store-write src/frontend/stores.ts#pdfImports ; src/frontend/components/actions/apiHelper.ts:1154 store-write src/frontend/stores.ts#pdfImports .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.
