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
import workImage1 from 'assets/work/1.svg';
import workImage2 from 'assets/work/2.png';
import workImage3 from 'assets/work/3.png';

const Work: React.FC = () => {
  const { t } = useTranslation();

  const workStories = [
    { n: 1, label: t('work.story.1'), image: workImage1 },
    { n: 2, label: t('work.story.2'), image: workImage2 },
    { n: 3, label: t('work.story.3'), image: workImage3 },
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
