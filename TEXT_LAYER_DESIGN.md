# Text layer redesign: runes engine with a synchronized crossfade (design only)

Status: **design, no product code**. Written 2026-10-10 on branch `upgrade/svelte-5`.
Companion to `HOW_IT_WORKS.md` (how the current system behaves; finding IDs F-xxx refer to its log).
Tags: **[verified]** measured/observed in the running app, **[code]** read in the source, **[guess]** hypothesis
with the check that would confirm it.

What is replaced: `c/output/layers/SlideContent.svelte` + `c/output/transitions/SlideItemTransition.svelte`
(the "classic" engine) for text/slide items on an output. What is **not** touched: `OutputTransition.svelte`
(backgrounds, overlays, metadata), `Overlay.svelte`, `Textbox.svelte`, `TextboxLines.svelte`, `Output.svelte`'s
legacy syntax (it only gets the switch).

---

## 0. Summary

- A new runes component `TextLayer.svelte` keeps an explicit list of **layers** (all items of one slide state).
  Layers are plain DOM wrappers animated with the **Web Animations API**; they are removed when their own
  animations finish. No Svelte `transition:`/`{#key}`/`setTimeout(0)` chain is involved (F-003, F-016, F-017).
- A change creates a **hidden, measured** layer first. Only when every auto sized item reported `autosizeReady`
  (and its text is actually unhidden) do the old layers fade out and the new layer fade in, on one clock.
- Timing keeps classic's numbers: `new.start = max(t0 + fadeInOffset, ready)`, `old.start = t0` (old is **paused**
  if the new layer is late), so a measured first showing is never slower than today and `offset = 0` starts both in
  the same frame.
- The old look is reproduced by sampling the existing `custom()` transition functions into keyframes.
- Behind `special.textEngine: "classic" | "crossfade"` (default `"classic"`), switchable live.
- Baseline problems this fixes **[verified]**: with transition "none" the classic engine shows **7-8 blank frames
  (~120 ms without text)** on auto sized slides, and **3-20 blank frames** on rapid presses (also with fade).
- Estimate: **~13 working days (range 11-16)** in 9 independently testable steps (section 8).

---

## 1. Baseline of the classic engine (measured 2026-10-10, Svelte 5 build of HEAD, this machine)

| Scenario | Fade 500 / 50 % | Transition "none" |
| --- | --- | --- |
| plain slide -> plain slide, blank frames | 0 | 0 |
| auto sized slide (stored size) -> next, blank frames | 0 | **7-8** (old removed at once, new after ~110 ms) |
| rapid presses (3-4 x 100 ms), blank frames | **3 / 14** | **6 / 20** |
| max text boxes visible at once | 2 | 1 |
| boxes left after settling | 1 | 1 |
| fully visible (plain / auto) | ~795 ms / ~793 ms | ~85 ms / ~197 ms |

Blank frame = an animation frame after the activation with no text box at opacity > 0.02 between the first and the
last frame that shows text. Source: temporary Playwright probe (per-frame `.textContainer` opacity), 4 s run per
transition, `ArrowRight/Left`. **[verified]**

Line stepping with an output style line limit goes through the **same full cycle** as a slide change (old window
out, new window in, one box at the end), it does not accumulate `SlideItemTransition` states **[verified]**:
`lines = 2`: `[Alpha Bravo]` -> `[Alpha Bravo | Charlie Delta]` at +398 ms -> `[Charlie Delta]` at +548 ms.

---

## 2. Behaviours the text layer must keep

Columns: **Where** = location in the classic code; **Test** = how a Playwright/unit test checks it (IDs in
section 6). "Probe" = the per-frame recorder in `outputTimeline.ts` (extended in section 6).

### 2.1 Change detection, item classes

