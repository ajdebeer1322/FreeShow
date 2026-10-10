# menu/copy_id (1)

## copy_id — event-b06480a1fe50d1e1c6

[code] [src/frontend/components/context/contextMenus.ts:29](../../../../../src/frontend/components/context/contextMenus.ts#L29); copy_id. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:195 sel?.data?.&#91;0&#93;; src/frontend/components/context/menuClick.ts:196 typeof sel.data&#91;0&#93; === "string"; src/frontend/components/context/menuClick.ts:197 typeof sel.data&#91;0&#93; === "object" && sel.data&#91;0&#93; !== null; src/frontend/components/context/menuClick.ts:199 !itemId && obj.contextElem?.id; src/frontend/components/context/menuClick.ts:201 itemId.

Calls: src/frontend/components/context/menuClick.ts:192 copy_id (depth 0); src/frontend/utils/common.ts:26 newToast (depth 1); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 2).

Effects: src/frontend/components/context/menuClick.ts:202 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
