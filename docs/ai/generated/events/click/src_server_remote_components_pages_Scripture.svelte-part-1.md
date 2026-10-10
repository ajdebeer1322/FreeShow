# click/src_server_remote_components_pages_Scripture.svelte (1)

## click — event-177edf13f309679eb1

[code] [src/server/remote/components/pages/Scripture.svelte:857](../../../../../src/server/remote/components/pages/Scripture.svelte#L857); () => closeSearch(). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet.

Calls: src/server/remote/components/pages/Scripture.svelte:217 closeSearch (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/pages/Scripture.svelte:224 store-write src/server/remote/util/stores.ts#scriptureSearchResults ; src/server/remote/components/pages/Scripture.svelte:228 ipc send("GET_SCRIPTURE", { id: $openedScripture }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c26e2ab96de8802697

[code] [src/server/remote/components/pages/Scripture.svelte:876](../../../../../src/server/remote/components/pages/Scripture.svelte#L876); () => playSearchVerse(result.reference). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:874 searchResults.length > 0.

Calls: src/server/remote/components/pages/Scripture.svelte:700 playSearchVerse (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/components/pages/Scripture.svelte:731 <callback> (depth 2); src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 3); src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 3).

Effects: src/server/remote/components/pages/Scripture.svelte:718 store-write src/server/remote/util/stores.ts#scriptureSearchResults ; src/server/remote/components/pages/Scripture.svelte:728 ipc send("API:start_scripture", { id: $collectionId \|\| $openedScripture, reference: ref }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3ab8fe4bf25c982a97

[code] [src/server/remote/components/pages/Scripture.svelte:896](../../../../../src/server/remote/components/pages/Scripture.svelte#L896); () => (depth ? scriptureContentRef?.goBack?.() : openScripture("")). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:894 !tablet.

Calls: src/server/remote/components/pages/Scripture.svelte:123 openScripture (depth 1).

Effects: src/server/remote/components/pages/Scripture.svelte:126 store-write src/server/remote/util/stores.ts#openedScripture ; src/server/remote/components/pages/Scripture.svelte:127 store-write src/server/remote/util/stores.ts#collectionId ; src/server/remote/components/pages/Scripture.svelte:134 store-write src/server/remote/util/stores.ts#selectedTranslationIndex .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cbf374ea6e98fa6567

[code] [src/server/remote/components/pages/Scripture.svelte:912](../../../../../src/server/remote/components/pages/Scripture.svelte#L912); openSearchPanel. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:894 !tablet.

Calls: src/server/remote/components/pages/Scripture.svelte:212 openSearchPanel (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-369f4527650509f76f

[code] [src/server/remote/components/pages/Scripture.svelte:925](../../../../../src/server/remote/components/pages/Scripture.svelte#L925); () => playSearchVerse(result.reference). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:920 tablet; src/server/remote/components/pages/Scripture.svelte:921 searchValue.trim() && searchResults.length > 0.

Calls: src/server/remote/components/pages/Scripture.svelte:700 playSearchVerse (depth 1); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/components/pages/Scripture.svelte:731 <callback> (depth 2); src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 3); src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 3).

Effects: src/server/remote/components/pages/Scripture.svelte:718 store-write src/server/remote/util/stores.ts#scriptureSearchResults ; src/server/remote/components/pages/Scripture.svelte:728 ipc send("API:start_scripture", { id: $collectionId \|\| $openedScripture, reference: ref }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b2f4e86188e6664749

[code] [src/server/remote/components/pages/Scripture.svelte:949](../../../../../src/server/remote/components/pages/Scripture.svelte#L949); previous. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet.

Calls: src/server/remote/components/pages/Scripture.svelte:202 previous (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Scripture.svelte:203 ipc send("API:scripture_previous") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
