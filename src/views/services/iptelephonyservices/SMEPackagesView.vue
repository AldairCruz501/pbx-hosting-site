<script lang="ts" setup>
	import FooterComponent from '../../../components/FooterComponent.vue';
	import HeaderComponent from '../../../components/HeaderComponent.vue';
	import LoaderComponent from '../../../components/LoaderComponent.vue';
	import { ipTelephonyData } from '../../../data/iptelephony';

</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="container-fluid py-5 bg-body-tertiary">
		<div class="container bg-white p-5 border-1 animate__animated animate__fadeInDown animate__delay-3s">
			<div class="row g-4">
				<div class="col-12 col-lg-7 pt-lg-5 mt-lg-5">
					<h1 class="display-3 fw-bold text-empresary">Paquetes Pyme</h1>
					<p class="lead mb-4">
						Con un paquete de telefonía para Pymes, decides el rumbo de tu negocio
					</p>
					<div class="text-start">
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adventagesModal">
							Ver Planes
						</button>
					</div>
				</div>
				<div class="col-12 col-lg-5">
					<div class="position-relative">
						<img src="/img/paquetes-pyme-emp.png" class="w-100" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid">
		<div class="container">
			<div class="row g-3 g-xl-0">
				<div 
					class="col-12 col-lg-6"
					v-motion-slide-visible-left
					:delay="200"
					:duration="1200"
				>
					<div class="ms-lg-5 ps-lg-5">
						<img src="/img/pyme-img.png" class="img-fluid" alt="hero-img">
					</div>
				</div>
				<div 
					class="col-12 col-lg-6 rounded-3 bg-danger p-5"
					v-motion-slide-visible-right
					:delay="200"
					:duration="1200"
				>
					<div class="m-5">
						<h2 class="display-5 fw-bold text-white text-center mb-4">¡Maximiza el Potencial de Tu Empresa!</h2>
						<p class="mb-4 text-light fs-5 text-justify">
							Paquete especial para pequeñas y medianas empresas, soluciones de comunicación empresarial modernas y eficientes a través de nuestros servicios de Troncales SIP y Conmutador en la Nube.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid">
		<div 
			class="container"
			v-motion-fade-visible
			:delay="200"
			:duration="1200"
		>
			<div class="text-center pb-5">
				<span class="fs-2 fw-semibold">¡Contrata Ya!</span>
				<h3 class="display-4 fw-bold text-empresary lh-1">¿Porqué un Paquete Pyme?</h3>
			</div>
			<div class="row g-3">
				<div class="col-12 col-xl-6">
					<div class="row g-4">
						<div class="col-12 col-md-6" v-for="pyme in ipTelephonyData.pymes" :key="pyme.titulo">
							<div class="value-card h-100 d-flex flex-row align-items-start text-start transition gap-3">
								<!-- Icono a la izquierda -->
								<div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center border border-danger" style="width: 60px; height: 60px; flex-shrink: 0;">
									<i :class="pyme.icono" class="fs-3 text-empresary"></i>
								</div>

								<!-- Texto a la derecha -->
								<div>
									<h5 class="fw-bold fs-4 text-empresary mb-1">{{ pyme.titulo }}</h5>
									<p class="fs-6 text-justify mb-0">{{ pyme.descripcion }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-6">
					<div class="ms-lg-5 ps-lg-5 mt-lg-5">
						<img src="/img/img-paq-voip.png" class="img-fluid" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid py-5">
		<div 
			class="container"
			v-motion-slide-visible-bottom
			:delay="200"
			:duration="1200"
		>
			<div class="text-center pb-5">
				<span class="fs-2 fw-semibold">Ahorra y Crece Hoy</span>
				<h3 class="display-4 fw-bold text-empresary lh-1">Paquetes Pymes</h3>
			</div>	
			<div class="row g-3">
				<div class="col-12 col-xl-4 card-efect" v-for="pyme in ipTelephonyData.pricesPyme">
					<div class="card card-price h-100 d-flex flex-column shadow rounded-4 p-4 mx-auto" style="max-width: 370px;">
						<div class="text-center mb-1">
							<i class="bi bi-building-fill-gear display-3"></i>
							<h5 class="mt-3 fw-semibold">PYME</h5>
						</div>
						<div class="text-center mb-3">
							<span class="badge bg-primary bg-opacity-10 text-primary fw-medium fs-3">{{ pyme.titulo }}</span>
							<h3 class="fw-bold mt-4 mb-0 fs-1">${{ pyme.precio }} <span class="small fs-5 text-muted text-uppercase">Mxn+iva</span></h3>
							<small class="text-muted">Contratación</small>
						</div>

						<hr>
						<div class="text-center mb-3">
							<span class="badge bg-info bg-opacity-10 text-info fw-medium">Renovación</span>
							<h3 class="fw-bold mt-2 mb-0 fs-3">${{pyme.mensualidad}} <small class="small fs-6 text-muted text-uppercase">Mxn+iva</small></h3>
							<small class="text-muted">Al Mes</small>
						</div>

						<hr>

						<ul class="list-unstyled">
							<li
								v-for="(feature, i) in pyme.características"
								:key="i"
								class="mb-2 d-flex align-items-start"
							>
								<i class="bi bi-check-circle-fill me-2 mt-1"></i>
								<span>{{ feature }}</span>
							</li>
						</ul>
					</div>
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
.text-justify {
	text-align: justify !important;
}
.text-color:hover li {
	color: #FFFFFF !important;
}

.text-color:hover i {
	color: #FFFFFF !important;
}

.card-price::before {
    position: absolute;
    content: '';
    inset: 0;
    background: transparent !important;
    z-index: -1;
    transition: opacity 0.4s linear;
    opacity: 0;
    border-radius: 10px !important;
}

.card-efect {
    overflow: hidden;
}

.card-efect:hover .card {
    -webkit-transform:scale(-1);transform:scale(0.95);
}

@media (max-width: 575.98px) {
    ul li {
		flex-direction:row;
	} 
}
</style>