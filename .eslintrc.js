module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  // plugins: [
  //   'vue',
  // ],
  rules: {
    'import/no-unresolved': 'off',
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/singleline-html-element-content-newline': 0
  },
};
