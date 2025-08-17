module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: true },
  },
  env: { browser: true, es2021: true, node: true },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Prettier como error visible en ESLint:
    'prettier/prettier': 'error',

    // Orden real de imports/exports:
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Evita conflictos con otras reglas de orden de import:
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // TS/React ajustes comunes:
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
  ],
};
