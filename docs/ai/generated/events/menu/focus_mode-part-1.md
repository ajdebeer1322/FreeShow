# menu/focus_mode (1)

## focus_mode — event-0269c37da40f780731

[code] [src/frontend/components/context/contextMenus.ts:34](../../../../../src/frontend/components/context/contextMenus.ts#L34); focus_mode. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:161 !project?.shows?.length; src/frontend/components/context/menuClick.ts:173 drawerIsOpened; src/frontend/components/context/menuClick.ts:176 firstItem; src/frontend/components/context/menuClick.ts:181 !get(focusMode) && get(cloudSyncData).enabled.

Calls: src/frontend/components/context/menuClick.ts:159 focus_mode (depth 0); src/frontend/utils/common.ts:26 newToast (depth 1); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 2).

Effects: src/frontend/components/context/menuClick.ts:166 store-write src/frontend/stores.ts#previousShow ; src/frontend/components/context/menuClick.ts:167 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/context/menuClick.ts:168 store-write src/frontend/stores.ts#showRecentlyUsedProjects ; src/frontend/components/context/menuClick.ts:173 store-write src/frontend/stores.ts#drawer ; src/frontend/components/context/menuClick.ts:176 store-write src/frontend/stores.ts#activeFocus ; src/frontend/components/context/menuClick.ts:178 store-write src/frontend/stores.ts#activePage ; src/frontend/components/context/menuClick.ts:179 store-write src/frontend/stores.ts#focusMode ; src/frontend/components/context/menuClick.ts:182 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
