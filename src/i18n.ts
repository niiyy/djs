import fr from './locales/fr.json'
import en from './locales/en.json'
import i18n from 'i18next'

const resources = {
  fr,
  en,
} as const

i18n.init({
  lng: 'fr',
  fallbackLng: 'en',
  debug: false,
  resources,
})

export default i18n
