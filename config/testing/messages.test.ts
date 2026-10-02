import { expect, test } from "@playwright/test"
import { _electron as electron, type ElectronApplication, type Page } from "playwright"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

test("Messages operate over live slides, render literal fields, animate, and save definitions only", async () => {
    test.setTimeout(210_000)
    const directory = mkdtempSync(join(tmpdir(), "freeshow-messages-"))
    const settingsDirectory = join(directory, "settings")
    mkdirSync(settingsDirectory)
    // Route all portable stores to the fixture before startup/migration, and
    // keep a network update popup from intercepting unrelated editor clicks.
    writeFileSync(join(settingsDirectory, "config.json"), JSON.stringify({ dataPath: directory }))
    writeFileSync(join(settingsDirectory, "settings.json"), JSON.stringify({ alertUpdates: false }))
    let app: ElectronApplication
    let window: Page | undefined
    const launch = async () => {
        app = await electron.launch({
            args: [".", "--no-sandbox"],
            cwd: process.env.FS_TEST_APP_PATH || process.cwd(),
            env: {
                ...process.env,
                NODE_ENV: process.env.FS_TEST_NODE_ENV || "production",
                FS_MOCK_STORE_PATH: join(directory, "settings")
            }
        })
        await app.evaluate(({ dialog, ipcMain }, dataDirectory) => {
            dialog.showOpenDialog = async () => ({
                canceled: false,
                filePaths: [dataDirectory]
            })
            ipcMain.on("OUTPUT", (_event, message) => {
                if (message.channel === "OUTPUTS") (globalThis as any).messageTestOutputs = message.data
            })
        }, directory)
        await new Promise((resolve) => setTimeout(resolve, 5_000))
        window = undefined
        await expect
            .poll(async () => {
                for (const page of app.windows()) {
                    // The startup/splash window can close during enumeration.
                    if (
                        !page.isClosed() &&
                        (await page
                            .locator(".popup button.start, .top")
                            .count()
                            .catch(() => 0)) > 0
                    ) {
                        window = page
                        return true
                    }
                }
                return false
            })
            .toBe(true)
        const start = window!.locator(".popup button.start")
        if (await start.count()) {
            await window!.locator(".popup .button-trigger").first().click()
            await start.click()
            await window!.locator("#guideButtons").getByText("Skip").click()
        }
    }
    const close = async () => {
        const childProcess = app.process()
        // Playwright launches Electron in its own process group. A helper may
        // retain stdout after macOS quits, keeping its close event pending.
        // Stop the entire isolated fixture group if graceful close stalls.
        const forceClose = setTimeout(() => {
            if (!childProcess?.pid) return
            try {
                if (process.platform === "win32") childProcess.kill("SIGKILL")
                else process.kill(-childProcess.pid, "SIGKILL")
            } catch {}
        }, 5_000)
        try {
            await app.close()
        } finally {
            clearTimeout(forceClose)
        }
    }
    const state = () => app.evaluate(() => (globalThis as any).messageTestOutputs || {})
    const live = async () => Object.values(await state()).flatMap((output: any) => Object.values(output.out?.messages || {})) as any[]

    try {
        await launch()
        await window!.getByText("New project", { exact: true }).first().click()
        await window!.getByText("New show").first().click()
        await window!.locator("#name").fill("Message test lyrics")
        await window!.getByText("Quick Lyrics").click()
        await window!.getByPlaceholder("[Verse]").fill("[Verse]\nFirst lyric\n\n[Chorus]\nSecond lyric")
        await window!.getByTestId("create.show.popup.new.show").click()
        const slides = window!.locator("#showArea .grid > .main")
        await expect(slides).toHaveCount(2)
        await slides.first().click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide)).toBe(true)
        const original = Object.values(await state()).map((output: any) => ({
            slide: output.out?.slide,
            background: output.out?.background,
            overlays: output.out?.overlays
        }))

        const panel = window!.getByTestId("messages-panel")
        await panel.getByRole("button", { name: "+ New", exact: true }).click()
        await panel.getByLabel("Child name", { exact: true }).fill("Emma")
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        const first = (await live())[0]
        expect(first.values["token:Child name"]).toBe("Emma")
        expect(
            Object.values(await state()).map((output: any) => ({
                slide: output.out?.slide,
                background: output.out?.background,
                overlays: output.out?.overlays
            }))
        ).toEqual(original)

        // Both the preview and a real output window must render the notice through the normal output renderer.
        await expect(window!.locator(".message-design").first()).toContainText("Parents of Emma, please come to the back.")
        let outputWindow: Page | undefined
        await expect
            .poll(async () => {
                for (const page of app.windows()) {
                    if (page !== window && (await page.locator(".message-design").count())) {
                        outputWindow = page
                        return true
                    }
                }
                return false
            })
            .toBe(true)
        await expect(outputWindow!.locator(".message-design")).toContainText("Emma")
        await panel.getByLabel("Child name", { exact: true }).fill("<b>Noah</b> & {time}")
        expect((await live())[0].revision).toBe(first.revision)
        await expect(outputWindow!.locator(".message-design")).toContainText("Emma")
        await panel.getByRole("button", { name: "Update", exact: true }).click()
        await expect.poll(async () => (await live())[0]?.revision).not.toBe(first.revision)
        await expect(outputWindow!.locator(".message-design").last()).toContainText("Parents of <b>Noah</b> & {time}, please come to the back.")
        await expect(outputWindow!.locator(".message-design b")).toHaveCount(0)
        await slides.nth(1).click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide?.index === 1)).toBe(true)
        expect((await live())[0].values["token:Child name"]).toBe("<b>Noah</b> & {time}")
        await panel.getByRole("button", { name: "Hide", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(0)
        await expect(outputWindow!.locator(".message-design")).toHaveCount(0)
        expect(Object.values(await state()).some((output: any) => output.out?.slide?.index === 1)).toBe(true)

        // Enable scrolling in the native artwork editor, the path previously ignored by Show.
        await panel.getByRole("button", { name: "Edit design", exact: true }).click()
        const nativeArtwork = window!.getByTestId("message-design-tools")
        await nativeArtwork.getByLabel("Artwork layer", { exact: true }).selectOption("1")
        const nativeTools = window!.locator(".editTools")
        // A shallow ticker with wording wider than its viewport must retain
        // the chosen 60px font rather than shrinking the sentence to fit.
        await nativeTools.getByRole("button", { name: "Item", exact: true }).click()
        await nativeTools.getByRole("button", { name: "Position", exact: true }).click()
        const nativeHeight = nativeTools.locator(".numberfield").filter({ hasText: "Height (%)" }).locator("input.input")
        await nativeHeight.fill("8.15")
        await nativeHeight.press("Tab")
        const nativeWidth = nativeTools.locator(".numberfield").filter({ hasText: "Width (%)" }).locator("input.input")
        await nativeWidth.fill("40")
        await nativeWidth.press("Tab")
        await nativeTools.getByRole("button", { name: "Textbox", exact: true }).click()
        await nativeTools.getByRole("button", { name: "Scrolling", exact: true }).click()
        const nativeDuration = nativeTools.locator(".numberfield").filter({ hasText: "Seconds per pass" }).locator("input.input")
        await nativeDuration.fill("2")
        await nativeDuration.press("Tab")
        const nativeGap = nativeTools.locator(".numberfield").filter({ hasText: "Gap" }).locator("input.input")
        await nativeGap.fill("175")
        await nativeGap.press("Tab")
        await nativeArtwork.getByRole("button", { name: "Preview", exact: true }).click()
        const designPreview = window!.getByTestId("message-design-preview")
        await expect(designPreview).toContainText("Parents of <b>Noah</b> & {time}")
        const previewScroll = designPreview.locator(".scrollWrapper")
        await expect(previewScroll).toBeVisible()
        const previewBefore = await previewScroll.evaluate((node) => getComputedStyle(node).transform)
        await window!.waitForTimeout(300)
        expect(await previewScroll.evaluate((node) => getComputedStyle(node).transform)).not.toBe(previewBefore)
        await nativeArtwork.getByRole("button", { name: "Close preview", exact: true }).click()
        await window!.getByRole("button", { name: "Back to Messages", exact: true }).click()
        await panel.getByRole("button", { name: "Edit message", exact: true }).click()
        await panel.getByText("Appearance, timing and scrolling", { exact: true }).click()
        await expect(panel.getByLabel("Scroll direction", { exact: true })).toHaveValue("right_left")
        await expect(panel.getByLabel("Seconds per pass", { exact: true })).toHaveValue("2")
        await expect(panel.getByLabel("Gap (pixels)", { exact: true })).toHaveValue("175")
        await panel.getByRole("button", { name: "Cancel", exact: true }).click()
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live())[0]?.items[1].scrolling?.type).toBe("right_left")
        expect((await live())[0].items[1].scrolling.duration).toBe(2)
        const nativeOutputScroll = outputWindow!.locator(".message-design .scrollWrapper")
        await expect(nativeOutputScroll).toBeVisible()
        const repeatedCopies = nativeOutputScroll.locator(".scrollContent")
        expect(await repeatedCopies.count()).toBeGreaterThan(1)
        expect(await repeatedCopies.evaluateAll((nodes) => Math.round((nodes[1] as HTMLElement).offsetLeft - (nodes[0] as HTMLElement).offsetLeft - (nodes[0] as HTMLElement).offsetWidth))).toBe(175)
        const outputBefore = await nativeOutputScroll.evaluate((node) => getComputedStyle(node).transform)
        await window!.waitForTimeout(300)
        expect(await nativeOutputScroll.evaluate((node) => getComputedStyle(node).transform)).not.toBe(outputBefore)
        const nativeOutputText = outputWindow!.locator(".message-design .textContainer").first()
        await expect.poll(async () => parseFloat(await nativeOutputText.evaluate((node) => getComputedStyle(node).fontSize))).toBeGreaterThan(50)
        // Check the actual animation survives its first complete two-second pass.
        await expect.poll(async () => nativeOutputScroll.evaluate((node) => Number(node.getAnimations()[0]?.currentTime || 0))).toBeGreaterThan(2200)
        expect(await nativeOutputScroll.evaluate((node) => getComputedStyle(node).animationIterationCount)).toBe("infinite")
        const repeatedTransform = await nativeOutputScroll.evaluate((node) => getComputedStyle(node).transform)
        await window!.waitForTimeout(300)
        expect(await nativeOutputScroll.evaluate((node) => getComputedStyle(node).transform)).not.toBe(repeatedTransform)
        await panel.getByRole("button", { name: "Hide", exact: true }).click()
        await expect(outputWindow!.locator(".message-design")).toHaveCount(0)

        // Save a styled scrolling template, then verify undo and redo use native history.
        await panel.getByRole("button", { name: "Edit message", exact: true }).click()
        await panel.getByLabel("Name", { exact: true }).fill("Pickup ticker")
        const wording = panel.getByRole("textbox", {
            name: "Wording",
            exact: true
        })
        const copied = await wording.evaluate((node) => {
            const range = document.createRange()
            range.selectNodeContents(node)
            window.getSelection()!.removeAllRanges()
            window.getSelection()!.addRange(range)
            const clipboard = new DataTransfer()
            node.dispatchEvent(
                new ClipboardEvent("copy", {
                    bubbles: true,
                    cancelable: true,
                    clipboardData: clipboard
                })
            )
            return clipboard.getData("text/plain")
        })
        expect(copied).toBe("Parents of {Child name}, please come to the back.")
        await wording.fill("Parents of {Child name}, collect your child from .")
        await wording.press("End")
        await wording.press("ArrowLeft")
        await panel.getByLabel("New variable name", { exact: true }).fill("Room")
        await panel.getByRole("button", { name: "Add variable", exact: true }).click()
        await expect(wording.locator("[data-token='Room']")).toHaveCount(1)
        await expect(wording).toHaveText("Parents of {Child name}, collect your child from Room.")
        await panel.getByText("Appearance, timing and scrolling", { exact: true }).click()
        await panel.getByLabel("Banner background", { exact: true }).fill("#263a58")
        await panel.getByLabel("Scroll direction", { exact: true }).selectOption("right_left")
        await panel.getByLabel("Seconds per pass", { exact: true }).fill("2")
        await panel.getByLabel("Gap (pixels)", { exact: true }).fill("40")
        await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("3")
        await panel.getByLabel("Repeat fade in and out", { exact: true }).check()
        await panel.getByLabel("Visible hold (seconds)", { exact: true }).fill("1")
        await panel.getByRole("button", { name: "Save message", exact: true }).click()
        await expect(panel.getByLabel("Saved message", { exact: true })).toHaveValue(first.id)
        await expect(panel.getByLabel("Room", { exact: true })).toBeVisible()
        await window!.keyboard.press("Control+z")
        await expect(panel.getByLabel("Room", { exact: true })).toHaveCount(0)
        await window!.keyboard.press("Control+Shift+z")
        await expect(panel.getByLabel("Room", { exact: true })).toBeVisible()
        await panel.getByLabel("Child name", { exact: true }).fill("Emma")
        await panel.getByLabel("Room", { exact: true }).fill("Room 3")
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        await expect(outputWindow!.locator(".message-design .messageScroll")).toBeVisible()
        const wrapper = outputWindow!.locator(".message-design .scrollWrapper")
        expect(await wrapper.locator(".scrollContent").evaluateAll((nodes) => Math.round((nodes[1] as HTMLElement).offsetLeft - (nodes[0] as HTMLElement).offsetLeft - (nodes[0] as HTMLElement).offsetWidth))).toBe(40)
        const transform = await wrapper.evaluate((node) => getComputedStyle(node).transform)
        await window!.waitForTimeout(300)
        expect(await wrapper.evaluate((node) => getComputedStyle(node).transform)).not.toBe(transform)
        const animations = await outputWindow!.locator(".message-design").evaluate((node) => node.getAnimations().map((animation) => animation.effect?.getTiming().iterations))
        expect(animations).toContain(Infinity)
        await outputWindow!.locator(".message-design").evaluate((node) => {
            ;(window as any).messageCycleAnimation = node.getAnimations()[0]
        })
        await slides.first().click()
        await expect.poll(async () => Object.values(await state()).some((output: any) => output.out?.slide?.index === 0)).toBe(true)
        expect(await outputWindow!.locator(".message-design").evaluate((node) => node.getAnimations()[0] === (window as any).messageCycleAnimation)).toBe(true)
        await expect.poll(async () => (await live()).length).toBe(0)

        // Every direction, both repeat modes, and both start modes use the native measured text viewport.
        for (const [direction, repeat, offscreen] of [
            ["left_right", false, true],
            ["bottom_top", true, false],
            ["top_bottom", true, true],
            ["right_left", false, false]
        ] as const) {
            await expect(outputWindow!.locator(".message-design")).toHaveCount(0)
            await panel.getByRole("button", { name: "Edit message", exact: true }).click()
            await panel.getByText("Appearance, timing and scrolling", { exact: true }).click()
            await panel.getByLabel("Scroll direction", { exact: true }).selectOption(direction)
            await panel.getByLabel("Repeat scrolling", { exact: true }).setChecked(repeat)
            if (!repeat) await panel.getByLabel("Start outside the text box", { exact: true }).setChecked(offscreen)
            await panel.getByLabel("Repeat fade in and out", { exact: true }).uncheck()
            await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("0")
            await panel.getByRole("button", { name: "Save message", exact: true }).click()
            await panel.getByRole("button", { name: "Show", exact: true }).click()
            const scroller = outputWindow!.locator(".message-design .scrollWrapper")
            await expect(scroller).toBeVisible()
            const before = await scroller.evaluate((node) => getComputedStyle(node).transform)
            await window!.waitForTimeout(250)
            expect(await scroller.evaluate((node) => getComputedStyle(node).transform)).not.toBe(before)
            expect(await scroller.evaluate((node) => getComputedStyle(node).animationIterationCount)).toBe(repeat ? "infinite" : "1")
            expect(await outputWindow!.locator(".message-design .messageScroll").evaluate((node) => getComputedStyle(node).maskImage)).toContain("linear-gradient")
            await panel.getByRole("button", { name: "Hide", exact: true }).click()
        }

        // The continuous Show view keeps Messages and the native artwork editor available.
        await expect(window!.locator(".focusId")).toHaveCount(1)
        await panel.getByRole("button", { name: "Edit design", exact: true }).click()
        await expect(window!.locator(".editArea .editItem")).toHaveCount(2)
        const artwork = window!.getByTestId("message-design-tools")
        expect(
            await artwork.evaluate((node) => {
                const bounds = node.getBoundingClientRect()
                return [...node.querySelectorAll("select, button")].every((control) => control.getBoundingClientRect().right <= bounds.right)
            })
        ).toBe(true)
        await artwork.getByLabel("New shape", { exact: true }).selectOption("rounded")
        await artwork.getByRole("button", { name: "Add shape", exact: true }).click()
        await expect(window!.locator(".editArea .editItem")).toHaveCount(3)
        await expect(window!.locator(".editArea .placeholder")).toHaveCount(0)
        await artwork.locator(".color-display").click()
        await artwork.getByRole("button", { name: "Gradient", exact: true }).click()
        const gradientChoice = artwork.locator("[aria-label^='Select gradient']").first()
        const gradient = await gradientChoice.evaluate((node) => (node as HTMLElement).style.background)
        await gradientChoice.click()
        await window!.screenshot({
            path: "test-output/screenshots/message-design.png"
        })
        // Fill and artwork additions are separate undoable operations.
        await window!.keyboard.press("Control+z")
        await expect(artwork.locator(".color-display")).not.toHaveAttribute("style", /linear-gradient/)
        await window!.keyboard.press("Control+z")
        await expect(window!.locator(".editArea .editItem")).toHaveCount(2)
        await window!.keyboard.press("Control+Shift+z")
        await window!.keyboard.press("Control+Shift+z")
        await expect(window!.locator(".editArea .editItem")).toHaveCount(3)
        await window!.getByRole("button", { name: "Back to Messages", exact: true }).click()
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live())[0]?.items.length).toBe(3)
        expect((await live())[0].items[1].messageShape).toBe("rounded")
        expect((await live())[0].items[1].style).toContain("gradient(")
        await expect(outputWindow!.locator(".message-design [style*='gradient']").first()).toBeVisible()
        expect(await outputWindow!.locator(".message-design [style*='background:']").evaluateAll((nodes, expectedGradient) => nodes.some((node) => getComputedStyle(node).backgroundImage === expectedGradient), gradient)).toBe(true)
        await panel.getByRole("button", { name: "Hide", exact: true }).click()
        await expect(window!.locator("#focus_mode_button")).toHaveCount(0)
        await expect(panel.getByLabel("Room", { exact: true })).toHaveValue("Room 3")
        await window!.screenshot({ path: "test-output/screenshots/messages.png" })
        await panel.getByRole("button", { name: "Edit message", exact: true }).click()
        await panel.getByText("Appearance, timing and scrolling", { exact: true }).click()
        await panel.getByLabel("Hide after (seconds; 0 = manual)", { exact: true }).fill("0")
        await panel.getByRole("button", { name: "Save message", exact: true }).click()
        await panel.getByRole("button", { name: "Show", exact: true }).click()
        await expect.poll(async () => (await live()).length).toBe(1)
        await window!.keyboard.press("Control+s")
        await window!.waitForTimeout(2000)
        await close()
        await launch()
        const restored = window!.getByTestId("messages-panel")
        await restored.getByRole("button", { name: /Messages/ }).click()
        await expect(restored.getByLabel("Saved message", { exact: true }).locator("option:checked")).toHaveText("Pickup ticker")
        await expect(restored.getByLabel("Room", { exact: true })).toBeVisible()
        expect(await live()).toHaveLength(0)
        await expect(restored.getByRole("button", { name: "Hide", exact: true })).toHaveCount(0)
        await restored.getByRole("button", { name: "Edit design", exact: true }).click()
        await expect(window!.locator(".editArea .editItem")).toHaveCount(3)
        await window!.getByTestId("message-design-tools").getByLabel("Artwork layer", { exact: true }).selectOption("1")
        await expect(window!.getByTestId("message-design-tools").locator(".color-display")).toHaveAttribute("style", /gradient/)
        await window!.getByRole("button", { name: "Back to Messages", exact: true }).click()
    } catch (error) {
        if (window)
            await window.screenshot({
                path: "test-output/screenshots/messages-failed.png"
            })
        throw error
    } finally {
        if (app!) await close()
        rmSync(directory, { recursive: true, force: true })
    }
})
