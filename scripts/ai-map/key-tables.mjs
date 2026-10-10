// Curated situation rules anchored to the current source; no runtime claims here.
import {read,write,json} from './lib.mjs'
const S='src/frontend/utils/shortcuts.ts',P='src/frontend/components/output/preview/Preview.svelte',O='src/frontend/components/helpers/OutputHelper.ts',C='src/frontend/components/output/clear.ts',B='src/frontend/components/helpers/clipboard.ts'
const anchor=(file,needle)=>{const line=read(file).split('\n').findIndex(l=>l.includes(needle))+1;if(!line)throw Error(`Missing key-table anchor: ${file} ${needle}`);return `${file}:${line}`}
const rows=[],table=(id,keys,purpose,rules)=>rows.push({id,keys,purpose,rules,document:`docs/ai/events/keys/${id}.md`})
const rule=(situation,result,file,needle)=>({situation,result,reference:anchor(file,needle)})
const common=(kind)=>[
 rule('Text input focused','Global plain keys return except Escape. Preview ignores non-function keys in input/.edit. Ctrl/Cmd uses a separate passthrough list; clipboard helpers decide native text handling.',S,'if (isTypingTarget(document.activeElement) && e.key !== "Escape")'),
 rule('Popup open','Enter submits through triggerPopupSubmit. Escape follows protected-popup rules; clearAll refuses while a popup is open. Preview only directly excludes assign_shortcut, so other key families need their own guard.',S,'// Enter to submit popup'),
 rule('Drawer focused','Selection/clipboard routes use selected.id or focusedArea. Presentation routes still need their own guards; drawer focus alone does not disable Preview.',B,'let selectId = data.id'),
 rule('Project item selected','Clipboard routes dispatch by selection id; presentation keys route through OutputHelper project/show state. Keyboard clearAll refuses a non-scripture selection.',C,'if (!button &&'),
 rule('Outputs locked','OutputHelper.advanceOutput returns; clearAll returns. This does not disable editing/clipboard operations.',O,'if (get(outLocked))')
]
table('space',['Space','Shift+Space'],'Presentation advance versus typing/timeline',[
 rule('Show view, nothing live','Advance active outputs from active show/project; the route chooses cached/current/project content rather than a hardcoded slide index.',O,'static advanceOutput'),
 rule('Show view, a slide live','Space advances line/reveal/slide through playNext; isSpace differs from ArrowRight/PageDown.',O,'isSpace: triggerKey === " "'),
 rule('Shift+Space','Built-in Space handler does not test shiftKey. Custom action/group branches exclude shift; the built-in Space route can still run.',S,'" ": (e: KeyboardEvent)'),
 rule('Focus Mode','OutputHelper reads the focused project item and output position; clear caching differs in Focus Mode.',O,'static advanceOutput'),
 rule('Linked slides / output-bound slides','Linked card members with lines/reveals left move; other members wait. Outputs left behind clear their slide while keeping background; bindings determine eligible outputs.',O,'private static getLinkedWaiting'),
 rule('Slide editor, no text being edited','Space can still reach Preview and advance outputs, unless context/timeline/other guards stop it.',S,'OutputHelper.advanceOutputs(e)'),
 rule('Slide editor, text box edited','Preview returns for a target inside .edit; Space stays text input.',P,'e.target?.closest?.(".edit")'),
 rule('Timeline active','Space leaves preview presentation handling to the timeline route.',S,'if (isTimelineActive()) return'),...common('space')])
table('arrows',['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'],'Output navigation, editor navigation or item movement',[
 rule('Show view, nothing/live output','Left/Right call advanceOutputs; Left chooses playPrevious, Right playNext. Up/Down have component-specific handlers rather than entries in previewShortcuts.',S,'ArrowRight: (e: any)'),
 rule('Focus Mode / linked / bound outputs','Left/Right use linked-card waiting and binding-aware output traversal; direction determines remaining lines/reveals.',O,'const next = triggerKey !== "ArrowLeft"'),
 rule('Editor, selected items and no caret','All arrows move selected items by 1 px; Ctrl/Cmd multiplies by 10; the history route records item style changes.', 'src/frontend/components/edit/EditTools.svelte','let value = ["ArrowLeft", "ArrowUp"]'),
 rule('Editor, no selected items','Up/Down select previous/next editor slide. Left/Right may still navigate presentation outputs.', 'src/frontend/components/edit/Slides.svelte','if (e.key === "ArrowDown")'),
 rule('Editor caret in .edit','EditTools and Preview return; browser/editor caret handling takes over.', 'src/frontend/components/edit/EditTools.svelte','if (document.activeElement?.closest(".edit")) return'),...common('arrows')])
