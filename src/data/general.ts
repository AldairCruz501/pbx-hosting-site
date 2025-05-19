import type { CounterItem } from "../interfaces/General"

export const counters: CounterItem[] = [
  { id: 'counter1', endVal: 100000000, suffix: '+', labelKey: 'general.counter.0.label', format: 'millones' },
  { id: 'counter2', endVal: 99.99, suffix: '%', labelKey: 'general.counter.1.label' },
  { id: 'counter3', endVal: 10, suffix: '+', labelKey: 'general.counter.2.label' },
  { id: 'counter4', endVal: 5000, suffix: '+', labelKey: 'general.counter.3.label' }
]