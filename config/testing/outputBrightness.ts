// Helpers for measuring how bright the whole output window is over time, used to check that a text change does not
// make the screen dim, flash or pop (HOW_IT_WORKS.md F-025..F-028, TEXT_LAYER_DESIGN.md B-60..B-63).
//
// The main process captures the output window (webContents.capturePage, about one sample per 17 ms), scales the
// image down and averages the luminance. Wall clock times (Date.now()) match the activation times recorded in the
// main window by `trackActivations` in outputTransitions.test.ts.
//
//   const handle = await startBrightness(app, outputPage)
//   ... activate slides ...
//   const series = await stopBrightness(handle)
//   brightnessDip(series, activation)

import type { ElectronApplication, JSHandle, Page } from "playwright"

export type BrightnessSample = [time: number, luminance: number]

export type BrightnessSummary = {
    base: number // steady before the activation
    final: number // steady at the end of the window
    min: number
    minAt: number // ms after the activation
    max: number
    maxAt: number
    // how far the screen went below the darker of base/final, and above the brighter of them (0-255 luminance)
    dip: number
    rise: number
}

export async function startBrightness(app: ElectronApplication, output: Page, width = 64): Promise<JSHandle<any>> {
    const win = await app.browserWindow(output)
    await win.evaluate((w: any, size: number) => {
        const g = globalThis as any
        g.__brightness = []
        g.__brightnessRun = true
        void (async () => {
            while (g.__brightnessRun) {
                const image = w.webContents.isDestroyed() ? null : await w.webContents.capturePage()
                if (!image) break
                const bitmap = image.resize({ width: size }).toBitmap() // BGRA
                let sum = 0
                const pixels = bitmap.length / 4
                for (let i = 0; i < bitmap.length; i += 4) sum += 0.0722 * bitmap[i] + 0.7152 * bitmap[i + 1] + 0.2126 * bitmap[i + 2]
                g.__brightness.push([Date.now(), sum / pixels])
            }
        })()
    }, width)
    return win
}

export async function stopBrightness(win: JSHandle<any>): Promise<BrightnessSample[]> {
    return await win.evaluate(() => {
        const g = globalThis as any
        g.__brightnessRun = false
        return g.__brightness as [number, number][]
    })
}

// `before` and `settle` are the windows (ms) used for the steady values around the change.
export function brightnessDip(series: BrightnessSample[], activation: number, window = 1300, before = [-300, -60], settle = [1450, 1750]): BrightnessSummary {
    const mean = (from: number, to: number) => {
        const values = series.filter(([t]) => t >= activation + from && t <= activation + to).map(([, v]) => v)
        return values.length ? values.reduce((a, b) => a + b, 0) / values.length : NaN
    }
    const base = mean(before[0], before[1])
    const final = mean(settle[0], settle[1])
    const inside = series.filter(([t]) => t >= activation && t <= activation + window)
    let min: [number, number] = [0, Infinity]
    let max: [number, number] = [0, -Infinity]
    for (const [t, v] of inside) {
        if (v < min[1]) min = [t - activation, v]
        if (v > max[1]) max = [t - activation, v]
    }
    return { base, final, min: min[1], minAt: Math.round(min[0]), max: max[1], maxAt: Math.round(max[0]), dip: Math.min(base, final) - min[1], rise: max[1] - Math.max(base, final) }
}
