// Helpers for recording what an output window shows over time, used by outputTransitions.test.ts.
// The golden file next to it was recorded from the Svelte 3 build (main at caaa6a83, before the Svelte 5 upgrade).

export type TimelineRecord = { t: number; tokens: string[] }
export type ScenarioResult = { states: string[][]; lastChange: number }

// Runs inside the output window: records every distinct set of visible text/image/video layers, once per frame.
export function startRecording() {
    const w = window as any
    w.__timeline = []
    const t0 = performance.now()
    let last = ""

    function collect() {
        const tokens: string[] = []
        const walk = (el: Element, parentOpacity: number) => {
            const style = getComputedStyle(el)
            if (style.display === "none" || style.visibility === "hidden") return
            const opacity = parentOpacity * parseFloat(style.opacity || "1")
            const bucket = (Math.round(opacity * 5) / 5).toFixed(1)
            const text = [...el.childNodes]
                .filter((n) => n.nodeType === 3)
                .map((n) => (n.textContent || "").trim())
                .filter(Boolean)
                .join(" ")
            if (text) tokens.push(`T:${text}@${bucket}`)
            if (el.tagName === "IMG") tokens.push(`IMG:${((el as HTMLImageElement).currentSrc || "").split("/").pop()}@${bucket}`)
            if (el.tagName === "VIDEO") {
                const video = el as HTMLVideoElement
                tokens.push(`VID:${(video.currentSrc || "").split("/").pop()}@${bucket}${video.loop ? " loop" : ""}`)
            }
            for (const child of el.children) walk(child, opacity)
        }
        walk(document.body, 1)
        return tokens
    }

    const loop = () => {
        const tokens = collect()
        const key = tokens.join("|")
        if (key !== last) {
            w.__timeline.push({ t: Math.round(performance.now() - t0), tokens })
            last = key
        }
        w.__timelineRaf = requestAnimationFrame(loop)
    }
    loop()
}

export function stopRecording(): TimelineRecord[] {
    const w = window as any
    cancelAnimationFrame(w.__timelineRaf)
    return w.__timeline
}

// States that only lasted a couple of frames are dropped so the comparison does not depend on frame timing.
const MIN_STATE_MS = 60

// Reduce a recording to the order in which layers appeared and disappeared: opacity steps are dropped
// (only that a layer is there matters, it must be removed after its fade out), and so are the placeholder dot
// some builds show while the output starts.
export function normalize(records: TimelineRecord[]): ScenarioResult {
    // one entry per change of the set of layers (opacity steps only change the record, not the layers)
    const merged: { layers: string; parts: string[]; duration: number }[] = []
    records.forEach((record, i) => {
        const parts = [...new Set(record.tokens.map((token) => token.replace(/@\d\.\d/, "")).filter((token) => token !== "T:."))].sort()
        const layers = parts.join("\n")
        const end = i + 1 < records.length ? records[i + 1].t : Infinity
        const previous = merged[merged.length - 1]
        if (previous && previous.layers === layers) previous.duration += end - record.t
        else merged.push({ layers, parts, duration: end - record.t })
    })

    const states: string[][] = []
    let previous = ""
    merged.forEach((entry, i) => {
        const isLast = i === merged.length - 1
        if (!states.length && !entry.parts.length) return
        if (!isLast && entry.duration < MIN_STATE_MS) return
        if (states.length && entry.layers === previous) return
        states.push(entry.parts)
        previous = entry.layers
    })
    return { states, lastChange: records.length ? records[records.length - 1].t : 0 }
}

// Compare a recording with the golden one. The exact in-between frames depend on frame timing, so this checks what
// a broken transition changes: where it starts and ends, which layers show up, how many are on screen at once
// (a revived/stacked old slide shows up as extra layers that never leave) and that it does not take much longer.
export function compareToGolden(actual: ScenarioResult, golden: ScenarioResult): string[] {
    const problems: string[] = []
    const describe = (state: string[] | undefined) => (state && state.length ? state.join(" + ") : "(empty)")
    const union = (states: string[][]) => [...new Set(states.flat())].sort()
    const maxLayers = (states: string[][]) => Math.max(0, ...states.map((state) => state.length))

    const actualEnd = actual.states[actual.states.length - 1]
    const goldenEnd = golden.states[golden.states.length - 1]
    if (describe(actualEnd) !== describe(goldenEnd)) problems.push(`ends with [${describe(actualEnd)}], expected [${describe(goldenEnd)}]`)
    const actualStart = actual.states[0]
    const goldenStart = golden.states[0]
    if (describe(actualStart) !== describe(goldenStart)) problems.push(`starts with [${describe(actualStart)}], expected [${describe(goldenStart)}]`)
    if (union(actual.states).join("|") !== union(golden.states).join("|")) problems.push(`showed layers [${union(actual.states).join(", ")}], expected [${union(golden.states).join(", ")}]`)
    if (maxLayers(actual.states) > maxLayers(golden.states)) problems.push(`up to ${maxLayers(actual.states)} layers at once, expected at most ${maxLayers(golden.states)}`)
    // The same source built with Svelte 3 and Svelte 5 measured within about 15 ms of each other on one machine, and a run
    // varies by about 10-20 ms, so more than 15% or 75 ms (the larger) is a real slowdown. Keep the golden recorded on the
    // machine and the Svelte 3 build it is compared with (see HOW_IT_WORKS.md, F-013).
    const allowed = Math.max(golden.lastChange * 0.15, 75)
    if (actual.lastChange > golden.lastChange + allowed) problems.push(`last change after ${actual.lastChange} ms, expected about ${golden.lastChange} ms (at most ${Math.round(golden.lastChange + allowed)} ms)`)
    return problems
}

