<script lang="ts">
    import { createEventDispatcher } from "svelte"

    /** Video length in seconds */
    export let duration = 0
    /** Start point (seconds) */
    export let from = 0
    /** End point (seconds), 0 = play to the end */
    export let to = 0
    /** Current playback position (seconds) */
    export let current = 0

    const dispatch = createEventDispatcher<{ change: { key: "fromTime" | "toTime"; value: number } }>()

    const MIN_LENGTH = 0.1

    let track: HTMLElement
    let dragging: "fromTime" | "toTime" | null = null
    let dragFrom = 0
    let dragTo = 0

    $: shownFrom = dragging ? dragFrom : from
    $: shownTo = dragging ? dragTo : to > 0 && to < duration ? to : duration
    $: toPercent = (time: number) => (duration > 0 ? Math.min(100, Math.max(0, (time / duration) * 100)) : 0)

    function getTime(e: PointerEvent) {
        const rect = track.getBoundingClientRect()
        const ratio = rect.width ? Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)) : 0
        return Math.round(ratio * duration * 10) / 10
    }

    function start(e: PointerEvent, key: "fromTime" | "toTime") {
        if (!duration) return
        e.preventDefault()
        ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)

        dragging = key
        dragFrom = from
        dragTo = to > 0 && to < duration ? to : duration
    }

    function move(e: PointerEvent) {
        if (!dragging) return

        const time = getTime(e)
        if (dragging === "fromTime") dragFrom = Math.min(time, dragTo - MIN_LENGTH)
        else dragTo = Math.max(time, dragFrom + MIN_LENGTH)
    }

    function end() {
        if (!dragging) return

        const key = dragging
        dragging = null

        if (key === "fromTime") dispatch("change", { key, value: Math.max(0, dragFrom) })
        // the end point at the very end means "no end point"
        else dispatch("change", { key, value: dragTo >= duration - 0.05 ? 0 : dragTo })
    }
</script>

<div class="trim" bind:this={track} role="group" aria-label="Trim">
    <div class="rail"></div>
    <div class="range" style="left: {toPercent(shownFrom)}%;width: {toPercent(shownTo) - toPercent(shownFrom)}%;"></div>
    <div class="playhead" style="left: {toPercent(current)}%;"></div>

    <div class="handle" style="left: {toPercent(shownFrom)}%;" role="slider" tabindex="0" aria-valuenow={shownFrom} aria-valuemin={0} aria-valuemax={duration} on:pointerdown={(e) => start(e, "fromTime")} on:pointermove={move} on:pointerup={end} on:pointercancel={end}></div>
    <div class="handle" style="left: {toPercent(shownTo)}%;" role="slider" tabindex="0" aria-valuenow={shownTo} aria-valuemin={0} aria-valuemax={duration} on:pointerdown={(e) => start(e, "toTime")} on:pointermove={move} on:pointerup={end} on:pointercancel={end}></div>
</div>

<style>
    .trim {
        position: relative;
        height: 34px;
        margin: 0 8px;
        touch-action: none;
        user-select: none;
    }

    .rail {
        position: absolute;
        top: 14px;
        left: 0;
        right: 0;
        height: 6px;
        border-radius: 3px;
        background-color: var(--primary-lighter);
    }

    .range {
        position: absolute;
        top: 14px;
        height: 6px;
        background-color: var(--secondary);
        opacity: 0.7;
    }

    .playhead {
        position: absolute;
        top: 8px;
        width: 2px;
        height: 18px;
        margin-left: -1px;
        background-color: var(--text);
        pointer-events: none;
    }

    .handle {
        position: absolute;
        top: 3px;
        width: 14px;
        height: 28px;
        margin-left: -7px;
        border-radius: 4px;
        background-color: var(--secondary);
        border: 2px solid var(--primary-darkest);
        cursor: ew-resize;
        z-index: 2;
    }
    .handle:hover,
    .handle:focus-visible {
        filter: brightness(1.2);
        outline: none;
    }
</style>
