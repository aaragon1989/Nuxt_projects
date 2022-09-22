module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended', 
    'plugin:import/recommended',
    'prettier',
    'plugin:import/typescript',
    'plugin:vue/essential'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', '.'],
          ['@', '.']
        ],
        extensions: ['.ts', '.js', '.json']
      }
    }
  }
}
