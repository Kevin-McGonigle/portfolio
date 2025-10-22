import { includeIgnoreFile } from "@eslint/compat"
import js from "@eslint/js"
import astro from "eslint-plugin-astro"
import prettier from "eslint-plugin-prettier/recommended"
import { defineConfig } from "eslint/config"
import { fileURLToPath, URL } from "node:url"

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url))

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...astro.configs.recommended,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
  },
])
