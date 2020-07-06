import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PersonalHomeView from '@/views/PersonalHome.vue'






Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'PersonalHomeView',
    component: PersonalHomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cat',
    name: 'Cat',
    component: () => import('@/components/Cat.vue')
  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: () => import('@/views/ContactMe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
