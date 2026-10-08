<script lang="ts">
    import { activePopup, showsCache } from "../../stores"
    import { getAccess } from "../../utils/profile"
    import Icon from "../helpers/Icon.svelte"
    import { _show } from "../helpers/shows"
    import { joinTime, secondsToTime } from "../helpers/time"
    import MaterialButton from "../inputs/MaterialButton.svelte"

    // The next slide timer button of a show, shown on the right of its header.
    // The popup always edits the active show, so `select` makes this show active first (project view).

    export let showId: string
    export let layout = ""
    export let select: (() => void) | null = null

    $: currentShow = $showsCache[showId]
    $: layoutId = layout || currentShow?.settings?.activeLayout || ""
    $: referenceType = currentShow?.reference?.type

    $: totalTime = getTotalTime(currentShow, layoutId)
    function getTotalTime(show: any, layoutId: string) {
        if (!show || !layoutId) return "0s"

        let ref =
            _show(showId)
                .layouts([layoutId])
                .ref()[0]
                ?.filter((a) => a?.data && !a.data.disabled) || []
        let total = ref.reduce((value, slide) => (value += Number(slide?.data?.nextTimer || 0)), 0)

        return total ? (total > 59 ? joinTime(secondsToTime(total)) : total + "s") : "0s"
    }

    let profile = getAccess("shows")
    $: isLocked = currentShow?.locked || profile.global === "read" || profile[currentShow?.category || ""] === "read"

    $: visible = !!currentShow && !isLocked && referenceType !== "lessons" && (totalTime !== "0s" || referenceType !== "scripture")

    function open() {
        if (!select) return activePopup.set("next_timer")

        // the layout of the project item is set shortly after it is selected
        select()
        setTimeout(() => activePopup.set("next_timer"), 100)
    }
</script>

{#if visible}
    <MaterialButton style="width: 32px;height: 100%;padding: 0.3em 0.5em;{totalTime === '0s' ? 'opacity: 0.8;' : ''}" title="popup.next_timer{totalTime !== '0s' ? ': ' + totalTime : ''} [Ctrl+Shift+D]" on:click={open}>
        <Icon size={0.9} id="clock" white={totalTime === "0s"} />
    </MaterialButton>
{/if}
