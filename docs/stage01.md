# VueJS

### 一、安装

#### `1.直接通过cdn引入`

```html
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

在用Vue构建大型应用时推荐使用npm安装, npm可以很好的和诸如`webpack`或`Browserify`模块打包器配合使用,
同时Vue也提供配套工具来开发单文件组件

```bash
# 最新稳定版
npm install vue
```

#### `4.命令行工具(CLI)`

Vue提供了一个官方的CLI, 为单页面应用(SPA)快速搭建繁杂的脚手架, 它为现代前端工作流提供了 batteries-included
的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

注意: 不推荐新手直接使用脚手架工具！

### 二、Hello VueJS

Mustache 体验Vue响应式

html

```html

<div id="app"></div>
```

js

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

- el: string | HTMLElement, 决定之后Vue实例会管理哪一个DOM
- data: Object | Function, Vue实例对应的数据对象
- methods: { }, 定义属于Vue的一些方法, 可以在其他地方调用, 也可以在指令中调用

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
  <!-- 一、直接通过{}绑定一个class -->
  <h1 :class="{'active': isActive}">Chauncey</h1>
  <!-- 二、可以通过判断传入多个值 -->
  <h1 :class="{'active': isActive, 'name': showName}">Multi</h1>
  <!-- 三、和普通类同时存在的时候, 并不冲突 -->
  <h1 class="normal" :class="{'active': isActive, 'name': showName}">With Normal
    class</h1>
  <!-- 四、如果class过于复杂, 可以放在一个method或computed中 -->
  <h1 :class="getClasses()">With Method Or Computed</h1>
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
    },
    getClasses() {
      return {
        'name': this.showName,
        'active': this.isActive
      }
    }
  }
})
```

#### 2.动态绑定class-数组语法

html

```html

<div id="app">
  <!-- 一、使用字符串 -->
  <h1 :class="['active', 'line']">Bind class by array -- string</h1>
  <!-- 二、使用变量-->
  <h1 :class="[active, line]">Bind class by array -- variable</h1>
</div>
```

js

```javascript
 const app = new Vue({
  el: '#app',
  data: {
    active: 'active',
    line: 'light'
  }
})
```

#### 3.动态绑定style-对象语法

我们可以使用:style来绑定内联样式 在书写css属性名的时候:

- 可以使用驼峰式(camelCase): fontSize
- 或者使用短横线分隔(kebab-case), 需要使用单引号包裹: 'font-size'

style后面跟的是一个对象类型:

- 对象的key是css属性名称
- 对象的value是具体赋的值, 值可以为变量, 即可以来自data中定义的变量

html

```html

<div id="app">
  <h1 :style="{color: currentColor, fontSize: fontSize + 'px'}">
    Bind style by object
  </h1>
  <h1 :style="getStyles()">Bind style by object</h1>
</div>
```

js

```javascript
  const app = new Vue({
  el: '#app',
  data: {
    currentColor: 'yellow',
    fontSize: 16
  },
  methods: {
    getStyles() {
      return {
        background: this.currentColor,
        fontSize: this.fontSize + 'px'
      }
    }
  }
})
```

#### 4.动态绑定style-数组语法

html

```html

<div id="app">
  <p :style="[active, important]">Bind styles by array</p>
</div>
```

js

```javascript
  const app = new Vue({
  el: '#app',
  data: {
    active: {
      background: 'red'
    },
    important: {
      fontSize: '50px'
    }
  }
})
```

### 五、计算属性(computed)

在前面的案例中, 我们已经知道可以使用插值语法显示data中的数据, 模板内使用简单的表达式非常的便利, 但是复杂的逻辑只会使模板过于臃肿, 这时,
我们可以使用计算属性来对复杂的逻辑进行处理.

#### 1.基础案例

```html

<div id="app">
  <h1>{{ fullName }}</h1>
</div>
```

```javascript
const app = new Vue({
  el: '#app',
  data: {
    firstName: 'Chauncey',
    lastName: 'Leonard'
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
```

问题: methods和computed都可以实现我们的功能, 为什么还需要computed?

原因: 计算属性会进行`缓存`, 如果多次使用时, 计算属性只会调用一次

### 六、v-on

v-on:

- 作用: 绑定事件监听器
- 缩写: @
- 预期: Function | Inline Statement | Object
- 参数: event

```html

<div id="app">
  <h1>{{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</div>
```

```javascript
const app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
})
```

在methods中定义方法, 以供@click调用时, 需要注意的参数问题:

- 如果该方法不需要额外的参数, 那么在调用方法时可以省略括号
- 如果在传入其他参数的同时需要event参数, 可以通过$event传入事件

```html

<div id="app">
  <!-- 没有参数 -->
  <button @click="btn1Click">Button1</button>
  <!-- 不省略括号时, 不显式传递event参数, 则event为undefined -->
  <button @click="btn1Click()">Button2</button>
  <!-- 不省略括号时传递event -->
  <button @click="btn2Click($event)">Button3</button>
  <!-- 传递默认参数和额外参数, 顺序无关 -->
  <button @click="btn4Click($event, 'Chauncey')">Button4</button>
</div>
```

v-on中的修饰符: 在某些情况下, 我们拿到event可能是进行一些事件处理

- .stop: 调用event.stopPropagation()
- .prevent: 调用event.preventDefault()
- .{keyCode | keyAlias}: 只当事件是从特定键触发时才触发回调
- .once: 只调用一次回调

```html

<div id="app">
  <!-- 停止冒泡 -->
  <button @click.stop="clickHandler">Button1</button>

  <!-- 阻止默认行为 -->
  <button @click.prevent="clickHandler">Button2</button>

  <!-- 串联修饰符 -->
  <button @click.stop.prevent="clickHandler">Button3</button>

  <!-- 键修饰符、键别名 -->
  <label>
    <input type="text" @keyup.enter="onEnter">
  </label>

  <!-- 键修饰符、键代码 -->
  <label>
    <input type="text" @keyup.13="onEnter">
  </label>

  <!-- 点击只触发一次 -->
  <button @click.once="clickHandler">Button4</button>
</div>
```

### 七、v-if vs v-show

1.v-if

根据表达式的值的truthiness来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template>
，将提出它的内容作为条件块。

当条件变化时该指令触发过渡效果

注意: 当和`v-if`一起使用时, `v-for`的优先级比`v-if`高

```html

<div id="app">
  <p v-if="score >= 90">优秀</p>
  <p v-else-if="score >= 80">良好</p>
  <p v-else-if="score >= 60">及格</p>
  <p v-else>不及格</p>
</div>
```

2.v-show

根据表达式的真假值, 切换元素的`display`样式属性, 这就意味着带有`v-show`的元素始终会被渲染并保留在DOM中

当条件变化时该指令触发过渡效果

```html
<h1 v-show="flag">Chauncey</h1>
```

注意: `v-show`不支持`<template>`, 也不支持`v-else`

`v-if`是'真正'的条件渲染,因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建

`v-if`也是**惰性的**: 如果在初始渲染时条件为假, 则什么也不做——直到条件第一次变为真时, 才会开始渲染条件块

相比之下，v-show就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show
较好；如果在运行时条件很少改变，则使用 v-if 较好