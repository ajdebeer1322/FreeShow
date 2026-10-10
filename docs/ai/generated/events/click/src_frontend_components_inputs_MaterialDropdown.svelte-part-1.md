# click/src_frontend_components_inputs_MaterialDropdown.svelte (1)

## click — event-b67846c0b3629f6e50

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:289](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L289); (e) => { if (e.target?.closest(".remove")) return toggleDropdown() }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:34 toggleDropdown (depth 1); src/frontend/components/inputs/MaterialDropdown.svelte:39 <callback> (depth 2); src/frontend/components/inputs/MaterialDropdown.svelte:48 calculateMaxHeight (depth 3); src/frontend/components/inputs/MaterialDropdown.svelte:77 getScrollParent (depth 4); src/frontend/components/inputs/MaterialDropdown.svelte:41 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7a6383f4924d00d589

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:318](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L318); () => selectOption(null, ""). partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:316 allowEmpty && hasValue.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:91 selectOption (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-dcfd62c16fe832e006

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:326](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L326); reset. partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:323 defaultValue !== null; src/frontend/components/inputs/MaterialDropdown.svelte:325 value !== defaultValue.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:241 reset (depth 0); src/frontend/components/inputs/MaterialDropdown.svelte:244 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-55265fcc082c741d89

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:330](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L330); undoReset. partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:323 defaultValue !== null; src/frontend/components/inputs/MaterialDropdown.svelte:325 value !== defaultValue; src/frontend/components/inputs/MaterialDropdown.svelte:329 resetFromValue.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:249 undoReset (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a026a2fa5d432b02c1

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:341](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L341); (e) => selectOption(e, option.value). partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:337 open; src/frontend/components/inputs/MaterialDropdown.svelte:338 useVirtualList.

Calls: src/frontend/components/inputs/MaterialDropdown.svelte:91 selectOption (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-45ab1738561c254d9f

[code] [src/frontend/components/inputs/MaterialDropdown.svelte:357](../../../../../src/frontend/components/inputs/MaterialDropdown.svelte#L357); () => { dispatch("delete", option.value) }. partial.

Conditions: src/frontend/components/inputs/MaterialDropdown.svelte:337 open; src/frontend/components/inputs/MaterialDropdown.svelte:338 useVirtualList; src/frontend/components/inputs/MaterialDropdown.svelte:351 allowDeleting && option.value !== value.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
