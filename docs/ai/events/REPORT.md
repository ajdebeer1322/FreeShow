# Events and triggers report

[code] Phase 7 extends the existing AI map on main-tests. No product source or companion guides changed; no new dependency was added. Checkpoint 7f7ff0bd was pushed at the user’s request; later work is committed locally.

## Inventory and static coverage

| Kind | Entries |
| --- | ---: |
| automatic | 724 |
| keyboard | 194 |
| click | 1158 |
| trigger | 23 |
| action | 162 |
| drag-source | 65 |
| drop-target | 18 |
| drag-drop | 30 |
| drop-route | 27 |
| menu | 179 |

[code] 2580 total entries across 15612 indexed functions; 21 declared automatic activation IDs and 16 potential key conflicts. An automatic entry counts a timer/media/action event site, not a unique user command. Drag sources, target declarations, DOM drag/drop handlers and drop dispatch routes are distinct inventory types.

[code] 1291/2580 (50.0%) have no unresolved/deeper edge within the six-level bound. 1599 entries have at least one indexed terminal effect; 659/2580 (25.5% of all entries) both reach an indexed effect and resolve within the bound. Other resolved entries include UI/native/read-only operations with no indexed state effect. Neither percentage proves all runtime effects are found.

| Unresolved reason | Event-chain occurrences (not unique call sites) |
| --- | ---: |
| unresolved receiver, alias, callback parameter or external implementation | 11214 |
| runtime lookup key; concrete entries separately inventoried | 362 |
| forwarded targets resolved as instance union; mounted parent and propagation are conditional | 20 |
| component forwards event; parent listener depends on instance | 9 |
| no direct clickActions handler; may be container/external/native role | 9 |

[code] Concrete shortcut/API/menu/drop entries resolve independently. Runtime-selected callbacks, keys, configured actions, dynamic Svelte components and edges beyond depth six remain explicit. Files/network effects are indexed where terminal APIs are recognized, not verified for every event. Settings/permissions determine which external commands can reach the API; emitter and rest.ts helpers send outgoing signals rather than serving an inbound REST endpoint.

## Live coverage and limits

[verified] 59/59 scenarios recorded using an isolated production Electron fixture with two outputs. 0 unsuccessful recordings remain. Runtime recording covers the chosen action, IPC APIs, central-store samples, output DOM layer/opacity changes, console/debug and final state. See [method](../traces/README.md) and [index](../traces/index.json).

[code] Static-to-live comparisons record stores/IPC outside the candidate union rather than declaring them defects. The fixture uses four slides, two groups, shrinkToFit text, a looping video and overlay; F4 uses a generated tone; undo/redo begin with a real edit. Key guides contain 160 source-anchored situation rows. The full cross-product of every key, platform, popup, focus mode, output-binding configuration and edit state is not executed. Read specific context labels before generalizing.

[verified] Browser-client API messages were tested over the real remote socket; complete browser UI/device MIDI/OSC/NDI/OMT/Blackmagic sessions and physical audience/speaker delivery were not tested. Warnings are retained separately from page exceptions. No product fix was attempted.

## Key conflicts and findings

[Potential handlers and observed precedence outcomes](CONFLICTS.md).

1. [verified] Shift+Space advances the same ordinary live fixture as Space. [Trace](../traces/shift-space-live.md).

2. [verified] Space in the editor without a caret can advance both audience outputs. Space inside a textbox does not. [Editor trace](../traces/space-editor.md), [textbox trace](../traces/space-textbox.md).

3. [verified] F2 opens Rename when a slide is selected; with no selection it clears the live slide. [Rename](../traces/f2-selected.md), [clear](../traces/f2-live.md).

4. [verified] Escape from a popup or input leaves the live slide visible, whereas Escape from ordinary show/body focus clears output. [Conflict outcomes](CONFLICTS.md).

