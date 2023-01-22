import { css } from '@emotion/react';

export const storiesStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-2);
  overflow: hidden;
`;

export const hoverStyle = css`
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 71.88%,
    rgba(255, 255, 255, 0.74) 81.81%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const progressBarStyle = css`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 0 32px;
`;

export const imageStyle = css`
  top: 0;
  left: calc(0px - 50%);
  position: absolute;
  height: 100%;
`;

export const captionStyle = css`
  position: absolute;
  bottom: 24px;
  right: 40px;
  font-family: 'Helvetica Now Var';
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-align: right;
`;
