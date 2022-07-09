import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Backup from '../views/Backup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/backup/:id',
    name: 'Backup',
    component: Backup
  }, {
    path: '/restore',
    name: 'Restore',
    component: () => import(/* webpackChunkName: "restore" */ '../views/Restore.vue')
  }, {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "setting" */ '../views/Settings.vue')
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
