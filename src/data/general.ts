import type { CounterItem } from "../interfaces/General"

export const counters: CounterItem[] = [
  { id: 'counter1', endVal: 100000000, suffix: '+', label: 'De minutos mensuales', format: 'millones' },
  { id: 'counter2', endVal: 99.99, suffix: '%', label: 'Disponibilidad efectiva' },
  { id: 'counter3', endVal: 10, suffix: '+', label: 'Años de experiencia' },
  { id: 'counter4', endVal: 5000, suffix: '+', label: 'Clientes satisfechos' }
]