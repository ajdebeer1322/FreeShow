# click/src_server_remote_components_pages_Scripture.svelte (4)

## click — event-7cb6dddacdc2f12a9c

[code] [src/server/remote/components/pages/Scripture.svelte:1045](../../../../../src/server/remote/components/pages/Scripture.svelte#L1045); () => scriptureViewList.set(!$scriptureViewList). resolved-within-bound.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:988 showControlsBar && !tablet; src/server/remote/components/pages/Scripture.svelte:990 showPrevNext; src/server/remote/components/pages/Scripture.svelte:1024 depth === 2; src/server/remote/components/pages/Scripture.svelte:1040 $scriptureViewList && $scriptureMultiSelect && $selectedVerses.length > 0.

Calls: no function target resolved.

Effects: src/server/remote/components/pages/Scripture.svelte:1045 store-write src/server/remote/util/stores.ts#scriptureViewList .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0f48b6ab75451c690d

[code] [src/server/remote/components/pages/Scripture.svelte:1073](../../../../../src/server/remote/components/pages/Scripture.svelte#L1073); () => selectScripture(scripture). partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:854 openScriptureSearch && !tablet; src/server/remote/components/pages/Scripture.svelte:893 tablet \|\| ($openedScripture && (checkScriptureExists($openedScripture, $collectionId) \|\| !scripturesLoaded)); src/server/remote/components/pages/Scripture.svelte:1058 !tablet && scriptureEntries.length.

Calls: src/server/remote/components/pages/Scripture.svelte:147 selectScripture (depth 1); src/server/remote/components/pages/Scripture.svelte:123 openScripture (depth 2).

Effects: src/server/remote/components/pages/Scripture.svelte:126 store-write src/server/remote/util/stores.ts#openedScripture ; src/server/remote/components/pages/Scripture.svelte:127 store-write src/server/remote/util/stores.ts#collectionId ; src/server/remote/components/pages/Scripture.svelte:134 store-write src/server/remote/util/stores.ts#selectedTranslationIndex .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
