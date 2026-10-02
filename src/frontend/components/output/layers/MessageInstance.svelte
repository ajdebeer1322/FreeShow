<script lang="ts">
    import type { LiveMessage } from "../../../../types/Message"
    import Overlay from "./Overlay.svelte"

    export let message: LiveMessage
    export let outputId: string
    export let mirror = false
    export let preview = false
    export let styleIdOverride = ""

    function cycle(node: HTMLElement, live: LiveMessage) {
        let animation: Animation | undefined
        let revision = ""
        const update = (value: LiveMessage) => {
            if (value.revision === revision) return // unrelated slide/output changes preserve the cycle
            revision = value.revision
            animation?.cancel()
            if (!value.cycle) return
            const hold = value.cycle.hold * 1000
            const total = Math.max(1, value.fadeIn + hold + value.fadeOut + value.cycle.pause * 1000)
            animation = node.animate(
                [
                    { opacity: 0, offset: 0 },
                    { opacity: 1, offset: value.fadeIn / total },
                    { opacity: 1, offset: (value.fadeIn + hold) / total },
                    { opacity: 0, offset: (value.fadeIn + hold + value.fadeOut) / total },
                    { opacity: 0, offset: 1 }
                ],
                { duration: total, iterations: Infinity }
            )
        }
        update(live)
        return { update, destroy: () => animation?.cancel() }
    }
</script>

<div class="message-design" data-message-id={message.id} use:cycle={message}>
    <Overlay overlay={{ items: message.items }} id={message.id} {outputId} {mirror} {preview} {styleIdOverride} dynamicValues={false} transition={{ type: "none", duration: 0, easing: "linear" }} />
</div>

<style>
    .message-design {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
</style>