table('page',['PageUp','PageDown'],'Presenter navigation',[
 rule('Show view, no/live slide; Focus Mode','PageDown advances; PageUp moves backwards via OutputHelper. Prevents browser default when presenter-controller guard permits.',S,'PageDown: (e: KeyboardEvent)'),
 rule('Linked and output-bound slides','Same linked waiting/binding route as arrows; PageUp chooses previous direction.',O,'if (triggerKey === "ArrowLeft" || triggerKey === "PageUp")'),
 rule('Editor without caret','Can navigate presentation; these handlers lack the selected-item guard used by ArrowLeft/Right.',S,'PageUp: (e: KeyboardEvent)'),
 rule('Editor with caret','Preview excludes input/.edit targets for non-function keys.',P,'e.target?.closest?.(".edit")'),...common('page')])
table('escape',['Escape'],'Close/blur/deselect before audience clearing',[
 rule('Show view, live output, body focus and no selection/popup','Preview schedules clearAll; slide/background/overlays/messages/audio/timers clear after guards.',C,'export function clearAll'),
 rule('Nothing live','clearAll returns when audio and output are already clear. Output-window Escape hides the display when no content is displayed.',S,'if (e.key === "Escape" && !contentDisplayed)'),
 rule('Focus Mode / linked / bound outputs','Clear active outputs; Focus Mode keeps last-slide cache semantics while clearing the current slide.',C,'const keepLastSlide = get(focusMode)'),
 rule('Editor with selected items','clearAll refuses; global Escape blurs or deselects. Additional component handlers are indexed.',C,'if (!button &&'),
 rule('Text input / text box edited','Global Escape blurs the active element; the output clear guard and other listeners must also be considered.',S,'// blur focused elements'),
 rule('Popup open','Protected initialize/cloud_method and closing alert cannot close. Otherwise popup closes after 20 ms; clearAll sees the popup first and refuses.',S,'if (popupId && disablePopupClose.includes(popupId))'),
 rule('Context menu / quick search open','Escape closes those first; clearAll refuses context menus; quick-search route returns.',S,'// hide quick search'),
 rule('Project add-menu open','Projects capture-phase Escape stops propagation, so bubble window listeners do not receive the event.', 'src/frontend/components/show/Projects.svelte','if (addMenuOpen && e.key === "Escape")'),...common('escape')])
table('clear',['F1','F2','F3','F4','F5'],'Function keys and rename overlap',[
 rule('F1, show/live/Focus Mode','Clear background unless output locked; records clear_background timeline action.',S,'F1: () =>'),
 rule('F2, no non-scripture selection or Focus Mode','Clear slide unless output locked; records clear_slide. Outside Focus Mode a non-scripture selection suppresses presentation clear.',S,'// return if "rename" is selected'),
 rule('F2, selected slide/show/project outside Focus Mode','Global handler schedules menuClick(rename); preview returns when a non-scripture selection exists.',S,'F2: () => (get(focusMode)'),
 rule('F3','Clear overlays and effects, recording clear_overlays.',S,'F3: () =>'),
 rule('F4','Clear audio, playlist and microphones unless locked; Alt+F4 returns from the global handler but Preview function handling needs separate assessment.',S,'F4: () =>'),
 rule('F5','Advance outputs because presentationControllersKeysDisabled currently returns false; the transition-reset else branch is unreachable under that function.',S,'return false // always active'),
 rule('Input/editor caret','Preview allows function keys through its input/.edit guard, unlike ordinary keys.',P,'const functionKey ='),
 rule('Linked/output-bound slides','Clear helpers act on active output ids. F5 advances through linked-card waiting.',O,'static advanceOutputs'),...common('clear')])
