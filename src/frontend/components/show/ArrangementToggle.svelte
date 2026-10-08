<script lang="ts">
    import { showsCache } from "../../stores"
    import Icon from "../helpers/Icon.svelte"
    import MaterialButton from "../inputs/MaterialButton.svelte"
    import { openArrangementBars, toggleArrangementBar } from "./arrangementBar"

    // The button on the right of a show header that opens its arrangement bar.

    export let showId: string
    export let key = showId
    // makes this show the active one (project view)
    export let select: (() => void) | null = null

    $: currentShow = $showsCache[showId]
    $: visible = !!currentShow?.layouts && !currentShow.reference
    $: open = $openArrangementBars.includes(key)

    function toggle() {
        select?.()
        toggleArrangementBar(key)
    }
</script>

{#if visible}
    <MaterialButton style="width: 32px;height: 100%;padding: 0.3em 0.5em;{open ? '' : 'opacity: 0.8;'}" title="panel.arrangements" isActive={open} on:click={toggle}>
        <Icon size={0.9} id="groups" white={!open} />
    </MaterialButton>
{/if}
