<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import type { Cropping } from "../../../../types/Settings"
    import { boxToMargins, fitBoxToRatio, fullBox, getFittedSize, marginsToBox, moveBox, resizeBox, type Box, type Handle, type Margins } from "../../helpers/cropMath"

    /** Image to crop (already encoded for use in an <img>) */
    export let src = ""
    /** Saved crop (pixels removed from each side of the original image) */
    export let cropping: Partial<Cropping> | undefined = undefined
    /** Output screen size (only the shape matters) */
    export let frame = { width: 16, height: 9 }
    /** Keep the crop the same shape as the output screen */
    export let lockRatio = true
    export let fit = "contain"
    export let filter = ""
    export let flipped = false
    export let flippedY = false

    const dispatch = createEventDispatcher<{ change: Margins }>()

    let naturalWidth = 0
    let naturalHeight = 0
    function loaded(e: Event) {
        const image = e.currentTarget as HTMLImageElement
        naturalWidth = image.naturalWidth
        naturalHeight = image.naturalHeight
    }

    $: natural = { width: naturalWidth, height: naturalHeight }
    $: ready = naturalWidth > 0 && naturalHeight > 0

    let stageWidth = 0
    let stageHeight = 0
    // keep room around the image so the handles on its edges stay visible
    const PADDING = 16
    $: scale = ready && stageWidth && stageHeight ? Math.max(0, Math.min((stageWidth - PADDING * 2) / naturalWidth, (stageHeight - PADDING * 2) / naturalHeight)) : 0
    $: imageWidth = naturalWidth * scale
    $: imageHeight = naturalHeight * scale

    $: ratio = lockRatio && frame.width && frame.height ? frame.width / frame.height : null

    // the crop box (natural pixels), follows the saved crop unless it is being dragged
    let box: Box = { x0: 0, y0: 0, x1: 0, y1: 0 }
    let dragging = false
    $: syncBox(cropping, natural)
    function syncBox(crop: Partial<Cropping> | undefined, size: { width: number; height: number }) {
        if (dragging || !size.width || !size.height) return
        box = marginsToBox(crop, size)
    }

    let canvas: HTMLElement
    let handle: Handle = "move"
    let startBox: Box = box
    let startPointer = { x: 0, y: 0 }

    function pointerToImage(e: PointerEvent) {
        const rect = canvas.getBoundingClientRect()
        return { x: (e.clientX - rect.left) / scale, y: (e.clientY - rect.top) / scale }
    }

    function start(e: PointerEvent, newHandle: Handle) {
        if (!ready || e.button !== 0) return
        e.preventDefault()
        e.stopPropagation()
        ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)

        dragging = true
        handle = newHandle
        startBox = { ...box }
        startPointer = pointerToImage(e)
    }

    function move(e: PointerEvent) {
        if (!dragging) return

        const point = pointerToImage(e)
        if (handle === "move") box = moveBox(startBox, point.x - startPointer.x, point.y - startPointer.y, natural)
        else box = resizeBox(startBox, handle, point, natural, ratio)
    }

    function end() {
        if (!dragging) return
        dragging = false
        commit()
    }

    function commit() {
        const margins = boxToMargins(box, natural)
        const current = boxToMargins(marginsToBox(cropping, natural), natural)
        if (JSON.stringify(margins) === JSON.stringify(current)) return
        dispatch("change", margins)
    }

    /** Make the crop the same shape as the output screen */
    export function fitToScreen() {
        if (!ready) return
        const screenRatio = frame.width / frame.height
        box = fitBoxToRatio(box, screenRatio, natural)
        commit()
    }

    /** Show the whole image again */
    export function clearCrop() {
        if (!ready) return
        box = fullBox(natural)
        commit()
    }

    // RESULT (how the crop looks on the output screen, updated while dragging)

    $: cropWidth = box.x1 - box.x0
    $: cropHeight = box.y1 - box.y0
    $: shown = ready && cropWidth > 0 && cropHeight > 0 ? getFittedSize(frame, { width: cropWidth, height: cropHeight }, fit) : { width: frame.width, height: frame.height }
    $: shownWidthPercent = (shown.width / frame.width) * 100
    $: shownHeightPercent = (shown.height / frame.height) * 100
    $: flipStyle = `transform: translate(-50%, -50%) scale(${flipped ? -1 : 1}, ${flippedY ? -1 : 1});`

    const corners: Handle[] = ["nw", "ne", "sw", "se"]
    const edges: Handle[] = ["n", "s", "e", "w"]
    $: handles = ratio ? corners : [...corners, ...edges]
