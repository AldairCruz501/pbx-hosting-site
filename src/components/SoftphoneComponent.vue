<script lang="ts" setup>
import { ipTelephonyData } from '../data/iptelephony';
</script>

<template>
    <div class="container-fluid bg-white">
        <div class="row">
            <div 
                class="col-12 col-lg-6 text-white custom-red-bg p-5 shadow"
                v-motion-slide-visible-right
                :delay="200"
                :duration="1200"
            >
                <h2 class="fw-bold mb-4 text-center display-4">¿Qué hace un softphone?</h2>
                <div class="row">
                    <div class="col-12 col-xl-6" v-for="(purpose, index) in ipTelephonyData.purposes" :key="index">
                        <div class="value-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start transition">
                            <div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center mb-3" style="width: 60px; height: 60px;">
                                <i :class="purpose.icono"></i>
                            </div>
                            <h5 class="fw-bold">{{ purpose.titulo }}</h5>
                            <p class="text-white-50 small">{{ purpose.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                class="col-12 col-lg-6 d-flex justify-content-center align-items-center p-5 shadow"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200"
            >
                <img src="/img/celular-softphone-linea-virtual.png" class="img-fluid d-block d-xl-none" alt="hero-img" />
                <img src="/img/celular-softphone-linea-virtual.png" class="img-fluid w-50 d-none d-xl-block" alt="hero-img" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-red-bg {
    background-color: var(--secondary_color);
}

.text-value {
	color: var(--secondary_color);
}
.value-card {
  background-color: transparent;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.value-card:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Cambia este valor si quieres otro color */
  transform: scale(1.05);
  cursor: pointer;
}
</style>