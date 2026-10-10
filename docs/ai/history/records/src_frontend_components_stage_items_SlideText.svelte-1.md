# Decision records: src/frontend/components/stage/items/SlideText.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-711cdd89f6be9657

[guess] setTimeout: items?.length && stageItem?.auto !== false ? waitDuration : 0 (dynamic ms)

Location: [src/frontend/components/stage/items/SlideText.svelte:98](../../../../src/frontend/components/stage/items/SlideText.svelte#L98). Category: timing.

Added/traced: [c4920206](https://github.com/ChurchApps/FreeShow/commit/c49202065eb31b67cb66d102806195d7039b62a5) on 2024-08-16; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c49202065eb31b67cb66d102806195d7039b62a5): “v1.2.5 (#756) * 📄 Option to not disable Hardware Acceleration - Updated languages - Unsplash UTM links - Fixed HTTP output media - More optimized .json cache storage - Fixed fade ”

Later line edits: 2; latest c4920206. Full commit messages and lineage: JSON query data.

GitHub: [pr #756](https://github.com/ChurchApps/FreeShow/pull/756) (read; no item-specific matching bullet); [pr #756](https://github.com/ChurchApps/FreeShow/pull/756) (read; no item-specific matching bullet)

## D-workaround-14f54bfecfee4df9

[guess] // WIP remove "empty" items

Location: [src/frontend/components/stage/items/SlideText.svelte:71](../../../../src/frontend/components/stage/items/SlideText.svelte#L71). Category: workaround.

Added/traced: [cc30be87](https://github.com/ChurchApps/FreeShow/commit/cc30be873dcdfc1e006261d701e9b08aa167c368) on 2025-04-09; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/cc30be873dcdfc1e006261d701e9b08aa167c368): “1.4.0 (#1460) * Updated Windows signing deps * 🎨 Context menu & popup border radius * ✨ Added textbox press/release action - CSV file import - Added API action to select project b”

Later line edits: 2; latest cc30be87. Full commit messages and lineage: JSON query data.

GitHub: [pr #1460](https://github.com/ChurchApps/FreeShow/pull/1460) (read; no item-specific matching bullet); [pr #1460](https://github.com/ChurchApps/FreeShow/pull/1460) (read; no item-specific matching bullet)

## D-workaround-c2370fee5cea5cd5

[guess] // WIP stage items merged (so this only works properly for the first item with linesReveal enabled (use "Item number" option))

Location: [src/frontend/components/stage/items/SlideText.svelte:111](../../../../src/frontend/components/stage/items/SlideText.svelte#L111). Category: workaround.

Added/traced: [b908bc17](https://github.com/ChurchApps/FreeShow/commit/b908bc173d2b56adde342ba705f8c1424a459134) on 2025-06-25; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/b908bc173d2b56adde342ba705f8c1424a459134): “1.4.6 (#1777) * Fix TypeError when dynamicRSS is undefined in getDynamicIds (#1764) Resolves error: "Cannot read properties of undefined (reading 'length')" when get(special).dynam”

Later line edits: 0; latest b908bc17. Full commit messages and lineage: JSON query data.

GitHub: [pr #1777](https://github.com/ChurchApps/FreeShow/pull/1777) (read; no item-specific matching bullet); [pr #1777](https://github.com/ChurchApps/FreeShow/pull/1777) (read; no item-specific matching bullet)
