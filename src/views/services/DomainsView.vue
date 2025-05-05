<script lang="ts" setup>
	import DomainSearchComponent from '../../components/DomainSearchComponent.vue';
  import FooterComponent from '../../components/FooterComponent.vue';
	import HeaderComponent from '../../components/HeaderComponent.vue';
	import LoaderComponent from '../../components/LoaderComponent.vue';

</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="hero-home text-center text-md-start bg-body-tertiary">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 mb-4">
          <DomainSearchComponent />
		    </div>
				<div class="col-12 col-lg-6">
					<div class="hero-home-right position-relative">
						<img src="/img/img-hero-domain.png" class="w-100 h-100" alt="hero-img">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="homepage_tab position-relative">
  <div class="section container">
    <div class="row justify-content-center">
      <div class="col-lg-8 mb-4">
        <div class="section-title text-center">
          <p class="text-primary text-uppercase fw-bold mb-3 text-domain">Conoce lo Básico</p>
          <h2>Todo lo escencial que necesitas saber sobre dominios</h2>
        </div>
      </div>
      <div class="col-lg-10">
        <ul class="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
          <li class="nav-item m-2" role="presentation"> <a
              class="nav-link btn btn-outline-primary effect-none p-domain active" id="pills-how-much-can-i-recive-tab"
              data-bs-toggle="pill" href="#pills-how-much-can-i-recive" role="tab"
              aria-controls="pills-how-much-can-i-recive" aria-selected="true">¿Qué es un dominio Web?</a>
          </li>
          <li class="nav-item m-2" role="presentation"> <a
              class="nav-link btn btn-outline-primary effect-none p-domain" id="pills-how-much-does-it-costs-tab"
              data-bs-toggle="pill" href="#pills-how-much-does-it-costs" role="tab"
              aria-controls="pills-how-much-does-it-costs" aria-selected="true">Transferencia de Dominio</a>
          </li>
        </ul>
        <div class="rounded shadow bg-white p-5 tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-how-much-can-i-recive" role="tabpanel"
            aria-labelledby="pills-how-much-can-i-recive-tab">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">¿Qué es un dominio Web?</h3>
                  <div class="content">
                    <p>
											Es la dirección única y fácilmente reconocible que utilizamos para acceder a un sitio web en Internet. 
											Es la identificación exclusiva de un sitio y suele estar compuesto por un nombre y una extensión, como .com, .org o .net.
										</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                  <img loading="lazy" decoding="async"
                    src="/img/img-pill-tab-1.png" alt="How Much Can I Recive?" class="img-fluid mx-auto w-75">
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade " id="pills-how-much-does-it-costs" role="tabpanel"
            aria-labelledby="pills-how-much-does-it-costs-tab">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Transferencia de Dominio</h3>
                  <div class="content">
                    <p>
											Cambia de proveedor con confianza y disfruta de un mejor servicio y soporte. ¡Hazlo simple y sin complicaciones!
										</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                  <img loading="lazy" decoding="async" src="/img/img-pill-tab-2.png" alt="How Much Does It Costs?" class="img-fluid mx-auto w-75">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
	<FooterComponent />
</template>

<style scoped>
  .spinner-border {
    width: 3rem;
    height: 3rem;
		color: var(--secondary_color) !important;
  }
	.btn-table {
    padding: 6px !important;
  }
  .text-domain,
  .p-domain {
    color: var(--secondary_color) !important;
  }

  .p-domain:hover {
    color: var(--default_color) !important;
  }
</style>