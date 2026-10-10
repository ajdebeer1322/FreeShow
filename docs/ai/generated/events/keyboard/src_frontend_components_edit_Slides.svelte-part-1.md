# keyboard/src_frontend_components_edit_Slides.svelte (1)

## dynamic — event-c6263190d220554116

[code] [src/frontend/components/edit/Slides.svelte:130](../../../../../src/frontend/components/edit/Slides.svelte#L130); keydown. resolved-within-bound.

Conditions: src/frontend/components/edit/Slides.svelte:24 e.ctrlKey \|\| e.metaKey; src/frontend/components/edit/Slides.svelte:26 e.altKey; src/frontend/components/edit/Slides.svelte:31 e.target instanceof HTMLTextAreaElement \|\| e.target?.closest?.(".edit"); src/frontend/components/edit/Slides.svelte:32 $activeEdit.items.length; src/frontend/components/edit/Slides.svelte:34 e.key === "ArrowDown"; src/frontend/components/edit/Slides.svelte:39 $activeEdit.slide === null \|\| $activeEdit.slide === undefined; src/frontend/components/edit/Slides.svelte:41 $activeEdit.slide < layoutSlides.length - 1; src/frontend/components/edit/Slides.svelte:44 e.key === "ArrowUp"; src/frontend/components/edit/Slides.svelte:49 $activeEdit.slide === null \|\| $activeEdit.slide === undefined; src/frontend/components/edit/Slides.svelte:51 $activeEdit.slide > 0.

Calls: src/frontend/components/edit/Slides.svelte:23 keydown (depth 0).

Effects: src/frontend/components/edit/Slides.svelte:40 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Slides.svelte:42 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Slides.svelte:50 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/edit/Slides.svelte:52 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-cc5a99be9684f92a8c

[code] [src/frontend/components/edit/Slides.svelte:130](../../../../../src/frontend/components/edit/Slides.svelte#L130); keyup. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/Slides.svelte:86 keyup (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
