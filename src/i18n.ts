import { createI18n } from "vue-i18n";
import es from "./locales/es";
import en from "./locales/en";

// Leer idioma guardado en localStorage o fallback a 'es'
const savedLocale = localStorage.getItem('locale') || 'es'

const messages = {
  en,
  es,
}

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'es',
  messages,
})