import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { get } from "svelte/store"
import { activeProfile, outLocked, outputs, overlays, profiles } from "../../stores"
import { createMessage, getMessageTokens, messageWording, normalizeMessage, replaceMessageTokens, setMessageWording, snapshotMessage } from "./messages"

vi.mock("./output", () => ({
    getActiveOutputs: (outs: any) => Object.keys(outs).filter((id) => outs[id].enabled && outs[id].active && !outs[id].stageOutput),
    resolveOutputIds: (ids: string[], outs: any) => ids.map((id) => (outs[id] ? id : Object.keys(outs).find((key) => outs[key].name === id))).filter(Boolean),
    setOutput: vi.fn((type: string, data: any, _toggle: boolean, id: string) => outputs.update((outs) => ({ ...outs, [id]: { ...outs[id], out: { ...outs[id].out, [type]: data } } })))
}))
import { clearMessages, hideMessage, showMessage, startMessageTimers } from "./messageOutput"

describe("saved Message templates and immutable output snapshots", () => {
    it("finds repeated fields across styled runs and keeps their identities", () => {
        const definition = createMessage()
        const id = definition.message!.tokens[0].id
        const updated = setMessageWording(definition, "{ Child name } and {Child name}: {Room # / code}")
        expect(getMessageTokens(updated)).toEqual([
            { id, label: "Child name" },
            { id: "token:Room # / code", label: "Room # / code" }
        ])
        expect(replaceMessageTokens(messageWording(updated), updated.message!.tokens, { [id]: "Emma", "token:Room # / code": "A12" })).toBe("Emma and Emma: A12")
    })

    it("resolves tokens split by native rich-text formatting and renders values as literal text", () => {
        const definition = createMessage()
        const item = definition.items[1]
        item.lines = [
            {
                align: "",
                text: [
                    { value: "Parents of {Child", style: "font-weight:bold;" },
                    { value: " name}, please come back.", style: "font-style:italic;" }
                ]
            }
        ]
        const live = snapshotMessage("notice", definition, { "token:Child name": '<img src=x onerror="alert(1)"> & {time}\nEmma' })
        const text = live.items[1].lines![0].text
        expect(text.map((run) => run.value).join("")).toBe("Parents of &lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; {time}\nEmma, please come back.")
        expect(text[1].style).toBe("font-weight:bold;")
        expect(text[text.length - 1].style).toBe("font-style:italic;")
    })

    it("supports multiline wording and missing fields without editing the source artwork", () => {
        const original = createMessage()
        const updated = setMessageWording(original, "Parents of {Child name}\nPlease go to {Location}.")
        expect(original.items[1].lines).toHaveLength(1)
        expect(updated.items[0]).toEqual(original.items[0])
        const live = snapshotMessage("notice", updated, {})
        expect(messageWording({ ...updated, items: live.items })).toBe("Parents of \nPlease go to .")
    })

    it("retains rich-text styles from the native designer on a configuration-only save", () => {
        const original = createMessage()
        original.items[1].lines = [
            {
                align: "text-align:left;",
                text: [
                    { value: "Parents of ", style: "font-weight:bold;" },
                    { value: "{Child name}", style: "color:red;" }
                ]
            }
        ]
        expect(setMessageWording(original, messageWording(original)).items).toEqual(original.items)
    })

    it("freezes artwork, values and display options independently for each live notice", () => {
        const definition = createMessage()
        definition.message!.duration = 2
        definition.message!.cycle = { hold: 5, pause: 2 }
        const values = { "token:Child name": "Emma" }
        const live = snapshotMessage("one", definition, values, 1000)
        values["token:Child name"] = "Noah"
        definition.items[0].style = "background-color:red;"
        definition.message!.cycle.hold = 99
        expect(live.expiresAt).toBe(3000)
        expect(live.values["token:Child name"]).toBe("Emma")
        expect(live.items[0].style).toContain("#172338")
        expect(live.cycle!.hold).toBe(5)
        expect(snapshotMessage("two", createMessage(), values).items[1].lines![0].text[1].value).toBe("Noah")
    })

    it("normalizes invalid/empty timing fields and strips per-item lifecycle actions", () => {
        const definition = createMessage()
        definition.message!.fadeIn = -1
        definition.message!.fadeOut = Infinity
        definition.message!.duration = -100
        definition.message!.cycle = { hold: -2, pause: NaN }
        definition.items[1].actions = { hideTime: 100 }
        const normalized = normalizeMessage(definition.message!)
        expect(normalized).toMatchObject({ fadeIn: 0, fadeOut: 500, duration: 0, cycle: { hold: 0.1, pause: 2 } })
        expect(snapshotMessage("notice", definition, {}).items[1].actions).toBeUndefined()
        expect(snapshotMessage("notice", definition, {}).expiresAt).toBeUndefined()
    })
})

