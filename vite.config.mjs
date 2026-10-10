import { defineConfig } from "vite"
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const production = process.env.NODE_ENV === "production"

export default defineConfig({
    plugins: [
        svelte({
            preprocess: vitePreprocess(),
            compilerOptions: {
                dev: !production
            },
            onwarn: (warning, handler) => {
                // disable A11y warnings
                if (warning.code.startsWith("a11y_")) return
                // Svelte 5 warns about every self-closing non-void tag (e.g. <div />); the compiler still
                // treats them as before. svelte-check keeps reporting them.
                if (warning.code === "element_invalid_self_closing_tag") return
                handler(warning)
            }
        })
    ],
    root: production ? "." : "public",
    publicDir: false,
    build: production
        ? {
              lib: {
                  entry: "src/frontend/main.ts",
                  name: "freeshow",
                  formats: ["iife"],
                  fileName: () => "bundle.js"
              },
              outDir: "public/build",
              emptyOutDir: false,
              rollupOptions: {
                  output: {
                      assetFileNames: (assetInfo) => {
                          if (assetInfo.name.endsWith(".css")) {
                              return "bundle.css"
                          }
                          return assetInfo.name
                      }
                  }
              }
          }
        : {
              outDir: "../dist",
              rollupOptions: {
                  input: "index.html"
              }
          },
    server: {
        port: 3000,
        host: "127.0.0.1",
        strictPort: true,
        middlewareMode: false
    },
    resolve: {
        dedupe: ["svelte"],
        ...(!production && { alias: { "/src": "../src" } })
    }
})
