import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// Resources
import intro from './en/intro.json';
import work from './en/work.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { intro, work },
  },
  debug: true,
  fallbackLng: 'en',
});
