const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
  extends: [...extendConfigs],
  overrides: [
    ...overrides,
    {
      files: ['*.test.js', '.ts', '.tsx', '.js'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error'],
      },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
} // module.exports = createConfig({ type: 'frontend' })
