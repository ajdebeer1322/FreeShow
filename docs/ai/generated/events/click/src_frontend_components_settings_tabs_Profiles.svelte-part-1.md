# click/src_frontend_components_settings_tabs_Profiles.svelte (1)

## click — event-88718e9a627ce923a7

[code] [src/frontend/components/settings/tabs/Profiles.svelte:230](../../../../../src/frontend/components/settings/tabs/Profiles.svelte#L230); (e) => updateAccess(a.id, "global", e.detail). partial.

Conditions: src/frontend/components/settings/tabs/Profiles.svelte:216 !profileId \|\| !profilesList.length.

Calls: src/frontend/components/settings/tabs/Profiles.svelte:36 updateAccess (depth 1); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:168 updateKeyData (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 4).

Effects: src/frontend/components/settings/tabs/Profiles.svelte:48 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-b3c5363ff618e54544

[code] [src/frontend/components/settings/tabs/Profiles.svelte:235](../../../../../src/frontend/components/settings/tabs/Profiles.svelte#L235); (e) => updateAccess(a.id, item.id, e.detail). partial.

Conditions: src/frontend/components/settings/tabs/Profiles.svelte:216 !profileId \|\| !profilesList.length.

Calls: src/frontend/components/settings/tabs/Profiles.svelte:36 updateAccess (depth 1); src/frontend/components/helpers/history.ts:39 history (depth 2); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 3); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 4); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 5); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 6); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 6); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:168 updateKeyData (depth 6); src/frontend/components/helpers/historyActions.ts:29 SHOWS (depth 4).

Effects: src/frontend/components/settings/tabs/Profiles.svelte:48 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:351 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/helpers/historyActions.ts:352 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:138 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 120. Full edges/effects/conditions in JSON.

## click — event-2bdaf7222736d3331a

[code] [src/frontend/components/settings/tabs/Profiles.svelte:246](../../../../../src/frontend/components/settings/tabs/Profiles.svelte#L246); editAction. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Profiles.svelte:216 !profileId \|\| !profilesList.length; src/frontend/components/settings/tabs/Profiles.svelte:245 currentAction && $actions&#91;currentAction&#93;.

Calls: src/frontend/components/settings/tabs/Profiles.svelte:210 editAction (depth 0).

Effects: src/frontend/components/settings/tabs/Profiles.svelte:211 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/tabs/Profiles.svelte:212 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
