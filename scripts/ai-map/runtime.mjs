// Runtime observation using the same Playwright Electron API as config/testing/.
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { _electron as electron } from "playwright"
import { expect } from "@playwright/test"
import { ROOT, CACHE, readJson, write, json, loadModel } from "./lib.mjs"
const directory=fs.mkdtempSync(path.join(os.tmpdir(),"freeshow-ai-map-")),settings=path.join(directory,"settings"),appPath=path.resolve(ROOT,CACHE,"runtime-app")
fs.mkdirSync(settings)
fs.writeFileSync(path.join(settings,"config.json"),JSON.stringify({dataPath:directory,disableHardwareAcceleration:true}))
fs.writeFileSync(path.join(settings,"settings.json"),JSON.stringify({initialized:true,alertUpdates:false,language:"en",ports:{remote:58510,stage:58511},special:{autoBackup:false}}))
const wav=path.join(directory,"tone.wav"),frames=48000*3,buffer=Buffer.alloc(44+frames*2)
buffer.write("RIFF",0);buffer.writeUInt32LE(buffer.length-8,4);buffer.write("WAVEfmt ",8);buffer.writeUInt32LE(16,16);buffer.writeUInt16LE(1,20);buffer.writeUInt16LE(1,22);buffer.writeUInt32LE(48000,24);buffer.writeUInt32LE(96000,28);buffer.writeUInt16LE(2,32);buffer.writeUInt16LE(16,34);buffer.write("data",36);buffer.writeUInt32LE(frames*2,40)
for(let i=0;i<frames;i++)buffer.writeInt16LE(Math.round(Math.sin(i*2*Math.PI*440/48000)*1000),44+i*2)
fs.writeFileSync(wav,buffer)
const observations=[],consoleLines=[],errors=[]
const model=loadModel(),build=readJson(`${CACHE}/runtime-build.json`)
if(build?.sourceFingerprint && build.sourceFingerprint!==model.manifest.sourceFingerprint)throw new Error("Runtime build is stale; regenerate maps and run runtime-build.mjs")
const env={...process.env,NODE_ENV:"production",FS_MOCK_STORE_PATH:settings};delete env.ELECTRON_RUN_AS_NODE
let app,main,output,runtimeVersions
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms))
async function findOutput() {
    for(const page of app.windows())if(page!==main && !page.isClosed() && await page.evaluate(()=>globalThis.aiMapProbe?.get(globalThis.aiMapProbe.stores.currentWindow)==="output").catch(()=>false))return page
    return null
}
async function rendered(text,present=true) {
    await expect.poll(async()=>{
        output=await findOutput()
        if(!output)return false
        const body=await output.locator("body").innerText().catch(()=>null)
        return body!==null && body.includes(text)===present
    },{timeout:15000}).toBe(true)
}
const state=async()=>main.evaluate(()=>{
    const p=globalThis.aiMapProbe,outs=p.get(p.stores.outputs)
    return Object.fromEntries(Object.entries(outs).map(([id,out])=>[id,{slide:out.out?.slide,background:out.out?.background,active:out.active}]))
})
async function step(id,method,body) {
    const start=performance.now()
    try {const evidence=await body();observations.push({id,status:"verified",method,evidence,elapsedMs:Math.round(performance.now()-start)})}
    catch(error) {observations.push({id,status:"unverified",method,error:error.message.slice(0,1600),elapsedMs:Math.round(performance.now()-start)});console.error(`${id}: ${error.message}`);if(main)await main.screenshot({path:path.resolve(ROOT,CACHE,`runtime-${id}.png`)}).catch(()=>{})}
    console.log(`Observed ${id}: ${observations.at(-1).status}`)
}
try {
    app=await electron.launch({args:[".","--no-sandbox"],cwd:appPath,env,timeout:60000})
    runtimeVersions=await app.evaluate(()=>process.versions)
    app.process().stderr.on("data",chunk=>consoleLines.push(chunk.toString().slice(0,6000)))
    app.on("window",page=>{page.on("console",msg=>consoleLines.push(msg.text()));page.on("pageerror",error=>errors.push(error.message))})
    await app.evaluate(({dialog},directory)=>{dialog.showOpenDialog=async()=>({canceled:false,filePaths:[directory]})},directory)
    await expect.poll(async()=>{
        for(const page of app.windows())if(await page.locator(".top").count().catch(()=>0)){main=page;return true}
        return false
    },{timeout:45000}).toBe(true)
    await main.waitForFunction(()=>globalThis.aiMapProbe?.get(globalThis.aiMapProbe.stores.loaded))
    const guide=main.locator("#guideButtons").getByText("Skip")
    if(await guide.count())await guide.click()
    await main.getByText("New project",{exact:true}).first().click({timeout:10000})
    await main.getByText("New show",{exact:true}).first().click()
    await main.locator("#name").fill("AI map observation")
    await main.getByText("Quick lyrics",{exact:true}).click()
    await main.getByPlaceholder("[Verse]").fill("[Verse]\nAI map first line\n\n[Chorus]\nAI map second line")
    await main.getByTestId("create.show.popup.new.show").click()
    await expect(main.locator("#showArea .grid > .main")).toHaveCount(2,{timeout:10000})
    await main.keyboard.press("Control+Shift+L")
    await expect(main.locator(".debug")).toBeVisible()
    // The diagnostic panel would otherwise cover targets on the small virtual display.
    // Hide only its DOM box; its real recorder and shortcut state remain enabled.
    await main.locator(".debug").evaluate(element=>{element.style.display="none"})
    await step("opening-output","Existing toggleOutputs helper; renderer/window handshake observed",async()=>{
        await main.evaluate(()=>globalThis.aiMapProbe.toggleOutputs(["default"],{state:true,force:true}))
        await expect.poll(async()=>{
            output=await findOutput();return !!output
        },{timeout:20000}).toBe(true)
        await delay(2200)
        return {outputWindowURL:output.url(),windowCount:app.windows().length}
    })
    await step("clicking-slide","Real thumbnail click, output store and DOM",async()=>{
        await main.locator("#showArea .grid > .main").first().locator(".slide").first().click()
        await expect.poll(async()=> (await state()).default?.slide?.index).toBe(0)
        await rendered("AI map first line")
        return {state:await state(),renderedText:await output.locator("body").innerText()}
    })
    await step("next-space","Real keyboard Space through the built-in shortcut",async()=>{
        await main.keyboard.press("Space")
        await expect.poll(async()=> (await state()).default?.slide?.index).toBe(1)
        await rendered("AI map second line")
        return {state:await state()}
    })
    await step("clearing-all","Real keyboard Escape through clearAll",async()=>{
        await main.keyboard.press("Escape")
        await expect.poll(async()=> (await state()).default?.slide || null).toBe(null)
        await rendered("AI map second line",false)
        return {state:await state()}
    })
    await step("video-background","Existing setOutput helper with the repository clipA.mp4 fixture; media DOM observed",async()=>{
        const clip=path.resolve(ROOT,"config/testing/fixtures/output/clipA.mp4")
        await main.evaluate(clip=>globalThis.aiMapProbe.setOutput("background",{path:clip,type:"video",loop:true,muted:true}),clip)
        await expect.poll(async()=> (await state()).default?.background?.path).toBe(clip)
        await expect.poll(async()=>{output=await findOutput();return output && await output.locator("video").evaluateAll(elements=>elements.some(video=>video.readyState>=2)).catch(()=>false)},{timeout:15000}).toBe(true)
        return {state:await state(),videos:await output.locator("video").evaluateAll(elements=>elements.map(video=>({readyState:video.readyState,paused:video.paused,currentTime:video.currentTime})))}
    })
    await step("editing-textbox","Real Edit view and contenteditable input; show cache/history observed",async()=>{
        await main.getByText("Edit",{exact:true}).first().click()
        const edit=main.locator('.edit[contenteditable]').first()
        await edit.waitFor({timeout:10000})
        await edit.fill("AI map edited line")
        await edit.press("Tab")
        await expect.poll(async()=>main.evaluate(()=>JSON.stringify(globalThis.aiMapProbe.get(globalThis.aiMapProbe.stores.showsCache)).includes("AI map edited line"))).toBe(true)
        return await main.evaluate(()=>({historyEntries:globalThis.aiMapProbe.get(globalThis.aiMapProbe.stores.undoHistory).length,textChanged:JSON.stringify(globalThis.aiMapProbe.get(globalThis.aiMapProbe.stores.showsCache)).includes("AI map edited line")}))
    })
    await step("saving","Real Control+S; disk file content verified",async()=>{
        await main.keyboard.press("Control+s")
        await expect.poll(()=>{
            const files=[]
            const walk=dir=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())walk(file);else if(entry.name.endsWith(".show"))files.push(file)}}
            walk(directory)
            return files.some(file=>fs.readFileSync(file,"utf8").includes("AI map edited line"))
        },{timeout:15000}).toBe(true)
        return {savedEditedShow:true,fixtureDataDirectory:"<fixture>"}
    })
    await main.getByText("Show",{exact:true}).first().click().catch(()=>{})
    await step("showing-scripture","Seeded local Bible selection, native playScripture helper, output DOM; no external Bible API",async()=>{
        await main.evaluate(async()=>{
            const p=globalThis.aiMapProbe,s=p.stores,id="ai-map-bible"
            s.scriptures.set({...p.get(s.scriptures),[id]:{id,name:"AI map Bible",api:false}})
            s.scripturesCache.set({...p.get(s.scripturesCache),[id]:{name:"AI map Bible",metadata:{title:"AI map Bible"},books:[{name:"John",abbreviation:"John",number:43,chapters:[{number:1,verses:[{number:1,text:"AI map scripture verse"},{number:2,text:"AI map next scripture verse"}]}]}]}})
            s.drawerTabsData.update(data=>({...data,scripture:{...(data.scripture || {}),activeSubTab:id}}))
            s.activeScripture.set({reference:{book:"John",chapters:[1],verses:[[1]]}})
            const content=await p.scripture.getActiveScripturesContent()
            if(!content?.length)throw new Error("Seeded local scripture did not resolve: "+JSON.stringify({active:p.get(s.activeScripture),definition:p.get(s.scriptures)[id]}))
            await p.scripture.playScripture()
        })
        await expect.poll(async()=> (await state()).default?.slide?.id).toBe("temp")
        await rendered("AI map scripture verse")
        return {state:await state(),rendered:true}
    })
    await step("playing-audio","Native AudioPlayer.start with generated quiet WAV; media clock observed (speaker audibility not verified)",async()=>{
        const result=await main.evaluate(async wav=>{const p=globalThis.aiMapProbe;return p.AudioPlayer.start(wav,{name:"AI map tone"})},wav)
        await expect.poll(async()=>main.evaluate(wav=>{const p=globalThis.aiMapProbe;return p.get(p.stores.playingAudio)[wav]?.audio?.currentTime || 0},wav),{timeout:10000}).toBeGreaterThan(0.1)
        return {started:result,clockAdvanced:true,speakerAudibilityVerified:false}
    })
    await step("starting-ndi","Backend createSenderNDI and capture lifecycle; native sender status observed, external receiver/hardware not verified",async()=>{
        const data=await app.evaluate(async()=>{
            const {OutputHelper,NdiSender,CaptureHelper}=globalThis.aiMapMainProbe
            await NdiSender.createSenderNDI("default","FreeShow AI map isolated fixture")
            CaptureHelper.Lifecycle.startCapture("default",{ndi:true})
            return {senderRegistered:!!NdiSender.NDI?.default,outputCapture:!!OutputHelper.getOutput("default")?.captureOptions}
        })
        expect(data.senderRegistered).toBe(true)
        expect(data.outputCapture).toBe(true)
        await expect.poll(async()=>app.evaluate(()=>globalThis.aiMapMainProbe.NdiSender.NDI?.default?.connections),{timeout:10000}).toBe(0)
        const nativeStatus=await app.evaluate(()=>globalThis.aiMapMainProbe.NdiSender.NDI?.default)
        return {...data,nativeStatus,externalReceiverVerified:false}
    })
    const debug=await main.evaluate(()=>globalThis.aiMapProbe.getDebugBuffer())
    write("docs/ai/flows/debug-observation.json",json(debug.map(entry=>({...entry,message:entry.message.replaceAll(directory,"<fixture>").replaceAll(ROOT,"<worktree>")}))))
} catch(error) {errors.push(error.stack || error.message);console.error(error.stack);if(main)await main.screenshot({path:path.resolve(ROOT,CACHE,"runtime-setup.png")}).catch(()=>{})}
finally {
    if(app){const child=app.process(),timer=setTimeout(()=>{try{process.kill(-child.pid,"SIGKILL")}catch{}},5000);await app.close().catch(()=>{});clearTimeout(timer)}
    const clean=value=>JSON.parse(JSON.stringify(value).replaceAll(directory,"<fixture>").replaceAll(ROOT,"<worktree>"))
    write("docs/ai/flows/observations.json",json(clean({sourceRevision:model.manifest.sourceRevision,sourceFingerprint:model.manifest.sourceFingerprint,observedAt:new Date().toISOString(),environment:{node:process.version,runtimeVersions,svelte:"5 legacy mode",display:process.env.DISPLAY,softwareRendering:true,port3000Used:false,storeIsolation:true,instrumentation:"Production test entry exposes existing helpers/stores; debug panel DOM hidden to avoid covering clicks; product source unchanged",build},observations,errors,consoleTail:consoleLines.slice(-50)})))
    fs.rmSync(directory,{recursive:true,force:true})
}
console.log(JSON.stringify(observations.map(item=>({id:item.id,status:item.status}))))
if(errors.length || observations.some(item=>item.status!=="verified")) process.exitCode=1
