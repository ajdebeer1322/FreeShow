# automatic/src_frontend_components_drawer_bible_Scripture.svelte (2)

## setTimeout — event-efd45b05a5350e78c8

[code] [src/frontend/components/drawer/bible/Scripture.svelte:528](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L528); () => (isSelected = false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:528 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6fa84aceab30a0997c

[code] [src/frontend/components/drawer/bible/Scripture.svelte:569](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L569); () => (activeReference = activeReference). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:569 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bbd0ee736be0d1f9bd

[code] [src/frontend/components/drawer/bible/Scripture.svelte:637](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L637); () => (freezeInput = null). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:635 !result.chapter; src/frontend/components/drawer/bible/Scripture.svelte:633 bookChanged.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:637 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ad28dbcae340bc4b0f

[code] [src/frontend/components/drawer/bible/Scripture.svelte:643](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L643); () => (freezeInput = null). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:640 autocompleteChanged && !result.chapter; src/frontend/components/drawer/bible/Scripture.svelte:633 bookChanged.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:643 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-08bd4a65bb94833949

[code] [src/frontend/components/drawer/bible/Scripture.svelte:654](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L654); selectAllVerses. partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:653 result.chapter && !newVerses; src/frontend/components/drawer/bible/Scripture.svelte:564 !splittedVerses.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:563 selectAllVerses (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:566 <callback> (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:569 <callback> (depth 1).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d4fb36b307437356b2

[code] [src/frontend/components/drawer/bible/Scripture.svelte:859](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L859); () => (searchElem ? (searchElem as any).focus() : null). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:852 enterSwapped ? !ctrlKey : ctrlKey; src/frontend/components/drawer/bible/Scripture.svelte:849 e.target?.closest(".search"); src/frontend/components/drawer/bible/Scripture.svelte:847 e.key === "Enter".

Calls: src/frontend/components/drawer/bible/Scripture.svelte:859 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
