# text-shadow: potential overlapping handlers

[code] DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins. Across desktop, output and browser-client files, repeated keys may belong to separate windows rather than a real conflict.

- [code] [src/frontend/components/edit/tools/EditValues.svelte:402](../../../../src/frontend/components/edit/tools/EditValues.svelte#L402) — Input: (e) => changed(e, input, id, true). Guards: expanded; !input.hidden; input.type === "fontDropdown"; input.type === "toggle"; input.type === "radio"; input.type === "textarea".
- [code] [src/frontend/components/input/Input.svelte:45](../../../../src/frontend/components/input/Input.svelte#L45) — unknown: <forwarded event>. Guards: input.type === "dropdown"; input.type === "checkbox"; input.type === "color".

[Live key situations](../CONFLICTS.md); [query](../README.md): `npm run ai:ask -- key "text-shadow"`.
