# automatic/src_server_remote_components_pages_Scripture.svelte (1)

## setTimeout — event-629537e7aeb465f46f

[code] [src/server/remote/components/pages/Scripture.svelte:36](../../../../../src/server/remote/components/pages/Scripture.svelte#L36); fn. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1994c582ba3000e136

[code] [src/server/remote/components/pages/Scripture.svelte:159](../../../../../src/server/remote/components/pages/Scripture.svelte#L159); () => { if (scriptureContentRef?.navigateToVerse) { scriptureContentRef.navigateToVerse(1, 1) } }. partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:156 defaultScripture; src/server/remote/components/pages/Scripture.svelte:160 scriptureContentRef?.navigateToVerse.

Calls: src/server/remote/components/pages/Scripture.svelte:159 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-341c1b138a62d0bffe

[code] [src/server/remote/components/pages/Scripture.svelte:731](../../../../../src/server/remote/components/pages/Scripture.svelte#L731); () => { if (scriptureContentRef?.navigateToVerse) { scriptureContentRef.navigateToVerse(bookNum, chapterNum) } else { // Fallback: if ref still not available, try again after a sho. partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:732 scriptureContentRef?.navigateToVerse; src/server/remote/components/pages/Scripture.svelte:737 scriptureContentRef?.navigateToVerse; src/server/remote/components/pages/Scripture.svelte:744 $scriptureViewList && verseNum > 0; src/server/remote/components/pages/Scripture.svelte:746 scriptureContentRef?.scrollToVerse.

Calls: src/server/remote/components/pages/Scripture.svelte:731 <callback> (depth 0); src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 1); src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2aefa36e1bed7de4ce

[code] [src/server/remote/components/pages/Scripture.svelte:736](../../../../../src/server/remote/components/pages/Scripture.svelte#L736); () => { if (scriptureContentRef?.navigateToVerse) { scriptureContentRef.navigateToVerse(bookNum, chapterNum) } }. partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:732 scriptureContentRef?.navigateToVerse; src/server/remote/components/pages/Scripture.svelte:737 scriptureContentRef?.navigateToVerse.

Calls: src/server/remote/components/pages/Scripture.svelte:736 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-5513b6e9aaa6f233ad

[code] [src/server/remote/components/pages/Scripture.svelte:745](../../../../../src/server/remote/components/pages/Scripture.svelte#L745); () => { if (scriptureContentRef?.scrollToVerse) { scriptureContentRef.scrollToVerse(verseNum) } }. partial.

Conditions: src/server/remote/components/pages/Scripture.svelte:744 $scriptureViewList && verseNum > 0; src/server/remote/components/pages/Scripture.svelte:746 scriptureContentRef?.scrollToVerse.

Calls: src/server/remote/components/pages/Scripture.svelte:745 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
