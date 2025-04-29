<script lang="ts" setup>
import { ref } from 'vue';

const baseImages = [
  '/img/brands/logo-1.png',
  '/img/brands/logo-2.png',
  '/img/brands/logo-3.png',
  '/img/brands/logo-4.png',
  '/img/brands/logo-5.png',
  '/img/brands/logo-6.png',
  '/img/brands/logo-7.png',
  '/img/brands/logo-8.png',
]

const images = ref([...baseImages, ...baseImages])
</script>

<template>
  <div class="slider container my-5 px-3">
    <div class="slide-track d-flex align-items-center">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="brand logo" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider::before,
.slider::after {
  content: "";
  position: absolute;
  width: 15%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
  width: max-content;
}

.slide {
  flex: 0 0 auto;
  min-width: 120px;
  max-width: 200px;
  padding: 0 10px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Responsive tuning */
@media (max-width: 768px) {
  .slide {
    min-width: 90px;
    padding: 0 6px;
  }
}

@media (max-width: 576px) {
  .slide {
    min-width: 70px;
    padding: 0 4px;
  }
}
</style>
