import React from 'react';
import { Global } from '@emotion/react';
import styles from './styles';

type Props = React.PropsWithChildren;

const GlobalStyleWrapper: React.FC<Props> = ({ children }) => (
  <>
    <Global styles={styles} />
    {children}
  </>
);

export default GlobalStyleWrapper;
