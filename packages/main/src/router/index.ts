/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 21:04:43
 * @LastEditTime: 2023-05-16 23:34:25
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sys',
      component: () => import('../views/ChildSys.vue')
    },
    {
      path: '/business',
      name: 'business',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChildBusiness.vue')
    }
  ]
})

export default router
