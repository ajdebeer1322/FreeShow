// Geometry for the drag-to-crop editor (kept free of the DOM/stores so it can be unit tested).
// A crop box is in natural image pixels. Saved crops are the pixels removed from each side.

export type Box = { x0: number; y0: number; x1: number; y1: number }
export type Bounds = { width: number; height: number }
export type Margins = { top: number; right: number; bottom: number; left: number }
export type Handle = "move" | "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw"

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function minSize(b: Bounds) {
    return Math.max(8, Math.min(b.width, b.height) * 0.05)
}

export function fullBox(b: Bounds): Box {
    return { x0: 0, y0: 0, x1: b.width, y1: b.height }
}

export function marginsToBox(crop: Partial<Margins> | undefined | null, b: Bounds): Box {
    const box = {
        x0: clamp(Number(crop?.left) || 0, 0, b.width),
        y0: clamp(Number(crop?.top) || 0, 0, b.height),
        x1: b.width - clamp(Number(crop?.right) || 0, 0, b.width),
        y1: b.height - clamp(Number(crop?.bottom) || 0, 0, b.height)
    }

    // an unusable crop shows the whole image
    if (box.x1 - box.x0 < 1 || box.y1 - box.y0 < 1) return fullBox(b)
    return box
}

export function boxToMargins(box: Box, b: Bounds): Margins {
    return {
        top: Math.max(0, Math.round(box.y0)),
        right: Math.max(0, Math.round(b.width - box.x1)),
        bottom: Math.max(0, Math.round(b.height - box.y1)),
        left: Math.max(0, Math.round(box.x0))
    }
}

export function moveBox(box: Box, dx: number, dy: number, b: Bounds): Box {
    const width = box.x1 - box.x0
    const height = box.y1 - box.y0
    const x0 = clamp(box.x0 + dx, 0, b.width - width)
    const y0 = clamp(box.y0 + dy, 0, b.height - height)
    return { x0, y0, x1: x0 + width, y1: y0 + height }
}

/** Resize from a handle while the pointer is at "point" (natural pixels). With a ratio, only the corners resize and the box keeps its shape. */
export function resizeBox(start: Box, handle: Handle, point: { x: number; y: number }, b: Bounds, ratio: number | null): Box {
    if (handle === "move") return start

    const min = minSize(b)
    const west = handle.includes("w")
    const east = handle.includes("e")
    const north = handle.includes("n")
    const south = handle.includes("s")

    if (!ratio) {
        const box = { ...start }
        if (west) box.x0 = clamp(point.x, 0, start.x1 - min)
        if (east) box.x1 = clamp(point.x, start.x0 + min, b.width)
        if (north) box.y0 = clamp(point.y, 0, start.y1 - min)
        if (south) box.y1 = clamp(point.y, start.y0 + min, b.height)
        return box
    }

    // locked to a ratio: edge handles are not used
    const isCorner = (west || east) && (north || south)
    if (!isCorner) return start

    const anchorX = west ? start.x1 : start.x0
    const anchorY = north ? start.y1 : start.y0
    const dirX = west ? -1 : 1
    const dirY = north ? -1 : 1

    const maxWidth = Math.min(dirX > 0 ? b.width - anchorX : anchorX, (dirY > 0 ? b.height - anchorY : anchorY) * ratio)
    const minWidth = Math.min(maxWidth, Math.max(min, min * ratio))

    const pointerWidth = Math.max(0, (point.x - anchorX) * dirX)
    const pointerHeight = Math.max(0, (point.y - anchorY) * dirY)
    const width = clamp(Math.max(pointerWidth, pointerHeight * ratio), minWidth, maxWidth)
    const height = width / ratio

    const cornerX = anchorX + dirX * width
    const cornerY = anchorY + dirY * height
    return { x0: Math.min(anchorX, cornerX), y0: Math.min(anchorY, cornerY), x1: Math.max(anchorX, cornerX), y1: Math.max(anchorY, cornerY) }
}

/** The biggest box with this ratio that fits inside the given box, centered in it */
export function fitBoxToRatio(box: Box, ratio: number, b: Bounds): Box {
    let width = box.x1 - box.x0
    let height = box.y1 - box.y0
    if (width / height > ratio) width = height * ratio
    else height = width / ratio

    const centerX = (box.x0 + box.x1) / 2
    const centerY = (box.y0 + box.y1) / 2
    return moveBox({ x0: centerX - width / 2, y0: centerY - height / 2, x1: centerX + width / 2, y1: centerY + height / 2 }, 0, 0, b)
}

/** How big content is shown inside a frame for a media fit option */
export function getFittedSize(frame: Bounds, content: Bounds, fit: string): Bounds {
    if (fit === "fill") return { width: frame.width, height: frame.height }
    if (!content.width || !content.height) return { width: frame.width, height: frame.height }

    const scaleX = frame.width / content.width
    const scaleY = frame.height / content.height
    const scale = fit === "cover" ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY)
    return { width: content.width * scale, height: content.height * scale }
}
