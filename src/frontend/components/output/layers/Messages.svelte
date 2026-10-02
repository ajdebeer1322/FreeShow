<script lang="ts">
    import type { LiveMessage } from "../../../../types/Message"
    import OutputTransition from "../transitions/OutputTransition.svelte"
    import MessageInstance from "./MessageInstance.svelte"

    export let messages: Record<string, LiveMessage> = {}
    export let outputId: string
    export let mirror = false
    export let preview = false
    export let styleIdOverride = ""
</script>

{#each Object.values(messages || {}) as message (message.revision)}
    <OutputTransition inTransition={{ type: "fade", duration: message.fadeIn, easing: "linear" }} outTransition={{ type: "fade", duration: message.fadeOut, easing: "linear" }}>
        <MessageInstance {message} {outputId} {mirror} {preview} {styleIdOverride} />
    </OutputTransition>
{/each}
