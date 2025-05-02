import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      /*'/dominios': {
        target: 'https://www.pbxhosting.com.mx',
        changeOrigin: true,
        secure: false,
      },*/
    },
  },
})
