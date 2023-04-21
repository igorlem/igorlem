import React from 'react';
import { HeadProvider } from 'react-head';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from 'screens';
import { GlobalStyleWrapper } from 'components';
import 'i18n/config';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

const App: React.FC = () => (
  <HeadProvider>
    <GlobalStyleWrapper>
      <RouterProvider router={router} />
    </GlobalStyleWrapper>
  </HeadProvider>
);

export default App;
