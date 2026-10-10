import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import { execFileSync } from "node:child_process"

export const ROOT = fileURLToPath(new URL("../../", import.meta.url))
export const GENERATED = "docs/ai/generated"
export const CACHE = "docs/ai/.cache"
export const AREAS = ["src/electron", "src/frontend", "src/server", "src/types"]
export const slash = (value) => value.replaceAll(path.sep, "/")
export const relative = (value) => slash(path.relative(ROOT, value))
export const read = (file) => fs.readFileSync(path.resolve(ROOT, file), "utf8")
export const hash = (value) => crypto.createHash("sha256").update(value).digest("hex")
export const slug = (value) => value.replace(/[^a-zA-Z0-9_.-]/g, "_")
export function walk(directory, predicate = () => true) {
    const absolute = path.resolve(ROOT, directory)
    if (!fs.existsSync(absolute)) return []
    return fs.readdirSync(absolute, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en")).flatMap((entry) => {
        if (entry.name.startsWith(".") || entry.name === "node_modules") return []
        const file = slash(path.join(directory, entry.name))
        return entry.isDirectory() ? walk(file, predicate) : entry.isFile() && predicate(file) ? [file] : []
    })
}
export function git(args, options = {}) {
    return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...options }).trimEnd()
}
export function write(file, content) {
    const absolute = path.resolve(ROOT, file)
    fs.mkdirSync(path.dirname(absolute), { recursive: true })
    if (!fs.existsSync(absolute) || fs.readFileSync(absolute, "utf8") !== content) fs.writeFileSync(absolute, content)
}
// One record per line: even large tables remain individually readable and diffable.
export function json(value) {
    if (Array.isArray(value)) return "[\n" + value.map((entry) => "  " + JSON.stringify(entry)).join(",\n") + "\n]\n"
    return JSON.stringify(value, null, 2) + "\n"
}
export const compact = (value, length = 180) => String(value ?? "").replace(/\s+/g, " ").slice(0, length)
export const escape = (value) => compact(value).trimEnd().replaceAll("|", "\\|").replaceAll("`", "'").replaceAll("[", "&#91;").replaceAll("]", "&#93;")
export function sourceLink(ref, document) {
    const target = slash(path.relative(path.dirname(document), ref.file))
    return `[${ref.file}:${ref.line}](${target}#L${ref.line})`
}
export function unique(records) {
    return [...new Map(records.map((record) => [JSON.stringify(record), record])).values()]
}
export function chunks(values, size = 80) {
    const result = []
    for (let index = 0; index < values.length; index += size) result.push(values.slice(index, index + size))
    return result
}
export function readJson(file, fallback = null) {
    return fs.existsSync(path.resolve(ROOT, file)) ? JSON.parse(read(file)) : fallback
}
export function loadModel() {
    const manifest = readJson(`${GENERATED}/manifest.json`)
    if (!manifest) throw new Error("Maps are absent. Run npm run ai:map first.")
    const tables = {}
    for (const [name, entry] of Object.entries(manifest.tables)) {
        const files=Array.isArray(entry)?entry:entry.$parts.flatMap(file=>readJson(`${GENERATED}/${file}`))
        tables[name] = files.flatMap((file) => readJson(`${GENERATED}/${file}`)).map(record => {
            for (const [field, parts] of Object.entries(record.$parts || {})) record[field] = parts.flatMap(part => readJson(`${GENERATED}/${part}`))
            delete record.$parts
            return record
        })
    }
    return { manifest, ...tables }
}
