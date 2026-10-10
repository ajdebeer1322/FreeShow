# click/src_frontend_components_edit_Editor.svelte (1)

## click — event-debbaadbd26e39aedb

[code] [src/frontend/components/edit/Editor.svelte:89](../../../../../src/frontend/components/edit/Editor.svelte#L89); () => { activePopup.set("effect_items") // const currentEffect = $effects&#91;$activeEdit.id \|\| ""&#93; \|\| {} // const nextIndex = currentEffect?.items?.length \|\| 0 // if (!openedMenus&#91;nex. resolved-within-bound.

Conditions: src/frontend/components/edit/Editor.svelte:71 $activeEdit.type === "overlay"; src/frontend/components/edit/Editor.svelte:75 $activeEdit.type === "template"; src/frontend/components/edit/Editor.svelte:79 $activeEdit.type === "scene"; src/frontend/components/edit/Editor.svelte:81 $activeEdit.type === "effect".

Calls: no function target resolved.

Effects: src/frontend/components/edit/Editor.svelte:90 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9b5f94ed990e52ad5c

[code] [src/frontend/components/edit/Editor.svelte:112](../../../../../src/frontend/components/edit/Editor.svelte#L112); () => (hideCloudConflict = true). resolved-within-bound.

Conditions: src/frontend/components/edit/Editor.svelte:71 $activeEdit.type === "overlay"; src/frontend/components/edit/Editor.svelte:75 $activeEdit.type === "template"; src/frontend/components/edit/Editor.svelte:79 $activeEdit.type === "scene"; src/frontend/components/edit/Editor.svelte:81 $activeEdit.type === "effect"; src/frontend/components/edit/Editor.svelte:99 $activeEdit.type === "media"; src/frontend/components/edit/Editor.svelte:101 $activeEdit.type === "camera"; src/frontend/components/edit/Editor.svelte:105 $activeEdit.type === "audio"; src/frontend/components/edit/Editor.svelte:107 $activeEdit.slide !== undefined; src/frontend/components/edit/Editor.svelte:108 !hideCloudConflict && isActiveShowInUseByCloudUser({ $activeShow, $cloudUsers }).

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
