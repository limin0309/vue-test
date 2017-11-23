import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containers/Home'
import List from 'containers/List'
import Collect from 'containers/Collect'
import Add from 'containers/Add'


Vue.use(Router);//router是一个vue插件，需要use一下才能使用

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/add',
      component: Add
    },
    {
      /*404路由  访问不到时候*/
      path: '*',
      redirect: '/home'
    },
  ],
  linkActiveClass:'active'//设置选中的颜色
})
