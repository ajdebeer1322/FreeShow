# drag-drop/src_frontend_components_system_DropArea.svelte (1)

## dragend — event-0da9386e515437c91d

[code] [src/frontend/components/system/DropArea.svelte:208](../../../../../src/frontend/components/system/DropArea.svelte#L208); endDrag. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/system/DropArea.svelte:187 endDrag (depth 0); src/frontend/components/helpers/select.ts:22 deselect (depth 1).

Effects: src/frontend/components/helpers/select.ts:23 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragstart — event-16c7f136b193d14943

[code] [src/frontend/components/system/DropArea.svelte:208](../../../../../src/frontend/components/system/DropArea.svelte#L208); () => (hover = active). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## drop — event-2b50b4077e82001aea

[code] [src/frontend/components/system/DropArea.svelte:213](../../../../../src/frontend/components/system/DropArea.svelte#L213); dropEvent. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/system/DropArea.svelte:41 dropEvent (depth 0); src/frontend/components/system/DropArea.svelte:49 handleDrop (depth 1); src/frontend/components/system/DropArea.svelte:88 getFiles (depth 2); src/frontend/components/system/DropArea.svelte:52 <callback> (depth 2); src/frontend/components/system/DropArea.svelte:160 isWebMediaFile (depth 3); src/frontend/components/system/DropArea.svelte:55 <callback> (depth 2); src/frontend/components/system/DropArea.svelte:173 fileToBase64 (depth 3); src/frontend/components/system/DropArea.svelte:174 <callback> (depth 4); src/frontend/components/system/DropArea.svelte:176 <callback> (depth 5); src/frontend/components/helpers/drop.ts:42 ondrop (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 3); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 4); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 5); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 5); src/frontend/components/helpers/historyActions.ts:230 handleShows (depth 6).

Effects: src/frontend/components/system/DropArea.svelte:56 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/DropArea.svelte:62 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/DropArea.svelte:72 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/DropArea.svelte:77 store-write src/frontend/stores.ts#selected ; src/frontend/components/helpers/drop.ts:72 history history dynamic; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:664 store-write src/frontend/stores.ts#refreshEditSlide ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 11; depth cutoffs: 109. Full edges/effects/conditions in JSON.

## dragover — event-d845ffea7b0735fd02

[code] [src/frontend/components/system/DropArea.svelte:214](../../../../../src/frontend/components/system/DropArea.svelte#L214); (e) => { if (file && e.dataTransfer?.items&#91;0&#93;?.kind === "file") fileOver = true }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragenter — event-4f8f6d942036933d1e

[code] [src/frontend/components/system/DropArea.svelte:217](../../../../../src/frontend/components/system/DropArea.svelte#L217); enter. resolved-within-bound.

Conditions: src/frontend/components/system/DropArea.svelte:20 !active \|\| !selectChildren; src/frontend/components/system/DropArea.svelte:24 count > 0.

Calls: src/frontend/components/system/DropArea.svelte:19 enter (depth 0); src/frontend/components/system/DropArea.svelte:23 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragleave — event-8042b0938c130fe48e

[code] [src/frontend/components/system/DropArea.svelte:218](../../../../../src/frontend/components/system/DropArea.svelte#L218); leave. resolved-within-bound.

Conditions: src/frontend/components/system/DropArea.svelte:30 fileOver && !(e.currentTarget as HTMLElement)?.contains(e.relatedTarget as Node \| null); src/frontend/components/system/DropArea.svelte:32 !active \|\| !selectChildren; src/frontend/components/system/DropArea.svelte:36 count === 0.

Calls: src/frontend/components/system/DropArea.svelte:28 leave (depth 0); src/frontend/components/system/DropArea.svelte:35 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
