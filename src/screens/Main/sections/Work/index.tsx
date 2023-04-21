import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionStyle,
  leftColumnStyle,
  textWrapperStyle,
  titleStyle,
  positionStyle,
  workDescriptionStyle,
  rightColumnStyle,
} from './styles';
import { StoryPlayer } from 'components';
import testImage from 'assets/work/testImage.svg';

const Work: React.FC = () => {
  const { t } = useTranslation();

  const workStories = [
    { n: 1, label: t('work.story.1'), image: testImage },
    { n: 2, label: t('work.story.2'), image: testImage },
    { n: 3, label: t('work.story.3'), image: testImage },
  ];

  return (
    <section css={sectionStyle}>
      <div css={leftColumnStyle}>
        <div css={textWrapperStyle}>
          <h2 css={titleStyle}>{t('work.title')}</h2>

          <h3 css={positionStyle}>{t('work.position')}</h3>

          <p css={workDescriptionStyle}>
            <span>{t('work.description.p1')}</span>
            <span>{t('work.description.p2')}</span>
            <span>{t('work.description.p3')}</span>
            <span>{t('work.description.p4')}</span>
          </p>
        </div>

        <button>{t('work.next-button')}</button>
      </div>

      <div css={rightColumnStyle}>
        <StoryPlayer stories={workStories} />
      </div>
    </section>
  );
};

export default Work;
