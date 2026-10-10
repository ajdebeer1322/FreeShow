# keyboard/src_server_remote_components_pages_Scripture.svelte (1)

## dynamic — event-04c716e615461508e9

[code] [src/server/remote/components/pages/Scripture.svelte:876](../../../../../src/server/remote/components/pages/Scripture.svelte#L876); (e) => (e.key === "Enter" ? playSearchVerse(result.reference) : null). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:874 searchResults.length > 0.

Calls: src/server/remote/components/pages/Scripture.svelte:700 playSearchVerse (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/components/pages/Scripture.svelte:731 <callback> (depth 2); src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 3); src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 3).

Effects: src/server/remote/components/pages/Scripture.svelte:718 store-write src/server/remote/util/stores.ts#scriptureSearchResults ; src/server/remote/components/pages/Scripture.svelte:728 ipc send("API:start_scripture", { id: $collectionId \|\| $openedScripture, reference: ref }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-6ce41d380eb5f81f6c

[code] [src/server/remote/components/pages/Scripture.svelte:925](../../../../../src/server/remote/components/pages/Scripture.svelte#L925); (e) => (e.key === "Enter" ? playSearchVerse(result.reference) : null). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:920 tablet; src/server/remote/components/pages/Scripture.svelte:921 searchValue.trim() && searchResults.length > 0.

Calls: src/server/remote/components/pages/Scripture.svelte:700 playSearchVerse (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/components/pages/Scripture.svelte:731 <callback> (depth 2); src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 3); src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 3).

Effects: src/server/remote/components/pages/Scripture.svelte:718 store-write src/server/remote/util/stores.ts#scriptureSearchResults ; src/server/remote/components/pages/Scripture.svelte:728 ipc send("API:start_scripture", { id: $collectionId \|\| $openedScripture, reference: ref }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
