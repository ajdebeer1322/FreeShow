# How FreeShow actually works (living document)

Purpose: one place that says **what does what and why**, including the surprising connections found while testing.
It is for people (and AI agents) who need to change the output/render code or hunt a bug. `AI_README.md` is the navigation map (where files are, commands); this file is the
behaviour reference (how it flows, what depends on what, what is true but not obvious).

## Rules for keeping this file useful

1. **Add every new finding the moment you have it** (section 9, newest at the bottom). A finding is anything that was
   not obvious from reading one file: a hidden dependency, a timing, a cache key, a trap.
2. Every claim carries a status: **[verified]** (measured/logged in the running app, say how), **[code]** (read in the
   source, not observed running), **[guess]** (hypothesis, say what would confirm it). Do not upgrade a status
   without evidence. Delete or fix entries that turn out wrong, and say so in the log.
3. Give file names and function names, not line numbers (they rot).
4. When you change behaviour described in sections 1-8, update that section in the same commit.
5. Keep timings with the conditions they were measured under (window size, transition, machine).

Legend for names: `src/frontend/components/...` is shortened to `c/...`.

---

## 1. The big picture

- **Electron main process** (`src/electron`): windows, files, IPC. It owns no presentation decisions.
- **Main window renderer** (`src/frontend`, `currentWindow === null`): the operator UI. Decides *what* is on output
  (`setOutput` in `c/helpers/output.ts` writes the `outputs` store) and stores edits, including measured font sizes.
- **Output window renderer** (`currentWindow === "output"`): the same bundle, but it only *renders*. It receives
  copies of the stores over IPC and runs `c/output/Output.svelte`.
- The same `Output.svelte` is also embedded in the main window as **preview/mirror** (`preview` / `mirror` props),
  with different rules (no precompute, no transition when `mirror && !preview`, may write sizes into the show).

### How state reaches the output window **[code]**

`utils/listeners.ts` subscribes to each store in the main window and does `send(OUTPUT, [KEY], data)`
(`OUTPUTS`, `SHOWS`, `TEMPLATES`, `STYLES`, `TRANSITION`, `MEDIA`, `TIMERS`, `VARIABLES`, ...).
`utils/receivers.ts` sets the matching store in the output window (`SHOWS` -> `showsCache`).
Consequences:

- The output window's `showsCache` is a **copy**; whatever the main window writes into a show (including
  `autoFontSize`) arrives later through this channel.
- `outputs` updates are debounced (`hasNewerUpdate("LISTENER_OUTPUTS", 1)`), so a burst of activations can collapse.
- A show that was never output before may have to be sent first, which adds latency to the very first activation
  of that show (see F-009).

---

## 2. Render pipeline for one slide (output window)

```
outputs store (out.slide)            c/output/Output.svelte
   |                                   - clone out -> slide (only when the JSON changes)
   |                                   - updateSlideData(): currentSlide = show slide, with setTemplateStyle()
   |                                   - updateSlide(): after 50 ms (10 ms outside the output window) sets
   v                                     actualSlide/actualCurrentSlide/actualCurrentLineId   <- "50 ms output wait"
Zoomed.svelte  (fixed-resolution box, scaled with transform; bind:ratio)
   v
layers/SlideContent.svelte           the show/hide state machine for text items (section 4)
   |  precompute probes (hidden Textbox)       -> section 5
   v
transitions/SlideItemTransition.svelte   builds per-item in/out/between Transition objects + fixed auto size delay
   v
transitions/OutputTransition.svelte      <div class="transitioner"> with in:custom / out:custom
   v
slide/Textbox.svelte                 item box: style, template overrides, auto size measuring (section 5)
   v
slide/TextboxLines.svelte            lines -> .break -> span.textContainer, applies fontSize
```

Layer order inside `Zoomed` (Output.svelte): style background, scene media, background, colorbars, effects under,
underlay overlays, **slide** (PDF / PPT / SlideContent + metadata `Overlay`), effects over, overlays, messages,
attribution, draw.

