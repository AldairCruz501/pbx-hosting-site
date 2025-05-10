<script setup lang="ts">
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
</script>

<template>
        <div class="container-fluid">
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros en las redes sociales:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/PBXHostingMX/" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://x.com/PBX_Hosting" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.tiktok.com/@pbxhosting" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/pbxhostingmx/" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/pbx-hosting/" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@PBXHosting" target="_blank" class="me-4 text-reset text-decoration-none">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <img class="logo-footer" src="/img/pbx-logo.webp" alt="logo-footer">
                </h6>
                <p class="fs-6">
                    PbxHosting mejora la comunicación, la eficiencia y la productividad de las empresas, ofreciendo servicios de alta calidad, flexibilidad y rentabilidad en la transmisión de llamadas por Internet.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Enlaces
                </h6>
                <p class="fs-6">
                  <router-link to="/" class="text-reset text-decoration-none" >Inicio</router-link>
                </p>
                <p class="fs-6">
                  <router-link to="/nosotros" class="text-reset text-decoration-none" >Nosotros</router-link>
                </p>
                <p class="fs-6">
                  <router-link to="" class="text-reset text-decoration-none">Servicios</router-link>
                </p>
                <p class="fs-6">
                  <router-link to="" class="text-reset text-decoration-none">Soporte</router-link>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Servicios Estrella
                </h6>
                <p class="fs-6">
                  <router-link to="/telefonia-ip" class="text-reset text-decoration-none" >Telefonía IP</router-link>
                </p>
                <p class="fs-6">
                  <a href="#!" class="text-reset text-decoration-none">SMS Marketing</a>
                </p>
                <p class="fs-6">
                  <a href="#!" class="text-reset text-decoration-none">Conmutadores en la Nube</a>
                </p>
                <p class="fs-6">
                  <a href="#!" class="text-reset text-decoration-none">PBX Dialer</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                <p class="fs-6">
                  <i class="bi bi-envelope me-3"></i>
                  ventas@pbxhosting.com.mx
                </p>
                <p class="fs-6"><i class="bi bi-phone me-3"></i> 55 4170 8990</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          ©  2025 Todos los derechos reservados:
          <a class="text-reset fw-bold">PBX Hosting</a>
        </div>
      </footer>
    </div>
</template>

<style scoped>
    .logo-footer {
        width: 10rem;
    }
</style>
