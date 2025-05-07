<!--<template>
  <div class="container py-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MegaMenu</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#megaNavbar"
          aria-controls="megaNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="megaNavbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown position-static">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collection
              </a>
              <div class="dropdown-menu w-100 shadow p-4 mt-0">
                <div class="row">
                  <!-- Column 1
                  <div class="col-lg-3">
                    <h6 class="text-primary">New in Stores</h6>
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="https://placehold.co/254x150/3498db/f5f5f5?text=New+Collection" class="d-block w-100" alt="...">
                          <h6 class="mt-2"><small>Summer dress floral prints</small></h6>
                          <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm">49,99 €</button>
                            <button class="btn btn-outline-secondary btn-sm">
                              <i class="bi bi-heart"></i> Add to Wishlist
                            </button>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="https://placehold.co/254x150/ef5e55/f5f5f5?text=New+Collection" class="d-block w-100" alt="...">
                          <h6 class="mt-2"><small>Gold sandals with shiny touch</small></h6>
                          <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm">9,99 €</button>
                            <button class="btn btn-outline-secondary btn-sm">
                              <i class="bi bi-heart"></i> Add to Wishlist
                            </button>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="https://placehold.co/254x150/2ecc71/f5f5f5?text=New+Collection" class="d-block w-100" alt="...">
                          <h6 class="mt-2"><small>Denim jacket stamped</small></h6>
                          <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm">49,99 €</button>
                            <button class="btn btn-outline-secondary btn-sm">
                              <i class="bi bi-heart"></i> Add to Wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <a href="#" class="text-decoration-none">
                      View all Collection <i class="bi bi-chevron-right float-end"></i>
                    </a>
                  </div>

                  <!-- Column 2
                  <div class="col-lg-3">
                    <h6 class="text-primary">Dresses</h6>
                    <ul class="list-unstyled">
                      <li><a href="#" class="dropdown-item">Unique Features</a></li>
                      <li><a href="#" class="dropdown-item">Image Responsive</a></li>
                      <li><a href="#" class="dropdown-item">Auto Carousel</a></li>
                      <li><a href="#" class="dropdown-item">Newsletter Form</a></li>
                      <li><a href="#" class="dropdown-item">Four columns</a></li>
                    </ul>
                    <hr>
                    <h6 class="text-primary">Tops</h6>
                    <ul class="list-unstyled">
                      <li><a href="#" class="dropdown-item">Good Typography</a></li>
                    </ul>
                  </div>

                  <!-- Column 3
                  <div class="col-lg-3">
                    <h6 class="text-primary">Jackets</h6>
                    <ul class="list-unstyled">
                      <li><a href="#" class="dropdown-item">Easy to customize</a></li>
                      <li><a href="#" class="dropdown-item">Bootstrap Icons</a></li>
                      <li><a href="#" class="dropdown-item">Pull Right Elements</a></li>
                    </ul>
                    <hr>
                    <h6 class="text-primary">Pants</h6>
                    <ul class="list-unstyled">
                      <li><a href="#" class="dropdown-item">Coloured Headers</a></li>
                      <li><a href="#" class="dropdown-item">Primary Buttons & Default</a></li>
                      <li><a href="#" class="dropdown-item">Calls to action</a></li>
                    </ul>
                  </div>

                  <!-- Column 4
                  <div class="col-lg-3">
                    <h6 class="text-primary">Accessories</h6>
                    <ul class="list-unstyled">
                      <li><a href="#" class="dropdown-item">Default Navbar</a></li>
                      <li><a href="#" class="dropdown-item">Lovely Fonts</a></li>
                      <li><a href="#" class="dropdown-item">Responsive Dropdown</a></li>
                    </ul>
                    <hr>
                    <h6 class="text-primary">Newsletter</h6>
                    <form @submit.prevent="onSubmit">
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                          v-model="email"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary btn-sm w-100">Sign up</button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h1 class="text-center display-4 mt-5">Bootstrap 5 Mega Menu</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

function onSubmit() {
  if (email.value) {
    alert(`Subscribed: ${email.value}`);
    email.value = '';
  }
}
</script>

<style scoped>
.dropdown-menu {
  top: 100%;
  left: 0;
  border-radius: 0;
}
</style>-->



<script setup lang="ts">
  import { computed } from 'vue';
  import { servicios, carruselItems } from '../data/header';

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const columnas = computed(() => {
    const total = servicios.length
    const chunk = Math.ceil(total / 3)
    return [
      servicios.slice(0, chunk),
      servicios.slice(chunk, chunk * 2),
      servicios.slice(chunk * 2)
    ]
  })
</script>

<template>
  <header class="header-pbx sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <router-link class="navbar-brand" to="/" @click="handleScrollToTop">
          <img src="/img/pbx-logo.webp" alt="Logo-pbx" class="w-100" />
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/nosotros" @click="handleScrollToTop">Nosotros</router-link>
            </li>

            <!-- Mega Menú -->
            <li class="nav-item dropdown position-static">
              <a class="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                Servicios
              </a>
              <div class="dropdown-menu w-100 shadow p-4 mt-0">
                <div class="row">
                  <!-- Columna 1: Carrusel -->
                  <div class="col-lg-3">
                    <h6 class="text-color fw-bold fs-5">Nuevos Promociones</h6>
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
                      Saber Más <i class="bi bi-chevron-right float-end"></i>
                    </a>
                  </div>

                  <!-- Columnas 2-4: Servicios -->
                  <div
                    v-for="(col, colIndex) in columnas"
                    :key="colIndex"
                    class="col-lg-3"
                  >
                    <div v-for="grupo in col" :key="grupo.nombre">
                      <h6 class="text-color fw-bold fs-5">{{ grupo.nombre }}</h6>
                      <ul class="list-unstyled">
                        <li v-for="sub in grupo.servicios" :key="sub.nombre">
                          <router-link class="dropdown-item" :to="sub.route">
                            <i :class="`bi ${sub.icono}`"></i> {{ sub.nombre }}
                          </router-link>
                        </li>
                        <li v-if="grupo.servicios.length === 0" class="text-muted ps-3">
                          Próximamente...
                        </li>
                      </ul>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" @click="handleScrollToTop">Soporte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#" @click="handleScrollToTop">Contacto</a>
            </li>
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link text-uppercase" href="https://www.pbxhosting.com.mx/clientarea/" target="_blank">Mi Cuenta</a>
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

.text-color {
  color: var(--secondary_color) !important;
}
</style>
