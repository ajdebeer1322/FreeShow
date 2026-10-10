# keyboard/src_frontend_components_show_TextEditor.svelte (1)

## dynamic — event-2cd6b5f257563f6c47

[code] [src/frontend/components/show/TextEditor.svelte:63](../../../../../src/frontend/components/show/TextEditor.svelte#L63); keydown. resolved-within-bound.

Conditions: src/frontend/components/show/TextEditor.svelte:45 e.shiftKey \|\| e.altKey; src/frontend/components/show/TextEditor.svelte:49 ctrlKey === "f".

Calls: src/frontend/components/show/TextEditor.svelte:44 keydown (depth 0); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 1); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 2); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 2).

Effects: src/frontend/components/show/TextEditor.svelte:49 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
