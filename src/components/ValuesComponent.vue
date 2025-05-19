<script lang="ts" setup>
import { values } from '../data/about';
import { useI18n } from 'vue-i18n';

const formatNumber = (num: number) => num.toString().padStart(2, '0')
const { t } = useI18n();
</script>

<template>
  <section class="container-fluid pt-5 bg-value text-white">
    <div class="container text-center">
      <h2 class="fw-bold mb-5">{{ t('about.valueCard.title') }}</h2>
      <div class="row g-4">
		<div class="col-12 col-md-6 col-xl-4" v-for="(value, index) in values" :key="index">
			<div class="value-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start transition">
				<div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center mb-3" style="width: 60px; height: 60px;">
					{{ formatNumber(index + 1) }}
				</div>
				<h5 class="fw-bold">{{ t(value.tituloKey) }}</h5>
				<p class="text-white-50">{{ t(value.descripcionKey) }}</p>
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