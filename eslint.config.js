import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from "eslint-plugin-react"
import jsxA11y from "eslint-plugin-jsx-a11y"
import jest from "eslint-plugin-jest"
import stylistic from '@stylistic/eslint-plugin'
import simpleImportSort from "eslint-plugin-simple-import-sort"
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'build', 'lib']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      "@stylistic/indent": ["warn", "tab"],
      "react/jsx-indent": ["error", "tab"],
      "react/jsx-indent-props": ["error", "tab"],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    extends: [jest.configs["flat/recommended"]],
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
])
