import type { Item } from "../../../types/Show"
import { getStyles } from "./style"

export const messageShapes = { rectangle: "Rectangle", rounded: "Rounded rectangle", ellipse: "Ellipse", triangle: "Triangle" } as const
export type MessageShape = keyof typeof messageShapes

export function shapeStyle(style: string, shape: MessageShape) {
    const values: Record<string, string> = { ...getStyles(style), "border-radius": shape === "ellipse" ? "50%" : shape === "rounded" ? "32px" : "0px" }
    delete values["clip-path"]
    if (shape === "triangle") values["clip-path"] = "polygon(50% 0%, 100% 100%, 0% 100%)"
    return Object.entries(values)
        .map(([key, value]) => `${key}:${value};`)
        .join("")
}

export function createMessageShape(shape: MessageShape): Item {
    const banner = shape === "rectangle" || shape === "rounded"
    return {
        type: "text",
        messageShape: shape,
        lines: [],
        style: shapeStyle(banner ? "left:0px;top:850px;width:1920px;height:230px;background-color:#245779;" : "left:60px;top:850px;width:300px;height:230px;background-color:#245779;", shape)
    }
}

export function messageFillStyle(style: string, fill: string) {
    const values = getStyles(style)
    delete values.background
    delete values["background-color"]
    if (fill) values[fill.includes("gradient(") ? "background" : "background-color"] = fill
    return Object.entries(values)
        .map(([key, value]) => `${key}:${value};`)
        .join("")
}
