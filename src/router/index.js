import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Error Router
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/index.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../views/content/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactView.vue')
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/program/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news/index.vue')
    }
  ]
})

export default router
