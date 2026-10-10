# click/src_frontend_components_show_VideoShow.svelte (1)

## click — event-e5de9b027193b411b0

[code] [src/frontend/components/show/VideoShow.svelte:375](../../../../../src/frontend/components/show/VideoShow.svelte#L375); (e) => playVideo(e.ctrlKey \|\| e.metaKey ? videoTime : 0). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/show/VideoShow.svelte:185 playVideo (depth 1); src/frontend/components/output/clear.ts:100 clearSlide (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/output/clear.ts:105 <callback> (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5).

Effects: src/frontend/components/show/VideoShow.svelte:190 presentation clearSlide ; src/frontend/components/show/VideoShow.svelte:204 presentation setOutput ; src/frontend/components/output/clear.ts:124 presentation setOutput ; src/frontend/components/output/clear.ts:116 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/output/clear.ts:162 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 246. Full edges/effects/conditions in JSON.

## click — event-aadf48a250dbe6740c

[code] [src/frontend/components/show/VideoShow.svelte:403](../../../../../src/frontend/components/show/VideoShow.svelte#L403); toggleLoop. resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:400 !$focusMode; src/frontend/components/show/VideoShow.svelte:401 !playingInOutput && !manageSubtitles && !timeMarkersEnabled.

Calls: src/frontend/components/show/VideoShow.svelte:207 toggleLoop (depth 0); src/frontend/components/show/VideoShow.svelte:217 saveToProject (depth 1); src/frontend/components/show/VideoShow.svelte:220 <callback> (depth 2).

Effects: src/frontend/components/show/VideoShow.svelte:220 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/VideoShow.svelte:221 store-write src/frontend/stores.ts#activeProject .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-263018cb17938981d4

[code] [src/frontend/components/show/VideoShow.svelte:409](../../../../../src/frontend/components/show/VideoShow.svelte#L409); toggleMute. resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:400 !$focusMode; src/frontend/components/show/VideoShow.svelte:401 !playingInOutput && !manageSubtitles && !timeMarkersEnabled.

Calls: src/frontend/components/show/VideoShow.svelte:211 toggleMute (depth 0); src/frontend/components/show/VideoShow.svelte:217 saveToProject (depth 1); src/frontend/components/show/VideoShow.svelte:220 <callback> (depth 2).

Effects: src/frontend/components/show/VideoShow.svelte:220 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/VideoShow.svelte:221 store-write src/frontend/stores.ts#activeProject .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-dc416e2da5a9969796

[code] [src/frontend/components/show/VideoShow.svelte:420](../../../../../src/frontend/components/show/VideoShow.svelte#L420); (e) => setActiveSubtitle(e, track.lang). resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:400 !$focusMode; src/frontend/components/show/VideoShow.svelte:415 playingInOutput ? tracks.length : manageSubtitles; src/frontend/components/show/VideoShow.svelte:417 tracks.length.

Calls: src/frontend/components/show/VideoShow.svelte:272 setActiveSubtitle (depth 1); src/frontend/components/show/VideoShow.svelte:275 <callback> (depth 2).

Effects: src/frontend/components/show/VideoShow.svelte:275 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5756df5c7c49394201

[code] [src/frontend/components/show/VideoShow.svelte:454](../../../../../src/frontend/components/show/VideoShow.svelte#L454); () => { if (!edit) { playVideo(marker.time \|\| 0) } }. partial.

Conditions: src/frontend/components/show/VideoShow.svelte:400 !$focusMode; src/frontend/components/show/VideoShow.svelte:445 playingInOutput ? $videoMarkers&#91;showId&#93;?.length : timeMarkersEnabled; src/frontend/components/show/VideoShow.svelte:447 $videoMarkers&#91;showId&#93;?.length.

Calls: src/frontend/components/show/VideoShow.svelte:185 playVideo (depth 1); src/frontend/components/output/clear.ts:100 clearSlide (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/output/clear.ts:105 <callback> (depth 3); src/frontend/components/helpers/shows.ts:389 ref (depth 4); src/frontend/components/helpers/shows.ts:394 <callback> (depth 5).

Effects: src/frontend/components/show/VideoShow.svelte:190 presentation clearSlide ; src/frontend/components/show/VideoShow.svelte:204 presentation setOutput ; src/frontend/components/output/clear.ts:124 presentation setOutput ; src/frontend/components/output/clear.ts:116 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/output/clear.ts:162 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 246. Full edges/effects/conditions in JSON.

## click — event-8cf8413a9903183076

[code] [src/frontend/components/show/VideoShow.svelte:472](../../../../../src/frontend/components/show/VideoShow.svelte#L472); addMarker. resolved-within-bound.

Conditions: src/frontend/components/show/VideoShow.svelte:400 !$focusMode; src/frontend/components/show/VideoShow.svelte:445 playingInOutput ? $videoMarkers&#91;showId&#93;?.length : timeMarkersEnabled; src/frontend/components/show/VideoShow.svelte:469 !playingInOutput; src/frontend/components/show/VideoShow.svelte:295 a&#91;showId&#93;?.find((a) => a.time === newMarker.time); src/frontend/components/show/VideoShow.svelte:297 !a&#91;showId&#93;.

Calls: src/frontend/components/show/VideoShow.svelte:291 addMarker (depth 0); src/frontend/components/show/VideoShow.svelte:292 <callback> (depth 1); src/frontend/components/show/VideoShow.svelte:295 <callback> (depth 2); src/frontend/components/show/VideoShow.svelte:301 <callback> (depth 2); src/frontend/components/show/VideoShow.svelte:303 <callback> (depth 2).

Effects: src/frontend/components/show/VideoShow.svelte:292 store-write src/frontend/stores.ts#videoMarkers ; src/frontend/components/show/VideoShow.svelte:304 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
