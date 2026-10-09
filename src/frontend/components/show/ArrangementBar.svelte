<script lang="ts">
    import { activePopup, alertMessage, cachedShowsData, groups, outputs, selected, showsCache } from "../../stores"
    import { newToast } from "../../utils/common"
    import { translateText } from "../../utils/language"
    import { getAccess } from "../../utils/profile"
    import { removeSlide } from "../context/menuClick"
    import { BLANK_GROUP_ID, getGroupIds, getImageLabels } from "../helpers/arrangements"
    import { getContrast } from "../helpers/color"
    import { ondrop } from "../helpers/drop"
    import { getGroupName } from "../helpers/show"
    import { getActiveOutputs } from "../helpers/output"
    import Icon from "../helpers/Icon.svelte"
    import { _show } from "../helpers/shows"
    import T from "../helpers/T.svelte"
    import DropArea from "../system/DropArea.svelte"
    import SelectElem from "../system/SelectElem.svelte"
    import Arrangements from "./tools/Arrangements.svelte"

    // The arrangement of a show, like ProPresenter: all the groups of the song on top, the arrangement (dropdown + order) below.
    // Drag a group into the order to add it, drag the tokens in the order to move them, click a group to add it to the end.

    export let showId: string
    export let layout = "" // arrangement of the project item
    export let index: number | undefined = undefined // project item index

    $: currentShow = $showsCache[showId]
    $: activeLayout = currentShow?.settings?.activeLayout
    $: layoutId = layout || activeLayout || ""
    // same as the slides in the grid, the layout is only stored when it is not the active one
    $: selectLayout = layoutId && layoutId !== activeLayout ? { layout: layoutId } : {}

    let profile = getAccess("shows")
    $: isLocked = currentShow?.locked || profile.global === "read" || profile[currentShow?.category || ""] === "read"

    // GROUPS

    type Token = { id: string; name: string; color: string; locked: boolean }

    // image slides are named after their file: "Image", or "Image 1", "Image 2"...
    $: groupIds = currentShow ? getGroupIds(currentShow.slides) : []
    $: imageLabels = currentShow ? getImageLabels(currentShow.slides, currentShow.media, groupIds, translateText("items.image")) : {}

    function getToken(slideId: string, layoutColor: string | null = null): Token {
        const slide = currentShow?.slides?.[slideId]
        let name = slide?.group || ""
        let color = slide?.color || ""

        const globalGroup = slide?.globalGroup ? $groups[slide.globalGroup] : null
        if (globalGroup) {
            name = globalGroup.default ? translateText(`groups.${globalGroup.name}`) : globalGroup.name
            color = globalGroup.color || ""
        }

        // no arrangement numbers, but different slides with the same name are numbered
        name = imageLabels[slideId] || getGroupName({ show: currentShow, showId }, slideId, name, 0, false, false) || ""
        if (name === "." || !name) name = "—"

        return { id: slideId, name, color: layoutColor || color, locked: !!slide?.locked }
    }

    // $cachedShowsData: updated when the slides change
    $: groupTokens = $cachedShowsData && $groups && currentShow ? groupIds.map((id) => getToken(id)) : []

    function tokenStyle(color: string) {
        if (!color) return ""
        return `background-color: ${color};color: ${getContrast(color)};`
    }

    function addGroup(id: string) {
        if (isLocked) {
            alertMessage.set(currentShow?.locked ? "show.locked" : "profile.locked")
            activePopup.set("alert")
            return
        }

        // same as clicking a group in the Groups tab
        selected.set({ id: "group", data: [{ id, showId }] })
        ondrop(null, "slide", { showId, layout: layoutId })
        selected.set({ id: null, data: [] })
    }

    // ORDER

    $: layoutRef = currentShow && layoutId ? _show(showId).layouts([layoutId]).ref()[0] || [] : []
    $: orderTokens = layoutRef.filter((a) => a.type === "parent").map((a) => ({ ...getToken(a.id, a.data?.color || null), index: a.layoutIndex, end: a.layoutIndex + (a.children?.length || 0), disabled: !!a.data?.disabled }))

    // the group that is on output
    $: outputId = getActiveOutputs($outputs, true, true, true)[0] || ""
    $: outSlide = $outputs[outputId]?.out?.slide
    $: outIndex = outSlide?.id === showId && (!outSlide.layout || outSlide.layout === layoutId) ? (outSlide.index ?? -1) : -1

    function remove(index: number) {
        if (isLocked) return newToast("output.state_locked")
        removeSlide([{ index, showId, ...selectLayout }], "remove")
    }
