import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx(), react(), solidJs(), tailwind()],
  output: "server",
})
