# click/src_server_remote_components_pages_ScriptureContentTablet.svelte (1)

## click — event-f8f2344e44858cf77b

[code] [src/server/remote/components/pages/ScriptureContentTablet.svelte:635](../../../../../src/server/remote/components/pages/ScriptureContentTablet.svelte#L635); () => { activeBook = i activeChapter = 0 activeVerse = 0 }. resolved-within-bound.

Conditions: src/server/remote/components/pages/ScriptureContentTablet.svelte:622 books?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d1d30547e9c967cc79

[code] [src/server/remote/components/pages/ScriptureContentTablet.svelte:662](../../../../../src/server/remote/components/pages/ScriptureContentTablet.svelte#L662); () => { activeChapter = i activeVerse = 0 }. resolved-within-bound.

Conditions: src/server/remote/components/pages/ScriptureContentTablet.svelte:652 chapters?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4c6718027b143969e3

[code] [src/server/remote/components/pages/ScriptureContentTablet.svelte:700](../../../../../src/server/remote/components/pages/ScriptureContentTablet.svelte#L700); (event) => onVerseRowClick(verseNumber, event). partial.

Conditions: src/server/remote/components/pages/ScriptureContentTablet.svelte:677 verses?.length.

Calls: src/server/remote/components/pages/ScriptureContentTablet.svelte:314 onVerseRowClick (depth 1); src/server/remote/components/pages/ScriptureContentTablet.svelte:340 handleVerseClick (depth 2); src/server/remote/components/pages/ScriptureContentTablet.svelte:310 makeVerseRef (depth 3); src/server/remote/components/pages/ScriptureContentTablet.svelte:349 <callback> (depth 3); src/server/remote/components/pages/ScriptureContentTablet.svelte:350 <callback> (depth 4); src/server/remote/components/pages/ScriptureContentTablet.svelte:352 <callback> (depth 4); src/server/remote/components/pages/ScriptureContentTablet.svelte:297 playScripture (depth 3); src/server/remote/util/socket.ts:42 send (depth 4).

Effects: src/server/remote/components/pages/ScriptureContentTablet.svelte:349 store-write src/server/remote/util/stores.ts#selectedVerses ; src/server/remote/components/pages/ScriptureContentTablet.svelte:307 ipc send("API:start_scripture", { id, reference: '${bookNumber}.${chapterNumber}.${vNum}' }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ae3ba8fa0e9ac7b006

[code] [src/server/remote/components/pages/ScriptureContentTablet.svelte:705](../../../../../src/server/remote/components/pages/ScriptureContentTablet.svelte#L705); () => handleVerseClick(verseNumber). resolved-within-bound.

Conditions: src/server/remote/components/pages/ScriptureContentTablet.svelte:677 verses?.length; src/server/remote/components/pages/ScriptureContentTablet.svelte:704 checkMode.

Calls: src/server/remote/components/pages/ScriptureContentTablet.svelte:340 handleVerseClick (depth 1); src/server/remote/components/pages/ScriptureContentTablet.svelte:310 makeVerseRef (depth 2); src/server/remote/components/pages/ScriptureContentTablet.svelte:349 <callback> (depth 2); src/server/remote/components/pages/ScriptureContentTablet.svelte:350 <callback> (depth 3); src/server/remote/components/pages/ScriptureContentTablet.svelte:352 <callback> (depth 3); src/server/remote/components/pages/ScriptureContentTablet.svelte:297 playScripture (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/pages/ScriptureContentTablet.svelte:349 store-write src/server/remote/util/stores.ts#selectedVerses ; src/server/remote/components/pages/ScriptureContentTablet.svelte:307 ipc send("API:start_scripture", { id, reference: '${bookNumber}.${chapterNumber}.${vNum}' }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
