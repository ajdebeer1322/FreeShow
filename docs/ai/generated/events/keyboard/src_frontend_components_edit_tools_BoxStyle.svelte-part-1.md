# keyboard/src_frontend_components_edit_tools_BoxStyle.svelte (1)

## dynamic — event-1bbb5a771cc126d65a

[code] [src/frontend/components/edit/tools/BoxStyle.svelte:783](../../../../../src/frontend/components/edit/tools/BoxStyle.svelte#L783); keyup. partial.

Conditions: src/frontend/components/edit/tools/BoxStyle.svelte:98 e.key.includes("Arrow") \|\| e.key === "Home" \|\| e.key === "End" \|\| getNormalizedKey(e).toUpperCase() === "A".

Calls: src/frontend/components/edit/tools/BoxStyle.svelte:97 keyup (depth 0); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 1); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 2); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 2); src/frontend/components/edit/tools/BoxStyle.svelte:59 getTextSelection (depth 1); src/frontend/components/edit/scripts/textStyle.ts:137 getSelectionRange (depth 2); src/frontend/components/edit/scripts/textStyle.ts:148 <callback> (depth 3); src/frontend/components/edit/scripts/textStyle.ts:150 lineLength (depth 3); src/frontend/components/edit/scripts/textStyle.ts:155 getBoundary (depth 3); src/frontend/components/edit/scripts/textStyle.ts:156 <callback> (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-eaee9207408314cb94

[code] [src/frontend/components/edit/tools/BoxStyle.svelte:783](../../../../../src/frontend/components/edit/tools/BoxStyle.svelte#L783); keydown. partial.

Conditions: src/frontend/components/edit/tools/BoxStyle.svelte:192 (!e.ctrlKey && !e.metaKey) \|\| !shortcut; src/frontend/components/edit/tools/BoxStyle.svelte:196 !hasSelectionRange; src/frontend/components/edit/tools/BoxStyle.svelte:207 value.key === "text-decoration"; src/frontend/components/edit/tools/BoxStyle.svelte:211 parts.includes(value.value); src/frontend/components/edit/tools/BoxStyle.svelte:214 styles&#91;value.key&#93;?.includes(value.value); src/frontend/components/edit/tools/BoxStyle.svelte:222 !editElem.

Calls: src/frontend/components/edit/tools/BoxStyle.svelte:190 keydown (depth 0); src/frontend/components/edit/tools/BoxStyle.svelte:107 getFormattingShortcut (depth 1); src/frontend/utils/shortcuts.ts:329 isFormattingKey (depth 2); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 3); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 4); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 4); src/frontend/utils/shortcuts.ts:317 getNormalizedKey (depth 2); src/frontend/utils/shortcuts.ts:305 getLayoutMappedShortcutKey (depth 3); src/frontend/utils/shortcuts.ts:313 shouldNormalizeShortcutKey (depth 3); src/frontend/components/edit/scripts/textStyle.ts:137 getSelectionRange (depth 1); src/frontend/components/edit/scripts/textStyle.ts:148 <callback> (depth 2); src/frontend/components/edit/scripts/textStyle.ts:150 lineLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:155 getBoundary (depth 2); src/frontend/components/edit/scripts/textStyle.ts:156 <callback> (depth 3); src/frontend/components/edit/tools/BoxStyle.svelte:195 <callback> (depth 1); src/frontend/components/edit/tools/BoxStyle.svelte:200 <callback> (depth 1).

Effects: src/frontend/components/edit/tools/BoxStyle.svelte:665 history history UPDATE; src/frontend/components/edit/tools/BoxStyle.svelte:416 history history UPDATE; src/frontend/components/edit/tools/BoxStyle.svelte:425 history history setItems; src/frontend/components/edit/tools/BoxStyle.svelte:419 store-write src/frontend/stores.ts#overlays ; src/frontend/components/edit/tools/BoxStyle.svelte:420 store-write src/frontend/stores.ts#templates ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 22; depth cutoffs: 184. Full edges/effects/conditions in JSON.
