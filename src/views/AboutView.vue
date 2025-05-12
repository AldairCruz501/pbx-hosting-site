<script lang="ts" setup>
	import CounterComponent from '../components/CounterComponent.vue';
	import FooterComponent from '../components/FooterComponent.vue';
	import FundamentalsComponent from '../components/FundamentalsComponent.vue';
	import HeaderComponent from '../components/HeaderComponent.vue';
	import BrandSliderComponent from '../components/BrandSliderComponent.vue';
	import ValuesComponent from '../components/ValuesComponent.vue';
	import ValueCardComponent from '../components/ValueCardComponent.vue';
	import { valueCardsData } from '../data/about';
	import type { ValueCardData } from '../interfaces/About';
	import LoaderComponent from '../components/LoaderComponent.vue';


	const valueCards: ValueCardData[] = valueCardsData;
</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="container-fluid bg-body-tertiary">
		<div class="px-4 pt-4 text-center animate__animated animate__fadeInUp animate__delay-3s">
			<h1 class="display-4 fw-bold title-hero-about">Impulsamos la transformación digital en comunicaciones empresariales con Telefonía IP de alto nivel.</h1>
			<div class="col-lg-6 mx-auto pb-2">
				<p class="lead mb-2 text-dark text-hero-about">En PBXHosting optimizamos tu comunicación empresarial con soluciones VoIP eficientes, económicas y respaldadas por soporte especializado.</p>
			</div>
			<div class="overflow-hidden">
				<div class="container px-5">
					<img src="/img/img-about.webp" class="img-fluid w-50" alt="Example image"loading="lazy">
				</div>
			</div>
		</div>
  	</section>
	<section class="bg-body">
		<div class="container-fluid">
			<div 
				class="container col-xxl-8"
				v-motion-fade-visible
				:delay="200"
				:duration="1200"
			>
				<div class="row d-flex align-items-center g-5 py-5">
					<div 
						class="col-lg-6"
					>
						<h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">En el mundo de los negocios cada llamada cuenta</h2>
						<p>
							No solo proporcionamos servicios de telefonía IP, sino que también abrazamos la visión de un mundo donde la comunicación empresarial es sinónimo de simplicidad, eficiencia y conectividad ininterrumpida.
						</p>
					</div>
					<div 
						class="col-10 col-sm-8 col-lg-6"
					>
						<img src="/img/img-callcenter.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  width="90%" loading="lazy">
					</div>
				</div>
			</div>
		</div>
	</section>
	<CounterComponent />
	<FundamentalsComponent 
		v-motion-pop-visible
		:delay="200"
		:duration="1200"
	/>
	<section class="container-fluid bg-body-tertiary">
		<div 
			class="container"
			v-motion-slide-visible-right
			:delay="200"
			:duration="1200"
		>
			<div class="text-center">
				<h2 class="fw-bold mb-5 title-brand display-5">Conectando mas allá de la Comunicación</h2>
			</div>
			<div class="row g-4">
				<div class="col-md-6" v-for="card in valueCards" :key="card.descripcion">
					<ValueCardComponent
					:descripcion="card.descripcion"
					:img="card.img"
					/>
				</div>
			</div>
  		</div>
	</section>
	<ValuesComponent />
	<section class="container-fluid pt-5 pb-5">
		<div class="container text-center">
			<h3 class="display-6 fw-bold title-brand">Tecnologías y Alianzas</h3>
			<BrandSliderComponent />
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
	section {
		padding: 70px 0;
	}
	.title-hero-about,
	.title-brand {
		color: var(--secondary_color);
	}
	.text-hero-about {
		transition: 0.4s all;
		font-family: "Open Sans", sans-serif !important;
	}
</style>