<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { servicios as serviciosList } from '../data/header';
  import type { Servicio } from '../interfaces/Header';

  const servicios = ref<Servicio[]>(serviciosList)

  const activeServicio = ref<string | null> (null)
  const showMegaMenu = ref(false)

  const getServicios = computed(() => {
  const serv = servicios.value.find(s => s.nombre === activeServicio.value)
    if (!serv) return []
    const chunkSize = 2
    const chunks = []
    for (let i = 0; i < serv.servicios.length; i += chunkSize) {
      chunks.push(serv.servicios.slice(i, i + chunkSize))
    }
    return chunks
  })

  function handleMouseEnter(name: string) {
    activeServicio.value = name
    showMegaMenu.value = true
  }

  function handleMouseLeave() {
    showMegaMenu.value = false
  }

</script>

<template>
  <header class="header-pbx sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <img src="/img/pbx-logo.webp" alt="Logo-pbx" class="w-100">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="">Nosotros</a>
            </li>
            <li class="nav-item dropdown position-static" @mouseleave="handleMouseLeave">
              <a class="nav-link dropdown-toggle text-uppercase" href="#" @mouseenter="handleMouseEnter(servicios[0].nombre)" data-bs-toggle="dropdown">
                Servicios
              </a>
              <div class="dropdown-menu w-100 mt-0 border-0 rounded-0 shadow mega-menu">
                <div class="container-fluid">
                  <div class="row">
                    <!-- Lista principal -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <ul class="list-unstyled text-uppercase">
                        <li
                          class="mb-2 ms-3 border-bottom"
                          v-for="serv in servicios"
                          :key="serv.nombre"
                          @mouseenter="handleMouseEnter(serv.nombre)"
                        >
                          <router-link
                            :to="serv.route"
                            class="nav-link fw-bold text-decoration-none d-flex align-items-center"
                            @click.stop
                          >
                            <i :class="serv.icono" class="mx-2"></i>{{ serv.nombre }}
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    <!-- Subcategorías -->
                    <div class="col-12 col-md-6 col-lg-8 mt-3 mt-md-0 hover-productos" v-if="showMegaMenu">
                      <div class="row">
                        <!-- Mostrar el título de la categoría activa -->
                        <div class="col-10 ms-3 mb-3 mt-3 border-bottom">
                          <h5 class="text-uppercase fw-bold">{{ activeServicio }}</h5>
                        </div>
                        <div class="col-12 col-lg-6" v-for="(grupo, index) in getServicios" :key="index">
                          <ul class="list-unstyled">
                            <li v-for="servicio in grupo" :key="servicio.nombre" class="mb-2">
                              <router-link :to="servicio.route" class="text-decoration-none sub-link">
                                <i :class="servicio.icono" class="mx-2" style="color: #FFFFFF;"></i> {{ servicio.nombre }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="">Soporte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase d-block d-lg-none" href="https://www.pbxhosting.com.mx/clientarea/" target="_blank">
                Mi Cuenta
              </a>
            </li>
          </ul>
          <div class="d-none d-lg-block">
            <a href="https://www.pbxhosting.com.mx/clientarea/" target="_blank" class="btn">Mi cuenta</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .header-pbx {
    background: var(--default_color);
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
    color: var(--secondary_color);
    transition: .4s all ease;
  }
  .mega-menu {
  left: 0 !important;
  right: 0 !important;
  top: 100% !important;
  z-index: 1000;
  width: 100% !important;
  max-width: 900px;
  margin: 0 auto;
}

/* Ajustes para pantallas menores a md (768px) */
@media (max-width: 767.98px) {
  .mega-menu {
    position: static !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 1rem;
  }

  .mega-menu .row {
    flex-direction: column;
  }

  .mega-menu .col-12 {
    margin-bottom: 1rem;
  }

  .mega-menu .nav-link {
    font-size: 1rem;
  }
}

.hover-productos {
  background-color: var(--secondary_color);
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
</style>
