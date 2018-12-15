import Vue from 'vue'
import Router from 'vue-router'
import categories from './views/categories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'categories',
      component: categories
    }
  ]
})
