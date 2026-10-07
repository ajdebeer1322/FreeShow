import path from "path"

/** Get the next free copy name for a file: "Sunrise.jpg" => "Sunrise 2.jpg", "Sunrise 2.jpg" => "Sunrise 3.jpg" */
export function getNextCopyPath(sourcePath: string, exists: (filePath: string) => boolean): string {
    const { dir, name, ext } = path.parse(sourcePath)

    // continue the number if the file is already a copy
    const numbered = name.match(/^(.*\S) (\d+)$/)
    const baseName = numbered ? numbered[1] : name

    let number = 2
    let candidate = path.join(dir, `${baseName} ${number}${ext}`)
    while (exists(candidate)) {
        number++
        candidate = path.join(dir, `${baseName} ${number}${ext}`)
    }

    return candidate
}
