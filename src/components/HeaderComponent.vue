<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { servicios, carruselItems } from '../data/header';

  const columnas = computed(() => {
    const total = servicios.length
    const chunk = Math.ceil(total / 3)
    return [
      servicios.slice(0, chunk),
      servicios.slice(chunk, chunk * 2),
      servicios.slice(chunk * 2)
    ]
  })

  const { locale } = useI18n();
  const { t } = useI18n();

// Reactive para el select
const localeRef = ref(localStorage.getItem('locale') || locale.value);

// Cambiar idioma y guardar en localStorage
function changeLocale() {
  locale.value = localeRef.value;
  localStorage.setItem('locale', localeRef.value);
}

// Si el idioma cambia desde otro sitio, sincronizamos el select
watch(locale, (newLocale) => {
  if (localeRef.value !== newLocale) {
    localeRef.value = newLocale;
  }
});

</script>

<template>
  <header class="header-pbx sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <router-link class="navbar-brand" to="/" >
          <img src="/img/pbx-logo.webp" alt="Logo-pbx" class="w-100" />
        </router-link>

        <!-- Botón toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Offcanvas para móviles -->
        <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <img src="/img/pbx-logo.webp" alt="Logo-pbx" class="w-25" />
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/nosotros" >{{ t('header.navs.about') }}</router-link>
            </li>
            <!-- Solo en móviles -->
            <div class="d-lg-none">
              <li class="nav-item">
                <a class="nav-link text-uppercase" data-bs-toggle="collapse" href="#serviciosCollapse" role="button" aria-expanded="false" aria-controls="serviciosCollapse">
                  {{ t('header.navs.services') }}
                </a>
                <div class="collapse" id="serviciosCollapse">
                <div class="mb-3">
                  <h6 class="text-color fw-bold fs-5">{{ t('header.carousel.title') }}</h6>
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div
                        v-for="(item, index) in carruselItems"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                      >
                        <img :src="item.img" class="d-block w-100" alt="img-promocion" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <a href="#" class="text-decoration-none text-color">
                    {{ t('header.carousel.more') }} <i class="bi bi-chevron-right float-end"></i>
                  </a>
                </div>
                <ul class="list-unstyled ps-3">
                  <li v-for="grupo in servicios">
                    <strong>{{ t (grupo.nameKey) }}</strong>
                    <ul>
                      <li v-for="sub in grupo.services">
                        <router-link class="dropdown-item" :to="sub.route" >
                          <i :class="`bi ${sub.icon}`" class="me-2"></i> {{ t(sub.nameKey) }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              </li>
            </div>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" >{{ t('header.navs.support') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" >{{ t('header.navs.contact') }}</a>
            </li>
          </ul>
            <a href="https://www.pbxhosting.com.mx/clientarea/" target="_blank" class="btn mt-3 w-100">{{ t('header.navs.button') }}</a>
                      <!-- Selector idioma en desktop -->
          <div class="mt-4 mx-auto mx-3">
            <select v-model="localeRef" @change="changeLocale" class="form-select form-select-sm fs-6">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          </div>
        </div>
        <div class="collapse navbar-collapse justify-content-between d-none d-lg-flex" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/nosotros" >{{ t('header.navs.about') }}</router-link>
            </li>

            <!-- Mega Menú -->
            <li class="nav-item dropdown position-static">
              <a class="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                {{ t('header.navs.services') }}
              </a>
              <div class="dropdown-menu w-100 mega-menu shadow p-4 mt-0">
                <div class="row">
                  <!-- Columna 1: Carrusel -->
                  <div class="col-lg-3">
                    <h6 class="text-color fw-bold fs-5">{{ t('header.carousel.title') }}</h6>
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          v-for="(item, index) in carruselItems"
                          :key="index"
                          class="carousel-item"
                          :class="{ active: index === 0 }"
                        >
                          <img :src="item.img" class="d-block w-100" alt="img-promocion" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <a href="#" class="text-decoration-none text-color">
                      {{ t('header.carousel.more') }} <i class="bi bi-chevron-right float-end"></i>
                    </a>
                  </div>

                  <!-- Columnas 2-4: Servicios -->
                  <div
                    v-for="(col, colIndex) in columnas"
                    :key="colIndex"
                    class="col-lg-3"
                  >
                    <div v-for="grupo in col">
                      <h6 class="text-color fw-bold fs-5">
                        <i :class="`bi ${grupo.icon}`" class="mx-1"></i>{{ t(grupo.nameKey) }}
                      </h6>
                      <ul class="list-unstyled">
                        <li v-for="sub in grupo.services">
                          <router-link class="dropdown-item" :to="sub.route" >
                            <i :class="`bi ${sub.icon}`" class="m-0"></i> {{ t(sub.nameKey) }}
                          </router-link>
                        </li>
                        <!-- <li v-if="grupo.services.length === 0" class="text-muted ps-3">
                          Próximamente...
                        </li> -->
                      </ul>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" >{{ t('header.navs.support') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" >{{ t('header.navs.contact') }}</a>
            </li>
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link text-uppercase" href="https://www.pbxhosting.com.mx/clientarea/" target="_blank">{{ t('header.navs.button') }}</a>
            </li>
          </ul>
          <!-- Selector idioma en desktop -->
          <div class="d-none d-lg-block ms-auto me-3">
            <select v-model="localeRef" @change="changeLocale" class="form-select form-select-sm">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          <div class="d-none d-lg-block">
            <a href="https://www.pbxhosting.com.mx/clientarea/" target="_blank" class="btn">{{ t('header.navs.button') }}</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .header-pbx {
    background: var(--background_color);
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.06);
  }
  .navbar-brand{
    max-width: 100px;
  }
  .navbar {
    padding: 18px 0px;
  }
  .header-pbx .navbar-nav {
    border-left: 1px solid var(--primary_color);
  }
  .header-pbx .navbar-nav .nav-item {
    margin: 0px 14px;
    display: flex;
    align-items: center;
  }
  .header-pbx .nav-link {
    color: var(--text-color);
    font-size: 17px;
    font-weight: 500;
    padding: 0px 0px;
    background: transparent;
    transition: .4s all ease;
  }
  .header-pbx .nav-link:hover{
    color: var(--primary_color);
    transition: .4s all ease;
  }

  .mega-menu {
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
  top: 100% !important;
  z-index: 1000;
  margin: 0 auto;
}

