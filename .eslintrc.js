module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': 'off',
    // "vue/component-name-in-template-casing":  ["error",
    // { 'PascalCase': 'off' },
    // {
    //   "ignores": ['nuxt-link', 'nuxt', 'nuxt-child', 'nuxt-error']
    // }],
    semi: ['error', 'never'],
    // 未找到文件不报错
    'import/no-unresolved': 'off',
    // 没有依赖
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
  }
}
