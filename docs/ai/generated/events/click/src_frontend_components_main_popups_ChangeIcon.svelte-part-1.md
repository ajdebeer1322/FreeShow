# click/src_frontend_components_main_popups_ChangeIcon.svelte (1)

## click — event-75e68204b8273e7b33

[code] [src/frontend/components/main/popups/ChangeIcon.svelte:43](../../../../../src/frontend/components/main/popups/ChangeIcon.svelte#L43); manageIcons. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ChangeIcon.svelte:37 manageIcons (depth 0).

Effects: src/frontend/components/main/popups/ChangeIcon.svelte:38 store-write src/frontend/stores.ts#popupData ; src/frontend/components/main/popups/ChangeIcon.svelte:39 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bba895116e01850c75

[code] [src/frontend/components/main/popups/ChangeIcon.svelte:48](../../../../../src/frontend/components/main/popups/ChangeIcon.svelte#L48); () => click(icon). partial.

Conditions: src/frontend/components/main/popups/ChangeIcon.svelte:47 !boxed \|\| icon !== "empty".

Calls: src/frontend/components/main/popups/ChangeIcon.svelte:28 click (depth 1).

Effects: src/frontend/components/main/popups/ChangeIcon.svelte:32 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-98a94de62228c7f084

[code] [src/frontend/components/main/popups/ChangeIcon.svelte:60](../../../../../src/frontend/components/main/popups/ChangeIcon.svelte#L60); () => click(icon.id, icon.path). partial.

Conditions: src/frontend/components/main/popups/ChangeIcon.svelte:55 $selected.id === "slide_icon" && $customizedIcons.svg.length.

Calls: src/frontend/components/main/popups/ChangeIcon.svelte:28 click (depth 1).

Effects: src/frontend/components/main/popups/ChangeIcon.svelte:32 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
