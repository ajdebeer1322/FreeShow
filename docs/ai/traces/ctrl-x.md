# Press Ctrl+X in selected

[verified] Action performed and resulting timelines recorded. Runtime 3086 ms; context selected.

[Recording](ctrl-x.json). Source fingerprint `c9939cb5f7d8abf719940994f6719d9a6648ee30b18d6301bc66846373aba666`.

[code] Static candidates: 3; Observed stores extend the bounded candidate union; review subscriptions, DOM bindings and unresolved calls. Store names outside candidate effects: undoHistory, shows.

[verified] Observed stores: selected, shows, showsCache, undoHistory; IPC packets 65; output windows 2; undo entries 0 → 1. Audience text and opacity are in each output DOM timeline and final state.

[code] May-call unions do not predict order or require all effects to execute. IPC/DOM timelines are recorded, not proof of exact function calls; background subscriptions can add effects. No-op keys are observed outcomes. Final state does not establish audible output or physical monitor delivery. This fixture resets state before each action and waits 1.8 s afterward.
