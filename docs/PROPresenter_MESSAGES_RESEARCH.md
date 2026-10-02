# ProPresenter Messages research and proposed FreeShow design

Research date: 2026-10-02. Status: the core FreeShow Messages workflow is implemented in this fork; see [operator instructions](MESSAGES.md) and [AI implementation reference](../AI_README.md#messages-definitions-drafts-and-live-instances). The research below retains the distinction between verified ProPresenter behavior and design proposals. The Focus Mode button's position is deferred at the user's request.

Implemented: saved text templates and named operator fields; separate drafts/live snapshots; right-side Show/Update/Hide controls; native artwork editing and banner backgrounds; scrolling direction, duration, repeat, offscreen start, gap and edge feather; per-message fades, automatic hiding and optional repeated fade cycles; normal output routing; multiple messages; native history and persistence. Clock/countdown operating tokens, stage-only controls, remote approval and message-specific actions/macros remain possible extensions.

## Requested behavior

The operator should select a saved message in the right sidebar, fill labeled fields such as **Child Name**, preview the result, and show it over the current slide. The message's wording, design/background, scrolling and appearance/removal effects should be editable ahead of time.

Example:

- Saved wording: `Parents of {Child Name}, please come to the back.`
- Operator field: `Child Name = Emma`.
- Output: `Parents of Emma, please come to the back.`

The notation above describes the desired UX, not ProPresenter's file format or a committed FreeShow storage schema.

## Verified ProPresenter behavior

### Operator panel and reusable messages

Messages are available in the Show Controls area below the preview, at the bottom right. The controls can be rearranged. This matches the requested side-panel workflow. [Show Controls](https://support.renewedvision.com/hc/en-us/articles/4412263446035-What-are-Show-Controls).

ProPresenter combines fixed wording with editable tokens. Its ProPresenter 7 manual describes predefined text fields, custom text tokens, system time and timers. A saved nursery message can accept a changing child identifier without rewriting its sentence. The manual also describes one transition shared by Messages, rather than individual per-message transitions. [ProPresenter 7 manual, p. 124](https://files.renewedvision.com/propresenter/support/Pro7UserGuide.pdf#page=124).

The older ProPresenter 6 documentation explicitly describes a compact operating view and an expanded editing view, saved messages, and multiple simultaneously visible messages with different formatting. Use it as historical evidence, not a guarantee of every detail in the latest version. [ProPresenter 6 Messages](https://learn.renewedvision.com/propresenter6/the-features-of-propresenter/messages).

### Styling and backgrounds

A Message can select a theme; Renewed Vision's countdown-message walkthrough demonstrates creating a styled theme text box and applying it to a Message. [Countdown Messages](https://support.renewedvision.com/hc/en-us/articles/360050786794-How-to-Create-a-Countdown-for-an-Audience-Screen).

Themes provide text formatting, automatic text scaling, shapes with fills/strokes/shadows, and media objects. A banner background can therefore be designed as a shape/image accompanying the text. The Theme editor distinguishes media placed directly on a slide from media actions sent to the Media layer. For our implementation, a message's background should belong to the message itself so it does not replace the presentation's background. This last sentence is a FreeShow design recommendation. [Theme design](https://support.renewedvision.com/hc/en-us/articles/34551484745875-Guide-to-Using-Themes-in-ProPresenter), [Theme editor](https://support.renewedvision.com/hc/en-us/articles/11910559859603-Themes-in-ProPresenter).

The general Theme editor's media-action support should not be interpreted as proof that every action is honored by a Message theme. Message-specific support for video/actions would need an installed-app check before claiming exact parity.

### Scrolling and edge fading

Scrolling is configured on a text box. Documented controls include direction, automatic/off-screen start, speed, repeat, distance between repeated copies, and feathering at the edges. Feathering softens the text as it crosses the viewport boundary; it does not dismiss the whole message. Text can also be linked to supported sources, including files and RSS. [Scrolling text](https://support.renewedvision.com/hc/en-us/articles/4403013895059-Using-Scrolling-Text-in-ProPresenter).

These are separate settings:

| Setting                | Meaning                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Text scroll            | Move the content inside its text box.                                                                                 |
| Scroll repeat          | Repeat the text after it passes out of view.                                                                          |
| Edge feather           | Fade text near the clipping edges while scrolling.                                                                    |
| Message transition     | Animate the message appearing or disappearing.                                                                        |
| Message dismissal      | Decide when the message is removed.                                                                                   |
| Scheduled reappearance | Show, hide, wait and show again; an additional FreeShow proposal, not established here as a standard Messages option. |

### Show, clear, duration and transitions

Messages can be shown explicitly and cleared independently. The countdown walkthrough describes manual dismissal, dismissal at timer completion, and dismissal after a specified duration. Countdown formatting/overrun controls are additional timer-specific options. [Countdown Messages](https://support.renewedvision.com/hc/en-us/articles/360050786794-How-to-Create-a-Countdown-for-an-Audience-Screen).

Renewed Vision's transition guide identifies a dedicated Messages transition control. These transitions apply to Messages and are configured separately from the global slide/media defaults. Fade/dissolve and other transitions are supported by the transition system. [Transition guide](https://support.renewedvision.com/hc/en-us/articles/360041342354-Guide-to-Using-Transitions-in-ProPresenter).

**Documentation discrepancy:** the countdown article says an unset Messages transition uses the global slide transition, while the transition guide says Messages transitions do not follow global transitions. The manual describes a shared Messages transition. For FreeShow, make the chosen behavior explicit in the UI and data; do not silently depend on an assumed ProPresenter fallback. Per-message fade-in/out controls would be our enhancement to the manual's shared transition model.

### Output routing and continued presentation

Messages have their own layer above the slide/media content. Audience Looks can enable or disable that layer on each audience screen. A public message can therefore be displayed on a projector while omitted from another audience output. Stage Message is a distinct control for content linked to a stage layout. [Output layers](https://support.renewedvision.com/hc/en-us/articles/13634000690323-ProPresenter-Output-Layers), [Audience Looks](https://support.renewedvision.com/hc/en-us/articles/360041407174-Using-Looks-to-Show-Different-Screen-Content-in-ProPresenter), [Stage and Messages controls](https://support.renewedvision.com/hc/en-us/articles/6032278869011-Using-ProPresenter-Control).

This suggests that FreeShow Messages should remain active across normal slide changes and should clear without clearing lyrics, background media or unrelated overlays. That is the proposed behavior to test, not a claim about every possible ProPresenter clear action.

### Remote operation

ProPresenter Control exposes saved-message selection, token inputs and a Show action over the local network. It also has a separate Stage Message control. [ProPresenter Control](https://support.renewedvision.com/hc/en-us/articles/6032278869011-Using-ProPresenter-Control).

The manual additionally describes web requests submitted for operator approval through Web Notifications. This is a possible later FreeShow enhancement. [ProPresenter 7 manual, p. 127](https://files.renewedvision.com/propresenter/support/Pro7UserGuide.pdf#page=127).

## What FreeShow already implements

These findings come from this repository, not from ProPresenter documentation. No runtime parity claim is implied solely by finding the source code.

| Capability                       | Existing source                                                                                                                                                       | Implication                                                                                                                            |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Persistent text/number variables | `src/frontend/stores.ts::variables`; `src/types/Main.ts::Variable`; `src/frontend/components/drawer/pages/Variables.svelte`; `components/main/popups/Variable.svelte` | Reuse the variable concepts and existing controls where appropriate.                                                                   |
| Variable token resolution        | `src/frontend/components/helpers/showActions.ts::getVariableNameId`, `getVariableValue`, `replaceDynamicValues`                                                       | Existing normalized-name tokens include `{$child_name}` and `{variable_child_name}`.                                                   |
| Reactive variable text           | `src/frontend/components/slide/TextboxLines.svelte` and `Textbox.svelte`                                                                                              | Global variable edits can change rendered text immediately. Draft operator fields must not inadvertently change already-live messages. |
| Editable overlay designs         | `src/types/Show.ts::Overlay`; `src/frontend/components/edit/editors/OverlayEditor.svelte`                                                                             | Text, shapes and media can use the current item/editor model. Avoid a second design editor.                                            |
| Independent overlays on output   | `src/frontend/components/helpers/output.ts::setOutput`; `src/frontend/components/output/layers/Overlays.svelte`, `Overlay.svelte`                                     | Reuse the overlay rendering/presentation path for message artwork.                                                                     |
| Auto-hide                        | `Overlay.displayDuration`; `helpers/output.ts::startOverlayTimer`, `clearOverlayTimer`                                                                                | Existing per-output overlay timers are a starting point for duration-based message dismissal.                                          |
| Scrolling text                   | `src/types/Show.ts::Scrolling`; `src/frontend/components/edit/values/boxes.ts::scrolling`; `src/frontend/components/slide/TextboxLines.svelte`                        | Four directions, a duration-based speed setting, gap and continuous copies exist.                                                      |
| In/out item effects              | `src/frontend/components/output/transitions/SlideItemTransition.svelte`, `OutputTransition.svelte`; `src/frontend/utils/transitions.ts`                               | Existing transitions have in/out/between variants and item overrides. Validate grouped banner/text removal together.                   |
| Right sidebar                    | `src/frontend/MainLayout.svelte`; `src/frontend/components/output/preview/Preview.svelte`; `components/output/tools/Overlay.svelte`                                   | Mount the operating panel under the preview; make it available in normal Show view and Focus Mode.                                     |
| Persistence/history              | `src/frontend/utils/save.ts`; `src/frontend/components/helpers/history.ts`, `historyHelpers.ts`, `historyStores.ts`; `src/electron/data/store.ts`                     | Definition edits should use history and the established save/sync paths.                                                               |

The existing FreeShow scroll `speed` is effectively animation duration: `--scrollSpeed` is `(speed ?? 30) * 1.5` seconds. Larger values slow a cycle. A new control labeled **Speed** must account for this inversion instead of copying a ProPresenter slider's semantics. Scrolling is explicitly disabled for stage rendering in `TextboxLines.svelte`.

FreeShow's `Scrolling` type currently exposes direction, speed and gap. ProPresenter-like off-screen start, one-shot/repeat selection and edge feathering are gaps in this inspected model. Do not assume they already work merely because continuous scrolling exists.

## Proposed FreeShow feature

This is an implementation recommendation, not a description of features already present.

### Two separate working views

**Design/edit view:** create and name a message; edit its reusable wording; define labeled tokens; assign the message's overlay design; set placement, text styling, background color/opacity or image; configure scrolling, fades and dismissal; preview with sample values. Use the existing overlay editor for graphical work.

**Operating view in the right sidebar:** choose a saved message; display just its labeled fields; show a resolved preview; choose output targets; provide **Show / Update**, **Hide**, and an active-state indicator. Preserve access in Focus Mode. Do not tie the panel to `activeShow` being populated.

Suggested operating example:

| Control    | Value                                     |
| ---------- | ----------------------------------------- |
| Message    | Parent call                               |
| Child Name | Emma                                      |
| Location   | the back                                  |
| Preview    | Parents of Emma, please come to the back. |
| Display    | Until hidden / chosen duration            |
| Actions    | Show or Update; Hide                      |

### Saved definitions, drafts and live instances

Keep these distinct:

1. **Definition:** saved wording, token definitions, design reference and display options. Design changes participate in undo/redo and persistence.
2. **Draft values:** operator edits in the panel. Preview resolves the draft without calling presentation APIs.
3. **Live instance:** the values/design committed by Show/Update, keyed by message and output. Store serializable output data using the existing synchronization path.

Message-local tokens are preferable to a single shared global `Child Name` variable. Otherwise two messages can unexpectedly alter each other, and typing a new name can change a currently visible message before Show is pressed. Reuse the token resolver where suitable, but investigate adding an instance scope to its reference/context. Do not implement fake global variable renaming as a hidden coupling.

Use a stable token ID plus a human label rather than relying exclusively on label-normalization: renamed labels and spaces/punctuation can collide. Handle repeated tokens, missing fields, long values and multiline values consistently. Operator text should render as text; inspect the existing HTML/dynamic-text handling before integrating arbitrary values.

### Rendering and routing

Reuse native overlay items, Textbox rendering, transitions, timers and the output bridge. A message can be a metadata-backed overlay definition plus a message runtime instance; whether its registry belongs in a new store or overlay metadata should be decided after tracing persistence and cloud sync.

Give messages their own control identity even if their artwork uses the overlay engine: Hide Message must remove only that message instance. Allow output selection, and treat stage-only notices as a separate destination. A message background is an object behind its text, not an instruction to replace `out.background`.

Support at least a static banner and a scrolling ticker. The scroll clipping/feather mask should affect the text area, while the banner can stay fixed. Fade the message artwork together so its background does not remain visible after its text disappears. Clear scheduled timers on manual hide/update/output removal; prevent an old instance's timer from hiding a newly shown instance.

### Suggested delivery order

1. Saved messages and message-local token fields, resolved preview, right-panel Show/Update/Hide, output targeting, persistent definitions and undoable design edits.
2. Editable banner/background using existing overlay objects; fade-in/out and automatic dismissal; verify persistence through slide changes and Focus Mode.
3. Scrolling controls, consistent speed behavior, off-screen start, repeat mode and edge feathering. Reuse native text animation and add only the missing behavior.
4. Optional extras: presets, countdown tokens, multiple simultaneous messages, slide actions/macros, and remote submission/approval.

**Repeated whole-message fade cycles** (appear, hold, disappear, pause, repeat) should be an explicit extra mode if wanted. It is different from repeating ticker text; this research did not verify that it is a standard ProPresenter Messages setting.

## Acceptance checks for implementation

- Enter Emma in the operator panel and show the resolved parent-call text over the existing presentation.
- Edit the draft to another child without changing the live Emma message; Update commits the change.
- Change slides while the message stays visible; hide it without changing the current slide, background, playback or unrelated overlays.
- Show two messages with different values for similarly named tokens and verify isolation.
- Route to one selected output and verify the omitted output is unchanged; repeat with output bindings and locked outputs.
- Use long names, apostrophes, ampersands, braces, multiline values, repeated tokens and missing values; verify fit/preview/output behavior.
- Verify scrolling direction, clipping, gap, start position, repeat, feathering and duration/speed at different resolutions.
- Show/hide/update quickly; ensure fades and auto-dismiss timers cannot hide a newer instance or strand a background.
- Edit artwork/settings, undo/redo, restart and confirm definitions persist. Verify the chosen storage's sync behavior.
- Keep the operator panel usable in Focus Mode while the bottom media drawer is open.

## Source limitations

Only official Renewed Vision sources were used for product behavior. Some old `learn.renewedvision.com` URLs redirect to the general knowledge base when opened, although indexed documentation remains available. The ProPresenter 7 PDF origin returned HTTP 522 during download; its indexed official excerpts were used for the cited token/transition and web-notification details. No installed ProPresenter instance was inspected.

Separate verified behavior, documentation discrepancies, historical behavior and proposed FreeShow enhancements when implementing. Recheck version-dependent details if strict parity is required.