5. [verified] Real Ctrl+Z/Ctrl+Y and Ctrl+Z inside the textbox move a seeded application history entry between undo/redo. Native editor behavior still depends on caret/IME state. [Undo](../traces/ctrl-z.md), [redo](../traces/ctrl-y.md).

6. [verified] Clear buttons remove audience layers without creating application undo entries in this fixture. Output-cache restoration is a separate route. [Clear trace](../traces/clear-button-all.md).

7. [verified] A media drop changes the show cache and creates an undo entry. [Drop trace](../traces/drop-media-slide.md).

8. [verified] The actual remote API:next_slide message advances both outputs through the remote Socket.IO server. ACTION_MAIN belongs to another receiver table and is not the remote API route. [Remote trace](../traces/remote-action-next.md).

9. [code] Nine menu declarations lack a direct clickActions handler and loader in the current map; zoom declarations are absent from the active view layout, while several others are submenu containers. They are unresolved/dead-declaration candidates, not proven broken visible items. See [suspected findings](../SUSPECTED_BUGS.md).

10. [verified] Runtime store writes can extend the six-level static union via subscriptions. The Space recording writes shows after showsCache updates, and broadcasts SYNCED_OUTPUTS; background SPOTIFY_GET_STATE polling can also appear. [Space evidence](../traces/space-live.json).

## Measured runtimes

[verified] Latest measured ai:map: 26.066 s; ai:check: 33.75 s. Mean scenario preparation/action/observation interval: 3.125 s across 59 recordings, excluding cold Electron/Xvfb startup and JSON loading. A single ai:trace invocation additionally starts the app; batch all amortizes startup. A fresh single-scenario command (npm run ai:trace -- space-live) took 14.781 s including startup; [command measurement](trace-command-metrics.json). The action observation itself waits 1.8 s for transitions. These are this server’s measurements, not a guaranteed time budget.

### npm run ai:ask -- key Space

[verified] 1.167 s.

```text
Key Space [code]; 44 handler candidates (modifier/DOM guards still apply)
src/frontend/components/context/ContextItem.svelte:496 keydown -> keydown
src/frontend/components/context/SpellCheckMenu.svelte:27 keydown -> triggerClickOnEnterSpace
src/frontend/components/context/SpellCheckMenu.svelte:39 keydown -> triggerClickOnEnterSpace
src/frontend/components/drawer/Card.svelte:35 keydown -> triggerClickOnEnterSpace
src/frontend/components/drawer/Drawer.svelte:263 keydown -> () => { // does not work and prevents search input keys // if (e.key === "Enter" || e.key === " ") { // e.preventDefault() // click(e) // } }
src/frontend/components/drawer/audio/AudioEffects.svelte:66 keydown -> (e) => { if (e.key === "Enter" || e.key === " ") openEffectPopup(effectItem) }
src/frontend/components/drawer/calendar/Day.svelte:67 keydown -> triggerClickOnEnterSpace
src/frontend/components/helpers/Icon.svelte:59 keydown -> triggerClickOnEnterSpace
src/frontend/components/inputs/Dropdown.svelte:96 keydown -> triggerClickOnEnterSpace
src/frontend/components/inputs/HiddenInput.svelte:116 keydown -> (e) => { // stop space from triggering other keydown events if (e.key === " ") e.stopPropagation() }
  … 34 more; add --all
Situation tables: docs/ai/events/keys/space.md
  Show view, nothing live -> Advance active outputs from active show/project; the route chooses cached/current/project content rather than a hardcoded slide index. (src/frontend/components/helpers/OutputHelper.ts:23)
  Show view, a slide live -> Space advances line/reveal/slide through playNext; isSpace differs from ArrowRight/PageDown. (src/frontend/components/helpers/OutputHelper.ts:128)
  Shift+Space -> Built-in Space handler does not test shiftKey. Custom action/group branches exclude shift; the built-in Space route can still run. (src/frontend/utils/shortcuts.ts:390)
  Focus Mode -> OutputHelper reads the focused project item and output position; clear caching differs in Focus Mode. (src/frontend/components/helpers/OutputHelper.ts:23)
  Linked slides / output-bound slides -> Linked card members with lines/reveals left move; other members wait. Outputs left behind clear their slide while keeping background; bindings determine eligible outputs. (src/frontend/components/helpers/OutputHelper.ts:67)
  Slide editor, no text being edited -> Space can still reach Preview and advance outputs, unless context/timeline/other guards stop it. (src/frontend/utils/shortcuts.ts:397)
  Slide editor, text box edited -> Preview returns for a target inside .edit; Space stays text input. (src/frontend/components/output/preview/Preview.svelte:52)
  Timeline active -> Space leaves preview presentation handling to the timeline route. (src/frontend/utils/shortcuts.ts:394)
  Text input focused -> Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling. (src/frontend/utils/shortcuts.ts:257)
  Popup open -> Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard. (src/frontend/utils/shortcuts.ts:251)
  … 3 more; add --all
Traces: space-editor [verified] docs/ai/traces/space-editor.md; space-empty [verified] docs/ai/traces/space-empty.md; space-focus [verified] docs/ai/traces/space-focus.md; space-input [verified] docs/ai/traces/space-input.md; space-linked [verified] docs/ai/traces/space-linked.md; space-live [verified] docs/ai/traces/space-live.md; space-textbox [verified] docs/ai/traces/space-textbox.md
Conflict candidates: 1
DOM target handlers run before bubble window listeners unless capture. stopPropagation stops propagation; preventDefault alone does not. Global and Preview both register window handlers; source registration/conditional returns determine outcome. Live recordings identify observed wins.
```

