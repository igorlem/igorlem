import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// Resources
import main from './en/main.json';
import work from './en/work.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { main, work },
  },
  debug: true,
});
