module.exports = {
    globals: {
        "React": "writable"
    },
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'react-hooks'
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
};