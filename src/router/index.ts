import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Solutions from '../views/Dashboard.vue'
import SGDs from '../views/SDGs.vue'
import BotAdminPage from '../views/BotAdminPage.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Solutions
  },
  {
    path: '/sdgs',
    name: 'SGGs',
    component: SGDs
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
    path: '/solution/:id/*',
    name: 'View solution',
    component: () => import('../views/ViewSolution.vue')
  },
  {
    path: '/botadmin',
    name: 'BotAdmin',
    component: BotAdminPage
  }
]

const router = new VueRouter({
  routes
})

export default router
