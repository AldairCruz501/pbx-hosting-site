<script setup lang="ts">
//import TawkToWidget from './components/TawkToWidget.vue';
import WhatsappChatComponent from './components/WhatsappChatComponent.vue';
</script>

<template>
    <TawkToWidget />
    <router-view :key="$route.fullPath" />
    <WhatsappChatComponent />
</template>

<style scoped>

</style>