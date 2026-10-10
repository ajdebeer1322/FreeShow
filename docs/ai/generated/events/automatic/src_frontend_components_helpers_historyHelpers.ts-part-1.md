# automatic/src_frontend_components_helpers_historyHelpers.ts (1)

## setTimeout — event-b62e4346f9e2444496

[code] [src/frontend/components/helpers/historyHelpers.ts:188](../../../../../src/frontend/components/helpers/historyHelpers.ts#L188); () => { document.getElementById("sectionTitle")?.querySelector("input")?.focus() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/historyHelpers.ts:188 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2d385b0d1c85249d5b

[code] [src/frontend/components/helpers/historyHelpers.ts:225](../../../../../src/frontend/components/helpers/historyHelpers.ts#L225); () => { document.getElementById("sectionTitle")?.querySelector("input")?.focus() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/historyHelpers.ts:225 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-dd6ea152c7b7365d9d

[code] [src/frontend/components/helpers/historyHelpers.ts:372](../../../../../src/frontend/components/helpers/historyHelpers.ts#L372); () => window.api.send(REMOTE, { channel: "SHOWS", data: get(shows) }). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/historyHelpers.ts:372 <callback> (depth 0).

Effects: src/frontend/components/helpers/historyHelpers.ts:372 ipc window.api.send(REMOTE, { channel: "SHOWS", data: get(shows) }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-caf53e74b0225ed20e

[code] [src/frontend/components/helpers/historyHelpers.ts:433](../../../../../src/frontend/components/helpers/historyHelpers.ts#L433); () => { notFound.update((a) => { if (a.show.includes(id)) a.show = a.show.filter((showId) => showId !== id) return a }) }. resolved-within-bound.

Conditions: src/frontend/components/helpers/historyHelpers.ts:435 a.show.includes(id).

Calls: src/frontend/components/helpers/historyHelpers.ts:433 <callback> (depth 0); src/frontend/components/helpers/historyHelpers.ts:434 <callback> (depth 1); src/frontend/components/helpers/historyHelpers.ts:435 <callback> (depth 2).

Effects: src/frontend/components/helpers/historyHelpers.ts:434 store-write src/frontend/stores.ts#notFound .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4eabe9449538e5b3db

[code] [src/frontend/components/helpers/historyHelpers.ts:534](../../../../../src/frontend/components/helpers/historyHelpers.ts#L534); () => { if (data.subkey) updateTransparentColors(id) updateThemeValues(get(themes)&#91;id&#93;) }. partial.

Conditions: src/frontend/components/helpers/historyHelpers.ts:535 data.subkey.

Calls: src/frontend/components/helpers/historyHelpers.ts:534 <callback> (depth 0); src/frontend/components/helpers/historyHelpers.ts:615 updateTransparentColors (depth 1); src/frontend/components/helpers/historyHelpers.ts:616 <callback> (depth 2); src/frontend/components/helpers/historyHelpers.ts:617 <callback> (depth 3); src/frontend/components/helpers/historyHelpers.ts:621 <callback> (depth 4); src/frontend/components/helpers/historyHelpers.ts:638 makeTransparent (depth 5); src/frontend/components/helpers/historyHelpers.ts:644 hexToRgb (depth 6); src/frontend/utils/updateSettings.ts:242 updateThemeValues (depth 1); src/frontend/utils/updateSettings.ts:245 <callback> (depth 2); src/frontend/utils/updateSettings.ts:246 <callback> (depth 2).

Effects: src/frontend/components/helpers/historyHelpers.ts:616 store-write src/frontend/stores.ts#themes .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-37c078cb3c16599ef7

[code] [src/frontend/components/helpers/historyHelpers.ts:552](../../../../../src/frontend/components/helpers/historyHelpers.ts#L552); () => { // setTheme({ ...data, data: data.previousValue }) if (data.subkey) updateTransparentColors(id) updateThemeValues(get(themes)&#91;id&#93;) }. partial.

Conditions: src/frontend/components/helpers/historyHelpers.ts:554 data.subkey.

Calls: src/frontend/components/helpers/historyHelpers.ts:552 <callback> (depth 0); src/frontend/components/helpers/historyHelpers.ts:615 updateTransparentColors (depth 1); src/frontend/components/helpers/historyHelpers.ts:616 <callback> (depth 2); src/frontend/components/helpers/historyHelpers.ts:617 <callback> (depth 3); src/frontend/components/helpers/historyHelpers.ts:621 <callback> (depth 4); src/frontend/components/helpers/historyHelpers.ts:638 makeTransparent (depth 5); src/frontend/components/helpers/historyHelpers.ts:644 hexToRgb (depth 6); src/frontend/utils/updateSettings.ts:242 updateThemeValues (depth 1); src/frontend/utils/updateSettings.ts:245 <callback> (depth 2); src/frontend/utils/updateSettings.ts:246 <callback> (depth 2).

Effects: src/frontend/components/helpers/historyHelpers.ts:616 store-write src/frontend/stores.ts#themes .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
