Pinia 基础
img

#概述
#官方文档
Pinia 官方文档：⚓https://pinia.vuejs.org/(opens new window)
```js
#为什么需要 Pinia
Pinia 作者是 Vuex 核心开发人员之一，靠谱
Vuex 5 的设计思想，为下一个版本 Vuex 做好准备
Vuex 4 对 TypeScript 支持不够友好，Pinia 完整的 TypeScript 支持
Vuex 4 书写起来太繁琐，异步要写 Actions，同步要写 Mutations，Pinia 做了统一，Actions 配置项可以执行同步或异步方法
极其轻巧，体积约1KB
支持 Vue DevTools
对比	Pinia	Vuex 4
TypeScript 支持	✅	❌(不友好)
Vue DevTools 支持	✅	✅
#Pinia 和 Vuex 的变化
Pinia 没有了 mutations
Pinia 模块不需要嵌套，可以声明多个Store
Pinia 可直接获取 getters 数据
#安装 Pinia
# 使用 npm
npm install pinia
# 使用 yarn
yarn add pinia
创建一个 pinia（根存储）并将其传递给应用程序：

import { createPinia } from 'pinia';

app.use(createPinia());
#核心概念与基本使用
#核心概念
Store，可定义多个 Store
State ，相当于组件中 data
Getters ，相当于组件中 computed
Actions， 相当于组件中 methods
#Store
Store，可定义多个 Store
```
#Pinia 和 Vuex 差异
Pinia 中的 Store 作用与 Vuex 中的 Store 相同，使用略有差异。
Pinia 支持定义多个 Store 相当于组件中 Vuex 定义多个模块。
#Store 基本使用
通过 defineStore() 定义 Store 。
必须配置唯一的 id
#参考代码
新建 store/index.ts
```js
// store/index.ts
import { defineStore } from "pinia"

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "globalStore",
});
组件中使用

// xxx.vue
<script setup lang="ts">
// 导入 Store， 使用自己的路径
import { useStore } from "@/store/index.ts";
// 调用函数 获得 Store
const store = useStore();
// 打印检查 Store 
console.log(store)
</script>
```
#State
State 相当于组件中 data

#Pinia 和 Vuex 差异
Pinia 中的 State 作用与 Vuex 中的 State 相同，使用略有差异
Pinia 中的 State 直接在 Store 上读取，形似 store.xx，就和一般的数据读取一样
#State 基本使用
Getter 第一个参数是 state，是当前的状态
Getter 也可以使用 this.xxx 获取状态
Getter 中也可以访问其他的 Getter， 或者是其他的 Store
#参考代码
修改 store/index.ts
```js
// store/index.ts
import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "globalStore",
+  // state: 返回对象的函数
+  state: ()=> ({
+    count: 1
+  }),
});
组件中使用

// xxx.vue
<template>
  <div>
    {{store.count}}
  </div>
</template>

<script setup lang="ts">
// 导入 Store， 使用自己的路径
import { useStore } from "@/store/index.ts";
// 调用函数 获得 Store
const store = useStore();
// 打印检查 Store 
console.log(store)
</script>
```
#Getters
Getters 相当于组件中 computed

#Pinia 和 Vuex 差异
Pinia 中的 Getters 作用与 Vuex 中的 Getters 相同，但使用略有差异
Pinia 中的 Getters 直接在 Store 上读取，形似 store.xx，就和一般的属性读取一样
#Getter 基本使用
Getter 第一个参数是 state，是当前的状态
Getter 也可以使用 this.xxx 获取状态
Getter 中也可以访问其他的 Getter， 或者是其他的 Store
#参考代码
修改 store/index.ts
```js
// store/index.ts
import { defineStore } from "pinia";

import { otherStore } from "@/store/otherStore.ts";

export const useStore = defineStore({
  id: "globalStore",
  state: ()=> ({
    count: 2
  }),
  getters: {
    // 一个基本的 Getter： 计算 count 的平方
    // 使用参数
    countPow2(state) {
      return state.count ** 2;
    },
    // 使用 this
    /* 
    countPow2() {
      return this.count ** 2;
    }, 
    */
    // 简单的 Getter 直接使用箭头函数
    // countPow2: state=> state.count ** 2

    // 获取其它 Getter， 直接通过 this
    countPow2Getter() {
      return this.countPow2;
    }

    // 使用其它 Store
    otherStoreCount(state) {
      // 🔔这里是其他的 Store，调用获取 Store，就和在 setup 中一样
      const otherStore = useOtherStore();
      return otherStore.count;
    },
  }
});
新建 store/otherStore.ts

// store/otherStore.ts
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "otherStore",
  state: ()=> ({
    msg: "Nice~"
  }),
});
```
#Actions
Actions 相当于组件中 methods

#Pinia 和 Vuex 差异
Pinia 没有 Mutations，统一在 Actions 中操作 state，通过 this.xx 访问相应状态
#Action 基本使用
Action 和普通的函数一样
Action 同样可以像 Getter 一样访问其他的 Store，同上方式使用其它 Store，这里不在赘述，详细请移步 官方文档 Actions(opens new window)
#参考代码
```js
// store/index.ts
export const useStore({
  state: ()=> ({
    count: 2,
    // ...
  })
  // ...
  actinos: {
    countPlusOne() {
      this.count++;
    },
    countPlus(num) {
      this.count += num;
    }
  }
})
```
🔔 温馨提醒

虽然组件中可以直接操作 Store，但还是推荐在 actions 中操作，保证状态不被意外改变。

#核心 API
createPinia
defineStore
storeToRefs
#其他 API
重置数据：this.$reset() store.$reset()

#模块
#模块分拆
#模块合并
​

#插件
持久化插件：`https://github.com/prazdevs/pinia-plugin-persistedstate`

#注意事项
注意：pinia 底层是 vue3 reactive 如果直接解构 store ，会造成响应式丢失！
```ts
需要使用 storeToRefs 来进行相应式处理
// 需要使用 storeToRefs 来进行相应式处理
import { storeToRefs } from 'pinia'
const store = defaultStore()
const { count } = storeToRefs(store)
return { count }
```
#调试工具
VueDevTools 支持，无需额外安装。