| ID | Behaviour | Where | Test |
| --- | --- | --- | --- |
| B-01 | **No-op updates do nothing.** `currentSlide.items`, `outSlide` (without `line`, `revealCount`, `itemClickReveal`) and `lines` are compared as JSON; equal -> no cycle. **[code]** | `SlideContent`: `currentSlideItems`, `currentOutSlide`, `currentLines` reactive guards | T-10: re-send identical output state; layer count, opacity unchanged |
| B-02 | **`line`/`revealCount`/`itemClickReveal` change in place** (copied into `current.outSlide`), no cycle; click-reveal items appear/disappear through their own mount/unmount. **[code]** | `SlideContent`: `$: if (current && outSlide)` | T-11 click reveal item: appears with a fade, siblings untouched |
| B-03 | **Persistent unchanged items**: item without text lines (`!hasLinesContent`) and JSON-equal to the item at the same index is rendered outside any transition and survives slide changes. **[code]** | `SlideContent.updateItems` -> `persistentItems/persistentItemIndexes`, markup branch `persistentItemIndexes.includes(index)` | T-10: shape/image item identical on both slides keeps the same DOM node, opacity 1 in every frame |
| B-04 | **Identical repeated text slide is held**: `show && JSON(lines)===renderedLines && itemsEqual && !hasDynamicContent` for every non-persistent item -> no cycle, only refs updated. Mixed slide (some held, some changed): classic re-fades the held ones too. **[code]** | `SlideContent.updateItems` (`heldTextItems`), `SlideItemTransition.startTransition` (identical state check) | T-10: arrangement with the same slide 3x: no opacity change, same DOM node |
| B-05 | **A changed line window is a full crossfade of the item** (style `lines`, `lineReveal` steps, next window). **[verified]** (HOW_IT_WORKS F-021) | `Output.getOutputLines` -> `lines` prop -> `currentLines` -> `updateItems` | T-11: style lines 2, 4-line slide: window sequence equals classic |
| B-06 | **`lineReveal` uses `linesStart/linesEnd`, others `start/end`**: `linesStart={customLines?.[currentLineId]?.[item.lineReveal ? "linesStart" : "start"]}` (same for end), `clickRevealed` from the same entry. **[code]** | `SlideContent` markup | T-11 |
| B-07 | **Click-revealed items** render only when `!item.clickReveal || outSlide.itemClickReveal`. **[code]** | `SlideContent` markup `{#if ...}` | T-11 |

### 2.2 Transition choice and timing

| ID | Behaviour | Where | Test |
| --- | --- | --- | --- |
| B-10 | **Transition priority**: item `actions.transition` > slide > style > settings; `type: "none"` means duration 0. **[code]** | `Output.getOutputTransitions` (slide > style > settings) then `SlideItemTransition.startTransition` (item wins) | T-08 per level |
| B-11 | **in / out / between**: when the slide is a different one and old and new items both exist (`transitioningBetween`), the new item uses `between` as its in-transition and the old item uses `between` as its out; else `in` / `out`; missing parts fall back to the base transition. The old item keeps the transition it was **created with**. **[code]** | `SlideContent` (`transitioningBetween`), `SlideItemTransition` (`inTransition/outTransition/transitionBetween`, `getOutTransition`) | T-08: slide with between != in/out |
| B-12 | **`fadeInOffset`** (default 50 %) = time from the old content starting to leave until the new one starts, `duration * offset / 100`, where `duration/offset` come from `transition.between \|\| transition.in \|\| transition`; **an item transition with the same value on old and new items overrides the duration (0 -> no wait).** **[code]** | `SlideContent.updateItems` (`itemTransitionDuration`, `waitToShow`) | T-03 offsets 0/50/100; T-08 |
| B-13 | **Transitions disabled** (`transitionEnabled = !mirror \|\| preview` false): old/new swap with no animation. **[code]** | `Output.svelte` prop, `SlideItemTransition` (`transitionEnabled ? ... : null`) | T-14 mirror |
| B-14 | **`showTimer`/`hideTimer`** (seconds, only in the output window or preview): in-delay / out-delay of that item; a delay with type "none"/duration 0 becomes `fade` with duration 1 ms; auto size hold is not added for items with a hideTimer. **[code]** | `SlideItemTransition.startTransition`, `getClearingOutTransition` | T-09: timers 1 s, +-1 frame |
| B-15 | **Identical media item hold**: item type media with item transition duration 0 and no out delay gets a 250 ms out delay (avoids a flash when an identical item is still fading in). **[code]** | `SlideItemTransition.startTransition` | T-08 (media item with `none`) |
| B-16 | **50 ms output wait** before the slide is applied (10 ms outside the output window); stays in `Output.svelte`. **[code + verified]** | `Output.updateSlide` | T-03 timing parity |
| B-17 | **First slide / nothing outgoing**: classic still waits `waitToShow` before showing. The new engine may show at `ready` (intended improvement, not parity). **[verified F-015]** | `SlideContent` | T-16 (new <= classic) |

### 2.3 Clearing and empty slides

| ID | Behaviour | Where | Test |
| --- | --- | --- | --- |
| B-20 | **Clearing (`isClearing`)**: old items fade out with the item's/global `out` transition (type none -> 0), delay = `hideTimer` only, no auto size hold, nothing new appears; pending changes are cancelled. **[code]** | `SlideItemTransition.getClearingOutTransition`, `Output.updateSlide` (`isSlideClearing`) | T-08 clearing; T-05 clear during crossfade |
| B-21 | **Empty slide** (`currentSlideItems` empty): items removed with the (between) transition; classic delays the next slide by `betweenClearingTransition.duration` (`isClearingToEmpty`, a Svelte revival workaround). The new engine does not need the guard. **[code]** | `SlideContent.updateItems` first branch | T-08 empty slide in the middle |
| B-22 | **Persistent items are cleared** when the slide has no items. **[code]** | same | T-10 |

