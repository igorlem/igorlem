import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionStyle,
  leftColumnStyle,
  textWrapperStyle,
  titleStyle,
  workTitleStyle,
  workDescriptionStyle,
  rightColumnStyle,
} from './styles';
import { StoriesPlayer } from '../../../../components';
import testImage from '../../../../assets/testImage.svg';
import testImage2 from '../../../../assets/testImage2.png';

const Work: React.FC = () => {
  const { t } = useTranslation('work');

  const workStories = [
    { n: 1, label: t('stories.label-1'), image: testImage },
    { n: 2, label: t('stories.label-2'), image: testImage2 },
    { n: 3, label: t('stories.label-3'), image: testImage },
    { n: 4, label: t('stories.label-4'), image: testImage2 },
    { n: 5, label: t('stories.label-5'), image: testImage },
    { n: 6, label: t('stories.label-6'), image: testImage2 },
    { n: 7, label: t('stories.label-7'), image: testImage },
    { n: 8, label: t('stories.label-8'), image: testImage2 },
    { n: 9, label: t('stories.label-9'), image: testImage },
    { n: 10, label: t('stories.label-10'), image: testImage2 },
  ];

  return (
    <section css={sectionStyle}>
      <div css={leftColumnStyle}>
        <div css={textWrapperStyle}>
          <h2 css={titleStyle}>{t('section-title')}</h2>

          <h3 css={workTitleStyle}>{t('work-title')}</h3>

          <p css={workDescriptionStyle}>
            <span>{t('work-description.p1')}</span>
            <span>{t('work-description.p2')}</span>
            <span>{t('work-description.p3')}</span>
            <span>{t('work-description.p4')}</span>
          </p>
        </div>

        <button>{t('button-label')}</button>
      </div>

      <div css={rightColumnStyle}>
        <StoriesPlayer stories={workStories} />
      </div>
    </section>
  );
};

export default Work;
