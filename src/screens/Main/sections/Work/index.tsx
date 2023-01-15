import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const { t } = useTranslation('work');

  return (
    <section>
      <h2>{t('section-title')}</h2>
      <h3>{t('work-title')}</h3>
      <p>
        {t('work-description.p1')}
        {t('work-description.p2')}
        {t('work-description.p3')}
        {t('work-description.p4')}
      </p>
      <button>{t('button-label')}</button>
    </section>
  );
};

export default Intro;
