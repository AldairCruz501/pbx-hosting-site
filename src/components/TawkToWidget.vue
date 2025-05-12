<!-- TawkController.vue -->
<template>
    <div></div>
  </template>
  
  <script setup>
  import { inject, ref, onMounted } from 'vue';
  
  // Inyectar funciones del plugin
  const toggle = inject('toggle');
  const onLoad = inject('onLoad');
  const isReady = ref(false);
  
  onMounted(() => {
    if (onLoad) {
      onLoad(() => {
        isReady.value = true;
        console.log('Tawk widget listo');
      });
    }
  });
  
  function handleToggle() {
    if (isReady.value && toggle) {
      toggle(); // Abre o cierra el chat
    } else {
      console.warn('Tawk todavía no está listo.');
    }
  }
  </script>
  