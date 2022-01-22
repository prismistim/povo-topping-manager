import { createRouter, createWebHistory } from 'vue-router'

import Home from '/@/components/pages/Home.vue'
import Add from '/@/components/pages/Add.vue'
import Success from '/@/components/pages/Success.vue'
import NotFound from '/@/components/pages/NotFound.vue'

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
  },
  {
    path: '/success/:id',
    name: 'Success',
    component: Success
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
