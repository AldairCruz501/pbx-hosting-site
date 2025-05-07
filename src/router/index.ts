import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
//Vistas Principales
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

//Vistas de servicios
import IPTelephonyView from '../views/services/IPTelephonyView.vue'
import DomainsView from '../views/services/DomainsView.vue'


//Vistas de Subservicios
import SIPLineView from '../views/services/iptelephonyservices/SIPLineView.vue'
/*import TelephoneLinesView from '../views/services/iptelephonyservices/TelephoneLinesView.vue'
import VOIPPackagesView from '../views/services/iptelephonyservices/VOIPPackagesView.vue'
import SMEPackagesView from '../views/services/iptelephonyservices/SMEPackagesView.vue'*/

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'PbxHosting | Inicio' },
  },
  {
    path: '/nosotros',
    component: AboutView,
    meta: { title: 'Nosotros | PbxHosting' },
  },
  {
    path: '/telefonia-ip',
    component: IPTelephonyView,
    meta: { title: 'Telefonía IP | PbxHosting' },
  },
  {
    path: '/telefonia-ip/linea-sip',
    component: SIPLineView,
    meta: { title: 'Proveedores Troncal SIP | PbxHosting' },
  },
  /*{
    path: '/telefonia-ip/lineas-telefonicas',
    component: TelephoneLinesView,
    meta: { title: 'Líneas Telefónicas | PbxHosting' },
  },
  {
    path: '/telefonia-ip/paquetes-voip',
    component: VOIPPackagesView,
    meta: { title: 'Paquetes VOIP | PbxHosting' },
  },
  {
    path: '/telefonia-ip/paquetes-pyme',
    component: SMEPackagesView,
    meta: { title: 'Paquetes PyME | PbxHosting' },
  },*/
  {
    path: '/dominios',
    component: DomainsView,
    meta: { title: 'Dominios | PbxHosting' },
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Tuis';
});


export default router