### npm run ai:ask -- click ClearButtons.svelte

[verified] 1.193 s.

```text
Clicks in ClearButtons.svelte: 13
event-dc493109b36a48d56b click src/frontend/components/output/preview/ClearButtons.svelte:118 () => clear("scene")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:115 !sceneCleared
  Effects (1):
    src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction
  Unresolved: 1; depth cutoffs: 0
event-7b794fb30877c846cb click src/frontend/components/output/preview/ClearButtons.svelte:128 restoreOutput
  partial; may change live output; inspect conditions/trace; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:127 allCleared && $outputCache && $outputCache?.slide?.type !== "ppt"
    src/frontend/components/output/clear.ts:62 get(outLocked) || !get(outputCache)
    src/frontend/components/output/clear.ts:68 id.includes("playing")
    src/frontend/components/output/clear.ts:70 !outputIds.includes(id) || !a[id]
    src/frontend/components/output/clear.ts:78 get(outputCache).playingAudioData
    src/frontend/components/output/clear.ts:83 get(outputCache).playingMetronome
  Effects (51):
    src/frontend/components/output/clear.ts:85 store-write src/frontend/stores.ts#outputCache
    src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs
    src/frontend/components/output/clear.ts:66 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/media.ts:272 ipc MAIN
    src/frontend/IPC/main.ts:23 ipc MAIN
    src/frontend/IPC/main.ts:72 ipc MAIN
    src/frontend/audio/audioPlayer.ts:100 store-write src/frontend/stores.ts#activePlaylist
    src/frontend/utils/cloudSync.ts:222 ipc MAIN
    src/frontend/IPC/main.ts:72 ipc MAIN
  … 41 more; add --all
  Store broadcasts: OUTPUT/OUTPUTS; OUTPUT/ALL_OUTPUTS; REMOTE/AUDIO_ROUTING; REMOTE/OUT; REMOTE/OUT_DATA; STAGE/OUT; OUTPUT/PLAYING_AUDIO; OUTPUT/METRONOME_TIMER; STAGE/METRONOME_TIMER; OUTPUT/SHOWS; STAGE/SHOW_DATA; REMOTE/SHOW; OUTPUT/METRONOME; STAGE/METRONOME
  Unresolved: 61; depth cutoffs: 136
event-a5a37b430918de661d click src/frontend/components/output/preview/ClearButtons.svelte:133 () => clearAll(true)
  partial; may change live output; inspect conditions/trace; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:127 allCleared && $outputCache && $outputCache?.slide?.type !== "ppt"
  Effects (101):
    src/frontend/components/output/clear.ts:30 presentation clearBackground
    src/frontend/components/output/clear.ts:31 presentation clearSlide
    src/frontend/components/output/clear.ts:32 presentation clearOverlays
    src/frontend/components/output/clear.ts:19 store-write src/frontend/stores.ts#outputSlideCache
    src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings
    src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename
    src/frontend/components/helpers/output.ts:1121 ipc OUTPUT
    src/frontend/components/output/clear.ts:39 store-write src/frontend/stores.ts#outputCache
    src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs
  … 91 more; add --all
  Store broadcasts: OUTPUT/OUT_SLIDE_CACHE; STAGE/OUT_SLIDE_CACHE; OUTPUT/OUTPUTS; OUTPUT/ALL_OUTPUTS; REMOTE/AUDIO_ROUTING; REMOTE/OUT; REMOTE/OUT_DATA; STAGE/OUT; REMOTE/RUNNING_ACTIONS; OUTPUT/METRONOME_TIMER; STAGE/METRONOME_TIMER; OUTPUT/CUSTOM_CREDITS; OUTPUT/PLAYING_AUDIO; OUTPUT/SHOWS; STAGE/SHOW_DATA; REMOTE/SHOW
  Unresolved: 34; depth cutoffs: 343
event-ab5399b7ae6fd3d423 click src/frontend/components/output/preview/ClearButtons.svelte:144 () => clear("background")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:142 outputContent?.type !== "pdf" && outputContent?.type !== "ppt"
  Effects (1):
    src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction
  Unresolved: 1; depth cutoffs: 0
event-39c8aaa6a4d0b592c9 click src/frontend/components/output/preview/ClearButtons.svelte:148 () => openPreview("background")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:142 outputContent?.type !== "pdf" && outputContent?.type !== "ppt"
    src/frontend/components/output/preview/ClearButtons.svelte:147 !allCleared
  Effects (0):
    none indexed
  Unresolved: 1; depth cutoffs: 0
event-b71212f3e8f32e246a click src/frontend/components/output/preview/ClearButtons.svelte:159 () => clear("slide")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:157 getMediaLayerType(outBackground.path || "", backgroundData) !== "foreground" || !slideCleared
  Effects (1):
    src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction
  Unresolved: 1; depth cutoffs: 0
event-c73701cd1a13f890f3 click src/frontend/components/output/preview/ClearButtons.svelte:165 () => openPreview("slide")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:157 getMediaLayerType(outBackground.path || "", backgroundData) !== "foreground" || !slideCleared
    src/frontend/components/output/preview/ClearButtons.svelte:164 !allCleared
  Effects (0):
    none indexed
  Unresolved: 1; depth cutoffs: 0
event-163e0174b2a925f3d1 click src/frontend/components/output/preview/ClearButtons.svelte:175 () => clear("overlays")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Effects (1):
    src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction
  Unresolved: 1; depth cutoffs: 0
event-f197b5498ba61cfe84 click src/frontend/components/output/preview/ClearButtons.svelte:179 () => openPreview("overlays")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/output/preview/ClearButtons.svelte:178 !allCleared
  Effects (0):
    none indexed
  Unresolved: 1; depth cutoffs: 0
event-142afc74dae0040554 click src/frontend/components/output/preview/ClearButtons.svelte:188 () => clear("audio")
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Effects (1):
    src/frontend/components/output/preview/ClearButtons.svelte:52 store-write src/frontend/stores.ts#timelineRecordingAction
  Unresolved: 1; depth cutoffs: 0
  … 3 more; add --all
```

