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
    path: '/cat',
    name: 'Cat',
    component: () => import('@/components/Cat.vue')
  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: () => import('@/views/ContactMe.vue')
  },
  {
    path: '/SkillsList',
    name: 'SkillsList',
    component: () => import('@/views/SkillsList.vue')
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
