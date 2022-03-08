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
    path: '/password-request',
    name: 'request_password',
    component: () => import('@/views/pages/forgotpassword'),
  },
  {
    path: '/passwordReset',
    name: 'update_password',
    component: () => import('@/views/pages/update_password'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/conditions/:lender_id/:lender_code',
        name: 'Lenders Conditions',
        component: () => import('@/views/LendersConditions.vue'),
      },
      {
        path: '/effectiveconditions',
        name: 'Effective Lenders Conditions',
        component: () => import('@/views/EffectiveLendersConditions.vue'),
      },
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
