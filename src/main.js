import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// 方式一：
// import TopNav from '@/components/Base/TopNav.vue'
// Vue.component('TopNav', TopNav)// 注册全局组件

// 方式二：
/* requireComponent 包含基础模块的文件集合 */
const requireComponent = require.context(
  /* 在 ./components/Base 文件夹中寻找基础模块 */
  './components/Base',
  /* 是否包含子文件夹 */
  true,
  /* 只要是 .vue 结尾的文件都是基础模块 */
  /[\w-]+\.vue$/
)

/* 对这个文件集合进行遍历 - import - 全局注册 */
requireComponent.keys().forEach(fileName => {
  /* 获取组件配置 */
  const componentConfig = requireComponent(fileName)
  /* 从文件名中得到组件名 */
  const componentName = upperFirst(
    camelCase(
      fileName
        /* 移除开头的 "./_" */
        .replace(/^\.\/_/, '')
        /* 去掉文件的后缀名，也即 .vue */
        .replace(/\.\w+$/, '')
    )
  )
  /* 全局注册组件 */
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
