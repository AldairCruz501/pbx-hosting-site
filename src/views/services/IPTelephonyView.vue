<script lang="ts" setup>
	import CarouselIPComponent from '../../components/CarouselIPComponent.vue';
	import FooterComponent from '../../components/FooterComponent.vue';
	import HeaderComponent from '../../components/HeaderComponent.vue';
	import LoaderComponent from '../../components/LoaderComponent.vue';
	import { ipTelephonyData } from '../../data/iptelephony';
	import { ref } from 'vue';

  const tabs = [
	{ label: 'Precios', icon: 'bi-coin' },
	{ label: 'Portabilidad', icon: 'bi-telephone-forward' }
];

const selectedTab = ref(0);
</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="text-center text-md-start bg-body-tertiary">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 mb-4 animate__animated animate__slideInDown animate__delay-3s">
					<h1 class="display-3 fw-bold text-body-emphasis lh-1 mb-3">Telefonía VoIP <span class="text-empresary">Empresarial</span></h1>
					<p class="lead">
						Mejora la comunicación de tu empresa y reduce costos con nuestra tecnología VoIP segura, confiable y personalizada. 
						Ofrecemos soluciones adaptadas a tus necesidades, con soporte profesional y herramientas avanzadas para una gestión 
						eficiente de tus llamadas empresariales. Lleva tus comunicaciones al siguiente nivel con nosotros.
					</p>
					<div class="d-grid gap-2 d-md-flex justify-content-md-start">
            			<button type="button" class="btn btn-primary btn-lg px-4 me-md-2 text-uppercase">Cotizar</button>
          			</div>
				</div>
				<div class="col-12 col-lg-6 animate__animated animate__zoomIn animate__delay-3s">
					<div class="hero-home-right position-relative">
						<img src="/img/img-hero-iptelephony.png" class="w-100 h-100" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-iptelephony">
		<div 
			class="container bg-white p-5 rounded shadow"
			v-motion-pop-visible
		  	:delay="200"
		  	:duration="1200"
		>
			<div class="row g-4">
				<div class="col-12 col-lg-6 col-xl-8">
					<div class="hero-home-right position-relative mx-auto">
						<img src="/img/img-iptelephony.webp" class="img-fluid" alt="hero-img">
					</div>
				</div>
				<div class="col-12 col-lg-6 col-xl-4">
					<h3 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-empresary text-center">¿Qué es la Telefonía IP?</h3>
					<p class="lead text-justify fs-6">
						La <span class="text-empresary fw-bold">Telefonía IP</span> (Protocolo de Internet) es una tecnología que permite 
						realizar llamadas telefónicas utilizando una conexión de Internet en lugar de la infraestructura de telefonía 
						tradicional basada en líneas físicas. La telefonía IP utiliza la tecnología de voz sobre IP <span class="text-empresary fw-bold">(VoIP)</span>, que convierte 
						la voz en paquetes de datos digitales que se transmiten a través de la red de Internet.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid p-5">
		<div class="container">
			<div class="row g-5">
				<div 
					class="col-12 col-lg-6 py-5"
					v-motion-slide-visible-right
					:delay="200"
					:duration="1200"
				>
					<h2 class="display-6 fw-bold text-body-emphasis lh-1 mb-3 text-empresary text-center">Descubre porque es la mejor opción para tu negocio</h2>
					<p class="lead text-justify">
						La <span class="text-empresary fw-bold">Telefonía IP</span> permite integrar múltiples aplicaciones de comunicación en una sola plataforma, 
						lo que mejora la colaboración y la eficiencia en los procesos empresariales.
					</p>
					<div class="row g-3">
						<div class="col-12 col-md-6">
							<ul class="lead">
								<li>
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i> 
										<span class="mx-2 mx-lg-1">Mejor Calidad de Audio</span>
									</div>
								</li>
								<li>
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i> 
										<span class="mx-2 mx-lg-1">Mayor Ahorro</span>
									</div>
								</li>
								<li>
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i>
										<span class="mx-2 mx-lg-1">Flexibilidad</span>
									</div>
								</li>
							</ul>
						</div>
						<div class="col-12 col-md-6">
							<ul class="lead">
								<li class="">
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i>
										<span class="mx-2 mx-lg-1">Configuración Sencilla</span>
									</div>
								</li>
								<li>
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i>
										<span class="mx-2 mx-lg-1">Multidispositivos</span>
									</div>
								</li>
								<li>
									<div class="d-flex">
										<i class="bi bi-check-circle-fill"></i>
										<span class="mx-2 mx-lg-1">Funciones Avanzadas</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div 
					class="col-12 col-lg-6"
					v-motion-slide-visible-left 
					:delay="200"
					:duration="1200"
				>
					<div class="text-center rounded-circle bg-danger">
						<img src="/img/img-callcenter.png" class="img-fluid" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid">
		<div class="container">
				<div class="p-3">
					<h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-5 text-center">
						Funcionalidades de la <span class="text-empresary">Telefonía IP</span>
					</h2>
				</div>
			<CarouselIPComponent />
		</div>
	</section>
	<section class="container-fluid p-5">
		<div 
			class="container"
			v-motion-slide-visible-top
			:delay="200"
			:duration="1200"
		>
			<div class="d-block d-lg-none text-start pt-5">
				<h3 class="display-6 fw-bold text-body-emphasis lh-1 mb-3 text-empresary">
					Línea Telefónica Para Empresas
				</h3>
				<p class="lead text-justify">
					Proporciona una conexión confiable y de calidad para facilitar la comunicación interna y externa de la organización.
				</p>
				<div class="d-grid gap-2 d-md-flex justify-content-md-start">
            		<button type="button" class="btn btn-primary btn-lg px-4 me-md-2 text-uppercase">Cotizar</button>
        		</div>
			</div>
			<div class="d-none d-lg-block text-start pt-5 w-50">
				<h3 class="display-6 fw-bold text-body-emphasis lh-1 mb-3 text-empresary">
					Línea Telefónica Para Empresas
				</h3>
				<p class="lead text-justify">
					Proporciona una conexión confiable y de calidad para facilitar la comunicación interna y externa de la organización.
				</p>
				<div class="d-grid gap-2 d-md-flex justify-content-md-start">
            		<button type="button" class="btn btn-primary btn-lg px-4 me-md-2 text-uppercase">Cotizar</button>
        			</div>
			</div>
			<div class="row g-5">
				<div class="col-12 col-lg-6 py-5">
					<div class="row g-4 pt-xl-5">
						<div v-for="(card, index) in ipTelephonyData.benfits" :key="index" class="col-12 col-sm-6 d-flex ">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">{{ card.titulo }}</h5>
									<p class="card-text fs-6 mt-auto">{{ card.descripcion }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-6">
					<div class="text-center">
						<img src="/img/img-benfits.png" class="img-fluid" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid py-5">
		<div 
			class="container"
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
					<!-- Tabs -->
			<ul class="nav nav-tabs mb-4 justify-content-center">
				<li class="nav-item" v-for="(tab, index) in tabs" :key="index">
					<button
					class="nav-link d-flex align-items-center"
					:class="{ active: selectedTab === index }"
					@click="selectedTab = index"
					>
					<i :class="tab.icon + ' fs-3 mb-1'"></i>
					<span>{{ tab.label }}</span>
					</button>
				</li>
			</ul>
			<!-- Tab content -->
			<div v-if="selectedTab === 0">
				<!-- TAB 1: Precios Telefonía IP -->
				<div class="row align-items-center text-center text-md-start mb-5">
					<div class="col-md-6">
						<h3 class="fw-bold">Precios <span class="text-empresary">Telefonía IP</span></h3>
						<p>Un agente de ventas está listo para atenderte y realizar un servicio personalizado.</p>
						<button class="btn btn-primary btn-lg px-4 me-md-2 text-uppercase">Contratar</button>
					</div>
					<div class="col-md-6 mt-4 mt-md-0 text-center">
						<img src="/img/puzzle-funciones-ip.png" alt="Telefonía IP" class="img-fluid" />
					</div>
				</div>
			</div>
			<div v-else>
				<!-- TAB 2: Portabilidad -->
				<div class="row align-items-center text-center text-md-start mb-4">
					<div class="col-md-6 order-2 order-md-1 mt-4 mt-md-0 text-center">
						<img src="/img/portabilidad-numeros-virtuales.svg" alt="PBX Hosting" class="img-fluid w-75" />
					</div>
					<div class="col-md-6 order-1 order-md-2">
						<h2 class="fw-bold">Portabilidad</h2>
						<p>Si ya cuentas con líneas virtuales con otro proveedor y te están fallando... Porta tus líneas con nosotros.</p>
						<div class="d-flex gap-3 justify-content-center">
							<div class="bg-light rounded p-3 text-center shadow-sm">
								<div class="fw-semibold">Línea 2 Canales</div>
								<div class="text-empresary fw-bold fs-4">$840</div>
								<small>MXN+IVA / ANUAL</small>
							</div>
							<div class="bg-light rounded p-3 text-center shadow-sm">
								<div class="fw-semibold">Línea 10 Canales</div>
								<div class="text-empresary fw-bold fs-4">$1,680</div>
								<small>MXN+IVA / ANUAL</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section 
		class="container-fluid py-4"
			v-motion-slide-visible-bottom
			:delay="200"
			:duration="1200"
	>
		<h2 class="display-5 fw-bold text-center m-4"><span class="text-empresary">PbxHosting</span> ofrece soluciones para todo tipo de empresas</h2>
		<div class="container">
			<div class="row g-3">
				<div v-for="(solution, index) in ipTelephonyData.solutions" :key="index" class="col-6 col-md-4 col-lg-3 col-xl-2 p-2">
					<div class="square-box border border-1 rounded-1 text-center d-flex flex-column justify-content-center align-items-center">
						<i :class="solution.img" class="display-1"></i>
						<div class="text-center">
							<span class="fw-bold">{{ solution.titulo }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container py-5 text-center">
		<button type="button" class="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
			<i class="bi bi-cloud-fog fs-4"></i> Conmutador en la nube
		</button>
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h3 class="modal-title fs-4 text-empresary" id="exampleModalLabel"><i class="bi bi-cloud-fog fs-4"></i> Conmutador en la nube</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row g-3">
						<div class="col-12 col-lg-5">
							<div class="">
								<img src="/img/conmtuador-pbx-conmutador-virtual.png" class="img-fluid" alt="hero-img">
							</div>
						</div>
						<div class="col-12 col-lg-7">
							<div class="text-center">
								<h3 class="display-5 fw-bold text-body-emphasis mb-3 text-empresary lh-1">
									<span class="text-body-emphasis fs-6">Conmutador Virtual</span> <br>
									PBX CLOUD
								</h3>
							</div>
							<p class="lead text-justify fs-6">
								Nuestro conmutador en la nube te brinda una completa flexibilidad y libertad al eliminar la necesidad de tener equipos 
								físicos en tus instalaciones. Todo el sistema se encuentra alojado en la nube, lo que significa que puedes acceder a él 
								desde cualquier lugar y en cualquier momento, simplemente con una conexión a Internet.
							</p>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<a type="button" class="btn btn-primary" href="/conmutador-en-la-nube">Ver Más</a>
				</div>
			</div>
		</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
	.text-empresary {
		color: var(--secondary_color) !important;
	}
	.text-justify {
		text-align: justify !important;
	}
	.lead {
		font-family: "Open Sans", sans-serif !important;
	}
	.bg-iptelephony {
		background-color: var(--secondary_color) !important;
	}
	.card {
		width: 18rem;
	}

	@media (max-width: 575px) {
		.card {
			width: 100%;
		}
	}

	/* Tabs personalizados */
.nav-tabs {
  border-bottom: none;
}
.nav-tabs .nav-link {
  border: none;
  background-color: #f8f9fa;
  margin: 0 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  color: #212529;
  transition: all 0.3s ease;
}
.nav-tabs .nav-link:hover {
  background-color: #e9ecef;
}
.nav-tabs .nav-link.active {
  background-color: #dc3545;
  color: #fff;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}


/* Tarjetas de precios */
.bg-light {
  background-color: #f8f9fa !important;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.nav-tabs .nav-link i {
  transition: color 0.3s, transform 0.3s;
  color: #6c757d; /* gris Bootstrap */
}

.nav-tabs .nav-link:hover i {
  color: #ffffff; /* azul Bootstrap primario */
  transform: scale(1.2);
}

.nav-tabs .nav-link.active i {
  color: #f5f5f5; /* azul para el tab activo */
}

.square-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  color: var(--secondary_color) !important;
}

.square-box:hover {
	background-color: var(--secondary_color) !important;
	color: #ffffff !important; /* azul Bootstrap primario */
}


</style>