<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { ipTelephonyData } from '../data/iptelephony';
import type { TelephonyFunction } from '../interfaces/IPTelephony';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const itemsPerSlide = computed(() => {
	if (screenWidth.value < 490) return 1;
  if (screenWidth.value < 576) return 2; // móviles
  if (screenWidth.value < 768) return 3; // tablets
  return 3; // escritorio
});

const groupedFunctions = computed(() => {
  const result: TelephonyFunction[][] = [];
  const items = ipTelephonyData.telfunctions;
  const perSlide = itemsPerSlide.value;
  for (let i = 0; i < items.length; i += perSlide) {
    result.push(items.slice(i, i + perSlide));
  }
  return result;
});

</script>

<template>
  <div id="telephonyCarousel" class="carousel slide">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(group, index) in groupedFunctions"
        :key="index"
      >
        <div class="row text-center justify-content-center">
          <div
            v-for="(item, idx) in group"
            :key="idx"
            class="col-6 col-md-4 mb-4"
          >
            <img
              :src="item.img"
              class="mb-2"
              alt=""
              style="width: auto; height: 150px"
            />
            <h6 class="fw-bold">{{ t(item.tituloKey) }}</h6>
          </div>
        </div>
      </div>
    </div>
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#telephonyCarousel"
			data-bs-slide="prev"
		>
			<i class="bi bi-chevron-left fs-2 text-danger"></i>
			<span class="visually-hidden">Anterior</span>
		</button>

		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#telephonyCarousel"
			data-bs-slide="next"
		>
			<i class="bi bi-chevron-right fs-2 text-danger"></i>
			<span class="visually-hidden">Siguiente</span>
		</button>
  </div>
</template>


<style scoped>

</style>
