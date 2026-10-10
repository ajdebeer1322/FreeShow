# keyboard/src_frontend_components_show_tools_HighlightedNotes.svelte (1)

## dynamic — event-f7265f4b4799582729

[code] [src/frontend/components/show/tools/HighlightedNotes.svelte:65](../../../../../src/frontend/components/show/tools/HighlightedNotes.svelte#L65); <forwarded event>. forwarded.

Conditions: src/frontend/components/show/TextEditor.svelte:45 e.shiftKey \|\| e.altKey; src/frontend/components/show/TextEditor.svelte:49 ctrlKey === "f".

Calls: src/frontend/components/show/TextEditor.svelte:44 keydown (depth 0); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 1); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 2); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 2).

Effects: src/frontend/components/show/TextEditor.svelte:49 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
