<script lang="ts">
    import { changeSlidesView } from "../../show/slides"
    import { actions, activePopup, activeShow, alertMessage, slidesOptions, showsCache } from "../../stores"
    import { translateText } from "../../utils/language"
    import { getAccess } from "../../utils/profile"
    import { getActionIcon, runAction } from "../actions/actions"
    import Icon from "../helpers/Icon.svelte"
    import { _show } from "../helpers/shows"
    import MaterialButton from "../inputs/MaterialButton.svelte"
    import MaterialZoom from "../inputs/MaterialZoom.svelte"
    import Reference from "./Reference.svelte"

    // A thin bar at the bottom of the show area (above the drawer) with the slide view controls and show tools.
    // Arrangements are chosen and created in the Groups tab of the right panel.

    $: showId = $activeShow?.id || ""
    // the bar is always visible, the show tools only apply to an opened show
    $: hasShow = !!$showsCache[showId]
    $: currentShow = $showsCache[showId] || {}
    $: layouts = currentShow.layouts
    $: activeLayout = currentShow.settings?.activeLayout

    let isTranslated = false
    $: layoutSlides = layouts?.[activeLayout]?.slides || []
    $: if (layoutSlides.length) checkTranslated()
    function checkTranslated() {
        isTranslated = !!layoutSlides.find(
            (a) =>
                a?.id &&
                _show()
                    .slides([a.id])
                    .get("items")
                    ?.flat()
                    ?.find((item) => item?.language)
        )
    }

    $: reference = currentShow.reference
    $: referenceType = reference?.type

    $: customActionId = currentShow?.settings?.customAction
    $: customAction = customActionId && $actions[customActionId] ? customActionId : ""
    function runCustomAction(edit = false) {
        if (edit || !customAction) {
            activePopup.set("custom_action")
            return
        }

        runAction($actions[customAction], { source: "click" })
    }

    let profile = getAccess("shows")
    $: isLocked = currentShow?.locked || profile.global === "read" || profile[currentShow?.category || ""] === "read"
</script>

<div class="bar">
    <div class="left">
        {#if !hasShow}
            <!-- no show tools -->
        {:else if reference}
            <Reference {showId} show={currentShow} />
        {/if}

        {#if !hasShow}
            <!-- no show tools -->
        {:else if customAction}
            <MaterialButton class="context #edit_custom_action" title="actions.run_action: {$actions[customAction].name}" on:click={() => runCustomAction()}>
                <Icon size={1.1} id={getActionIcon(customAction)} />
                <p>{$actions[customAction].name}</p>
            </MaterialButton>
        {:else if Object.keys($actions).length && !reference && !isLocked}
            <MaterialButton title="show.custom_action_tip" on:click={() => runCustomAction(true)}>
                <Icon size={1.1} id="actions" white />
            </MaterialButton>
        {/if}
    </div>

    <div class="right">
        {#if !hasShow}
            <!-- no show tools -->
        {:else if isLocked}
            <MaterialButton
                title="show.locked"
                on:click={() => {
                    alertMessage.set(`${translateText(currentShow?.locked ? "show.locked" : "profile.locked")}<br><br>Unlock it by clicking the three dots in the top right corner.`)
                    activePopup.set("alert")
                }}
            >
                <Icon size={1.1} id="locked" />
            </MaterialButton>
        {:else if referenceType !== "lessons"}
            <MaterialButton on:click={() => activePopup.set("translate")} title="popup.translate">
                <Icon size={1.1} id="translate" white={!isTranslated} />
            </MaterialButton>
        {/if}

        {#if hasShow}<div class="divider"></div>{/if}

        <MaterialZoom hidden={false} columns={$slidesOptions.columns} on:change={(e) => slidesOptions.set({ ...$slidesOptions, columns: e.detail })} />

        {#if referenceType !== "lessons"}
            <MaterialButton class="context #slideViews" title="show.change_view: show.{$slidesOptions.mode} [Ctrl+Shift+V]" on:click={changeSlidesView}>
                <Icon size={1.3} id={$slidesOptions.mode} white={$slidesOptions.mode === "grid"} />
            </MaterialButton>
        {/if}
    </div>
</div>

<style>
    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        min-height: 36px;
        padding: 0 8px;
        box-sizing: border-box;
        flex-shrink: 0;

        /* stays at the bottom of the visible area when the project is scrolled */
        position: sticky;
        bottom: 0;
        z-index: 4;

        background-color: var(--primary-darker);
        border-top: 1px solid var(--primary-lighter);
    }

    .left,
    .right {
        display: flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
    }

    .bar :global(button) {
        min-height: 28px;
        padding: 0 0.8em !important;
    }

    .divider {
        width: 1px;
        align-self: stretch;
        margin: 6px 4px;
        background-color: var(--primary-lighter);
    }
</style>
