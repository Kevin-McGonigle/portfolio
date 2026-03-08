import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/static"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  env: {
    schema: {
      ADDRESS: envField.string({ context: "client", access: "public" }),
      ADDRESS_MAP_URL: envField.string({ context: "client", access: "public" }),
      SPARE_KEY_LOCATION: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  integrations: [mdx(), react()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
})
