// Build only into the ignored cache; never rewrite source or public/index.html.
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { ROOT, CACHE, write, json } from "./lib.mjs"
process.env.NODE_ENV="production"
const destination=path.resolve(ROOT,CACHE,"runtime-app")
fs.mkdirSync(destination,{recursive:true})
fs.cpSync(path.resolve(ROOT,"public"),path.join(destination,"public"),{recursive:true,filter:file=>!file.includes("/public/build")})
const modules=path.join(destination,"node_modules")
if(!fs.existsSync(modules)) fs.symlinkSync(path.resolve(ROOT,"node_modules"),modules,"dir")
const packageData=JSON.parse(fs.readFileSync(path.resolve(ROOT,"package.json"),"utf8"))
fs.writeFileSync(path.join(destination,"package.json"),JSON.stringify({...packageData,main:"ai-map-main.cjs"}))
fs.writeFileSync(path.join(destination,"ai-map-main.cjs"),'require("./build/electron/index.js"); globalThis.aiMapMainProbe = { OutputHelper: require("./build/electron/output/OutputHelper.js").OutputHelper, NdiSender: require("./build/electron/ndi/NdiSender.js").NdiSender, CaptureHelper: require("./build/electron/capture/CaptureHelper.js").CaptureHelper };\n')
const result=spawnSync(process.execPath,[path.resolve(ROOT,"node_modules/typescript/bin/tsc"),"--project","config/typescript/tsconfig.electron.json","--outDir",path.join(destination,"build"),"--sourceMap","false"],{cwd:ROOT,encoding:"utf8",maxBuffer:8*1024*1024})
write(`${CACHE}/runtime-build-typescript.log`,result.stdout+result.stderr)
if(result.status!==0) throw new Error("Electron TypeScript build failed; see cache/runtime-build-typescript.log")
const {build}=await import("vite")
await build({configFile:path.resolve(ROOT,"vite.config.mjs"),build:{outDir:path.join(destination,"public/build"),lib:{entry:path.resolve(ROOT,"scripts/ai-map/runtime-entry.ts"),name:"aiMapProbe",formats:["iife"],fileName:()=>"bundle.js"}},logLevel:"warn"})
const html=fs.readFileSync(path.join(destination,"public/index.html"),"utf8").replace('<script type="module" src="/src/frontend/main.ts"></script>','<link rel="stylesheet" href="./build/bundle.css" /><script defer src="./build/bundle.js"></script>')
fs.writeFileSync(path.join(destination,"public/index.html"),html)
const {getServerViteConfig,servers}=await import("../../config/building/vite.config.servers.mjs")
for(const server of Object.keys(servers)) {
    const config=getServerViteConfig(server,true)
    const target=path.join(destination,"build/electron",server)
    await build({...config,plugins:config.plugins.filter(plugin=>plugin.name!=="copy-server-files"),configFile:false,build:{...config.build,outDir:target},logLevel:"warn"})
    fs.cpSync(path.resolve(ROOT,"src/server",server),target,{recursive:true,filter:file=>/\.(html|json|css|js)$/.test(file)||fs.statSync(file).isDirectory()})
    for(const file of ["icon.png","sw.js"]) fs.copyFileSync(path.resolve(ROOT,"src/server",file),path.join(target,file))
}
const manifest=(await import("./lib.mjs")).loadModel().manifest
write(`${CACHE}/runtime-build.json`,json({sourceRevision:manifest.sourceRevision,sourceFingerprint:manifest.sourceFingerprint,destination,node:process.version,built:new Date().toISOString(),sourceModified:false,port3000Used:false,instrumentation:"test entries expose existing renderer stores/helpers and backend classes"}))
console.log(`Runtime app built at ${destination}`)
