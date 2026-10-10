import fs from "node:fs"
import path from "node:path"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { ROOT, CACHE, loadModel, read, readJson, write, json, hash, git, slug, chunks, sourceLink, escape } from "./lib.mjs"
const run=promisify(execFile)
const model=loadModel(), revision=model.manifest.sourceRevision
const forkCommits=new Set(git(["rev-list",revision,"--not","upstream/main"]).split("\n"))
const metadata=new Map()
const fields=git(["log",revision,"--format=%H%x00%cs%x00%B%x00"]).split("\0")
for(let i=0;i+2<fields.length;i+=3) metadata.set(fields[i].trim(),{commit:fields[i].trim(),date:fields[i+1],message:fields[i+2].trim()})
const hotspot=/^src\/frontend\/(?:components\/output\/|components\/media\/|components\/slide\/(?:Textbox|TextboxLines|Video)\.svelte|components\/slide\/(?:textStyle|autosizeCache)\.ts|components\/edit\/scripts\/autosize\.ts|components\/edit\/editbox\/|components\/helpers\/(?:showActions|output|OutputHelper|media|video)[^/]*\.|utils\/(?:save|listeners|receivers|request|video)\.|IPC\/)|^src\/electron\/(?:output\/|capture\/|ndi\/|omt\/|blackmagic\/|IPC\/|data\/save)/
const items=[...model.timers.map(item=>({...item,category:"timing"})),...model.workarounds.map(item=>({...item,category:"workaround"})),...model.files.filter(file=>hotspot.test(file.file)).map(file=>({id:`hotspot-${hash(file.file).slice(0,16)}`,file:file.file,line:file.symbols.find(symbol=>["ClassDeclaration","FunctionDeclaration"].includes(symbol.kind))?.line || 1,category:"hotspot",kind:"module",code:file.file}))]
// Explicit fork decisions preserve commit intent independently of old module origins.
for (const commit of [...forkCommits].sort()) {
    const files = git(["diff-tree", "--no-commit-id", "--name-only", "-r", commit]).split("\n").filter(file => model.files.some(item => item.file === file))
    if (!files.length) continue
    const file = files.find(file => !file.endsWith(".test.ts")) || files[0]
    const patch = git(["show", "--format=", commit, "--", file])
    const additions = patch.split("\n").filter(line => line.startsWith("+") && !line.startsWith("+++")).map(line => line.slice(1)).filter(line => line.trim().length > 20 && !/^\s*(?:import|export.*from)/.test(line))
    const lines = read(file).split(/\r?\n/), index = lines.findIndex(line => additions.includes(line))
    items.push({ id: `fork-${commit.slice(0,16)}`, file, line: index >= 0 ? index+1 : 1, category: "fork-feature", kind: "fork decision", code: metadata.get(commit)?.message.split("\n")[0], explicitCommit: commit, changedFiles: files })
}
async function cachedGit(args,key) {
    const file=`${CACHE}/git/${hash(revision+"\0"+key)}.json`, cached=readJson(file)
    if(cached) return cached
    let result
    try {const value=await run("git",args,{cwd:ROOT,maxBuffer:32*1024*1024});result={output:value.stdout.trim(),error:null}}
    catch(error) {result={output:"",error:error.stderr?.trim() || error.message}}
    write(file,json(result));return result
}
const blames=new Map()
for(const file of [...new Set(items.map(item=>item.file))]) {
    const result=await cachedGit(["blame","--line-porcelain",revision,"--",file],`blame:${file}`),lines=new Map()
    for(const match of result.output.matchAll(/^([0-9a-f]{40}) (\d+) (\d+)(?: \d+)?$/gm)) lines.set(Number(match[3]),match[1])
    blames.set(file,lines)
}
const causal=/because|prevent|avoid|ensure|otherwise|(?:svelte|transition).{0,40}bug|wait (?:for|until)|so (?:that|the)|(?:fix|workaround).{0,80}(?:bug|issue|crash|flash|stuck|race)/i
const records=new Array(items.length)
const descendantPromises=new Map()
async function descendants(commit) {
    if(!descendantPromises.has(commit))descendantPromises.set(commit,cachedGit(["rev-list","--ancestry-path",`${commit}..${revision}`],`descendants:${commit}`).then(result=>new Set(result.output.split("\n"))))
    return descendantPromises.get(commit)
}
let next=0, complete=0
async function worker() {
    while(next<items.length) {
        const index=next++,item=items[index], file=model.files.find(file=>file.file===item.file),source=read(item.file),lineText=source.split(/\r?\n/)[item.line-1].trim()
        const lineage=await cachedGit(["log",revision,"--format=%H","--no-patch","-L",`${item.line},${item.line}:${item.file}`],`lineage:${item.file}:${item.line}`)
        const changes=lineage.output.split("\n").filter(value=>/^[a-f0-9]{40}$/.test(value)),earliest=changes.at(-1)
        let introduction=item.explicitCommit || earliest, method="git log -L (earliest tracked source-line ancestor)", pickaxe=null
        const needle=item.category==="workaround" ? item.text.trim() : lineText
        if(!item.explicitCommit && needle.length>=24 && source.split(needle).length===2) {
            const result=await cachedGit(["log",revision,"--follow",`-S${needle}`,"--format=%H","--",item.file],`pickaxe:${item.file}:${needle}`)
            const commits=result.output.split("\n").filter(value=>/^[a-f0-9]{40}$/.test(value))
            pickaxe={needle,commits,error:result.error}
            if(commits.length) {introduction=commits.at(-1);method="git log -S --follow (earliest exact-text occurrence in file lineage)"}
        }
        if(item.explicitCommit) method="Explicit fork commit; source anchor is representative, not the full feature boundary"
        const intro=metadata.get(introduction),latest=metadata.get(blames.get(item.file)?.get(item.line)),repo=forkCommits.has(introduction)?"ajdebeer1322/FreeShow":"ChurchApps/FreeShow"
        const ownComments=item.category==="workaround" ? [{file:item.file,line:item.line,text:item.text}] : file.comments.filter(comment=>comment.line<=item.line+1 && comment.endLine>=item.line-3)
        const comment=ownComments.find(comment=>causal.test(comment.text))
        let why=comment ? `Code comment: “${comment.text.trim()}”` : "Unresolved: local history identifies an addition/edit but gives no item-specific motive."
        let confidence=comment?"code":"guess",sourcedWhy=!!comment
        if(item.explicitCommit && intro) {why=`Fork decision: “${intro.message}”`;confidence="code";sourcedWhy=true}
        if(!item.explicitCommit && !comment && intro && forkCommits.has(introduction) && !/^(?:Phase \d|Document|Add an output timing test)/.test(intro.message)) {why=`Fork commit states: “${intro.message}”. This is commit-level intent; finer item-specific intent is unresolved.`;confidence="guess";sourcedWhy=false}
        const id=`D-${item.id}`,document=`docs/ai/history/records/${slug(item.file)}-${Math.floor(items.filter(other=>other.file===item.file).findIndex(other=>other.id===item.id)/16)+1}.md`,after=intro?await descendants(introduction):new Set()
        records[index]={id,itemId:item.id,category:item.category,file:item.file,line:item.line,endLine:item.endLine || item.line,sourceHash:file.hash,changedFiles:item.changedFiles || [],what:item.category==="workaround"?item.text:item.category==="timing"?`${item.kind}: ${item.expression} (${item.valueMs ?? "dynamic"} ms)`:item.category==="fork-feature"?item.code:`Module hotspot: ${item.file}`,introduction:intro?{...intro,method,url:`https://github.com/${repo}/commit/${introduction}`,limits:"Exact-text/line provenance is not proof of when the broader feature began; moves and rewrites can change lineage."}:null,latestEdit:latest || null,lineage:changes,pickaxe,laterChanges:changes.filter(commit=>after.has(commit)).map(commit=>metadata.get(commit)).filter(Boolean),forkFeature:forkCommits.has(introduction),why,confidence,sourcedWhy,sources:[...(intro?[{kind:"commit",commit:introduction,quote:intro.message,url:`https://github.com/${repo}/commit/${introduction}`}]:[]),...(comment?[{kind:"comment",ref:`${comment.file}:${comment.line}`,quote:comment.text}]:[])],historyError:lineage.error,github:[],document}
        complete++
        if(complete%100===0) console.log(`Local history: ${complete}/${items.length}`)
    }
}
await Promise.all(Array.from({length:4},worker))
// Only needed release PRs and linked issues, with a persistent read-only cache.
let ghAuthenticated=false
try {await run("gh",["auth","status"],{cwd:ROOT});ghAuthenticated=true}catch{}
let remaining=60,requests=0, stopped=null
async function github(kind,number,repo="ChurchApps/FreeShow") {
    const file=`${CACHE}/github/${repo.replace("/","_")}/${kind}-${number}.json`,cached=readJson(file)
    if(cached?.data) return cached
    if(stopped) return {error:stopped}
    try {
        let data
        if(ghAuthenticated) {
            requests++
            const result=await run("gh",[kind==="pulls"?"pr":"issue","view",String(number),"-R",repo,"--json","number,title,body,url,createdAt,closedAt"],{maxBuffer:8*1024*1024});data=JSON.parse(result.stdout)
        } else {
            if(remaining<=5 || requests>=55) {stopped="Unauthenticated GitHub API quota reserve reached; login required for remaining sources.";return {error:stopped}}
            const response=await fetch(`https://api.github.com/repos/${repo}/${kind}/${number}`,{headers:{"Accept":"application/vnd.github+json","User-Agent":"FreeShow-ai-map-read-only"}})
            remaining=Number(response.headers.get("x-ratelimit-remaining") || remaining-1);requests++
            if(!response.ok) {if([403,429].includes(response.status)) stopped=`GitHub ${response.status}; rate limit remaining=${remaining}; reset=${response.headers.get("x-ratelimit-reset")}`;throw new Error(`GitHub ${response.status}`)}
            const raw=await response.json();data={number:raw.number,title:raw.title,body:raw.body || "",url:raw.html_url,createdAt:raw.created_at,closedAt:raw.closed_at}
        }
        const result={data};write(file,json(result));return result
    } catch(error) {return {error:error.message}}
}
const tokenise=text=>new Set((text.toLowerCase().match(/[a-z][a-z0-9_-]{3,}/g)||[]).filter(word=>!["const","return","function","timeout","settimeout","data","true","false","this","value","output","from","with","that","when","have","will","items","show","slide"].includes(word)))
const needed=new Map()
for(const record of records) for(const commit of [record.introduction,record.latestEdit]) {
    const number=/\(#(\d+)\)/.exec(commit?.message || "")?.[1]
    if(number) needed.set(Number(number),(needed.get(Number(number))||0)+(record.category==="workaround"?10:1))
}
const fetched=new Map()
for(const [number] of [...needed].sort((a,b)=>b[1]-a[1])) {
    const result=await github("pulls",number);fetched.set(number,result)
    console.log(`Release PR #${number}: ${result.data?"cached/read":result.error}`)
}
for(const record of records) {
    const contextTokens = tokenise(record.what + " " + record.file.split("/").at(-1))
    for (const commit of [record.introduction, record.latestEdit]) {
        const bullets = (commit?.message || "").split(/\r?\n/).filter(line => /^\s*[-*]\s/.test(line))
        const ranked = bullets.map(quote => ({quote,score:[...tokenise(quote)].filter(word => contextTokens.has(word)).length})).sort((a,b) => b.score-a.score)
        if (ranked[0]?.score >= 2) {
            record.sources.push({kind:"commit-bullet-candidate",commit:commit.commit,url:`https://github.com/ChurchApps/FreeShow/commit/${commit.commit}`,quote:ranked[0].quote,confidence:"guess"})
            if (!record.sourcedWhy) record.why += ` Possible bundled commit bullet [guess]: “${ranked[0].quote}”.`
        }
    }
    for(const commit of [record.introduction,record.latestEdit]) {
        const number=Number(/\(#(\d+)\)/.exec(commit?.message || "")?.[1]);if(!number) continue
        const result=fetched.get(number),entry={kind:"pr",number,url:`https://github.com/ChurchApps/FreeShow/pull/${number}`,error:result?.error || null,match:null}
        if(result?.data) {
            const context=[record.what,...model.files.find(file=>file.file===record.file).comments.filter(comment=>Math.abs(comment.line-record.line)<5).map(comment=>comment.text),record.file.split("/").at(-1)].join(" "),tokens=tokenise(context)
            const bullets=result.data.body.split(/\r?\n/).filter(line=>/^\s*(?:[-*•]|\d+\.)\s/.test(line))
            const ranked=bullets.map(bullet=>({quote:bullet,score:[...tokenise(bullet)].filter(word=>tokens.has(word)).length})).sort((a,b)=>b.score-a.score)
            if(ranked[0]?.score>=2) {
                entry.match={...ranked[0],confidence:"guess",reason:"Lexical candidate only; bundled release bullet attribution needs manual review."}
                record.sources.push({kind:"release-bullet-candidate",url:result.data.url,quote:ranked[0].quote,confidence:"guess"})
                if(!record.sourcedWhy) record.why+=` Possible release bullet [guess]: “${ranked[0].quote}”.`
                const numbers=[...ranked[0].quote.matchAll(/(?:issues\/|#)(\d{1,6})/g)].map(match=>Number(match[1])).filter(value=>value!==number)
                for(const issueNumber of [...new Set(numbers)].slice(0,3)) {
                    const issue=await github("issues",issueNumber)
                    record.github.push({kind:"issue",number:issueNumber,url:issue.data?.url || `https://github.com/ChurchApps/FreeShow/issues/${issueNumber}`,error:issue.error || null,quote:issue.data?.body?.slice(0,4000) || null,confidence:"guess"})
                }
            }
        }
        record.github.push(entry)
    }
    // A release body can be empty even when the squash message links an issue.
    // Read only issue numbers in candidate bullets or comments in the record's scope.
    const comments=model.files.find(file=>file.file===record.file).comments.filter(comment=>record.category==="hotspot" || Math.abs(comment.line-record.line)<8)
    const issueLinks=new Map()
    for(const comment of comments)for(const match of comment.text.matchAll(/https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\/issues\/(\d+)/g))issueLinks.set(`${match[1]}#${match[2]}`,{repo:match[1],number:Number(match[2]),source:`${record.file}:${comment.line}`,quote:comment.text,confidence:"code"})
    for(const source of record.sources.filter(source=>source.kind==="commit-bullet-candidate"))for(const match of source.quote.matchAll(/#(\d{1,6})\b/g))issueLinks.set(`ChurchApps/FreeShow#${match[1]}`,{repo:"ChurchApps/FreeShow",number:Number(match[1]),source:source.url,quote:source.quote,confidence:"guess"})
    for(const link of issueLinks.values()) {
        const issue=await github("issues",link.number,link.repo)
        record.github.push({kind:"issue",number:link.number,repo:link.repo,url:issue.data?.url || `https://github.com/${link.repo}/issues/${link.number}`,error:issue.error || null,quote:issue.data?.body || null,confidence:link.confidence,linkSource:link.source,linkQuote:link.quote})
        if(issue.data)record.sources.push({kind:"linked-issue",url:issue.data.url,quote:issue.data.body || issue.data.title,confidence:"guess"})
    }
}
const tableFiles=[]
chunks(records,25).forEach((part,index)=>{const file=`docs/ai/history/data/${String(index+1).padStart(3,"0")}.json`;write(file,json(part));tableFiles.push(file)})
const byDoc=new Map()
for(const record of records) {if(!byDoc.has(record.document)) byDoc.set(record.document,[]);byDoc.get(record.document).push(record)}
for(const [doc,part] of byDoc) write(doc,`# Decision records: ${part[0].file}\n\nEvidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.\n\n`+part.map(record=>`## ${record.id}\n\n[${record.confidence}] ${escape(record.what)}\n\nLocation: ${sourceLink(record,doc)}. Category: ${record.category}${record.forkFeature?"; fork feature":""}.\n\nAdded/traced: ${record.introduction?`[${record.introduction.commit.slice(0,8)}](${record.introduction.url}) on ${record.introduction.date}; ${record.introduction.method}.`:"Unresolved."}\n\n${escape(record.why)}\n\nSources:\n\n${record.sources.map(source=>`- [${source.confidence || "code"}] ${source.url?`[source](${source.url})`:source.ref}: “${escape(source.quote)}”`).join("\n") || "- No historical source."}\n\nLater line edits: ${record.laterChanges.length}; latest ${record.latestEdit?.commit.slice(0,8) || "unknown"}. Full commit messages and lineage: JSON query data.\n\nGitHub: ${record.github.map(item=>`[${item.kind} #${item.number}](${item.url})${item.error?` (${item.error})`:item.match?" (candidate match [guess])":" (read; no item-specific matching bullet)"}`).join("; ") || "No release/issue number in the traced commits."}\n`).join("\n"))
const workaround=records.filter(record=>record.category==="workaround"),sourced=workaround.filter(record=>record.sourcedWhy).length
const index={sourceRevision:revision,tables:tableFiles,totals:{records:records.length,timing:model.timers.length,workarounds:workaround.length,hotspotModules:records.filter(record=>record.category==="hotspot").length,sourcedWorkaroundWhy:sourced,sourcedWorkaroundWhyPercent:Number((100*sourced/workaround.length).toFixed(1)),unresolvedIntroductions:records.filter(record=>!record.introduction).length,neededPRs:needed.size,fetchedPRs:[...fetched.values()].filter(value=>value.data).length,githubAuthenticated:ghAuthenticated,githubRequests:requests,githubGap:stopped,fetchedPRsWithEmptyBody:[...fetched.values()].filter(value=>value.data && !value.data.body).length,forkDecisions:records.filter(record=>record.category==="fork-feature").length},documents:[...byDoc.keys()]}
write("docs/ai/history/index.json",json(index))
write("docs/ai/history/README.md",`# Why and provenance\n\n${records.length} records: every ${model.timers.length} timing entry and ${model.workarounds.length} workaround comment, plus ${index.totals.hotspotModules} hotspot modules.\n\n${sourced}/${workaround.length} workaround motives (${index.totals.sourcedWorkaroundWhyPercent}%) have an explicit causal code comment. Release-bullet candidates and generic fork commit messages do not count as item-specific sourced motives.\n\n## Method and limits\n\n- [code] \`git blame --line-porcelain\` records the latest edit; \`git log -L\` traces each line; unique exact text also uses \`git log -S --follow\`. Dates/quotes are copied from commits, never inferred from a release date.\n- [guess] Earliest tracked text can represent a move or rewrite rather than the start of the broader behavior. Full lineage and pickaxe needles are preserved in JSON. Initial repository imports limit older history.\n- [guess] Bundled release bullets are lexical candidates, never asserted as reasons without manual confirmation. Both introduction and latest-edit PRs are considered; only candidate-linked issue numbers are read.\n- [code] GitHub reads are cached in the gitignored \`docs/ai/.cache/\`; authenticated CLI is preferred, public API fallback reserves quota and stops on 403/429. Needed PRs: ${needed.size}; fetched/cached: ${index.totals.fetchedPRs}; empty bodies: ${index.totals.fetchedPRsWithEmptyBody}. Bundled bullets are available in local squash commit messages even when the PR body is empty; candidates are labeled by their actual source. ${stopped || "No rate-limit stop."}\n- [code] Fork classification uses commit ancestry relative to \`upstream/main\` at generation. No remote writes are performed.\n\nRun \`node scripts/ai-map/history.mjs\` to rebuild, then review guesses. Query with \`npm run ai:ask -- why <file>:<line>\`.\n\n## Records\n\n`+[...byDoc.keys()].map(doc=>`- [${doc.split("/").at(-1)}](${path.relative("docs/ai/history",doc)})`).join("\n")+"\n")
console.log(JSON.stringify(index.totals))
