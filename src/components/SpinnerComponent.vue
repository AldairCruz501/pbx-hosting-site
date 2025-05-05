<template>
    <div class="loading-overlay">
        <fulfilling-square-spinner
            :animation-duration="4000"
            :size="50"
            color="#be222a"
        />
    </div>
</template>

<script setup>
import { FulfillingSquareSpinner } from 'epic-spinners'
</script>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>