import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    rules: {
      'no-console': 'off',
      'style/arrow-parens': 'off',
      'node/prefer-global/process': 'off',
      'no-unused-vars': 'off',
      'style/brace-style': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)
