# Decision records: src/frontend/components/output/layers/SlideContent.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-811b130039a75869

[guess] setInterval: isMic ? 100 : 300 (dynamic ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:102](../../../../src/frontend/components/output/layers/SlideContent.svelte#L102). Category: timing.

Added/traced: [d6d4b4bf](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001) on 2025-09-11; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001): “1.5.0-beta.2 (#2108) * Better Electron mirror approach * Fixed PDF chord sheet option not showing up right away * Small fixes & tweaks * Fix for snap build * Fix for snap build * U”

Later line edits: 6; latest c9f83b17. Full commit messages and lineage: JSON query data.

GitHub: [pr #2108](https://github.com/ChurchApps/FreeShow/pull/2108) (read; no item-specific matching bullet); [pr #3450](https://github.com/ChurchApps/FreeShow/pull/3450) (read; no item-specific matching bullet)

## D-timer-b042c8c4f6d462fd

[guess] setTimeout: AUTO_SIZE_MAX_WAIT (500 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:229](../../../../src/frontend/components/output/layers/SlideContent.svelte#L229). Category: timing; fork feature.

Added/traced: [379e2680](https://github.com/ajdebeer1322/FreeShow/commit/379e268046d7de3344b6fa1e7809116a7ba01856) on 2026-10-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Fork commit states: “End the auto size wait when the size is measured The output held the outgoing text for a fixed 500 ms and delayed the new text by 490 ms for every slide of an

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/379e268046d7de3344b6fa1e7809116a7ba01856): “End the auto size wait when the size is measured The output held the outgoing text for a fixed 500 ms and delayed the new text by 490 ms for every slide of an output style or scrip”

Later line edits: 0; latest 379e2680. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-timer-cf6a381999a4c4c9

[code] setTimeout: betweenClearingTransition.duration (dynamic ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:307](../../../../src/frontend/components/output/layers/SlideContent.svelte#L307). Category: timing.

Added/traced: [f9161201](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721) on 2026-02-25; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “1.5.9-beta.1 (#2912) * Reverted timeout change * Fixed stage media not centered * Fixed stage icon not centered * PPT import enhancements - Custom image svg clip - Slide gradient c”
- [code] src/frontend/components/output/layers/SlideContent.svelte:304: “// if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)”

Later line edits: 0; latest f9161201. Full commit messages and lineage: JSON query data.

GitHub: [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet); [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet)

## D-poll-interval-9bfb40909220b56c

[guess] poll-interval: 10 (10 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:312](../../../../src/frontend/components/output/layers/SlideContent.svelte#L312). Category: timing.

Added/traced: [f9161201](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721) on 2026-02-25; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “1.5.9-beta.1 (#2912) * Reverted timeout change * Fixed stage media not centered * Fixed stage icon not centered * PPT import enhancements - Custom image svg clip - Slide gradient c”

Later line edits: 0; latest f9161201. Full commit messages and lineage: JSON query data.

GitHub: [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet); [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet)

## D-poll-timeout-0363d78a143e0794

[guess] poll-timeout: betweenClearingTransition.duration (dynamic ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:312](../../../../src/frontend/components/output/layers/SlideContent.svelte#L312). Category: timing.

Added/traced: [f9161201](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721) on 2026-02-25; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “1.5.9-beta.1 (#2912) * Reverted timeout change * Fixed stage media not centered * Fixed stage icon not centered * PPT import enhancements - Custom image svg clip - Slide gradient c”

Later line edits: 0; latest f9161201. Full commit messages and lineage: JSON query data.

GitHub: [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet); [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet)

## D-delay-variable-b5ea3e940d0e3c3e

[guess] delay-variable: currentTransitionDuration * ((currentTransition?.fadeInOffset ?? 50) / 100) (dynamic ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:331](../../../../src/frontend/components/output/layers/SlideContent.svelte#L331). Category: timing.

Added/traced: [b5946b2d](https://github.com/ChurchApps/FreeShow/commit/b5946b2dafb6207a5372eec5f9943ce283e3a508) on 2026-02-11; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/b5946b2dafb6207a5372eec5f9943ce283e3a508): “1.5.7 (#2839) * Added back forceLogin - Fixed on B1Admin * Fixed clear background not working if no output screen exists * Updated languages * fix: improve split long verses with t”

Later line edits: 0; latest b5946b2d. Full commit messages and lineage: JSON query data.

GitHub: [pr #2839](https://github.com/ChurchApps/FreeShow/pull/2839) (read; no item-specific matching bullet); [pr #2839](https://github.com/ChurchApps/FreeShow/pull/2839) (read; no item-specific matching bullet)

## D-timer-5a0884eced6ca67c

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:400](../../../../src/frontend/components/output/layers/SlideContent.svelte#L400). Category: timing.

Added/traced: [c5a960bc](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b) on 2024-03-27; git log -L (earliest tracked source-line ancestor).

Code comment: “// wait for previous items to start fading out (svelte will keep them until the transition is done!)”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b): “v1.1.5 (#452) * 🚩 Updated languages * 🔍 Case insensitive search in drawer - OpenLyrics import working for files with xml instructions - Next slide text stage preview not showing”
- [code] src/frontend/components/output/layers/SlideContent.svelte:399: “// wait for previous items to start fading out (svelte will keep them until the transition is done!)”

Later line edits: 3; latest b3951afd. Full commit messages and lineage: JSON query data.

GitHub: [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet); [pr #775](https://github.com/ChurchApps/FreeShow/pull/775) (read; no item-specific matching bullet)

## D-timer-24d1dc584a7d8c38

[code] setTimeout: waitToShow (dynamic ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:415](../../../../src/frontend/components/output/layers/SlideContent.svelte#L415). Category: timing.

Added/traced: [c5a960bc](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b) on 2024-03-27; git log -L (earliest tracked source-line ancestor).

Code comment: “// wait until half transition duration of previous items have passed as it looks better visually”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b): “v1.1.5 (#452) * 🚩 Updated languages * 🔍 Case insensitive search in drawer - OpenLyrics import working for files with xml instructions - Next slide text stage preview not showing”
- [code] src/frontend/components/output/layers/SlideContent.svelte:414: “// wait until half transition duration of previous items have passed as it looks better visually”

Later line edits: 4; latest 48650ae1. Full commit messages and lineage: JSON query data.

GitHub: [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet); [pr #789](https://github.com/ChurchApps/FreeShow/pull/789) (read; no item-specific matching bullet)

## D-timer-7e20e324eb39abdb

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:421](../../../../src/frontend/components/output/layers/SlideContent.svelte#L421). Category: timing.

Added/traced: [c5a960bc](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b) on 2024-03-27; git log -L (earliest tracked source-line ancestor).

Code comment: “// wait for between to set in transition”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b): “v1.1.5 (#452) * 🚩 Updated languages * 🔍 Case insensitive search in drawer - OpenLyrics import working for files with xml instructions - Next slide text stage preview not showing”
- [code] src/frontend/components/output/layers/SlideContent.svelte:420: “// wait for between to set in transition”

Later line edits: 4; latest 48650ae1. Full commit messages and lineage: JSON query data.

GitHub: [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet); [pr #789](https://github.com/ChurchApps/FreeShow/pull/789) (read; no item-specific matching bullet)

## D-timer-02741a0b4a6cecaf

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:430](../../../../src/frontend/components/output/layers/SlideContent.svelte#L430). Category: timing; fork feature.

Added/traced: [379e2680](https://github.com/ajdebeer1322/FreeShow/commit/379e268046d7de3344b6fa1e7809116a7ba01856) on 2026-10-10; git log -L (earliest tracked source-line ancestor).

Code comment: “// wait for between to update out transition”

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/379e268046d7de3344b6fa1e7809116a7ba01856): “End the auto size wait when the size is measured The output held the outgoing text for a fixed 500 ms and delayed the new text by 490 ms for every slide of an output style or scrip”
- [code] src/frontend/components/output/layers/SlideContent.svelte:429: “// wait for between to update out transition”

Later line edits: 0; latest 379e2680. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-timer-15659966c137e66b

[guess] setTimeout: omitted (0 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:450](../../../../src/frontend/components/output/layers/SlideContent.svelte#L450). Category: timing.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing”

Later line edits: 0; latest 5c94f232. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet)

## D-timer-9f0e2d3a775127fb

[guess] setInterval: 15 (15 ms)

Location: [src/frontend/components/output/layers/SlideContent.svelte:453](../../../../src/frontend/components/output/layers/SlideContent.svelte#L453). Category: timing.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing”

Later line edits: 0; latest 5c94f232. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet)

## D-workaround-f5143d8681582f2a

[code] // if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)

Location: [src/frontend/components/output/layers/SlideContent.svelte:304](../../../../src/frontend/components/output/layers/SlideContent.svelte#L304). Category: workaround.

Added/traced: [f9161201](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721) on 2026-02-25; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “1.5.9-beta.1 (#2912) * Reverted timeout change * Fixed stage media not centered * Fixed stage icon not centered * PPT import enhancements - Custom image svg clip - Slide gradient c”
- [code] src/frontend/components/output/layers/SlideContent.svelte:304: “// if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “* Fixed slide text being incorrect if changing to empty slide and to another slide while transitioning”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/f9161201693820a1ff0bdf79f1c283df674de721): “* Fixed slide text being incorrect if changing to empty slide and to another slide while transitioning”

Later line edits: 0; latest f9161201. Full commit messages and lineage: JSON query data.

GitHub: [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet); [pr #2912](https://github.com/ChurchApps/FreeShow/pull/2912) (read; no item-specific matching bullet)

## D-workaround-255a8ffcc83f0cdc

[guess] // timelineItems = new Set<Item&#91;&#93;>() // WIP reset eventually?

Location: [src/frontend/components/output/layers/SlideContent.svelte:449](../../../../src/frontend/components/output/layers/SlideContent.svelte#L449). Category: workaround.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing”

Later line edits: 0; latest 5c94f232. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet)

## D-workaround-c3e4f430a922e675

[guess] // WIP use actual slide timeline pos when available?

Location: [src/frontend/components/output/layers/SlideContent.svelte:455](../../../../src/frontend/components/output/layers/SlideContent.svelte#L455). Category: workaround.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing”

Later line edits: 0; latest 5c94f232. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet)

## D-hotspot-4805edbf17306bc5

[guess] Module hotspot: src/frontend/components/output/layers/SlideContent.svelte

Location: [src/frontend/components/output/layers/SlideContent.svelte:37](../../../../src/frontend/components/output/layers/SlideContent.svelte#L37). Category: hotspot.

Added/traced: [d6d4b4bf](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001) on 2025-09-11; git log -L (earliest tracked source-line ancestor).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001): “1.5.0-beta.2 (#2108) * Better Electron mirror approach * Fixed PDF chord sheet option not showing up right away * Small fixes & tweaks * Fix for snap build * Fix for snap build * U”

Later line edits: 1; latest fb6390bb. Full commit messages and lineage: JSON query data.

GitHub: [pr #2108](https://github.com/ChurchApps/FreeShow/pull/2108) (read; no item-specific matching bullet); [pr #2804](https://github.com/ChurchApps/FreeShow/pull/2804) (read; no item-specific matching bullet)
