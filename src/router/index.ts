import { createRouter, createWebHistory } from 'vue-router'

import Home from '/@/components/pages/Home.vue'
import Add from '/@/components/pages/Add.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
