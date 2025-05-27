import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/static"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx(), react()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
})
