<template>
    <section class="bg-light py-5">
      <div class="container">
        <div class="board">
          <ul class="nav nav-tabs justify-content-between position-relative mb-0" role="tablist">
            <div class="liner"></div>
  
            <li
              v-for="(tab, index) in tabs"
              :key="tab.id"
              class="nav-item flex-fill text-center position-relative"
              :class="{ active: activeTab === index }"
            >
              <button
                class="nav-link rounded-circle mx-auto"
                :class="{ active: activeTab === index }"
                @click="setActiveTab(index)"
                type="button"
                role="tab"
              >
                <span :class="`round-tabs ${tab.color}`">
                  <i :class="tab.icon" class="mx-auto"></i>
                </span>
              </button>
            </li>
          </ul>
  
          <div class="tab-content p-4">
            <div
              v-for="(tab, index) in tabs"
              :key="tab.id"
              class="tab-pane fade"
              :class="{
                    show: activeTab === index || animatingTab === index,
                    active: activeTab === index,
                    'fade-in': activeTab === index && !isFadingOut,
                    'fade-out': animatingTab === index && isFadingOut
                }"
                >
              <h3 class="head text-center">{{ tab.title }}</h3>
              <p class="narrow text-center">{{ tab.content }}</p>
              <p class="text-center">
                <button class="btn btn-success btn-outline-rounded green">
                  Acción <i class="bi bi-send ms-2"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
    const activeTab = ref(0);
    const animatingTab = ref<number | null>(null);
    const isFadingOut = ref(false);

    const setActiveTab = (index: number) => {
    if (activeTab.value === index) return;

    isFadingOut.value = true;
    animatingTab.value = activeTab.value;

    setTimeout(() => {
        activeTab.value = index;
        isFadingOut.value = false;
    }, 500); // duración de la animación fadeOut
    };
  const tabs = [
    { id: 'telephone', title: 'Inicio', content: 'Contenido de inicio', icon: 'bi bi-telephone', color: 'one' },
    { id: 'diagram-3', title: 'Perfil', content: 'Contenido de perfil', icon: 'bi bi-diagram-3', color: 'two' },
    { id: 'arrow-up-right', title: 'Regalos', content: 'Contenido de regalos', icon: 'bi bi-arrow-up-right', color: 'three' },
    { id: 'telephone-fill', title: 'Comentarios', content: 'Contenido de comentarios', icon: 'bi bi-telephone-fill', color: 'four' },
    { id: 'cloud-arrow-up', title: 'Gracias', content: 'Contenido de agradecimiento', icon: 'bi bi-cloud-arrow-up', color: 'five' },
    { id: 'cloud-check', title: 'Ajustes', content: 'Contenido de ajustes', icon: 'bi bi-cloud-check', color: 'one' },
    { id: 'cloud', title: 'Estadísticas', content: 'Contenido de estadísticas', icon: 'bi bi-cloud', color: 'two' },
    { id: 'chat', title: 'Ayuda', content: 'Contenido de ayuda', icon: 'bi bi-chat', color: 'three' },
  ];
  </script>
  
  <style scoped>
  .board {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
  }
  .nav-tabs {
    border-bottom: none;
  }
  .liner {
    height: 2px;
    background: #ddd;
    position: absolute;
    width: 100%;
    top: 50%;
    z-index: 0;
  }
  .nav-tabs:hover ~ .liner {
  top: 65%;
}
  .nav-item {
    flex: 1;
  }
  .nav-link {
    width: 70px;
    height: 70px;
    padding: 0;
    background: transparent;
    position: relative;
    border: none;
  }
  .round-tabs {
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 100%;
    display: inline-block;
    font-size: 24px;
    background: white;
    position: relative;
    z-index: 2;
  }
  .round-tabs.one { color: green; border: 2px solid green; }
  .round-tabs.two { color: orange; border: 2px solid orange; }
  .round-tabs.three { color: #3e5e9a; border: 2px solid #3e5e9a; }
  .round-tabs.four { color: #f1685e; border: 2px solid #f1685e; }
  .round-tabs.five { color: #999; border: 2px solid #999; }
  
  .tab-content .head {
    font-size: 24px;
    font-weight: bold;
  }
  .narrow {
    max-width: 600px;
    margin: 1rem auto;
  }
  .btn-outline-rounded {
    padding: 10px 30px;
    border-radius: 25px;
  }

    /* Agrega estas clases en tu <style scoped> */
    .fade-in {
    animation: fadeIn 0.5s ease forwards;
    }

    .fade-out {
    animation: fadeOut 0.5s ease forwards;
    }

    @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
    }

  </style>
  