// @ts-check

/** @type {import("prettier").Config} */
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
}

export default config
