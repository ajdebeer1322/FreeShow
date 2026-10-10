# click/src_frontend_components_show_ShowHeader.svelte (2)

## click — event-364bacc6275bae18e3

[code] [src/frontend/components/show/ShowHeader.svelte:156](../../../../../src/frontend/components/show/ShowHeader.svelte#L156); () => { special.update((a) => ({ ...a, timelineActive: !a.timelineActive })) autoOpenedTimeline.set(false) }. resolved-within-bound.

Conditions: src/frontend/components/show/ShowHeader.svelte:140 showDropdown && currentShow.

Calls: no function target resolved.

Effects: src/frontend/components/show/ShowHeader.svelte:157 store-write src/frontend/stores.ts#special ; src/frontend/components/show/ShowHeader.svelte:158 store-write src/frontend/stores.ts#autoOpenedTimeline .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2bd320068a24fcd605

[code] [src/frontend/components/show/ShowHeader.svelte:172](../../../../../src/frontend/components/show/ShowHeader.svelte#L172); toggleShowLock. partial.

Conditions: src/frontend/components/show/ShowHeader.svelte:140 showDropdown && currentShow; src/frontend/components/show/ShowHeader.svelte:64 !a&#91;showId&#93;; src/frontend/components/show/ShowHeader.svelte:71 shouldBeLocked.

Calls: src/frontend/components/show/ShowHeader.svelte:60 toggleShowLock (depth 0); src/frontend/components/show/ShowHeader.svelte:63 <callback> (depth 1); src/frontend/components/helpers/show.ts:385 removeTemplatesFromShow (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/shows.ts:27 get (depth 3); src/frontend/components/helpers/shows.ts:18 _show (depth 3); src/frontend/components/helpers/shows.ts:38 set (depth 4); src/frontend/components/helpers/shows.ts:40 <callback> (depth 5); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 6); src/frontend/components/helpers/shows.ts:59 remove (depth 4); src/frontend/components/helpers/shows.ts:61 <callback> (depth 5); src/frontend/components/helpers/shows.ts:74 slides (depth 4); src/frontend/components/helpers/shows.ts:76 get (depth 5); src/frontend/components/helpers/shows.ts:80 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6).

Effects: src/frontend/components/show/ShowHeader.svelte:63 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:722 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 104. Full edges/effects/conditions in JSON.
