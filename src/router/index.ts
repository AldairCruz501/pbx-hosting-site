import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DomainsView from '../views/services/DomainsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: AboutView
  },
  {
    path: '/servicios/dominios',
    name: 'Dominios',
    component: DomainsView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router