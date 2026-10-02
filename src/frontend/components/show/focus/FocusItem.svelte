<script lang="ts">
    import type { ProjectShowRef } from "../../../../types/Projects"
    import { outLocked, outputs, showsCache } from "../../../stores"
    import { getActiveOutputs, setOutput } from "../../helpers/output"
    import AudioPreview from "../AudioPreview.svelte"
    import FolderShow from "../folder/FolderShow.svelte"
    import MediaPreview from "../media/MediaPreview.svelte"
    import OverlayPreview from "../overlay/OverlayPreview.svelte"
    import EffectPreview from "../effect/EffectPreview.svelte"
    import PdfPreview from "../pdf/PdfPreview.svelte"
    import Slides from "../Slides.svelte"
    import HoverButton from "../../inputs/HoverButton.svelte"
    import Camera from "../../output/Camera.svelte"
    import Capture from "../../drawer/live/Capture.svelte"
    import NdiStream from "../../drawer/live/NDIStream.svelte"
    import PowerPointPreview from "../ppt/PowerPointPreview.svelte"
    import ProjectShowPlaceholder from "../placeholder/ProjectShowPlaceholder.svelte"

    export let show: ProjectShowRef
    export let continuous = true
    $: layoutId = show.layout || $showsCache[show.id]?.settings?.activeLayout
    $: type = show.type

    $: outputId = getActiveOutputs($outputs)[0]
    $: currentOutput = $outputs[outputId] || {}
</script>

{#if type === "video" || type === "image" || type === "player"}
    <div class="outline" class:active={currentOutput?.out?.background?.path === show.id}>
        <MediaPreview projectShow={show} />
    </div>
{:else if type === "audio"}
    <AudioPreview active={show} />
{:else if type === "section"}
    {#if show.notes}
        <p class="notes">{show.notes}</p>
    {/if}
{:else if show.type === "overlay"}
    <div class="outline" style="height: 250px;" class:active={currentOutput?.out?.overlays?.includes(show.id)}>
        <OverlayPreview {show} />
    </div>
{:else if show.type === "effect"}
    <div class="outline" style="height: 250px;" class:active={currentOutput?.out?.effects?.includes(show.id)}>
        <EffectPreview {show} />
    </div>
{:else if type === "pdf"}
    <PdfPreview {show} index={show.index || 0} />
{:else if type === "ppt"}
    <PowerPointPreview {show} />
{:else if type === "camera" || type === "screen" || type === "ndi"}
    <HoverButton
        icon="play"
        size={10}
        on:click={() => {
            if (!$outLocked) setOutput("background", { id: show.id, type })
        }}
    >
        {#if type === "camera"}
            <Camera id={show.id} groupId={show.data?.groupId} class="media" preview />
        {:else if type === "screen"}
            <Capture screen={{ id: show.id, name: show.name || "" }} streams={[]} background />
        {:else}
            <NdiStream screen={{ id: show.id, name: show.name || "" }} background />
        {/if}
    </HoverButton>
{:else if type === "show_placeholder"}
    <ProjectShowPlaceholder />
{:else if type === "folder"}
    <FolderShow path={show.id} index={show.index || 0} />
{:else}
    <Slides showId={show.id} layout={show.layout} projectIndex={show.index} {continuous} />

    <!-- WIP change layout??? -->
    <!-- <Layouts /> -->
    {#if $showsCache[show.id]?.layouts?.[layoutId]?.notes}
        <p class="notes">{$showsCache[show.id]?.layouts?.[layoutId]?.notes}</p>
    {/if}
{/if}

<style>
    .notes {
        width: 100%;
        padding: 10px 15px;
    }

    .outline {
        padding: 2px;
    }
    .active {
        outline: 2px solid var(--secondary);
        outline-offset: -2px;
    }
</style>
