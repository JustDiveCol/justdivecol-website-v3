/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json', // 👈 ESLint usará este tsconfig
    tsconfigRootDir: __dirname,
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vitest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Si no quieres reglas type-aware, elimina la siguiente línea:
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    // Tus reglas globales (si tienes)
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
      env: {
        'vitest/globals': true, // describe/it/expect disponibles
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