### npm run ai:ask -- menu duplicate

[verified] 1.179 s.

```text
event-8e206b9ee500e3451f menu src/frontend/components/context/contextMenus.ts:105 duplicate
  partial; no direct audience effect indexed; unresolved/deeper calls may change output; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/context/menuClick.ts:137 clickActions[id] exists; enabled is passed to handler, not a dispatch guard
    src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem
    src/frontend/components/context/menuClick.ts:457 duplicate(obj.sel)
    src/frontend/components/context/menuClick.ts:459 obj.contextElem?.classList.value.includes("#audio_effect_item")
    src/frontend/components/context/menuClick.ts:468 updateEffectItem(obj, (items, index) => items.splice(index + 1, 0, clone(items[index])))
    src/frontend/components/context/menuClick.ts:470 obj.contextElem?.classList.value.includes("#event")
    src/frontend/components/context/menuClick.ts:475 obj.contextElem?.classList.value.includes("#interaction_input")
    src/frontend/components/context/menuClick.ts:478 !interactionId
    src/frontend/components/context/menuClick.ts:481 !a[interactionId]
    src/frontend/components/context/menuClick.ts:489 obj.contextElem?.classList.value.includes("stage_item")
  Effects (9):
    src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText
    src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard
    src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText
    src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator
    src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator
    src/frontend/components/helpers/clipboard.ts:1279 store-write src/frontend/stores.ts#media
    src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects
    src/frontend/components/context/menuClick.ts:2234 store-write src/frontend/stores.ts#effects
    src/frontend/components/context/menuClick.ts:480 store-write src/frontend/stores.ts#interactions
  Store broadcasts: OUTPUT/MEDIA; OUTPUT/EFFECTS
  Unresolved: 6; depth cutoffs: 13
Layouts: drawer_show_button src/frontend/components/context/contextMenus.ts:290; overlay_card src/frontend/components/context/contextMenus.ts:310; overlay_card_default src/frontend/components/context/contextMenus.ts:311; scene_card src/frontend/components/context/contextMenus.ts:313; template_card src/frontend/components/context/contextMenus.ts:317; template_card_default src/frontend/components/context/contextMenus.ts:318; effect_card src/frontend/components/context/contextMenus.ts:320; effect_card_default src/frontend/components/context/contextMenus.ts:321; action src/frontend/components/context/contextMenus.ts:333; interaction_input src/frontend/components/context/contextMenus.ts:338; project_button src/frontend/components/context/contextMenus.ts:344; global_timer src/frontend/components/context/contextMenus.ts:373; variable src/frontend/components/context/contextMenus.ts:378; slide src/frontend/components/context/contextMenus.ts:384; slideChild src/frontend/components/context/contextMenus.ts:386; group src/frontend/components/context/contextMenus.ts:389; layout src/frontend/components/context/contextMenus.ts:393; stage_slide src/frontend/components/context/contextMenus.ts:410; stage_item src/frontend/components/context/contextMenus.ts:412; stage_text_item src/frontend/components/context/contextMenus.ts:414; edit_box src/frontend/components/context/contextMenus.ts:418; effect_item src/frontend/components/context/contextMenus.ts:421; event src/frontend/components/context/contextMenus.ts:429; theme src/frontend/components/context/contextMenus.ts:432; style src/frontend/components/context/contextMenus.ts:433; profile_tab src/frontend/components/context/contextMenus.ts:434; output_screen src/frontend/components/context/contextMenus.ts:436; output_screen_stage src/frontend/components/context/contextMenus.ts:437; audio_effect_item src/frontend/components/context/contextMenus.ts:441
Loaders: none
Visibility/disabled conditions:

Appears (16):
src/frontend/components/context/ContextItem.svelte:131 { let isHidden = false if (contextElem?.classList.value.includes("#effect_item")) { const effectId = $activeEdit.id || "" const effect = $effects[effectId] co
src/frontend/components/context/ContextItem.svelte:234  }, delete_all: () => { if (!contextElem?.classList.value.includes("#event")) return let group = $events[contextElem.id].group if (group && Object.entries($events).find(([id, event
src/frontend/components/drawer/audio/AudioEffects.svelte:57 bled = effectItem.enabled !== false} <div class="effect-card context #audio_effect_item" id={effectItem.id} data-index={i} data-channel={channelId} class:bypasse
src/frontend/components/drawer/calendar/Day.svelte:57 ction?.data) : ""} <div class="event context #event" style="color: {event.color || 'unset'}" id={event.id} data-t
src/frontend/components/drawer/pages/Interactions.svelte:311  class="input {$activeInteractions.includes(openedId) ? '' : 'context #interaction_input'}" class:active={$activeInteractions.includes(openedId) && (i === inputIndex || openedInter
src/frontend/components/drawer/pages/Shows.svelte:275 _old", "")] || show.timestamps?.modified || show.timestamps?.created || "", true)} class="#drawer_show_button" match={show.match || null} searchValue={query} isFirst={firstMatch?.i
src/frontend/components/edit/EffectTools.svelte:90 ontent = getItemSections(item)} <div class="item-row context #effect_item" id={index.toString()} data-index={index} on:mouseenter={() => hoveredEffectItem.set(item.hidden ? null : 
src/frontend/components/edit/editbox/Editbox.svelte:242 this={itemElem} class={plain ? "editItem" : `editItem item ${isLocked ? "" : "context #edit_box"}`} class:selected={$activeEdit.items.includes(index)} class:decoration={item?.decor
src/frontend/components/settings/tabs/OutputsTabs.svelte:157 sList} value={$currentOutputSettings || ""} newLabel="settings.new_output" class="context #output_screen" on:open={(e) => currentOutputSettings.set(e.detail)} on:create={createOutp
src/frontend/components/settings/tabs/ProfilesTabs.svelte:63 lue={$selectedProfile || ""} newLabel="new.profile" class={$activeProfile ? "" : "context #profile_tab"} on:open={(e) => selectedProfile.set(e.detail)} on:create={createProfile} le
  … 6 more; add --all
Definition: duplicate: { label: "actions.duplicate", icon: "duplicate", iconColor: "#97c7ff", shortcuts: ["Ctrl+D"] }
```

