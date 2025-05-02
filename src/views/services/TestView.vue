<template>
    <LoaderComponent />
    <HeaderComponent />
    <div class="container mt-4">
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
  
    </div>
    <FooterComponent />
  </template>
  
  <script setup lang="ts">
  	import FooterComponent from '../../components/FooterComponent.vue';
	import HeaderComponent from '../../components/HeaderComponent.vue';
	import LoaderComponent from '../../components/LoaderComponent.vue';

  import { ref } from 'vue';
  import axios from 'axios';

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
            '/dominios/getDomainInfoTest.php',
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
  
  <style scoped>

  .spinner-border {
    width: 3rem;
    height: 3rem;
  }
  .btn {
    padding: 6px !important;
  }
  </style>
  