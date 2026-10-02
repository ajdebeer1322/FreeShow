import { uid } from "uid"
import type { LiveMessage, MessageDefinition, MessageToken } from "../../../types/Message"
import type { Item, Overlay } from "../../../types/Show"

const tokenPattern = () => /\{([^{}\r\n]+)\}/g
export const messageItemText = (item?: Item) => (item?.lines || []).map((line) => (line.text || []).map((text) => text.value || "").join("")).join("\n")
export const messageTextItem = (overlay?: Overlay) => overlay?.items.find((item) => item.messageText) || overlay?.items.find((item) => (item.type || "text") === "text" && item.lines?.length)
export const messageWording = (overlay?: Overlay) => messageItemText(messageTextItem(overlay))

export function getMessageTokens(overlay: Overlay): MessageToken[] {
    const labels = [...new Set(overlay.items.flatMap((item) => [...messageItemText(item).matchAll(tokenPattern())].map((match) => match[1].trim())).filter(Boolean))]
    return labels.map((label) => overlay.message?.tokens.find((token) => token.label === label) || { id: "token:" + label, label })
}

export function replaceMessageTokens(text: string, tokens: MessageToken[], values: Record<string, string>) {
    return text.replace(tokenPattern(), (_, label: string) => values[tokens.find((token) => token.label === label.trim())?.id || ""] || "")
}

export function setMessageWording(overlay: Overlay, wording: string): Overlay {
    const updated = JSON.parse(JSON.stringify(overlay)) as Overlay
    if (wording === messageWording(updated)) {
        if (updated.message) updated.message.tokens = getMessageTokens(updated)
        return updated // configuration-only saves retain native rich-text formatting
    }
    let item = messageTextItem(updated)
    if (!item) {
        item = createMessage().items[1]
        updated.items.push(item)
    }
    item.messageText = true
    const style = item.lines?.[0]?.text?.[0]?.style || "font-size:60px;color:#FFFFFF;font-family:Arial;"
    const align = item.lines?.[0]?.align || "text-align:center;"
    item.lines = wording.split("\n").map((value) => ({ align, text: [{ value, style }] }))
    if (updated.message) updated.message.tokens = getMessageTokens(updated)
    return updated
}

export function createMessage(): Overlay {
    const overlay: Overlay = {
        name: "Child pickup",
        color: null,
        category: null,
        message: { tokens: [], fadeIn: 500, fadeOut: 500, duration: 0, scrolling: { type: "none", duration: 15, gap: 100, repeat: true, startOffscreen: true, feather: 24 } },
        items: [
            { type: "text", messageBackground: true, style: "left:0px;top:850px;width:1920px;height:230px;background-color:#172338;", lines: [] },
            { type: "text", messageText: true, style: "left:60px;top:875px;width:1800px;height:180px;", align: "align-items:center;justify-content:center;", textFit: "shrinkToFit", lines: [{ align: "text-align:center;", text: [{ value: "Parents of {Child name}, please come to the back.", style: "font-size:60px;color:#FFFFFF;font-family:Arial;" }] }] }
        ]
    }
    overlay.message!.tokens = getMessageTokens(overlay)
    return overlay
}

export const escapeMessageText = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")

const bounded = (value: number | undefined, fallback: number, min: number, max: number) => Math.min(max, Math.max(min, Number.isFinite(value) ? value! : fallback))
export function normalizeMessage(definition: MessageDefinition): MessageDefinition {
    return {
        ...definition,
        fadeIn: bounded(definition.fadeIn, 500, 0, 30000),
        fadeOut: bounded(definition.fadeOut, 500, 0, 30000),
        duration: bounded(definition.duration, 0, 0, 86400),
        scrolling: { ...definition.scrolling, duration: bounded(definition.scrolling.duration, 15, 1, 600), gap: bounded(definition.scrolling.gap, 100, 0, 2000), feather: bounded(definition.scrolling.feather, 0, 0, 200) },
        ...(definition.cycle ? { cycle: { hold: bounded(definition.cycle.hold, 5, 0.1, 600), pause: bounded(definition.cycle.pause, 2, 0, 600) } } : {})
    }
}

export function snapshotMessage(id: string, overlay: Overlay, values: Record<string, string>, now = Date.now()): LiveMessage {
    const definition = normalizeMessage(overlay.message!)
    const tokens = getMessageTokens(overlay)
    const items = JSON.parse(JSON.stringify(overlay.items)) as Item[]
    items.forEach((item) => {
        // Message fades apply to the whole design. Item timers must not outlive the message.
        delete item.actions
        if (item === messageTextItem({ ...overlay, items })) item.scrolling = { ...definition.scrolling }
        item.lines?.forEach((line) => {
            const original = line.text || []
            const text = original.map((segment) => segment.value || "").join("")
            const runs: typeof original = []
            const append = (start: number, end: number, replacement?: string) => {
                let segmentOffset = 0
                for (const segment of original) {
                    const next = segmentOffset + (segment.value || "").length
                    if (next > start && segmentOffset < end) {
                        runs.push({ ...segment, value: escapeMessageText(replacement ?? text.slice(Math.max(start, segmentOffset), Math.min(end, next))) })
                        if (replacement !== undefined) break
                    }
                    segmentOffset = next
                }
            }
            let offset = 0
            for (const match of text.matchAll(tokenPattern())) {
                append(offset, match.index!)
                append(match.index!, match.index! + match[0].length, replaceMessageTokens(match[0], tokens, values))
                offset = match.index! + match[0].length
            }
            append(offset, text.length)
            line.text = runs
        })
    })
    return {
        id,
        revision: uid(),
        name: overlay.name,
        items,
        values: { ...values },
        fadeIn: Math.max(0, definition.fadeIn || 0),
        fadeOut: Math.max(0, definition.fadeOut || 0),
        ...(definition.cycle ? { cycle: { ...definition.cycle } } : {}),
        ...(definition.duration > 0 ? { expiresAt: now + definition.duration * 1000 } : {})
    }
}
