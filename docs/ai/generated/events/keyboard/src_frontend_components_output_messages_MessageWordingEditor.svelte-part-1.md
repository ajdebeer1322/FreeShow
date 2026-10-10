# keyboard/src_frontend_components_output_messages_MessageWordingEditor.svelte (1)

## dynamic — event-bcc30d023eefaf20ac

[code] [src/frontend/components/output/messages/MessageWordingEditor.svelte:127](../../../../../src/frontend/components/output/messages/MessageWordingEditor.svelte#L127); remember. partial.

Conditions: src/frontend/components/output/messages/MessageWordingEditor.svelte:47 range && editor.contains(range.commonAncestorContainer).

Calls: src/frontend/components/output/messages/MessageWordingEditor.svelte:45 remember (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-fe0755d3ee62c867b3

[code] [src/frontend/components/output/messages/MessageWordingEditor.svelte:127](../../../../../src/frontend/components/output/messages/MessageWordingEditor.svelte#L127); keydown. partial.

Conditions: src/frontend/components/output/messages/MessageWordingEditor.svelte:118 event.key !== "Enter" \|\| event.isComposing.

Calls: src/frontend/components/output/messages/MessageWordingEditor.svelte:117 keydown (depth 0); src/frontend/components/output/messages/MessageWordingEditor.svelte:45 remember (depth 1); src/frontend/components/output/messages/MessageWordingEditor.svelte:56 insert (depth 1); src/frontend/components/helpers/messages.ts:11 messageParts (depth 2); src/frontend/components/helpers/messages.ts:5 tokenPattern (depth 3); src/frontend/components/output/messages/MessageWordingEditor.svelte:50 input (depth 2); src/frontend/components/output/messages/MessageWordingEditor.svelte:14 read (depth 3); src/frontend/components/output/messages/MessageWordingEditor.svelte:19 <callback> (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-516adde028f239b244

[code] [src/frontend/components/output/messages/MessageWordingEditor.svelte:147](../../../../../src/frontend/components/output/messages/MessageWordingEditor.svelte#L147); (event) => { if (event.key === "Enter") { event.preventDefault() addVariable() } }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/output/messages/MessageWordingEditor.svelte:88 addVariable (depth 1); src/frontend/components/helpers/messages.ts:23 messageVariableName (depth 2); src/frontend/components/output/messages/MessageWordingEditor.svelte:56 insert (depth 2); src/frontend/components/helpers/messages.ts:11 messageParts (depth 3); src/frontend/components/helpers/messages.ts:5 tokenPattern (depth 4); src/frontend/components/output/messages/MessageWordingEditor.svelte:50 input (depth 3); src/frontend/components/output/messages/MessageWordingEditor.svelte:14 read (depth 4); src/frontend/components/output/messages/MessageWordingEditor.svelte:19 <callback> (depth 5); src/frontend/components/output/messages/MessageWordingEditor.svelte:45 remember (depth 4); src/frontend/components/output/messages/MessageWordingEditor.svelte:45 remember (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 0. Full edges/effects/conditions in JSON.
