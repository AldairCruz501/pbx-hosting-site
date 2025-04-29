<script lang="ts" setup>
import { values } from '../data/about';

const formatNumber = (num: number) => num.toString().padStart(2, '0')
</script>

<template>
  <section class="container-fluid pt-5 bg-value text-white">
    <div class="container text-center">
      <h2 class="fw-bold mb-5">Nuestros Valores</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-xl-4" v-for="(value, index) in values" :key="index">
          <div class="d-flex align-items-start flex-column text-start">
            <div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center mb-3" style="width: 60px; height: 60px;">
              {{ formatNumber(index + 1) }}
            </div>
            <h5 class="fw-bold">{{ value.titulo }}</h5>
            <p class="text-white-50">{{ value.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
	.bg-value {
		background-color: var(--secondary_color) !important;
	}
	.text-value {
		color: var(--secondary_color);
	}
</style>