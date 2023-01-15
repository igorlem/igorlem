import './i18n/config.ts';
import React from 'react';
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
  <GlobalStyleWrapper>
    <RouterProvider router={router} />
  </GlobalStyleWrapper>
);

export default App;