### npm run ai:ask -- action next_slide

[verified] 1.207 s.

```text
event-03cb90c5b0a80a92f7 action src/frontend/components/actions/api.ts:241 () => OutputHelper.advanceOutputs("next")
  partial; may change live output; inspect conditions/trace; no history creation found within six levels; not proof of non-undoability
  Effects (13):
    src/frontend/components/actions/api.ts:241 presentation OutputHelper.advanceOutputs
    src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/OutputHelper.ts:96 presentation setOutput
    src/frontend/components/helpers/debugLog.ts:47 ipc OUTPUT
    src/frontend/components/output/clear.ts:162 presentation setOutput
    src/frontend/components/helpers/debugLog.ts:47 ipc OUTPUT
    src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries
    src/frontend/components/helpers/OutputHelper.ts:706 presentation setOutput
    src/frontend/components/helpers/OutputHelper.ts:707 presentation updateOut
  … 3 more; add --all
  Store broadcasts: OUTPUT/OUTPUTS; OUTPUT/ALL_OUTPUTS; REMOTE/AUDIO_ROUTING; REMOTE/OUT; REMOTE/OUT_DATA; STAGE/OUT
  Unresolved: 4; depth cutoffs: 116
Payload: none/inferred
Input routes (29; runtime routing/permissions conditional):
src/server/remote/components/Main.svelte:56 send (remote)
src/server/remote/components/pages/Lyrics.svelte:14 send (remote)
src/server/remote/components/pages/Show.svelte:107 send (remote)
src/server/remote/components/pages/Slide.svelte:28 send (remote)
src/server/remote/components/tablet/layout/TabletCenter.svelte:92 send (remote)
src/frontend/components/actions/midi.ts:126 runAction (MIDI)
src/frontend/components/actions/api.ts:446 oscToAPI (OSC)
src/electron/utils/api.ts:263 sendToMain (REST/WebSocket/OSC)
src/frontend/components/actions/actions.ts:165 runAction (internal dispatcher)
src/frontend/components/actions/api.ts:457 API_ACTIONS[id] (internal dispatcher)
  … 19 more; add --all
```

