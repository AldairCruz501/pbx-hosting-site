<script lang="ts" setup>
import { ref } from 'vue';

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: 'home3', label: 'Mensual' },
  { id: 'profile3', label: 'Anual' },
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
          {{ tab.label }}
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
                
                
            >
              <div class="card card-price h-100 d-flex flex-column p-3 shadow-sm border-color">
                <div class="card-body d-flex flex-column align-items-center text-center">
                  <h5 class="card-title fs-4 mb-3"></h5>
                  <h4 class="fw-bold fs-1">
                      $
                      <small class="text-muted fs-6"></small>
                  </h4>
                  <p class="text-muted mb-4"></p>
                  <a href="#" class="btn btn-light border-0 fw-semibold w-50 mb-4 d-none d-lg-inline-grid"></a>
                  <a href="#" class="btn btn-light border-0 fw-semibold w-100 mb-4 d-inline-grid d-lg-none"></a>
                  <ul class="list-unstyled text-start w-100">
                    <li

                      class="mb-2 d-flex align-items-start"
                    >
                      <i class="bi bi-check-circle-fill text-value me-2 mt-1"></i>
                      <span></span>
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
        <h4>Profile Content</h4>
        <p>This is the profile tab content with gradient style.</p>
      </div>

      <div
        class="tab-pane fade"
        :class="{ show: activeTab === 'contact3', active: activeTab === 'contact3' }"
        id="contact3"
        role="tabpanel"
      >
        <h4>Contact Content</h4>
        <p>This is the contact tab content with gradient style.</p>
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
</style>