/* Estilos para móviles */
@media (max-width: 991.98px) {
  .mega-menu {
    position: static !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 1rem 0;
    box-shadow: none !important;
  }

  .mega-menu .row {
    flex-direction: column;
  }

  .mega-menu .col-lg-3 {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .dropdown-menu {
    position: static !important;
    transform: none !important;
    display: block !important;
  }

  .navbar-nav {
    border-left: none !important;
  }

  .nav-link,
  .dropdown-item {
    font-size: 1rem;
    word-wrap: break-word;
  }
}

.hover-productos {
  background-color: var(--primary_color);
  transition: background-color 0.3s ease;
  color: var(--default_color);
}

.sub-link {
  color: var(--default_color);
}

.sub-link:hover {
  color: var(--color-tercary);
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > .dropdown-item {
  white-space: nowrap;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
  position: absolute;
  left: 100%;
  top: 0;
  margin-top: -1px;
}

.dropdown-submenu .dropdown-menu {
  display: none;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.dropdown-item {
  transition: all 0.2s ease-in-out; /* Suaviza la animación */
}

.dropdown-item:hover {
  background-color: var(--primary_dark) !important;
  color: #ffffff !important;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
  border-radius: 0.25rem;
}

.dropdown-item:hover i {
  color: #ffffff !important;
}


.text-color {
  color: var(--primary_color) !important;
}

@media(max-width: 991px) {
  ul li {
    color: var(--text_color);
    margin: none !important;
    display: block !important;
    align-items: center;
  }
}

</style>