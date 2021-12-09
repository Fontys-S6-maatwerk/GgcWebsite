import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import SGDs from '../views/SDGs.vue'
import SolutionsPerSDG from '../views/SolutionsPerSDG.vue'
import Search from '../views/Search.vue'
import AddSolution from '../views/AddSolution.vue'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)
Vue.use(CKEditor)
Vue.use(VueAxios, axios)

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
    path: '/my-profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/sdgs/',
    name: 'SGGs',
    component: SGDs
  },
  {
    path: '/sdgs/:id/:name',
    name: 'SolutionPerSDG',
    component: SolutionsPerSDG
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
    path: '/solution/:id/:name',
    name: 'Viewsolution',
    component: () => import('../views/ViewSolution.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
