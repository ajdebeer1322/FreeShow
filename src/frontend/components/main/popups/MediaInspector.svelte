<script lang="ts">
    import { activePopup, media, popupData, showsCache } from "../../../stores"
    import { getAccess } from "../../../utils/profile"
    import MediaEditor from "../../edit/editors/MediaEditor.svelte"
    import MediaTools from "../../edit/MediaTools.svelte"
    import { getFileName } from "../../helpers/media"
    import { backToOriginal, countFileUses, duplicateBackground, getInspectorBackground, setBackgroundLoop, type InspectorTarget } from "../../helpers/mediaInspector"
    import T from "../../helpers/T.svelte"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import MaterialToggleSwitch from "../../inputs/MaterialToggleSwitch.svelte"
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

    // preview (video position & length)
    let videoTime = 0
    let videoData = { paused: false, muted: true, duration: 0, loop: true }
    $: duration = videoData.duration || 0

    let tools: MediaTools

    // PLAYBACK

    $: loop = bg?.entry.loop !== false
    function changeLoop(value: boolean) {
        if (!bg || isLocked) return
        setBackgroundLoop(target.showId, bg.bgId, value)
    }

    // TRIM

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

        tools?.valueChanged({ id: key, value: Math.round(value * 10) / 10 })
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
        <div class="left">
            <div class="preview">
                <MediaEditor overridePath={path} bind:videoTime bind:videoData />
            </div>

            <div class="file">
                <span class="name" title={path}>{fileName}</span>
                {#if bg.isDuplicate}
                    <span class="badge"><T id="inspector.copy" /></span>
                {/if}
            </div>

            {#if otherUses > 0}
                <div class="note"><T id="inspector.used_elsewhere" />: {otherUses}</div>
            {/if}

            {#if isVideo}
                <div class="section">
                    <h5><T id="inspector.playback" /></h5>

                    <MaterialToggleSwitch label="inspector.loop" title="inspector.loop_tip" checked={loop} defaultValue={true} disabled={isLocked} on:change={(e) => changeLoop(e.detail)} />

                    <h5><T id="inspector.trim" /></h5>
                    <TrimBar {duration} from={fromTime} to={toTime} current={videoTime} on:change={(e) => applyTrim(e.detail.key, e.detail.value)} />

                    <div class="trimRow">
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

        <div class="right">
            <div class="tools">
                <MediaTools bind:this={tools} overridePath={path} showReset={false} />
            </div>

            <div class="actions">
                <MaterialButton variant="outlined" icon="copy" disabled={isLocked || busy} title="inspector.duplicate_tip" on:click={duplicate}>
                    <T id="inspector.duplicate" />
                </MaterialButton>

                {#if bg.isDuplicate}
                    <MaterialButton variant="outlined" icon="undo" disabled={isLocked} title="inspector.original_tip" on:click={original}>
                        <T id="inspector.original" />
                    </MaterialButton>
                {/if}

                <MaterialButton variant="outlined" icon="reset" title="inspector.reset_tip" on:click={() => tools?.resetAll()}>
                    <T id="inspector.reset" />
                </MaterialButton>
            </div>
        </div>
    </div>
{:else}
    <p class="empty"><T id="inspector.no_background" /></p>
{/if}

<style>
    .inspector {
        display: grid;
        grid-template-columns: minmax(380px, 1fr) 340px;
        gap: 12px;
        width: min(980px, 82vw);
        height: min(600px, 72vh);
    }

    .left,
    .right {
        display: flex;
        flex-direction: column;
        min-height: 0;
        gap: 8px;
    }

    .preview {
        position: relative;
        flex: 1;
        min-height: 220px;
        border: 1px solid var(--primary-lighter);
        background-color: var(--primary-darkest);
        overflow: hidden;
    }

    .file {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
    }
    .badge {
        flex-shrink: 0;
        padding: 1px 8px;
        border-radius: 10px;
        background-color: var(--secondary);
        color: var(--secondary-text);
        font-size: 0.75em;
    }
    .note {
        opacity: 0.7;
        font-size: 0.85em;
    }

    .section h5 {
        margin: 8px 0 4px;
        opacity: 0.7;
    }

    .trimRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }
    .time {
        font-variant-numeric: tabular-nums;
        opacity: 0.8;
    }

    .tools {
        flex: 1;
        min-height: 0;
        border: 1px solid var(--primary-lighter);
        overflow: hidden;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .empty {
        opacity: 0.6;
        padding: 20px;
    }
</style>
