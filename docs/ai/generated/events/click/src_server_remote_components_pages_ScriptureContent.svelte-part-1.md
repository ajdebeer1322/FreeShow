# click/src_server_remote_components_pages_ScriptureContent.svelte (1)

## click — event-7fbb871064214de91d

[code] [src/server/remote/components/pages/ScriptureContent.svelte:685](../../../../../src/server/remote/components/pages/ScriptureContent.svelte#L685); () => onVerseClick(verseNumber). partial.

Conditions: src/server/remote/components/pages/ScriptureContent.svelte:662 depth === 2 \|\| tablet \|\| $scriptureViewList; src/server/remote/components/pages/ScriptureContent.svelte:664 verses.length.

Calls: src/server/remote/components/pages/ScriptureContent.svelte:235 onVerseClick (depth 1); src/server/remote/components/pages/ScriptureContent.svelte:212 handleVerseClick (depth 2); src/server/remote/components/pages/ScriptureContent.svelte:174 makeVerseRef (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:221 <callback> (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:222 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:224 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:162 playScripture (depth 3); src/server/remote/util/socket.ts:42 send (depth 4).

Effects: src/server/remote/components/pages/ScriptureContent.svelte:221 store-write src/server/remote/util/stores.ts#selectedVerses ; src/server/remote/components/pages/ScriptureContent.svelte:171 ipc send("API:start_scripture", { id, reference: '${bookNumber}.${chapterNumber}.${verseNumber}' }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-53a799206416e2b2df

[code] [src/server/remote/components/pages/ScriptureContent.svelte:695](../../../../../src/server/remote/components/pages/ScriptureContent.svelte#L695); () => onVerseClick(verseNumber). partial.

Conditions: src/server/remote/components/pages/ScriptureContent.svelte:662 depth === 2 \|\| tablet \|\| $scriptureViewList; src/server/remote/components/pages/ScriptureContent.svelte:664 verses.length; src/server/remote/components/pages/ScriptureContent.svelte:694 $scriptureMultiSelect && $scriptureViewList.

Calls: src/server/remote/components/pages/ScriptureContent.svelte:235 onVerseClick (depth 1); src/server/remote/components/pages/ScriptureContent.svelte:212 handleVerseClick (depth 2); src/server/remote/components/pages/ScriptureContent.svelte:174 makeVerseRef (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:221 <callback> (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:222 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:224 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:162 playScripture (depth 3); src/server/remote/util/socket.ts:42 send (depth 4).

Effects: src/server/remote/components/pages/ScriptureContent.svelte:221 store-write src/server/remote/util/stores.ts#selectedVerses ; src/server/remote/components/pages/ScriptureContent.svelte:171 ipc send("API:start_scripture", { id, reference: '${bookNumber}.${chapterNumber}.${verseNumber}' }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
