# keyboard/src_frontend_components_timeline_Timeline.svelte (1)

## dynamic — event-0ee21b0a7219873eb9

[code] [src/frontend/components/timeline/Timeline.svelte:700](../../../../../src/frontend/components/timeline/Timeline.svelte#L700); keydown. partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:599 &#91;"INPUT", "TEXTAREA"&#93;.includes(target.tagName) \|\| target.isContentEditable; src/frontend/components/timeline/Timeline.svelte:601 e.key === "ArrowLeft" \|\| e.key === "ArrowRight"; src/frontend/components/timeline/Timeline.svelte:606 e.key === "Delete" \|\| e.key === "Backspace"; src/frontend/components/timeline/Timeline.svelte:612 e.key !== " " \|\| e.repeat; src/frontend/components/timeline/Timeline.svelte:615 active ? active !== player : type === "show" && $special.projectTimelineActive; src/frontend/components/timeline/Timeline.svelte:618 isPlaying.

Calls: src/frontend/components/timeline/Timeline.svelte:597 keydown (depth 0); src/frontend/components/timeline/Timeline.svelte:625 deleteSelectedNodes (depth 1); src/frontend/components/timeline/TimelineActions.ts:209 deleteActions (depth 2); src/frontend/components/timeline/TimelineActions.ts:210 <callback> (depth 3); src/frontend/components/timeline/TimelineActions.ts:192 getActionIndex (depth 4); src/frontend/components/timeline/TimelineActions.ts:193 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:111 setChanged (depth 3); src/frontend/utils/common.ts:254 hasNewerUpdate (depth 4); src/frontend/utils/common.ts:261 <callback> (depth 5); src/frontend/utils/common.ts:263 <callback> (depth 6); src/frontend/components/timeline/TimelineActions.ts:120 saveState (depth 4); src/frontend/components/timeline/TimelineActions.ts:129 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/timeline/TimelineActions.ts:140 <callback> (depth 5); src/frontend/components/timeline/TimelineActions.ts:152 <callback> (depth 5); src/frontend/components/timeline/TimelinePlayback.ts:25 getActiveTimelinePlayback (depth 1).

Effects: src/frontend/components/timeline/TimelineActions.ts:129 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/timeline/TimelineActions.ts:140 store-write src/frontend/stores.ts#projects ; src/frontend/components/timeline/TimelineActions.ts:152 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/timeline/TimelinePlayback.ts:134 store-write src/frontend/stores.ts#isTimelinePlaying ; src/frontend/components/timeline/TimelinePlayback.ts:136 ipc sendMain(Main.TIMECODE_STOP) ; src/frontend/audio/audioPlayer.ts:666 store-write src/frontend/stores.ts#playingAudio ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/audio/audioFading.ts:216 store-write src/frontend/stores.ts#isFadingOut ; src/frontend/components/helpers/setShow.ts:235 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/timeline/TimelinePlayback.ts:115 store-write src/frontend/stores.ts#isTimelinePlaying ; src/frontend/components/timeline/TimelinePlayback.ts:154 store-write src/frontend/stores.ts#isTimelinePlaying ; src/frontend/components/timeline/TimelinePlayback.ts:156 ipc sendMain(Main.TIMECODE_STOP) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 24; depth cutoffs: 131. Full edges/effects/conditions in JSON.

## dynamic — event-232a9dc7ff0ea0fdfd

[code] [src/frontend/components/timeline/Timeline.svelte:776](../../../../../src/frontend/components/timeline/Timeline.svelte#L776); handleTimeKeydown. resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:575 e.key === "Enter".

Calls: src/frontend/components/timeline/Timeline.svelte:573 handleTimeKeydown (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
