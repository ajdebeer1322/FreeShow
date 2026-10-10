# menu/lock_group (1)

## lock_group — event-50c5362174d78f82bc

[code] [src/frontend/components/context/contextMenus.ts:116](../../../../../src/frontend/components/context/contextMenus.ts#L116); lock_group. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:816 obj.sel?.id !== "group"; src/frontend/components/context/menuClick.ts:820 !slideIds.length; src/frontend/components/context/menuClick.ts:827 !a&#91;showId&#93;; src/frontend/components/context/menuClick.ts:830 !a&#91;showId&#93;.slides?.&#91;slideId&#93;; src/frontend/components/context/menuClick.ts:831 shouldBeLocked.

Calls: src/frontend/components/context/menuClick.ts:815 lock_group (depth 0); src/frontend/components/context/menuClick.ts:819 <callback> (depth 1); src/frontend/components/context/menuClick.ts:826 <callback> (depth 1); src/frontend/components/context/menuClick.ts:829 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:826 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: group src/frontend/components/context/contextMenus.ts:389. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:105 lock_group: () => { if ($selected.id !== "group") return const slideId = $selected.data?.&#91;0&#93;?.id const show = $showsCache&#91;$activeShow?.id \|\| ""&#93; const isLocked = show?.slides?.&#91;sli. Appears: src/frontend/components/show/tools/SlideGroups.svelte:83.
