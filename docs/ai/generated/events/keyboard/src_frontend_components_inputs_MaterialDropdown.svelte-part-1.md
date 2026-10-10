# keyboard/src_frontend_components_inputs_MaterialDropdown.svelte (1)

## dynamic — event-fbbf709d750c34dc64

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:293](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L293); handleKeydown. partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:109 disabled; src/frontend/components/inputs/MaterialDropdown.svelte:111 event.key === "Enter" \|\| event.key === " "; src/frontend/components/inputs/MaterialDropdown.svelte:113 searchValue && event.key === " "; src/frontend/components/inputs/MaterialDropdown.svelte:115 open && highlightedIndex >= 0; src/frontend/components/inputs/MaterialDropdown.svelte:121 event.key === "ArrowDown"; src/frontend/components/inputs/MaterialDropdown.svelte:123 !open; src/frontend/components/inputs/MaterialDropdown.svelte:130 event.key === "ArrowUp"; src/frontend/components/inputs/MaterialDropdown.svelte:132 !open; src/frontend/components/inputs/MaterialDropdown.svelte:139 event.key === "Escape"; src/frontend/components/inputs/MaterialDropdown.svelte:144 !open; src/frontend/components/inputs/MaterialDropdown.svelte:147 event.key === "Backspace"; src/frontend/components/inputs/MaterialDropdown.svelte:151 event.key.length === 1; src/frontend/components/inputs/MaterialDropdown.svelte:155 activeIndex < 0; src/frontend/components/inputs/MaterialDropdown.svelte:156 activeIndex < 0.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:108 handleKeydown (depth 0); src/frontend/components/inputs/MaterialDropdown.svelte:91 selectOption (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:34 toggleDropdown (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:39 <callback> (depth 2); src/frontend/components/inputs/MaterialDropdown.svelte:48 calculateMaxHeight (depth 3); src/frontend/components/inputs/MaterialDropdown.svelte:77 getScrollParent (depth 4); src/frontend/components/inputs/MaterialDropdown.svelte:41 <callback> (depth 2); src/frontend/components/inputs/MaterialDropdown.svelte:203 scrollToHighlighted (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:149 <callback> (depth 1); src/frontend/utils/search.ts:8 formatSearch (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:154 <callback> (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:155 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-d23b6fa06e49669254

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:426](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L426); keydown. partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:423 addNew && addNewTextbox; src/frontend/components/inputs/MaterialDropdown.svelte:271 e.key === "Enter".

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:270 keydown (depth 0); src/frontend/components/inputs/MaterialDropdown.svelte:264 createNewEvent (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