### npm run ai:ask -- trigger slide_click

[verified] 1.159 s.

```text
Activation slide_click src/frontend/components/actions/customActivation.ts:17
event-1b3e3a330759caa248 trigger src/frontend/components/show/Slides.svelte:116 customActionActivation
  partial; may change live output; inspect conditions/trace; no history creation found within six levels; not proof of non-undoability
  Conditions:
    src/frontend/components/actions/actions.ts:162 action.customActivation !== id || action.enabled === false
    src/frontend/components/actions/actions.ts:163 specificActivation && action.specificActivation?.includes(id) && (!action.specificActivation.split("__")[1] || action.specificActivation.split("__")[1] !== specificActivation)
    src/frontend/components/actions/actions.ts:169 actionTriggered && id === "startup"
  Effects (14):
    src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions
    src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs
    src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings
    src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename
    src/frontend/components/helpers/output.ts:1121 ipc OUTPUT
    src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache
    src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache
    src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache
    src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache
  … 4 more; add --all
  Store broadcasts: REMOTE/RUNNING_ACTIONS; OUTPUT/OUTPUTS; OUTPUT/ALL_OUTPUTS; REMOTE/AUDIO_ROUTING; REMOTE/OUT; REMOTE/OUT_DATA; STAGE/OUT; OUTPUT/SHOWS; STAGE/SHOW_DATA; REMOTE/SHOW
  Unresolved: 3; depth cutoffs: 39
Enabled custom actions matching activation id run conditionally; their configured API commands remain runtime data.
```

