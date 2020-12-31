# VueJS

### 安装

#### `一、直接通过cdn引入`

```javascript
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

#### `二、下载引入`
```text
开发环境: https://vuejs.org/js/vue.js
生产环境: https://vuejs.org/js/vue.min.js
```

#### `三、npm安装`

在用Vue构建大型应用时推荐使用npm安装, npm可以很好的和诸如`webpack`或`Browserify`模块打包器配合使用, 同时Vue也提供配套工具来开发单文件组件

```bash
# 最新稳定版
npm install vue
```

#### `四、命令行工具(CLI)`

Vue提供了一个官方的CLI, 为单页面应用(SPA)快速搭建繁杂的脚手架, 它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

注意: 不推荐新手直接使用脚手架工具！
