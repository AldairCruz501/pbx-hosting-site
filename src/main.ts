import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')

  AOS.init({
    once: false,
    duration: 1000,
    easing: 'ease-in-out',
    mirror: true
  })
  router.afterEach(() => {
    setTimeout(() => {
      AOS.refresh()
    }, 200) // le das tiempo al DOM para renderizar
  })
})