// ---- Auto size probe ----
// Records, once per frame, every visible text box of the output with its effective opacity and rendered font size, so
// a test can tell when new text is fully visible and whether it was ever visible at a size it did not keep.

export type ProbeBox = { text: string; opacity: number; fontSize: number }
export type ProbeFrame = { at: number; boxes: ProbeBox[] }
export type ProbeSummary = {
    // ms from the activation (key press / click) until the target text was first visible / fully visible, null if never
    firstVisible: number | null
    fullyVisible: number | null
    // font sizes (px) the target text was visible at (opacity above 0.02), in order of appearance
    sizes: number[]
    // true when the target text was visible at a size other than the one it ended with
    flash: boolean
    firstFrameSize: number | null
    finalSize: number | null
    // text boxes visible at the same time: at most (an outgoing and an incoming one) and when it has settled
    maxBoxes: number
    finalBoxes: number
}

// Runs inside the output window.
export function startProbe() {
    const w = window as any
    w.__probe = []
    const origin = performance.timeOrigin

    function collect(): ProbeBox[] {
        const boxes: ProbeBox[] = []
        const seen = new Map<Element, { text: string; opacity: number; fontSize: number }>()
        document.querySelectorAll<HTMLElement>(".textContainer").forEach((span) => {
            const text = (span.textContent || "").trim()
            if (!text) return
            let opacity = 1
            for (let el: Element | null = span; el; el = el.parentElement) {
                const style = getComputedStyle(el)
                if (style.display === "none" || style.visibility === "hidden") return
                opacity *= parseFloat(style.opacity || "1")
            }
            const fontSize = parseFloat(getComputedStyle(span).fontSize) || 0
            const box = span.closest(".item") || span
            const previous = seen.get(box)
            if (previous) {
                previous.text += " " + text
                previous.fontSize = Math.max(previous.fontSize, fontSize)
            } else {
                const entry = { text, opacity, fontSize }
                seen.set(box, entry)
                boxes.push(entry)
            }
        })
        return boxes
    }

    const loop = () => {
        w.__probe.push({ at: origin + performance.now(), boxes: collect() })
        w.__probeRaf = requestAnimationFrame(loop)
    }
    loop()
}

export function stopProbe(): ProbeFrame[] {
    const w = window as any
    cancelAnimationFrame(w.__probeRaf)
    return w.__probe
}

// `activation` is the epoch time (Date.now()) the slide was activated, `target` a part of the new text.
export function summarizeProbe(frames: ProbeFrame[], activation: number, target: string): ProbeSummary {
    const sizes: number[] = []
    let firstVisible: number | null = null
    let fullyVisible: number | null = null
    let firstFrameSize: number | null = null
    let finalSize: number | null = null

    let maxBoxes = 0
    for (const frame of frames) {
        if (frame.at < activation) continue
        maxBoxes = Math.max(maxBoxes, frame.boxes.filter((b) => b.opacity > 0.02).length)
        const box = frame.boxes.find((b) => b.text.includes(target))
        if (!box) continue
        if (box.opacity > 0.02) {
            const size = Math.round(box.fontSize * 2) / 2
            if (firstVisible === null) {
                firstVisible = Math.round(frame.at - activation)
                firstFrameSize = size
            }
            if (!sizes.length || sizes[sizes.length - 1] !== size) sizes.push(size)
            finalSize = size
        }
        if (fullyVisible === null && box.opacity > 0.98) fullyVisible = Math.round(frame.at - activation)
    }

    const last = frames[frames.length - 1]
    const finalBoxes = last ? last.boxes.filter((b) => b.opacity > 0.02).length : 0
    return { firstVisible, fullyVisible, sizes, flash: new Set(sizes).size > 1, firstFrameSize, finalSize, maxBoxes, finalBoxes }
}
