# AI project reference

Read [AI_README.md](AI_README.md) before editing this repository. It maps the architecture, source locations, state/model contracts, IPC, presentation engine, drag/drop/history, persistence, and validation commands.

Consult the source files for current behavior. Keep the guide updated when changing architecture or adding a feature that future agents need to locate. Preserve explicit show/layout destinations and reuse the existing presentation and undo/redo paths.

# Behaviour reference

[HOW_IT_WORKS.md](HOW_IT_WORKS.md) explains how the output/render pipeline and auto size actually behave, including hidden dependencies, measured timings and traps. Read it before touching output, transitions, `Textbox` or auto size. **After every new finding (something not obvious from one file), append it to its findings log with evidence and a [verified]/[code]/[guess] status, and update the sections above it if behaviour changed.** The goal is that the system can be understood and debugged from that file.

# Full AI knowledge map

Start at [docs/ai/README.md](docs/ai/README.md). Use `npm run ai:ask -- <query>` before searching by hand; regenerate with `npm run ai:map` and validate with `npm run ai:check` when source changes.
