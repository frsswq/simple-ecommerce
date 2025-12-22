//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
      'import/order': 'off',
      indent: ['error', 2],
      'object-curly-spacing': ['error', 'always'],
    },
  },
]
