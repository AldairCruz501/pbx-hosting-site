<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { CountUp } from 'countup.js';
import type { CounterItem } from '../interfaces/General';
import { counters as counterData } from '../data/general';

const counters = ref<CounterItem[]>(counterData)
const animated = ref<Set<string>>(new Set()) 

const animateCounter = (counter: CounterItem) => {
  if (animated.value.has(counter.id)) return

  const options = {
    suffix: counter.suffix || '',
    decimalPlaces: counter.endVal % 1 !== 0 ? 2 : 0,
    duration: 3,
  }
  const countUp = new CountUp(counter.id, counter.endVal, options)
  if (!countUp.error) {
    countUp.start()
    animated.value.add(counter.id)
  } else {
    console.error(countUp.error)
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const counter = counters.value.find(c => c.id === id)
          if (counter) animateCounter(counter)
        }
      })
    },
    {
      threshold: 0.5,
    }
  )

  counters.value.forEach((counter) => {
    const el = document.getElementById(counter.id)
    if (el) observer.observe(el)
  })
})
</script>

<template>
	<section class="counter-section">
	  <div class="container">
		<div class="row">
		  <div
			v-for="(counter, index) in counters"
			:key="index"
			class="col-6 col-lg-3 text-center mb-4 mb-lg-0"
		  >
			<div class="counter">
			  <h2 :id="counter.id" class="fw-bold display-6"></h2>
			  <h4 class="mb-0">{{ counter.label }}</h4>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  </template>

<style scoped>
    .counter-section {
		background: linear-gradient(12deg, rgba(252, 82, 76, 0.959) 40%, rgba(228, 55, 69, 0.95) 100%), url('/img/counter_bg.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.counter {
		padding: 47px 0px;
		border-radius: 5px;
		border: 1px dashed rgba(255, 255, 255, 0.25);
	}
	.counter h2 {
		color: var(--default_color);
		margin-bottom: 20px;
	}
	.counter h4 {
		color: var(--default_color);
	}
</style>