### npm run ai:ask -- trace space-live

[verified] 1.157 s.

```text
space-live [verified] docs/ai/traces/space-live.md
Action: Press Space in live
Duration: 3292ms
Static comparison: Observed stores extend the bounded candidate union; review subscriptions, DOM bindings and unresolved calls.
Evidence: docs/ai/traces/space-live.json
```

### npm run ai:ask -- writes outputs

[verified] 1.16 s.

```text
Events with possible writes to outputs: 265 [code; branch/callback union]
src/frontend/App.svelte:40 automatic  toggleRemoteStream
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/App.svelte:67 keyboard dynamic keydown
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/MainLayout.svelte:50 trigger show_opened customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/audio/audioFading.ts:74 trigger audio_end customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/audio/audioFading.ts:107 trigger audio_end customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/audio/audioPlayer.ts:316 trigger audio_start customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/audio/audioPlayer.ts:514 automatic  checkNextAfterMedia
  src/frontend/components/helpers/output.ts:618 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].enabled = true return a })
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:225 src/frontend/stores.ts#outputs outputs.update((a) => { if (type === "slide" && data?.id) { // reset slide cache (after update) setTimeout(() => outputSlideCache.set({}), 50) const currentOutSlideId = get(outputs
src/frontend/audio/audioPlaylist.ts:149 trigger audio_playlist_ended customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/components/actions/actions.ts:154 trigger startup customActionActivation
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
src/frontend/components/actions/api.ts:218 action name_select_project (data: API_strval) => selectProjectByName(data.value)
  src/frontend/components/helpers/output.ts:649 src/frontend/stores.ts#outputs outputs.update((a) => { a[Object.keys(a)[0]].active = true return a })
  src/frontend/components/helpers/output.ts:1106 src/frontend/stores.ts#outputs outputs.update((output) => { const id = uid() outputId = id if (get(themes)[get(theme)]?.colors?.secondary) defaultOutput.color = get(themes)[get(theme)].colors.secondary! output[i
  … 255 more; add --all
```