describe("Message output routing and deadlines", () => {
    let stop: () => void
    beforeEach(() => {
        vi.useFakeTimers()
        outLocked.set(false)
        activeProfile.set(null)
        overlays.set({ notice: createMessage(), second: createMessage() })
        outputs.set({
            audience: { enabled: true, active: true, name: "Audience", out: { slide: { id: "lyrics", layout: "default", index: 0 }, background: { path: "/video.mp4" }, overlays: ["logo"] } },
            lobby: { enabled: true, active: false, name: "Lobby", out: {} },
            stage: { enabled: true, active: true, stageOutput: "stage-layout", name: "Stage", out: {} },
            disabled: { enabled: false, active: true, name: "Disabled", out: {} }
        } as any)
        stop = startMessageTimers()
    })
    afterEach(() => {
        stop()
        vi.useRealTimers()
    })

    it("adds and hides only the message on selected normal outputs", () => {
        const before = get(outputs).audience.out
        expect(showMessage("notice", { "token:Child name": "Emma" })).toEqual(["audience"])
        expect(get(outputs).audience.out).toMatchObject(before!)
        expect(get(outputs).lobby.out?.messages).toBeUndefined()
        hideMessage("notice")
        expect(get(outputs).audience.out).toEqual({ ...before, messages: {} })
    })

    it("resolves configured output names and excludes disabled or stage destinations", () => {
        overlays.update((defs) => {
            defs.notice.message!.outputIds = ["Lobby", "stage", "disabled", "removed"]
            return defs
        })
        expect(showMessage("notice", {})).toEqual(["lobby"])
        expect(get(outputs).audience.out?.messages).toBeUndefined()
    })

    it("updates the original live destinations even if output selection/configuration changed", () => {
        showMessage("notice", { "token:Child name": "Emma" })
        outputs.update((outs) => {
            outs.audience.active = false
            outs.lobby.active = true
            return outs
        })
        overlays.update((defs) => {
            defs.notice.message!.outputIds = ["lobby"]
            return defs
        })
        expect(showMessage("notice", { "token:Child name": "Noah" }, true)).toEqual(["audience"])
        expect(get(outputs).audience.out?.messages?.notice.values["token:Child name"]).toBe("Noah")
        expect(get(outputs).lobby.out?.messages).toBeUndefined()
    })

    it("honors output lock for Show, Update, Hide and manual clear", () => {
        showMessage("notice", {})
        const before = JSON.stringify(get(outputs))
        outLocked.set(true)
        expect(showMessage("notice", {}, true)).toEqual([])
        hideMessage("notice")
        clearMessages(["audience"])
        expect(JSON.stringify(get(outputs))).toBe(before)
    })

    it("permits operation for read-only profiles but excludes hidden overlay categories", () => {
        profiles.set({ operator: { access: { overlays: { global: "read" } } } } as any)
        activeProfile.set("operator")
        expect(showMessage("notice", {})).toEqual(["audience"])
        profiles.set({ operator: { access: { overlays: { "": "none" } } } } as any)
        expect(showMessage("notice", {}, true)).toEqual([])
    })

    it("replaces an old deadline on update without hiding a newer revision or another notice", async () => {
        overlays.update((defs) => {
            defs.notice.message!.duration = 2
            return defs
        })
        showMessage("notice", { "token:Child name": "Emma" })
        showMessage("second", {})
        await vi.advanceTimersByTimeAsync(1500)
        showMessage("notice", { "token:Child name": "Noah" }, true)
        await vi.advanceTimersByTimeAsync(500)
        expect(get(outputs).audience.out?.messages?.notice.values["token:Child name"]).toBe("Noah")
        await vi.advanceTimersByTimeAsync(1500)
        expect(get(outputs).audience.out?.messages?.notice).toBeUndefined()
        expect(get(outputs).audience.out?.messages?.second).toBeDefined()
        expect(get(outputs).audience.out?.slide?.id).toBe("lyrics")
    })

    it("cancels deadlines when hidden, cleared or an output is removed", () => {
        overlays.update((defs) => {
            defs.notice.message!.duration = 2
            return defs
        })
        showMessage("notice", {})
        expect(vi.getTimerCount()).toBe(1)
        hideMessage("notice")
        expect(vi.getTimerCount()).toBe(0)
        showMessage("notice", {})
        clearMessages(["audience"])
        expect(vi.getTimerCount()).toBe(0)
        showMessage("notice", {})
        outputs.update((outs) => {
            delete outs.audience
            return outs
        })
        expect(vi.getTimerCount()).toBe(0)
    })
})
