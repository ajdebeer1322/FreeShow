# click/src_frontend_components_show_Section.svelte (1)

## click — event-574a917ec2a5a6677f

[code] [src/frontend/components/show/Section.svelte:123](../../../../../src/frontend/components/show/Section.svelte#L123); () => runAction(currentAction, { source: "section" }). partial.

Conditions: src/frontend/components/show/Section.svelte:121 currentAction && !settingsOpened.

Calls: src/frontend/components/actions/actions.ts:33 runAction (depth 1); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/actions/actions.ts:49 <callback> (depth 2); src/frontend/components/actions/actions.ts:74 runTrigger (depth 2); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 3); src/frontend/utils/common.ts:46 wait (depth 3); src/frontend/utils/common.ts:47 <callback> (depth 4); src/frontend/utils/common.ts:48 <callback> (depth 5); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 3); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 4); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 5); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5).

Effects: src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 44. Full edges/effects/conditions in JSON.

## click — event-784431f2d8779c4e9f

[code] [src/frontend/components/show/Section.svelte:131](../../../../../src/frontend/components/show/Section.svelte#L131); () => (settingsOpened = !settingsOpened). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
