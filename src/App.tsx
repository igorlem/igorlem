import './i18n/config.ts';
import React from 'react';
import { HeadProvider } from 'react-head';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main, Error } from './screens';
import { GlobalStyleWrapper } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
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
