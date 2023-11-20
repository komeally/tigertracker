import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/ListApplications.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../components/CreateApplication.vue')
    },
    {
      path: '/update/:id',
      name: 'update',
      component: () => import('../components/UpdateApplication.vue')
    }
  ]
})

export default router