### 2.4 Content correctness

| ID | Behaviour | Where | Test |
| --- | --- | --- | --- |
| B-30 | **New text never visible at a size it does not keep**; old text is not removed before the new one can appear (bounded, 500 ms). **[verified F-001..F-019]** | `SlideContent` precompute + gate | T-06, T-01 |
| B-31 | **Stored `autoFontSize` is not used for display** (lyrics view stores 25.5625). **[verified F-019]** | `Textbox` | T-06 with seeded `autoFontSize: 7` |
| B-32 | **Dynamic `{...}` values** are updated by `Textbox` (`updateDynamicValues={!isClearing}`), never held as "identical", re-measured in place. **[code]** | `SlideContent` (`hasDynamicContent`, prop), `Textbox` | T-13 timer/variable text |
| B-33 | **Chords** (`chords={item.chords?.enabled}`) change measuring (no cache, chord lines). **[code]** | markup props, `Textbox` | T-13 chord item |
| B-34 | **Scripture (`temp`) slides**: items come from `outSlide.tempItems` (`Output.getCurrentSlide`), `ref.showId` is `"temp"` (sizes never stored), template from style `templateScripture*` or `scriptureSettings.template`. **[code]** | `Output.updateSlideData`, `getStyleTemplate` | T-13 scripture, both template sources |
| B-35 | **Output style templates and line limits**: `currentStyle` is passed as `outputStyle`; `Number(style.lines)` windows the lines (and disables size caching). **[code]** | markup props, `Textbox` | T-13 + T-11 |
| B-36 | **Pass-through props**: `backdropFilter` from `slideData["backdrop-filter"]`, `animationStyle` from `animationData.style`, `ratio`, `mirror`, `preview`, `styleIdOverride`, `outputId`, `slideIndex`, `ref {type:"show", showId, slideId, id, layoutId, origin}`. Items of a *transitioning* layer use the refs captured when the layer was created. **[code]** | markup | T-12 parity of rendered DOM (class/style snapshot) |
| B-37 | **`Textbox.transition`** (the in-transition) decides the `noTransition` class once at creation (`let noTransition = ...`, not reactive). **[code]** | `Textbox` | T-12 snapshot |
| B-38 | **Conditions** (`item.conditions.showItem`, bindings): evaluated per render with `shouldItemBeShown(item, [], showItemRef, conditionsUpdater)`; `conditionsUpdater++` every 300 ms (100 ms when a condition uses `volume`) while any item has conditions and not clearing; a flipping condition mounts/unmounts that item through its own in/out transition, without a slide cycle. Note: `showItemRef = {outputId, slideIndex}` is captured once at creation (stale `slideIndex`). **[code]** | `SlideContent` (`conditionsUpdater`, `isMic`, `showItemRef`), `itemHelpers.shouldItemBeShown`, `isConditionMet` (200 ms result cache) | T-11 condition on a variable; T-13 |
| B-39 | **Slide timeline** (`currentSlide.timeline.actions`): a 15 ms interval advances `timelinePos` by `15 * slideTimelineSpeedMultiplier` once `isReady` (set one tick after the slide changed); style actions are interpolated into `timelineItems: Map<"id-layout-index", Item[]>` and the item of that slide key is rendered; loops when `timeline.loop`; old layers keep the last value of their own key. **[code]** | `SlideContent` (`setupTimeline`, `onMount` interval, `styleActions`) | T-12 timeline style action moves opacity/position over time |
| B-40 | **Custom fonts**: `loadCustomFonts(show.settings.customFonts)` when `outSlide.id` changes (fire-and-forget), `origin` from the show for `ref.origin`. **[code]** | `SlideContent.updateShow` | T-13 show with a custom font: `document.fonts` contains it |

### 2.5 Surroundings

| ID | Behaviour | Where | Test |
| --- | --- | --- | --- |
| B-50 | **Metadata overlay** is a separate `Overlay.svelte` with its own 0 ms hide/swap/show and the same `textTransition`; it changes at `actualSlide` time (no fadeInOffset, no auto size wait). Unchanged; the new engine's start can now be up to ~110 ms later than the metadata change (classic: 250 ms earlier). **[code]** | `Output.svelte`, `Overlay.svelte` | T-12: metadata item still appears; ordering documented |
| B-51 | **Attribution string** is rendered by `Output.svelte` itself (`transition:custom\|global`, no transition in mirror). Unchanged. **[code]** | `Output.svelte` | T-12 scripture attribution visible |
| B-52 | **Mirror vs preview**: `mirror && !preview` -> transitions off; `mirror && preview` (operator preview) -> transitions on, no pre-measure in classic, timers apply. **[code]** | `Output.svelte`, `getOutputTransitions` | T-14 |
| B-53 | **Multiple outputs update independently**: every output has its own `Output`/`SlideContent` instance and `outputId`; shared module state is only the size cache and a 200 ms condition cache. **[code]** | `Output.svelte` per output | T-17: no module singletons in the new code; two outputs with different styles |
| B-54 | **Rapid presses**: only the latest wins (`updateGeneration` + cleared timers); classic keeps <= 2 boxes visible. **[verified]** | `SlideContent.updateItems` | T-04, T-05 |
| B-55 | **Everything is cleaned up on destroy** (15 ms and 300/100 ms intervals, timeouts, auto size waits). **[code]** | `onDestroy`, `onMount` return | T-18 |

