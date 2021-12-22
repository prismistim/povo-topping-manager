import { createRouter, createWebHistory } from 'vue-router'

import Home from '/@/components/pages/Home.vue'
import NotFound from '/@/components/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
