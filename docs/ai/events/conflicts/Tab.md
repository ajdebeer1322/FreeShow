# Tab: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/components/inputs/HiddenInput.svelte:108](../../../../src/frontend/components/inputs/HiddenInput.svelte#L108) — svelte:window: keydown. Guards: e.key === "Enter" || e.key === "Tab"; $activeRename?.includes("project_") && $activeProject === $activeRename.slice($activeRename.indexOf("_") + 1).
- [code] [src/frontend/components/inputs/MaterialTextInput.svelte:83](../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L83) — input: <forwarded event>. Guards: type === "password" && !showText; e.key === "Enter"; currentVariable.type === "text" && e.key === "Enter" && e.target?.value; e.key === "Tab" && e.target?.value.
- [code] [src/frontend/components/inputs/MaterialTextInput.svelte:85](../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L85) — input: <forwarded event>. Guards: type === "password" && !showText; e.key === "Enter"; currentVariable.type === "text" && e.key === "Enter" && e.target?.value; e.key === "Tab" && e.target?.value.
- [code] [src/frontend/components/main/popups/Variable.svelte:348](../../../../src/frontend/components/main/popups/Variable.svelte#L348) — MaterialTextInput: textSetKeydown. Guards: !existing && !chosenType; currentVariable.type === "number"; currentVariable.type === "random_number"; currentVariable.type === "text_set"; i === 0; e.key === "Tab" && e.target?.value.
- [code] [src/frontend/components/slide/views/Table.svelte:181](../../../../src/frontend/components/slide/views/Table.svelte#L181) — div: (e) => handleCellKeydown(e, rIdx, cIdx). Guards: edit.

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "Tab"`.
