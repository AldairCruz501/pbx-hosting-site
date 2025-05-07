<script setup>
import { onMounted, onUnmounted } from 'vue'

const scriptId = 'tawkto-script'

onMounted(() => {
  // Esperar 6 segundos antes de insertar el script
  setTimeout(() => {
    if (document.getElementById(scriptId)) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = 'https://embed.tawk.to/592f165db3d02e11ecc67aae/1ble2n5gh'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }
  }, 6000)
})

onUnmounted(() => {
  const existingScript = document.getElementById(scriptId)
  if (existingScript && existingScript.parentNode) {
    existingScript.parentNode.removeChild(existingScript)
  }

  // Limpiar variables globales
  delete window.Tawk_API
  delete window.Tawk_LoadStart
})
</script>
