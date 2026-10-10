# menu/hide_from_preview (1)

## hide_from_preview — event-f709a8e2eae065ca0e

[code] [src/frontend/components/context/contextMenus.ts:92](../../../../../src/frontend/components/context/contextMenus.ts#L92); hide_from_preview. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:920 newValue && showingOutputsList.length <= 1.

Calls: src/frontend/components/context/menuClick.ts:911 hide_from_preview (depth 0); src/frontend/components/context/menuClick.ts:914 <callback> (depth 1); src/frontend/components/context/menuClick.ts:915 <callback> (depth 2); src/frontend/components/context/menuClick.ts:917 <callback> (depth 3); src/frontend/utils/common.ts:26 newToast (depth 3); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 4).

Effects: src/frontend/components/context/menuClick.ts:913 store-write src/frontend/stores.ts#toggleOutputEnabled ; src/frontend/components/context/menuClick.ts:915 store-write src/frontend/stores.ts#outputs ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: output_active_button src/frontend/components/context/contextMenus.ts:263. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:311 hide_from_preview: () => { let isEnabled = false let outputId = contextElem?.id \|\| "" if ($outputs&#91;outputId&#93;?.hideFromPreview) isEnabled = true enabled = isEnabled menu.label = isE. Appears: src/frontend/components/output/preview/PreviewOutputs.svelte:63.