---

## 3. Design

### 3.1 Files (all new, runes)

```
c/output/layers/textlayer/
  TextLayer.svelte        root, same props as SlideContent (+ nothing else)
  TextLayerItem.svelte    one item inside a layer: wrapper div + legacy Textbox, reports readiness
  plan.ts                 pure: transitions -> {inT, outT, delays, offset} per item/layer (port of the classic rules)
  keyframes.ts            pure(ish): sample custom() into Keyframe[] for 'in'/'out'
  timeline.ts             slide timeline interpolation (extracted copy of styleActions)
  layerState.svelte.ts    the layer controller (class, $state fields): lifecycle + interruption
```

`plan.ts`, `keyframes.ts`, `timeline.ts` have no Svelte imports so they run in Vitest (node).
`Output.svelte` only changes at the single `<SlideContent .../>` call site (section 3.8).

### 3.2 Data model

```ts
type LayerState = "preparing" | "ready" | "in" | "live" | "out"
type Layer = {
    id: number                       // monotonically increasing, also the z-order
    state: LayerState
    signature: string                // JSON of what is displayed (items, lines window, refs)
    items: LayerItem[]               // non-persistent items of the slide state
    refs: { outSlide; currentSlide; slideData; lines; currentStyle }   // captured at creation (classic: `current`)
    plan: { offset: number; between: boolean }
    animations: Animation[]          // WAAPI animations of its item wrappers
    createdAt: number
}
type LayerItem = { index: number; item: Item; wrapper?: HTMLElement; needsMeasure: boolean; ready: boolean;
                   inT: Transition | null; outT: Transition | null; inDelay: number; outDelay: number }
```

`layers = $state.raw<Layer[]>([])` (raw: items are passed to legacy code that clones them, so no deep proxies;
replace the array on change). Persistent items are a separate `$state.raw` list rendered outside layers (B-03).

### 3.3 Layer lifecycle

```
change detected (signature differs from the newest layer, B-01)
        |
        v
  preparing   mount layer: wrappers `opacity:0; pointer-events:none`, Textbox per item (unique autoSizeKey),
        |     (aria-hidden until it is live)
        |     wait: every item with needsMeasure -> `autosizeReady` AND `.align` not `.hidden`  (+ 500 ms cap)
        v
  ready       compute N = max(t0 + offset, readyAt); O = t0 (or N when offset is 0)
        |
        v           (same frame, same timeline time)
  in  ----- new item wrappers: WAAPI in-keyframes at N (+ showTimer)
  old layers: out-keyframes at O (+ hideTimer), paused if new is late (3.4)
        |
        v   all `animation.finished` of the layer resolved
  live        steady; only its own Textbox updates (dynamic values, timeline items, conditions)
        |
        v   a newer layer becomes `in`/`ready`
  out  ----- fade out; when all its animations finished -> removed from `layers` (no Svelte outro)
```

Rules: a layer is removed **only** by its own animations finishing (or by cancel on interruption/clear). Keyed
`{#each layers as layer (layer.id)}` has **no** `transition:` directive, so Svelte removes the DOM synchronously
with the state change (F-016 is irrelevant).

### 3.4 Timing algorithm (the part that decides "no slower than classic")

