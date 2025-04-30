<script setup lang="ts">
import CounterComponent from '../components/CounterComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import { homeData } from '../data/home';
</script>

<template>
	<LoaderComponent />
  	<HeaderComponent />
 	<section class="hero-home text-center text-md-start bg-body-tertiary">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 mb-4">
					<h1 class="large-title position-relative">
						Conectamos lo que más importa: tu negocio y tus clientes.
					</h1>
				</div>
				<div class="col-12 col-lg-6">
					<div class="hero-home-right position-relative">
						<img src="/img/img-hero.webp" class="w-100 h-100" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="features-home">
		<div class="container">
			<div class="row">
				<div v-for="(card, index) in homeData.cards" :key="index" class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" >
					<div class="card text-center">
						<img :src="card.imagen" alt="img-feature" class="img-fluid mx-auto w-75">
						<div class="card-body">
							<h4 class="card-title">{{ card.titulo }}</h4>
							<p class="mb-0">{{ card.descripcion }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-body-tertiary">
		<div class="container-fluid">
			<div class="container col-xxl-8">
				<div class="row d-flex align-items-center g-5 py-5">
					<div class="col-10 col-sm-8 col-lg-6">
						<img src="/img/img-callcenter.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  width="90%" loading="lazy">
					</div>
					<div class="col-lg-6">
						<h4 class="subtitle-hero fs-5">Servicios Escalables</h4>
						<h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Soluciones VoIP Personalizadas para empresas de todos los tamaños</h2>
						<p>Optimiza tu comunicación empresarial con servicios voip adaptados a las necesidades específicas de tu empresa o call center. Desde pequeños negocios hasta grandes corporativos, ofrecemos soluciones personalizadas que impulsan tu éxito.</p>
						<div class="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" class="btn btn-lg px-4 me-md-2">Asesorate</button>
						</div>
					</div>
				</div>
			</div>
    	</div>
	</section>
	<CounterComponent />
	<section class="services-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="services-title pt-4">
						<p class="subtitle-service text-uppercase fw-bold mb-3">Nuestros Servicios</p>
						<h1 class="text-uppercase">Para cualquier tipo de empresa</h1>
						<p class="services-text">Conoce la gran variedad de servicios que te ofrecemos.</p>
					</div>
      			</div>
				  <div v-for="(service, index) in homeData.services" :key="index" class="col-lg-4 col-md-6 service-item">
					<a class="text-black text-decoration-none" href="">
						<div class="block"> <span class="colored-box text-center h3 mb-4">{{service.num}}</span>
							<h3 class="mb-3 service-title">{{ service.nombre }}</h3>
							<p class="mb-0 service-description">{{ service.descripcion }}</p>
						</div>
					</a>
     			</div>
			</div>
		</div>
	</section>
	<section class="container-fluid bg-options">
      <div class="px-4 pt-5 text-center text-white">
        <h1 class="display-4 fw-bold"><span class="title-dialer">PBXDialer:</span> Software de Call Center Intuitivo</h1>
        <div class="col-lg-6 mx-auto pb-4">
          <p class="lead mb-4 text-dialer">PBXDialer optimiza la contactación y el servicio al cliente con su interfaz intuitiva y marcador predictivo, mejorando la productividad del equipo y la satisfacción del cliente.</p>
        </div>
        <div class="overflow-hidden">
          <div class="container px-5">
            <img src="/img/pbx-dialer-img.webp" class="img-fluid" alt="Example image"loading="lazy">
          </div>
        </div>
      </div>
    </section>
	<section class="section bg-body-tertiary">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<div class="col-lg-5">
					<div class="reseller-title">
					<p class="subtitle-reseller text-uppercase fw-bold mb-3">Genera Ganancias</p>
					<h1>Conviértete en Revendedor</h1>
					<div class="content mb-0 mt-4">
						<p class="reseller-text">
							Ofrecemos la oportunidad de revender nuestro servicio de Telefonía IP, 
							permitiéndote expandir tu negocio y ofrecer a tus clientes una solución 
							de comunicaciones de alta calidad y rentable.
						</p>
					</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div v-for="(reseller, index) in homeData.resellers" :key="index" class="reseller-item p-3 rounded mr-0 me-lg-4">
						<div class="d-block d-sm-flex align-items-center m-2">
							<div class="icon me-4 mb-4 mb-sm-0"> <i :class="reseller.icono" style="font-size:36px"></i>
							</div>
							<div class="block">
								<h3 class="mb-3">{{ reseller.titulo }}</h3>
								<p class="mb-0 reseller-text">
									{{ reseller.descripcion }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="row g-4">
						<div class="col-12">
							<div class="d-flex align-items-start card-hover">
								<div class="icon-circle me-3">
									<img src="/img/plazo-forzoso.png" alt="" class="img-fluid">
								</div>
								<div>
									<div class="highlight-text">Sin plazos forzosos</div>
									<p class="text-dialer">Usa nuestro servicio sin contratos largos ni compromisos. Tú decides cuándo parar, sin penalizaciones.</p>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="d-flex align-items-start card-hover">
								<div class="icon-circle me-3">
									<img src="/img/paga-que-llamas.png" alt="" class="img-fluid">
								</div>
								<div>
									<div class="highlight-text">Paga por lo que llamas</div>
									<p class="text-dialer">Solo paga por los minutos que realmente usas. Sin cargos fijos ni sorpresas inesperadas en tu factura.</p>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="d-flex align-items-start card-hover">
								<div class="icon-circle me-3">
									<img src="/img/ladas-mexico.png" alt="" class="img-fluid">
								</div>
								<div>
									<div class="highlight-text">+300 Ladas México</div>
									<p class="text-dialer">Ofrecemos líneas telefónicas de más de 300 Ladas en México. Amplía tu presencia local en todo el país fácilmente.</p>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="d-flex align-items-start card-hover">
								<div class="icon-circle me-3">
									<img src="/img/tarifa-minuto.png" alt="" class="img-fluid">
								</div>
								<div>
									<div class="highlight-text">La mejor tarifa por minuto</div>
									<p class="text-dialer">Disfruta de las tarifas más bajas por minuto, ¡te podemos mejorar fácilmente la tarifa del proveedor actual!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 text-center">
					<img src="/img/img-options.png" alt="Illustration" class="img-fluid">
				</div>
			</div>
		</div>
	</section>
	<FooterComponent />
</template>

<style scoped>
	.hero-home{
		padding: 100px 0px 150px;
    	background-position: right center;
	}
	.hero-home p {
		margin-bottom: 35px;
		font-family: "Open Sans", sans-serif !important;
	}
	.hero-home-right{
		width: 100%;
    	height: 636px;
	}
	.features-home .card {
		padding: 50px 30px 40px;
	}
	.features-home img {
		margin-bottom: 40px;
	}
	.features-home .card-title {
		color: var(--secondary_color);
    	margin-bottom: 18px;
    	transition: 0.4s all;
	} 
	.features-home .card:hover .card-title  {
		color: var(--default_color);
    	transition: 0.4s all;
	}
	.features-home p {
		transition: 0.4s all;
		font-family: "Open Sans", sans-serif !important;
	}
	.features-home .cardl:hover p {
		color: var(--default_color);
    	transition: 0.4s all;
	}
	.subtitle-hero,
	.subtitle-service,
	.subtitle-reseller {
		color: var(--secondary_color)
	}
	.voip-home p,
	.text-dialer {
		font-family: "Open Sans", sans-serif !important;
	}
	.services-section,
	.reseller-section{
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.services-title,
	.reseller-title {
 		margin-bottom: 30px;
		font-family: "Poppins", sans-serif !important;
	}
	.services-text,
	.reseller-text {
 		margin-bottom: 30px;
		font-family: "Open Sans", sans-serif !important;
	}
	.service-item {
		border-top: 1px solid #F4F4F4;
		border-right: 1px solid #F4F4F4;
		transition: 0.3s;
		position: relative;
		z-index: 10;
	}
	.service-item:hover,
	.reseller-item:hover {
		box-shadow: 0px 25px 65px 0px rgba(0, 0, 0, 0.1) !important;
	}
	.service-item .colored-box {
		display: inline-block;
		height: 70px;
		width: 70px;
		line-height: 70px;
		border-radius: 8px;
		color: var(--secondary_color);
		background-color: rgba(181, 81, 81, 0.2);
	}
	.service-item .service-title {
	transition: color 0.3s;
	}
	.service-item .service-description {
		color: var(--text_color);
		font-family: "Open Sans", sans-serif !important;
	}
	.service-item a:hover .service-title {
		color: var(--secondary_color);
	}
	.service-item a:hover .service-description {
		color: var(--color-tercary);
	}
	.service-item .block,
	.reseller-item .block {
		padding: 35px 39px;
	}
	@media (min-width: 991px) {
	.service-item:nth-child(2), .service-item:nth-child(4) {
		border-left: 1px solid #F4F4F4;
	}
	.service-item:nth-child(4), .service-item:nth-child(5), .service-item:nth-child(6) {
		border-bottom: 1px solid #F4F4F4;
	}
	}
	@media (max-width: 991px) {
	.service-item:nth-child(2), .service-item:nth-child(3), .service-item:nth-child(5) {
		border-left: 1px solid #F4F4F4;
	}
	.service-item:nth-child(6), .service-item:nth-child(5) {
		border-bottom: 1px solid #F4F4F4;
	}
	}
	@media (max-width: 767px) {
	.service-item {
		border: 1px solid #F4F4F4;
		border-bottom: 0;
	}
	}
	.service-item:nth-child(even) .colored-box {
		color: var(--primary_color);
		background-color: rgba(157, 149, 189, 0.2);
	}
	.service-item:hover {
		border-color: transparent;
	}
	.reseller-item {
  		position: relative;
  		transition: 0.3s;
	}
	.reseller-item:not(:last-child) {
		margin-bottom: 10px;
	}
	.reseller-item .icon {
		height: 85px;
		flex: 0 0 auto;
		width: 85px;
		line-height: 85px;
		text-align: center;
		border-radius: 8px;
		color: var(--secondary_color);
		background-color: rgba(181, 81, 81, 0.2);
	}
	.reseller-item:nth-child(even) .icon {
		color: var(--primary_color);
		background-color: rgba(157, 149, 189, 0.2);
	}
	.title-dialer {
		color: var(--secondary_color);
	}
	.bg-options {
		background-color: rgba(181, 81, 81, 0.2);
	}
	.icon-circle {
      background-color: var(--secondary_color);
      border-radius: 5%;
      padding: 25px;
      color: white;
      font-size: 1.5rem;
    }
    .highlight-text {
      font-weight: bold;
      font-size: 1.25rem;
    }
    .custom-section {
      padding: 60px 0;
    }
    .illustration-img {
      width: 100%;
      max-width: 400px;
    }
	.card-hover {
      transition: all 0.3s ease;
      padding: 15px;
      border-radius: 10px;
    }
    .card-hover:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
</style>
