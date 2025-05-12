// main.ts o main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Dependencias globales
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MotionPlugin } from '@vueuse/motion';

// Plugin de Tawk.to
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

// Crear y montar la app
createApp(App)
  .use(router)
  .use(MotionPlugin)
  .use(TawkMessengerVue, {
    propertyId: '592f165db3d02e11ecc67aae', 
    widgetId: '1ble2n5gh',                  
  })
  .mount('#app');


