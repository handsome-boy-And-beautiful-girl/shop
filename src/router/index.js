import Vue from 'vue'
import Router from 'vue-router'

const index = ()=>import('../pages/index.vue')
const cart = ()=>import('../pages/cart.vue')
const center = ()=>import('../pages/center.vue')
const login = () =>import('../pages/login.vue')
const Aindex = () =>import('../pages/AIndex.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'index',
      component: index
    },
    {
      path:'/cart',
      name: '购物车',
      component: cart
    },
    {
      path:'/center',
      name: '个人中心',
      component: center
    },
    {
      path:'/Aindex',
      name: '管理员首页',
      component: Aindex
    },
    {
      path:'/login',
      name: '管理员登录',
      component: login
    },
  ]
})
