<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import type { Item, OutSlide, SlideData, TimelineAction } from "../../../../types/Show"
    import { scriptureSettings, showsCache, slideTimelineSpeedMultiplier, templates } from "../../../stores"
    import { waitUntilValueIsDefined } from "../../../utils/common"
    import { shouldItemBeShown } from "../../edit/scripts/itemHelpers"
    import { getItemText } from "../../edit/scripts/textStyle"
    import { clone } from "../../helpers/array"
    import { loadCustomFonts } from "../../helpers/fonts"
    import { getStyleTemplate, itemHasAutoSize, itemNeedsAutoSize, slideHasAutoSizeItem } from "../../helpers/output"
    import Textbox from "../../slide/Textbox.svelte"
    import { SlideTimeline } from "../../timeline/SlideTimeline"
    import SlideItemTransition from "../transitions/SlideItemTransition.svelte"
    import { debugRender, isDebugging } from "../../helpers/debugLog"

    export let outputId: string
    export let outSlide: OutSlide
    export let isClearing = false

    export let slideData: SlideData | null
    export let currentSlide: any // Slide | null
    export let currentStyle: any

    export let animationData: any
    export let currentLineId: string | undefined
    export let lines: any

    export let ratio: number
    export let mirror = false
    export let preview = false
    export let transition: any = {}
    export let transitionEnabled = false
    export let styleIdOverride = ""

    let origin = ""
    $: if (outSlide.id) updateShow()
    function updateShow() {
        // custom fonts
        const currentShow = $showsCache[outSlide.id]
        loadCustomFonts(currentShow?.settings?.customFonts || [])
        origin = currentShow?.origin || ""
    }

    // TEST:
    // conditions
    // transitions
    // overlays
    // style lines
    // starting slide while clearing

    let currentItems: Item[] = []
    let current: any = {}
    let show = false
    // Svelte 5 reuses a {#key} branch when its key comes back while the branch is still fading out (Svelte 3 always
    // created a new one). Each change of show must give a new key, so the old SlideItemTransition is never revived.
    let showKey = 0
    function setShow(value: boolean) {
        if (show === value) return
        show = value
        showKey++
    }

    // Track items that are unchanged between slides and have no transition (to avoid redraw flicker)
    let persistentItems: Item[] = []
    let persistentItemIndexes: number[] = []

    // Check if an item has lines/text content
    function hasLinesContent(item: Item | undefined): boolean {
        if (!item) return false
        return !!getItemText(item).length
    }

    // Dynamic values (slide number, timers, variables...) can display differently with identical stored content
    function hasDynamicContent(item: Item | undefined): boolean {
        return getItemText(item || null).includes("{")
    }

    // Lines shown by the currently rendered items (current.lines is updated reactively, so it can't be compared against)
    let renderedLines = ""

    // Compare two items to see if their visible content is identical
    function itemsAreEqual(oldItem: Item | undefined, newItem: Item | undefined): boolean {
        if (!oldItem || !newItem) return false
        // Compare the full serialized content (lines, style, etc.)
        return JSON.stringify(oldItem) === JSON.stringify(newItem)
    }
    // maintain a hidden workload that primes autosize results ahead of the visible reveal
    let precomputeTargets: { item: Item; index: number; key: string; token: string; signature: string }[] = []
    let precomputePending = new Set<string>()
    // the content each item key was measured for, so the same text is not measured (or waited for) again
    let measuredSignatures = new Map<string, string>()
    let precomputeRuns = 0

    const showItemRef = { outputId, slideIndex: outSlide?.index }
    let conditionsUpdater = 0
    let isMic = false
    $: isMic = JSON.stringify(currentItems.map((a) => a?.conditions) || "").includes('"element":"volume"')

    let updaterInterval: NodeJS.Timeout
    $: {
        clearInterval(updaterInterval)
        updaterInterval = setInterval(
            () => {
                if (isClearing || !Array.isArray(currentItems)) return
                if (currentItems.find((a) => a?.conditions)) conditionsUpdater++
            },
            isMic ? 100 : 300
        )
    }
    onDestroy(() => clearInterval(updaterInterval))

    // do not update if only line has changed
    $: currentOutSlide = "{}"
    $: if (outSlide) {
        let newOutSlide = clone(outSlide)
        delete newOutSlide.line
        delete newOutSlide.revealCount
        delete newOutSlide.itemClickReveal
        let outSlideString = JSON.stringify(newOutSlide)
        if (outSlideString !== currentOutSlide) currentOutSlide = outSlideString
    }
    // do not update if lines has no changes for this output
    $: currentLines = "{}"
    $: if (lines) {
        let outLinesString = JSON.stringify(lines)
        if (outLinesString !== currentLines) currentLines = outLinesString
    }
    // only update if changed (no update when another output changes)
    let currentSlideItems: Item[] | null = null
    $: if (currentSlide?.items !== 0) {
        if (JSON.stringify(currentSlide?.items) !== JSON.stringify(currentSlideItems)) currentSlideItems = clone(currentSlide?.items || null)
    }
    $: if (current && outSlide) {
        if (current.outSlide && current.outSlide.id === outSlide.id && current.outSlide.index === outSlide.index) {
            current.outSlide.itemClickReveal = outSlide.itemClickReveal
            current.outSlide.revealCount = outSlide.revealCount
            current.outSlide.line = outSlide.line
        }
    }
    $: if (current && lines) {
        current.lines = clone(lines)
    }

    $: if (currentSlideItems !== undefined || currentOutSlide || currentLines) updateItems()
    let timeout: NodeJS.Timeout | null = null
    let updateGeneration = 0

    // if anything is outputted & changing to something that's outputted
    let transitioningBetween = false

    // lightweight guard so we only precompute for text items that actually rely on autosize
    function shouldPrecomputeAutoSize(item: Item) {
        if (!item) return false
        const type = item.type || "text"
        if (type !== "text") return false
        return itemHasAutoSize(item)
    }

    // The visible text box can only reuse a measurement it caches: not text that changes, chords, a line limit from the
    // output style or lines that are revealed one by one. Those are measured by the text box itself (after it is shown).
    function canPrecomputeAutoSize(item: Item) {
        if (!shouldPrecomputeAutoSize(item)) return false
        return !getItemText(item).includes("{") && !item.chords?.enabled && !Number(currentStyle?.lines || 0) && !item.lineReveal
    }

    // what a measured size depends on: the item (not its stored sizes), the output size and the style
    function autoSizeSignature(item: Item) {
        const content: any = clone(item)
        delete content.autoFontSize
        delete content.previewAutoFontSize
        return JSON.stringify([content, ratio, currentStyle, styleIdOverride, mirror, outSlide?.id, outSlide?.layout, currentSlide?.id])
    }

    // kick off hidden textbox renders that warm the autosize cache before we flip "show" on
    function scheduleAutoSizePrecompute(items: Item[]) {
        if (preview || !Array.isArray(items) || !items.length) {
            precomputeTargets = []
            precomputePending.clear()
            return
        }

        const targets: { item: Item; index: number; key: string; token: string; signature: string }[] = []
        const pendingKeys = new Set<string>()

        items.forEach((item, index) => {
            if (!canPrecomputeAutoSize(item)) return
            const key = createAutoSizeKey(item, index)
            if (!key) return
            if (item.autoFontSize) return // skip entries that already have cached measurements

            // measured for this content already, the visible textbox has the size cached
            const signature = autoSizeSignature(item)
            if (measuredSignatures.get(key) === signature) return

            pendingKeys.add(key)
            // the token gives every run its own textbox, so a finished one is never reused (it would not report again)
            targets.push({ item: clone(item), index, key, signature, token: `${key}#${++precomputeRuns}` })
        })

        precomputeTargets = targets
        precomputePending = pendingKeys
    }

    // remove hidden probes once the underlying textbox reports that its autosize cache is hot
    function handlePrecomputeReady(event: CustomEvent<{ key: string; fontSize: number }>, token: string) {
        const key = event.detail?.key
        const target = precomputeTargets.find((a) => a.token === token)
        if (!key || !target || !precomputePending.has(key)) return
        precomputePending.delete(key)
        measuredSignatures.delete(key)
        measuredSignatures.set(key, target.signature)
        if (measuredSignatures.size > 500) measuredSignatures.delete(measuredSignatures.keys().next().value as string)
        if (!precomputePending.size) {
            precomputeTargets = []
            continueAfterAutoSize()
        }
    }

    // The outgoing items stay and the new ones are not placed until the incoming auto sized text is measured (the
    // measurement above), at most this long. The new textbox then has its size cached and shows at it from the first frame.
    const AUTO_SIZE_MAX_WAIT = 500
    let autoSizeContinue: (() => void) | null = null
    let autoSizeFallback: NodeJS.Timeout | null = null
    function waitForAutoSize(callback: () => void, wait: boolean) {
        stopAutoSizeWait()
        if (!wait || !precomputePending.size) return callback()

        autoSizeContinue = callback
        autoSizeFallback = setTimeout(continueAfterAutoSize, AUTO_SIZE_MAX_WAIT)
    }
    function continueAfterAutoSize() {
        const callback = autoSizeContinue
        stopAutoSizeWait()
        callback?.()
    }
    function stopAutoSizeWait() {
        if (autoSizeFallback) clearTimeout(autoSizeFallback)
        autoSizeFallback = null
        autoSizeContinue = null
    }
    onDestroy(stopAutoSizeWait)

    // custom show/hide timers keep their own delays
    function hasCustomTimer(items: Item[] | undefined) {
        return !!items?.some((item) => item?.actions?.showTimer || item?.actions?.hideTimer)
    }

    // create a stable identifier for precompute + visible textbox coordination
    // Items from a template have no id, and the textbox keeps one measurement per key: the position alone would make
    // every slide replace the size of the previous one, so the text and box are part of the key.
    const autoSizeKeys = new WeakMap<Item, string>()
    function createAutoSizeKey(item: Item, index: number) {
        if (item?.id) return String(item.id)
        if (!item) return `idx-${index}`

        let content = autoSizeKeys.get(item)
        if (content === undefined) {
            const text = JSON.stringify([item.style, item.align, item.lines, item.textFit, item.auto, item.list, item.scrolling])
            let hash = 5381
            for (let i = 0; i < text.length; i++) hash = ((hash << 5) + hash + text.charCodeAt(i)) | 0
            content = (hash >>> 0).toString(36)
            autoSizeKeys.set(item, content)
        }
        return `idx-${index}-${content}`
    }

    // outgoing items hold for auto size delay while incoming content calculates font size
    $: incomingNeedsAutoSize = slideNeedsAutoSize(currentSlide, outSlide, currentStyle)
    function slideNeedsAutoSize(slide: any, out: OutSlide, style: any) {
        // text that is measured off-screen is waited for until it is ready (waitForAutoSize), no fixed delay needed for that
        if (!preview && !hasCustomTimer(slide?.items)) return !!slide?.items?.some((item: Item) => itemNeedsAutoSize(item) && !canPrecomputeAutoSize(item))

        if (slide?.items?.some(itemNeedsAutoSize)) return true

        let customTemplate = getStyleTemplate(out, style)
        if (!Object.keys(customTemplate).length && out?.id === "temp") customTemplate = $templates[$scriptureSettings.template] || {}

        return slideHasAutoSizeItem(customTemplate)
    }

    let isClearingToEmpty = false
    async function updateItems() {
        let betweenClearingTransition = transition.between || transition
        if (betweenClearingTransition?.type === "none") betweenClearingTransition.duration = 0

        if (!currentSlideItems?.length) {
            debugRender(`slide content cleared (${outSlide?.id}#${outSlide?.index} has no items)`)
            stopAutoSizeWait()
            scheduleAutoSizePrecompute([])
            currentItems = []
            // Clear persistent items when no slide content
            persistentItems = []
            persistentItemIndexes = []
            renderedLines = ""
            current = {
                outSlide: clone(outSlide),
                slideData: clone(slideData),
                currentSlide: clone(currentSlide),
                lines: clone(lines),
                currentStyle: clone(currentStyle)
            }

            // wait for items to properly clear
            // if changing quickly from text to empty to text again, the first text will be displayed again (due to Svelte transition bug)
            if (transitionEnabled) {
                isClearingToEmpty = true
                setTimeout(() => (isClearingToEmpty = false), betweenClearingTransition.duration)
            }
            return
        }

        if (isClearingToEmpty) await waitUntilValueIsDefined(() => !isClearingToEmpty, 10, betweenClearingTransition.duration)

        scheduleAutoSizePrecompute(currentSlide.items)

        // get any items with no transition between the two slides
        let oldItemTransition = currentItems.find((a) => a.actions?.transition)?.actions?.transition
        let newItemTransition = currentSlide.items.find((a) => a.actions?.transition)?.actions?.transition
        let itemTransitionDuration: number | null = null
        if (oldItemTransition && JSON.stringify(oldItemTransition) === JSON.stringify(newItemTransition)) {
            itemTransitionDuration = oldItemTransition.duration ?? null
            if (oldItemTransition.type === "none") itemTransitionDuration = 0
            // find any item that should have no transition!
            else if (currentSlide.items.find((a) => a.actions?.transition?.duration === 0 || a.actions?.transition?.type === "none")) itemTransitionDuration = 0
        }

        let currentTransition = transition.between || transition.in || transition
        if (currentTransition?.type === "none") currentTransition.duration = 0

        let currentTransitionDuration = transitionEnabled ? (itemTransitionDuration ?? currentTransition?.duration ?? 0) : 0
        let waitToShow = currentTransitionDuration * ((currentTransition?.fadeInOffset ?? 50) / 100)

        // Identify items that are unchanged and have no lines content (to keep outputted without fade)
        const newPersistentIndexes: number[] = []
        const newPersistentItems: Item[] = []
        const transitioningItems: Item[] = []
        const transitioningIndexes: number[] = []
        // Text items that are identical & visible with the same lines (e.g. repeated slides in an arrangement) keep showing without a transition
        const linesString = JSON.stringify(lines)
        let heldTextItems = 0

        currentSlide.items.forEach((newItem: Item, newIndex: number) => {
            // Find matching old item by index (position-based matching for slides)
            const oldItem = currentItems[newIndex]

            // Item is persistent if:
            // 1. Content is unchanged AND
            // 2. It does not have lines/text content (non-text items or text items without lines content)
            if (!hasLinesContent(newItem) && itemsAreEqual(oldItem, newItem)) {
                newPersistentIndexes.push(newIndex)
                newPersistentItems.push(clone(newItem))
            } else if (show && linesString === renderedLines && itemsAreEqual(oldItem, newItem) && !hasDynamicContent(newItem)) {
                // Identical text item, shown with the same lines: keep it as is (SlideItemTransition just receives the new slide refs)
                heldTextItems++
            } else {
                // Item needs to be re-rendered (changed, or has lines content)
                transitioningIndexes.push(newIndex)
                transitioningItems.push(clone(newItem))
            }
        })

        // Update persistent items (these won't flash)
        persistentItemIndexes = newPersistentIndexes
        persistentItems = newPersistentItems

        if (isDebugging()) debugRender(`slide content update: ${outSlide?.id}#${outSlide?.index}, items ${currentItems.length} -> ${currentSlide.items.length}: ${persistentItems.length} persistent, ${heldTextItems} held, ${transitioningItems.length} re-rendered (hide + show cycle)${transitionEnabled ? `, transition ${currentTransitionDuration}ms` : ", no transition"}`)

        // between
        const isDifferentSlide = current.currentSlide?.id !== currentSlide?.id || current.outSlide?.index !== outSlide?.index || current.outSlide?.id !== outSlide?.id
        if (isDifferentSlide && currentItems.length && currentSlide.items.length) transitioningBetween = true

        if (timeout) clearTimeout(timeout)
        stopAutoSizeWait()

        // If all items are persistent/held (unchanged), skip the show/hide cycle entirely
        if (transitioningItems.length === 0 && (persistentItems.length > 0 || heldTextItems > 0)) {
            // Just update the context without triggering transitions
            current = {
                outSlide: clone(outSlide),
                slideData: clone(slideData),
                currentSlide: clone(currentSlide),
                lines: clone(lines),
                currentStyle: clone(currentStyle)
            }
            // Keep currentItems in sync but don't toggle show
            renderedLines = linesString
            currentItems = clone(currentSlide.items || [])
            transitioningBetween = false
            return
        }

        const gen = ++updateGeneration

        const hideAndShow = () => {
            if (gen !== updateGeneration) return
            debugRender("slide content hidden (show = false)")
            setShow(false)

            // wait for previous items to start fading out (svelte will keep them until the transition is done!)
            timeout = setTimeout(() => {
                if (gen !== updateGeneration) return
                // Only include items that need transitioning in currentItems
                // Persistent items are rendered separately
                currentItems = clone(currentSlide.items || [])
                renderedLines = linesString
                current = {
                    outSlide: clone(outSlide),
                    slideData: clone(slideData),
                    currentSlide: clone(currentSlide),
                    lines: clone(lines),
                    currentStyle: clone(currentStyle)
                }

                // wait until half transition duration of previous items have passed as it looks better visually
                timeout = setTimeout(() => {
                    if (gen !== updateGeneration) return
                    debugRender("slide content shown again (show = true)")
                    setShow(true)

                    // wait for between to set in transition
                    timeout = setTimeout(() => {
                        if (gen !== updateGeneration) return
                        transitioningBetween = false
                    })
                }, waitToShow)
            })
        }

        // wait for between to update out transition
        timeout = setTimeout(() => {
            if (gen !== updateGeneration) return
            // hold the outgoing items until the incoming text size is known (items with custom show/hide timers keep theirs)
            waitForAutoSize(hideAndShow, !hasCustomTimer(currentItems) && !hasCustomTimer(currentSlide.items))
        })
    }

    // OUTPUT SLIDE TIMELINE
    // get current slide timeline position
    let timelinePos = 0
    let timelineItems = new Map<string, Item[]>()
    let timelineActions: TimelineAction[] = []
    let isReady = false
    $: if (outSlide) isReady = false
    $: if (currentSlide) setupTimeline()
    function setupTimeline() {
        if (isReady) return
        timelinePos = 0
        timelineActions = currentSlide?.timeline?.actions || []
        // timelineItems = new Set<Item[]>() // WIP reset eventually?
        setTimeout(() => (isReady = true))
    }
    onMount(() => {
        const interval = setInterval(() => {
            if (isClearing || !isReady || !timelineActions.length) return
            // WIP use actual slide timeline pos when available?
            timelinePos += 15 * $slideTimelineSpeedMultiplier
            styleActions(timelineActions)

            // loop back when reached last action
            if (currentSlide?.timeline?.loop) {
                const lastActionTime = Math.max(...timelineActions.map((a) => a.time + (a.duration || 0) * 1000))
                if (timelinePos >= lastActionTime) timelinePos = 0
            }
        }, 15)

        function styleActions(actions: TimelineAction[]) {
            const itemStyleActions = actions.filter((a) => a.type === "style")
            // group by style key & indexes
            const groupedActions = new Map<string, TimelineAction[]>()
            for (const action of itemStyleActions) {
                const key = action.data?.key
                if (!key) continue

                const indexes = action.data?.indexes ? action.data.indexes.join(",") : ""
                const groupKey = `${key}-${indexes}`

                if (!groupedActions.has(groupKey)) groupedActions.set(groupKey, [])
                groupedActions.get(groupKey)?.push(action)
            }

            const slideKey = `${outSlide?.id}-${outSlide?.layout}-${outSlide?.index}`
            const items = clone(timelineItems.get(slideKey) || currentItems)

            const currentTime = timelinePos
            groupedActions.forEach((actions, _key) => {
                const previous = getPreviousAction(actions)
                const next = getNextAction(actions)
                const value = SlideTimeline.interpolateValue(previous, next, currentTime)
                if (value === null) return

                const action = (previous || next)!
                // const ref = _show(outSlide?.id || "").layouts([outSlide?.layout]).ref()[0] || []
                // const slideId = ref[outSlide?.index || 0]?.id
                // SlideTimeline.triggerAction(action, value, { id: outSlide.id, slideId: slideId })

                const itemIndexes = action.data.indexes ?? [0]
                itemIndexes.forEach((itemIndex) => {
                    const item = items[itemIndex]
                    if (!item) return

                    const updatedItem = SlideTimeline.updateStyle(action, item, value)
                    items[itemIndex] = updatedItem
                })
            })

            timelineItems.set(slideKey, items)
            timelineItems = timelineItems
        }

        function getPreviousAction(actions: TimelineAction[]) {
            const now = timelinePos
            return actions.reduce((prev, curr) => (curr.time > (prev?.time ?? -1) && curr.time <= now ? curr : prev), null as TimelineAction | null)
        }

        function getNextAction(actions: TimelineAction[]) {
            const now = timelinePos
            return actions.reduce((next, curr) => (curr.time > now && (next === null || curr.time < next.time) ? curr : next), null as TimelineAction | null)
        }

        return () => {
            clearInterval(interval)
        }
    })