Notation: `d` = duration of the old out / new in, `f` = `fadeInOffset` in ms (`d * offset/100`, B-12),
`t0` = time the new layer is created (= when classic's `updateItems` starts), `r` = time all items are ready.

```
new.start     N = max(t0 + f, r)
old.start     O = (f == 0) ? N : t0                 // offset 0 => both in the same frame, after ready
if f > 0 and r > t0 + f:  pause old animations at t0 + f, resume at r (so N - O_progress == f)
```

Both animations are created in the same task with `startTime` on `document.timeline`, so they start in the same
frame. Worked examples (default fade 500 ms, plain/auto sized):

| Case | classic | new engine |
| --- | --- | --- |
| offset 50 %, auto item measured in 110 ms | old leaves 72, new starts 325, full 795 | old 72, new `max(72+250, 182)` = 322, full ~790 (same) |
| offset 0 | old 72, new 72 (new not ready -> text appears late) | both at `r` = 182 (old held until ready), full ~690 |
| offset 100 % | new at 72+500 | new at `max(572, r)` |
| measurement slow (r = 600) | gate holds old (<= 500), offset after | old paused at 322 until 600, then both continue/start: no frame without text |
| transition none | old removed at hide, new after measure: 7-8 blank frames | swap at `r` in one frame (old removed + new visible in the same DOM update) |

For "none" (or duration 0) there is no animation: at `r` the controller swaps `opacity`/removal in one synchronous
state update, so one frame shows old, the next shows new (B-20 holds for clearing).

`hideTimer`/`showTimer` (B-14) are plain WAAPI `delay`s on the old out / new in animations. A pause at the late
deadline also pauses a running delay.

### 3.5 Transitions into keyframes

Source of truth stays `utils/transitions.ts::custom()`. For a wrapper element and a `Transition`:

```ts
const cfg = custom(wrapper, { ...transition, custom: transition.custom })      // {css, duration, easing, delay, tick?}
const n = Math.ceil(duration / (1000 / 60))
for (let i = 0; i <= n; i++) {
    const p = easing(i / n)
    const t = phase === "in" ? p : 1 - p            // same as Svelte 5 animate(): t1 + delta * easing(i/n)
    keyframes.push(parseCssToKeyframe(cfg.css(t, 1 - t)))
}
wrapper.animate(keyframes, { duration, delay, fill: "both", easing: "linear" })
```

Facts that make this equal to today **[code]**: `custom()` calls the Svelte transition function with
`transition.custom` as its parameters and then overrides `duration`, `easing`, `delay`, so:

| type | css (per `custom()`), default params | note |
| --- | --- | --- |
| fade | `opacity: t * o` | `o` = computed opacity of the node (1) |
| blur | `opacity: 1 - 1*u; filter: blur(5px * u)` | defaults `amount 5`, `opacity 0` |
| scale | `transform: scale(1 - u); opacity: 1 - u` | `start 0`, `opacity 0` |
| slide | `transform: translate(-/+pos%)` / `translateY`, `pos = (1 - t) * 100` | `custom.direction` |
| spin | `opacity: t * o; transform: rotate(t * 360deg)` | reads node opacity |
| none | `duration 0` (fade with 0) | |
| fly | opacity only (x = y = 0) = fade | not offered in the UI |
| crossfade | no visual effect (the factory result is spread) | not offered in the UI |

The keyframe sampler reuses the same `easings` table; sampled opacity equals the Svelte engine's frame values at
the 60 Hz sample points, WAAPI interpolates linearly in between (the engine does the same). Unit-testable without
a DOM by passing a stub node with `getComputedStyle` replaced (`o = 1`).

### 3.6 Interrupting a change in progress

A new signature while layers are animating:

1. **`preparing`/`ready` layers that never started are discarded** (only the latest wins, B-54).
2. **A layer that is fading in is frozen** (`animation.pause()`) at its current opacity; layers already fading out
   continue. They stay visible until the newest layer is ready.
3. The new layer prepares exactly as in 3.3. At `r` the frozen layer(s) are **reversed from their current
   position** (`animation.reverse()` + `play()`; continuity, no jump) and the new layer fades in, same clock.
4. Cap: at most **3 alive layers with text** (old fading out, frozen, new). If a fourth would be created, the
   oldest one that is already below opacity 0.1 is cancelled and removed immediately; if none is, the oldest
   `out` layer is fast-forwarded (`finish()`).
5. A new change while paused: the pause deadline of 3.4 is re-evaluated against the **newest** `t0`.
6. Clearing during a crossfade: all layers (including `preparing`) get the clearing out transition from their
   **current** opacity (B-20); no new layer.

Safety: each layer has a hard `setTimeout` (`duration + delays + 1000 ms`) that force-finishes it, because rAF and
animations stop in a hidden/occluded output window **[guess, check in step S5]**.

### 3.7 Measuring the hidden layer

- Readiness per item: `needsMeasure(item)` mirrors `Textbox`: type not in `media|camera|icon` **and**
  `textFit !== "none"` where `textFit = item.textFit || (item.auto ? (text ? "shrinkToFit" : "growToFit") : "none")`;
  non-text types are always `growToFit`. Everything else is ready at mount + one frame (no 100 ms wait, because no
  `autosizeReady` is waited for). **[code]**
- The layer wrapper uses `opacity: 0` (not `display:none`/`visibility:hidden`) so layout/measure is unchanged and
  the parent box is the same size as for the visible one (F-004 no longer matters).
- `autoSizeKey` is `layer.id + ":" + index` so every layer measures itself and never reads another entry
  (requirement 4). The 500-entry cache is still written, which is harmless.
- `autosizeReady` is received with `on:autosizeReady={...}` on the legacy `Textbox` from the runes component
  (verified, 3.9). After it, the layer waits for the box to actually be unhidden (`Textbox` clears
  `hideUntilAutosized` one rAF later): the controller polls `wrapper.querySelector(".align.hidden")` for at most 3
  frames. This is what guarantees "no blank frame with none".
- Cap: `AUTO_SIZE_MAX_WAIT` 500 ms (classic constant); after it the layer is shown anyway (the `Textbox` stays
  hidden itself until measured, so it cannot show a wrong size, only appear late).
- Stored `autoFontSize` is never read by the new code (B-31).
- Fonts: classic fires `loadCustomFonts` and does not wait. The new layer should await
  `document.fonts.ready` once per show change before the first measurement (open question R-06).

### 3.8 Switch wiring

- Store: `special.textEngine` (`"classic" | "crossfade"`, undefined = classic). `special` is already persisted
  with the settings and synced to the output window on every change (`listeners.ts` `special.subscribe` ->
  `SPECIAL` receiver) **[code]**, so toggling needs no restart.
- UI: one `MaterialDropdown`/toggle in `settings/tabs/OutputsGeneral.svelte` using the existing
  `updateSpecial(value, "textEngine")` (a falsy value deletes the key) and a new `settings.text_engine` string in
  `public/lang/en.json`.
- `Output.svelte`: `{#if $special.textEngine === "crossfade"}<TextLayer {...props}/>{:else}<SlideContent
  {...props}/>{/if}` (same props, legacy syntax stays). `SlideContent.svelte`, `SlideItemTransition.svelte`,
  `OutputTransition.svelte` are not edited.
- Switching live destroys one component and mounts the other; the new one mounts with `immediate = true` and shows
  the current slide without a transition (no flicker; the first activation rules of F-014 do not apply because
  `Output` is already mounted).
- Overlay metadata and attribution are siblings in `Output.svelte` and keep working in both engines (B-50, B-51).

### 3.9 Interop (verified)

A scratch Playwright test (real `Textbox`, Chromium, Vite on a random port) **[verified 2026-10-10]**:

| Check | Result |
| --- | --- |
| props from a legacy parent (`export let`, `$:`) into a runes child via `$props()`, updated with `$set` | works, derived values update |
| real `Textbox` rendered by a runes component, text visible | works |
| `createEventDispatcher` event `autosizeReady` received in a runes parent with `on:autosizeReady={...}` | works (`detail.key`, `detail.fontSize`); Svelte accepts `on:` on a component in runes mode |
| callback prop passed from the legacy parent and called from the child | works |
| `let:` slot props from a **legacy** child used inside a runes component | works (`<LegacySlot let:value let:other>`); the new engine does not need it |
| a `$state` proxy passed to the legacy `Textbox` as `item` | works (`clone()` falls back from `structuredClone` to JSON); use `$state.raw` to avoid it |
| `Textbox` has no `loaded` **event** | only `autosizeReady`; `loaded` is an internal flag set 100 ms after mount |

### 3.10 Main-window preview

`PreviewOutput` embeds `Output` with `mirror preview`. Classic: transitions on (so the operator sees them), no
pre-measure, fixed 500 ms hold for unmeasured text, timers apply. New engine: the **same code path**; `preview`
is passed to `Textbox` (it reports readiness right away: `loaded = true` at once, no stability loop), so the layer
becomes ready in ~1-2 frames and the preview crossfades like the output. `mirror && !preview` (stage, scenes,
draw) -> no animation, instant swap (B-13). The preview never stores sizes (`itemIndex` stays -1).

---

## 4. What stays the same / is explicitly not changed

- `OutputTransition.svelte`, `Overlay.svelte`, `Background*`, `Overlays`, `Messages`: untouched.
- `Textbox.svelte`, `TextboxLines.svelte`, autosize cache and algorithm: untouched.
- `Output.svelte`: only the call site (and an import of the store `special`); stays legacy syntax.
- The 50 ms output wait, template merge, `lines` computation: untouched (they run before the layer).

---

## 5. Differences from classic (intended)

1. First slide (nothing outgoing) fades in at `ready` instead of after `waitToShow`.
2. Auto sized text with transition "none": one-frame swap instead of 7-8 blank frames.
3. Rapid presses: no blank intervals; interrupted fades continue from their current opacity.
4. Metadata overlay may now lead the slide text by up to ~110 ms on a first showing (classic: lagged by 250 ms).
5. Old element removal is exact (animation end), not Svelte's outro + effect flush (F-016).

Everything else (types, easings, directions, timers, offsets) is parity by construction (3.5) and by tests (T-07).

---

## 6. Test plan (extends `config/testing/outputTransitions.test.ts` + `outputTimeline.ts`)

### 6.1 Harness additions

- **Engine parameter**: the seed gets `textEngine: "classic" | "crossfade"` (written to `special` in
  `settings.json`), and `startApp` accepts it. Every scenario runs for both engines where noted.
- **Probe frame additions**: per frame, for each text wrapper `[data-text-layer]` (new engine only; classic is
  measured through `.transitioner`): `state`, effective opacity, computed `transform`, and
  `getAnimations()` -> `{playState, currentTime}`. Derived metrics: `blankFrames`, `maxLayers`, `oldStartFrame`,
  `newStartFrame`, `startDeltaFrames`, `finalLayers`, `curve` (normalized time -> opacity/transform).
- **Pure unit tests** (Vitest, node): `plan.ts` (priority, between/in/out, timers, offsets), `keyframes.ts`
  (sampling equals Svelte's `fade/blur/scale/spin/slide` css at the sample points, in and out), timing algorithm
  (`N`, `O`, pause) as a pure function of `(t0, f, r, d)`.
- **Interop test** (the scratch test of 3.9, kept): `config/testing/textLayerInterop.test.ts`.
- Paired comparison runs alternate engines (same machine, 5 x), like `HOW_IT_WORKS.md` section 8.

### 6.2 Tests

| ID | What | Pass criterion | Engine(s) |
| --- | --- | --- | --- |
| T-01 | No frame without text during text -> text (plain, auto sized, output style, scripture; fade and none) | `blankFrames == 0` | new (classic baseline recorded: 0 fade, 7-8 none) |
| T-02 | Old-out and new-in start together at offset 0 | `\|newStartFrame - oldStartFrame\| <= 1` frame | new |
| T-03 | Offsets 0 / 50 / 100 % | `newStart - oldStart = offset * duration` +-1 frame; fully visible `<= classic + 16 ms` | both |
| T-04 | Layer bound | text layers visible `<= 2`; `<= 3` alive only while a press is being interrupted; `finalLayers == 1` | new |
| T-05 | Rapid presses (2..6 x 80-150 ms, mixed directions, plus Escape in the middle) | final text = last slide, `finalLayers == 1`, `blankFrames == 0`, no layer older than the cap | new (classic recorded) |
| T-06 | No wrong-size frame | `sizes.length == 1` for every new text: cold start, repeated, output style, scripture, lyrics view with stored `autoFontSize: 7` | new |
| T-07 | Every transition type x easing x direction | curves (opacity/transform vs normalized time) within 0.03 of classic at 20 sample points; end states equal | both |
| T-08 | Item-level transition, between, clearing, empty slide, media identical hold | final state equal, timing +-1 frame of classic | both |
| T-09 | `showTimer` / `hideTimer` | new layer visible at `showTimer` +-1 frame; old held `hideTimer` | both |
| T-10 | Persistent, held, no-op update | same DOM node, opacity 1 every frame, no new layer | both |
| T-11 | Click reveal, `lineReveal`, style line windows, conditions | visible text sequence equals classic | both |
| T-12 | Timeline actions, metadata, attribution, rendered DOM class/style snapshot | equal / present | both |
| T-13 | Dynamic values, chords, scripture (settings and style template), templates, line limits, custom font | equal text, font size equals classic final, `document.fonts` has the font | both |
| T-14 | Mirror and preview | mirror: no animations, swap in one frame; preview: crossfades | new |
| T-15 | Classic golden unchanged; new engine run of the golden file | classic: golden passes with `special.textEngine` undefined and `"classic"`; new: same layer sets, `lastChange <= golden` limits | both |
| T-16 | New engine no slower than classic in any scenario | paired medians: `new <= classic + 16 ms` for every golden and probe scenario | both |
| T-17 | Two outputs | second output with another style updates independently; no shared module state (grep test: no top-level `let`/`Map` in `textlayer/`) | new |
| T-18 | Leaks | after 200 rapid changes and a settle: layers 1, `document.getAnimations().length == 0`, no intervals left | new |
| T-19 | Live switch | toggle engine mid-show: same text visible, no exceptions, one layer set | both |

---

## 7. Risks and open questions

| ID | Risk / question | Plan |
| --- | --- | --- |
| R-01 | **`Textbox` 100 ms `loaded` floor** (F-011). It applies per mount, only to auto sized items (non-auto items are ready without waiting for `Textbox`). Ways around it **without editing `Textbox`**: (a) pass `preview` to a measuring instance: `loaded` at once, but it changes the measuring path and `preview` semantics and needs a second visible mount: rejected. (b) **warm double buffer**: two long-lived `Textbox` instances per item slot alternate; new content is assigned to the idle, already `loaded` instance by changing props; to make it re-emit `autosizeReady` the item gets a fresh `item.id` (`stateSignature` includes `item.id`, F-006). Avoids the mount and the 100 ms. **[guess]**: needs a spike (S0): does a prop-updated `Textbox` re-measure with `fontSize` reset and emit once? (c) **speculative preparation** of the next slide's layer while the current is shown (known from the layout) so arrow-next is instant. Optional later step. (d) Accept the floor: it is ~110 ms and exactly what classic pays for auto items. | S0 spike decides (b); (d) is the fallback and still meets "no slower than classic". |
| R-02 | Reused `Textbox` instances (R-01 b) carry state (timers, `autoSizeReady`, `fontSize`). | Spike first; if flaky, remount per layer (d). |
| R-03 | Hidden/occluded output window: rAF and WAAPI stop; classic uses timers that keep running. | Hard `setTimeout` finish per layer; test with a minimized output (S5). |
| R-04 | Pausing the old layer mid-fade when the new one is late could look like a stutter. | Pause only on late; typical measure (110 ms) is inside the offset (250). Log how often. |
| R-05 | Many live `Textbox`es (up to 3 layers x items, chords/long text) cost CPU while interrupted. | Cap of 3; measure with a 6-item slide in S5. |
| R-06 | Custom fonts are loaded fire-and-forget; a measurement before the font is ready gives a fallback-font size. Classic has the same weakness (F open question). | Await `document.fonts.ready` per show change in the layer; verify with a seeded custom font. |
| R-07 | Metadata overlay desync (B-50) and attribution. | Documented difference; possible later: let `Overlay` share the layer clock. |
| R-08 | Timeline items change every 15 ms (`styleActions`): in runes, replace the Map instead of mutating, and only for the live layer. | `timeline.ts` + `$state.raw`. |
| R-09 | `showItemRef` quirk (stale `slideIndex`) is reproduced or fixed? | Reproduce first (parity), fix separately. |
| R-10 | Engine default and rollout. | Keep `"classic"` until T-15/T-16 pass for a release; then decide. |
| Q-01 | Should the first slide skip `fadeInOffset`? | Yes (difference 1 above); trivial to flip. |
| Q-02 | Should held items of a mixed slide stay un-faded (classic re-fades them)? | Keep parity; improve later. |
| Q-03 | Should the old layer wait for the new one when the new one has only non-auto items? | No: ready at once, so no wait. |
| Q-04 | `Textbox` stability loop (`ratio < 0.5`, up to 500 ms) makes small previews slow to become ready. | Same as classic; cap 500 ms. |

---

## 8. Estimate (working days, one person; each step ends with its own test run)

| Step | Content | Test that closes it | Days |
| --- | --- | --- | --- |
| S0 | Spikes: warm double buffer (R-01 b); WAAPI keyframe parity for one type; paused/reversed animation behaviour | spike notes in `HOW_IT_WORKS.md`, decision | 1 |
| S1 | `plan.ts`, `keyframes.ts`, timing function, `timeline.ts` + Vitest | unit tests T-03/T-07 pure parts, T-09 plan | 1.5 |
| S2 | `TextLayer.svelte` skeleton: renders the current slide (persistent + one layer, no animation), props, fonts, `origin`, switch in `Output.svelte`, Settings entry, `special.textEngine` | T-19 (switch), T-12 DOM snapshot, T-15 classic golden unchanged, interop test | 1.5 |
| S3 | Layer lifecycle: hidden measure, readiness, crossfade with offset, `none` swap | T-01, T-02, T-03, T-06 | 2 |
| S4 | Per-item features: item transitions, between/in/out, timers, conditions, click reveal, `lineReveal`, held/persistent, timeline | T-08, T-09, T-10, T-11, T-12 | 2 |
| S5 | Interruption, rapid presses, clearing, empty slides, hard timeouts, leak cleanup | T-04, T-05, T-18 | 1.5 |
| S6 | Preview/mirror, multiple outputs, scripture/templates/dynamic/chords | T-13, T-14, T-17 | 1.5 |
| S7 | Parity matrix + paired timing runs, golden for the new engine | T-07 full matrix, T-15, T-16 | 2 |
| S8 | Polish, docs (`HOW_IT_WORKS.md`, `AI_README.md`), decision on the default | all green, two review passes | 1 |

Total **13 days**, range 11-16 (the spike S0 and R-03/R-05 are the uncertain parts). Each step is mergeable behind
the switch: until S3 the new engine is a static renderer, so the default `classic` never regresses.

---

## 9. Findings added while preparing this design

See `HOW_IT_WORKS.md` F-020 to F-024 (blank-frame baseline, line stepping, interop, Textbox readiness facts,
`custom()` parameter facts).
