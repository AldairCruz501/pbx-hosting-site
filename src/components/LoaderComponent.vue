<script setup>
import { ref, onMounted } from 'vue'
import { CirclesToRhombusesSpinner } from 'epic-spinners'

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
    <div class="spinner-container">
      <div class="mb-2">
        <img src="/img/pbx-logo.webp" alt="Logo-pbx" class="img-fluid" width="120" />
      </div>
      <CirclesToRhombusesSpinner :animation-duration="1200" :circles-num="3" :circle-size="15" color="#be222a" />
    </div>
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

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