</script>

<!-- Render all items in original order to maintain z-index layering -->
{#each currentItems as item, index}
    {#if item && shouldItemBeShown(item, [], showItemRef, conditionsUpdater) && (!item.clickReveal || current.outSlide?.itemClickReveal)}
        {#if persistentItemIndexes.includes(index)}
            <!-- Persistent item: unchanged content, render outside transition to avoid flicker -->
            <Textbox
                backdropFilter={current.slideData?.["backdrop-filter"] || ""}
                chords={item.chords?.enabled}
                animationStyle={animationData.style || {}}
                item={timelineItems.get(`${current.outSlide?.id}-${current.outSlide?.layout}-${current.outSlide?.index}`)?.[index] || item}
                transition={null}
                {ratio}
                {outputId}
                ref={{ type: "show", showId: current.outSlide?.id, slideId: current.currentSlide?.id, id: current.currentSlide?.id || "", layoutId: current.outSlide?.layout, origin }}
                linesStart={current.lines?.[currentLineId || ""]?.[item.lineReveal ? "linesStart" : "start"]}
                linesEnd={current.lines?.[currentLineId || ""]?.[item.lineReveal ? "linesEnd" : "end"]}
                clickRevealed={!!current.lines?.[currentLineId || ""]?.clickRevealed}
                outputStyle={current.currentStyle}
                {mirror}
                {preview}
                slideIndex={current.outSlide?.index}
                {styleIdOverride}
                autoSizeKey={createAutoSizeKey(item, index)}
                updateDynamicValues={!isClearing}
            />
        {:else}
            <!-- Transitioning item: render with animation wrapper inside {#key} -->
            {#key showKey}
                {#if show}
                    <SlideItemTransition {preview} {transitionEnabled} {transitioningBetween} {isClearing} {incomingNeedsAutoSize} globalTransition={transition} currentSlide={current.currentSlide} {item} outSlide={current.outSlide} lines={current.lines} currentStyle={current.currentStyle} let:customSlide let:customItem let:customLines let:customOut let:transition>
                        <Textbox
                            backdropFilter={current.slideData?.["backdrop-filter"] || ""}
                            chords={customItem.chords?.enabled}
                            animationStyle={animationData.style || {}}
                            item={timelineItems.get(`${customOut?.id}-${customOut?.layout}-${customOut?.index}`)?.[index] || customItem}
                            {transition}
                            {ratio}
                            {outputId}
                            ref={{ type: "show", showId: customOut?.id, slideId: customSlide?.id, id: customSlide?.id || "", layoutId: customOut?.layout, origin }}
                            linesStart={customLines?.[currentLineId || ""]?.[item.lineReveal ? "linesStart" : "start"]}
                            linesEnd={customLines?.[currentLineId || ""]?.[item.lineReveal ? "linesEnd" : "end"]}
                            clickRevealed={!!customLines?.[currentLineId || ""]?.clickRevealed}
                            outputStyle={current.currentStyle}
                            {mirror}
                            {preview}
                            slideIndex={customOut?.index}
                            {styleIdOverride}
                            autoSizeKey={createAutoSizeKey(item, index)}
                            updateDynamicValues={!isClearing}
                        />
                    </SlideItemTransition>
                {/if}
            {/key}
        {/if}
    {/if}
{/each}

{#if precomputeTargets.length}
    <div class="autosize-precompute" aria-hidden="true">
        {#each precomputeTargets as target (target.token)}
            <Textbox item={target.item} {ratio} {outputId} outputStyle={currentStyle} {mirror} {preview} {styleIdOverride} ref={{ type: "show", showId: outSlide?.id, slideId: currentSlide?.id, id: currentSlide?.id || "", layoutId: outSlide?.layout }} autoSizeKey={target.key} on:autosizeReady={(e) => handlePrecomputeReady(e, target.token)} updateDynamicValues={!isClearing} />
        {/each}
    </div>
{/if}

<style>
    /* park precompute textboxes far off-screen so they never flash during transitions, in a box as big as the one the
       visible textboxes are in (the measured size depends on it, and the cache entry has to match the visible textbox) */
    .autosize-precompute {
        position: absolute;
        top: -10000px;
        left: -10000px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        visibility: hidden;
    }
</style>
