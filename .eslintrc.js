module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', 80],
    quotes: ['error', 'single'],
    semi: 'error',
    'comma-dangle': 'error',
    indent: 'off',
    'no-trailing-spaces': 'error',
    'no-console': 'warn',
    'no-eval': 'error'
  }
};
