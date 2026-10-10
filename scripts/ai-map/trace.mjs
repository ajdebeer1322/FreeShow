// Headless Playwright Electron runner. Only an isolated mock data directory is mutated.
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {spawnSync} from 'node:child_process'
import {pathToFileURL} from 'node:url'
import { _electron as electron } from 'playwright'
import {expect} from '@playwright/test'
import ts from 'typescript'
import {ROOT,CACHE,loadModel,readJson,write,json,hash,read} from './lib.mjs'
import {loadEvents} from './event-load.mjs'
import {scenarios,compare} from './trace-scenarios.mjs'
const requested=process.argv[2]||'list'
if(requested==='list'){console.log(scenarios.map(s=>`${s.id}: ${s.action}`).join('\n'));process.exit(0)}
if(!process.env.DISPLAY){
    const env={...process.env};delete env.ELECTRON_RUN_AS_NODE
    const result=spawnSync('xvfb-run',['-a','-s','-screen 0 1920x1080x24',process.execPath,...process.argv.slice(1)],{env,stdio:'inherit'})
    process.exit(result.status??1)
}
const selected=requested==='all'?scenarios:scenarios.filter(s=>s.id===requested)
if(!selected.length)throw new Error(`Unknown scenario ${requested}; run npm run ai:trace -- list`)
const model=loadModel(),events=loadEvents(),build=readJson(`${CACHE}/runtime-build.json`)
if(build?.sourceFingerprint!==model.manifest.sourceFingerprint)throw new Error('Runtime build missing/stale; run node scripts/ai-map/runtime-build.mjs')
const helperFile=path.resolve(ROOT,CACHE,'outputTimeline.mjs')
write(`${CACHE}/outputTimeline.mjs`,ts.transpileModule(read('config/testing/outputTimeline.ts'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText)
const timeline=await import(pathToFileURL(helperFile).href)
const runnerFingerprint=hash(['trace.mjs','trace-scenarios.mjs','runtime-entry.ts','runtime-build.mjs'].map(f=>read('scripts/ai-map/'+f)).join('\n'))
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'freeshow-ai-trace-')),settings=path.join(dir,'settings')
fs.mkdirSync(settings)
fs.writeFileSync(path.join(settings,'config.json'),JSON.stringify({dataPath:dir,disableHardwareAcceleration:true}))
fs.writeFileSync(path.join(settings,'settings.json'),JSON.stringify({initialized:true,alertUpdates:false,language:'en',ports:{remote:58510,stage:58511,controller:58512,output_stream:58513},special:{autoBackup:false}}))
const tone=path.join(dir,'trace-tone.wav'),frames=48000*15,wav=Buffer.alloc(44+frames*2)
wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(48000,24);wav.writeUInt32LE(96000,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(frames*2,40)
for(let i=0;i<frames;i++)wav.writeInt16LE(Math.round(Math.sin(i*2*Math.PI*440/48000)*500),44+i*2)
fs.writeFileSync(tone,wav)
const env={...process.env,NODE_ENV:'production',FS_MOCK_STORE_PATH:settings};delete env.ELECTRON_RUN_AS_NODE
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms))
let app,main,fixture,currentStart=0
const consoleLog=[],pageErrors=[],summary=[]
const clean=value=>JSON.parse(JSON.stringify(value).replaceAll(dir,'<fixture>').replaceAll(ROOT,'<worktree>'))
async function outPages(){
    const result=[]
    for(const page of app.windows())if(!page.isClosed()&&await page.evaluate(()=>globalThis.aiMapProbe?.get(globalThis.aiMapProbe.stores.currentWindow)==='output').catch(()=>false))result.push(page)
    return result
}
async function snapshot(){return main.evaluate(()=>{
    const p=globalThis.aiMapProbe,s=p.stores
    return {outputs:p.get(s.outputs),activeShow:p.get(s.activeShow),page:p.get(s.activePage),selected:p.get(s.selected),popup:p.get(s.activePopup),focus:p.get(s.focusMode),undoCount:p.get(s.undoHistory).length,redoCount:p.get(s.redoHistory).length,debugOpen:!!document.querySelector('.debug'),playingAudio:Object.keys(p.get(s.playingAudio))}
})}
async function prepare(scenario){
    if(!await main.locator('.debug').count()){
        await main.evaluate(()=>{document.activeElement?.blur();window.getSelection()?.removeAllRanges()})
        await main.keyboard.press('Control+Shift+L')
    }
    await main.evaluate(({fixture,context})=>{
        const p=globalThis.aiMapProbe,s=p.stores,clone=v=>JSON.parse(JSON.stringify(v))
        globalThis.__aiTrace?.stops.forEach(stop=>stop());globalThis.__aiTrace=null
        document.querySelector('#ai-trace-input')?.remove();document.activeElement?.blur();window.getSelection()?.removeAllRanges()
        s.outLocked.set(false);s.activePopup.set(null);s.contextActive.set(false);s.topContextActive.set(false);s.focusMode.set(false)
        s.activePage.set('show');s.focusedArea.set('show');s.selected.set({id:null,data:[]});s.activeStage.set({items:[]});s.activeDrawerTab.set('shows');s.clipboard.set({id:null,data:[]})
        s.shows.set(clone(fixture.shows));s.showsCache.set(clone(fixture.showsCache));s.projects.set(clone(fixture.projects));s.activeProject.set(fixture.activeProject);s.activeShow.set(clone(fixture.activeShow));s.activeFocus.set({id:fixture.activeShow.id,index:0,type:'show'})
        s.activeEdit.set({showId:fixture.activeShow.id,slide:0,items:[]});s.editMode.set('default');s.slidesOptions.update(v=>({...v,mode:'grid'}))
        s.undoHistory.set([]);s.redoHistory.set([]);s.outputSlideCache.set({});s.outputCache.set(null)
        s.special.update(v=>({...v,numberKeys:context==='numbers',autoLetterShortcut:false}));s.outputs.set(clone(fixture.outputs));s.overlays.set(clone(fixture.overlays))
        const sh=p.get(s.showsCache)[fixture.activeShow.id],layout=sh.settings.activeLayout
        if(context==='linked')s.showsCache.update(v=>{const first=v[fixture.activeShow.id].layouts[layout].slides[0],child=v[fixture.activeShow.id].slides[first.id].children[0];first.linkNext=true;first.bindings=['default'];first.children={...(first.children||{}),[child]:{bindings:['second']}};return v})
        if(context==='focus')s.focusMode.set(true)
        if(context==='selected')s.selected.set({id:'slide',data:[{id:sh.layouts[layout].slides[0].id,index:0,showId:fixture.activeShow.id,layout}]})
        if(context==='project')s.selected.set({id:'show',data:[{id:fixture.activeShow.id,index:0,layout}]})
        if(context==='drawer')s.focusedArea.set('drawer')
        if(['editor','textbox'].includes(context))s.activePage.set('edit')
        if(context==='popup')s.activePopup.set('next_timer')
        if(context!=='empty')p.setOutput('slide',{id:fixture.activeShow.id,layout,index:0,line:0})
        if(context==='linked')p.setOutput('slide',{id:fixture.activeShow.id,layout,index:1,line:0})
        p.setOutput('background',{path:fixture.clip,type:'video',loop:true,muted:true});p.setOutput('overlays',['trace-overlay'])
    },{fixture,context:scenario.context})
    await sleep(1100)
    if(['ctrl-z','ctrl-y','ctrl-z-textbox'].includes(scenario.id)){
        const box=main.locator('.edit[contenteditable]').first();await box.waitFor({timeout:10000});await box.fill('Trace edited text for undo');await box.press('Tab');await sleep(150)
        if(scenario.id==='ctrl-y'){await main.keyboard.press('Control+Z');await sleep(150)}
    }
    if(scenario.id==='ctrl-v'){await main.keyboard.press('Control+C');await sleep(100)}
    if(scenario.id==='f4-live')await main.evaluate(async tone=>globalThis.aiMapProbe.AudioPlayer.start(tone,{name:'Trace tone'}),tone)
    await main.locator('.debug').evaluateAll(elements=>elements.forEach(el=>el.style.display='none'))
    if(scenario.context==='textbox'){
        const box=main.locator('.edit[contenteditable]').first();await box.waitFor({timeout:10000});await box.click();await box.press('End')
    }else if(scenario.context==='input')await main.evaluate(()=>{const el=document.createElement('input');el.id='ai-trace-input';el.value='Trace input';el.style.cssText='position:fixed;top:20px;left:20px;z-index:99999';document.body.append(el);el.focus();el.setSelectionRange(el.value.length,el.value.length)})
    else if(scenario.context!=='popup')await main.evaluate(()=>document.activeElement?.blur())
}
async function act(scenario){
    if(scenario.type==='key')return main.keyboard.press(scenario.keys[0].replaceAll('Ctrl+','Control+'))
    if(scenario.type==='click-slide')return main.locator('#showArea .slide').nth(scenario.context==='linked'?0:1).click({timeout:5000})
    if(scenario.type==='click-project')return main.locator('#projectArea .context').filter({hasText:'AI trace fixture'}).first().click({timeout:5000})
    if(scenario.type==='clear-button'){
        const button=scenario.clear==='all'?main.locator('.clear .clearAll'):main.locator(`.clear [data-title*="${{background:'F1',slide:'F2',overlays:'F3'}[scenario.clear]}"]`)
        return button.first().click({timeout:5000})
    }
    if(scenario.type==='menu'){
        const target=scenario.context==='selected'?main.locator('#showArea .slide').first():scenario.context==='drawer-show'?main.locator('.drawer [class~="#drawer_show_button"]').filter({hasText:'AI trace fixture'}).first():main.locator('#projectArea .context').filter({hasText:'AI trace fixture'}).first()
        await target.click({button:'right',timeout:5000})
        const label={duplicate:/\bDuplicate\b/,delete:/\bDelete\b/,remove:/\bRemove\b/,rename:/\bRename\b/}[scenario.menu]
        return main.locator('.contextMenu [role="menuitem"]').filter({hasText:label}).first().click({timeout:5000})
    }
    if(scenario.type==='drop')return main.locator('#showArea .slide').first().evaluate((el,clip)=>{
        const p=globalThis.aiMapProbe;p.stores.selected.set({id:'media',data:[{path:clip,name:'Trace video',type:'video'}]})
        const dt=new DataTransfer();dt.setData('text','media');el.dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:dt}))
    },fixture.clip)
    if(scenario.type==='remote'){
        // Actual remote transport; no direct call to triggerAction.
        const {io}=await import('socket.io-client')
        const socket=io('http://127.0.0.1:58510',{transports:['websocket'],forceNew:true,reconnection:false})
        try{
            await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('Remote connect timed out')),6000);socket.once('connect',()=>{clearTimeout(timer);resolve()});socket.once('connect_error',e=>{clearTimeout(timer);reject(e)})})
            socket.emit('REMOTE',{channel:'API:next_slide',data:{},id:socket.id});await sleep(500)
            await expect.poll(async()=>main.evaluate(()=>globalThis.aiMapProbe.get(globalThis.aiMapProbe.stores.outputs).default.out.slide.index),{timeout:3000}).toBe(1)
        }finally{socket.close()}
    }
}
function persist(scenario,recording){
    const file=`docs/ai/traces/${scenario.id}.json`,doc=`docs/ai/traces/${scenario.id}.md`
    const c=recording.comparison,entry={id:scenario.id,keys:scenario.keys,action:scenario.action,status:recording.status,elapsedMs:recording.elapsedMs,document:doc,recording:file,comparison:c.verdict,sourceFingerprint:recording.sourceFingerprint,runnerFingerprint}
    write(file,json(clean(recording)))
    write(doc,`# ${scenario.action}\n\n[${recording.status==='verified'?'verified':'guess'}] ${recording.status==='verified'?'Action performed and resulting timelines recorded.':'Action could not be verified: '+recording.error} Runtime ${recording.elapsedMs} ms; context ${scenario.context}.\n\n[Recording](${scenario.id}.json). Source fingerprint \`${recording.sourceFingerprint}\`.\n\n[code] Static candidates: ${c.eventIds.length}; ${c.verdict} Store names outside candidate effects: ${c.unindexedObservedStores.join(', ')||'none'}.\n\n[verified] Observed stores: ${c.observedStores.join(', ')||'none'}; IPC packets ${recording.ipc.length}; output windows ${recording.outputs.length}; undo entries ${recording.before?.undoCount??'?'} → ${recording.after?.undoCount??'?'}. Audience text and opacity are in each output DOM timeline and final state.\n\n[code] ${c.limits} Final state does not establish audible output or physical monitor delivery. This fixture resets state before each action and waits 1.8 s afterward.\n`)
    const index=readJson('docs/ai/traces/index.json',{scenarios:[]})
    index.scenarios=index.scenarios.filter(s=>s.id!==scenario.id);index.scenarios.push(entry);index.scenarios.sort((a,b)=>a.id.localeCompare(b.id))
    write('docs/ai/traces/index.json',json(index));summary.push(entry)
}
try{
    app=await electron.launch({args:['.','--no-sandbox'],cwd:path.resolve(ROOT,CACHE,'runtime-app'),env,timeout:60000})
    for(const name of ['stdout','stderr'])app.process()[name]?.on('data',chunk=>consoleLog.push({at:Date.now(),t:Date.now()-currentStart,window:'electron-main',type:name,text:chunk.toString()}))
    await app.evaluate(({ipcMain,BrowserWindow,app})=>{
        const log=globalThis.__aiIPC={rows:[],enabled:false,t0:0}
        const safe=v=>{try{return JSON.parse(JSON.stringify(v,(_k,x)=>typeof x==='bigint'?String(x):Buffer.isBuffer(x)?{bufferBytes:x.length}:x))}catch{return '<non-serializable>'}}
        const record=(direction,window,channel,args)=>{if(log.enabled)log.rows.push({t:Date.now()-log.t0,direction,window,channel,args:safe(args)})}
        const emit=ipcMain.emit;ipcMain.emit=function(channel,event,...args){if(event?.sender)record('renderer-to-main',event.sender.id,channel,args);return emit.call(this,channel,event,...args)}
        const wrap=(channel,handler)=>function(event,...args){record('renderer-invoke',event.sender?.id,channel,args);return handler.call(this,event,...args)}
        if(ipcMain._invokeHandlers instanceof Map)for(const[k,v]of ipcMain._invokeHandlers)ipcMain._invokeHandlers.set(k,wrap(k,v))
        const handle=ipcMain.handle;ipcMain.handle=function(channel,handler){return handle.call(this,channel,wrap(channel,handler))}
        const hook=win=>{const send=win.webContents.send;win.webContents.send=function(channel,...args){record('main-to-renderer',win.webContents.id,channel,args);return send.call(this,channel,...args)}}
        BrowserWindow.getAllWindows().forEach(hook);app.on('browser-window-created',(_event,win)=>hook(win))
    })
    const attached=new Set(),attach=page=>{if(attached.has(page))return;attached.add(page);page.on('console',msg=>consoleLog.push({at:Date.now(),t:Date.now()-currentStart,window:page.url(),type:msg.type(),text:msg.text()}));page.on('pageerror',err=>pageErrors.push({t:Date.now()-currentStart,message:err.message}))}
    app.on('window',attach);app.windows().forEach(attach)
    await app.evaluate(({dialog},dir)=>{dialog.showOpenDialog=async()=>({canceled:false,filePaths:[dir]})},dir)
    await expect.poll(async()=>{for(const p of app.windows())if(await p.locator('.top').count().catch(()=>0)){main=p;return true}return false},{timeout:45000}).toBe(true)
    await main.waitForFunction(()=>globalThis.aiMapProbe?.get(globalThis.aiMapProbe.stores.loaded))
    const guide=main.locator('#guideButtons').getByText('Skip');if(await guide.count())await guide.click()
    await main.getByText('New project',{exact:true}).first().click()
    await main.getByText('New show',{exact:true}).first().click()
    await main.locator('#name').fill('AI trace fixture');await main.getByText('Quick lyrics',{exact:true}).click()
    await main.getByPlaceholder('[Verse]').fill('[Verse]\nTrace verse first line\n\nTrace verse second line\n\n[Chorus]\nTrace chorus long auto-size line for the audience\n\nTrace chorus final line')
    await main.getByTestId('create.show.popup.new.show').click()
    await main.keyboard.press('Control+Shift+L');await main.locator('.debug').evaluate(el=>{el.style.display='none'})
    fixture=await main.evaluate(clip=>{
        const p=globalThis.aiMapProbe,s=p.stores,clone=v=>JSON.parse(JSON.stringify(v))
        const show=p.get(s.activeShow),full=p.get(s.showsCache)[show.id]
        s.showsCache.update(v=>{Object.values(v[show.id].slides).forEach(sl=>sl.items?.forEach(it=>{it.textFit='shrinkToFit';delete it.autoFontSize}));return v})
        s.outputs.update(v=>{v.default.enabled=true;v.default.active=true;v.default.bounds={x:0,y:0,width:960,height:540};v.second={...clone(v.default),id:'second',name:'Trace second output',bounds:{x:960,y:0,width:960,height:540},out:{}};return v})
        const item=clone(Object.values(full.slides)[0].items[0]);item.style='top: 850px;left: 100px;width: 1700px;height: 100px;';item.lines=[{align:'',text:[{value:'Trace overlay',style:'font-size:50px;color:#ffffff;'}]}]
        s.overlays.set({'trace-overlay':{name:'Trace overlay',color:null,category:null,items:[item]}})
        s.actions.set({'trace-next':{id:'trace-next',name:'Trace next',triggers:['next_slide'],actionValues:{next_slide:{}}}})
        return {activeShow:clone(show),shows:clone(p.get(s.shows)),showsCache:clone(p.get(s.showsCache)),projects:clone(p.get(s.projects)),activeProject:p.get(s.activeProject),outputs:clone(p.get(s.outputs)),overlays:clone(p.get(s.overlays)),clip}
    },path.resolve(ROOT,'config/testing/fixtures/output/clipA.mp4'))
    await main.evaluate(()=>globalThis.aiMapProbe.toggleOutputs(['default','second'],{state:true,force:true}))
    await expect.poll(async()=>(await outPages()).length,{timeout:25000}).toBe(2);await sleep(2300)
    // Toggle the actual diagnostic shortcut after outputs exist so both renderers receive DEBUG_ENABLED.
    await main.keyboard.press('Control+Shift+L');await main.keyboard.press('Control+Shift+L')
    for(const scenario of selected){
        const began=performance.now();let before,after,status='verified',error=null,outputs=[]
        const consoleStart=consoleLog.length,errorStart=pageErrors.length
        let ipc=[],storeTimeline=[],debug=[]
        try{
            await prepare(scenario);before=await snapshot();const pages=await outPages()
            if(scenario.context==='linked'){
                await expect(main.locator('#showArea .linkedCard')).toHaveCount(1)
                if(before.outputs.default.out.slide?.index!==0||before.outputs.second.out.slide?.index!==1)throw new Error('Linked fixture did not target separate outputs')
            }
            const origins=[]
            for(const page of pages){origins.push(await page.evaluate(()=>Date.now()));await page.evaluate(timeline.startRecording)}
            currentStart=Date.now()
            await app.evaluate((_e,t0)=>{Object.assign(globalThis.__aiIPC,{rows:[],enabled:true,t0})},currentStart)
            await main.evaluate(t0=>{
                const p=globalThis.aiMapProbe,s=p.stores,trace=globalThis.__aiTrace={rows:[],stops:[]}
                for(const name of ['outputs','showsCache','shows','projects','selected','activePage','activeShow','activePopup','activeDrawerTab','activeEdit','focusMode','outLocked','undoHistory','redoHistory','timelineRecordingAction']){
                    let last;trace.stops.push(s[name].subscribe(value=>{const encoded=JSON.stringify(value);if(last!==undefined&&last!==encoded)trace.rows.push({t:Date.now()-t0,store:name});last=encoded}))
                }
            },currentStart)
            await act(scenario);await sleep(1800);after=await snapshot()
            if(scenario.id==='f4-live'&&after.playingAudio.length)throw new Error('F4 did not remove the seeded playing audio')
            if(scenario.id==='ctrl-z'&&after.undoCount>=before.undoCount)throw new Error('Seeded undo entry did not undo')
            if(scenario.id==='ctrl-y'&&after.redoCount>=before.redoCount)throw new Error('Seeded redo entry did not redo')
            debug=await main.evaluate(t0=>globalThis.aiMapProbe.getDebugBuffer().filter(entry=>entry.time>=t0),currentStart)
            for(const [index,page]of pages.entries())outputs.push({window:await page.evaluate(()=>Object.keys(globalThis.aiMapProbe.get(globalThis.aiMapProbe.stores.outputs))[0]),url:page.url(),timeline:(await page.evaluate(timeline.stopRecording)).map(row=>({...row,t:row.t+origins[index]-currentStart})),finalText:await page.locator('body').innerText(),finalState:await page.evaluate(()=>{const p=globalThis.aiMapProbe;return {outputs:p.get(p.stores.outputs),videos:[...document.querySelectorAll('video')].map(v=>({readyState:v.readyState,paused:v.paused,currentTime:v.currentTime})),textBoxes:[...document.querySelectorAll('.textContainer')].map(el=>({text:el.textContent,fontSize:getComputedStyle(el).fontSize}))}})})
        }catch(e){status='unverified';error=e.message;await main.screenshot({path:path.resolve(ROOT,CACHE,`trace-${scenario.id}.png`)}).catch(()=>{})}
        ipc=await app.evaluate(()=>{globalThis.__aiIPC.enabled=false;return globalThis.__aiIPC.rows})
        storeTimeline=await main.evaluate(()=>{const t=globalThis.__aiTrace;if(!t)return [];t.stops.forEach(stop=>stop());return t.rows})
        const recording={id:scenario.id,status,error,action:scenario.action,context:scenario.context,keys:scenario.keys,elapsedMs:Math.round(performance.now()-began),actionEpoch:currentStart,observedAt:new Date().toISOString(),sourceRevision:model.manifest.sourceRevision,sourceFingerprint:model.manifest.sourceFingerprint,runnerFingerprint,environment:{electron:await app.evaluate(()=>process.versions.electron),display:process.env.DISPLAY,ports:[58510,58511,58512,58513],isolated:true,productSourceModified:false,fixture:'Four slides in two groups, shrinkToFit items, looped fixture video, overlay, two active outputs. Test input injected for input contexts. State restored before each scenario.'},before,after,ipc,storeTimeline,outputs,console:consoleLog.slice(consoleStart).filter(row=>row.at>=currentStart).map(({at,...row})=>({...row,t:at-currentStart})),errors:pageErrors.slice(errorStart),debug}
        recording.comparison=compare(events,scenario,recording);persist(scenario,recording)
        console.log(`${scenario.id}: ${status} (${recording.elapsedMs}ms), ${ipc.length} IPC packets${error?' — '+error.split('\n')[0]:''}`)
    }
}finally{
    if(app){const timer=setTimeout(()=>app.process().kill('SIGKILL'),5000);await app.close().catch(()=>{});clearTimeout(timer)}
    fs.rmSync(dir,{recursive:true,force:true})
}
if(summary.some(s=>s.status!=='verified'))process.exitCode=1
