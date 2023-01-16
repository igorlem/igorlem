import { css } from '@emotion/react';

export const stepStyle = css`
  flex: 1;
  height: 2px;
  border-radius: 1px;
  overflow: hidden;
  background-color: var(--foreground-3);
`;

export const stepActiveStyle = css`
  background-color: var(--foreground-1);
`;

export const progressStyle = css`
  height: 2px;
  background-color: var(--foreground-1);
`;
