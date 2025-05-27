<script lang="ts" setup>
import FooterComponent from '../../../components/FooterComponent.vue';
import HeaderComponent from '../../../components/HeaderComponent.vue';
import LoaderComponent from '../../../components/LoaderComponent.vue';
import SoftphoneComponent from '../../../components/SoftphoneComponent.vue';
import { ipTelephonyData } from '../../../data/iptelephony';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
                    <h1 class="display-4 fw-bold text-body-emphasis lh-1 mb-3 align-content-center">{{ t('telephoneLine.hero.title') }}</h1>
					<p class="lead">
                        {{ t('telephoneLine.hero.description') }}
                        
					</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center my-lg-5 text-center">
						<button type="button" class="btn btn-lg px-4 me-md-2">{{ t('telephoneLine.hero.button') }}</button>
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
                            <h5 class="card-title fs-2 fw-bold">{{ t(card.tituloKey) }}</h5>
                            <p class="card-text">{{ t(card.descrpitionKey) }}</p>
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
            <span class="mb-4 fs-1">{{ t('telephoneLine.prices.0.badge') }}</span>
            <h2 class="fw-bold mb-4 display-4 text-value">{{ t('telephoneLine.prices.0.title') }}</h2>
        </div>
        <div class="container py-5">
            <div class="row g-4 justify-content-center">
                <div class="col-md-6 col-lg-4 card-efect" v-for="price in ipTelephonyData.prices">
                    <div class="card card-price h-100 shadow-sm">
                        <div class="card-body text-center">
                            <span class="badge bg-light text-value mb-3 fw-semibold fs-6">{{ t(price.insigniaKey) }}</span>
                            <h5 class="card-title">{{ t(price.tituloKey) }}</h5>
                            <p class="mb-3"><span class="fw-bold">{{ t('telephoneLine.prices.0.country') }} </span> {{ t(price.paisKey) }}</p>
                            <img :src="price.imgPais" alt="" width="50" class="img-fluid mb-3">
                            <h4 class="fw-bold fs-2">${{ price.precio }} <small class="text-muted fs-6">{{ t('telephoneLine.prices.0.price') }}</small></h4>
                            <p class="text-muted mb-4">{{ t('telephoneLine.prices.0.plan') }}</p>
                            <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid">{{ t('telephoneLine.prices.0.button') }}</a>
                            <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none">{{ t('telephoneLine.prices.0.button') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
		<button type="button" class="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
			<i class="bi bi-cloud-fog fs-4"></i> {{ t('ipTelephony.cloudSwitch.title') }}
		</button>
        </div>
    </section>
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title fs-4 text-empresary" id="exampleModalLabel"><i class="bi bi-cloud-fog fs-4"></i> {{ t('ipTelephony.cloudSwitch.title') }}</h3>
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
										<span class="text-body-emphasis fs-6">{{ t('ipTelephony.cloudSwitch.badge') }}</span> <br>
										{{ t('ipTelephony.cloudSwitch.subtitle') }}
									</h3>
								</div>
								<p class="lead text-justify fs-6">
									{{ t('ipTelephony.cloudSwitch.description') }}
								</p>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<a type="button" class="btn btn-primary" href="/conmutador-en-la-nube">{{ t('ipTelephony.cloudSwitch.button') }}</a>
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