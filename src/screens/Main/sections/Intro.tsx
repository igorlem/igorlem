import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const { t } = useTranslation('intro');

  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
    </section>
  );
};

export default Intro;
