# Decision records: src/frontend/components/helpers/show.ts

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-13bb95597df09c01

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/helpers/show.ts:94](../../../../src/frontend/components/helpers/show.ts#L94). Category: timing.

Added/traced: [f191003e](https://github.com/ChurchApps/FreeShow/commit/f191003e155e0e43fa4436584ed26fb9d8502a16) on 2026-01-29; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// preload show (so the layout can be changed)”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/f191003e155e0e43fa4436584ed26fb9d8502a16): “1.5.7-beta.1 (#2755) * Catch bad file names in sync * Updated languages * Fixed "Add folder" missing #2701 * Fixed Scripture freeze #2707 * Fixed Scripture freeze #2707 * Notes lin”
- [code] src/frontend/components/helpers/show.ts:95: “// preload show (so the layout can be changed)”

Later line edits: 0; latest f191003e. Full commit messages and lineage: JSON query data.

GitHub: [pr #2755](https://github.com/ChurchApps/FreeShow/pull/2755) (read; no item-specific matching bullet); [pr #2755](https://github.com/ChurchApps/FreeShow/pull/2755) (read; no item-specific matching bullet)

## D-workaround-2e8c8028cceda221

[guess] // TODO: disallow chars in labels: #:;!.,- ??

Location: [src/frontend/components/helpers/show.ts:49](../../../../src/frontend/components/helpers/show.ts#L49). Category: workaround.

Added/traced: [590d09a6](https://github.com/ChurchApps/FreeShow/commit/590d09a6a9eba2fbf02f6cecb70c2ee35c3d4755) on 2022-09-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/590d09a6a9eba2fbf02f6cecb70c2ee35c3d4755): “✨ Fixed some slide rearrange issues - Fixed import comma split - Fixed auto size - Custom scripture color working when double clicking - Fixed image transition not working - Fixed ”

Later line edits: 1; latest 3854a5e8. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-workaround-000a55efea267ad2

[guess] // WIP should be merged with existing functions instead

Location: [src/frontend/components/helpers/show.ts:512](../../../../src/frontend/components/helpers/show.ts#L512). Category: workaround.

Added/traced: [a6698fc0](https://github.com/ChurchApps/FreeShow/commit/a6698fc012f8f128df84700ffbe50d9264035171) on 2026-09-09; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/a6698fc012f8f128df84700ffbe50d9264035171): “1.6.6-beta.1 (#3721) * Check textFit when detecting items that need auto size (#3660) * Planning Center item type categories * Updated Hungarian language * Updated languages * Fixe”

Later line edits: 0; latest a6698fc0. Full commit messages and lineage: JSON query data.

GitHub: [pr #3721](https://github.com/ChurchApps/FreeShow/pull/3721) (read; no item-specific matching bullet); [pr #3721](https://github.com/ChurchApps/FreeShow/pull/3721) (read; no item-specific matching bullet)

## D-fork-ee5e33e53d495bfc

[code] Only allow linking slides that go to different outputs

Location: [src/frontend/components/helpers/show.ts:459](../../../../src/frontend/components/helpers/show.ts#L459). Category: fork-feature; fork feature.

Added/traced: [ee5e33e5](https://github.com/ajdebeer1322/FreeShow/commit/ee5e33e53d495bfc6a1ac7f418e41b7ac202ba91) on 2026-10-08; Explicit fork commit; source anchor is representative, not the full feature boundary.

Fork decision: “Only allow linking slides that go to different outputs Both slides need specific outputs with none in common. A stored link that becomes invalid shows as two single

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/ee5e33e53d495bfc6a1ac7f418e41b7ac202ba91): “Only allow linking slides that go to different outputs Both slides need specific outputs with none in common. A stored link that becomes invalid shows as two single slides. Also do”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/cb967d9f2c683ec3998dc0f8249e29716d75eb2e): “- Background inheritance on slide click now only uses slides meant for each output, including output-specific clear-background cues”

Later line edits: 0; latest cb967d9f. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.
