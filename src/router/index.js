// import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/pages/Login'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/conditions',
        name: 'Lenders Conditions',
        component: () => import('@/views/LendersConditions.vue'),
      },
      {
        path: '/effectiveconditions',
        name: 'Effective Lenders Conditions',
        component: () => import('@/views/EffectiveLendersConditions.vue'),
      },
      // {
      //   path: '/login',
      //   name: 'Login',
      //   component: () => import('@/views/pages/Login'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
