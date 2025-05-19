<template>
    <div class="card-value h-100 p-4 shadow-sm border-0">
      <p class="text-muted">{{ t(descripcionKey) }}</p>
      <img :src="img" alt="illustration" class="img-fluid w-50 mt-3" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import type { ValueCardData } from '../interfaces/About'; 
  import { useI18n } from 'vue-i18n';
  
  // Usamos destructuración directa desde props tipados
  const {descripcionKey, img } = defineProps<ValueCardData>();
  const { t } = useI18n();
  </script>
  
  <style scoped>
  .card-value {
    border-radius: 1rem;
    transition: transform 0.2s ease;
  }
  .card-value:hover {
    transform: translateY(-5px);
    border: 1px solid var(--secondary_color) !important;
  }
  </style>
  