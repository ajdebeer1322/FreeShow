# Decision records: src/electron/audio/IcecastSender.ts

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-5cbdc2c6e0896b2d

[guess] setTimeout: 3000 (3000 ms)

Location: [src/electron/audio/IcecastSender.ts:142](../../../../src/electron/audio/IcecastSender.ts#L142). Category: timing.

Added/traced: [e3fc2b5a](https://github.com/ChurchApps/FreeShow/commit/e3fc2b5a1c56f77db88c632b1cd6bb3e87ae613d) on 2026-05-26; git log -L (earliest tracked source-line ancestor).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/e3fc2b5a1c56f77db88c632b1cd6bb3e87ae613d): “1.6.1 (#3291)”

Later line edits: 1; latest bbfe9807. Full commit messages and lineage: JSON query data.

GitHub: [pr #3291](https://github.com/ChurchApps/FreeShow/pull/3291) (Unauthenticated GitHub API quota reserve reached; login required for remaining sources.); [pr #3587](https://github.com/ChurchApps/FreeShow/pull/3587) (read; no item-specific matching bullet)

## D-timer-0b706ea96cddfdab

[guess] setInterval: 20 (20 ms)

Location: [src/electron/audio/IcecastSender.ts:172](../../../../src/electron/audio/IcecastSender.ts#L172). Category: timing.

Added/traced: [bbfe9807](https://github.com/ChurchApps/FreeShow/commit/bbfe98072aefe0c6311c5044e1ac63152f45a204) on 2026-08-07; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/bbfe98072aefe0c6311c5044e1ac63152f45a204): “1.6.5-beta.2 (#3587) * More specific sync error messages (#3557) * Break CJK text on full-width punctuation when splitting long verses (#3561) * Update * Fixed broken chars * Don't”

Later line edits: 1; latest bbfe9807. Full commit messages and lineage: JSON query data.

GitHub: [pr #3587](https://github.com/ChurchApps/FreeShow/pull/3587) (read; no item-specific matching bullet); [pr #3587](https://github.com/ChurchApps/FreeShow/pull/3587) (read; no item-specific matching bullet)

## D-workaround-24932ccfa7cdf39e

[code] // Separated real audio time tracking to fix the silence pacing bug

Location: [src/electron/audio/IcecastSender.ts:33](../../../../src/electron/audio/IcecastSender.ts#L33). Category: workaround.

Added/traced: [6b1113ca](https://github.com/ChurchApps/FreeShow/commit/6b1113ca15e1fa33d06e4bfd45a9b89dac2d0a0f) on 2026-08-14; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// Separated real audio time tracking to fix the silence pacing bug”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/6b1113ca15e1fa33d06e4bfd45a9b89dac2d0a0f): “1.6.5-beta.3 (#3610) * Updated Norwegian language * Don't show network output node if no network outputs * Reset sync state if failed * Updated languages * Fixed videos with modifi”
- [code] src/electron/audio/IcecastSender.ts:33: “// Separated real audio time tracking to fix the silence pacing bug”

Later line edits: 1; latest 6b1113ca. Full commit messages and lineage: JSON query data.

GitHub: [pr #3610](https://github.com/ChurchApps/FreeShow/pull/3610) (read; no item-specific matching bullet); [pr #3610](https://github.com/ChurchApps/FreeShow/pull/3610) (read; no item-specific matching bullet)
