# automatic/src_frontend_components_system_SelectElem.svelte (1)

## setTimeout — event-866e03803ed796bf9e

[code] [src/frontend/components/system/SelectElem.svelte:49](../../../../../src/frontend/components/system/SelectElem.svelte#L49); () => { triggerTimeout = null if (!dragover) return if (!triggerHoverActions&#91;id&#93;) return console.log("MISSING HOVER TRIGGER:", id) triggerHoverActions&#91;id&#93;() }. partial.

Conditions: src/frontend/components/system/SelectElem.svelte:51 !dragover; src/frontend/components/system/SelectElem.svelte:52 !triggerHoverActions&#91;id&#93;.

Calls: src/frontend/components/system/SelectElem.svelte:49 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-b6394b112dfebaf0f9

[code] [src/frontend/components/system/SelectElem.svelte:67](../../../../../src/frontend/components/system/SelectElem.svelte#L67); () => { selected.set({ id: "global_group", data: slides, hoverActive: true }) }. resolved-within-bound.

Conditions: src/frontend/components/system/SelectElem.svelte:62 ($selected.id === "slide" \|\| $selected.id === "group") && !$selected.hoverActive; src/frontend/components/system/SelectElem.svelte:60 ($selected.id === "slide" \|\| $selected.id === "group" \|\| $selected.id === "global_group") && (data.type \|\| "show") === "show".

Calls: src/frontend/components/system/SelectElem.svelte:67 <callback> (depth 0).

Effects: src/frontend/components/system/SelectElem.svelte:68 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
