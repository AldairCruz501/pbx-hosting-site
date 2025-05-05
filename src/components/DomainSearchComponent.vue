<script lang="ts" setup>
import { ref, computed } from 'vue';
import SpinnerComponent from './SpinnerComponent.vue';
import axios from 'axios';

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
const showModal = ref(false);
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
    );

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

const closeModal = () => {
  showModal.value = false;
};

const filteredAlternatives = computed(() =>
  result.value?.alternatives.filter(
    (alt) => alt.domain !== result.value?.originalSearch
  ) ?? []
);
</script>

<template>
  <div class="text-center">
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
    <div class="text-center">
      <SpinnerComponent v-if="loading" />
    </div>
    <div v-if="errorMsg" class="alert alert-danger">
      {{ errorMsg }}
    </div>

    <!-- Modal -->
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
              El dominio <span class="fw-bold">{{ result?.originalSearch }}</span> está disponible:
              <div class="row">
                <div class="col-12 col-lg-5">
                  Contratación:
                  <span class="small fw-bold">
                    ${{ result?.alternatives[0]?.register ?? 'N/A' }} MXN + IVA
                  </span>
                </div>
                <div class="col-12 col-lg-5">
                  Renovación:
                  <span class="small fw-bold">
                    ${{ result?.alternatives[0]?.renew ?? 'N/A' }} MXN + IVA
                  </span>
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
</template>

<style scoped>
.btn-table {
  padding: 6px !important;
}
.text-domain {
  color: var(--secondary_color) !important;
}
</style>
