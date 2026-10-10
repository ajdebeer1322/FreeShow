# click/src_frontend_components_edit_EditHeader.svelte (1)

## click — event-613a5287234a1582cc

[code] [src/frontend/components/edit/EditHeader.svelte:46](../../../../../src/frontend/components/edit/EditHeader.svelte#L46); () => activePopup.set("template_info"). resolved-within-bound.

Conditions: src/frontend/components/edit/EditHeader.svelte:43 $editMode === "default"; src/frontend/components/edit/EditHeader.svelte:45 templateId.

Calls: no function target resolved.

Effects: src/frontend/components/edit/EditHeader.svelte:46 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-07366a8a1a177df4b0

[code] [src/frontend/components/edit/EditHeader.svelte:52](../../../../../src/frontend/components/edit/EditHeader.svelte#L52); () => (showDropdown = !showDropdown). resolved-within-bound.

Conditions: src/frontend/components/edit/EditHeader.svelte:43 $editMode === "default"; src/frontend/components/edit/EditHeader.svelte:51 !hideOptions.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-048c0d4457084fbe77

[code] [src/frontend/components/edit/EditHeader.svelte:59](../../../../../src/frontend/components/edit/EditHeader.svelte#L59); () => (showDropdown = false). resolved-within-bound.

Conditions: src/frontend/components/edit/EditHeader.svelte:43 $editMode === "default"; src/frontend/components/edit/EditHeader.svelte:58 showDropdown && currentShow.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bed2ce433607defc08

[code] [src/frontend/components/edit/EditHeader.svelte:60](../../../../../src/frontend/components/edit/EditHeader.svelte#L60); () => slideNotesActive.set(!$slideNotesActive). resolved-within-bound.

Conditions: src/frontend/components/edit/EditHeader.svelte:43 $editMode === "default"; src/frontend/components/edit/EditHeader.svelte:58 showDropdown && currentShow.

Calls: no function target resolved.

Effects: src/frontend/components/edit/EditHeader.svelte:60 store-write src/frontend/stores.ts#slideNotesActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a7f3b8669865a8c163

[code] [src/frontend/components/edit/EditHeader.svelte:72](../../../../../src/frontend/components/edit/EditHeader.svelte#L72); () => special.update((a) => ({ ...a, slideTimelineActive: !a.slideTimelineActive })). resolved-within-bound.

Conditions: src/frontend/components/edit/EditHeader.svelte:43 $editMode === "default"; src/frontend/components/edit/EditHeader.svelte:58 showDropdown && currentShow.

Calls: no function target resolved.

Effects: src/frontend/components/edit/EditHeader.svelte:72 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
