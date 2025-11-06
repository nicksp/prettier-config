// @ts-check
import { fileURLToPath } from 'node:url'

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 70,
        proseWrap: 'never',
        trailingComma: 'none',
      },
    },
  ],
  plugins: [fileURLToPath(import.meta.resolve('@prettier/plugin-oxc'))],
}

export default config
