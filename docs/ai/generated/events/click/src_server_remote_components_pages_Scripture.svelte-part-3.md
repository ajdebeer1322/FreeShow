# click/src_server_remote_components_pages_Scripture.svelte (3)

## click — event-e6c4342c3e7b062e59

[code] [src/server/remote/components/pages/Scripture.svelte:1006](../../../../../src/server/remote/components/pages/Scripture.svelte#L1006); previous. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext.

Calls: src/server/remote/components/pages/Scripture.svelte:202 previous (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Scripture.svelte:203 ipc send("API:scripture_previous") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cb2b62e93b1decd1a0

[code] [src/server/remote/components/pages/Scripture.svelte:1009](../../../../../src/server/remote/components/pages/Scripture.svelte#L1009); next. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext.

Calls: src/server/remote/components/pages/Scripture.svelte:199 next (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Scripture.svelte:200 ipc send("API:scripture_next") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4770bcfeb7aadb0239

[code] [src/server/remote/components/pages/Scripture.svelte:1014](../../../../../src/server/remote/components/pages/Scripture.svelte#L1014); () => scriptureContentRef?.playSelectedVerses?.(). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:1012 depth === 2; src/server/remote/components/pages/Scripture.svelte:1013 $scriptureViewList && $scriptureMultiSelect && $selectedVerses.length > 0.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1793eae2f01121feec

[code] [src/server/remote/components/pages/Scripture.svelte:1018](../../../../../src/server/remote/components/pages/Scripture.svelte#L1018); () => scriptureViewList.set(!$scriptureViewList). resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:1012 depth === 2; src/server/remote/components/pages/Scripture.svelte:1013 $scriptureViewList && $scriptureMultiSelect && $selectedVerses.length > 0.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:1018 store-write src/server/remote/util/stores.ts#scriptureViewList .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-59534997562c2d255b

[code] [src/server/remote/components/pages/Scripture.svelte:1029](../../../../../src/server/remote/components/pages/Scripture.svelte#L1029); () => { scriptureMultiSelect.set(!$scriptureMultiSelect) if (!$scriptureMultiSelect) selectedVerses.set(&#91;&#93;) }. resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:1024 depth === 2; src/server/remote/components/pages/Scripture.svelte:1026 $scriptureViewList.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:1030 store-write src/server/remote/util/stores.ts#scriptureMultiSelect ; src/server/remote/components/pages/Scripture.svelte:1031 store-write src/server/remote/util/stores.ts#selectedVerses .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3cc146c09bed990583

[code] [src/server/remote/components/pages/Scripture.svelte:1041](../../../../../src/server/remote/components/pages/Scripture.svelte#L1041); () => scriptureContentRef?.playSelectedVerses?.(). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:1024 depth === 2; src/server/remote/components/pages/Scripture.svelte:1040 $scriptureViewList && $scriptureMultiSelect && $selectedVerses.length > 0.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
