import fs from "node:fs"
import path from "node:path"
import ts from "typescript"
import { parse as parseSvelte } from "svelte/compiler"
import { ROOT, AREAS, walk, hash, relative, read, compact, unique, git } from "./lib.mjs"

const CODE = /\.(ts|js|mjs|cjs|svelte)$/
const STORE_FACTORIES = new Set(["writable", "readable", "derived", "readonly"])
const HANDLER_NAME = /(?:receive|receiver|responses|handlers)/i
const TIMER_NAMES = new Map([["setTimeout", 1], ["setInterval", 1], ["wait", 0], ["delay", 0], ["sleep", 0], ["hasNewerUpdate", 1]])
const WORKAROUND = /\b(?:WIP|hacks?|bugs?|workarounds?|TODO|FIXME)\b|!!!/gi
const CHANNELS = ["STARTUP", "MAIN", "OUTPUT", "EXPORT", "REMOTE", "STAGE", "CONTROLLER", "OUTPUT_STREAM", "CLOUD", "NDI", "OMT", "BLACKMAGIC", "AUDIO"]

function visit(node, callback) {
    callback(node)
    ts.forEachChild(node, (child) => visit(child, callback))
}
function visitTemplate(node, callback) {
    if (!node || typeof node !== "object") return
    if (Array.isArray(node)) { for (const child of node) visitTemplate(child, callback); return }
    if (node.type) callback(node)
    for (const [key, child] of Object.entries(node)) if (!["parent", "loc", "metadata", "comments"].includes(key)) visitTemplate(child, callback)
}
function unwrap(node) {
    while (node && (ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isTypeAssertionExpression(node) || ts.isNonNullExpression(node))) node = node.expression
    return node
}
function name(node) {
    return node && (ts.isIdentifier(node) || ts.isStringLiteralLike(node) || ts.isNumericLiteral(node)) ? node.text : node && ts.isComputedPropertyName(node) ? name(node.expression) : node && ts.isPropertyAccessExpression(node) ? node.name.text : null
}
function ancestor(node, predicate) {
    for (let current = node.parent; current; current = current.parent) if (predicate(current)) return current
    return null
}
function functionName(node) {
    const fn = ancestor(node, (item) => ts.isFunctionLike(item))
    if (!fn) return null
    if (fn.name) return name(fn.name)
    if (ts.isVariableDeclaration(fn.parent)) return name(fn.parent.name)
    if (ts.isPropertyAssignment(fn.parent)) return name(fn.parent.name)
    const outer = ancestor(fn, (item) => ts.isFunctionDeclaration(item) || ts.isMethodDeclaration(item))
    return outer?.name ? name(outer.name) : null
}

