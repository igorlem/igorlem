import React from 'react';
import {
  mainStyle,
  topStyle,
  titleStyle,
  subtitleStyle,
  developmentNoticeStyle,
} from './styles';
import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main css={mainStyle}>
      <div css={topStyle}>
        <h1 css={titleStyle}>{t('title')}</h1>
        <h2 css={subtitleStyle}>
          {t('lead.1')}
          <br />
          {t('lead.2')}
        </h2>
      </div>
      <p css={developmentNoticeStyle}>{t('dev-notice')}</p>
    </main>
  );
};

export default Main;
