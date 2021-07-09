module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  jsxSingleQuote: true,
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
}

