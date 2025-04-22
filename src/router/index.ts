import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  // puedes agregar más rutas aquí
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router