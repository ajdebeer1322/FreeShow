# keyboard/src_server_remote_components_pages_ScriptureContent.svelte (1)

## dynamic — event-1daacfd88e501e6c99

[code] [src/server/remote/components/pages/ScriptureContent.svelte:592](../../../../../src/server/remote/components/pages/ScriptureContent.svelte#L592); (e) => e.key === "Enter" && (() => { activeBook = i activeChapter = -1 activeVerse = 0 depth++ })(). partial.

Conditions: src/server/remote/components/pages/ScriptureContent.svelte:572 depth === 0; src/server/remote/components/pages/ScriptureContent.svelte:574 books?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-585229e1e4d66667dd

[code] [src/server/remote/components/pages/ScriptureContent.svelte:636](../../../../../src/server/remote/components/pages/ScriptureContent.svelte#L636); (e) => e.key === "Enter" && (() => { const previousChapter = activeChapter activeChapter = i activeBook = i >= 0 ? activeBook : -1 if (i === displayedChapterIndex && activeBook ===. partial.

Conditions: src/server/remote/components/pages/ScriptureContent.svelte:616 depth === 1; src/server/remote/components/pages/ScriptureContent.svelte:618 chapters?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-4653258858d847791a

[code] [src/server/remote/components/pages/ScriptureContent.svelte:686](../../../../../src/server/remote/components/pages/ScriptureContent.svelte#L686); (e) => e.key === "Enter" && onVerseClick(verseNumber). partial.

Conditions: src/server/remote/components/pages/ScriptureContent.svelte:662 depth === 2 \|\| tablet \|\| $scriptureViewList; src/server/remote/components/pages/ScriptureContent.svelte:664 verses.length.

Calls: src/server/remote/components/pages/ScriptureContent.svelte:235 onVerseClick (depth 1); src/server/remote/components/pages/ScriptureContent.svelte:212 handleVerseClick (depth 2); src/server/remote/components/pages/ScriptureContent.svelte:174 makeVerseRef (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:221 <callback> (depth 3); src/server/remote/components/pages/ScriptureContent.svelte:222 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:224 <callback> (depth 4); src/server/remote/components/pages/ScriptureContent.svelte:162 playScripture (depth 3); src/server/remote/util/socket.ts:42 send (depth 4).

Effects: src/server/remote/components/pages/ScriptureContent.svelte:221 store-write src/server/remote/util/stores.ts#selectedVerses ; src/server/remote/components/pages/ScriptureContent.svelte:171 ipc send("API:start_scripture", { id, reference: '${bookNumber}.${chapterNumber}.${verseNumber}' }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
