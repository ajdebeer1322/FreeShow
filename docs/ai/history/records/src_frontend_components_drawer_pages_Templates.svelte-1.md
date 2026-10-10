# Decision records: src/frontend/components/drawer/pages/Templates.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-7d98e7a66d5b1d83

[guess] setTimeout: 500 (500 ms)

Location: [src/frontend/components/drawer/pages/Templates.svelte:61](../../../../src/frontend/components/drawer/pages/Templates.svelte#L61). Category: timing.

Added/traced: [9dca76b8](https://github.com/ChurchApps/FreeShow/commit/9dca76b8c4e5971a0e8fdf5472bdbc5f89baf695) on 2023-06-14; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/9dca76b8c4e5971a0e8fdf5472bdbc5f89baf695): “📺 Output cropping - Black output overflow color - Choose resolution - Close fullscreen preview button - Zooming with trackpad or touch screen should work better now - Dragging dra”

Later line edits: 0; latest 9dca76b8. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-timer-a2f4ca4800e591d0

[guess] setTimeout: lazyLoader === 0 ? 60 : 30 (dynamic ms)

Location: [src/frontend/components/drawer/pages/Templates.svelte:85](../../../../src/frontend/components/drawer/pages/Templates.svelte#L85). Category: timing.

Added/traced: [c0ad5391](https://github.com/ChurchApps/FreeShow/commit/c0ad5391c81b49b836a6b7f58b6ad72fad2f5c15) on 2024-11-12; git log -L (earliest tracked source-line ancestor).

Unresolved: local history identifies an addition/edit but gives no item-specific motive. Possible bundled commit bullet &#91;guess&#93;: “* Fixed scripture dynamic value templates sometime

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c0ad5391c81b49b836a6b7f58b6ad72fad2f5c15): “1.3.1-beta.1 (#1010) * ✔ Fixed auto size timing issue - Fixed transition issue - UI tweaks * Updated issue templates * ✔ Fixed Quelea misspelling - Fixed scripture output freezing ”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/1ed8ffa3dd177d68ba1efe61d943b7baa7bd9027): “* Fixed scripture dynamic value templates sometimes not working #3794”
- [guess] [source](https://github.com/ChurchApps/FreeShow/issues/3794): “In the latest beta, our scripture lower third template appears on our stream output but no text appears. Rolling back to beta2 works fine. ”

Later line edits: 3; latest 1ed8ffa3. Full commit messages and lineage: JSON query data.

GitHub: [pr #1010](https://github.com/ChurchApps/FreeShow/pull/1010) (read; no item-specific matching bullet); [pr #3813](https://github.com/ChurchApps/FreeShow/pull/3813) (read; no item-specific matching bullet); [issue #3794](https://github.com/ChurchApps/FreeShow/issues/3794) (read; no item-specific matching bullet)

## D-timer-48ed3e76b8de4c58

[guess] setTimeout: 500 (500 ms)

Location: [src/frontend/components/drawer/pages/Templates.svelte:173](../../../../src/frontend/components/drawer/pages/Templates.svelte#L173). Category: timing.

Added/traced: [81f55552](https://github.com/ChurchApps/FreeShow/commit/81f55552d1e8f9a6373d75137330a2fba2f5f1b2) on 2026-03-04; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/81f55552d1e8f9a6373d75137330a2fba2f5f1b2): “1.5.9 (#2964) * Fixed metadata display value causing freeze * Quick paste colors #2929 * Fix/scripture first slide template (#2943) * fix: align slideDynamicValues with firstSlideT”

Later line edits: 0; latest 81f55552. Full commit messages and lineage: JSON query data.

GitHub: [pr #2964](https://github.com/ChurchApps/FreeShow/pull/2964) (read; no item-specific matching bullet); [pr #2964](https://github.com/ChurchApps/FreeShow/pull/2964) (read; no item-specific matching bullet)

## D-workaround-c6431ca039ea1066

[guess] // WIP apply to all slides at once...

Location: [src/frontend/components/drawer/pages/Templates.svelte:146](../../../../src/frontend/components/drawer/pages/Templates.svelte#L146). Category: workaround.

Added/traced: [2bb2107b](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f) on 2025-02-06; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive. Possible bundled commit bullet &#91;guess&#93;: “- Select slides to apply templates to individual s

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f): “1.3.7 (#1249) * Use v4 * ✔️ Fixed cloud sync issue - Fixed action tags not saving - Fixed selected line bar not matching correct output - Function keys will work now even if a inpu”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f): “- Select slides to apply templates to individual slides”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/b5946b2dafb6207a5372eec5f9943ce283e3a508): “* feat: add checks to skip locked slides in templates”

Later line edits: 1; latest b5946b2d. Full commit messages and lineage: JSON query data.

GitHub: [pr #1249](https://github.com/ChurchApps/FreeShow/pull/1249) (read; no item-specific matching bullet); [pr #2839](https://github.com/ChurchApps/FreeShow/pull/2839) (read; no item-specific matching bullet)

## D-workaround-3c2a7e0e9dbf41fb

[guess] // WIP refresh slides (apply template)

Location: [src/frontend/components/drawer/pages/Templates.svelte:156](../../../../src/frontend/components/drawer/pages/Templates.svelte#L156). Category: workaround.

Added/traced: [2bb2107b](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f) on 2025-02-06; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive. Possible bundled commit bullet &#91;guess&#93;: “- Select slides to apply templates to individual s

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f): “1.3.7 (#1249) * Use v4 * ✔️ Fixed cloud sync issue - Fixed action tags not saving - Fixed selected line bar not matching correct output - Function keys will work now even if a inpu”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/2bb2107b7f257899c754385d049e0e7d045ae26f): “- Select slides to apply templates to individual slides”
- [guess] [source](https://github.com/ChurchApps/FreeShow/commit/b5946b2dafb6207a5372eec5f9943ce283e3a508): “* feat: add checks to skip locked slides in templates”

Later line edits: 1; latest b5946b2d. Full commit messages and lineage: JSON query data.

GitHub: [pr #1249](https://github.com/ChurchApps/FreeShow/pull/1249) (read; no item-specific matching bullet); [pr #2839](https://github.com/ChurchApps/FreeShow/pull/2839) (read; no item-specific matching bullet)
