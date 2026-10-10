# automatic/src_frontend_components_show_Slides.svelte (1)

## setTimeout — event-d669538497a899cca0

[code] [src/frontend/components/show/Slides.svelte:42](../../../../../src/frontend/components/show/Slides.svelte#L42); () => (hasMounted = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/Slides.svelte:42 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a0521cf75c8d661d62

[code] [src/frontend/components/show/Slides.svelte:86](../../../../../src/frontend/components/show/Slides.svelte#L86); () => updateOffset({ $outputs, showId }). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/Slides.svelte:86 <callback> (depth 0); src/frontend/components/show/Slides.svelte:87 updateOffset (depth 1); src/frontend/utils/common.ts:254 hasNewerUpdate (depth 2); src/frontend/utils/common.ts:261 <callback> (depth 3); src/frontend/utils/common.ts:263 <callback> (depth 4); src/frontend/components/helpers/slideLinks.ts:63 getSlideElement (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1377d5fd801c209396

[code] [src/frontend/components/show/Slides.svelte:123](../../../../../src/frontend/components/show/Slides.svelte#L123); () => { // get line let outputId = getActiveOutputs($outputs, true, true, true)&#91;0&#93; let currentOutput = $outputs&#91;outputId&#93; \|\| {} let outSlide = currentOutput.out?.slide \|\| null let. partial.

Conditions: src/frontend/components/show/Slides.svelte:131 outSlide && outSlide.id === showId && outSlide.layout === activeLayout && outSlide.index === index && amountOfLinesToShow > 0; src/frontend/components/show/Slides.svelte:136 line >= slideLines; src/frontend/components/show/Slides.svelte:143 outSlide && outSlide.id === showId && outSlide.layout === activeLayout && outSlide.index === index && clickRevealItems.length; src/frontend/components/show/Slides.svelte:151 outSlide && outSlide.id === showId && outSlide.layout === activeLayout && outSlide.index === index && linesRevealItems.length && isRevealed; src/frontend/components/show/Slides.svelte:156 revealCount > maxLines; src/frontend/components/show/Slides.svelte:163 activeSlides&#91;index&#93;.

Calls: src/frontend/components/show/Slides.svelte:123 <callback> (depth 0); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 1); src/frontend/components/helpers/array.ts:42 sortByName (depth 2); src/frontend/components/helpers/array.ts:45 <callback> (depth 3); src/frontend/components/helpers/array.ts:46 <callback> (depth 3); src/frontend/components/helpers/array.ts:137 keysToID (depth 2); src/frontend/components/helpers/array.ts:139 <callback> (depth 3); src/frontend/components/helpers/output.ts:677 <callback> (depth 2); src/frontend/components/helpers/output.ts:679 <callback> (depth 2); src/frontend/components/helpers/output.ts:679 <callback> (depth 2); src/frontend/components/helpers/output.ts:681 <callback> (depth 2); src/frontend/utils/common.ts:18 isMainWindow (depth 2); src/frontend/components/helpers/output.ts:1102 addOutput (depth 2); src/frontend/components/helpers/output.ts:1106 <callback> (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/helpers/output.ts:1116 <callback> (depth 4).

Effects: src/frontend/components/show/Slides.svelte:159 presentation setOutput ; src/frontend/components/show/Slides.svelte:160 presentation updateOut ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 80; depth cutoffs: 223. Full edges/effects/conditions in JSON.

## setTimeout — event-2875c7f4fec58e8eeb

[code] [src/frontend/components/show/Slides.svelte:175](../../../../../src/frontend/components/show/Slides.svelte#L175); () => { nextScrollTimeout = null disableAutoScroll = false }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/Slides.svelte:175 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bf65d40885b4876ea1

[code] [src/frontend/components/show/Slides.svelte:209](../../../../../src/frontend/components/show/Slides.svelte#L209); updateTemplate. partial.

Conditions: src/frontend/components/show/Slides.svelte:209 templateSignature && templateSignature !== previousTemplateSignature; src/frontend/components/show/Slides.svelte:199 showId && loaded; src/frontend/components/show/Slides.svelte:216 !loaded; src/frontend/components/show/Slides.svelte:223 categoryTemplate && $templates&#91;categoryTemplate&#93;.

Calls: src/frontend/components/show/Slides.svelte:215 updateTemplate (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/show/Slides.svelte:228 history history TEMPLATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## setTimeout — event-7c6e4aff4871f4109e

[code] [src/frontend/components/show/Slides.svelte:214](../../../../../src/frontend/components/show/Slides.svelte#L214); updateTemplate. partial.

Conditions: src/frontend/components/show/Slides.svelte:214 showId && loaded; src/frontend/components/show/Slides.svelte:216 !loaded; src/frontend/components/show/Slides.svelte:223 categoryTemplate && $templates&#91;categoryTemplate&#93;.

Calls: src/frontend/components/show/Slides.svelte:215 updateTemplate (depth 0); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/components/actions/actions.ts:157 customActionActivation (depth 5); src/frontend/components/actions/actions.ts:159 <callback> (depth 6); src/frontend/utils/common.ts:26 newToast (depth 6); src/frontend/components/helpers/historyActions.ts:67 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:85 <callback> (depth 5); src/frontend/components/helpers/historyActions.ts:111 revertOrDeleteElement (depth 6); src/frontend/components/helpers/historyActions.ts:142 updateElement (depth 6); src/frontend/components/helpers/historyActions.ts:93 <callback> (depth 5); src/frontend/components/helpers/output.ts:520 updateActiveSceneOutputs (depth 5).

Effects: src/frontend/components/show/Slides.svelte:228 history history TEMPLATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 8; depth cutoffs: 121. Full edges/effects/conditions in JSON.
