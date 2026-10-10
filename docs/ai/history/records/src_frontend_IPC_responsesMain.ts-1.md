# Decision records: src/frontend/IPC/responsesMain.ts

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-701dcf5794003745

[guess] setTimeout: 2000 (2000 ms)

Location: [src/frontend/IPC/responsesMain.ts:255](../../../../src/frontend/IPC/responsesMain.ts#L255). Category: timing.

Added/traced: [1f661639](https://github.com/ChurchApps/FreeShow/commit/1f661639ea0d5eaced52d2b8772183358310ad7f) on 2025-03-27; git log -L (earliest tracked source-line ancestor).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/1f661639ea0d5eaced52d2b8772183358310ad7f): “1.4.0-beta.1 (#1419) * 🔊 Sound effects player - Set audio type music/effect - Audio editor waveform preview - Set individual playlist volume - Add more actions if wait item is add”

Later line edits: 3; latest 7e8c959b. Full commit messages and lineage: JSON query data.

GitHub: [pr #1419](https://github.com/ChurchApps/FreeShow/pull/1419) (read; no item-specific matching bullet); [pr #2534](https://github.com/ChurchApps/FreeShow/pull/2534) (read; no item-specific matching bullet)

## D-timer-fd3bd1d50125472f

[guess] setTimeout: data.status === "error" ? 7000 : 3000 (dynamic ms)

Location: [src/frontend/IPC/responsesMain.ts:279](../../../../src/frontend/IPC/responsesMain.ts#L279). Category: timing.

Added/traced: [5c94f232](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055) on 2026-03-26; git log -L (earliest tracked source-line ancestor).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/5c94f2329fff57a999237a72a3c21eb7302ec055): “1.6.0-beta.2 (#3090) * Updated languages * Better media item cropping #2856 * Corrected beta changelog #3015 * Item resize works better when rotated #2999 * Refactor chord parsing ”

Later line edits: 1; latest 7221d271. Full commit messages and lineage: JSON query data.

GitHub: [pr #3090](https://github.com/ChurchApps/FreeShow/pull/3090) (read; no item-specific matching bullet); [pr #3147](https://github.com/ChurchApps/FreeShow/pull/3147) (read; no item-specific matching bullet)

## D-timer-c50dcc3732c60451

[guess] setTimeout: 1000 (1000 ms)

Location: [src/frontend/IPC/responsesMain.ts:354](../../../../src/frontend/IPC/responsesMain.ts#L354). Category: timing.

Added/traced: [1ed8ffa3](https://github.com/ChurchApps/FreeShow/commit/1ed8ffa3dd177d68ba1efe61d943b7baa7bd9027) on 2026-10-02; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/1ed8ffa3dd177d68ba1efe61d943b7baa7bd9027): “1.6.6-beta.4 (#3813) * Fix image items staying invisible with an item transition (#3789) * Canva allow subfolders #3796 * Open scripture location from content search #3799 * Fixed ”

Later line edits: 0; latest 1ed8ffa3. Full commit messages and lineage: JSON query data.

GitHub: [pr #3813](https://github.com/ChurchApps/FreeShow/pull/3813) (read; no item-specific matching bullet); [pr #3813](https://github.com/ChurchApps/FreeShow/pull/3813) (read; no item-specific matching bullet)

## D-hotspot-e35a1a0f8f77831a

[guess] Module hotspot: src/frontend/IPC/responsesMain.ts

Location: [src/frontend/IPC/responsesMain.ts:375](../../../../src/frontend/IPC/responsesMain.ts#L375). Category: hotspot.

Added/traced: [79b5157d](https://github.com/ChurchApps/FreeShow/commit/79b5157d174c4764616b347e4365ce68d062bcf3) on 2026-04-16; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/79b5157d174c4764616b347e4365ce68d062bcf3): “1.6.0 (#3169) * Increase scroll duration #3148 * Fixes * Updated json-bible * Better YouTube URL parsing #3151 * Fixed selection issues #3157 * Fixing errors * Option to swap scrip”

Later line edits: 0; latest 79b5157d. Full commit messages and lineage: JSON query data.

GitHub: [pr #3169](https://github.com/ChurchApps/FreeShow/pull/3169) (read; no item-specific matching bullet); [pr #3169](https://github.com/ChurchApps/FreeShow/pull/3169) (read; no item-specific matching bullet)

## D-fork-6abcc122b2964bc8

[code] Keep the blue theme when themes load late and replace more pink UI colors

Location: [src/frontend/IPC/responsesMain.ts:143](../../../../src/frontend/IPC/responsesMain.ts#L143). Category: fork-feature; fork feature.

Added/traced: [6abcc122](https://github.com/ajdebeer1322/FreeShow/commit/6abcc122b2964bc83616dbb17941a9aae3bacbc3) on 2026-10-07; Explicit fork commit; source anchor is representative, not the full feature boundary.

Fork decision: “Keep the blue theme when themes load late and replace more pink UI colors - Migrate saved built-in themes when they arrive after settings, so opening Settings -> Th

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/6abcc122b2964bc83616dbb17941a9aae3bacbc3): “Keep the blue theme when themes load late and replace more pink UI colors - Migrate saved built-in themes when they arrive after settings, so opening Settings -> Theme no longer br”
- [code] src/frontend/IPC/responsesMain.ts:143: “// built-in themes saved with the old pink accent get the new blue (otherwise they replace the migrated ones)”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/6abcc122b2964bc83616dbb17941a9aae3bacbc3): “- Migrate saved built-in themes when they arrive after settings, so opening Settings -> Theme no longer brings the old pink back”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/6abcc122b2964bc83616dbb17941a9aae3bacbc3): “- Migrate saved built-in themes when they arrive after settings, so opening Settings -> Theme no longer brings the old pink back”

Later line edits: 0; latest 6abcc122. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.
