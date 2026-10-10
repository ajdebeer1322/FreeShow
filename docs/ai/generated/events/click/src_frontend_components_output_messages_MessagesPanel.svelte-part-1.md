# click/src_frontend_components_output_messages_MessagesPanel.svelte (1)

## click — event-0f32beed973b774552

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:135](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L135); () => messagesPanelOpen.set(!$messagesPanelOpen). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/output/messages/MessagesPanel.svelte:135 store-write src/frontend/stores.ts#messagesPanelOpen .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-eeb1740f0b36328e31

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:137](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L137); create. partial.

Conditions: src/frontend/components/output/messages/MessagesPanel.svelte:65 profile.global === "read" \|\| profile.global === "none" \|\| profile&#91;""&#93; === "read" \|\| profile&#91;""&#93; === "none".

Calls: src/frontend/components/output/messages/MessagesPanel.svelte:64 create (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/output/messages/MessagesPanel.svelte:67 history history UPDATE; src/frontend/components/output/messages/MessagesPanel.svelte:68 store-write src/frontend/stores.ts#activeMessage ; src/frontend/components/output/messages/MessagesPanel.svelte:69 store-write src/frontend/stores.ts#messagesPanelOpen ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## click — event-099d317e579a780e62

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:142](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L142); () => hideMessage(message.id). partial.

Conditions: src/frontend/components/output/messages/MessagesPanel.svelte:139 $messagesPanelOpen.

Calls: src/frontend/components/helpers/messageOutput.ts:23 hideMessage (depth 1); src/frontend/components/helpers/messageOutput.ts:26 <callback> (depth 2); src/frontend/components/helpers/output.ts:158 setOutput (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5); src/frontend/components/helpers/shows.ts:397 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 4); src/frontend/components/helpers/shows.ts:375 get (depth 5); src/frontend/components/helpers/shows.ts:379 <callback> (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 5); src/frontend/components/helpers/shows.ts:478 <callback> (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 5); src/frontend/components/helpers/shows.ts:495 <callback> (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 5).

Effects: src/frontend/components/helpers/messageOutput.ts:30 presentation setOutput ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/utils/analytics.ts:26 network fetch ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 114. Full edges/effects/conditions in JSON.

## click — event-ee560a1ea400647739

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:150](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L150); () => (editing = !editing). resolved-within-bound.

Conditions: src/frontend/components/output/messages/MessagesPanel.svelte:139 $messagesPanelOpen; src/frontend/components/output/messages/MessagesPanel.svelte:144 definitions.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f5cbd6f79e5e961aaa

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:157](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L157); () => (previewOpen = !previewOpen). resolved-within-bound.

Conditions: src/frontend/components/output/messages/MessagesPanel.svelte:139 $messagesPanelOpen; src/frontend/components/output/messages/MessagesPanel.svelte:144 definitions.length; src/frontend/components/output/messages/MessagesPanel.svelte:152 !editing.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bde5ba08c354d9f9ba

[code] [src/frontend/components/output/messages/MessagesPanel.svelte:158](../../../../../src/frontend/components/output/messages/MessagesPanel.svelte#L158); editDesign. resolved-within-bound.

Conditions: src/frontend/components/output/messages/MessagesPanel.svelte:139 $messagesPanelOpen; src/frontend/components/output/messages/MessagesPanel.svelte:144 definitions.length; src/frontend/components/output/messages/MessagesPanel.svelte:152 !editing.

Calls: src/frontend/components/output/messages/MessagesPanel.svelte:102 editDesign (depth 0).

Effects: src/frontend/components/output/messages/MessagesPanel.svelte:103 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/output/messages/MessagesPanel.svelte:104 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
