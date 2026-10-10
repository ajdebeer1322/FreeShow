# click/src_frontend_components_settings_SettingsTools.svelte (2)

## click — event-9a58faa77646fcdc7f

[code] [src/frontend/components/settings/SettingsTools.svelte:53](../../../../../src/frontend/components/settings/SettingsTools.svelte#L53); () => open("output_selector"). resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTools.svelte:29 openedTab === "general"; src/frontend/components/settings/SettingsTools.svelte:50 openedTab === "display_settings"; src/frontend/components/settings/SettingsTools.svelte:52 Object.values($outputs).filter((o) => !o.invisible).length > 1.

Calls: src/frontend/components/settings/SettingsTools.svelte:13 open (depth 1).

Effects: src/frontend/components/settings/SettingsTools.svelte:14 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/SettingsTools.svelte:15 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1d436b3e286ef633f9

[code] [src/frontend/components/settings/SettingsTools.svelte:61](../../../../../src/frontend/components/settings/SettingsTools.svelte#L61); () => open("ai_model_manager"). resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTools.svelte:29 openedTab === "general"; src/frontend/components/settings/SettingsTools.svelte:50 openedTab === "display_settings"; src/frontend/components/settings/SettingsTools.svelte:58 openedTab === "ai"; src/frontend/components/settings/SettingsTools.svelte:59 $ai.enabled.

Calls: src/frontend/components/settings/SettingsTools.svelte:13 open (depth 1).

Effects: src/frontend/components/settings/SettingsTools.svelte:14 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/SettingsTools.svelte:15 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-65148158638ede3831

[code] [src/frontend/components/settings/SettingsTools.svelte:68](../../../../../src/frontend/components/settings/SettingsTools.svelte#L68); openLog. resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTools.svelte:29 openedTab === "general"; src/frontend/components/settings/SettingsTools.svelte:50 openedTab === "display_settings"; src/frontend/components/settings/SettingsTools.svelte:58 openedTab === "ai"; src/frontend/components/settings/SettingsTools.svelte:66 openedTab === "other".

Calls: src/frontend/components/settings/SettingsTools.svelte:18 openLog (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/settings/SettingsTools.svelte:19 ipc sendMain(Main.OPEN_LOG) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b44ce9e157940dc6ee

[code] [src/frontend/components/settings/SettingsTools.svelte:71](../../../../../src/frontend/components/settings/SettingsTools.svelte#L71); openAppData. resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTools.svelte:29 openedTab === "general"; src/frontend/components/settings/SettingsTools.svelte:50 openedTab === "display_settings"; src/frontend/components/settings/SettingsTools.svelte:58 openedTab === "ai"; src/frontend/components/settings/SettingsTools.svelte:66 openedTab === "other".

Calls: src/frontend/components/settings/SettingsTools.svelte:21 openAppData (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/settings/SettingsTools.svelte:22 ipc sendMain(Main.OPEN_APPDATA) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-347ce50047605ea6c1

[code] [src/frontend/components/settings/SettingsTools.svelte:75](../../../../../src/frontend/components/settings/SettingsTools.svelte#L75); openUserData. resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTools.svelte:29 openedTab === "general"; src/frontend/components/settings/SettingsTools.svelte:50 openedTab === "display_settings"; src/frontend/components/settings/SettingsTools.svelte:58 openedTab === "ai"; src/frontend/components/settings/SettingsTools.svelte:66 openedTab === "other".

Calls: src/frontend/components/settings/SettingsTools.svelte:24 openUserData (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/settings/SettingsTools.svelte:25 ipc sendMain(Main.OPEN_FOLDER_PATH, $dataPath) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
