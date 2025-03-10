## 技术框架


- Vue3
- Vite
- Element-Plus
- tailwindcss
- iconify
- ~~Eslint + Prettier~~

## 代码格式化方案

以下方案已废弃，改用[@antfu/eslint-config](https://github.com/antfu/eslint-config)

~~在VSCode的setting.json中加入如下配置，即可在保存文件时自动按eslint规则修复代码~~

```JavaScript
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```
~~Prettier 配置规则 > ESLint 配置规则~~

~~在 .eslintrc.js 添加 prettier 插件~~

```JavaScript
module.exports = {
  ...
  extends: [
    'plugin:vue/vue3-essential',    
    'plugin:prettier/recommended' // 添加 prettier 插件
    'eslint:recommended'
  ],
  ...
}
```
~~这样，我们在执行 eslint --fix 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码，轻松解决二者冲突问题。~~

## 格式化代码最新方案

使用[@antfu/eslint-config](https://github.com/antfu/eslint-config)

不需要安装 prettier，也能自动按照 eslint 规则格式化代码，更加简洁

```
pnpm dlx @antfu/eslint-config@latest
```

按提示操作即可

`.vscode/settings.json`不要`.gitignore`掉，使用里面的配置，可以保存文件自动按照 eslint 规则格式化代码。禁用 prettier，使用 `eslint-plugin-format`

