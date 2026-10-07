<script lang="ts">
    import { activePopup, media, outputs, popupData, showsCache, styles } from "../../../stores"
    import { getAccess } from "../../../utils/profile"
    import ImageCropEditor from "../../edit/editors/ImageCropEditor.svelte"
    import MediaEditor from "../../edit/editors/MediaEditor.svelte"
    import { encodeFilePath, getFileName, getMedia, getMediaStyle } from "../../helpers/media"
    import { backToOriginal, countFileUses, duplicateBackground, getInspectorBackground, resetMediaSettings, setBackgroundLoop, setMediaSetting, type InspectorTarget } from "../../helpers/mediaInspector"
    import { getActiveOutputs, getResolution, getSlideBindings, resolveOutputIds } from "../../helpers/output"
    import { _show } from "../../helpers/shows"
    import T from "../../helpers/T.svelte"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import MaterialDropdown from "../../inputs/MaterialDropdown.svelte"
    import MaterialToggleSwitch from "../../inputs/MaterialToggleSwitch.svelte"
    import MediaInspectorSettings from "./MediaInspectorSettings.svelte"
    import TrimBar from "../../inputs/TrimBar.svelte"

    // opened from the slide context menu
    $: target = { showId: $popupData?.showId || "", layoutId: $popupData?.layoutId || "", index: $popupData?.index ?? -1 } as InspectorTarget

    // the slide background (updates when the slide is re-linked to a copy)
    let bg: ReturnType<typeof getInspectorBackground> = null
    $: {
        $showsCache
        bg = getInspectorBackground(target)
    }
    $: if (!bg && target.showId && $showsCache[target.showId]) activePopup.set(null)

    $: path = bg?.path || ""
    $: settings = $media[path] || {}
    $: isImage = bg?.type === "image"
    $: isVideo = bg?.type === "video"
    $: fileName = getFileName(path)

    // other slides using the same file would be changed as well (the settings belong to the file)
    $: otherUses = getOtherUses($showsCache, path)
    function getOtherUses(_shows: unknown, filePath: string) {
        return filePath ? Math.max(0, countFileUses(filePath) - 1) : 0
    }

    const profile = getAccess("shows")
    $: show = $showsCache[target.showId]
    $: isLocked = !!show?.locked || profile.global === "read" || profile[show?.category || ""] === "read"

    let cropEditor: ImageCropEditor

    // OUTPUT (the screen shape the image is positioned for)

    $: outputIds = getActiveOutputs($outputs, false, true, true)
    $: outputOptions = outputIds.map((id) => ({ value: id, label: $outputs[id]?.name || id }))

    let outputId = ""
    $: if (!outputId || !outputIds.includes(outputId)) outputId = getDefaultOutputId()
    function getDefaultOutputId() {
        // the output this slide is sent to, if it is set to specific outputs
        const ref = _show(target.showId).layouts([target.layoutId]).ref()[0] || []
        const bound = resolveOutputIds(getSlideBindings(target.showId, ref[target.index]?.data?.bindings))
        return bound.find((id) => outputIds.includes(id)) || outputIds[0] || ""
    }

    $: frame = getResolution(null, null, false, outputId)
    $: outputStyle = $styles[$outputs[outputId]?.style || ""]
    $: mediaStyle = getMediaStyle(settings, outputStyle)

    // IMAGE CROP

    let lockRatio = true
    let imageSrc = ""
    $: if (path && isImage) loadImage(path)
    async function loadImage(filePath: string) {
        const loaded = await getMedia(filePath)
        if (filePath !== path) return
        imageSrc = encodeFilePath(loaded?.path || filePath)
    }

    // VIDEO

    let videoTime = 0
    let videoData = { paused: false, muted: true, duration: 0, loop: true }
    $: duration = videoData.duration || 0

    $: loop = bg?.entry.loop !== false
    function changeLoop(value: boolean) {
        if (!bg || isLocked) return
        setBackgroundLoop(target.showId, bg.bgId, value)
    }

    $: fromTime = Number(settings.fromTime) || 0
    $: toTime = Number(settings.toTime) || 0
    $: endTime = toTime > 0 && toTime < duration ? toTime : duration

    function applyTrim(key: "fromTime" | "toTime", value: number) {
        if (!duration) return

        if (key === "fromTime") value = Math.max(0, Math.min(value, endTime - 0.1))
        else {
            value = Math.max(value, fromTime + 0.1)
            if (value >= duration - 0.05) value = 0 // the end of the video = no end point
        }

        // a start of 0 / no end point is the same as no trim
        setMediaSetting(path, key, value > 0 ? Math.round(value * 10) / 10 : undefined)
    }

    function formatTime(seconds: number) {
        const total = Math.max(0, seconds)
        const minutes = Math.floor(total / 60)
        const rest = (total - minutes * 60).toFixed(1).padStart(4, "0")
        return `${minutes}:${rest}`
    }

    // COPY

    let busy = false
    async function duplicate() {
        if (busy || isLocked) return
        busy = true
        await duplicateBackground(target)
        busy = false
    }

    function original() {
        if (isLocked) return
        backToOriginal(target)
    }
</script>

