import js from "@eslint/js"
import astro from "eslint-plugin-astro"
import prettier from "eslint-plugin-prettier/recommended"

export default [
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
]
