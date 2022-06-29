<!--
 * @Author: juan_lj juan_lj@kingdee.com
 * @Date: 2022-06-14 15:31:19
 * @LastEditors: juan_lj juan_lj@kingdee.com
 * @LastEditTime: 2022-06-20 10:49:57
 * @FilePath: \mobile-platform-vue3\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# mobile-platform-vue3

## 项目启动

```
npm install
```

### 开发环境编译命令

```
npm run dev
```

### 正式环境编译命令

```
npm run build
```

## 项目介绍

基于 vue3 的移动端平台项目

## 项目目录

```

mobile-platform-vue3
   ├─ .vscode
   │  ├─ extensions.json
   │  └─ settings.json
   ├─ public
   │  └─ favicon.ico
   ├─ src
   │  ├─ assets
   │  │  └─ logo.png
   │  ├─ components
   │  │  └─ hello-world
   │  │     ├─ index.vue
   │  │     └─ store.ts
   │  ├─ locale
   │  │  ├─ lang
   │  │  │  ├─ en-US.ts
   │  │  │  └─ zh-CN.ts
   │  │  ├─ index.ts
   │  │  └─ store.ts
   │  ├─ mock
   │  ├─ page
   │  │  ├─ login
   │  │  │  ├─ index.vue
   │  │  │  └─ store.ts
   │  │  ├─ home
   │  │  │  ├─ index.vue
   │  │  │  └─ store.ts
   │  │  └─...
   │  ├─ router
   │  │  ├─ index.ts
   │  │  └─ routes.ts
   │  ├─ theme
   │  ├─ utils
   │  ├─ App.vue
   │  ├─ env.d.ts
   │  ├─ main.ts
   │  ├─ store.ts
   │  └─ style.less
   ├─ .env.dev
   ├─ .env.prod
   ├─ .env.test
   ├─ .eslintrc.js
   ├─ .prettierrc.js
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   └─ vite.config.ts

```

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 已安装

- mockjs + axios + vant + vConsole + vue-router + vuex + eslint + prettier

## IDE 配置

1. VSCode 版本推荐 [x64-1.68.1](https://vscode.cdn.azure.cn/stable/30d9c6cd9483b2cc586687151bcbcd635f373630/VSCodeUserSetup-x64-1.68.1.exe) (修复了 Windows 系统下，无法定位到路径文件问题)
2. 安装插件 TypeScript Vue Plugin(Volar)和插件 Vue Language Features(Volar)
3. Disable 掉内置插件 TypeScript and JavaScript Language Features（和 Vetur）

## 代码格式化

- VSCode 安装代码规范检测、格式化插件 ESLint + Prettier + Volar；
- .vscode => settings.json 中已配置自动化格式功能，编写代码后会自动进行代码校验及格式化。也可在终端运行 lint/format 脚本进行校验/格式化操作；
- 后期可考虑加入其它校验，如 stylelint/husky/lint-staged...

## 代码规范

- https://iknow.kingdee.com/inbiz/wcm/km/#knode-detail/knodeId/ed640f07-b81b-4fb5-8629-0fb132d3aa59
- https://cn.vuejs.org/v2/style-guide/index.html

## 异常处理

1. 代码中使用 Promise 使用时错误的捕获使用 Promise.prototype.catch；
2. vue 组件的错误捕获使用实例的 errorHandler；
3. 其他 js 错误的捕获使用 window.onerror。
   注意：从 1-3 依次执行，捕获异常后不继续冒泡。

## 主题

1. 主要是使用了 vant 提供的 ConfigProvider 全局配置对组件样式进行覆盖，同时在 body 标签上增加了主题类名，如`theme_red`
2. 目前包含默认、绿色、红色、橙色四种主题，可在 src/themes 文件夹中新增新的主题
3. 主题数据缓存在 localStorage 中，使用 vuex 对主题进行状态管理
4. 定制 vant 组件主题样式步骤
   Ⅰ. 打开 https://github.com/Aisen60/vant-theme 并运行该项目，可视化修改组件样式后，可导出 json 文件
   Ⅱ. 将 json 数据替换至`src/theme/theme_xxx.json`文件中`vant`对象即可
   Ⅲ. 如需调整 vant 组件主题样式，可先在 vant 主题定制项目中导入当前主题的 json 再进行可视化调整，重复 Ⅰ、Ⅱ 步骤即可
5. 自定义组件主题样式步骤
   Ⅰ. 在`src/theme/theme_xxx.json`文件中，`custom`对象增加样式变量，如`MyColor:#1ba854`，vant 会将其转换为`--van-my-color`
   Ⅱ. 在组件样式表中使用 css 变量，如`color:var(--van-my-color)`

vant 主题定制 github 地址：https://github.com/Aisen60/vant-theme

CSS 自定义属性（变量）文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties

## 标准功能

1. 登录模块
2. 设置模块
3. 主页模块
