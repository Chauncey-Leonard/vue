# VueJS

### 一、安装

#### `1.直接通过cdn引入`

```javascript
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

#### `2.下载引入`
```text
开发环境: https://vuejs.org/js/vue.js
生产环境: https://vuejs.org/js/vue.min.js
```

#### `3.npm安装`

在用Vue构建大型应用时推荐使用npm安装, npm可以很好的和诸如`webpack`或`Browserify`模块打包器配合使用, 同时Vue也提供配套工具来开发单文件组件

```bash
# 最新稳定版
npm install vue
```

#### `4.命令行工具(CLI)`

Vue提供了一个官方的CLI, 为单页面应用(SPA)快速搭建繁杂的脚手架, 它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

注意: 不推荐新手直接使用脚手架工具！

### 二、Hello VueJS

`html`

```html
<div id="app"></div>
```

`script`

```javascript
/**
 * 创建Vue实例: 编程范式 -> 声明式编程
 * let(变量) / const(常量)
 *
 * options:
 *  - el: 用于挂载要管理的元素
 *  - data: 定义数据
 *
 * 传统js做法: 编程范式 -> 命令式编程
 *  - 创建div元素, 设置id属性
 *  - 定义一个message变量
 *  - 将message变量放在前面定义的div元素中显示
 */
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueJS'
  }
})
```

### 三、Vue属性(部分)

-   el: string | HTMLElement, 决定之后Vue实例会管理哪一个DOM
-   data: Object | Function, Vue实例对应的数据对象
-   methods: { }, 定义属于Vue的一些方法, 可以在其他地方调用, 也可以在指令中调用

### 四、v-bind

动态绑定属性, 语法糖: `:`, 如`:src`, `:href`

html

```html
<div id="app">
  <img :src="imageUrl" alt="">
</div>
```

js

```javascript
const app = new Vue({
  el: '#app',
  data: {
    imageUrl: 'https://cn.bing.com/th?id=OHR.LargestCave_ZH-CN2069899703_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
  }
})
```

#### 1.动态绑定class-对象语法

动态绑定样式时, 值可以为对象`:class="{key1: boolean, key2: boolean}"`

html

```html
<div id="app">
  <h1 :class="{active: isActive}">Chauncey</h1>
  <button @click="clickHandler">Click Me</button>
</div>
```

js

```javascript
const app = new Vue({
  el: '#app',
  data: {
    isActive: true
  },
  methods: {
    clickHandler() {
      this.isActive = !this.isActive;
    }
  }
})
```
