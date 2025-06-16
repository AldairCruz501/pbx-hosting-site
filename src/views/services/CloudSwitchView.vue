<script lang="ts" setup>
	import FooterComponent from '../../components/FooterComponent.vue';
	import HeaderComponent from '../../components/HeaderComponent.vue';
	import LoaderComponent from '../../components/LoaderComponent.vue';
	import { useI18n } from 'vue-i18n';
	import { cloudSwitchData } from '../../data/cloudswitch';
	import SliderTabsComponent from '../../components/SliderTabsComponent.vue';
	import FunctionsComponent from '../../components/FunctionsComponent.vue';
	import PricesTabsComponent from '../../components/PricesTabsComponent.vue';

	const { t } = useI18n();

</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="bg-body-tertiary">
		<div class="container bg-white rounded-1 border-5 shadow p-5">
			<div class="row g-3">
				<div class="col-12 col-lg-7 pt-lg-5 mt-lg-5">
					<h1 class="display-3 fw-bold text-empresary">{{ t('cloudSwitch.hero.title') }}</h1>
					<p class="lead mb-4">
						{{ t('cloudSwitch.hero.description') }}
					</p>
				</div>
				<div class="col-12 col-lg-5">
					<div class="position-relative">
						<img src="/img/conmutador-nube.png" class="img-fluid" alt="hero-img" width="470">
					</div>
				</div>
			</div>
		</div>
	</section>
<div class="container-fluid min-vh-100 d-flex">
  <div class="row w-100">
    
    <!-- Left column -->
		<div class="col-xl-6 right-col">
      <img src="/img/panel-pbxrub.png" alt="Search Mockup" class="mockup-img">
    </div>
		<!-- Right column -->
    <div class="col-xl-6 left-col">
      <h2 class="fw-bold display-3">{{ t('cloudSwitch.whatSwitch.title') }}</h2>
      <p class="hero-text fs-5">
				{{ t('cloudSwitch.whatSwitch.description') }}
      </p>
			<div class="row g-4">
				<div class="col-12 col-md-6 col-xl-4" v-for="feature in cloudSwitchData.features">
						<div class="value-card rounded-4 p-2 h-100 d-flex flex-column align-items-start text-start transition">
								<div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center mb-3 border-color" style="width: 60px; height: 60px;">
									<i :class="feature.icono" class="fs-3"></i>
								</div>
								<h5 class="fw-bold fs-5 text-empresary">{{ t(feature.tituloKey) }}</h5>
								<p class="small text-justify">{{ t(feature.descripcionKey) }}</p>
						</div>
				</div>
			</div>
    </div>
  </div>
</div>
<section class="container-fluid">
	<div class="container py-4">
		<div class="text-center">
			<h2 class="display-4 fw-bold">{{ t('cloudSwitch.functionsSwitch.title') }}</h2>
		</div>
		<SliderTabsComponent class="w-50 mx-auto d-none d-lg-block" />
		<SliderTabsComponent class="mx-auto d-block d-lg-none" />
		<FunctionsComponent 
			v-motion-slide-visible-bottom
			:delay="200"
			:duration="1200"
		/>
	</div>
</section>
<PricesTabsComponent/>
	<FooterComponent />
</template>

<style scoped>
	.text-empresary {
		color: var(--secondary_color)
	}
	.border-color{
		border: 1px solid var(--secondary_color)
	}
	.left-col {
		padding: 4rem 2rem;
	}
	.hero-title {
		font-size: 2.5rem;
		font-weight: 700;
	}
	.hero-title .highlight {
		color: black;
		font-weight: 900;
	}
	.hero-text {
		color: #555;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
	.btn-outline-dark {
		border: 2px solid black;
		font-weight: 600;
	}
	.right-col {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--secondary_color); /* Fondo azul brillante */
		padding: 2rem;
	}
	.mockup-img {
		max-width: 100%;
		border-radius: 1rem;
	}
</style>