module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'func-names': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [2, {}],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 0,
    'linebreak-style': 0,
    'lines-between-class-members': 0,
    'no-console': 0,
    'no-irregular-whitespace': 0,
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 1,
    'prefer-destructuring': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    'import/internal-regex': '^src',
  },
};
