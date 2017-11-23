import Vue from 'vue'
//vue 脚手架  帮我们将组件可以封装成.vue文件
import App from './App'
import router from './router'
import './assets/index.less';//公用样式
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import VueScroller from 'vue-scroller'//引入这个组件后，页面会多一个全局组件 scroller
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // template: '<div>hello world<div/>',
  // render(h){
  //   return h(App)
  // },
  ...App,
  // components: { App }
})
