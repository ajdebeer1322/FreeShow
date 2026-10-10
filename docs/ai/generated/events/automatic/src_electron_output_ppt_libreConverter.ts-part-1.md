# automatic/src_electron_output_ppt_libreConverter.ts (1)

## setTimeout — event-23108a68c6a4c942ae

[code] [src/electron/output/ppt/libreConverter.ts:66](../../../../../src/electron/output/ppt/libreConverter.ts#L66); () => openURL("https://www.libreoffice.org/download/download-libreoffice/"). partial.

Conditions: src/electron/output/ppt/libreConverter.ts:64 err.code === "ENOENT" \|\| (err.message && (err.message.includes("soffice") \|\| err.message.includes("not found"))).

Calls: src/electron/output/ppt/libreConverter.ts:66 <callback> (depth 0); src/electron/IPC/responsesMain.ts:407 openURL (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
