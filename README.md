[从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622#heading-14)

在VSCode的setting.json中加入如下配置，即可在保存文件时自动按eslint规则修复代码
```JavaScript
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```
Prettier 配置规则 > ESLint 配置规则

在 .eslintrc.js 添加 prettier 插件

```JavaScript
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```
这样，我们在执行 eslint --fix 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码，轻松解决二者冲突问题。
