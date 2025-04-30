<!-- components/LoadingOverlay.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { SelfBuildingSquareSpinner  } from 'epic-spinners'

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = '' 
  }, 3000)
})
</script>

<template>
  <div v-if="loading" class="loading-overlay">
    <SelfBuildingSquareSpinner  :animation-duration="6000" :size="80" color="#be222a" />
  </div>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 9999;
}

</style>
