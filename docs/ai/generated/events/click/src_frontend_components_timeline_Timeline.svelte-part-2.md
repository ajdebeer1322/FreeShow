# click/src_frontend_components_timeline_Timeline.svelte (2)

## click — event-7a8f5bb8f051f955fa

[code] [src/frontend/components/timeline/Timeline.svelte:917](../../../../../src/frontend/components/timeline/Timeline.svelte#L917); () => (isPlaying ? player.pause() : player.play()). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:914 easingActive === null \|\| type !== "slide"; src/frontend/components/timeline/Timeline.svelte:916 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d5d1b6006e4b754d46

[code] [src/frontend/components/timeline/Timeline.svelte:921](../../../../../src/frontend/components/timeline/Timeline.svelte#L921); () => (isPlaying ? player.pause() : player.play()). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:914 easingActive === null \|\| type !== "slide"; src/frontend/components/timeline/Timeline.svelte:916 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4bd4db5c19414692a0

[code] [src/frontend/components/timeline/Timeline.svelte:925](../../../../../src/frontend/components/timeline/Timeline.svelte#L925); () => player.stop(). partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:914 easingActive === null \|\| type !== "slide"; src/frontend/components/timeline/Timeline.svelte:916 disablePlayback.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6bb1c2abe0cd384065

[code] [src/frontend/components/timeline/Timeline.svelte:933](../../../../../src/frontend/components/timeline/Timeline.svelte#L933); toggleRecording. partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:914 easingActive === null \|\| type !== "slide"; src/frontend/components/timeline/Timeline.svelte:930 type === "show"; src/frontend/components/timeline/Timeline.svelte:636 type !== "show"; src/frontend/components/timeline/Timeline.svelte:641 actions.find((a) => a.type === sequence.type && Math.abs(time - a.time) < 100 && JSON.stringify(a.data) === JSON.stringify(sequence.data)); src/frontend/components/timeline/Timeline.svelte:654 !isPlaying.

Calls: src/frontend/components/timeline/Timeline.svelte:635 toggleRecording (depth 0); src/frontend/components/timeline/ShowTimeline.ts:16 toggleRecording (depth 1); src/frontend/components/timeline/ShowTimeline.ts:52 stopRecording (depth 2); src/frontend/components/timeline/ShowTimeline.ts:123 clearOutputListener (depth 3); src/frontend/components/timeline/ShowTimeline.ts:61 isRecordingActive (depth 2); src/frontend/components/helpers/shows.ts:27 get (depth 3); src/frontend/components/helpers/shows.ts:18 _show (depth 3); src/frontend/components/helpers/shows.ts:38 set (depth 4); src/frontend/components/helpers/shows.ts:40 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/shows.ts:10 touchShowModified (depth 6); src/frontend/components/helpers/shows.ts:59 remove (depth 4); src/frontend/components/helpers/shows.ts:61 <callback> (depth 5); src/frontend/components/helpers/shows.ts:74 slides (depth 4); src/frontend/components/helpers/shows.ts:76 get (depth 5); src/frontend/components/helpers/shows.ts:80 <callback> (depth 6).

Effects: src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:688 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:708 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:722 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/timeline/ShowTimeline.ts:105 store-write src/frontend/stores.ts#timelineRecordingAction ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 27; depth cutoffs: 82. Full edges/effects/conditions in JSON.

## click — event-f4fcfed60167de267e

[code] [src/frontend/components/timeline/Timeline.svelte:939](../../../../../src/frontend/components/timeline/Timeline.svelte#L939); () => (shouldLoop = timeline.toggleLoop()). partial.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:914 easingActive === null \|\| type !== "slide"; src/frontend/components/timeline/Timeline.svelte:930 type === "show"; src/frontend/components/timeline/Timeline.svelte:936 type === "slide".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e73e9b6afd80643dc4

[code] [src/frontend/components/timeline/Timeline.svelte:952](../../../../../src/frontend/components/timeline/Timeline.svelte#L952); () => activePopup.set("timecode"). resolved-within-bound.

Conditions: src/frontend/components/timeline/Timeline.svelte:703 isClosed; src/frontend/components/timeline/Timeline.svelte:950 type === "project".

Calls: no function target resolved.

Effects: src/frontend/components/timeline/Timeline.svelte:952 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
