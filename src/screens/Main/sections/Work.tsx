import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const { t } = useTranslation('work');

  return (
    <section>
      <h1>{t('section-title')}</h1>
      <h2>{t('work-title')}</h2>
      <p>
        {t('work-description.p1')}
        {t('work-description.p2')}
        {t('work-description.p3')}
        {t('work-description.p4')}
      </p>
    </section>
  );
};

export default Intro;
