  
<script lang="ts" setup>
  import { ref } from 'vue';
  import { ipTelephonyData } from '../data/iptelephony';
  import { useI18n } from 'vue-i18n';

	const { t } = useI18n();

  const tabs = ipTelephonyData.steps

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
    }, 500);
  };
</script>
  
<template>
  <!--<section class="bg-light py-5">
    <div class="container">

    </div>
  </section>-->
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
            {{ tab.id }}. 
            <i :class="tab.icono" class="mx-auto"></i>
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
          <h3 class="head text-center">{{ t(tab.tituloKey) }}</h3>
          <p class="narrow text-center">{{ t(tab.contenidoKey) }}</p>
        </div>
      </div>
      </div>
</template>

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


  .round-tabs.one i { color: green; }
  .round-tabs.two i { color: orange; }
  .round-tabs.three i { color: #3e5e9a;}
  .round-tabs.four i { color: #f1685e;}
  .round-tabs.five i { color: #999; }
  
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
  