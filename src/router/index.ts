import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import SGDs from '../views/SDGs.vue'
import AddSolution from '../views/AddSolution.vue'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { component } from 'vue/types/umd'

Vue.use(VueRouter, CKEditor)

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
    path: '/add-content',
    name: 'AddSolution',
    component: AddSolution
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
