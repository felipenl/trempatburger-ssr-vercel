import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import a11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import prettierConfig from './prettier.config.mjs'

export default [
  {
    ignores: ['dist', 'node_modules', '.react-router', 'build', '**/*.d.ts'],
  },
  ...ts.configs.recommended,
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { react, 'react-hooks': hooks, 'jsx-a11y': a11y },
    settings: { react: { version: 'detect' } },
    rules: {
      ...(react.configs.recommended?.rules ?? {}),
      ...(hooks.configs.recommended?.rules ?? {}),
      ...(a11y.configs.recommended?.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': ['error', prettierConfig] },
  },
  eslintConfigPrettier,
]
