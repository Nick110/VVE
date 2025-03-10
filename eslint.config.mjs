import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: {
    overrides: {
      // enforce order of component top-level elements 自定义 Vue 文件中标签的顺序，模板 -> 脚本 -> 样式
      'vue/block-order': ['warn', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
}, {
  // 第三部分，额外的规则配置
  rules: {
    // 警告级别规则：将规则的值设置为 1 或 'warn'，表示违反该规则时会给出警告信息，但不会阻止代码继续执行
    // 禁用规则：将规则的值设置为 0 或 'off'，表示不启用该规则
    // 错误级别规则：将规则的值设置为 2 或 'error'，表示违反该规则时会给出错误信息，并且可能会阻止代码构建或提交
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
})