</script>

<!-- a drop is handled by the areas inside, the show's slide area must not handle it again -->
<div class="bar" role="none" on:drop|stopPropagation>
    <div class="row">
        <span class="label"><T id="show.arrangement_groups" /></span>

        <div class="tokens">
            <!-- an empty slide, the background stays as it was -->
            <SelectElem id="group" data={{ id: BLANK_GROUP_ID, showId }} draggable={!isLocked}>
                <button class="token blank" title={translateText("show.blank_group")} on:click={() => addGroup(BLANK_GROUP_ID)}>
                    <T id="show.blank_group" />
                </button>
            </SelectElem>

            {#each groupTokens as token}
                <SelectElem id="group" data={{ id: token.id, showId }} draggable={!isLocked && !token.locked}>
                    <button
                        class="token"
                        style={tokenStyle(token.color)}
                        title={token.name}
                        on:click={(e) => {
                            if (e.ctrlKey || e.metaKey) return
                            if (token.locked) return newToast("output.state_locked")
                            addGroup(token.id)
                        }}
                    >
                        {#if token.locked}<Icon id="lock" size={0.7} white right />{/if}
                        {token.name}
                    </button>
                </SelectElem>
            {/each}
        </div>
    </div>

    <div class="row">
        <div class="picker">
            <Arrangements {showId} {index} bar />
        </div>

        <div class="order">
            <DropArea id="slides" data={{ showId, layout: layoutId, arrangementBar: true }} hoverTimeout={0}>
                <div class="tokens">
                    {#each orderTokens as token}
                        <!-- arrangementBar: Delete / right click only removes it from the arrangement, the group stays in the show -->
                        <SelectElem id="slide" data={{ index: token.index, showId, ...selectLayout, arrangementBar: true }} draggable={!isLocked} selectable={!isLocked} trigger="row" borders="edges">
                            <span class="token {isLocked ? '' : 'context #arrangement_token'}" class:disabled={token.disabled} class:active={outIndex >= token.index && outIndex <= token.end} style={tokenStyle(token.color)}>
                                {token.name}
                                {#if !isLocked}
                                    <button class="remove" title={translateText("actions.remove")} on:click|stopPropagation={() => remove(token.index)}>
                                        <Icon id="close" size={0.85} white />
                                    </button>
                                {/if}
                            </span>
                        </SelectElem>
                    {:else}
                        <span class="empty"><T id="empty.groups" /></span>
                    {/each}
                </div>
            </DropArea>
        </div>
    </div>
</div>

<style>
    .bar {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 4px 8px;
        background-color: var(--primary-darker);
        border-bottom: 1px solid var(--primary-lighter);
        font-size: 0.8em;
    }

    .row {
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }

    .label {
        flex-shrink: 0;
        width: 150px;
        padding-top: 3px;
        text-align: end;
        opacity: 0.5;
        font-size: 0.9em;
    }

    .picker {
        flex-shrink: 0;
        width: 150px;
    }

    .order {
        flex: 1;
        min-width: 0;
        min-height: 24px;
        background-color: var(--primary-darkest);
        border-radius: 4px;
    }

    .tokens {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        min-height: 22px;
        padding: 1px;
    }

    .token {
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 1px 8px;
        border: none;
        border-radius: 3px;
        background-color: var(--primary-darkest);
        color: var(--text);
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        line-height: 1.5;
        white-space: nowrap;
        cursor: pointer;
        opacity: 0.9;
    }
    .token:hover {
        opacity: 1;
    }
    .token.disabled {
        opacity: 0.4;
    }
    .token.active {
        opacity: 1;
        box-shadow: 0 0 0 2px var(--secondary);
    }
    .token.blank {
        background-color: transparent;
        box-shadow: inset 0 0 0 1px var(--primary-lighter);
        opacity: 0.7;
    }

    /* on top of the tag, so the tag does not change size */
    .remove {
        position: absolute;
        top: 50%;
        right: 2px;
        transform: translateY(-50%);
        display: none;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        padding: 0;
        border: 1px solid rgb(255 255 255 / 0.7);
        border-radius: 50%;
        background-color: rgb(0 0 0 / 0.75);
        color: white;
        cursor: pointer;
    }
    .token:hover .remove {
        display: flex;
    }
    .remove :global(svg) {
        fill: white;
    }
    .remove:hover {
        background-color: var(--secondary);
        border-color: white;
    }

    .empty {
        padding: 2px 8px;
        opacity: 0.5;
    }
</style>
