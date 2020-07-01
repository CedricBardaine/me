import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PersonalHomeView from '@/views/PersonalHome.vue'


// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCat, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCat, faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// was in Fontawesome main.js example
Vue.config.productionTip = false



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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
