// Plain-text snapshot of everything the presentation engine looks at when you press Space, for the debug panel (Ctrl/Cmd+Shift+L).

import { get } from "svelte/store"
import { activePage, activeProject, activeShow, focusMode, outLocked, outputs, projects, showsCache, special } from "../../stores"
import { describeOutputs, describeSlide, outputName, outputNames, showName } from "./debugLog"
import { getAllActiveOutputIds, getLinkedSlides } from "./output"
import { OutputHelper } from "./OutputHelper"
import { _show } from "./shows"

function layoutTable(showId: string, layoutId: string | undefined, title: string): string[] {
    const show = get(showsCache)[showId]
    if (!show) return [`${title}: not loaded`]

    const layout = layoutId || show.settings?.activeLayout || ""
    const refs = (_show(showId).layouts([layout]).ref()[0] || []) as { id: string; data?: any }[]
    const showBindings: string[] = show.settings?.bindings || []

    const lines = [`${title}: "${show.name}" arrangement "${show.layouts?.[layout]?.name || layout}" (${layout}), show outputs: ${showBindings.length ? outputNames(showBindings).join("+") : "all"}, default timer: ${show.settings?.nextTimer || 0}s`]
    const slideData = refs.map((a) => a.data || {})
    refs.forEach((ref, index) => {
        const data = ref.data || {}
        const group = String(show.slides?.[ref.id]?.group || "").slice(0, 22)
        const own: string[] = data.bindings || []
        const outputsText = own.length ? outputNames(own).join("+") : showBindings.length ? outputNames(showBindings).join("+") + " (from show)" : "all"
        const card = getLinkedSlides(showId, slideData, index)
        const flags: string[] = []
        if (data.linkNext) flags.push(card.length > 1 ? `LINK card ${card.join("+")}` : "linkNext but NOT a valid card (needs different outputs)")
        if (data.nextTimer) flags.push(`timer ${data.nextTimer}s`)
        if (data.disabled) flags.push("disabled")
        if (data.end) flags.push("end (loops to start)")
        if (data.background) flags.push("bg")
        lines.push(`    #${index} ${group.padEnd(22)} -> ${outputsText}${flags.length ? "   [" + flags.join(", ") + "]" : ""}`)
    })
    return lines
}

export function buildDebugState(): string {
    const lines: string[] = []
    const now = new Date()
    lines.push(`State at ${now.toLocaleTimeString()}.${String(now.getMilliseconds()).padStart(3, "0")}`)
    lines.push(`page: ${get(activePage)}, focus mode: ${get(focusMode)}, outputs locked: ${get(outLocked)}, "next item on last slide": ${get(special).nextItemOnLastSlide !== false}`)

    // outputs
    lines.push("", "OUTPUTS")
    describeOutputs().forEach((a) => lines.push("    " + a))
    getAllActiveOutputIds().forEach((id) => {
        lines.push(`    ${outputName(id)} on Space/next: ${OutputHelper.debugPeek(id, true)}`)
        lines.push(`    ${outputName(id)} on previous: ${OutputHelper.debugPeek(id, false)}`)
    })

    // project
    const project = get(projects)[get(activeProject) || ""]
    const active = get(activeShow)
    lines.push("", `PROJECT "${project?.name || "-"}", opened item: ${active ? `#${active.index} "${showName(active.id)}" (${active.type || "show"})` : "none"}`)
    ;(project?.shows || []).forEach((item, index) => {
        const isShow = (item.type || "show") === "show"
        const bindings: string[] = isShow ? get(showsCache)[item.id]?.settings?.bindings || [] : []
        lines.push(`    ${active?.index === index ? ">" : " "} #${index} ${isShow ? showName(item.id) : item.name || item.id} (${item.type || "show"})${item.layout ? ` layout=${item.layout}` : ""}${bindings.length ? ` -> ${outputNames(bindings).join("+")}` : ""}${(item as { notes?: string }).notes ? " has notes" : ""}`)
    })

    // slides of the playing show, and of the opened show when that is another one
    const playing = Object.values(get(outputs))
        .map((a) => a.out?.slide)
        .find((a) => a?.id && get(showsCache)[a.id])
    lines.push("")
    if (playing) lines.push(...layoutTable(playing.id, playing.layout, "SLIDES OF THE SHOW ON OUTPUT"))
    if (active && (active.type || "show") === "show" && active.id !== playing?.id) lines.push("", ...layoutTable(active.id, active.layout, "SLIDES OF THE OPENED SHOW"))
    if (playing) lines.push("", `(output slide for reference: ${describeSlide(playing)})`)

    return lines.join("\n")
}
