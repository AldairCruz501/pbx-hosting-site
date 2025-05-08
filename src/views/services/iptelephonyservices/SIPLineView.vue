<script lang="ts" setup>
	import FooterComponent from '../../../components/FooterComponent.vue';
	import HeaderComponent from '../../../components/HeaderComponent.vue';
	import LoaderComponent from '../../../components/LoaderComponent.vue';
	import TabsSliderComponent from '../../../components/TabsSliderComponent.vue';
	import { ipTelephonyData } from '../../../data/iptelephony';


</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="container-fluid py-5">
		<div class="container">
			<div class="row g-4">
			<div class="col-12 col-lg-7 pt-lg-5 mt-lg-5">
				<h1 class="display-5 fw-bold">Enlace <span class="text-empresary">Troncal SIP</span></h1>
				<p class="lead mb-4">
					Una troncal SIP es una tecnología de VoIP que permite realizar llamadas y otros servicios 
					de comunicación a través de Internet usando el protocolo SIP, el cual gestiona el inicio, 
					modificación y finalización de sesiones como llamadas de voz y video.
				</p>
				<div class="text-center">
					<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adventagesModal">
						<i class="bi bi-star-fill"></i> Ventajas de Troncal SIP
					</button>
				</div>
				<div class="modal fade" id="adventagesModal" tabindex="-1" aria-labelledby="adventagesModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title fs-5 fw-bold text-empresary" id="adventagesModalLabel">
								<i class="bi bi-star-fill"></i> Ventajas de Troncal SIP
							</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div class="row g-3">
								<div v-for="(card, index) in ipTelephonyData.advantages" :key="index" class="col-12 col-lg-6 col-xl-4 d-flex">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">{{ card.titulo }}</h5>
											<p class="card-text  mt-auto small"> {{ card.descripción }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
						</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5">
				<div class="position-relative">
					<img src="/img/img-hero-sip.jpg" class="w-100" alt="hero-img">
				</div>
			</div>
		</div>
		</div>
	</section>
	<section class="container-fluid bg-body-tertiary">
		<div class="container">
			<h2 class="display-6 fw-bold text-center">Costo de <span class="text-empresary">Troncal SIP</span></h2>
			<p class="lead mb-4 fs-6 text-center">
				No dejes pasar esta oportunidad de transformar tu forma de comunicarte y, al mismo tiempo, 
				reducir significativamente tus costos operativos. Únete a la revolución de la comunicación 
				con nosotros y experimenta la libertad de una Troncal SIP <span class="fw-bold">sin costo</span>.
			</p>
			<div class="row">
				<div class="col-12 col-md-6">
					<div class="ms-lg-5 ps-lg-5 text-xl-end">
						<img src="/img/linea-sip-mundial.png" class="img-fluid" alt="hero-img">
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="card w-50 text-color d-none d-xl-block">
						<div class="card-body text-center">
							<h5 class="card-title fw-bold fs-3 text-uppercase">Gratis</h5>
							<img src="/img/imagen-lineasip.svg" class="img-fluid w-50" alt="hero-img">
							<ul class="mb-4">
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-2"></i> 
									Troncales ilimitadas
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-2"></i> 
									Estadísticas
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-2"></i> 
									Panel Web
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-2"></i> 
									Soporte Técnico
								</li>
							</ul>
							<button class="btn btn-success btn-outline-rounded green">
                  				Contratar
                			</button>
						</div>
					</div>
					<div class="card text-color d-block d-xl-none">
						<div class="card-body text-center">
							<h5 class="card-title fw-bold fs-3 text-uppercase">Gratis</h5>
							<img src="/img/imagen-lineasip.svg" class="img-fluid w-50" alt="hero-img">
							<ul>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-sm-2"></i> 
									Troncales ilimitadas
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-sm-2"></i> 
									Estadísticas
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-sm-2"></i> 
									Panel Web
								</li>
								<li>
									<i class="bi bi-check-circle-fill m-0 mx-sm-2"></i> 
									Soporte Técnico
								</li>
							</ul>
							<button class="btn btn-success btn-outline-rounded green">
                  				Acción
                			</button>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center pt-5">
				<button class="btn btn-success btn-outline-rounded green">
					Paquetes VOIP
				</button>
			</div>
		</div>
	</section>
	<section class="container-fluid py-5">
		<div class="ps-5 pe-5">
			<div class="row">
				<div class="col-12 col-xl-6">
					<h2 class="fs-3 fw-bold text-end">¿Cómo funciona una Troncal SIP? <br><span class="text-empresary display-6 fw-bold">Funcionamiento Troncal SIP</span></h2>
				</div>
				<div class="col-12 col-xl-6">
					<div class="text-start">
						<img src="/img/funcionamiento-sip.svg" class="img-fluid w-75" alt="hero-img">
					</div>
				</div>
			</div>
			<div class="container">
				<div class="shadow mt-xl-5">
					<TabsSliderComponent />
				</div>
			</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
.text-empresary {
	color: var(--secondary_color);
}
.text-color:hover li {
	color: #FFFFFF !important;
}

.text-color:hover i {
	color: #FFFFFF !important;
}

@media (max-width: 575.98px) {
    ul li {
		flex-direction:row;
	} 
}
</style>