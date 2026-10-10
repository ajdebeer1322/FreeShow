# keyboard/src_frontend_components_edit_Navigation.svelte (1)

## dynamic — event-5b12558b9ee624bb64

[code] [src/frontend/components/edit/Navigation.svelte:130](../../../../../src/frontend/components/edit/Navigation.svelte#L130); handleKeyDown. resolved-within-bound.

Conditions: src/frontend/components/edit/Navigation.svelte:98 e.ctrlKey \|\| e.metaKey; src/frontend/components/edit/Navigation.svelte:99 e.target?.closest?.(".edit") \|\| document.activeElement?.tagName === "INPUT" \|\| document.activeElement?.tagName === "TEXTAREA"; src/frontend/components/edit/Navigation.svelte:102 !showRecent \|\| clonedHistory.length === 0; src/frontend/components/edit/Navigation.svelte:104 e.key === "ArrowDown"; src/frontend/components/edit/Navigation.svelte:107 activeIndex === -1; src/frontend/components/edit/Navigation.svelte:108 nextIndex < clonedHistory.length; src/frontend/components/edit/Navigation.svelte:109 e.key === "ArrowUp"; src/frontend/components/edit/Navigation.svelte:112 activeIndex === -1; src/frontend/components/edit/Navigation.svelte:113 prevIndex >= 0.

Calls: src/frontend/components/edit/Navigation.svelte:97 handleKeyDown (depth 0); src/frontend/components/edit/Navigation.svelte:117 openRecent (depth 1).

Effects: src/frontend/components/edit/Navigation.svelte:118 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Navigation.svelte:119 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/edit/Navigation.svelte:121 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Navigation.svelte:122 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
