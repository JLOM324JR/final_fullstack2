import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about', //แบบง่าย
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue') //แบบไดนามิค
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
