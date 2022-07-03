const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
  extends: [...extendConfigs],
  overrides: [...overrides],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: ['import'],
  ignorePatterns: ['**/*.html'],
  rules: {
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
