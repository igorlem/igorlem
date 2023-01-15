import React from 'react';
import { useTranslation } from 'react-i18next';
import { sectionStyle } from '../Intro/styles';

const Intro: React.FC = () => {
  const { t } = useTranslation('intro');

  return (
    <section css={sectionStyle}>
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
      <button>{t('button-label')}</button>
    </section>
  );
};

export default Intro;
