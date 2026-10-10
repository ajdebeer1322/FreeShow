# Decision records: src/frontend/components/timeline/TimelinePlayback.ts

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-a34ef49c0d3e1d70

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/timeline/TimelinePlayback.ts:92](../../../../src/frontend/components/timeline/TimelinePlayback.ts#L92). Category: timing.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -L (earliest tracked source-line ancestor).

Code comment: “// opening a slide timeline will reset the playing timeline because of this”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing”
- [code] src/frontend/components/timeline/TimelinePlayback.ts:93: “// opening a slide timeline will reset the playing timeline because of this”

Later line edits: 0; latest 5c94f232. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet)

## D-workaround-35364f4fbb849c4d

[guess] // WIP set max duration to audio length if any (and no futher actions)

Location: [src/frontend/components/timeline/TimelinePlayback.ts:226](../../../../src/frontend/components/timeline/TimelinePlayback.ts#L226). Category: workaround.

Added/traced: [f191003e](https://github.com/ChurchApps/FreeShow/commit/f191003e155e0e43fa4436584ed26fb9d8502a16) on 2026-01-29; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f191003e155e0e43fa4436584ed26fb9d8502a16): “1.5.7-beta.1 (#2755) * Catch bad file names in sync * Updated languages * Fixed "Add folder" missing #2701 * Fixed Scripture freeze #2707 * Fixed Scripture freeze #2707 * Notes lin”

Later line edits: 0; latest f191003e. Full commit messages and lineage: JSON query data.

GitHub: [pr #2755](https://github.com/ChurchApps/FreeShow/pull/2755) (read; no item-specific matching bullet); [pr #2755](https://github.com/ChurchApps/FreeShow/pull/2755) (read; no item-specific matching bullet)
