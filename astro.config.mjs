import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/static"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
})