export function scan(options = {}) {
    const root = options.root || ROOT
    const files = options.files || AREAS.flatMap((area) => walk(area, (file) => CODE.test(file)))
    const contexts = new Map()
    const diagnostics = []
    for (const file of files.sort()) {
        const source = options.sources?.[file] ?? fs.readFileSync(path.resolve(root, file), "utf8")
        let script = source
        let template = null
        if (file.endsWith(".svelte")) {
            script = source.replace(/[^\r\n]/g, " ")
            try {
                template = parseSvelte(source, { modern: true })
                for (const section of [template.instance, template.module]) if (section) {
                    const { start, end } = section.content
                    script = script.slice(0, start) + source.slice(start, end) + script.slice(end)
                }
            } catch (error) {
                diagnostics.push({ file, line: error.start?.line || 1, kind: "svelte-parse", message: error.message, confidence: "guess" })
                for (const match of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
                    const start = match.index + match[0].indexOf(">") + 1
                    script = script.slice(0, start) + match[1] + script.slice(start + match[1].length)
                }
            }
        }
        const virtual = path.resolve(root, file + (file.endsWith(".svelte") ? ".ts" : ""))
        const sf = ts.createSourceFile(virtual, script, ts.ScriptTarget.Latest, true, /\.[cm]?js$/.test(file) ? ts.ScriptKind.JS : ts.ScriptKind.TS)
        for (const error of sf.parseDiagnostics) diagnostics.push({ file, line: sf.getLineAndCharacterOfPosition(error.start || 0).line + 1, kind: "typescript-parse", message: ts.flattenDiagnosticMessageText(error.messageText, " "), confidence: "guess" })
        contexts.set(file, { file, source, script, sf, virtual, template, lines: source.split(/\r?\n/), imports: [], symbols: [], comments: [], stores: [], ipc: [], timers: [], workarounds: [], components: [], props: [], settings: [], bindings: new Map() })
    }
    const virtuals = new Map([...contexts.values()].map((context) => [context.virtual, context]))
    function resolve(file, specifier) {
        if (!specifier.startsWith(".") && !specifier.startsWith("/")) return null
        const base = path.resolve(root, path.dirname(file), specifier)
        const candidates = [base, base.replace(/\.js$/, ".ts"), ...[".ts", ".js", ".svelte", ".json", "/index.ts", "/index.js"].map((ext) => base + ext)]
        const found = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile() || contexts.has(path.relative(root, candidate)))
        return found ? path.relative(root, found).replaceAll(path.sep, "/") : null
    }
    const compilerOptions = { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler, allowJs: true, noEmit: true, skipLibCheck: true, noLib: true }
    const host = ts.createCompilerHost(compilerOptions)
    const getSourceFile = host.getSourceFile.bind(host)
    host.getSourceFile = (file, ...args) => virtuals.get(file)?.sf || getSourceFile(file, ...args)
    const exists = host.fileExists.bind(host)
    host.fileExists = (file) => virtuals.has(file) || exists(file)
    const hostRead = host.readFile.bind(host)
    host.readFile = (file) => virtuals.get(file)?.script ?? hostRead(file)
    host.resolveModuleNames = (names, containing) => names.map((specifier) => {
        const context = virtuals.get(containing)
        const target = context && resolve(context.file, specifier)
        if (target?.endsWith(".svelte")) return { resolvedFileName: path.resolve(root, target + ".ts"), extension: ts.Extension.Ts }
        return ts.resolveModuleName(specifier, containing, compilerOptions, host).resolvedModule
    })
    const program = ts.createProgram([...virtuals.keys()], compilerOptions, host)
    const checker = program.getTypeChecker()
    function symbolAt(node) {
        if (!node) return null
        let symbol = checker.getSymbolAtLocation(node)
        const seen = new Set()
        while (symbol?.flags & ts.SymbolFlags.Alias && !seen.has(symbol)) {
            seen.add(symbol)
            try { symbol = checker.getAliasedSymbol(symbol) } catch { break }
        }
        return symbol
    }
    const stores = []
    const storeSymbols = new Map()
    const channels = new Map(CHANNELS.map((channel) => [channel, { name: channel, definitions: [], messages: [], endpoints: [] }]))
    const messages = new Map()
    const settings = new Map()
    const ref = (context, node, extra = {}) => ({ file: context.file, line: context.sf.getLineAndCharacterOfPosition(Math.max(0, typeof node === "number" ? node : node.getStart(context.sf))).line + 1, ...extra })
    function nativeName(context, identifier) {
        return context.bindings.get(identifier)?.imported || identifier
    }
    // Import bindings and declaration sites are indexed before resolving any uses.
    for (const context of contexts.values()) {
        visit(context.sf, (node) => {
            if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node) && node.moduleSpecifier) {
                const specifier = node.moduleSpecifier.text
                const imported = { ...ref(context, node), specifier, target: resolve(context.file, specifier), kind: ts.isExportDeclaration(node) ? "reexport" : "static", typeOnly: !!(node.importClause?.isTypeOnly || node.isTypeOnly), bindings: [] }
                if (node.importClause?.name) imported.bindings.push({ local: node.importClause.name.text, imported: "default", typeOnly: imported.typeOnly })
                const bindings = node.importClause?.namedBindings
                if (bindings && ts.isNamespaceImport(bindings)) imported.bindings.push({ local: bindings.name.text, imported: "*", typeOnly: imported.typeOnly })
                else if (bindings) for (const binding of bindings.elements) imported.bindings.push({ local: binding.name.text, imported: binding.propertyName?.text || binding.name.text, typeOnly: imported.typeOnly || binding.isTypeOnly })
                if (imported.bindings.length && imported.bindings.every((binding) => binding.typeOnly)) imported.typeOnly = true
                context.imports.push(imported)
                for (const binding of imported.bindings) context.bindings.set(binding.local, { ...binding, target: imported.target, specifier })
            }
            if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || ts.isIdentifier(node.expression) && node.expression.text === "require")) {
                const literal = node.arguments[0]
                context.imports.push({ ...ref(context, node), specifier: ts.isStringLiteralLike(literal) ? literal.text : compact(literal?.getText(context.sf)), target: ts.isStringLiteralLike(literal) ? resolve(context.file, literal.text) : null, kind: node.expression.kind === ts.SyntaxKind.ImportKeyword ? "dynamic" : "require", typeOnly: false, bindings: [], dynamic: !ts.isStringLiteralLike(literal) })
            }
            if (node.name && (ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node) || ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node) || ts.isVariableDeclaration(node))) {
                const symbolName = name(node.name)
                if (symbolName) context.symbols.push({ ...ref(context, node), name: symbolName, kind: ts.SyntaxKind[node.kind], endLine: context.sf.getLineAndCharacterOfPosition(node.end).line + 1 })
            }
        })
    }
    for (const context of contexts.values()) {
        visit(context.sf, (node) => {
            if (!ts.isVariableDeclaration(node) || !ts.isIdentifier(node.name)) return
            const initializer = unwrap(node.initializer)
            if (!initializer || !ts.isCallExpression(initializer)) return
            const factory = ts.isIdentifier(initializer.expression) ? nativeName(context, initializer.expression.text) : name(initializer.expression)
            if (!STORE_FACTORIES.has(factory)) return
            const binding = ts.isIdentifier(initializer.expression) && context.bindings.get(initializer.expression.text)
            if (binding && binding.specifier !== "svelte/store") return
            const store = { id: `${context.file}#${node.name.text}`, name: node.name.text, ...ref(context, node), type: node.type?.getText(context.sf) || "inferred", factory, initial: compact(initializer.arguments.map((arg) => arg.getText(context.sf)).join(", "), 500), exported: !!ancestor(node, (parent) => ts.isVariableStatement(parent) && parent.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)), reads: [], writes: [], references: [], transports: [], persistence: [], confidence: "code" }
            stores.push(store)
            storeSymbols.set(symbolAt(node.name), store)
        })
    }
    function storeOf(context, expression) {
        expression = unwrap(expression)
        if (!expression) return null
        const symbol = symbolAt(ts.isPropertyAccessExpression(expression) ? expression.name : expression)
        if (storeSymbols.has(symbol)) return storeSymbols.get(symbol)
        if (ts.isIdentifier(expression) && expression.text.startsWith("$")) return dollarStore(context, expression.text.slice(1))
        return null
    }
    function dollarStore(context, identifier) {
        const binding = context.bindings.get(identifier)
        if (binding?.target) return stores.find((store) => store.file === binding.target && store.name === binding.imported) || null
        return stores.find((store) => store.file === context.file && store.name === identifier) || null
    }
    function staticValue(context, expression, seen = new Set()) {
        expression = unwrap(expression)
        if (!expression || seen.has(expression)) return undefined
        seen = new Set(seen).add(expression)
        if (ts.isStringLiteralLike(expression)) return expression.text
        if (ts.isNumericLiteral(expression)) return Number(expression.text)
        if (expression.kind === ts.SyntaxKind.TrueKeyword) return true
        if (expression.kind === ts.SyntaxKind.FalseKeyword) return false
        if (ts.isArrayLiteralExpression(expression)) return expression.elements.map((item) => staticValue(context, item, seen))
        if (ts.isPrefixUnaryExpression(expression)) {
            const value = staticValue(context, expression.operand, seen)
            if (typeof value === "number") return expression.operator === ts.SyntaxKind.MinusToken ? -value : value
        }
        if (ts.isBinaryExpression(expression)) {
            const left = staticValue(context, expression.left, seen), right = staticValue(context, expression.right, seen)
            if (left !== undefined && right !== undefined) {
                const operations = { [ts.SyntaxKind.PlusToken]: () => left + right, [ts.SyntaxKind.MinusToken]: () => left - right, [ts.SyntaxKind.AsteriskToken]: () => left * right, [ts.SyntaxKind.SlashToken]: () => left / right }
                if (operations[expression.operatorToken.kind]) return operations[expression.operatorToken.kind]()
            }
        }
        const symbol = symbolAt(ts.isPropertyAccessExpression(expression) ? expression.name : expression)
        const declaration = symbol?.valueDeclaration || symbol?.declarations?.[0]
        if (declaration && (ts.isEnumMember(declaration) || ts.isVariableDeclaration(declaration) && declaration.parent.flags & ts.NodeFlags.Const)) {
            const declaringContext = virtuals.get(declaration.getSourceFile().fileName) || context
            return staticValue(declaringContext, declaration.initializer, seen)
        }
        return undefined
    }
    function symbolDefault(context, expression, argument) {
        const symbol = symbolAt(ts.isPropertyAccessExpression(expression) ? expression.name : expression)
        let declaration = symbol?.valueDeclaration || symbol?.declarations?.[0]
        if (declaration && ts.isVariableDeclaration(declaration)) declaration = unwrap(declaration.initializer)
        const parameter = declaration?.parameters?.[argument]
        const declaringContext = parameter && virtuals.get(parameter.getSourceFile().fileName)
        return parameter?.initializer && declaringContext ? { expression: parameter.initializer.getText(declaringContext.sf), value: staticValue(declaringContext, parameter.initializer), ...ref(declaringContext, parameter) } : null
    }
    function recordStore(context, store, node, kind) {
        if (!store) return
        const record = { ...ref(context, node), store: store.id, kind, symbol: functionName(node), expression: compact(node.getText(context.sf)) }
        if (["set", "update", "assignment", "get-mutation", "bind", "keyed-set", "keyed-update"].includes(kind)) store.writes.push(record)
        else if (["get", "subscribe", "dollar", "keyed-get"].includes(kind)) store.reads.push(record)
        else store.references.push(record)
        context.stores.push(record)
    }
    function storesWithin(context, node, follow = false, seen = new Set()) {
        if (!node || seen.has(node)) return []
        seen.add(node)
        const result = []
        visit(node, (child) => {
            if (ts.isIdentifier(child) || ts.isPropertyAccessExpression(child)) {
                const store = storeOf(context, child)
                if (store) result.push(store)
                if (follow && ts.isIdentifier(child)) {
                    const declaration = symbolAt(child)?.valueDeclaration
                    if (declaration && ts.isVariableDeclaration(declaration) && declaration.initializer) result.push(...storesWithin(virtuals.get(declaration.getSourceFile().fileName) || context, declaration.initializer, true, seen))
                }
            }
        })
        return [...new Map(result.map((store) => [store.id, store])).values()]
    }
    // Disk evidence follows actual save objects rather than the spelling of a store.
    const saveContext = contexts.get("src/frontend/utils/save.ts")
    if (saveContext) visit(saveContext.sf, (node) => {
        if (!ts.isObjectLiteralExpression(node)) return
        const variable = ts.isVariableDeclaration(node.parent) ? name(node.parent.name) : null
        const enclosing = functionName(node)
        const synced = ts.isReturnStatement(node.parent) && enclosing === "getSyncedSettings"
        if (!["settings", "allSavedData"].includes(variable) && !synced) return
        for (const property of node.properties) {
            const key = name(property.name)
            if (!key) continue
            const expression = ts.isShorthandPropertyAssignment(property) ? property.name : property.initializer
            for (const store of storesWithin(saveContext, expression, true)) store.persistence.push({ ...ref(saveContext, property), group: synced ? "SYNCED_SETTINGS" : variable === "settings" ? "SETTINGS" : key, key, transformed: !!expression && !ts.isShorthandPropertyAssignment(property) && !/^get\(/.test(expression.getText(saveContext.sf)), confidence: "code" })
        }
    })
    function channelFor(context, node) {
        if (context.file.startsWith("src/server/")) return { remote: "REMOTE", stage: "STAGE", controller: "CONTROLLER", output_stream: "OUTPUT_STREAM", cam: "CAM" }[context.file.split("/")[2]] || null
        const enclosing = functionName(node) || ""
        const variable = ancestor(node, (parent) => ts.isVariableDeclaration(parent))
        const hint = `${name(variable?.name) || ""} ${enclosing} ${context.file}`
        if (/responsesMain|IPC\/main/.test(hint)) return "MAIN"
        return CHANNELS.find((channel) => new RegExp(`(?:receive|request|send|talk|socket)${channel}|${channel.toLowerCase()}Talk|/${channel.toLowerCase()}/`, "i").test(hint)) || null
    }
    function ensureMessage(channel, key) {
        if (!channel || !key || typeof channel !== "string" || typeof key !== "string") return null
        if (!channels.has(channel)) channels.set(channel, { name: channel, definitions: [], messages: [], endpoints: [] })
        const id = `${channel}/${key}`
        if (!messages.has(id)) messages.set(id, { id, channel, key, definitions: [], payloads: [], senders: [], handlers: [], confidence: "code" })
        return messages.get(id)
    }
    function endpoint(context, node, channel, keys, role, payload = null) {
        if (!channel) return
        const direction = context.file.startsWith("src/electron/") ? (role === "send" ? "electron → renderer/client" : "renderer/client → electron") : context.file.startsWith("src/server/") ? (role === "send" ? "browser client → desktop" : "desktop → browser client") : (role === "send" ? "renderer → electron/other renderer" : "electron/other renderer → renderer")
        const entry = { ...ref(context, node), endLine: context.sf.getLineAndCharacterOfPosition(node.end).line + 1, channel, keys: keys.filter((key) => typeof key === "string"), role, direction, symbol: functionName(node), payload: payload ? compact(payload.getText(context.sf), 400) : null, expression: compact(node.getText(context.sf), 350), dynamic: !keys.length }
        context.ipc.push(entry)
        if (!channels.has(channel)) channels.set(channel, { name: channel, definitions: [], messages: [], endpoints: [] })
        channels.get(channel).endpoints.push(entry)
        for (const key of entry.keys) {
            const message = ensureMessage(channel, key)
            message[role === "send" ? "senders" : "handlers"].push(entry)
        }
        const callback = ancestor(node, (parent) => ts.isCallExpression(parent) && ts.isPropertyAccessExpression(parent.expression) && parent.expression.name.text === "subscribe")
        if (callback && role === "send") {
            const store = storeOf(context, callback.expression.expression)
            if (store) store.transports.push({ ...entry, relation: "send in subscription; payload may be transformed" })
        }
    }
    function nearby(context, line) {
        return context.comments.filter((comment) => comment.line <= line + 2 && comment.endLine >= line - 5).map((comment) => comment.text).slice(-3)
    }
    const ordinal = new Map()
    function factId(context, kind, text) {
        const signature = `${context.file}\0${kind}\0${text.replace(/\s+/g, " ")}`
        const count = ordinal.get(signature) || 0
        ordinal.set(signature, count + 1)
        return `${kind}-${hash(signature + count).slice(0, 16)}`
    }
    // Comments are lexical trivia, not keyword matches inside strings or executable code.
    for (const context of contexts.values()) {
        const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, context.script)
        let token
        while ((token = scanner.scan()) !== ts.SyntaxKind.EndOfFileToken) if (token === ts.SyntaxKind.SingleLineCommentTrivia || token === ts.SyntaxKind.MultiLineCommentTrivia) {
            const start = scanner.getTokenPos(), end = scanner.getTextPos()
            context.comments.push({ ...ref(context, start), endLine: context.sf.getLineAndCharacterOfPosition(end).line + 1, text: context.source.slice(start, end), start, end })
        }
        if (context.template) {
            visitTemplate(context.template.fragment, (node) => {
                if (node.type === "Comment") context.comments.push({ ...ref(context, node.start), endLine: context.sf.getLineAndCharacterOfPosition(node.end).line + 1, text: context.source.slice(node.start, node.end), start: node.start, end: node.end })
            })
            if (context.template.css) for (const match of context.source.slice(context.template.css.start, context.template.css.end).matchAll(/\/\*[\s\S]*?\*\//g)) {
                const start = context.template.css.start + match.index
                context.comments.push({ ...ref(context, start), endLine: context.sf.getLineAndCharacterOfPosition(start + match[0].length).line + 1, text: match[0], start, end: start + match[0].length })
            }
        }
        context.comments.sort((a, b) => a.start - b.start)
        for (const comment of context.comments) {
            const matches = [...comment.text.matchAll(WORKAROUND)].map((match) => match[0])
            if (matches.length) context.workarounds.push({ id: factId(context, "workaround", comment.text), ...comment, markers: [...new Set(matches)], confidence: "code" })
        }
    }
    for (const context of contexts.values()) {
        visit(context.sf, (node) => {
            // Public channel and typed payload declarations.
            if (context.file === "src/types/Channels.ts" && ts.isVariableDeclaration(node) && CHANNELS.includes(name(node.name))) channels.get(name(node.name)).definitions.push(ref(context, node))
            if (ts.isEnumDeclaration(node) && ["Main", "ToMain"].includes(node.name.text) && context.file.startsWith("src/types/IPC/")) for (const member of node.members) {
                const key = staticValue(context, member.initializer) || name(member.name)
                ensureMessage("MAIN", key).definitions.push({ ...ref(context, member), family: node.name.text })
            }
            if (ts.isInterfaceDeclaration(node) && /^(MainSendPayloads|MainReturnPayloads|ToMainSendPayloads|ToMainReturnPayloads)$/.test(node.name.text)) for (const member of node.members) {
                const key = name(member.name)
                if (key) ensureMessage("MAIN", key).payloads.push({ ...ref(context, member), contract: node.name.text, type: member.type?.getText(context.sf) || "unknown", symbol: key })
            }
            // Settings defaults provide explicit keys, including nested special/AI options.
            if (context.file === "src/electron/data/defaults.ts" && ts.isVariableDeclaration(node) && ["defaultConfig", "defaultSettings", "defaultSyncedSettings"].includes(name(node.name))) {
                const group = name(node.name).replace("default", "").toLowerCase()
                const collect = (object, prefix = "") => {
                    object = unwrap(object)
                    if (!object || !ts.isObjectLiteralExpression(object)) return
                    for (const property of object.properties) {
                        const key = name(property.name)
                        if (!key) continue
                        const full = prefix + key, id = `${group}.${full}`
                        if (!settings.has(id)) settings.set(id, { id, key: full, group, definitions: [], reads: [], writes: [], confidence: "code" })
                        settings.get(id).definitions.push({ ...ref(context, property), value: compact(property.initializer?.getText(context.sf), 300) })
                        collect(property.initializer, full + ".")
                    }
                }
                collect(node.initializer)
            }
            if (ts.isIdentifier(node)) {
                if (ts.isImportSpecifier(node.parent) || ts.isImportClause(node.parent) || ts.isNamespaceImport(node.parent) || ts.isVariableDeclaration(node.parent) && node.parent.name === node || ts.isPropertyAccessExpression(node.parent) && node.parent.name === node || ts.isPropertyAssignment(node.parent) && node.parent.name === node) return
                if (node.text.startsWith("$")) {
                    const store = dollarStore(context, node.text.slice(1))
                    recordStore(context, store, node, "dollar")
                } else {
                    const store = storeOf(context, node)
                    if (store) recordStore(context, store, node, "reference")
                }
            }
            if (ts.isBinaryExpression(node) && node.operatorToken.kind >= ts.SyntaxKind.FirstAssignment && node.operatorToken.kind <= ts.SyntaxKind.LastAssignment || ts.isPrefixUnaryExpression(node) && [ts.SyntaxKind.PlusPlusToken, ts.SyntaxKind.MinusMinusToken].includes(node.operator) || ts.isPostfixUnaryExpression(node)) {
                const left = node.left || node.operand
                for (const store of storesWithin(context, left)) recordStore(context, store, node, /\bget\(/.test(left.getText(context.sf)) ? "get-mutation" : "assignment")
            }
            if (ts.isCallExpression(node)) {
                const method = name(node.expression)
                const imported = ts.isIdentifier(node.expression) ? nativeName(context, method) : method
                const args = node.arguments
                if (imported === "get" && args[0]) recordStore(context, storeOf(context, args[0]), node, "get")
                if (ts.isPropertyAccessExpression(node.expression) && ["set", "update", "subscribe"].includes(method)) recordStore(context, storeOf(context, node.expression.expression), node, method)
                if (["_get", "_set", "_update"].includes(imported)) {
                    const key = staticValue(context, args[0])
                    const target = context.bindings.get(method)?.target
                    recordStore(context, stores.find((store) => store.file === target && store.name === key), node, { _get: "keyed-get", _set: "keyed-set", _update: "keyed-update" }[imported])
                }
                if (TIMER_NAMES.has(imported)) {
                    const index = TIMER_NAMES.get(imported), argument = args[index]
                    const explicit = argument ? staticValue(context, argument) : undefined
                    const defaultValue = symbolDefault(context, node.expression, index)
                    context.timers.push({ id: factId(context, "timer", node.getText(context.sf)), ...ref(context, node), endLine: context.sf.getLineAndCharacterOfPosition(node.end).line + 1, kind: imported, expression: argument?.getText(context.sf) || defaultValue?.expression || "omitted", valueMs: typeof explicit === "number" && Number.isFinite(explicit) ? explicit : !argument && typeof defaultValue?.value === "number" ? defaultValue.value : !argument && ["setTimeout", "setInterval"].includes(imported) ? 0 : null, default: defaultValue, symbol: functionName(node), code: compact(node.getText(context.sf), 500), nearbyComments: nearby(context, ref(context, node).line), confidence: "code" })
                }
                if (["sendMain", "requestMain", "receiveMain", "sendToMain", "requestToMain", "receiveToMain"].includes(imported) && args[0]) endpoint(context, node, "MAIN", [staticValue(context, args[0]) || name(args[0])], imported.startsWith("receive") ? "receive" : "send", args[1])
                else if (["send", "receive", "sendData", "timedout", "on", "handle", "emit", "reply", "sendToOutput"].includes(imported) && args[0]) {
                    const binding = context.bindings.get(method)
                    const qualified = ts.isPropertyAccessExpression(node.expression) ? node.expression.expression.getText(context.sf) : ""
                    const plausible = /api|ipc|webContents|socket|^e$/.test(qualified) || binding && /(?:IPC|request|sendData|socket|OutputHelper)/.test(binding.target || "") || context.file.startsWith("src/server/")
                    if (plausible && (!["on", "handle"].includes(imported) || /api|ipc|socket/.test(qualified) || context.file.startsWith("src/server/"))) {
                        let channel = staticValue(context, args[0]), keys = [], payload = args[1]
                        if (context.file.startsWith("src/server/") && ts.isIdentifier(node.expression) && imported === "send") { keys = typeof channel === "string" ? [channel] : []; channel = channelFor(context, node) }
                        else if (Array.isArray(staticValue(context, args[1]))) { keys = staticValue(context, args[1]); payload = args[2] }
                        else if (args[1] && ts.isObjectLiteralExpression(args[1])) {
                            const keyProperty = args[1].properties.find((property) => name(property.name) === "channel")
                            const dataProperty = args[1].properties.find((property) => name(property.name) === "data")
                            keys = keyProperty ? [staticValue(context, keyProperty.initializer) || name(keyProperty.initializer)] : []
                            payload = dataProperty?.initializer || args[1]
                            if (imported === "receive" && !keyProperty) keys = args[1].properties.map((property) => name(property.name)).filter(Boolean)
                        }
                        if (typeof channel !== "string") channel = channelFor(context, node)
                        if (channel && !["connect", "disconnect", "error"].includes(channel)) endpoint(context, node, channel, keys, ["receive", "on", "handle"].includes(imported) ? "receive" : "send", payload)
                    }
                }
                if (["get", "set"].includes(method) && ts.isPropertyAccessExpression(node.expression) && node.expression.expression.getText(context.sf) === "config" && typeof staticValue(context, args[0]) === "string") {
                    const key = staticValue(context, args[0]), id = `config.${key}`
                    if (!settings.has(id)) settings.set(id, { id, group: "config", key, definitions: [], reads: [], writes: [], confidence: "code" })
                    settings.get(id)[method === "get" ? "reads" : "writes"].push({ ...ref(context, node), expression: compact(node.getText(context.sf)) })
                }
            }
            if ((ts.isPropertyAssignment(node) || ts.isShorthandPropertyAssignment(node)) && ts.isObjectLiteralExpression(node.parent)) {
                const variable = ancestor(node, (parent) => ts.isVariableDeclaration(parent))
                const objectName = name(variable?.name) || ""
                if (HANDLER_NAME.test(objectName) && (ts.isFunctionLike(node.initializer) || ts.isShorthandPropertyAssignment(node))) {
                    const key = name(node.name)
                    endpoint(context, node, channelFor(context, node), key ? [key] : [], "receive", node.initializer?.parameters?.[0]?.type)
                }
                const propertyName = name(node.name)
                if (ts.isPropertyAssignment(node) && ["delay", "inDelay", "outDelay", "waitToShow", "waitToHide"].includes(propertyName)) {
                    const value = staticValue(context, node.initializer)
                    context.timers.push({ id: factId(context, "transition", node.getText(context.sf)), ...ref(context, node), kind: "delay-property", expression: node.initializer.getText(context.sf), valueMs: typeof value === "number" ? value : null, symbol: functionName(node), code: node.getText(context.sf), nearbyComments: nearby(context, ref(context, node).line), confidence: "code" })
                }
            }
            if (ts.isCaseClause(node) && typeof staticValue(context, node.expression) === "string") {
                const statement = node.parent.parent
                if (ts.isSwitchStatement(statement) && /(?:channel|\.id)$/.test(statement.expression.getText(context.sf))) endpoint(context, node, channelFor(context, node), [staticValue(context, node.expression)], "receive")
            }
            // Persisted store property accesses become setting-key evidence.
            if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
                const parts = [], original = node
                let base = node
                while (ts.isPropertyAccessExpression(base) || ts.isElementAccessExpression(base)) {
                    const key = ts.isPropertyAccessExpression(base) ? base.name.text : staticValue(context, base.argumentExpression)
                    parts.unshift(typeof key === "string" || typeof key === "number" ? String(key) : "*")
                    base = unwrap(base.expression)
                }
                const store = ts.isCallExpression(base) && name(base.expression) === "get" ? storeOf(context, base.arguments[0]) : storeOf(context, base)
                if (store?.persistence.some((item) => ["SETTINGS", "SYNCED_SETTINGS"].includes(item.group)) && parts.length) {
                    const group = store.persistence.find((item) => ["SETTINGS", "SYNCED_SETTINGS"].includes(item.group)).group === "SETTINGS" ? "settings" : "syncedsettings"
                    const key = `${store.name}.${parts.join(".")}`, id = `${group}.${key}`
                    if (!settings.has(id)) settings.set(id, { id, group, key, store: store.id, definitions: [], reads: [], writes: [], dynamic: parts.includes("*"), confidence: "code" })
                    const entry = { ...ref(context, original), expression: compact(original.getText(context.sf)) }
                    settings.get(id).reads.push(entry)
                    context.settings.push({ id, ...entry })
                }
            }
        })
        if (context.template) visitTemplate(context.template.fragment, (node) => {
            if (node.type === "Identifier" && node.name.startsWith("$")) {
                const store = dollarStore(context, node.name.slice(1))
                if (store) {
                    const entry = { ...ref(context, node.start), store: store.id, kind: "dollar-template", expression: node.name, symbol: null }
                    store.reads.push(entry); context.stores.push(entry)
                }
            }
            if (["AssignmentExpression", "UpdateExpression"].includes(node.type)) {
                visitTemplate(node.left || node.argument, (child) => {
                    const store = child.type === "Identifier" && child.name.startsWith("$") ? dollarStore(context, child.name.slice(1)) : null
                    if (store) {
                        const entry = { ...ref(context, node.start), store: store.id, kind: "assignment-template", expression: compact(context.source.slice(node.start, node.end)), symbol: null }
                        store.writes.push(entry); context.stores.push(entry)
                    }
                })
            }
            if (node.type === "BindDirective") {
                visitTemplate(node.expression, (child) => {
                    const store = child.type === "Identifier" && child.name.startsWith("$") ? dollarStore(context, child.name.slice(1)) : null
                    if (store) {
                        const entry = { ...ref(context, node.start), store: store.id, kind: "bind", expression: context.source.slice(node.start, node.end), symbol: null }
                        store.writes.push(entry); context.stores.push(entry)
                    }
                })
            }
            if (["Component", "SvelteComponent"].includes(node.type)) {
                const props = node.attributes.map((attribute) => ({ name: attribute.name || "...", kind: attribute.type, value: compact(context.source.slice(attribute.start, attribute.end), 400), ...ref(context, attribute.start) }))
                let target = context.bindings.get(node.name)?.target || null
                if (node.type === "SvelteComponent") {
                    const attribute = node.attributes.find((item) => item.name === "this")
                    const expression = attribute?.value?.[0]?.expression
                    if (expression?.type === "Identifier") target = context.bindings.get(expression.name)?.target || null
                }
                const lazyTargets = context.imports.filter((item) => item.kind === "dynamic" && item.line >= ref(context, node.start).line && item.line <= ref(context, node.end).line).map((item) => item.target).filter(Boolean)
                // Template imports are ESTree rather than TypeScript expressions.
                visitTemplate(node.attributes, (child) => {
                    if (child.type === "ImportExpression" && child.source?.type === "Literal") {
                        const imported = { ...ref(context, child.start), specifier: child.source.value, target: resolve(context.file, child.source.value), kind: "dynamic-template", typeOnly: false, bindings: [] }
                        context.imports.push(imported)
                        if (imported.target) lazyTargets.push(imported.target)
                    }
                })
                context.components.push({ ...ref(context, node.start), name: node.name, target, lazyTargets: [...new Set(lazyTargets)], props, dynamic: !target, confidence: "code" })
            }
            if (node.type === "TransitionDirective") {
                const expression = node.expression ? context.source.slice(node.expression.start, node.expression.end) : "default transition parameters"
                const value = /\bdelay\s*:\s*(\d+)/.exec(expression)
                context.timers.push({ id: factId(context, "transition", context.source.slice(node.start, node.end)), ...ref(context, node.start), kind: "transition-directive", expression, valueMs: value ? Number(value[1]) : null, symbol: null, code: context.source.slice(node.start, node.end), nearbyComments: nearby(context, ref(context, node.start).line), confidence: "code" })
            }
        })
        if (context.template?.css) {
            const start = context.template.css.start
            for (const match of context.source.slice(start, context.template.css.end).matchAll(/(?:transition(?:-delay|-duration)?|animation-delay)\s*:\s*([^;\n}]+)/g)) {
                const numeric = [...match[1].matchAll(/(-?[\d.]+)\s*(ms|s)\b/g)].map((value) => Number(value[1]) * (value[2] === "s" ? 1000 : 1))
                context.timers.push({ id: factId(context, "css-transition", match[0]), ...ref(context, start + match.index), kind: "css-transition", expression: match[1], valueMs: numeric.length === 1 ? numeric[0] : null, valuesMs: numeric, symbol: null, code: match[0], nearbyComments: nearby(context, ref(context, start + match.index).line), confidence: "code" })
            }
        }
    }
    // Receiver writes carry the message context back to each store.
    for (const context of contexts.values()) for (const entry of context.ipc.filter((item) => item.role === "receive")) {
        for (const write of context.stores.filter((item) => ["set", "update", "keyed-set", "keyed-update"].includes(item.kind) && item.symbol && entry.keys.includes(item.symbol) && item.line >= entry.line && item.line <= entry.endLine)) {
            stores.find((store) => store.id === write.store)?.transports.push({ ...entry, writeLine: write.line, relation: "store write in message handler" })
        }
    }
    for (const store of stores) {
        for (const item of store.persistence.filter(item => ["SETTINGS", "SYNCED_SETTINGS"].includes(item.group) && item.key !== "SETTINGS")) {
            const group = item.group === "SETTINGS" ? "settings" : "syncedsettings", id = `${group}.${item.key}`
            if (!settings.has(id)) settings.set(id, { id, group, key: item.key, definitions: [], reads: [], writes: [], confidence: "code" })
            const setting = settings.get(id)
            setting.store = store.id
            setting.definitions.push({ file: store.file, line: store.line, value: store.initial })
            setting.reads.push(...store.reads)
            setting.writes.push(...store.writes)
        }
    }
    for (const store of stores) for (const key of ["reads", "writes", "references", "transports", "persistence"]) store[key] = unique(store[key])
    for (const message of messages.values()) {
        for (const key of ["definitions", "payloads", "senders", "handlers"]) message[key] = unique(message[key])
        channels.get(message.channel).messages.push(message.id)
    }
    for (const setting of settings.values()) for (const key of ["reads", "writes", "definitions"]) setting[key] = unique(setting[key])
    const fileFacts = [...contexts.values()].map((context) => ({ file: context.file, area: context.file.split("/")[1], hash: hash(context.source), lineCount: context.lines.length, imports: unique(context.imports), symbols: unique(context.symbols), stores: unique(context.stores), components: context.components, timers: context.timers, workarounds: context.workarounds, settings: unique(context.settings), ipc: unique(context.ipc), comments: context.comments }))
    return { files: fileFacts, stores: stores.sort((a, b) => a.id.localeCompare(b.id, "en")), channels: [...channels.values()].sort((a, b) => a.name.localeCompare(b.name, "en")), messages: [...messages.values()].sort((a, b) => a.id.localeCompare(b.id, "en")), settings: [...settings.values()].sort((a, b) => a.id.localeCompare(b.id, "en")), timers: fileFacts.flatMap((file) => file.timers), workarounds: fileFacts.flatMap((file) => file.workarounds), components: fileFacts.filter((file) => file.file.endsWith(".svelte")).map((file) => ({ file: file.file, renders: file.components, props: file.symbols.filter((symbol) => symbol.kind === "VariableDeclaration" && /^\s*export let\b/.test(contexts.get(file.file).lines[symbol.line - 1])).map((symbol) => ({ name: symbol.name, file: file.file, line: symbol.line })) })), diagnostics, compiler: { typescript: ts.version, svelte: JSON.parse(fs.readFileSync(path.resolve(ROOT, "node_modules/svelte/package.json"), "utf8")).version }, sourceRevision: options.sources ? null : git(["log", "-1", "--format=%H", "--", "src"]) }
}