`MainOutput.svelte` (the output window's root) only renders `<Output>` **2000 ms after the output window itself mounted**
(`loaded`, while it shows a hidden `.fontPreload` element). Anything activated before that waits for the rest of the
2 s (F-014). **[code + verified]**

### Where the item list comes from **[code]**

- Normal slide: `_show(id).slides([slideId])` -> clone -> `setTemplateStyle(outSlide, currentStyle, items, outputId,
  customDynamicValues)`, which picks the template with `getStyleTemplate()` and calls `mergeWithTemplate()`.
- Scripture drawer ("temp"): `setOutput("slide", { id: "temp", tempItems, customDynamicValues, ... })`;
  `Output.getCurrentSlide()` returns `{ items: slide.tempItems }`. Items were already built by
  `drawer/bible/scripture.ts` using `scriptureSettings.template`; the output style's `templateScripture[_n]`
  is applied on top by `setTemplateStyle`.
- Template choice (`getStyleTemplate`): scripture (`id === "temp"`, `reference.type === "scripture"` or `scripture*`
  dynamic values) uses `style.templateScripture[_<translations>]`, else `style.template`; the template's
  `settings.firstSlideTemplate` is used on slide index 0 (not for temp).
- `Output.svelte` also has `$: if (styleId && currentStyle && currentSlide !== undefined) setTemplateItems()`, which
  re-merges `currentSlide.items` in place after the first assignment. So SlideContent sees the items
  **twice** per change: raw, then template-merged **[code]**.

### `mergeWithTemplate` facts that matter **[code]**

- `resetAutoSize` is true for output: `delete item.autoFontSize` on every template-applied item, so an output-style
  slide never carries a stored size.
- Item `auto`/`textFit` come from the template item (`textFit` alone implies `auto = true`).
- Merged items usually have **no `id`** (see F-005).
- Dynamic values: `replaceScriptureValues` resolves `{scripture_*}` into real text before the item reaches Textbox.

---

## 3. Transitions and delays (what decides each number)

| Name | Where | Meaning |
| --- | --- | --- |
| transition (type/duration/easing) | `getOutputTransitions`: slide `transition`/`mediaTransition` > output style `transition` > `transitionData` (settings). `SlideItemTransition.startTransition` then lets item `actions.transition` win: item > slide > style > global | `transitions.text` is passed to `SlideContent` as `transition` |
| `fadeInOffset` | transition setting, default 50 (%) | `waitToShow = duration * fadeInOffset / 100`: time from the old content starting to leave until the new content is mounted (`SlideContent.updateItems`) |
| output wait | `Output.updateSlide` | 50 ms in the output window before `actualSlide` changes (10 ms elsewhere) |
| `showTimer` / `hideTimer` | item `actions` | output window and preview only. `inDelay`/`outDelay` of the item. With a hideTimer the fixed auto size hold is not used |
| auto size hold (legacy) | `SlideItemTransition` | 500 ms out, 490 ms in, now only for what is not pre-measured (section 5.4) |
| auto size wait (new) | `SlideContent.waitForAutoSize` | until the pre-measure is ready, max `AUTO_SIZE_MAX_WAIT` = 500 ms |
| media identical-item hold | `SlideItemTransition` | 250 ms when a media item with duration 0 might still be fading |

Svelte 5 detail **[code]**: `in:`/`out:` parameters (including `delay`) are read **once when the transition starts**.
A delay can therefore never "end early"; anything that must end on an event has to be a gate before the element is
added/removed (this is why the auto size wait lives in `SlideContent`'s timer chain).

### The show/hide chain in `SlideContent.updateItems` **[code, matches measured timings]**

```
t0      slide data changes (after the 50 ms output wait)
        scheduleAutoSizePrecompute()                 probes mounted
        identical items?  -> keep them, no cycle
t0+0    timer 0: waitForAutoSize() until probes ready (<=500 ms)      <- gate
        setShow(false)            old SlideItemTransition removed -> its out transition starts
t+0     timer 0: currentItems/current = new slide
t+waitToShow   setShow(true)      new SlideItemTransition mounted -> in transition starts
t+0     transitioningBetween = false
```

`showKey` (bumped by `setShow`) is the `{#key}` value, not the boolean, because Svelte 5 would otherwise revive the
fading-out branch (see AI_README, "Svelte 5 legacy mode").

### Measured phase timeline (ms after the key press, medians, fade 500 / 50 %, output window warm) **[verified, F-015]**

| Phase | Svelte 3 | Svelte 5 | What happens |
| --- | --- | --- | --- |
| `outputs` store changes (main window) | 10 | 12 | key handler -> `setOutput` |
| IPC sent / arrives in the output window | 14 / 15 | 18 / 18 | `listeners.ts` -> main process -> output window `OUTPUTS` |
| `Output.svelte` `slide` set | 16 | 18 | `updateOutData("slide")` |
| `actualSlide` set, `SlideContent.updateItems` runs | 72 | 75 | after the 50 ms output wait |
| `setShow(false)` / items swapped | 72 / 72 | 75 / 76 | timers of 0 ms |
| `setShow(true)` | 325 | 328 | `waitToShow` = 250 ms after the swap |
| new `OutputTransition` mounted, in transition starts | 326 | 332 | |
| text visible (opacity > 0.02) | 378 | 383 | about 55 ms into the sine ease |
| text fully visible (opacity > 0.98) | 791 | 799 | 465 ms after mount |

Auto sized slide (stored size): first visible 449 / 456, fully visible 782 / 793 (the text box is hidden for ~110 ms
after mount, so it is first visible ~70 ms later than a plain slide, mid-fade).
Clear (Escape): text invisible (opacity <= 0.02) after 475 / 491 ms; the element leaves the DOM at 486 / 539 ms
(recorder `lastChange`).

Transition "none": ~80-100 ms (50 ms output wait + frame + render).

---

## 4. Persistence of "the same item" (no flicker)

`SlideContent` classifies items per update **[code]**:

- **persistent** (no text lines, JSON-identical to old item): rendered outside any transition.
- **held text** (JSON-identical, same `lines` string, no `{dynamic}`, already shown): untouched; only slide refs are
  updated (`SlideItemTransition.startTransition` also refuses to stack an identical state).
- everything else goes through the hide/show cycle.

---

## 5. Auto size (text fitting) - the part with the most hidden connections

### 5.1 Three different places hold a "size"

| Store | Key | Written by | Read by | Notes |
| --- | --- | --- | --- | --- |
| `item.autoFontSize` inside the **show** (`showsCache`, also overlays/templates) | slide item position | main window `Textbox.setItemAutoFontSize` only | `itemNeedsAutoSize()`, Textbox initial value, editors | Guards: not in a non-main window (`$currentWindow`), `itemIndex >= 0`, `ref.showId !== "temp"`. `itemIndex` is only passed by `slide/Slide.svelte` (the slide cards of the Show view), so **only those cards store sizes** [code]; output and preview Textboxes (`itemIndex = -1`) never do. It is also written as `previewAutoFontSize` for `preview` boxes |
| `autosizeCache.ts` (in memory, per window, max 500) | `show:<autoSizeKey>` | `Textbox.calculateAutosize` | `Textbox` before measuring, `shouldHideUntilAutoSizeCompletes` | Entry = `{signature, fontSize}`; valid only when the signature (see 5.3) matches |
| `SlideContent.measuredSignatures` | same `autoSizeKey` | `handlePrecomputeReady` | `scheduleAutoSizePrecompute` | Lets the wait be skipped without mounting a probe |

### 5.2 How `Textbox` measures **[code + verified by timestamps]**

- `loaded` becomes true **100 ms after mount** (immediately when `preview`). Nothing is measured before that.
  This is the floor for every first showing (~105-125 ms).
- `calculateAutosize()`: (1) immediate cache check (skipped for dynamic `{...}` text, chords, or
  `outputStyle.lines > 0`), (2) `await tick()`, (3) **only when `ratio < 0.5 && !preview && !isStage`**: wait loop
  150/50/20 ms (max 500) until the box size is stable, (4) second cache check, (5) `autosize()`, (6) write cache,
  `markAutoSizeReady()` -> `autosizeReady` event.
- `stateSignature = id|index _ resolvedTemplateId _ lines.length`. When it changes the text resets
  (`fontSize = 0`, hidden until measured). **Same line count + different text does not reset it**, and
  `autosizeReady` fires only once per signature.
- `hideUntilAutosized` hides the lines (`.align.hidden`) until measured; 600 ms safety unhides it. In `preview` the box
  never hides (it shows `previewAutoFontSize || autoFontSize || 100` immediately).
- At mount `itemElem` is not bound yet, so the cache signature lacks the container size and **never matches**; the
  visible output box therefore always starts hidden and becomes visible ~110 ms later even on a cache hit
  **[verified: markReady ~110 ms after mount in every logged case]**.

### 5.3 What the cache signature contains

`buildAutoSizeSignature`: item `lines`, `style`, box dimensions from the style, **container width/height of
`itemElem.parentElement` (rounded to 5 px, output only)**, `textFit`, `scrolling`, `list`, chords flag, `ratio`,
`outputStyle`, `styleIdOverride`, `mirror`, `preview`, `resolvedTemplateId`, ... So two Textboxes only share an
entry if their **parent element has the same size**. This is why the probe box must be as big as the transitioner
(F-004).

### 5.4 Pre-measure ("precompute") and the wait **[code, behaviour verified]**

- `scheduleAutoSizePrecompute(items)` mounts a hidden `Textbox` per text item that `canPrecomputeAutoSize`
  (auto/textFit, not `{dynamic}`, no chords, no output style line limit, no `lineReveal`) and has no stored
  `autoFontSize`, unless `measuredSignatures` already knows the content.
- Probes live in `.autosize-precompute` (off-screen at -10000 px, `visibility: hidden`, **100% x 100% of the output
  box**), keyed by a per-run `token` so a finished Textbox is never reused.
- `handlePrecomputeReady` -> when all keys are ready: remove probes, `continueAfterAutoSize()`.
- `waitForAutoSize(callback, wait)` runs `callback` (hide old items, ...) immediately if nothing is pending, else on
  ready, else after 500 ms. Skipped for items with `showTimer`/`hideTimer`.
- Not covered (keep the fixed 500 ms in `SlideItemTransition` through `incomingNeedsAutoSize`): preview, dynamic text,
  chords, style line limit, `lineReveal`, non-text auto items (timer, clock, ...), items with timers.
- `Overlay.svelte` also uses `SlideItemTransition` and does not pass `incomingNeedsAutoSize`, so overlays keep the
  legacy delay (default `true`).

### 5.5 `autoSizeKey` (`createAutoSizeKey`)

`item.id` if present, else `idx-<index>-<hash of style/align/lines/textFit/auto/list/scrolling>`.
The probe and the visible Textbox must compute the same key from the same content, otherwise the cache is not hit.

---

## 6. Scripture specifics **[code unless marked]**

- Drawer flow: book span `#<number>`, chapter span `#<n>`, verse span `.verse#<n>`; dblclick plays, click plays when
  already in output (`Scripture.svelte`). Result is `id: "temp"` output.
- Template id: `scriptureSettings.template` (default `"scripture"`), replaced by `scripture_<n>` when more versions are
  open. **Trap:** `ScriptureInfo.checkTemplate` treats *any* template id containing `"scripture"` (and not `"LT"`)
  as "default" and silently resets it (F-007). Name custom scripture templates without that word.
- Temp slides have no show: `ref.showId === "temp"` so no size is ever stored; only `autosizeCache` is used.
- Output style template wins over `scriptureSettings.template` (`getStyleTemplate`).

---

## 7. Svelte 5 legacy-mode behaviours that changed output timing **[AI_README has the list]**

`|global` transitions, counter `{#key}` (branch revival), `derived_inert` warning from `out:custom`, store shadowing.
New in this file: **transition params are read once at start** (section 3).

**How much slower is Svelte 5 really?** Measured against a Svelte 3 build of `main` on the same machine, runs
alternated, 5 x per build (F-013, F-015, F-016):

- slide change (text, fade 500): **+0 to +16 ms** end to end, spread over every phase (main window handler +2,
  IPC +3, output window +2-4, in transition +2..13). No single phase is slow.
- clearing: text invisible **+16 ms** later, removed from the DOM **+35-55 ms** later (invisible).
- background image/video changes: old layer removed **+35-65 ms** later (invisible).
- nothing close to 250 ms. The 250 ms figure came from golden values that cannot be reproduced (F-013).

Ruled out as causes (F-017): `|global` (only a flag at runtime), `{#key showKey}` vs `{#key show}` (same timing, and
`{#key show}` brings back the stacking bug), the dummy Web Animation frame at transition start (patched out: no
change), the 0 ms timer chain and `$:` order (same millisecond in both builds), the double template merge (0.1 ms).

---

## 8. Test harness and how to measure

- `config/testing/outputTransitions.test.ts` + `outputTimeline.ts`. Old tests record layer sets vs a Svelte 3
  golden. New "auto size text/scripture and ..." tests record **per frame** every `.textContainer` (opacity along the
  ancestors, computed font size) and the activation time (capture-phase `keydown`/`click` listener in the main window,
  same wall clock as the output window's `performance.timeOrigin + now()`).
- Metrics: `firstVisible` (opacity > 0.02), `fullyVisible` (> 0.98), `sizes` (font sizes while visible; more than
  one = wrong-size flash), `maxBoxes` / `finalBoxes` (stacking).
- `FS_PROBE_OUT=file.json` appends probe results; `FS_TIMELINE_OUT=file.json` appends the golden-style recordings
  (`lastChange`, layer sets) of the old tests, so runs and builds can be compared; `FS_RECORD_GOLDEN=1` rewrites
  golden entries (only on trusted builds; it also skips the comparison, which is useful to just collect numbers).
- The golden compare fails a scenario that is more than 15 % or 75 ms (the larger) slower than the golden; faster is
  never a failure. Compare builds with **alternating** runs, 3-5 each: single runs vary by 10-20 ms, the first
  activation by much more (F-014). `startApp` waits until the output is mounted before any test continues.
- Seeding without UI: `FS_MOCK_STORE_PATH` makes every store file live in `<dataPath>/settings/` (`settings.json`,
  `settings_synced.json` for `styles`/`scriptures`/`scriptureSettings`, `templates.json`, `shows.json`);
  show files are `<dataPath>/Shows/<name>.show` = `[id, show]`; Bibles `<dataPath>/Bibles/<name>.fsb` =
  `[id, bible]` plus a `scriptures` entry `{name, id}`. Default output id is `default` with style `default`.
- Needs a production build and `unset ELECTRON_RUN_AS_NODE`. **Build gotchas:** `npm run build` (via
  `scripts/preBuild.js`, which also deletes `public/build` and `build/`) is what points `public/index.html` at the
  production bundle; `npm run build:frontend:prod` alone (~4 s with Vite 8) does not, so after
  `git checkout public/index.html` the Electron tests fail with "main window not found" until a full build ran.
  Revert `public/index.html` before committing.
- **Svelte 3 baseline:** `main` is the pre-upgrade source. `git worktree add ../freeshow-svelte3 main --detach`,
  `cp -Rc node_modules` from the main checkout (APFS clone), `npm install --ignore-scripts --no-audit` there (it
  swaps svelte/vite/typescript to the `main` lockfile in seconds), `npm run build`, copy the test files in. Run both
  trees alternately.
- **Phase tracing** (throwaway, in a worktree): push `[label, Date.now()]` into `window.__tr` at: main
  `listeners.ts` (`outputs.subscribe` start, before `send(OUTPUT, ["OUTPUTS"])`), output `receivers.ts` `OUTPUTS`,
  `Output.svelte` (`slide = clone(...)`, `actualSlide = ...`), `SlideContent` (`updateItems`, hide, swap, show),
  `utils/transitions.ts::custom`, `OutputTransition` `onMount`, `Textbox` (`calculateAutosize`, `markAutoSizeReady`).
  Read the arrays with `page.evaluate` after each step and subtract the key press time. A statement that starts with
  `(` needs a leading `;` (a previous line without a semicolon turns it into a call).
- Quick instrumentation: `console.log("[AS] ...")` in the code + `output.on("console", ...)` in `startApp`; remove
  both afterwards.

---

## 9. Findings log (append new entries at the bottom)

Format: `F-NNN (date) title` - finding - evidence/status - consequence.

**F-001 (2026-10-10) Output style slides always waited 500 ms.**
`mergeWithTemplate(resetAutoSize)` deletes `autoFontSize` and the output never stores one, so
`itemNeedsAutoSize` was always true for template items. [verified: 1295 ms vs 795 ms plain, fade; 593 vs ~90 none]
-> hold replaced by a measured wait (section 5.4).

**F-002 (2026-10-10) The off-screen pre-measure was 0 x 0.**
`.autosize-precompute` had `width: 0; height: 0`; percent-sized items measured against nothing and the cache
signature (container size) could never match the visible box. [code; fixed to 100% x 100%, verified by cache hits]

**F-003 (2026-10-10) Svelte transition delays cannot be shortened after they start.**
`getOutTransition` could only shrink the hold if the flag changed *before* the old item was removed.
[code] -> wait is a gate in `SlideContent`'s timer chain.

**F-004 (2026-10-10) Cache hit requires the same parent size.**
Signature includes `itemElem.parentElement` client size. Probe parent and visible parent (`.transitioner`) must
match. [code]

**F-005 (2026-10-10) Template-merged items have no `id`, all share key `idx-0`.**
Every slide overwrote the single `show:idx-0` cache entry (and the new `measuredSignatures` slot), so nothing was
ever reused between slides. [verified by logging: alternating slides always `known: false`; with content keys
`known: true`] -> key includes a content hash; cache capped at 500.

**F-006 (2026-10-10) Same-length text does not re-emit `autosizeReady`.**
`stateSignature` includes only the line count. A reused probe instance would never report again, causing the
500 ms fallback. [code] -> probe instances are keyed by a per-run token.

**F-007 (2026-10-10) Scripture template ids containing "scripture" are reset.**
`ScriptureInfo.checkTemplate`. A seeded template `scriptureAuto` was replaced by `scripture` on load (font stayed
80 px). [verified]

**F-008 (2026-10-10) Slides get a stored size almost immediately after a show is opened.**
A show seeded with `auto: true` items and no `autoFontSize`, opened in the lyrics view, had a stored size on
**all five** slides at the end of the run, so even jumps to never-shown slides did not hold. Only
`Slide.svelte` passes `itemIndex` to `Textbox` [code], so the slide cards are the writer (the preview panel cannot
write). The same value (`25.5625`) was stored for every slide, see F-010. [verified: saved `.show` file]. The
lyrics view does render a card `Textbox` (answered in F-018). A truly unmeasured first showing could therefore not
be produced with a normal show view; the wait path was exercised through output style and scripture items, which
never have a stored size.

**F-009 (2026-10-10) First activation of a session is slow before SlideContent even starts.**
Activation -> first `updateItems` took ~730 ms the first time, ~80 ms afterwards (output style case); total first
visible 1.2-2.7 s depending on case. Not the auto size wait. [verified with timestamps]. The suspected cause in
the first version of this entry (show/bible data sent, template merge) was wrong: it is the 2 s mount timer of the
output, see F-014.

**F-010 (2026-10-10) Stored `autoFontSize` is not trustworthy for the output.**
Thumbnails/lyrics view stored `25.5625` for five different slides that render at 100 px / 73 px in the output.
The output ignores it for display (it re-measures) and only uses it to decide whether to wait. [verified in the
saved `.show` file vs probe font sizes] -> do not use it as a measured size. Cause and scale: F-018, F-019.

**F-011 (2026-10-10) Cheapest possible first showing = one `Textbox` `loaded` timeout.**
Probe ready ~105-125 ms after mount in every run regardless of text; first showing costs +~110 ms over a plain
slide. [verified] -> measuring without the 100 ms `loaded` wait would remove it.

**F-012 (2026-10-10) Preview `Textbox` never hides while measuring.**
`shouldHideUntilAutoSizeCompletes` returns false for preview, so the main-window preview can still show an
unmeasured size (the old 500 ms hold was the only protection there, and it is kept). [code]

**F-013 (2026-10-10) The golden's first click and auto size entries cannot be reproduced; Svelte 3 = Svelte 5 today.**
`config/testing/golden/...` said 521-616 ms for the six `autosize/*` scenarios and 789 ms for `text/click-slide-1`.
A Svelte 3 build of `main` (the exact source the golden claims), built and run on this machine, gives 720-892 ms
(median of 9 runs: 769, 769, 770, 745, 723, 892) for the auto size scenarios and the Svelte 5 build gives the same
within 0-20 ms (5 alternating runs each, spread 10-20 ms). All other golden entries (text, backgrounds) reproduce on
Svelte 3 within +-34 ms. So the "+250 ms on Svelte 5" was a recording artefact, not a regression: the golden could
not have been produced by the build and test it names (the layer sequences do match). Why the golden differed is
unknown **[guess]**: a different settings/data state or a run against a development server. [verified]
-> the six `autosize/*` entries were re-recorded from the Svelte 3 build (medians); `text/click-slide-1` was kept
(F-014 explains the number it had).

**F-014 (2026-10-10) The first activation waits for the output's 2 s mount timer.**
`MainOutput.svelte` renders `<Output>` only 2000 ms after the output window mounted (`setTimeout(..., 2000)`).
`out:ipc` arrives after ~17 ms, but `Output` applies the slide 570-960 ms later when the click comes soon after
the window opened. [verified: first click with 0 / 1000 / 3000 ms wait before it: 1461 / 809 / 811 ms on Svelte 5,
1728 / 810 / 794 ms on Svelte 3] -> not Svelte 5, not the auto size wait; a test that clicks right after startup
measures the timer. `startApp` now waits for the output to mount. Supersedes the guess in F-009.

**F-015 (2026-10-10) Phase breakdown Svelte 3 vs Svelte 5: no slow phase.**
See the table in section 3: every phase is within +0..+5 ms, cumulative +8..+16 ms at fully visible. The 50 ms output
wait and the 253 ms `waitToShow` are identical. [verified: 3 alternating runs of 33 activations per build]

**F-016 (2026-10-10) Svelte 5 outros finish and remove elements later.**
Clearing: invisible +16 ms, removed from the DOM +35-55 ms (golden compare: `text/escape-clear` +53,
`background/bg-escape-clear` +51). Background changes: `bg-click-3`, `bg-click-4` +66/+67 ms, `bg-click-2` +34,
`bg-arrow-left-*` +20/+49. Only the DOM removal of already transparent elements is late, so it is invisible; it is
the reason the old golden's 1.5x + 300 ms tolerance hid a real 50-65 ms difference. [verified, 3 alternating runs]
Where exactly the time goes inside Svelte 5's transition engine is **[guess]**: the outro `finish` event and the
following effect flush are dispatched a frame or two after the animation ends.

**F-017 (2026-10-10) Suspects that were tested and ruled out.**
(a) `|global` on the text path: runtime only sets a flag [code]. (b) `{#key showKey}` vs `{#key show}` in a Svelte 5
lab copy: show/mount/fully visible within 3 ms; `{#key show}` makes the new text "fully visible" after 8 ms
(the revived old branch, i.e. the stacking bug). (c) Svelte 5 starts every transition through a dummy Web Animation
and the real one in its `onfinish` (one frame): patched `svelte/src/internal/client/dom/elements/transitions.js`
to start at once when `delay === 0`: 797.5 vs 799 ms, clear 493 vs 491 ms, so not the cause. (d) 0 ms timer chain /
`$:` order in `updateItems`: hide, swap at the same millisecond in both builds, show at +253 in both. (e) template
merged twice per change: `setTemplateStyle` is called once from `updateSlideData` (`formatSlide`) and once from
`setTemplateItems`; 0.1 ms per call, 0.2-0.3 ms per slide on both builds. All [verified].

**F-018 (2026-10-10) Who stores `autoFontSize` for every slide, and at what scale.**
`slide/Slide.svelte` (the slide cards of the Show view, `<Textbox preview itemIndex={i} ...>`) via
`Textbox.setItemAutoFontSize`. Grid cards render inside a scaled `Zoomed`, so `autosize()` measures in 1920 px
space and stores real values: 100, 100, 100, 73.09375, 100 for the probe show. The lyrics view renders the same
`Textbox` with `smallFontSize`, `style={false}` and an unscaled `Zoomed relative` row, so it measures against the
small row box and stores **25.5625 for every slide** (including the 4-line one), in the unit of the card, not
of the 1920 px output. [verified: saved `.show` files from grid and lyrics runs]

**F-019 (2026-10-10) A wrongly scaled stored size does not reach the output's first frame.**
Seeded `autoFontSize: 7` (and `previewAutoFontSize: 7`), grid and lyrics view, both builds, activations right after
opening: visible font sizes were only ever the final ones (100, 73). [verified] Reason [code]: the output `Textbox`
resets to `fontSize = 0` and starts hidden (the cache signature at init lacks the container size, so it never
matches) and measures itself; the stored value is only used to decide whether to wait (`itemNeedsAutoSize`) and,
since the pre-measure change, to skip the probe. Consequences: (1) in the lyrics view every auto sized slide has a
truthy stored size, so it skips the wait and the pre-measure and the text appears when its own measurement ends,
mid-fade (first visible ~70 ms later than a plain slide, F-015); (2) the main window **preview** uses
`previewAutoFontSize || autoFontSize || 100` for its first frame [code], so there a wrong stored size would show
first and then jump (not tested).

**F-020 (2026-10-10) Baseline of the classic engine: blank frames.**
Per-frame probe on the Svelte 5 classic build, 4 s per run. Fade 500 / 50 %: single slide changes show **0** frames
without text, rapid presses (3-4 x 100 ms) **3 / 14**. Transition "none": plain slides 0, auto sized slides **7-8
blank frames (~120 ms)** (the old text is removed at once, the new one appears after its ~110 ms measurement),
rapid presses **6 / 20**. At most 2 text boxes visible at once, 1 left after settling. [verified]
-> the redesign target in `TEXT_LAYER_DESIGN.md`.

**F-021 (2026-10-10) A line window step is a full crossfade, not an accumulating state.**
Output style `lines: 2`, one 4-line slide: `ArrowRight` shows `[Alpha Bravo]` -> `[Alpha Bravo | Charlie Delta]` at
+398 ms -> `[Charlie Delta]` at +548 ms and ends with one box; with `lines: 0` the same key moves to the next
slide. `SlideItemTransition.currentlyTransitioning` never deletes states, but it lives inside the `{#key showKey}`
branch that every `lines` change recreates, so it does not stack. [verified]

**F-022 (2026-10-10) Interop legacy <-> runes works as needed for a runes text layer.**
Real `Textbox` in Chromium via a scratch Vite server: props from a legacy parent into a `$props()` child (and
`$set` updates), `on:autosizeReady` from `createEventDispatcher` received in a runes component (Svelte accepts
`on:` on components in runes mode), callback props back to the legacy parent, `let:` slot props of a legacy child
inside a runes component, and a `$state` proxy passed as `item` (`clone()` falls back to JSON; prefer
`$state.raw`). `Textbox` has no `loaded` event, only `autosizeReady`. [verified]

**F-023 (2026-10-10) `Textbox` readiness facts the new layer depends on.**
`autosizeReady` is dispatched from `markAutoSizeReady()` only; `calculateAutosize` returns **without** it for
`media`, `camera`, `icon` items and when there is no element; non-text types always use `growToFit` (even with
`auto: false`); `textFit === "none"` reports ready immediately after `loaded` (100 ms after mount); after the event
the content is unhidden one rAF later (`hideUntilAutosized`), so a swap in the same frame as the event can still
show a hidden box; `noTransition` is computed once at creation from the `transition` prop; `item.id` is only part
of `stateSignature` (and the fallback cache key). [code]

**F-024 (2026-10-10) `custom()` calls each Svelte transition with its default parameters.**
`custom(node, {type, duration, easing, delay, custom})` runs `transitions[type](node, custom)` and then overrides
`duration`, `easing`, `delay`: blur uses `amount 5`, scale `start 0`, `fly` has `x = y = 0` (opacity only),
`crossfade` is the factory and has no visual effect; only `slide` reads `custom.direction`. Types `fly` and
`crossfade` are not selectable in the UI. Svelte 5 samples `css(t, u)` at `ceil(duration / 16.67) + 1` points with
`t = t1 + (t2 - t1) * easing(i / n)` (out: `t = 1 - easing(p)`), so the same functions can be sampled into
keyframes. [code]

### Open questions (move to the log with evidence when answered)

- Where inside Svelte 5's transition engine do the +35-55 ms of outro removal come from (F-016)?
- Does the main-window preview really flash a wrongly scaled stored size first (F-019, code only)?
- Why was the original golden faster (F-013)? Which environment produced it?
- Can a long-lived, prop-updated `Textbox` (fresh `item.id` per use) re-measure and re-emit `autosizeReady`, so the 100 ms `loaded` floor disappears without editing `Textbox` (`TEXT_LAYER_DESIGN.md` R-01 b)?
- Do animations/rAF stop in a hidden or occluded output window, and do timers keep running (R-03)?
- `Textbox` stability loop (`ratio < 0.5`) only runs for small output windows; is it ever needed at full size?
- Does a custom-font load after the measurement change the size (probe measured with fallback font)?
- Why does `Output.svelte` re-merge items in place after `updateSlideData` (two passes)? Can one be dropped?
- Item `timelineItems` style actions change an item's style after the key was computed: cache entry per
  timeline step? (keys are computed once per item object)

---

## 10. Behaviours that must keep working

1. New text is never visible at a size that differs from the one it keeps. Measure first, then show.
2. Old text is not removed before the new text can appear (bounded wait, 500 ms), except with user timers.
3. Same content + same output size + same style = same size, reusable across slides and showings.
4. `fadeInOffset` is "old starts leaving -> new starts entering", not "from activation".
5. Identical consecutive items are held, never re-faded.
6. A burst of activations ends in the last slide with exactly one box (no stacked old slides).
7. The output window renders from copied state; it must not write measured sizes back.
8. Clear (Escape) while waiting must cancel the pending change.

---

## 11. Text layer redesign (runes, crossfade)

The planned replacement of `SlideContent` + `SlideItemTransition` is designed in `TEXT_LAYER_DESIGN.md`: the full list
of behaviours to keep with their locations and tests (B-01..B-55), the layer lifecycle, the timing rule
`new.start = max(t0 + fadeInOffset, ready)`, the transition sampling, interruption rules, the switch
`special.textEngine`, the test plan (T-01..T-19), risks and a 13-day estimate. Findings behind it: F-020 to F-024.
