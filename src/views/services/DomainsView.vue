<script lang="ts" setup>
	import FooterComponent from '../../components/FooterComponent.vue';
	import HeaderComponent from '../../components/HeaderComponent.vue';
	import LoaderComponent from '../../components/LoaderComponent.vue';
	import { ref, computed } from 'vue';
  import axios from 'axios';

		const filteredAlternatives = computed(() =>
		result.value?.alternatives.filter(
			(alt) => alt.domain !== result.value?.originalSearch
		) ?? []
	);


  const showModal = ref(false);

	const closeModal = () => {
		showModal.value = false;
	};
  
  interface DomainResult {
    success: boolean;
    inputStatus: 'available' | 'unavailable';
    originalSearch: string;
    alternatives: {
      domain: string;
      register: number;
      renew: number;
    }[];
  }
  
  const search = ref('');
  const loading = ref(false);
  const result = ref<DomainResult | null>(null);
  const errorMsg = ref('');
  
  const searchDomain = async () => {
    loading.value = true;
    result.value = null;
    errorMsg.value = '';
  
    try {
      const formData = new FormData();
      formData.append('search', search.value.trim());
  
        const { data } = await axios.post<DomainResult>(
          'https://www.pbxhosting.com.mx/dominios/getDomainInfoTest.php',
          formData
        )
  
      if (!data.success) {
        errorMsg.value = 'Ocurrió un error en la búsqueda.';
        return;
      }
  
      result.value = data;
      showModal.value = true;

    } catch (error) {
      errorMsg.value = 'Error al conectarse con el servidor.';
      console.error(error);
    } finally {
      loading.value = false;
    }
  };
</script>

<template>
	<LoaderComponent />
	<HeaderComponent />
	<section class="hero-home text-center text-md-start bg-body-tertiary">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6 mb-4 text-center">
          <h1 class="display-5 fw-bold">
            Encuentra tu <span class="text-domain">Dominio</span> Ideal
          </h1>
					<form @submit.prevent="searchDomain">
						<div class="input-group mb-3">
							<input
								type="text"
								v-model="search"
								class="form-control"
								placeholder="Buscar dominio (ej. ejemplo.com)"
								required
							/>
							<button class="btn btn-primary" type="submit" :disabled="loading">
								Buscar
							</button>
						</div>
      		</form>
					<div v-if="loading" class="text-center my-3">
        		<div class="spinner-border text-primary" role="status"></div>
     			</div>
					<div v-if="errorMsg" class="alert alert-danger">
						{{ errorMsg }}
					</div>
					<div
        class="modal fade show"
        tabindex="-1"
        style="display: block; background-color: rgba(0, 0, 0, 0.5);"
        v-if="showModal"
        role="dialog"
    >
  <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">
                Resultado para: <strong>{{ result?.originalSearch }}</strong>
            </h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Cerrar"></button>
        </div>
      <div class="modal-body">
        <div v-if="result?.inputStatus === 'available'" class="alert alert-success">
            El dominio <span class="fw-bold">{{ result?.originalSearch }}</span> esta disponible:
            <div class="row">
                <div class="col-12 col-lg-5">
                    Contratación: <span class="small fw-bold">${{ result?.alternatives[0]?.register ?? 'N/A' }} MXN + IVA</span>
                </div>
                <div class="col-12 col-lg-5">
                    Renovación: <span class="small fw-bold">${{ result?.alternatives[0]?.renew ?? 'N/A' }} MXN + IVA</span>
                </div>
                <div class="col-12 col-lg-2">
                    <a
                    class="text-decoration-none text-success"
                    :href="`https://www.pbxhosting.com.mx/billing/cart.php?a=add&domain=register&tld=${result?.originalSearch}`"
                    target="_blank"
                    >
                        Seleccionar
                    </a>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-warning">
          El dominio no está disponible
        </div>
        <div class="mt-4">
          <h5>Extensiones disponibles para tu Dominio:</h5>
          <div class="table-responsive">
            <table class="table table-bordered align-middle">
              <thead class="table-light">
                <tr class="text-center">
                  <th>Extensión</th>
                  <th>Contratación</th>
                  <th>Renovación</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
								<template v-if="filteredAlternatives.length">
								<tr v-for="dom in filteredAlternatives" :key="dom.domain">
									<td>{{ dom.domain }}</td>
									<td>${{ dom.register }} MXN + IVA</td>
									<td>${{ dom.renew }} MXN + IVA</td>
									<td>
										<a
											class="btn btn-sm btn-outline-primary btn-table"
											:href="`https://www.pbxhosting.com.mx/billing/cart.php?a=add&domain=register&tld=${dom.domain}`"
											target="_blank"
										>
											Seleccionar
										</a>
									</td>
								</tr>
							</template>
							<tr v-else>
								<td colspan="4" class="text-center">No hay dominios disponibles.</td>
							</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
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
          <p class="text-primary text-uppercase fw-bold mb-3">Conoce lo Básico</p>
          <h2>Todo lo escencial que necesitas saber sobre dominios</h2>
        </div>
      </div>
      <div class="col-lg-10">
        <ul class="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
          <li class="nav-item m-2" role="presentation"> <a
              class="nav-link btn btn-outline-primary effect-none text-dark active" id="pills-how-much-can-i-recive-tab"
              data-bs-toggle="pill" href="#pills-how-much-can-i-recive" role="tab"
              aria-controls="pills-how-much-can-i-recive" aria-selected="true">¿Qué es un dominio Web?</a>
          </li>
          <li class="nav-item m-2" role="presentation"> <a
              class="nav-link btn btn-outline-primary effect-none text-dark " id="pills-how-much-does-it-costs-tab"
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
  .text-domain {
    color: var(--secondary_color) !important;
  }
</style>