table('enter',['Enter'],'Startup project, popup submit or editor newline',[
 rule('Show view, no show, recently used projects displayed','Open first recently used project.',S,'const lastUsedProject ='),
 rule('Show view, live slide / Focus Mode','No built-in preview Enter advance; global handler only has the startup/recent-project branch.',S,'Enter: () => {'),
 rule('Linked or output-bound slide live','No special Enter presentation route; local component handlers still apply.',S,'Enter: () => {'),
 rule('Popup open','Non-repeated Enter calls triggerPopupSubmit, prevents default if submitted.',S,'if (get(activePopup) && e.key === "Enter"'),
 rule('Editor caret / quick edit','EditboxLines handles Enter splitting/history and Shift+Enter behavior; plain global path defers typing.', 'src/frontend/components/edit/editbox/EditboxLines.svelte','if (e.key === "Enter" && e.shiftKey)'),
 rule('Editor without caret','Component-specific handlers and global recent-project guard; no unconditional presentation.',S,'if (get(activePopup)) return'),...common('enter')])
table('delete',['Delete','Backspace'],'Selection removal or native text deletion',[
 rule('Show view / drawer / project item selected','Delete dispatches deleteAction(selected,"remove"); Backspace delegates to Delete; contextActive suppresses this global route.',S,'Delete: () =>'),
 rule('Focus Mode / linked / output-bound slides','Selected-data removal follows existing clipboard/history routing; being live or bound does not itself establish deletion permission.',B,'export function deleteAction'),
 rule('Nothing selected','deleteAction returns false for no selection id.',B,'if (!clip?.id) return false'),
 rule('Editor caret','Plain global shortcuts defer typing; EditboxLines handles empty-text/line removal using its own guards and history.', 'src/frontend/components/edit/editbox/EditboxLines.svelte','e.key === "Backspace" || e.key === "Delete"'),
 rule('Editor selected text box, no caret','Selection kind determines deletion handler; check generated effects/history records for item versus slide.',B,'if (!deleteActions[clip.id]) return false'),...common('delete')])
const ctrl={Z:['undo','History undo'],Y:['redo','History redo'],C:['copy','Copy selected/contextual data'],V:['paste','Paste with destination-sensitive routes'],X:['cut','Copy then delete except text field rules'],D:['duplicate','Deferred duplicate of selected data'],A:['selectAll','Select current area data'],S:['save','Persist app data'],F:['shouldOpenReplace','Open find/replace for supported editor types']}
for(const[key,[handler,purpose]]of Object.entries(ctrl))table('ctrl-'+key.toLowerCase(),['Ctrl/Cmd+'+key],purpose,[
 rule('Show view, no/live output','Dispatch '+handler+' through ctrlKeys; audience changes depend on reached effects, not whether a slide is live.',S,'const ctrlKeys ='),
 rule('Focus Mode / linked / output-bound slides','Same command family; explicit selection/show/layout destinations and bindings remain in downstream helpers.',B,'export function '+(['copy','paste','cut','duplicate','selectAll'].includes(handler)?handler:'copy')),
 rule('Slide editor without caret',key==='F'?'Find/replace opens only for show/overlay/template editor types.':handler+' uses editor selection/history/save routing.',S,key==='F'?'export function shouldOpenReplace':'const ctrlKeys ='),
 rule('Slide editor caret / text input',key==='C'||key==='V'?'Global typing passthrough differs on macOS; clipboard helpers defer native form fields and .editItem, with pasteText for .edit.':key==='Z'||key==='Y'?'Z/Y pass through the global typing gate and preventDefault; app history is invoked. Local editor handling also needs inspection.':key==='D'||key==='F'?'Typing-target guard excludes this key from passthrough, so the app command is suppressed.':'This key is in the typing passthrough list; downstream helper guards determine native versus app behavior.',S,'const exeption ='),
 rule('Drawer / project selection',handler+' dispatches through current selected data/focused area when applicable; clipboard lookup keys remain runtime data.',B,'let selectId = data.id'),
 rule('Popup open','Ctrl branch runs before plain-key popup handling; popup openness alone does not block ctrlKeys.',S,'if (e.ctrlKey || e.metaKey)'),
 rule('Shift also held','shiftCtrlKeys take precedence when present: Shift+Z redo, Shift+D next_timer, Shift+F focus_mode; otherwise ctrlKeys may still run.',S,'if (e.shiftKey && shiftCtrlKeys[key])')])
