# click/src_server_remote_components_pages_PdfPreview.svelte (1)

## click — event-b1c29bb22238b539ac

[code] [src/server/remote/components/pages/PdfPreview.svelte:39](../../../../../src/server/remote/components/pages/PdfPreview.svelte#L39); () => outputPdf(i). resolved-within-bound.

Conditions: src/server/remote/components/pages/PdfPreview.svelte:32 loading; src/server/remote/components/pages/PdfPreview.svelte:36 pages.

Calls: src/server/remote/components/pages/PdfPreview.svelte:22 outputPdf (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/pages/PdfPreview.svelte:23 ipc send("API:play_media", { path, index: page, data: { pageCount: pages?.length } }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