</script>

<div class="editor">
    <div class="stage" bind:clientWidth={stageWidth} bind:clientHeight={stageHeight}>
        <!-- loads the image to get its size -->
        <img class="loader" {src} alt="" on:load={loaded} />

        {#if ready && scale > 0}
            <div class="canvas" bind:this={canvas} style="width: {imageWidth}px;height: {imageHeight}px;">
                <img class="source" {src} alt="" draggable="false" />

                <div class="box" role="presentation" style="left: {box.x0 * scale}px;top: {box.y0 * scale}px;width: {cropWidth * scale}px;height: {cropHeight * scale}px;" on:pointerdown={(e) => start(e, "move")} on:pointermove={move} on:pointerup={end} on:pointercancel={end}>
                    <span class="grid vertical one"></span>
                    <span class="grid vertical two"></span>
                    <span class="grid horizontal one"></span>
                    <span class="grid horizontal two"></span>

                    {#each handles as name}
                        <span class="handle {name}" role="presentation" on:pointerdown={(e) => start(e, name)} on:pointermove={move} on:pointerup={end} on:pointercancel={end}></span>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="loading">…</div>
        {/if}
    </div>

    <div class="result">
        <div class="screen" style="aspect-ratio: {frame.width} / {frame.height};">
            {#if ready}
                <div class="shown" style="width: {shownWidthPercent}%;height: {shownHeightPercent}%;filter: {filter};{flipStyle}">
                    <img {src} alt="" draggable="false" style="width: {(naturalWidth / cropWidth) * 100}%;height: {(naturalHeight / cropHeight) * 100}%;left: {(-box.x0 / cropWidth) * 100}%;top: {(-box.y0 / cropHeight) * 100}%;" />
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .editor {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
        min-height: 0;
    }

    .stage {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--primary-darkest);
        background-image: repeating-conic-gradient(rgb(255 255 255 / 0.04) 0% 25%, transparent 0% 50%);
        background-size: 20px 20px;
    }

    .loader {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
    }

    .loading {
        opacity: 0.5;
    }

    .canvas {
        position: relative;
        flex-shrink: 0;
        user-select: none;
        touch-action: none;
    }

    .source {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .box {
        position: absolute;
        box-sizing: border-box;
        border: 2px solid var(--secondary);
        /* darken everything outside the crop */
        box-shadow: 0 0 0 9999px rgb(0 0 0 / 0.6);
        cursor: move;
        touch-action: none;
    }

    .grid {
        position: absolute;
        pointer-events: none;
        background-color: rgb(255 255 255 / 0.35);
    }
    .grid.vertical {
        top: 0;
        bottom: 0;
        width: 1px;
    }
    .grid.horizontal {
        left: 0;
        right: 0;
        height: 1px;
    }
    .grid.one.vertical {
        left: 33.33%;
    }
    .grid.two.vertical {
        left: 66.66%;
    }
    .grid.one.horizontal {
        top: 33.33%;
    }
    .grid.two.horizontal {
        top: 66.66%;
    }

    .handle {
        position: absolute;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        box-sizing: border-box;
        border: 2px solid var(--primary-darkest);
        border-radius: 3px;
        background-color: var(--secondary);
        touch-action: none;
    }
    .handle.nw {
        left: 0;
        top: 0;
        cursor: nwse-resize;
    }
    .handle.ne {
        left: 100%;
        top: 0;
        cursor: nesw-resize;
    }
    .handle.sw {
        left: 0;
        top: 100%;
        cursor: nesw-resize;
    }
    .handle.se {
        left: 100%;
        top: 100%;
        cursor: nwse-resize;
    }
    .handle.n {
        left: 50%;
        top: 0;
        cursor: ns-resize;
    }
    .handle.s {
        left: 50%;
        top: 100%;
        cursor: ns-resize;
    }
    .handle.w {
        left: 0;
        top: 50%;
        cursor: ew-resize;
    }
    .handle.e {
        left: 100%;
        top: 50%;
        cursor: ew-resize;
    }

    .result {
        flex: 0 0 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 0;
    }

    .screen {
        position: relative;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        border-radius: 6px;
        background-color: #000;
        outline: 1px solid var(--primary-lighter);
    }

    .shown {
        position: absolute;
        left: 50%;
        top: 50%;
        overflow: hidden;
    }
    .shown img {
        position: absolute;
        max-width: none;
        pointer-events: none;
    }
</style>
