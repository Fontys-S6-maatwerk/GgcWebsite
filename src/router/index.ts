import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import SGDs from '../views/SDGs.vue'
import Solutions from '../views/Solutions.vue'
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
    component: Dashboard
  },
  {
    path: '/sdgs',
    name: 'SGGs',
    component: SGDs
  },
  {
    path: '/add-solution',
    name: 'Solutions',
    component: Solutions
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
  }
]

const router = new VueRouter({
  routes
})

export default router
