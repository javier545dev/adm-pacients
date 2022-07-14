module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-useless-return': 'off',
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['off', {}, { usePrettierrc: true }] // Includes .prettierrc.js rules
  }
}
