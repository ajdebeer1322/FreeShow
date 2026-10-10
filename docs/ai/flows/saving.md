# Saving

## Observed result

[verified] Real Control+S; disk file content verified. Evidence: [observation data](observations.json), action ID `saving`, recorded 2026-10-10T19:27:33.662Z.

[code] Verification scope: Control+S wrote a .show containing the edited text in the isolated data directory. A saved-status acknowledgement is not treated as a durability guarantee; crash recovery, cloud sync, backups and failure reporting were not exercised.

[code] Source steps below explain the current implementation. Their intermediate calls are not all individually instrumented; an observed end result does not upgrade every step to verified.

## File-by-file sequence

1. [code] The Ctrl/Cmd+S mapping invokes the shared renderer save function. ([src/frontend/utils/shortcuts.ts:57](../../../src/frontend/utils/shortcuts.ts#L57))

2. [code] Save refreshes output-name synchronization/autosave state and refuses overlapping saves. ([src/frontend/utils/save.ts:124](../../../src/frontend/utils/save.ts#L124))

3. [code] The payload includes named store groups and separate full-show/scripture caches; outputs are sanitized before serialization. ([src/frontend/utils/save.ts:234](../../../src/frontend/utils/save.ts#L234))

4. [code] Renderer sends MAIN/SAVE after assembling the snapshot. ([src/frontend/utils/save.ts:254](../../../src/frontend/utils/save.ts#L254))

5. [code] The typed main handler dispatches to Electron persistence. ([src/electron/IPC/responsesMain.ts:84](../../../src/electron/IPC/responsesMain.ts#L84))

6. [code] Electron compares and writes changed named store files, retaining tracked edit timestamps for cloud comparisons. ([src/electron/data/save.ts:59](../../../src/electron/data/save.ts#L59))

7. [code] Full shows are written separately as [id, value] JSON under the presentation data directory. ([src/electron/data/save.ts:85](../../../src/electron/data/save.ts#L85))

8. [code] The SAVE2 acknowledgement reaches saveComplete, which updates status and processes custom save triggers. ([src/frontend/IPC/responsesMain.ts:109](../../../src/frontend/IPC/responsesMain.ts#L109))

## State, messages and history

[code] Read [stores-saving](../subsystems/stores-saving.md) for invariants and dependency maps. Each traced file has complete import/store/message/timing evidence:

- [src/frontend/utils/shortcuts.ts](../generated/files/src_frontend_utils_shortcuts.ts.md)
- [src/frontend/utils/save.ts](../generated/files/src_frontend_utils_save.ts.md)
- [src/electron/IPC/responsesMain.ts](../generated/files/src_electron_IPC_responsesMain.ts.md)
- [src/electron/data/save.ts](../generated/files/src_electron_data_save.ts.md)
- [src/frontend/IPC/responsesMain.ts](../generated/files/src_frontend_IPC_responsesMain.ts.md)

[code] 23 related decision records: [full IDs and locations](saving.dependencies.json); representative records:

- [guess] [D-hotspot-0b4e59d5ecf3f9a4](../history/records/src_electron_IPC_responsesMain.ts-1.md).
- [guess] [D-hotspot-2dc83fd7826af5f5](../history/records/src_electron_data_save.ts-1.md).
- [guess] [D-hotspot-e35a1a0f8f77831a](../history/records/src_frontend_IPC_responsesMain.ts-1.md).
- [guess] [D-hotspot-613d3d6405b1c316](../history/records/src_frontend_utils_save.ts-1.md).
- [code] [D-fork-4beaefae8634deef](../history/records/src_electron_IPC_responsesMain.ts-1.md).

[code] Companion findings [F-008](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) refer to the later fixed snapshot; use them as context, not runtime evidence for this base. See the [evidence method](README.md) before reusing these observations.
