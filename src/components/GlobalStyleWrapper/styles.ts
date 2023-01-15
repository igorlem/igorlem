import { css } from '@emotion/react';

export default css`
  :root {
    --background: #fff;
    --foreground: #111;

    @media (prefers-color-scheme: dark) {
      --background: #111;
      --foreground: #fff;
    }
  }
`;
