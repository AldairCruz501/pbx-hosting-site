<script lang="ts" setup>
import FooterComponent from '../../../components/FooterComponent.vue';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import LoaderComponent from '../../../components/LoaderComponent.vue';
import SoftphoneComponent from '../../../components/SoftphoneComponent.vue';
import { ipTelephonyData } from '../../../data/iptelephony';
</script>

<template>
    <LoaderComponent />
    <HeaderComponent />
    <section class="container-fluid py-1 bg-body-tertiary">
        <div class="container animate__animated animate__fadeInUp animate__delay-3s">
            <div class="row g-3 m-5 text-center">
                <div class="col-12">
                    <div class="position-relative text-center">
						<img src="/img/img-hero-linephone.jpg" class="img-fluid d-none d-lg-inline" alt="hero-img" width="500">
                        <img src="/img/img-hero-linephone.jpg" class="img-fluid d-block d-lg-none" alt="hero-img">
					</div>
                </div>
                <div class="col-12">
                    <h1 class="display-4 fw-bold text-body-emphasis lh-1 mb-3 align-content-center">Línea Telefónica</h1>
					<p class="lead">
                        Conecta tu negocio al futuro con llamadas claras y confiables a través de internet.
					</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center my-lg-5 text-center">
						<button type="button" class="btn btn-lg px-4 me-md-2">Ver precios</button>
					</div>
                </div>
            </div>
        </div>
    </section>
    <SoftphoneComponent />
    <section 
        class="container-fluid"
        v-motion-fade-visible
        :delay="200"
        :duration="1200"
    >
        <div class="container mx-auto">
            <div class="row">
                <div class="col-12 col-md-6 mb-3" v-for="card in ipTelephonyData.qualities">
                    <div class="card p-4 h-100 d-flex flex-column">
                        <img :src="card.img" class="card-img-top w-50 mx-auto" alt="">
                        <div class="card-body text-center">
                            <h5 class="card-title fs-2 fw-bold">{{ card.titulo }}</h5>
                            <p class="card-text">{{ card.descrpition }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section 
        class="container-fluid"
        v-motion-slide-visible-bottom
        :delay="200"
        :duration="1200"
    >
        <div class="text-center">
            <span class="mb-4 fs-1">Líneas Telefónicas</span>
            <h2 class="fw-bold mb-4 display-4 text-value">Precios Líneas Telefónicas</h2>
        </div>
        <div class="container py-5">
            <div class="row g-4 justify-content-center">
                <div class="col-md-6 col-lg-4 card-efect" v-for="price in ipTelephonyData.prices">
                    <div class="card card-price h-100 shadow-sm">
                        <div class="card-body text-center">
                            <span class="badge bg-light text-value mb-3 fw-semibold fs-6">{{ price.insignia }}</span>
                            <h5 class="card-title">{{ price.titulo }}</h5>
                            <p class="mb-3"><span class="fw-bold">País: </span>{{ price.pais }}</p>
                            <img :src="price.imgPais" alt="" width="50" class="img-fluid mb-3">
                            <h4 class="fw-bold fs-2">${{ price.precio }} <small class="text-muted fs-6">+IVA MXN</small></h4>
                            <p class="text-muted mb-4">Anual</p>
                            <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid">Comprar</a>
                            <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
			    <i class="bi bi-cloud-fog fs-4"></i> Conmutador en la nube
		    </button>
        </div>
    </section>
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
    <FooterComponent />
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

.card-price:hover h5,
.card-price:hover p {
    color: black;
    transition: 0.4s all;
}

.card-efect {
    overflow: hidden;
}

.card-efect:hover .card {
    -webkit-transform:scale(-1);transform:scale(0.95);
}
</style>