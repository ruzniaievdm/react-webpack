module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'webpack-configs/*',
    'node_modules/*',
    'build/*',
    'webpack.config.js',
    'webpack-configs/common.js',
    'webpack-configs/dev.js',
    'webpack-configs/prod.js',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: { colon: { before: false, after: true } },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
    ],
    'one-var': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'quotes': ['error', 'single'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'curly': 'error',
    'function-paren-newline': ['error', 'multiline-arguments'],
    'max-len': ['error', { code: 120 }],
    'space-unary-ops': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'keyword-spacing': ['error', { before: true }],
    'space-in-parens': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'space-infix-ops': 'error',
    'eol-last': ['error', 'always'],
    'newline-before-return': 'error',
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message:
          'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
      },
    ],
  },
}
