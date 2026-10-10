import test from "node:test"
import assert from "node:assert/strict"
import {validateReference,docReferences} from "./check.mjs"
const model={files:[{file:"src/A.ts",lineCount:2,symbols:[{name:"present"}]}],stores:[]}
test("rejects absent files, moved anchors, deleted symbols and out-of-range lines",()=>{
    assert.match(validateReference({file:"src/B.ts"},model,""),/Missing source/)
    assert.match(validateReference({file:"src/A.ts",line:3},model,"x\ny"),/Missing line/)
    assert.match(validateReference({file:"src/A.ts",symbol:"gone"},model,"x\ny"),/Missing symbol/)
    assert.match(validateReference({file:"src/A.ts",line:1,excerpt:"y"},model,"x\ny"),/anchor changed/)
    assert.equal(validateReference({file:"src/A.ts",line:2,excerpt:"y",symbol:"present"},model,"x\ny"),null)
})
test("plain doc references exclude dependency/remote paths and preserve lines/symbols",()=>{
    assert.deepEqual(docReferences("src/A.ts:2 src/A.ts#present src/A.ts#L1 lite-youtube-embed/src/lite-yt-embed.js https://host/src/B.ts"),[{file:"src/A.ts",line:2},{file:"src/A.ts",symbol:"present"},{file:"src/A.ts",line:1}])
})
