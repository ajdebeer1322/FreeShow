# click/src_server_remote_components_pages_Scripture.svelte (2)

## click — event-b91854d85f5022b288

[code] [src/server/remote/components/pages/Scripture.svelte:952](../../../../../src/server/remote/components/pages/Scripture.svelte#L952); next. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet.

Calls: src/server/remote/components/pages/Scripture.svelte:199 next (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Scripture.svelte:200 ipc send("API:scripture_next") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d79116462989ad918b

[code] [src/server/remote/components/pages/Scripture.svelte:956](../../../../../src/server/remote/components/pages/Scripture.svelte#L956); toggleTranslation. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet; src/server/remote/components/pages/Scripture.svelte:955 isCollection && collectionScripturesData.length > 1; src/server/remote/components/pages/Scripture.svelte:75 !isCollection \|\| collectionScripturesData.length <= 1; src/server/remote/components/pages/Scripture.svelte:78 currentIndex === null; src/server/remote/components/pages/Scripture.svelte:81 currentIndex >= collectionScripturesData.length - 1.

Calls: src/server/remote/components/pages/Scripture.svelte:74 toggleTranslation (depth 0).

Effects: src/server/remote/components/pages/Scripture.svelte:80 store-write src/server/remote/util/stores.ts#selectedTranslationIndex ; src/server/remote/components/pages/Scripture.svelte:83 store-write src/server/remote/util/stores.ts#selectedTranslationIndex ; src/server/remote/components/pages/Scripture.svelte:86 store-write src/server/remote/util/stores.ts#selectedTranslationIndex .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d82ea796665ea81302

[code] [src/server/remote/components/pages/Scripture.svelte:960](../../../../../src/server/remote/components/pages/Scripture.svelte#L960); () => scriptureViewList.set(!$scriptureViewList). resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:960 store-write src/server/remote/util/stores.ts#scriptureViewList .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d79dd86bf555250938

[code] [src/server/remote/components/pages/Scripture.svelte:964](../../../../../src/server/remote/components/pages/Scripture.svelte#L964); () => { scriptureMultiSelect.set(!$scriptureMultiSelect) if (!$scriptureMultiSelect) selectedVerses.set(&#91;&#93;) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:965 store-write src/server/remote/util/stores.ts#scriptureMultiSelect ; src/server/remote/components/pages/Scripture.svelte:966 store-write src/server/remote/util/stores.ts#selectedVerses .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bf8e3220ab92e16cf2

[code] [src/server/remote/components/pages/Scripture.svelte:976](../../../../../src/server/remote/components/pages/Scripture.svelte#L976); () => scriptureContentRef?.playSelectedVerses?.(). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:919 $scriptureCache&#91;$openedScripture&#93;; src/server/remote/components/pages/Scripture.svelte:947 tablet; src/server/remote/components/pages/Scripture.svelte:975 $scriptureMultiSelect && $selectedVerses.length > 0.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-28a90ac6bc2aec90e3

[code] [src/server/remote/components/pages/Scripture.svelte:995](../../../../../src/server/remote/components/pages/Scripture.svelte#L995); () => { scriptureMultiSelect.set(!$scriptureMultiSelect) if (!$scriptureMultiSelect) selectedVerses.set(&#91;&#93;) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:992 depth === 2 && $scriptureViewList.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:996 store-write src/server/remote/util/stores.ts#scriptureMultiSelect ; src/server/remote/components/pages/Scripture.svelte:997 store-write src/server/remote/util/stores.ts#selectedVerses .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
