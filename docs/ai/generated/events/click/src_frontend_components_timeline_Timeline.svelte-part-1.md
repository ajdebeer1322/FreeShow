# click/src_frontend_components_timeline_Timeline.svelte (1)

## click — event-73adb83f4acf9419b7

[code] [src/frontend/components/timeline/Timeline.svelte:706](../../../../../src/frontend/components/timeline/Timeline.svelte#L706); () => (isPlaying ? player.pause() : player.play()). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:705 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d7a46d75d3ff941a90

[code] [src/frontend/components/timeline/Timeline.svelte:710](../../../../../src/frontend/components/timeline/Timeline.svelte#L710); () => (isPlaying ? player.pause() : player.play()). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:705 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-447fc75c3bba718097

[code] [src/frontend/components/timeline/Timeline.svelte:714](../../../../../src/frontend/components/timeline/Timeline.svelte#L714); () => player.stop(). partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:705 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b21a0753201aa07321

[code] [src/frontend/components/timeline/Timeline.svelte:720](../../../../../src/frontend/components/timeline/Timeline.svelte#L720); toggleRecording. partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:719 (type === "show" && !actions.length) \|\| isRecording; src/frontend/components/timeline/Timeline.svelte:636 type !== "show"; src/frontend/components/timeline/Timeline.svelte:641 actions.find((a) => a.type === sequence.type && Math.abs(time - a.time) < 100 && JSON.stringify(a.data) === JSON.stringify(sequence.data)); src/frontend/components/timeline/Timeline.svelte:654 !isPlaying.

Calls: src/frontend/components/timeline/Timeline.svelte:635 toggleRecording (depth 0); src/frontend/components/timeline/ShowTimeline.ts:16 toggleRecording (depth 1); src/frontend/components/timeline/ShowTimeline.ts:52 stopRecording (depth 2); src/frontend/components/timeline/ShowTimeline.ts:123 clearOutputListener (depth 3); src/frontend/components/timeline/ShowTimeline.ts:61 isRecordingActive (depth 2); src/frontend/components/helpers/shows.ts:27 get (depth 3); src/frontend/components/helpers/shows.ts:18 _show (depth 3); src/frontend/components/helpers/shows.ts:38 set (depth 4); src/frontend/components/helpers/shows.ts:40 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 6); src/frontend/components/helpers/shows.ts:59 remove (depth 4); src/frontend/components/helpers/shows.ts:61 <callback> (depth 5); src/frontend/components/helpers/shows.ts:74 slides (depth 4); src/frontend/components/helpers/shows.ts:76 get (depth 5); src/frontend/components/helpers/shows.ts:80 <callback> (depth 6).

Effects: src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:722 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/timeline/ShowTimeline.ts:105 store-write src/frontend/stores.ts#timelineRecordingAction ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 27; depth cutoffs: 82. Full edges/effects/conditions in JSON.

## click — event-842d285d2290819bea

[code] [src/frontend/components/timeline/Timeline.svelte:760](../../../../../src/frontend/components/timeline/Timeline.svelte#L760); () => resized.update((a) => ({ ...a, &#91;(type === "project" ? "project_" : type === "slide" ? "slide_" : "") + "timeline"&#93;: DEFAULT_WIDTH })). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed.

Calls: no function target resolved.

Effects: src/frontend/components/timeline/Timeline.svelte:760 store-write src/frontend/stores.ts#resized .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ddb36a6a8513ac878d

[code] [src/frontend/components/timeline/Timeline.svelte:812](../../../../../src/frontend/components/timeline/Timeline.svelte#L812); () => (easingActive = easingActive === null \|\| easingActive !== i ? i : null). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:805 type === "slide".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
