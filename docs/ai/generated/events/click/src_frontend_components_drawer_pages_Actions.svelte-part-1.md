# click/src_frontend_components_drawer_pages_Actions.svelte (1)

## click — event-444456d6a0e1808ba9

[code] [src/frontend/components/drawer/pages/Actions.svelte:89](../../../../../src/frontend/components/drawer/pages/Actions.svelte#L89); (e) => { if (e.ctrlKey \|\| e.metaKey) return if (action.shows?.length) { receivedMidi({ id: action.id, bypass: true }) return } runAction(action, { source: "click" }) timelineRecord. partial.

Conditions: src/frontend/components/drawer/pages/Actions.svelte:80 filteredActionsSearch.length.

Calls: src/frontend/components/actions/midi.ts:89 receivedMidi (depth 1); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3); src/frontend/components/actions/actions.ts:33 runAction (depth 2); src/frontend/components/actions/actions.ts:49 <callback> (depth 3); src/frontend/components/actions/actions.ts:74 runTrigger (depth 3); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 4); src/frontend/utils/common.ts:46 wait (depth 4); src/frontend/utils/common.ts:47 <callback> (depth 5); src/frontend/utils/common.ts:48 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 4); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 6).

Effects: src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 185. Full edges/effects/conditions in JSON.

## click — event-7f0d6b8cdda82b9f8e

[code] [src/frontend/components/drawer/pages/Actions.svelte:190](../../../../../src/frontend/components/drawer/pages/Actions.svelte#L190); toggleShowGrid. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Actions.svelte:188 $activeActionTagFilter.length === 1; src/frontend/components/drawer/pages/Actions.svelte:49 $activeActionTagFilter.length !== 1.

Calls: src/frontend/components/drawer/pages/Actions.svelte:48 toggleShowGrid (depth 0); src/frontend/components/drawer/pages/Actions.svelte:55 <callback> (depth 1).

Effects: src/frontend/components/drawer/pages/Actions.svelte:55 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1038df6dc36782e0b2

[code] [src/frontend/components/drawer/pages/Actions.svelte:197](../../../../../src/frontend/components/drawer/pages/Actions.svelte#L197); newAction. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/pages/Actions.svelte:22 newAction (depth 0).

Effects: src/frontend/components/drawer/pages/Actions.svelte:23 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/pages/Actions.svelte:24 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
