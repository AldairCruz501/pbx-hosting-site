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
            <div class="container my-lg-5 animate__animated animate__fadeInUp animate__delay-3s">
                <div class="row g-3">
                    <div class="col-12 col-md-6 col-lg-8">
                        <span class="text-value fs-5 fw-semibold">Soluciones Callcenter</span>
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Mejora la productividad y la satisfacción del cliente</h1>
                        <p>Transforma tu centro de llamadas con nuestra solución de telefonía IP. Maximiza la eficiencia, optimiza recursos y brinda una experiencia de atención al cliente excepcional. ¡Descubre cómo nuestra tecnología revolucionará tus operaciones de call center!</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-lg px-4 me-md-2">Ver planes</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="/img/paquetes-telefonia-voip.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy">
                    </div>
                </div>
            </div>
        </section>
        <section 
            class="container-fluid py-5"
            v-motion-fade-visible
            :delay="200"
            :duration="1200"
        >
            <div class="container text-center my-lg-4">
                <div class="pt-3">
                    <h5 class="text-value fs-5 fw-semibold">HomeOffice</h5>
                    <h2 class="fw-bold mb-5 display-5">La oficina va contigo</h2>
                </div>
                <div class="row g-4">
                    <div class="col-12 col-md-6 col-xl-4" v-for="office in ipTelephonyData.offices">
                        <div class="value-card p-4 rounded-4 h-100 d-flex flex-column align-items-start text-start transition border border-danger">
                            <div class="rounded-circle bg-white text-value fw-bold d-flex justify-content-center align-items-center mb-3 border border-danger" style="width: 60px; height: 60px;">
                            <i :class="office.icono" class="fs-3"></i>
                            </div>
                            <h5 class="fw-bold fs-4">{{ office.titulo }}</h5>
                            <p class="fs-6 text-justify">{{ office.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section 
            class="container-fluid py-5"
            v-motion-slide-visible-right
            :delay="200"
            :duration="1200"
        >
            <div class="container">
                <div class="row g-5 justify-content-center">
                    <div class="col-12 col-lg-6">
                        <img src="/img/img-hero-ivr.jpg" class="img-fluid w-75" alt="Bootstrap Themes" loading="lazy">
                    </div>
                    <div class="col-12 col-lg-6">
                        <h2 class="fw-bold mb-2 display-5"><span class="text-value">IVR</span> Personalizado</h2>
                        <p class="text-justify">Nuestro IVR personalizado es como el anfitrión perfecto para tus llamadas telefónicas. Esta característica esencial ofrece una voz cálida y amigable que da la bienvenida a tus clientes y les guía a través de un menú de opciones diseñado especialmente para satisfacer sus necesidades.</p>
                        <div class="m-md-4 text-center">
                            <audio src="https://www.pbxhosting.com.mx/assets/images/ailyn_ivr.wav" controls></audio>
                        </div>
                        <div class="row g-4">
                            <div
                                class="col-12 col-sm-6 col-xl-4 d-flex justify-content-center"
                                v-for="point in ipTelephonyData.points"
                                :key="point.titulo"
                            >
                                <div
                                    class="d-flex align-items-center p-3 w-100 h-100"
                                    style="min-height: 100px; border-radius: 1rem;"
                                >
                                <div
                                    class="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0"
                                    style="width: 60px; height: 60px; background-color: var(--secondary_color);"
                                >
                                    <i :class="point.icono" class="fs-4 text-white"></i>
                                </div>
                                <div class="fw-bold lh-sm">
                                    <div>{{ point.titulo }}</div>
                                    <div>{{ point.subtitulo }}</div>
                                </div>
                                </div>
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
                <h2 class="fw-bold mb-4 display-4 text-value">Precio Paquetes VOIP</h2>
                    <img src="/img/telefonos-ip.png" class="img-fluid d-none d-xl-inline w-25" alt="">
                    <img src="/img/telefonos-ip.png" class="img-fluid d-inline d-xl-none" alt="">
            </div>
            <div class="container py-5">
                <div class="row g-4 justify-content-center">
                    <div
                        class="col-12 col-sm-10 col-md-6 col-lg-4 card-efect"
                        v-for="(price, index) in ipTelephonyData.pricesVoip"
                        :key="index"
                    >
                        <div class="card card-price h-100 d-flex flex-column p-3 shadow-sm border border-danger">
                            <div class="card-body d-flex flex-column align-items-center text-center">
                                <h5 class="card-title fs-4 mb-3">{{ price.titulo }}</h5>
                                <h4 class="fw-bold fs-1">
                                    ${{ price.precio }}
                                    <small class="text-muted fs-6">+IVA MXN</small>
                                </h4>
                                <p class="text-muted mb-4">Al Mes</p>
                                <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid">Contratar</a>
                                <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none">Contratar</a>
                                <ul class="list-unstyled text-start w-100">
                                    <li
                                        v-for="(feature, i) in price.características"
                                        :key="i"
                                        class="mb-2 d-flex align-items-start"
                                    >
                                        <i class="bi bi-check-circle-fill text-value me-2 mt-1"></i>
                                        <span>{{ feature }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bi bi-briefcase fs-4"></i> Paquete Cobranza
                </button>
            </div>
        </section>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title fs-4 text-empresary" id="exampleModalLabel"><i class="bi bi-briefcase fs-4"></i> Paquete Cobranza</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row g-3 p-4">
                            <div class="col-12 col-md-6 col-xl-6 mt-2 mb-3">
                                <h2 class="fw-bold mb-2 display-5 text-value text-center">Paquete Cobranza</h2>
                                <div class="mt-2 text-center">
                                    <div class="btn btn-info rounded-pill text-uppercase">
                                        <i class="bi bi-stars me-1 fs-4"></i> Premium <i class="bi bi-stars ms-1 fs-4"></i>
                                    </div>
                                </div>
                                <div class="mt-3 d-flex justify-content-center">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <i class="bi bi-check-circle-fill me-2 text-value"></i> PBXDialer 30
                                        </li>
                                        <li class="mb-2">
                                            <i class="bi bi-check-circle-fill me-2 text-value"></i>2 Líneas Telefónicas, 2 Canales
                                        </li>
                                        <li class="mb-2">
                                            <i class="bi bi-check-circle-fill me-2 text-value"></i>4,000Sms Masivos
                                        </li>
                                        <li class="mb-2">
                                            <i class="bi bi-check-circle-fill me-2 text-value"></i>Bolsa de Minutos: 5,000Min Fijos; 15,0000Min Telcel; 10,000Min Otros;
                                        </li>
                                    </ul>
                                </div>
                                <h4 class="fw-bold fs-1 text-center">
                                    $3,500
                                    <small class="text-muted fs-6">+IVA MXN</small>
                                </h4>
                                <p class="text-muted mb-4 text-center">Al Mes</p>
                            </div>
                        <div class="col-12 col-md-6 col-xl-6 mt-2">
                            <img
                            src="/img/equipo-soporte-reseller.png"
                            class="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            loading="lazy"
                            />
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <a type="button" class="btn btn-primary" href="">Contratar</a>
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
.text-justify {
    text-align: justify;
}
@media (max-width: 575.98px) {
    ul li {
        font-size: 15px;
        flex-direction:row;
        align-items: flex-start;
        gap: 15px;
    } 
}
.btn-info  {
    background-color: #FF972C !important;
    padding: 10px;
    width: fit-content;
    border-radius: 25px;
    color: #fff !important;
    font-weight: 700;
    font-size: 20px;
}
</style>