<script lang="ts" setup>
import { ref } from 'vue';
import { cloudSwitchData } from '../data/cloudswitch';
import { useI18n } from 'vue-i18n';

const activeFundamental = ref('tab-1');
const { t } = useI18n();

</script>

<template>
  <section class="story-area">
    <div class="container">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <ul class="nav flex-md-column flex-row">
            <li v-for="fund in cloudSwitchData.functsSwitch" :key="fund.id" class="nav-item">
              <button
                class="nav-link text-center h-100"
                :class="{ active: activeFundamental === fund.id }"
                @click="activeFundamental = fund.id"
              >
                {{ t(fund.tituloKey) }}  <!-- <-- traducimos -->
              </button>
            </li>
          </ul>
        </div>

        <!-- Main Content -->
        <div class="col-12 col-md-8 col-lg-9">
          <div class="tab-content">
            <div
              v-for="fund in cloudSwitchData.functsSwitch"
              :key="fund.id"
              class="tab-pane"
              :class="{ active: activeFundamental === fund.id, show: activeFundamental === fund.id }"
            >
              <div class="row g-4">
                <div class="col-12 col-xl-6">
                  <div class="img-area">
                    <img :src="fund.imagen" alt="" class="img-fluid w-100" />
                  </div>
                </div>
                <div class="col-12 col-xl-6 content d-flex flex-column justify-content-center">
                  <h3 class="mt-3 mt-lg-0 fw-bold">{{ t(fund.encabezadoKey) }}</h3>  <!-- <-- traducimos -->
                  <p>{{ t(fund.contenidoKey) }}</p>  <!-- <-- traducimos -->
                  <audio v-if="fund.url" :src="fund.url" controls></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </section>
</template>

<style scoped>
.story-area {
  overflow: hidden;
  padding: 30px 0;
}

.story-area .img-area {
  overflow: hidden;
  border-radius: 5px;
}

.story-area .nav-link {
  border-radius: 0;
  border: 2px solid var(--primary_dark) !important;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s;
  color: #333;
}

.story-area .nav-link:hover {
  color: var(--primary_dark);
  border-right: 4px solid var(--primary_dark);
}

.story-area .nav-link.active {
  color: #fff;
  background: var(--primary_dark);
}

.story-area .tab-pane.active {
  animation: fadeIn 0.5s ease-out;
}

.story-area .content h3 {
  font-size: 26px;
  color: var(--primary_color);
}

.story-area .content p {
  color: #333;
}

.content a {
  padding: 10px 25px;
  display: inline-block;
  background: var(--primary_dark);
  color: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ajustes específicos para móviles */
@media (max-width: 768px) {
  .story-area {
    padding: 50px 0;
  }
}
</style>
