import { css } from '@emotion/react';

export const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 100vw;
  height: 100vh;
  padding: 80px;
`;

export const topStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const titleStyle = css`
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const subtitleStyle = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.015em;
  text-transform: lowercase;
  color: var(--foreground-2);
  font-weight: normal;
`;

export const developmentNoticeStyle = css`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-transform: lowercase;
`;