table('numbers',['0','1','2','3','4','5','6','7','8','9'],'Tab navigation, slide numbers or custom keys',[
 rule('Show view, body focus, special.numberKeys false','1–5 select Show/Edit/Stage/Draw/Settings via menus; edit may initialize activeEdit.',S,'const menu = menus[Number(e.key) - 1]'),
 rule('Show view, slide live, special.numberKeys true','Preview accumulates digits for 300 ms then plays index Number(digits)-1.',P,'previousNumberKey += e.key'),
 rule('Nothing live / Focus Mode','Numeric slide path needs outSlide.id or activeShow. Focus Mode often clears activeShow, so inspect focused/live state.',P,'if ((outSlide?.id || $activeShow)'),
 rule('Linked / output-bound slides','playSlideAtIndex invokes current show/output routing; a number is not a global output id.',P,'playSlideAtIndex(slideIndex)'),
 rule('Editor without caret','Plain body numbers can change top tabs unless special.numberKeys is enabled.',S,'if (document.activeElement === document.body && !get(special).numberKeys'),
 rule('Editor caret / text input','Plain global and Preview gates defer numeric typing.',S,'if (isTypingTarget(document.activeElement) && e.key !== "Escape")'),
 rule('Ctrl/Cmd held','Numbers switch drawer tabs with profile access checks, potentially opening the drawer.',S,'const tabId = drawerMenus[Number(e.key) - 1]'),
 rule('Custom action/group key matches','Preview tries custom action, slide shortcut and group shortcut before numeric built-ins; early return wins within this listener.',P,'if (checkGroupShortcuts(e))'),...common('numbers')])
table('debug',['Ctrl/Cmd+Shift+L'],'Toggle diagnostic panel',[
 rule('Show view, no/live output; Focus Mode; linked/bound slides','shiftCtrlKeys.l toggles debugPanelOpen; it does not call setOutput.',S,'l: () => debugPanelOpen.update'),
 rule('Editor without caret / drawer / project selection','Same global shift+ctrl route unless earlier guards return.',S,'if (e.shiftKey && shiftCtrlKeys[key])'),
 rule('Text box editing / text input focused','L is not a typing passthrough exception, so the global typing-target gate may suppress the debug toggle.',S,'if (isTypingTarget(activeElem) && !passthrough.includes(key))'),
 rule('Popup open','Ctrl branch precedes plain popup handling; popup alone does not block the command.',S,'if (e.ctrlKey || e.metaKey)'),
 rule('Potential lock overlap','Preview ctrl shortcut l toggles outLocked, but lookup uses normalized key with original case. Shift-generated uppercase L can avoid that entry; live trace establishes actual state.',P,'const ctrlShortcut =')])
for(const entry of rows){write(entry.document,`# ${entry.keys.join(' / ')}\n\n[code] ${entry.purpose}. Rows describe source guards, not runtime verification. Custom keys and mounted local components can add behavior.\n\n| Situation | What happens | Evidence |\n| --- | --- | --- |\n${entry.rules.map(r=>`| ${r.situation} | [code] ${r.result} | ${r.reference} |`).join('\n')}\n\n[Generated handlers](../../generated/events/README.md); [live traces](../../traces/README.md). Query: \`npm run ai:ask -- key "${entry.keys[0]}"\`.\n`)}
write('docs/ai/events/keys/index.json',json(rows));write('docs/ai/events/README.md',`# Events and triggers\n\n[code] Start with the [generated inventory](../generated/events/README.md). Six-level effects are a conditional union; inspect unresolved edges before relying on a result.\n\n${rows.map(r=>`- [${r.keys.join(' / ')}](keys/${r.id}.md)`).join('\n')}\n\n[Trace recordings and method](../traces/README.md). Query commands: key, click, menu, action, trigger, trace, writes. Quotes are needed for combinations containing spaces; modifier spelling accepts Ctrl/Cmd.\n`)
console.log(`Wrote ${rows.length} key tables (${rows.reduce((n,r)=>n+r.rules.length,0)} situation rows).`)
