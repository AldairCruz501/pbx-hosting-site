<script lang="ts" setup>
import { ref } from 'vue';
import { cloudSwitchData } from '../data/cloudswitch';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: 'home3', label: 'cloudSwitch.monts.title' },
  { id: 'profile3', label: 'cloudSwitch.years.title' },
];

const activeTab = ref<string>('home3');

const selectTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<template>
  <div class="gradient-tabs">
    <ul class="nav nav-tabs justify-content-center" id="gradientTabs" role="tablist">
      <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab.id">
        <button
          class="nav-link"
          :class="{ active: activeTab === tab.id }"
          :id="`${tab.id}-tab`"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          @click="selectTab(tab.id)"
        >
          {{ t(tab.label) }}
        </button>
      </li>
    </ul>

    <div class="tab-content" id="gradientTabsContent">
      <div
        class="tab-pane fade"
        :class="{ show: activeTab === 'home3', active: activeTab === 'home3' }"
        id="home3"
        role="tabpanel"
      >
        <div class="container py-5">
          <div class="row g-4 justify-content-center">
            <div
                class="col-12 col-sm-10 col-md-6 col-lg-4 card-efect"
                v-for="(price,index) in cloudSwitchData.monts"
                :key="index"
            >
              <div class="card card-price h-100 d-flex flex-column p-3 shadow-sm border-color">
                <div class="card-body d-flex flex-column align-items-center text-center">
                  <h5 class="card-title fs-4 mb-3">{{ t(price.tituloKey) }}</h5>
                  <h4 class="fw-bold fs-1">
                      ${{ price.precio }}
                      <small class="text-muted fs-6">{{ t('cloudSwitch.monts.price') }}</small>
                  </h4>
                  <p class="text-muted mb-3 fs-4">{{ t('cloudSwitch.monts.plan') }}</p>
                  <span class="text-muted mb-4">SetUp ${{ price.setup }} <small class="text-muted fs-6">{{ t('cloudSwitch.monts.price') }}</small></span>

                  <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid">{{ t('cloudSwitch.monts.button') }}</a>
                  <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none">{{ t('cloudSwitch.monts.button') }}</a>
                  <ul class="list-unstyled text-start w-100">
                    <li
                      v-for="(feature, i) in price.caracteristicasKey"
                      :key="i"
                      class="mb-2 d-flex align-items-start"
                    >
                      <i class="bi bi-check-circle-fill text-value me-2 mt-1"></i>
                      <span>{{ t(feature) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        :class="{ show: activeTab === 'profile3', active: activeTab === 'profile3' }"
        id="profile3"
        role="tabpanel"
      >
        <div class="container py-5">
          <div class="row g-4 justify-content-center">
            <div
                class="col-12 col-sm-10 col-md-6 col-lg-4 card-efect"
                v-for="(price,index) in cloudSwitchData.years"
                :key="index"
            >
              <div class="card card-price h-100 d-flex flex-column p-3 shadow-sm border-color">
                <div class="card-body d-flex flex-column align-items-center text-center">
                  <h5 class="card-title fs-4 mb-3">{{ t(price.tituloKey) }}</h5>
                  <h4 class="fw-bold fs-1">
                      ${{ price.precio }}
                      <small class="text-muted fs-6">{{ t('cloudSwitch.monts.price') }}</small>
                  </h4>
                  <p class="text-muted mb-3 fs-4">{{ t('cloudSwitch.monts.plan') }}</p>
                  <span class="text-muted mb-4">SetUp ${{ price.setup }} <small class="text-muted fs-6">{{ t('cloudSwitch.monts.price') }}</small></span>

                  <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid">{{ t('cloudSwitch.monts.button') }}</a>
                  <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none">{{ t('cloudSwitch.monts.button') }}</a>
                  <ul class="list-unstyled text-start w-100">
                    <li
                      v-for="(feature, i) in price.caracteristicasKey"
                      :key="i"
                      class="mb-2 d-flex align-items-start"
                    >
                      <i class="bi bi-check-circle-fill text-value me-2 mt-1"></i>
                      <span>{{ t(feature) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-tabs {
  background: linear-gradient(145deg, #027373, #337b7e);
  padding: 2rem;
  border-radius: 1rem;
}

.gradient-tabs .nav-tabs {
  border: none;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.gradient-tabs .nav-link {
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.gradient-tabs .nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.gradient-tabs .nav-link.active {
  background: white;
  color: #027373;
}

.gradient-tabs .tab-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.tab-pane.fade {
  transition: all 0.2s ease-out;
}

.tab-pane.fade.show {
  animation: fadeIn 0.5s ease-out;
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