{#if bg}
    <div class="inspector">
        <div class="main">
            <header>
                <div class="title">
                    <span class="name" title={path}>{fileName}</span>
                    {#if bg.isDuplicate}
                        <span class="badge"><T id="inspector.copy" /></span>
                    {/if}
                </div>
                {#if otherUses > 0}
                    <span class="note" title={$showsCache ? "" : ""}><T id="inspector.used_elsewhere" />: {otherUses}</span>
                {/if}
            </header>

            {#if isImage}
                <div class="toolbar">
                    <div class="output">
                        <MaterialDropdown label="inspector.output" value={outputId} options={outputOptions} on:change={(e) => (outputId = e.detail)} />
                    </div>
                    <span class="size">{frame.width}×{frame.height}</span>

                    <MaterialToggleSwitch label="inspector.lock_ratio" title="inspector.lock_ratio_tip" checked={lockRatio} defaultValue={true} small on:change={(e) => (lockRatio = e.detail)} />

                    <MaterialButton variant="outlined" small title="inspector.fit_screen_tip" on:click={() => cropEditor?.fitToScreen()}>
                        <T id="inspector.fit_screen" />
                    </MaterialButton>
                    <MaterialButton variant="outlined" small icon="reset" title="inspector.clear_crop_tip" on:click={() => cropEditor?.clearCrop()}>
                        <T id="inspector.clear_crop" />
                    </MaterialButton>
                </div>

                <div class="media">
                    <ImageCropEditor bind:this={cropEditor} src={imageSrc} cropping={settings.cropping} {frame} {lockRatio} fit={mediaStyle.fit || "contain"} filter={mediaStyle.filter || ""} flipped={!!mediaStyle.flipped} flippedY={!!mediaStyle.flippedY} on:change={(e) => setMediaSetting(path, "cropping", e.detail)} />
                </div>
                <p class="hint"><T id="inspector.crop_hint" /></p>
            {:else}
                <div class="media video">
                    <MediaEditor overridePath={path} bind:videoTime bind:videoData />
                </div>

                <div class="card">
                    <div class="row">
                        <h5><T id="inspector.playback" /></h5>
                        <MaterialToggleSwitch label="inspector.loop" title="inspector.loop_tip" checked={loop} defaultValue={true} small disabled={isLocked} on:change={(e) => changeLoop(e.detail)} />
                    </div>

                    <h5><T id="inspector.trim" /></h5>
                    <TrimBar {duration} from={fromTime} to={toTime} current={videoTime} on:change={(e) => applyTrim(e.detail.key, e.detail.value)} />

                    <div class="row">
                        <MaterialButton variant="outlined" small disabled={!duration} on:click={() => applyTrim("fromTime", videoTime)}>
                            <T id="inspector.set_start" />
                        </MaterialButton>
                        <span class="time">{formatTime(fromTime)} – {formatTime(endTime)}</span>
                        <MaterialButton variant="outlined" small disabled={!duration} on:click={() => applyTrim("toTime", videoTime)}>
                            <T id="inspector.set_end" />
                        </MaterialButton>
                    </div>
                </div>
            {/if}
        </div>

        <aside>
            <MediaInspectorSettings {settings} fit={mediaStyle.fit || "contain"} {isVideo} on:change={(e) => setMediaSetting(path, e.detail.key, e.detail.value)} />
        </aside>

        <footer>
            <MaterialButton variant="outlined" icon="copy" disabled={isLocked || busy} title="inspector.duplicate_tip" on:click={duplicate}>
                <T id="inspector.duplicate" />
            </MaterialButton>

            {#if bg.isDuplicate}
                <MaterialButton variant="outlined" icon="undo" disabled={isLocked} title="inspector.original_tip" on:click={original}>
                    <T id="inspector.original" />
                </MaterialButton>
            {/if}

            <span class="spacer"></span>

            <MaterialButton variant="outlined" icon="reset" title="inspector.reset_tip" on:click={() => resetMediaSettings(path)}>
                <T id="inspector.reset" />
            </MaterialButton>
            <MaterialButton variant="contained" on:click={() => activePopup.set(null)}>
                <T id="inspector.done" />
            </MaterialButton>
        </footer>
    </div>
{:else}
    <p class="empty"><T id="inspector.no_background" /></p>
{/if}

<style>
    .inspector {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 340px;
        grid-template-rows: minmax(0, 1fr) auto;
        gap: 14px 16px;
        /* fits inside the popup (which has its own margins) */
        width: min(1120px, calc(100vw - 110px));
        height: min(700px, calc(100vh - 190px));
    }

    .main {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 0;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    .title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
    }
    .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.1em;
        font-weight: 600;
    }
    .badge {
        flex-shrink: 0;
        padding: 1px 9px;
        border-radius: 10px;
        background-color: var(--secondary);
        color: var(--secondary-text);
        font-size: 0.75em;
        font-weight: 600;
    }
    .note {
        flex-shrink: 0;
        opacity: 0.65;
        font-size: 0.85em;
    }

    .toolbar {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 8px 10px;
        border-radius: 8px;
        background-color: var(--primary-darker);
    }
    .output {
        width: 190px;
    }
    .size {
        opacity: 0.55;
        font-size: 0.85em;
        font-variant-numeric: tabular-nums;
    }

    .media {
        flex: 1;
        min-height: 0;
    }
    .media.video {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--primary-darkest);
    }

    .hint {
        margin: 0;
        opacity: 0.55;
        font-size: 0.8em;
    }

    .card {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 12px;
        border-radius: 8px;
        background-color: var(--primary-darker);
    }
    .card h5 {
        margin: 4px 0 0;
        opacity: 0.7;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }
    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }
    .time {
        font-variant-numeric: tabular-nums;
        opacity: 0.8;
    }

    aside {
        min-height: 0;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--primary-darker);
    }

    footer {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        gap: 8px;
        padding-top: 12px;
        border-top: 1px solid var(--primary-lighter);
    }
    .spacer {
        flex: 1;
    }

    .empty {
        opacity: 0.6;
        padding: 20px;
    }
</style>
